# Keyword Explorer pipeline (v3)

## Env (never commit)

| Variable | Required | Purpose |
|----------|----------|---------|
| `JUSTONE_API_KEY` or `JUSTONE_API_TOKEN` | yes | Xiaohongshu search-note/v2 |
| `DEEPSEEK_API_KEY` | optional | Chat analysis; placeholder if missing |

## Run

```bash
cd v3/pipeline
python3 run_keyword_analysis.py --keywords "ODI,837 号令"
python3 run_keyword_analysis.py --keywords-file keywords.txt --note-time ONE_WEEK
```

Outputs:

- `../analyses/{slug}/index.html` — HSBC-themed report
- `../analyses/{slug}/data.json` — posts + analysis markdown/JSON
- `../analyses/index.json` — catalog for the explorer library
- `seen_ids.json` — incremental note_id store

Keys are never logged.
