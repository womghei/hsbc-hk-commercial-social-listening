# 汇丰香港商业银行 · 社交聆听看板套件 v2

## 如何打开

1. 用浏览器直接打开 `index.html`（推荐本地静态服务器，避免部分浏览器限制本地模块）。
2. 从总览入口进入各角色看板：`head` / `business-banking` / `sme-mid` / `large-corp` / `cmo` / `cto`。
3. 每个看板顶部切换：**1 管理层总览** | **2 明细与帖子** | **3 方法说明**。
4. 无 JS 预览可用：`dashboard-static-overview.html`（管理层第 1 页静态快照）。

本地预览示例：

```bash
cd /workspace/hsbc-commercial-social-listening/v2
python3 -m http.server 8765
# 浏览器打开 http://127.0.0.1:8765/
```

## 文件结构

| 路径 | 说明 |
|------|------|
| `index.html` | 多角色入口枢纽 |
| `head.html` 等 | 六套角色看板（同引擎、不同强调） |
| `shared/theme.css` | HSBC 商务红白灰主题 |
| `shared/data.js` | `window.HSBC_SL_DATA` 共享数据集 |
| `shared/dashboard.js` | 渲染引擎（KPI/词云/图表/帖子表） |
| `dashboard-static-overview.html` | 管理层静态快照 |

## 数据说明

- 合并自上级目录 `../data.json`：Just One 实拉 70 条 + 占位约 17 条。
- 默认过滤中介/企服与个人户噪声；KPI 以清洗后口径展示。
- 竞品 SOV、周情感趋势等标有 **示意数据**，非正式市占。
- **不编造** 小红书外链；实拉帖仅保留 note id。

## 主题

对齐 business.hsbc.com.hk：主色 `#DB0011`，白/浅灰背景，黑灰字阶，Univers 风格字体栈，红色仅用于 CTA、激活页签与关键 KPI。

## Language

Header toggle **中文 | EN** (persisted in `localStorage` key `hsbc-sl-lang`). Default is 中文; use `?lang=en` to start in English. UI chrome, persona insights, KPIs, filters, and sentiment pills are translated; original UGC post bodies stay in Chinese with an EN-mode note.
