#!/usr/bin/env python3
"""HSBC Social Listening v3 — Keyword Explorer pipeline.

Pull Xiaohongshu notes via Just One (search-note/v2), optionally analyse with
DeepSeek, write a static analysis page under v3/analyses/{slug}/.

Usage:
  export JUSTONE_API_KEY=...          # or JUSTONE_API_TOKEN
  export DEEPSEEK_API_KEY=...         # optional; placeholder analysis if missing
  python3 run_keyword_analysis.py --keywords "ODI,837 号令"
  python3 run_keyword_analysis.py --keywords-file keywords.txt

Never logs API keys.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timedelta, timezone
from pathlib import Path

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------
PIPELINE_DIR = Path(__file__).resolve().parent
V3_DIR = PIPELINE_DIR.parent
ANALYSES_DIR = V3_DIR / "analyses"
CATALOG_PATH = ANALYSES_DIR / "index.json"
SEEN_PATH = PIPELINE_DIR / "seen_ids.json"

# Import / reuse Just One helpers from integrations
INTEGRATIONS = V3_DIR.parent / "integrations"
sys.path.insert(0, str(INTEGRATIONS))
try:
    from justone_xhs_search import (  # type: ignore
        extract_list,
        fetch_page,
        normalize_item,
    )
except ImportError:
    print("ERROR: cannot import justone_xhs_search from integrations/", file=sys.stderr)
    raise


def _load_box_card_secrets() -> None:
    """Fallback when secret-request did not inject into Shell env."""
    path = Path('/home/box/sand-data/box-secrets.json')
    if not path.exists():
        return
    try:
        card = (json.loads(path.read_text(encoding='utf-8')).get('card') or {})
    except Exception:
        return
    for name in ('DEEPSEEK_API_KEY', 'JUSTONE_API_KEY', 'JUSTONE_API_TOKEN'):
        val = card.get(name)
        if isinstance(val, str) and val.strip() and not os.environ.get(name):
            os.environ[name] = val


HKT = timezone(timedelta(hours=8))
DEEPSEEK_URL = "https://api.deepseek.com/chat/completions"
DEEPSEEK_MODEL = "deepseek-chat"


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
def now_hkt() -> datetime:
    return datetime.now(HKT)


def slugify(keywords: list[str]) -> str:
    base = "-".join(k.strip() for k in keywords if k.strip())
    # Keep CJK, alnum, hyphens; collapse others
    s = re.sub(r"[^\w\u4e00-\u9fff\-]+", "-", base, flags=re.UNICODE)
    s = re.sub(r"-+", "-", s).strip("-").lower()
    if not s:
        s = "analysis"
    if len(s) > 60:
        s = s[:60].rstrip("-")
    # Ensure uniqueness-friendly short hash suffix when very short / collision risk
    return s


def load_json(path: Path, default):
    if path.exists():
        try:
            return json.loads(path.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            return default
    return default


def save_json(path: Path, data) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")


def load_seen() -> set[str]:
    data = load_json(SEEN_PATH, {"note_ids": []})
    return set(data.get("note_ids") or [])


def save_seen(ids: set[str]) -> None:
    save_json(SEEN_PATH, {"note_ids": sorted(ids), "updated_at": now_hkt().isoformat()})


def parse_keywords(args) -> list[str]:
    kws: list[str] = []
    if args.keywords:
        for chunk in args.keywords:
            for part in re.split(r"[,，]", chunk):
                part = part.strip()
                if part:
                    kws.append(part)
    if args.keywords_file:
        p = Path(args.keywords_file)
        if p.exists():
            for ln in p.read_text(encoding="utf-8").splitlines():
                ln = ln.strip()
                if ln and not ln.startswith("#"):
                    kws.append(ln)
    # dedupe preserve order
    seen = set()
    out = []
    for k in kws:
        if k not in seen:
            seen.add(k)
            out.append(k)
    return out


# ---------------------------------------------------------------------------
# Just One search
# ---------------------------------------------------------------------------
def search_keywords(
    token: str,
    keywords: list[str],
    note_time: str = "HALF_YEAR",
    pages: int = 1,
    sleep: float = 1.0,
) -> list[dict]:
    posts: list[dict] = []
    for kw in keywords:
        for page in range(1, pages + 1):
            print(f"[justone] keyword={kw!r} page={page} noteTime={note_time}", flush=True)
            try:
                payload = fetch_page(token, kw, page, sort="general", note_time=note_time)
            except Exception as e:
                print(f"  ERROR fetch: {e}", file=sys.stderr)
                continue
            code = payload.get("code")
            if code not in (0, "0", None):
                msg = payload.get("message") or payload.get("msg") or ""
                print(f"  business code={code} msg={msg}", flush=True)
            items = extract_list(payload)
            print(f"  items={len(items)}", flush=True)
            for it in items:
                post = normalize_item(it if isinstance(it, dict) else {}, kw)
                if post:
                    # Strip bulky raw before saving analysis pages
                    post.pop("_raw_note", None)
                    posts.append(post)
            time.sleep(sleep)
    # Dedupe by note_id within this pull
    by_id: dict[str, dict] = {}
    for p in posts:
        nid = str(p.get("note_id") or p.get("id") or "")
        if not nid:
            continue
        if nid not in by_id:
            by_id[nid] = p
    return list(by_id.values())


# ---------------------------------------------------------------------------
# DeepSeek analysis
# ---------------------------------------------------------------------------
def build_deepseek_prompt(keywords: list[str], posts: list[dict], max_posts: int = 40) -> str:
    lines = []
    for i, p in enumerate(posts[:max_posts], 1):
        title = (p.get("title") or "")[:80]
        summary = (p.get("summary") or "")[:160]
        likes = (p.get("engagement") or {}).get("likes", 0)
        lines.append(f"{i}. 【{title}】 {summary} (赞{likes})")
    body = "\n".join(lines) if lines else "（无帖子）"
    return f"""你是汇丰香港商业银行社交聆听分析师。请基于以下小红书公开笔记样本（关键词：{', '.join(keywords)}），用简体中文输出结构化分析。

要求输出 Markdown，包含以下章节（标题必须保留）：
## 执行摘要
## 诊疗模型
### 症状
### 诊断
### 处置
### 随访
## 主题与叙事
## 风险
## 机会
## 建议监测关键词

样本（标题/摘要，已截断）：
{body}
"""


def call_deepseek(api_key: str, prompt: str, timeout: int = 120) -> str:
    payload = {
        "model": DEEPSEEK_MODEL,
        "messages": [
            {"role": "system", "content": "你是专业的商业银行社交聆听分析助手，回答使用简体中文 Markdown。"},
            {"role": "user", "content": prompt},
        ],
        "temperature": 0.4,
        "max_tokens": 2500,
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        DEEPSEEK_URL,
        data=data,
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {api_key}",
            "User-Agent": "HSBC-KeywordExplorer/3.0",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        raw = resp.read().decode("utf-8", errors="replace")
    obj = json.loads(raw)
    choices = obj.get("choices") or []
    if not choices:
        return "（DeepSeek 返回空结果）"
    msg = choices[0].get("message") or {}
    return str(msg.get("content") or "").strip() or "（DeepSeek 无内容）"


def placeholder_analysis(keywords: list[str], post_count: int) -> str:
    kw = "、".join(keywords)
    return f"""## 执行摘要

已收集关键词「{kw}」相关公开笔记 **{post_count}** 条。**DeepSeek 分析未执行**：请设置环境变量 `DEEPSEEK_API_KEY` 后重新运行流水线以生成完整管理层分析。

## 诊疗模型

### 症状
（待 DeepSeek）当前仅完成检索与帖子归档。

### 诊断
（待 DeepSeek）

### 处置
（待 DeepSeek）设置 `DEEPSEEK_API_KEY` 后重跑：
`python3 run_keyword_analysis.py --keywords "{','.join(keywords)}"`

### 随访
（待 DeepSeek）建议持续监测下列关键词，并增量合并 `seen_ids.json`。

## 主题与叙事
（待 DeepSeek）请先审阅下方帖子表中的原标题与摘要。

## 风险
（待 DeepSeek）

## 机会
（待 DeepSeek）

## 建议监测关键词
- {kw}
- （DeepSeek 将补充扩展词）
"""


# ---------------------------------------------------------------------------
# HTML rendering
# ---------------------------------------------------------------------------
def md_to_simple_html(md: str) -> str:
    """Minimal Markdown → HTML (headings, lists, paragraphs). No external deps."""
    lines = md.splitlines()
    out: list[str] = []
    in_ul = False

    def close_ul():
        nonlocal in_ul
        if in_ul:
            out.append("</ul>")
            in_ul = False

    for ln in lines:
        s = ln.rstrip()
        if not s.strip():
            close_ul()
            continue
        if s.startswith("### "):
            close_ul()
            out.append(f"<h4>{escape(s[4:].strip())}</h4>")
        elif s.startswith("## "):
            close_ul()
            out.append(f"<h3>{escape(s[3:].strip())}</h3>")
        elif s.startswith("# "):
            close_ul()
            out.append(f"<h2>{escape(s[2:].strip())}</h2>")
        elif re.match(r"^[-*]\s+", s):
            if not in_ul:
                out.append("<ul>")
                in_ul = True
            out.append(f"<li>{inline_md(s[2:].strip())}</li>")
        elif re.match(r"^\d+\.\s+", s):
            if not in_ul:
                out.append("<ul>")
                in_ul = True
            out.append(f"<li>{inline_md(re.sub(r'^\\d+\\.\\s+', '', s))}</li>")
        else:
            close_ul()
            out.append(f"<p>{inline_md(s)}</p>")
    close_ul()
    return "\n".join(out)


def inline_md(s: str) -> str:
    s = escape(s)
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"`(.+?)`", r"<code>\1</code>", s)
    return s


def escape(s: str) -> str:
    return (
        str(s)
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def render_analysis_html(
    *,
    title: str,
    keywords: list[str],
    created_at: str,
    posts: list[dict],
    analysis_md: str,
    deepseek_used: bool,
    slug: str,
) -> str:
    analysis_html = md_to_simple_html(analysis_md)
    rows = []
    for p in posts:
        cover = p.get("cover_url") or ""
        url = p.get("url") or ""
        title_sc = p.get("title") or "（无标题）"
        summary = p.get("summary") or ""
        nick = p.get("author_nickname") or ""
        pub = p.get("published_at") or ""
        eng = p.get("engagement") or {}
        likes = eng.get("likes", 0)
        cover_cell = (
            f'<img src="{escape(cover)}" alt="" loading="lazy" style="width:64px;height:64px;object-fit:cover;border-radius:2px"/>'
            if cover
            else '<span style="color:#999;font-size:0.7rem">—</span>'
        )
        open_cell = (
            f'<a class="btn btn-ghost" style="padding:4px 10px;font-size:0.72rem" href="{escape(url)}" target="_blank" rel="noopener">打开小红书</a>'
            if url
            else "—"
        )
        rows.append(
            f"""<tr>
  <td>{cover_cell}</td>
  <td><div style="font-weight:600;font-size:0.85rem">{escape(title_sc)}</div>
      <div style="font-size:0.75rem;color:#666;margin-top:4px">{escape(summary[:180])}</div>
      <div style="font-size:0.7rem;color:#999;margin-top:4px">{escape(nick)} · {escape(pub)} · 赞 {likes}</div>
  </td>
  <td>{open_cell}</td>
</tr>"""
        )
    rows_html = "\n".join(rows) if rows else '<tr><td colspan="3" style="color:#999">暂无帖子</td></tr>'
    ds_badge = (
        '<span style="font-size:0.65rem;background:#e6f5ec;color:#0a7a3e;padding:2px 8px;border-radius:999px;margin-left:8px">DeepSeek</span>'
        if deepseek_used
        else '<span style="font-size:0.65rem;background:#fff3cd;color:#856404;padding:2px 8px;border-radius:999px;margin-left:8px">待 DeepSeek</span>'
    )
    kw_str = " · ".join(keywords)
    return f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>{escape(title)} · HSBC Keyword Explorer</title>
<link rel="stylesheet" href="../../shared/theme.css"/>
<style>
  .analysis-body h3 {{ margin:20px 0 8px; font-size:0.95rem; color:#1e1e1e; border-bottom:1px solid #eee; padding-bottom:6px; }}
  .analysis-body h4 {{ margin:14px 0 6px; font-size:0.85rem; color:#DB0011; }}
  .analysis-body p {{ font-size:0.88rem; line-height:1.55; color:#333; margin:0 0 10px; }}
  .analysis-body ul {{ margin:0 0 12px; padding-left:1.2em; font-size:0.85rem; color:#333; }}
  .analysis-body li {{ margin-bottom:4px; }}
  .post-table {{ width:100%; border-collapse:collapse; font-size:0.82rem; }}
  .post-table th {{ text-align:left; font-size:0.7rem; color:#666; padding:8px 6px; border-bottom:2px solid #e0e0e0; }}
  .post-table td {{ padding:10px 6px; border-bottom:1px solid #eee; vertical-align:top; }}
</style>
</head>
<body>
<header class="topbar">
  <div class="topbar-inner">
    <a class="brand" href="../../index.html">
      <span class="brand-mark"></span>
      <span class="brand-text">HSBC Keyword Explorer
        <span class="brand-sub">v3 · {escape(slug)}</span>
      </span>
    </a>
    <div class="top-meta">
      <div>{escape(created_at)}</div>
      <div>{len(posts)} 帖 · {escape(kw_str)}</div>
    </div>
  </div>
</header>

<section class="wrap">
  <div class="hero-strip">
    <div class="label">SAVED ANALYSIS {ds_badge}</div>
    <p style="font-size:1.1rem;font-weight:700;color:#1e1e1e;margin:0 0 6px">{escape(title)}</p>
    <p style="margin:0">关键词：{escape(kw_str)} · 帖数 {len(posts)} · 可经 GitHub Pages 永久打开</p>
    <p style="margin:8px 0 0"><a href="../../index.html">← 返回关键词探索器</a>
      · <a href="../index.json">catalog JSON</a>
      · <a href="data.json">data.json</a></p>
  </div>

  <div class="card" style="margin-bottom:16px">
    <h3><span class="hex-accent"></span>分析</h3>
    <div class="analysis-body">
{analysis_html}
    </div>
  </div>

  <div class="card">
    <h3><span class="hex-accent"></span>帖子明细（原标题 · 简体）</h3>
    <p class="card-muted" style="margin-bottom:12px">封面与「打开小红书」来自公开检索样本；请人工核对中介噪声。</p>
    <div style="overflow-x:auto">
      <table class="post-table">
        <thead><tr><th style="width:72px">封面</th><th>标题 / 摘要</th><th style="width:110px">操作</th></tr></thead>
        <tbody>
{rows_html}
        </tbody>
      </table>
    </div>
  </div>
</section>

<footer class="footer">汇丰银行香港 · 商业银行 · Keyword Explorer v3 · 内部演示 · 第三方 API 样本请人工核对</footer>
</body>
</html>
"""


# ---------------------------------------------------------------------------
# Catalog
# ---------------------------------------------------------------------------
def update_catalog(entry: dict) -> None:
    catalog = load_json(CATALOG_PATH, {"analyses": [], "updated_at": None})
    items = catalog.get("analyses") or []
    # Replace same slug or prepend
    items = [it for it in items if it.get("slug") != entry["slug"]]
    items.insert(0, entry)
    catalog["analyses"] = items
    catalog["updated_at"] = now_hkt().isoformat()
    save_json(CATALOG_PATH, catalog)


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
def main() -> int:
    ap = argparse.ArgumentParser(description="HSBC v3 Keyword Explorer pipeline")
    ap.add_argument("--keywords", action="append", default=[], help='Comma-separated, e.g. "ODI,837 号令"')
    ap.add_argument("--keywords-file", type=str, default="")
    ap.add_argument("--note-time", default="HALF_YEAR", choices=["ONE_DAY", "ONE_WEEK", "HALF_YEAR"])
    ap.add_argument("--pages", type=int, default=1)
    ap.add_argument("--sleep", type=float, default=1.0)
    ap.add_argument("--slug", default="", help="Override output slug")
    ap.add_argument("--title", default="", help="Override report title")
    ap.add_argument("--skip-search", action="store_true", help="Skip Just One; reuse last data.json if present (dev)")
    ap.add_argument("--max-posts-for-llm", type=int, default=40)
    args = ap.parse_args()

    keywords = parse_keywords(args)
    if not keywords:
        print("Provide --keywords or --keywords-file", file=sys.stderr)
        return 2

    _load_box_card_secrets()
    token = os.environ.get("JUSTONE_API_TOKEN") or os.environ.get("JUSTONE_API_KEY") or ""
    deepseek_key = os.environ.get("DEEPSEEK_API_KEY") or ""
    # Never print keys
    print(f"[config] keywords={keywords}", flush=True)
    print(f"[config] JUSTONE={'set' if token else 'MISSING'} DEEPSEEK={'set' if deepseek_key else 'missing'}", flush=True)

    slug = args.slug or slugify(keywords)
    out_dir = ANALYSES_DIR / slug
    out_dir.mkdir(parents=True, exist_ok=True)

    seen = load_seen()
    print(f"[incremental] seen_ids={len(seen)}", flush=True)

    if args.skip_search and (out_dir / "data.json").exists():
        prev = load_json(out_dir / "data.json", {})
        all_posts = prev.get("posts") or []
        print(f"[skip-search] loaded {len(all_posts)} posts from existing data.json", flush=True)
    else:
        if not token:
            print("Missing JUSTONE_API_KEY / JUSTONE_API_TOKEN", file=sys.stderr)
            return 2
        all_posts = search_keywords(token, keywords, note_time=args.note_time, pages=args.pages, sleep=args.sleep)

    # Incremental: prefer not re-writing known posts into the page merge set,
    # but keep full pull for analysis; mark new vs known
    new_posts = []
    known_posts = []
    for p in all_posts:
        nid = str(p.get("note_id") or "")
        if nid and nid in seen:
            known_posts.append(p)
        else:
            new_posts.append(p)

    # Page dataset: all unique from this run (deduped already), but log incremental stats
    print(f"[posts] total={len(all_posts)} new={len(new_posts)} already_seen={len(known_posts)}", flush=True)

    # Update seen with all note_ids from this pull
    for p in all_posts:
        nid = str(p.get("note_id") or "")
        if nid:
            seen.add(nid)
    save_seen(seen)

    # DeepSeek or placeholder
    deepseek_used = False
    analysis_md = ""
    analysis_json: dict = {}
    if deepseek_key:
        print("[deepseek] calling chat API…", flush=True)
        try:
            prompt = build_deepseek_prompt(keywords, all_posts, max_posts=args.max_posts_for_llm)
            analysis_md = call_deepseek(deepseek_key, prompt)
            deepseek_used = True
            analysis_json = {"source": "deepseek-chat", "markdown": analysis_md}
            print("[deepseek] ok", flush=True)
        except Exception as e:
            print(f"[deepseek] FAILED: {type(e).__name__}: {e}", file=sys.stderr)
            analysis_md = placeholder_analysis(keywords, len(all_posts))
            analysis_md = (
                f"> DeepSeek 调用失败（{type(e).__name__}），已写入占位分析。\n\n" + analysis_md
            )
            analysis_json = {"source": "placeholder", "error": type(e).__name__, "markdown": analysis_md}
    else:
        print("[deepseek] DEEPSEEK_API_KEY not set — writing placeholder analysis", flush=True)
        analysis_md = placeholder_analysis(keywords, len(all_posts))
        analysis_json = {"source": "placeholder", "markdown": analysis_md}

    created = now_hkt()
    created_iso = created.isoformat()
    created_display = created.strftime("%Y-%m-%d %H:%M HKT")
    title = args.title or f"关键词分析：{' / '.join(keywords)}"

    data = {
        "id": hashlib.sha1(f"{slug}-{created_iso}".encode()).hexdigest()[:12],
        "slug": slug,
        "title": title,
        "keywords": keywords,
        "created_at": created_iso,
        "created_at_display": created_display,
        "post_count": len(all_posts),
        "new_post_count": len(new_posts),
        "known_post_count": len(known_posts),
        "deepseek_used": deepseek_used,
        "note_time": args.note_time,
        "posts": all_posts,
        "analysis": analysis_json,
        "path": f"analyses/{slug}/",
    }
    save_json(out_dir / "data.json", data)

    html = render_analysis_html(
        title=title,
        keywords=keywords,
        created_at=created_display,
        posts=all_posts,
        analysis_md=analysis_md,
        deepseek_used=deepseek_used,
        slug=slug,
    )
    (out_dir / "index.html").write_text(html, encoding="utf-8")

    entry = {
        "id": data["id"],
        "slug": slug,
        "title": title,
        "keywords": keywords,
        "created_at": created_iso,
        "post_count": len(all_posts),
        "path": f"analyses/{slug}/",
        "deepseek_used": deepseek_used,
    }
    update_catalog(entry)

    print(f"[done] wrote {out_dir / 'index.html'}", flush=True)
    print(f"[done] slug={slug} posts={len(all_posts)} deepseek={deepseek_used}", flush=True)
    print(f"[done] catalog={CATALOG_PATH}", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
