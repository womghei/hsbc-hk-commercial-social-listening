/* HSBC SL i18n — v2 · EN/简体 */
(function (global) {
  'use strict';
  var STORAGE_KEY = "hsbc-sl-lang";
  var UI = {"zh":{"brand.suite":"汇丰香港 · 商业银行社交聆听","brand.suite_ms":"汇丰香港 · 商业银行多源社交聆听","nav.hub":"总览入口","nav.head":"香港管理层","nav.bb":"Business Banking","nav.sme":"中型企业","nav.large":"大型企业","nav.cmo":"CMO","nav.cto":"CTO","tab.p1":"1 管理层总览","tab.p2":"2 明细与帖子","tab.p3":"3 方法说明","sec.one_liner":"高管一句话","sec.kpis":"关键指标","sec.focus":"本周关注","sec.focus_prefix":"本周关注","sec.sentiment":"情感结构","sec.trend":"周趋势（示意）","sec.wordcloud":"品牌词云","sec.wordcloud_note":"基于清洗后标题/摘要词频 · 纯前端布局 · 无外部词云依赖","sec.themes":"主题 / 痛点分布","sec.comp":"竞品亮点 · 声量与情感","sec.comp_sub":"汇丰 vs 渣打 vs 中银香港 vs 恒生 vs 虚拟银行","sec.issues":"热点风险与机会","sec.voice":"声音构成 · 商业真实 / 中介","sec.voice_note":"全量样本口径；KPI 默认按清洗后重算","sec.segment":"客群片段（示意标签）","sec.insight_prefix":"角色洞察","sec.filters":"筛选与明细","sec.topics":"主题浏览器","sec.method":"方法说明","sec.ms_structure":"多源结构 · 平台 / 渠道 / 可信度","sec.plat_dist":"来源构成 · 平台分布","sec.plat_note":"全量样本 · 颜色区分平台","sec.channel_donut":"渠道环图 · UGC / 官方 / 新闻 / 论坛","sec.channel_share":"News vs UGC vs Official 份额","sec.credibility":"可信度构成","sec.cred_note":"官网/新闻=高 · 小红书 UGC=中 · 中介=低","sec.cross":"跨源主题热力 · 主题 × 平台（清洗后）","filter.hide_int":"隐藏中介/公司秘书/企服（默认关闭）","filter.hide_pers":"隐藏个人户噪声","filter.sentiment":"情感","filter.category":"分类","filter.search":"搜索","filter.search_ph":"标题/摘要/作者","filter.platform":"平台","filter.channel":"渠道","filter.all_sent":"全部情感","filter.all_cat":"全部分类","filter.all_plat":"全部平台","filter.all_ch":"全部渠道","filter.all":"全部","table.title":"标题 / 摘要","table.sentiment":"情感","table.category":"分类","table.author":"作者类型","table.source":"来源","table.comp":"竞品提及","feed.note":"公开样本提供小红书 explore 链接与封面；本版无占位帖。","feed.note_ms":"公开样本含 explore 链接与封面；Web Informed 可含真实官网/新闻链接。本版无示意占位。","feed.orig_note":"","feed.open_post":"打开笔记","feed.cover":"封面","badge.demo":"示意数据","badge.demo_short":"示意","badge.demo_ms":"示意·模拟","badge.placeholder":"占位","kpi.total_posts":"可见帖数","kpi.total_posts_h":"噪声过滤后","kpi.positive_pct":"正面占比","kpi.positive_pct_h":"情感正向","kpi.negative_pct":"负面占比","kpi.negative_pct_h":"情感负向","kpi.neutral_pct":"中性占比","kpi.neutral_pct_h":"情感中性","kpi.net_sentiment":"净情感","kpi.net_sentiment_h":"正面−负面 pp","kpi.commercial_related_pct":"商业相关","kpi.commercial_related_pct_h":"可见样本内","kpi.intermediary_count":"中介/企服","kpi.intermediary_count_h":"全量样本","kpi.xhs_sample_count":"小红书公开样本","kpi.xhs_sample_count_h":"商业相关（含中介监测）","kpi.xhs_sample_count_h_ms":"小红书公开检索","kpi.placeholder_count":"占位帖","kpi.placeholder_count_h":"本版为 0（已移除）","kpi.placeholder_count_ms":"示意·模拟","kpi.placeholder_count_h_ms":"占位补齐","kpi.hot_theme_count":"热点主题","kpi.hot_theme_count_h":"主题条数目","kpi.web_informed_count":"Web Informed","kpi.web_informed_count_h":"官网/新闻等","kpi.platform_count":"平台数","kpi.platform_count_h":"多源覆盖","sent.pos":"正面","sent.neg":"负面","sent.neu":"中性","sent.pos_short":"正","sent.neg_short":"负","sent.neu_short":"中","lean.positive":"偏正","lean.negative":"偏负","lean.mixed":"分化","lean.neutral":"中性","issue.risk":"风险","issue.opp":"机会","sev.高":"高","sev.中":"中","sev.低":"低","comp.org":"机构","comp.sov":"声量份额","comp.lean":"情感倾向","comp.note":"说明","empty.cloud":"暂无词云","empty.issues":"暂无风险/机会条目","empty.posts":"无匹配帖子","empty.cross":"暂无跨源主题矩阵","feed.show":"显示","feed.of":"/","feed.total":"共","feed.items":"条","no_title":"（无标题）","updated":"更新","weight":"权重","trend.fallback":"周趋势（示意）：正面","trend.neg":"负面","method.src":"数据来源与口径","method.src_ms":"数据来源与口径（多源）","method.platform":"主平台：","method.sample":"样本：","method.updated":"更新：","method.filter":"默认过滤：","method.filter_v":"默认展示中介监测帖；个人户已从数据集剔除。可选隐藏中介。KPI 默认按全量发布样本。","method.disclaimer":"免责声明：","method.gap":"数据缺口：","method.voice":"声音质量说明","method.demo":"示意数据标记","method.demo_p":"竞品声量份额（SOV）、周情感趋势曲线标有结构演示说明，非正式市占统计。本版帖子列表无占位条目。","method.demo_p_ms":"竞品 SOV、周情感趋势为结构演示。Web Informed 含真实官网/新闻 URL；无编造小红书链接；无示意·模拟社交占位。","method.actions":"推荐管理层行动","method.version":"版本：","method.plats":"平台分布：","method.cred":"可信度：","method.cred_v":"官网/新闻=高；小红书 UGC=中；中介推广=低","method.version_note":"相对 v1/v2 小红书单源，本套件扩展官网/新闻/微博/知乎/论坛","cross.theme_plat":"主题 \\ 平台","cross.note":"清洗后样本 · 单元格=帖数 · 颜色越深声量越高","cred.high":"高可信","cred.medium":"中可信","cred.low":"低可信","ch.ugc":"UGC","ch.news":"新闻","ch.official":"官方","ch.forum":"论坛","ch.web":"网页","share.ugc":"UGC（小红书/微博/知乎）","share.official":"官方（官网/新闻稿）","share.news":"新闻媒体","share.forum":"论坛/社区","share.web":"网页其他","link":"链接","footer.v2":"汇丰银行香港 · 商业银行社交聆听看板套件 v2 · 主题参考 business.hsbc.com.hk · 仅供内部管理层沟通演示 · 含第三方 API 样本，请人工核对中介噪声","footer.ms":"汇丰银行香港 · 商业银行多源社交聆听看板套件 · multisource-v1 · 主题参考 business.hsbc.com.hk · 仅供内部管理层沟通演示 · 含第三方 API 样本，请人工核对中介噪声","hub.title":"汇丰香港商业银行 · 社交聆听看板套件","hub.title_ms":"汇丰香港商业银行 · 多源社交聆听看板套件","hub.sub":"社交聆听看板套件 v2","hub.sub_ms":"多源社交聆听看板套件 · multisource-v1","hub.h1":"汇丰香港商业银行 · 多角色社交聆听看板","hub.h1_ms":"汇丰香港商业银行 · 多源客户声音监听","hub.p":"面向香港管理层与各条线负责人的多页面看板：第 1 页看数字与风险机会，第 2 页看帖子明细，第 3 页看口径。主题对齐 business.hsbc.com.hk 红白灰商务风格。","hub.p_ms":"在小红书公开样本基础上扩展：官网/新闻稿 Web Informed（真实 URL）、新闻媒体与知乎公开摘要。主题对齐 business.hsbc.com.hk。","hub.meta":"数据：小红书公开内容样本 254 条（中介约 29）· 已剔除个人户与占位 · 更新 2026-09-16 23:01 HKT","hub.meta_ms":"数据：小红书公开内容样本 254 条 + Web Informed 8 · 中介约 29 · 更新 2026-09-16 23:01 HKT","hub.open":"打开管理层总览","hub.static":"静态快照（无 JS）","hub.go":"进入看板 →","hub.overview_h":"总体综述","hub.clinical_h":"管理层诊疗模型 · 症状 / 诊断 / 处置 / 随访","hub.symptom_h":"症状","hub.diagnosis_h":"诊断","hub.treatment_h":"处置","hub.followup_h":"随访","hub.about":"套件说明","hub.about1":"同一数据引擎（shared/data.js），各角色强调重点与文案不同。","hub.about2":"第 1 页：KPI、情感环图、词云、主题条、竞品 SOV、风险/机会、声音构成。","hub.about3":"第 2 页：过滤（中介/个人噪声/情感/分类）+ 帖子表 + 主题浏览器。","hub.about4":"竞品 SOV 与周趋势为结构演示；不编造小红书 URL；无占位帖。","hub.about_ms_h":"相对 v1 / v2（小红书单源）的增强","hub.about_ms1":"多源数据模型：每帖含 platform / source_channel / credibility，保留中介噪声标记。","hub.about_ms2":"Web Informed：Sprint/BIA、Account Fitness、IADS、资费与知乎竞品摘要等，含真实官网/新闻 URL。","hub.about_ms3":"本版无微博/论坛示意占位；公开样本与 Web Informed 口径分离。","hub.about_ms4":"第 1 页：平台分布、渠道环图、News/UGC/Official 份额、可信度、跨源主题热力。","hub.about_ms5":"第 2 页：可按平台与渠道过滤；信息流展示平台胶囊与帖子外链。","hub.open_post":"打开帖子","hub.cover_na":"封面不可用（接口无图或已过期）","hub.footer":"汇丰银行香港 · 商业银行 · 主题参考 business.hsbc.com.hk / HSBC Create · 内部演示用途","hub.footer_ms":"汇丰银行香港 · 商业银行 · 主题参考 business.hsbc.com.hk · 多源演示用途 · 请人工核对中介噪声","static.banner":"静态快照（无需 JavaScript）· 香港管理层 / Country Head · 数字已烘焙","static.tab":"1 管理层总览（静态）","static.interactive":"交互版看板","static.this":"本静态页","static.en_note":"English summary below (toggle or ?lang=en)","trend.this_week":"本周","table.open":"打开笔记","table.view":"查看封面","modal.cover":"笔记封面","modal.close":"关闭","modal.image_unavailable":"封面加载失败","feed.view_cover":"查看封面"},"en":{"brand.suite":"HSBC HK · Commercial Social Listening","brand.suite_ms":"HSBC HK · Commercial Multi-source Voice","nav.hub":"Hub","nav.head":"HK Management","nav.bb":"Business Banking","nav.sme":"Mid-market","nav.large":"Large Corporate","nav.cmo":"CMO","nav.cto":"CTO","tab.p1":"1 Management overview","tab.p2":"2 Posts & detail","tab.p3":"3 Methodology","sec.one_liner":"Executive one-liner","sec.kpis":"Key metrics","sec.focus":"This week’s focus","sec.focus_prefix":"This week","sec.sentiment":"Sentiment mix","sec.trend":"Weekly trend (illustrative)","sec.wordcloud":"Brand word cloud","sec.wordcloud_note":"From cleaned titles/summaries · front-end layout only · no external word-cloud lib","sec.themes":"Themes / pain points","sec.comp":"Competitor highlight · share & sentiment","sec.comp_sub":"HSBC vs Standard Chartered vs BOCHK vs Hang Seng vs virtual banks","sec.issues":"Hot risks & opportunities","sec.voice":"Voice mix · commercial real / intermediaries","sec.voice_note":"Full-sample mix; KPIs default to cleaned view","sec.segment":"Segment mix (illustrative tags)","sec.insight_prefix":"Persona insights","sec.filters":"Filters & detail","sec.topics":"Theme browser","sec.method":"Methodology","sec.ms_structure":"Multi-source structure · platform / channel / credibility","sec.plat_dist":"Source mix · platforms","sec.plat_note":"Full sample · colour by platform","sec.channel_donut":"Channel donut · UGC / official / news / forum","sec.channel_share":"News vs UGC vs Official share","sec.credibility":"Credibility mix","sec.cred_note":"Official/news=high · Xiaohongshu UGC=medium · intermediary=low","sec.cross":"Cross-source theme heat · theme × platform (cleaned)","filter.hide_int":"Hide intermediaries / company secretaries / B2B services (off by default)","filter.hide_pers":"Hide personal-account noise","filter.sentiment":"Sentiment","filter.category":"Category","filter.search":"Search","filter.search_ph":"Title / summary / author","filter.platform":"Platform","filter.channel":"Channel","filter.all_sent":"All sentiments","filter.all_cat":"All categories","filter.all_plat":"All platforms","filter.all_ch":"All channels","filter.all":"All","table.title":"Title / summary","table.sentiment":"Sentiment","table.category":"Category","table.author":"Author type","table.source":"Source","table.comp":"Competitor mentions","feed.note":"Public sample includes Xiaohongshu explore links and covers; no placeholder posts in this build.","feed.note_ms":"Public sample includes explore links and covers; Web Informed may include real official/news URLs. No simulated placeholders in this build.","feed.orig_note":"","feed.open_post":"Open post","feed.cover":"Cover","badge.demo":"Illustrative","badge.demo_short":"Illustrative","badge.demo_ms":"Illustrative · simulated","badge.placeholder":"Placeholder","kpi.total_posts":"Visible posts","kpi.total_posts_h":"After noise filters","kpi.positive_pct":"Positive %","kpi.positive_pct_h":"Positive sentiment","kpi.negative_pct":"Negative %","kpi.negative_pct_h":"Negative sentiment","kpi.neutral_pct":"Neutral %","kpi.neutral_pct_h":"Neutral sentiment","kpi.net_sentiment":"Net sentiment","kpi.net_sentiment_h":"Positive − negative pp","kpi.commercial_related_pct":"Commercial-related","kpi.commercial_related_pct_h":"Within visible sample","kpi.intermediary_count":"Intermediaries","kpi.intermediary_count_h":"Full sample","kpi.xhs_sample_count":"XHS public sample","kpi.xhs_sample_count_h":"Commercial (incl. intermediary monitoring)","kpi.xhs_sample_count_h_ms":"Xiaohongshu public search","kpi.placeholder_count":"Placeholders","kpi.placeholder_count_h":"0 in this build (removed)","kpi.placeholder_count_ms":"Illustrative · simulated","kpi.placeholder_count_h_ms":"Placeholder fill","kpi.hot_theme_count":"Hot themes","kpi.hot_theme_count_h":"Theme bar count","kpi.web_informed_count":"Web Informed","kpi.web_informed_count_h":"Official / news etc.","kpi.platform_count":"Platforms","kpi.platform_count_h":"Multi-source coverage","sent.pos":"Positive","sent.neg":"Negative","sent.neu":"Neutral","sent.pos_short":"Pos","sent.neg_short":"Neg","sent.neu_short":"Neu","lean.positive":"Lean +","lean.negative":"Lean −","lean.mixed":"Mixed","lean.neutral":"Neutral","issue.risk":"Risk","issue.opp":"Opportunity","sev.高":"High","sev.中":"Med","sev.低":"Low","comp.org":"Institution","comp.sov":"Share of voice","comp.lean":"Sentiment lean","comp.note":"Note","empty.cloud":"No word cloud","empty.issues":"No risk/opportunity items","empty.posts":"No matching posts","empty.cross":"No cross-source theme matrix","feed.show":"Showing","feed.of":"/","feed.total":"of","feed.items":"","no_title":"(untitled)","updated":"Updated","weight":"weight","trend.fallback":"Weekly trend (illustrative): Positive","trend.neg":"Negative","method.src":"Sources & definitions","method.src_ms":"Sources & definitions (multi-source)","method.platform":"Primary platform: ","method.sample":"Sample: ","method.updated":"Updated: ","method.filter":"Default filters: ","method.filter_v":"Intermediary posts shown by default for monitoring; personal-banking posts removed from the dataset. Optional hide-intermediary toggle. KPIs default to full published sample.","method.disclaimer":"Disclaimer: ","method.gap":"Data gap: ","method.voice":"Voice quality note","method.demo":"Illustrative data markers","method.demo_p":"Competitor SOV and weekly sentiment trend are structural demos — not formal market share. No placeholder rows in the feed.","method.demo_p_ms":"Competitor SOV and weekly trend are structural demos. Web Informed includes real official/news URLs; no invented Xiaohongshu links; no simulated social placeholders.","method.actions":"Recommended management actions","method.version":"Version: ","method.plats":"Platform mix: ","method.cred":"Credibility: ","method.cred_v":"Official/news=high; Xiaohongshu UGC=medium; intermediary promo=low","method.version_note":"Extends v1/v2 Xiaohongshu-only with official/news/Weibo/Zhihu/forum","cross.theme_plat":"Theme \\ platform","cross.note":"Cleaned sample · cell = post count · darker = higher volume","cred.high":"High trust","cred.medium":"Medium trust","cred.low":"Low trust","ch.ugc":"UGC","ch.news":"News","ch.official":"Official","ch.forum":"Forum","ch.web":"Web","share.ugc":"UGC (XHS / Weibo / Zhihu)","share.official":"Official (site / press)","share.news":"News media","share.forum":"Forums / communities","share.web":"Other web","link":"Link","footer.v2":"HSBC Hong Kong · Commercial Banking social listening suite v2 · theme ref. business.hsbc.com.hk · internal management demo only · includes third-party API samples; please verify intermediary noise","footer.ms":"HSBC Hong Kong · Commercial multi-source social listening · multisource-v1 · theme ref. business.hsbc.com.hk · internal management demo only · includes third-party API samples; please verify intermediary noise","hub.title":"HSBC HK Commercial · Social Listening Suite","hub.title_ms":"HSBC HK Commercial · Multi-source Social Listening Suite","hub.sub":"Social listening dashboard suite v2","hub.sub_ms":"Multi-source social listening suite · multisource-v1","hub.h1":"HSBC HK Commercial · multi-persona social listening","hub.h1_ms":"HSBC HK Commercial · multi-source customer voice","hub.p":"Multi-page dashboards for HK management and line owners: page 1 metrics & risks/opportunities, page 2 post detail, page 3 methodology. Styled to business.hsbc.com.hk red/white/grey.","hub.p_ms":"Extends the Xiaohongshu public sample with Web Informed official/news (real URLs), news media and public Zhihu summaries. Theme aligned to business.hsbc.com.hk.","hub.meta":"Data: Xiaohongshu public sample 254 (intermediary ~29) · personal & placeholders removed · updated 2026-09-16 23:01 HKT","hub.meta_ms":"Data: Xiaohongshu public sample 254 + Web Informed 8 · intermediary ~29 · updated 2026-09-16 23:01 HKT","hub.open":"Open management overview","hub.static":"Static snapshot (no JS)","hub.go":"Open dashboard →","hub.overview_h":"Executive overview","hub.clinical_h":"Management clinical model · Symptom / Diagnosis / Treatment / Follow-up","hub.symptom_h":"Symptom","hub.diagnosis_h":"Diagnosis","hub.treatment_h":"Treatment","hub.followup_h":"Follow-up","hub.about":"About this suite","hub.about1":"One data engine (shared/data.js); each persona emphasises different points and copy.","hub.about2":"Page 1: KPIs, sentiment donut, word cloud, themes, competitor SOV, risks/opps, voice mix.","hub.about3":"Page 2: filters (intermediary/personal noise/sentiment/category) + post table + theme browser.","hub.about4":"Competitor SOV and weekly trend are structural demos; no invented Xiaohongshu URLs; no placeholder posts.","hub.about_ms_h":"Enhancements vs v1/v2 (Xiaohongshu-only)","hub.about_ms1":"Multi-source model: each post has platform / source_channel / credibility; intermediary flags kept.","hub.about_ms2":"Web Informed: Sprint/BIA, Account Fitness, IADS, tariffs and Zhihu competitor summaries, with real official/news URLs.","hub.about_ms3":"No Weibo/forum simulated placeholders in this build; public sample vs Web Informed stay distinct.","hub.about_ms4":"Page 1: platform mix, channel donut, News/UGC/Official share, credibility, cross-source theme heat.","hub.about_ms5":"Page 2: filter by platform & channel; feed shows platform pills and post links.","hub.open_post":"Open post","hub.cover_na":"Cover unavailable (API had no image or URL expired)","hub.footer":"HSBC Hong Kong · Commercial Banking · theme ref. business.hsbc.com.hk / HSBC Create · internal demo","hub.footer_ms":"HSBC Hong Kong · Commercial Banking · theme ref. business.hsbc.com.hk · multi-source demo · please verify intermediary noise","static.banner":"Static snapshot (no JavaScript) · HK Management / Country Head · figures baked in","static.tab":"1 Management overview (static)","static.interactive":"Interactive dashboard","static.this":"This static page","static.en_note":"English labels via the language toggle or ?lang=en","trend.this_week":"This week","table.open":"Open post","table.view":"View","modal.cover":"Post cover","modal.close":"Close","modal.image_unavailable":"Cover image unavailable","feed.view_cover":"View cover"}};
  var LABELS = {"正面":"Positive","负面":"Negative","中性":"Neutral","开户体验":"Account opening","费用门槛":"Fees & thresholds","客户经理":"Relationship manager","数字银行":"Digital banking","贸易融资外汇":"Trade finance / FX","竞品对比":"Competitor compare","中介推广":"Intermediary promo","个人户噪声":"Personal-account noise","真实商业相关":"Real commercial","中介/企服":"Intermediary / B2B services","中型企业 / Mid":"Mid-market / Mid","大型企业 / Large":"Large corporate / Large","未标注":"Unlabelled","不确定":"Uncertain","企服推广":"B2B promo","真实客户":"Real customer","中介":"Intermediary","公司秘书":"Company secretary","汇丰":"HSBC","渣打":"Standard Chartered","中银香港":"BOCHK","恒生":"Hang Seng","虚拟银行":"Virtual banks","小红书":"Xiaohongshu","微博":"Weibo","知乎":"Zhihu","新闻媒体":"News media","官网/新闻稿":"Official / press","论坛/社区":"Forum / community","网页其他":"Other web","本周":"This week","高":"High","中":"Med","低":"Low","SME/Mid":"SME/Mid","Large":"Large","汇丰银行":"HSBC Bank","香港汇丰银行":"HSBC Hong Kong","香港汇丰":"HSBC HK","香港公司注册":"HK company registration","香港公司开户":"HK company account opening","香港公司":"HK company","注册香港公司":"Register HK company","公司":"Company","开户":"Account opening","香港注册":"HK registration","香港公户":"HK corporate account","汇丰开户":"HSBC account opening","汇丰公户":"HSBC corporate account","开汇丰公户":"Open HSBC corporate account","做外贸":"Foreign trade","银行卡":"Bank card","账户":"Account","香港汇丰公司":"HSBC HK company","理财":"Wealth mgmt","银行":"Bank","汇丰香港":"HSBC Hong Kong","一周搞定":"Done in a week","搞跨境电商的":"Cross-border e-commerce","亲测":"Verified","恒生怎么样":"How is Hang Seng","开下来挺久的":"Took long to open","东亚":"Bank of East Asia","大新":"Dah Sing","建行":"CCB","渣打银行":"Standard Chartered","中银":"BOC","其他来源":"Other sources","商业真实":"Real commercial"};
  var COMP_NOTES = {"本样本主词":"Primary term in this sample","费用/开户对比常被提及":"Often mentioned in fee / opening comparisons","线上开户便捷叙事":"Online opening convenience narrative","中小企替代选项":"SME alternative option","门槛低/速度快对比":"Low barrier / speed comparison","基于样本内提及频次，非正式市占":"Based on mention frequency in this sample; not formal market share."};
  var RISKS_EN = {"开户材料与预约不透明":{"title":"Opaque opening documents & booking","detail":"Rework and scheduling stretch the journey and easily become negative word-of-mouth."},"开户材料与预约透明度不足":{"title":"Insufficient opening transparency","detail":"Document rework and scheduling delays lengthen the customer journey and can turn into negative word-of-mouth."},"客户经理服务连续性":{"title":"RM service continuity","detail":"Handover gaps hurt trust on high-touch cross-border and FX moments."},"客户经理交接断层":{"title":"RM handover gaps","detail":"Unstable follow-up after a handover undermines trust in cross-border collections and FX."},"中介噪声稀释真实声音":{"title":"Intermediary noise dilutes real voice","detail":"Agency opening promotions crowd related terms and skew sentiment readings."},"中介/企服内容稀释真实客户信号":{"title":"Intermediary content dilutes customer signals","detail":"Assisted-opening narratives are material; keep monitoring them but separate them from real-customer interpretation."}};
  var OPPS_EN = {"专属客户经理卖点":{"title":"Dedicated RM as a selling point","detail":"End-to-end follow-through praise can become standard service copy."},"专属经理与双人授权安全感":{"title":"Dedicated RM and dual-authorisation confidence","detail":"Positive feedback can be packaged as a standard service proposition."},"贸融/外汇深度内容":{"title":"Trade finance / FX deep content","detail":"Few professional threads but high decision value — a B2B content opportunity."},"贸易融资/外汇专业讨论":{"title":"Trade finance / FX expertise","detail":"Volume is limited but decision value is high, making this suitable for B2B interviews and content."},"费用结构主动澄清":{"title":"Proactive fee-structure clarity","detail":"Active competitor comparisons make threshold clarity valuable."},"竞品对比活跃":{"title":"Active competitor comparisons","detail":"Clarifying fee structure and segment fit can reduce threshold-deterrence narratives."}};
  var PERSONAS_ZH = {"head":{"title":"香港管理层总览","audience":"香港管理层 / Country Head","tagline":"声誉风险 · 净情感 · 竞品压力 · 行动","one_liner":"清洗后样本的净情感仍为负，负面主要集中在开户材料、预约与时效的不确定性，恒生、中银香港和渣打的便利叙事也在争夺中小企注意力。管理层应升级高传播风险、统一对外说明材料与预计时效，并以周度净情感和竞品声量检视改善。","insights":["开户材料、预约和时效不确定性是最集中的声誉风险。","客户经理交接断层会放大跨境与外汇场景的不信任。","竞品的便利与低门槛叙事持续吸引中小企。","汇报应采用清洗后 KPI，避免中介内容抬高中性占比。"],"focus_week":[{"label":"声誉","text":"升级监测开户时效负面叙事"},{"label":"竞品","text":"周度追踪恒生、中银香港与渣打声量"},{"label":"行动","text":"上线材料清单与预计时效一页纸"}]},"business-banking":{"title":"Business Banking 负责人","audience":"Business Banking Head","tagline":"开户漏斗 · 客户经理 SLA · 套餐清晰度","one_liner":"开户体验是当前最大主题，客户主要卡在材料清晰度、预约等待和审批可预期性；客户经理连续性与费用套餐说明直接影响转化和口碑。Business Banking 应发布分步骤材料与时效指引、建立客户经理交接 SLA，并按客群说清月费、资产门槛与适用套餐。","insights":["开户前端摩擦仍是客户声音的最大来源。","客户经理换手后的跟进缺口直接损害信任。","套餐、月费与资产门槛说明不足会把客户推向竞品。","正面案例通常都有明确负责人持续跟进。"],"focus_week":[{"label":"漏斗","text":"材料清单与预约等待时间"},{"label":"SLA","text":"客户经理交接与响应时限"},{"label":"套餐","text":"校准月费、门槛与适用客群说明"}]},"sme-mid":{"title":"中型企业 / SME","audience":"中型企业业务负责人","tagline":"费用门槛 · 开户速度 · SME 竞品","one_liner":"中型企业讨论集中在费用与资产门槛、开户速度和流程可预期性，恒生、中银香港、渣打及虚拟银行常被包装为更快或门槛更低。业务团队应提供分层费用情景与适配指引、承诺可执行的开户节点，并针对流失意向建立竞品挽回话术。","insights":["费用与最低资产要求是中小企主要劝退点。","客户更在意时效是否可预测，而不只是绝对天数。","线上开户便利叙事正在牵引竞品意向。","轻资产与初创企业最容易在门槛阶段流失。"],"focus_week":[{"label":"门槛","text":"月费与资产要求的客户感知"},{"label":"速度","text":"可承诺的开户节点与周期"},{"label":"竞品","text":"便利与低门槛叙事的挽回话术"}]},"large-corp":{"title":"大型企业","audience":"大型企业业务负责人","tagline":"贸易融资 / 外汇 · H2H / 网银 · 服务连续性","one_liner":"大型企业相关声量较少但决策权重高，信号主要落在贸易融资、外汇、H2H/企业网银稳定性和客户经理连续性。团队应结合客户访谈补足社交样本，优先核查授权与跨境收款路径、建立关键客户服务连续性预案，并突出全球网络与贸易能力。","insights":["贸易融资与外汇讨论量少但决策价值高。","双人授权和稳定网银路径能形成安全感。","客户经理连续性对大型企业关系价值更高。","应以行业社群和客户访谈补足公开社交样本。"],"focus_week":[{"label":"贸融外汇","text":"开展重点客户深访"},{"label":"H2H / 网银","text":"核查授权、收款与关键路径稳定性"},{"label":"连续性","text":"抽查关键客户服务与交接预案"}]},"cmo":{"title":"CMO / 品牌与市场","audience":"CMO / 品牌与市场","tagline":"声量份额 · 中介噪声 · 内容主题","one_liner":"品牌相关声量被开户、费用和客户经理议题主导，中介/企服内容约占一成，若不清洗会扭曲情感与声量份额判断。CMO 应分开报告真实客户与中介声音，以材料清单、费用解释和真实服务案例回收搜索词场，并周度追踪竞品便利叙事。","insights":["中介/企服推广是最大的可控噪声来源。","开户、公司户、费用与客户经理是内容日历重点。","竞品声量集中于便利与低门槛叙事。","真实正面开户与服务案例仍然不足。"],"focus_week":[{"label":"声量","text":"分层追踪真实客户与中介占比"},{"label":"内容","text":"分发开户指引、费用解释与服务案例"},{"label":"SOV","text":"监测竞品便利与低门槛叙事"}]},"cto":{"title":"CTO / 数字与渠道","audience":"CTO / 数字与渠道","tagline":"App / 网银摩擦 · 数字事件信号 · 开户自动化","one_liner":"App、企业网银和数字开户的公开提及量不高，但登录验证、授权、到账提醒与线上开户预期具有高情绪敏感度，低声量不等于没有事故。CTO 应把社交关键词接入内部事件遥测，优先简化授权与登录路径，并推进材料预检、进度可视化和开户自动化。","insights":["数字渠道信号少但情绪波动敏感。","登录、授权与到账提醒是关键体验路径。","公开平台缺少故障讨论不代表系统平稳。","材料预检和进度查询能直接缓解开户痛点。"],"focus_week":[{"label":"体验","text":"App / 网银登录与授权路径"},{"label":"开户","text":"材料预检、进度可视化与自动化"},{"label":"哨兵","text":"接通故障与无法登录关键词监测"}]}};
  var PERSONAS_EN = {"head":{"title":"Hong Kong management overview","audience":"HK management / Country Head","tagline":"Reputation risk · net sentiment · strategic competitors · actions","one_liner":"Cleaned net sentiment remains negative, with reputation risk concentrated in uncertainty around opening documents, booking and timelines; convenience narratives from Hang Seng, BOCHK and Standard Chartered also compete for SME attention. Management should escalate fast-moving risks, publish one consistent documents-and-timeline guide, and review weekly net sentiment and competitor share of voice.","insights":["Net sentiment soft: negative opening experience (docs / booking / timelines) remains a management priority.","Reputation risk clusters on “unpredictable waiting” — narratives like 63-day opening travel well.","In strategic competitor SOV, BOCHK and virtual banks divert SME intent with a “convenience” story.","Unfiltered intermediary noise inflates neutral share — report cleaned KPIs.","This week: publish a documents + expected-timeline one-pager and stand up RM handover SLA.","Opportunity: dual-authorisation and similar “safety” features can become differentiated messaging."],"focus_week":[{"label":"Reputation","text":"Escalate monitoring of opening-timeline negative narratives"},{"label":"Competitors","text":"StanChart / BOC / virtual-bank SOV weekly"},{"label":"Action","text":"Documents one-pager launch progress"}]},"business-banking":{"title":"Business Banking lead","audience":"Business Banking Head","tagline":"Opening funnel pain · RM SLA · product packages","one_liner":"Account opening is the largest theme: customers are getting stuck on document clarity, booking waits and approval predictability, while RM continuity and package explanations shape conversion and advocacy. Business Banking should publish a step-by-step documents and timeline guide, enforce an RM handover SLA, and clarify monthly fees, asset thresholds and package fit by segment.","insights":["Opening-experience posts dominate the cleaned sample — front-of-funnel friction is highest.","“Nobody took over after my RM changed” points straight at handover SLA gaps.","Weak package / monthly-fee communication pushes customers to competitor fee tables.","Positive cases almost always bind to “someone owns follow-through” — copyable as a standard service pack.","Suggest: 30–90 day post-opening touch templates + more predictable booking.","Agency narratives compete with the official funnel — reclaim explanatory content share."],"focus_week":[{"label":"Funnel","text":"Document list & appointment wait times"},{"label":"SLA","text":"RM handover & response timelines"},{"label":"Packages","text":"Calibrate monthly fee / asset-threshold messaging"}]},"sme-mid":{"title":"Mid-market / SME","audience":"Mid-market business lead","tagline":"Fee thresholds · opening speed · SME competitors","one_liner":"Mid-market discussion centres on fees and asset thresholds, speed to open and journey predictability, while Hang Seng, BOCHK, Standard Chartered and virtual banks are often framed as faster or lower-friction alternatives. The team should provide tiered fee scenarios and fit guidance, commit to achievable onboarding milestones, and build competitor-save scripts for at-risk prospects.","insights":["Fees and minimum assets are the main SME deterrence; negatives concentrate there.","Uncertainty of opening timelines hurts trust more than absolute days — customers want predictability.","Competitor “smooth online opening” stories pull mid-market intent.","Startups and light-asset traders are most likely to leak to alternatives at the threshold stage.","Suggest: tiered package messaging (fit segment + fee scenarios) to avoid one-size-fits-all deterrence.","Agency “we’ll get you approved” talk is heavy in mid-market clouds — separate from real customers."],"focus_week":[{"label":"Thresholds","text":"Customer perception of monthly fees / asset requirements"},{"label":"Speed","text":"Feasibility of SME opening-cycle commitments"},{"label":"Competitors","text":"Hang Seng / virtual-bank comparison messaging"}]},"large-corp":{"title":"Large Corporate","audience":"Large Corporate business lead","tagline":"Trade finance / FX · corporate e-banking · continuity","one_liner":"Large-corporate volume is thin but decision-weighted, with signals clustering around trade finance, FX, H2H and corporate e-banking resilience, and RM continuity. Pair the public sample with client interviews, validate authorisation and cross-border collection journeys, put continuity plans around key accounts, and lead with HSBC’s global network and trade capabilities.","insights":["Trade finance / FX posts are few and specialised — don’t conclude from Xiaohongshu alone.","Dual-authorisation and similar features earn “safety” positives — reinforce in messaging.","Service continuity (RM stability) is extremely valuable for large-corp relationships.","Cross-border collection alerts and mobile UX matter for trust-sensitive clients.","Suggest: add LinkedIn / industry communities and client roundtables to fill B2B voice gaps.","Opportunity: differentiate on global network + trade capability, not opening price wars."],"focus_week":[{"label":"Trade FX","text":"Deep interviews on FX / LCs"},{"label":"E-banking","text":"Business App authorisation-path UX"},{"label":"Relationships","text":"Spot-check large-client RM stability"}]},"cmo":{"title":"CMO / Brand & Marketing","audience":"CMO / Brand & Marketing","tagline":"Volume · content themes · intermediary noise · brand cloud · competitor SOV","one_liner":"Brand volume is dominated by opening, fees and RM themes, while intermediary/B2B promotion represents roughly one tenth of the sample and can distort sentiment and share-of-voice reads. CMO should report real-customer and intermediary voice separately, reclaim search territory with document guides, fee explainers and authentic service stories, and track competitor convenience narratives weekly.","insights":["Intermediary / B2B promo is the largest noise source — unfiltered it warps brand sentiment.","Cloud highs: opening, company account, fees, RM — content calendar should aim at these terms.","Illustrative competitor SOV: convenience and low-barrier stories sit with others.","Positive content is scarce — proactively ship real opening journeys / RM service cases.","Personal-account noise mixes with commercial volume — monitor on separate tracks.","Suggest: brand content stress document clarity and timeline expectations to cut anxiety searches that convert to agencies."],"focus_week":[{"label":"Volume","text":"Weekly intermediary-noise share tracking"},{"label":"Content","text":"Opening one-pager / service case distribution"},{"label":"SOV","text":"Monitor competitor convenience narratives"}]},"cto":{"title":"CTO / Digital & Channels","audience":"CTO / Digital & Channels","tagline":"App / e-banking UX · digital outage signals · automated opening","one_liner":"Public mentions of the App, corporate e-banking and digital onboarding are limited but highly emotion-sensitive around login verification, authorisation, arrival alerts and expectations of online opening; low volume is not evidence of no incidents. CTO should connect social keywords to internal incident telemetry, simplify login and approval paths, and accelerate document pre-check, progress visibility and onboarding automation.","insights":["Digital banking / App sentiment is split: feature safety vs interaction friction.","Expectations of online opening / remote interviews are raised by competitor stories.","Public outage signals are sparse — not proof of calm; wire to internal telemetry.","Automated opening and document pre-check (digitised lists) directly ease the top pain.","Dual-authorisation is a differentiated UX asset — keep it stable and discoverable.","Suggest: social “digital outage” keyword sentry + queryable opening progress."],"focus_week":[{"label":"UX","text":"Business App login / authorisation paths"},{"label":"Opening","text":"Document pre-check & progress visibility"},{"label":"Sentry","text":"Outage / cannot-login keyword watch"}]}};
  var MGMT_EN = {"executive_brief":"After cleaning, the sample shows main pain points for HSBC HK commercial onboarding: unclear document lists, hard-to-book appointments, and long approval cycles. RM service quality varies; weak continuity is an experience risk. Fee and asset thresholds deter startups and SMEs, with some discussion shifting to competitors or virtual banks. Intermediary / company-secretary / B2B promo posts are material and, unfiltered, dilute “real customer voice”; the dashboard hides this noise by default.","top_risks":["Unclear opening documents and booking transparency lengthen the journey and can turn into negative word-of-mouth.","RM handovers leave follow-up gaps, hurting trust on high-touch FX / cross-border collections.","Intermediary and B2B promo content crowds “HSBC commercial opening” terms and skews real customer sentiment."],"top_opportunities":["Positive feedback clusters on “end-to-end RM follow-through” and dual-authorisation in business banking — package as standard selling points.","Trade finance / FX threads are few but high decision value — good for B2B interviews and content.","Competitor comparison posts are active; clarifying fee structure and fit segments can reduce “threshold deters me” narratives."],"recommended_actions":["Publish a one-pager: commercial opening document list + expected timelines to cut rework and booking anxiety.","Define RM handover SLA and key follow-up templates covering the first 30–90 days after opening.","Keep social-listening defaults on “hide intermediaries/B2B + hide personal-account noise” and report cleaned KPIs to management."],"voice_quality_note":"The sample mixes intermediaries, company secretaries and B2B promo (one-stop agency, assisted opening) plus personal HSBC One noise. After default filters, KPIs/charts recompute on visible customer-facing posts so marketing acquisition content is not misread as experience."};
  var META_EN = {"disclaimer":"Includes Xiaohongshu API live samples (search-note/v2); third-party API is not officially authorised. Please manually verify intermediary noise.","data_gap_note":"Open-web retrieval is skewed to personal opening experience; commercial (company / Business Banking) voice on consumer social platforms is thin; intermediary and B2B promo posts further pollute customer voice."};
  var IS_MS = false;

  var lang = 'zh';
  var listeners = [];

  function detect() {
    try {
      var q = new URLSearchParams(location.search || '');
      var ql = (q.get('lang') || '').toLowerCase();
      if (ql === 'en' || ql === 'zh' || ql === 'zh-cn' || ql === 'zh-hk') {
        return ql.indexOf('zh') === 0 ? 'zh' : 'en';
      }
    } catch (e) {}
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      if (s === 'en' || s === 'zh') return s;
    } catch (e2) {}
    return 'zh';
  }

  function setLang(next, opts) {
    opts = opts || {};
    lang = next === 'en' ? 'en' : 'zh';
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    try {
      document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
      document.documentElement.setAttribute('data-lang', lang);
    } catch (e2) {}
    applyDom(document);
    syncToggle();
    listeners.forEach(function (fn) { try { fn(lang); } catch (err) { console.error(err); } });
    try {
      document.dispatchEvent(new CustomEvent('hsbc-lang-change', { detail: { lang: lang } }));
    } catch (e3) {}
    if (!opts.skipUrl) {
      try {
        var u = new URL(location.href);
        if (lang === 'en') u.searchParams.set('lang', 'en');
        else u.searchParams.delete('lang');
        history.replaceState(null, '', u.pathname + u.search + u.hash);
      } catch (e4) {}
    }
  }

  function t(key) {
    var pack = UI[lang] || UI.zh;
    if (pack[key] != null) return pack[key];
    if (UI.zh[key] != null) return UI.zh[key];
    return key;
  }

  function label(zh) {
    if (zh == null || zh === '') return zh;
    if (lang !== 'en') return zh;
    if (LABELS[zh] != null) return LABELS[zh];
    var clean = String(zh).replace(/[\u4e00-\u9fff]+/g, ' ').replace(/\s+/g, ' ').trim();
    return clean || 'Other';
  }

  function sentiment(zh) {
    if (lang !== 'en') return zh;
    return ({ '正面': 'Positive', '负面': 'Negative', '中性': 'Neutral' })[zh] || zh;
  }

  function lean(l) {
    return t('lean.' + (l || 'neutral'));
  }

  function severity(s) {
    return t('sev.' + s) !== ('sev.' + s) ? t('sev.' + s) : label(s);
  }

  function personaEn(id, persona) {
    if (lang !== 'en') {
      var zh = PERSONAS_ZH[id] || {};
      return Object.assign({}, persona || {}, zh);
    }
    var en = PERSONAS_EN[id] || {};
    var out = Object.assign({}, persona || {});
    ['title', 'audience', 'tagline', 'one_liner'].forEach(function (k) {
      if (en[k]) out[k] = en[k];
    });
    if (en.insights) out.insights = en.insights.slice();
    if (en.focus_week) out.focus_week = en.focus_week.map(function (f) { return { label: f.label, text: f.text }; });
    return out;
  }

  function riskEn(r) {
    if (lang !== 'en' || !r) return r;
    var m = RISKS_EN[r.title] || {};
    return { title: r.title_en || m.title || r.title, detail: r.detail_en || r.text_en || m.detail || r.detail, severity: severity(r.severity) };
  }

  function oppEn(o) {
    if (lang !== 'en' || !o) return o;
    var m = OPPS_EN[o.title] || {};
    return { title: o.title_en || m.title || o.title, detail: o.detail_en || o.text_en || m.detail || o.detail, severity: severity(o.severity) };
  }

  function mgmt() {
    if (lang !== 'en') {
      var DATA = global.HSBC_SL_DATA || {};
      return DATA.management_summary || {};
    }
    return MGMT_EN;
  }

  function metaField(key, fallback) {
    if (lang !== 'en') return fallback;
    return META_EN[key] != null ? META_EN[key] : fallback;
  }

  function compNote(note) {
    if (lang !== 'en' || !note) return note || '';
    return COMP_NOTES[note] || note;
  }

  function applyDom(root) {
    root = root || document;
    var nodes = root.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-i18n');
      if (!key) continue;
      var val = t(key);
      if (el.getAttribute('data-i18n-attr') === 'placeholder') {
        el.setAttribute('placeholder', val);
      } else if (el.getAttribute('data-i18n-html') === '1') {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
    var titleEl = root.querySelector('title[data-i18n]');
    if (titleEl) {
      var tk = titleEl.getAttribute('data-i18n');
      if (tk) titleEl.textContent = t(tk);
    }
  }

  function syncToggle() {
    var btns = document.querySelectorAll('.lang-toggle button');
    for (var i = 0; i < btns.length; i++) {
      var b = btns[i];
      var L = b.getAttribute('data-lang');
      b.classList.toggle('active', L === lang);
      b.setAttribute('aria-pressed', L === lang ? 'true' : 'false');
      b.textContent = L === 'zh' ? (lang === 'en' ? 'SC' : '简体') : 'EN';
    }
  }

  function mountToggle(host) {
    if (!host) {
      host = document.getElementById('langToggleHost');
    }
    if (!host) return;
    if (host.querySelector('.lang-toggle')) {
      syncToggle();
      return;
    }
    host.innerHTML =
      '<div class="lang-toggle" role="group" aria-label="Language">' +
      '<button type="button" data-lang="zh" aria-pressed="false">简体</button>' +
      '<button type="button" data-lang="en" aria-pressed="false">EN</button>' +
      '</div>';
    host.addEventListener('click', function (e) {
      var btn = e.target && e.target.closest ? e.target.closest('button[data-lang]') : null;
      if (!btn) return;
      setLang(btn.getAttribute('data-lang'));
    });
    syncToggle();
  }

  function onChange(fn) {
    if (typeof fn === 'function') listeners.push(fn);
  }

  function isEn() { return lang === 'en'; }
  function getLang() { return lang; }

  var api = {
    t: t, label: label, sentiment: sentiment, lean: lean, severity: severity,
    persona: personaEn, risk: riskEn, opp: oppEn, mgmt: mgmt, metaField: metaField,
    compNote: compNote, setLang: setLang, applyDom: applyDom, mountToggle: mountToggle,
    onChange: onChange, isEn: isEn, getLang: getLang, IS_MS: IS_MS, LABELS: LABELS
  };
  global.HSBC_I18N = api;

  function boot() {
    lang = detect();
    try {
      document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
      document.documentElement.setAttribute('data-lang', lang);
    } catch (e) {}
    mountToggle();
    applyDom(document);
    syncToggle();
    // Notify listeners so hub paintHub / static applyStatic run with detected lang
    listeners.forEach(function (fn) { try { fn(lang); } catch (err) { console.error(err); } });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})(typeof window !== 'undefined' ? window : this);
