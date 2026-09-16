/* HSBC Commercial Social Listening — shared dataset (v2) */
/* Built from Xiaohongshu public posts sample. No placeholders. */
window.HSBC_SL_DATA = {
  "meta": {
    "title": "汇丰银行香港 · 商业银行客户声音监听",
    "subtitle": "数据源：小红书公开内容样本 231 条（商业+中介；已剔除个人户）",
    "updated_at": "2026-09-16T22:44:08.943946+08:00",
    "updated_at_display": "2026-09-16 22:44 HKT",
    "focus_platform": "小红书",
    "disclaimer": "样本来自小红书公开内容检索；非官方授权。请人工核对中介推广帖。个人银行相关帖已从发布数据集中排除。",
    "data_gap_note": "消费社交平台上商业银行声量仍偏薄；中介推广帖较多。个人户已排除。公开检索非平台官方授权。",
    "version": "v2",
    "suite_title": "汇丰香港商业银行 · 社交聆听看板套件",
    "theme": "business.hsbc.com.hk",
    "multi_source": false,
    "title_en": "HSBC Hong Kong · Commercial Banking Customer Voice",
    "subtitle_en": "Source: Xiaohongshu public posts sample · 231 commercial (+ intermediary) posts · personal banking removed",
    "disclaimer_en": "Sample from Xiaohongshu public content search; not officially authorised. Please verify intermediary promo posts. Personal-banking posts excluded from the published dataset."
  },
  "filter_defaults": {
    "hideIntermediaries": false,
    "hidePersonalNoise": true
  },
  "management_summary": {
    "executive_brief": "小红书公开样本 231 条（其中中介/企服约 30 条）显示：商业开户讨论仍集中在材料清单、预约与审批时效；费用/TRB 门槛与客户经理连续性亦反复出现。个人户噪声已从发布数据剔除；中介帖默认展示供管理层监测。",
    "top_risks": [
      "补件与排期拉长客户旅程，易转化为负面口碑。",
      "换手后跟进不稳，影响跨境收款/外汇等高触点信任。",
      "代办开户叙事占比不低；看板保留中介帖供监测，解读时请区分。"
    ],
    "top_opportunities": [
      "正面反馈可沉淀为标准化服务卖点。",
      "帖量相对少但决策价值高，适合 B2B 深访与内容运营。",
      "主动澄清费用结构与适用客群可减少门槛劝退叙事。"
    ],
    "recommended_actions": [
      "对外发布商业开户「材料清单 + 预计时效」一页纸。",
      "建立客户经理交接 SLA 与关键跟进模板（开户后 30–90 天）。",
      "社交监听保留中介监测口径，汇报时区分「商业真实」与「中介推广」。"
    ],
    "voice_quality_note": "发布数据集含商业相关与中介/企服帖，已排除个人银行噪声与占位/示意帖。声音构成：商业真实约 201 · 中介约 30。",
    "executive_brief_en": "Xiaohongshu public sample of 231 posts (about 30 intermediary/B2B promo) shows commercial account-opening talk still centres on document lists, appointments and approval turnaround; fee/TRB thresholds and RM continuity recur. Personal-banking noise is excluded from the published set; intermediary posts are shown by default for monitoring."
  },
  "categories": [
    "开户体验",
    "费用门槛",
    "客户经理",
    "数字银行",
    "贸易融资外汇",
    "竞品对比",
    "中介推广"
  ],
  "kpis_all": {
    "total_posts": 231,
    "positive_pct": 10.4,
    "negative_pct": 16.5,
    "neutral_pct": 73.2,
    "net_sentiment": -6.1,
    "commercial_related_pct": 100.0,
    "hot_theme_count": 6,
    "intermediary_count": 30,
    "personal_noise_count": 0,
    "xhs_sample_count": 231,
    "placeholder_count": 0,
    "web_informed_count": 0,
    "platform_count": 1
  },
  "kpis_clean": {
    "total_posts": 201,
    "positive_pct": 10.4,
    "negative_pct": 17.9,
    "neutral_pct": 71.6,
    "net_sentiment": -7.5,
    "commercial_related_pct": 100.0,
    "hot_theme_count": 6,
    "intermediary_count": 30,
    "personal_noise_count": 0,
    "xhs_sample_count": 231,
    "placeholder_count": 0,
    "web_informed_count": 0,
    "platform_count": 1
  },
  "kpis": {
    "total_posts": 231,
    "positive_pct": 10.4,
    "negative_pct": 16.5,
    "neutral_pct": 73.2,
    "net_sentiment": -6.1,
    "commercial_related_pct": 100.0,
    "hot_theme_count": 6,
    "intermediary_count": 30,
    "personal_noise_count": 0,
    "xhs_sample_count": 231,
    "placeholder_count": 0,
    "web_informed_count": 0,
    "platform_count": 1
  },
  "sentiment": {
    "正面": 24,
    "负面": 38,
    "中性": 169,
    "positive": 24,
    "negative": 38,
    "neutral": 169
  },
  "sentiment_all": {
    "正面": 24,
    "负面": 38,
    "中性": 169,
    "positive": 24,
    "negative": 38,
    "neutral": 169
  },
  "themes": [
    {
      "name": "开户体验",
      "count": 148,
      "sentiment_lean": "mixed"
    },
    {
      "name": "贸易融资外汇",
      "count": 37,
      "sentiment_lean": "mixed"
    },
    {
      "name": "竞品对比",
      "count": 17,
      "sentiment_lean": "mixed"
    },
    {
      "name": "客户经理",
      "count": 11,
      "sentiment_lean": "neutral"
    },
    {
      "name": "费用门槛",
      "count": 10,
      "sentiment_lean": "neutral"
    },
    {
      "name": "数字银行",
      "count": 8,
      "sentiment_lean": "neutral"
    }
  ],
  "platforms": [
    {
      "name": "小红书",
      "count": 231,
      "pct": 100.0,
      "primary": true
    }
  ],
  "personal_vs_commercial": {
    "personal_share_estimate": "已从发布数据剔除",
    "commercial_share_estimate": "100%（发布集）",
    "note": "个人银行相关帖已排除；发布集为商业相关（含中介监测）。",
    "note_en": "Personal-banking posts excluded; published set is commercial-related (including intermediary monitoring)."
  },
  "insights": [
    "开户与文件门槛是商业相关帖的高频痛点：预约难、所需公司文件清单不清、审批周期长被反复提及。",
    "客户经理响应质量分化明显——服务连续性是潜在风险点。",
    "企业网银 / HSBC Business App 提及相对较少但情绪敏感。",
    "贸易融资、外汇与跨境收款主题专业度高，适合深度访谈补充。",
    "中介/公司秘书/企服推广帖保留监测；解读 KPI 时请区分真实客户向内容。"
  ],
  "insights_default": [
    "开户与文件门槛是商业相关帖的高频痛点：预约难、所需公司文件清单不清、审批周期长被反复提及。",
    "客户经理响应质量分化明显——服务连续性是潜在风险点。",
    "企业网银 / HSBC Business App 提及相对较少但情绪敏感。",
    "贸易融资、外汇与跨境收款主题专业度高，适合深度访谈补充。",
    "中介/公司秘书/企服推广帖保留监测；解读 KPI 时请区分真实客户向内容。"
  ],
  "word_cloud": [
    {
      "text": "HSBC",
      "weight": 36
    },
    {
      "text": "汇丰",
      "weight": 35
    },
    {
      "text": "香港汇丰银行",
      "weight": 20
    },
    {
      "text": "不懂就问有问",
      "weight": 16
    },
    {
      "text": "必答",
      "weight": 16
    },
    {
      "text": "万能的小红书",
      "weight": 15
    },
    {
      "text": "香港",
      "weight": 13
    },
    {
      "text": "汇丰银行",
      "weight": 13
    },
    {
      "text": "香港公司注册",
      "weight": 12
    },
    {
      "text": "香港公司开户",
      "weight": 10
    },
    {
      "text": "香港公司",
      "weight": 9
    },
    {
      "text": "HK",
      "weight": 9
    },
    {
      "text": "香港汇丰",
      "weight": 9
    },
    {
      "text": "注册香港公司",
      "weight": 9
    },
    {
      "text": "公司",
      "weight": 6
    },
    {
      "text": "开户",
      "weight": 6
    },
    {
      "text": "害羞",
      "weight": 6
    },
    {
      "text": "香港注册",
      "weight": 6
    },
    {
      "text": "开公户一般都",
      "weight": 6
    },
    {
      "text": "收多少钱呀",
      "weight": 6
    },
    {
      "text": "开汇丰公户",
      "weight": 6
    },
    {
      "text": "元贵了吗",
      "weight": 6
    },
    {
      "text": "但是听说汇丰",
      "weight": 6
    },
    {
      "text": "香港公户",
      "weight": 6
    },
    {
      "text": "汇丰开户",
      "weight": 6
    },
    {
      "text": "做外贸",
      "weight": 6
    },
    {
      "text": "银行卡",
      "weight": 6
    },
    {
      "text": "账户",
      "weight": 6
    },
    {
      "text": "香港汇丰公司",
      "weight": 5
    },
    {
      "text": "汇丰公户",
      "weight": 5
    },
    {
      "text": "app",
      "weight": 5
    },
    {
      "text": "Graduate",
      "weight": 5
    },
    {
      "text": "开下来挺久的",
      "weight": 5
    },
    {
      "text": "恒生怎么样",
      "weight": 5
    },
    {
      "text": "理财",
      "weight": 4
    },
    {
      "text": "银行",
      "weight": 4
    },
    {
      "text": "汇丰香港",
      "weight": 4
    },
    {
      "text": "亲测",
      "weight": 4
    },
    {
      "text": "一周搞定",
      "weight": 4
    },
    {
      "text": "搞跨境电商的",
      "weight": 4
    }
  ],
  "competitors": [
    {
      "name": "汇丰",
      "share_pct": 88.8,
      "sentiment_lean": "negative",
      "note": "基于样本内提及频次，非正式市占",
      "illustrative": true
    },
    {
      "name": "恒生",
      "share_pct": 4.2,
      "sentiment_lean": "negative",
      "note": "基于样本内提及频次，非正式市占",
      "illustrative": true
    },
    {
      "name": "中银香港",
      "share_pct": 3.5,
      "sentiment_lean": "mixed",
      "note": "基于样本内提及频次，非正式市占",
      "illustrative": true
    },
    {
      "name": "渣打",
      "share_pct": 1.5,
      "sentiment_lean": "negative",
      "note": "基于样本内提及频次，非正式市占",
      "illustrative": true
    },
    {
      "name": "东亚",
      "share_pct": 1.2,
      "sentiment_lean": "mixed",
      "note": "基于样本内提及频次，非正式市占",
      "illustrative": true
    },
    {
      "name": "虚拟银行",
      "share_pct": 0.8,
      "sentiment_lean": "mixed",
      "note": "基于样本内提及频次，非正式市占",
      "illustrative": true
    }
  ],
  "sentiment_trend": [
    {
      "week": "2026-02",
      "positive": 0,
      "negative": 1,
      "neutral": 3,
      "illustrative": false
    },
    {
      "week": "2026-03",
      "positive": 2,
      "negative": 2,
      "neutral": 3,
      "illustrative": false
    },
    {
      "week": "2026-04",
      "positive": 0,
      "negative": 0,
      "neutral": 7,
      "illustrative": false
    },
    {
      "week": "2026-05",
      "positive": 4,
      "negative": 1,
      "neutral": 16,
      "illustrative": false
    },
    {
      "week": "2026-06",
      "positive": 4,
      "negative": 3,
      "neutral": 19,
      "illustrative": false
    },
    {
      "week": "2026-07",
      "positive": 2,
      "negative": 2,
      "neutral": 9,
      "illustrative": false
    },
    {
      "week": "2026-08",
      "positive": 2,
      "negative": 11,
      "neutral": 28,
      "illustrative": false
    },
    {
      "week": "2026-09",
      "positive": 1,
      "negative": 6,
      "neutral": 37,
      "illustrative": false
    }
  ],
  "segment_mix": [
    {
      "name": "SME/Mid",
      "count": 221
    },
    {
      "name": "Large",
      "count": 10
    }
  ],
  "voice_mix": {
    "真实商业相关": 201,
    "中介/企服": 30,
    "个人户噪声": 0,
    "其他来源": 0,
    "商业真实": 201,
    "中介": 30
  },
  "risks": [
    {
      "title": "开户材料与预约透明度不足",
      "severity": "高",
      "detail": "补件与排期拉长客户旅程，易转化为负面口碑。",
      "type": "risk"
    },
    {
      "title": "客户经理交接断层",
      "severity": "中",
      "detail": "换手后跟进不稳，影响跨境收款/外汇等高触点信任。",
      "type": "risk"
    },
    {
      "title": "中介/企服内容稀释真实客户信号",
      "severity": "中",
      "detail": "代办开户叙事占比不低；看板保留中介帖供监测，解读时请区分。",
      "type": "risk"
    }
  ],
  "opportunities": [
    {
      "title": "专属经理与双人授权安全感",
      "severity": "中",
      "detail": "正面反馈可沉淀为标准化服务卖点。",
      "type": "opportunity"
    },
    {
      "title": "贸易融资/外汇专业讨论",
      "severity": "中",
      "detail": "帖量相对少但决策价值高，适合 B2B 深访与内容运营。",
      "type": "opportunity"
    },
    {
      "title": "竞品对比活跃",
      "severity": "低",
      "detail": "主动澄清费用结构与适用客群可减少门槛劝退叙事。",
      "type": "opportunity"
    }
  ],
  "posts": [
    {
      "id": "xhs-6a97fd2f0000000026008983",
      "note_id": "6a97fd2f0000000026008983",
      "title": "汇丰公户终于到手啦，等了好久",
      "summary": "\"香港公户基本都会要求有关联公司或者流水，如果是0背景的初创公司，审核回很严，而且大概率回秒拒，目前尝试下来只有建行、东",
      "title_en": "HSBC corporate account finally secured, waited a long time",
      "summary_en": "\" Hong Kong corporate account company, 0 company",
      "author_nickname": "爱吃香菜",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 3,
        "comments": 2,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-02",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-68b7f5dc000000001d01af97",
      "note_id": "68b7f5dc000000001d01af97",
      "title": "出一家22年的香港科技公司，汇丰户",
      "summary": "转让一家香港22年成立的科技公司，带汇丰户，正常维护，诚心转让。#香港  #香港公司注册  #香港公司开户  #香港公司",
      "title_en": "22 Hong Kong company, HSBC",
      "summary_en": "Hong Kong 22 company, HSBC,,. Hong Kong Hong Kong company Hong Kong company account opening Hong Kong company",
      "author_nickname": "小红薯62057C99",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 1,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-09-03",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a853c010000000006007f1b",
      "note_id": "6a853c010000000006007f1b",
      "title": "#汇丰 #香港 #注销",
      "summary": "#汇丰  #香港  #注销  兄弟姐妹们，汇丰银行余额不足10,000怎么处理？帮你们问清楚了，可以节省管理费，也不需要",
      "title_en": "HSBC Hong Kong account closure / deregistration",
      "summary_en": "HSBC Hong Kong account closure / deregistration, HSBC 10,000?",
      "author_nickname": "科科",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 67,
        "comments": 27,
        "collects": 42
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-19",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a857b78000000002202ced9",
      "note_id": "6a857b78000000002202ced9",
      "title": "香港对公户选哪家？汇丰 / 中银 / 东亚对比",
      "summary": "很多刚注册香港公司的朋友都卡在这里：三家主流银行到底选哪个？ 🏦 汇丰银行：外贸圈的「顶配选手」 一句话定位：全球网点",
      "title_en": "Hong Kong corporate account? HSBC / BOCHK /",
      "summary_en": "Hong Kong company: bank? 🏦 HSBC: 「 」:",
      "author_nickname": "聚百川-李佳晨",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 0,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-19",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰",
        "中银香港",
        "东亚"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a0726b9000000000603189b",
      "note_id": "6a0726b9000000000603189b",
      "title": "香港汇丰公司户网上银行怎么修改地址",
      "summary": "先上步骤: - 选择「我的HSBC」 - 点选「户口管理」然后按「总覽」 - 点选「更新公司资料」下的「更新办事处电话",
      "title_en": "Hong Kong HSBC corporate account bank",
      "summary_en": ": - 「 HSBC」 - 「 」 「 」 - 「 company materials 」 「",
      "author_nickname": "元宝",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 3,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-15",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-68626077000000000d01b6a6",
      "note_id": "68626077000000000d01b6a6",
      "title": "香港公司开户丨简单又好开的3家银行公户！",
      "summary": "简单又好开的3家银行公户！ 详情看图哦！ ﻿#香港公司开户 ﻿ ﻿#香港大新银行公户 ﻿ ﻿#香港汇丰公户 ﻿ ﻿#香港",
      "title_en": "Hong Kong company account opening 3 bank corporate account!",
      "summary_en": "3 bank corporate account!! ﻿ Hong Kong company account opening ﻿ ﻿ Hong Kong bank corporate account ﻿ ﻿ Hong Kong HSBC corporate account ﻿ ﻿ Hong Kong",
      "author_nickname": "香港peggy彭小姐",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 9,
        "comments": 0,
        "collects": 9
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-06-30",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a2d6ee7000000001503c50e",
      "note_id": "6a2d6ee7000000001503c50e",
      "title": "香港自雇续签之路：商业银行账户",
      "summary": "昨天收到汇丰邮件，商业银行账户和卡都申请通过了。[萌萌哒R][萌萌哒R] 之前所有人都告诉我，在香港开公司账户特别难，特",
      "title_en": "Hong Kong: commercial banking",
      "summary_en": "HSBC, commercial banking approved. [ R][ R], Hong Kong company",
      "author_nickname": "三只小猪HK",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 27,
        "comments": 11,
        "collects": 27
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-13",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-689948bb000000002202033c",
      "note_id": "689948bb000000002202033c",
      "title": "香港公司开对公户坎坷过程！感谢汇丰",
      "summary": "自从朋友用3个星期就拿下东亚公户 我现在每天就追着问他要开户秘籍 在我的威逼利诱下 他总算是招了（其实是被我逼的） 虽然",
      "title_en": "Hong Kong company corporate account! HSBC",
      "summary_en": "3 corporate account account opening ( )",
      "author_nickname": "Wendy（努力搬砖中）",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 5,
        "comments": 4,
        "collects": 9
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-08-11",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰",
        "东亚"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6706446e000000001b022f9a",
      "note_id": "6706446e000000001b022f9a",
      "title": "你正好需要我刚好专业",
      "summary": "香港公司汇丰银行开户流程 一、备齐汇丰开公户资料 准备好汇丰开公户所需要的资料，如香港公司资料、董事股东证明、业务证明",
      "title_en": "Professional",
      "summary_en": "Hong Kong company HSBC account opening process, HSBC open a corporate account materials HSBC open a corporate account materials, Hong Kong company materials",
      "author_nickname": "Jerome8ef",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 5,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2024-10-09",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aaa6786000000002902e43b",
      "note_id": "6aaa6786000000002902e43b",
      "title": "HK公司注册｜搭配汇丰公户=9000✨",
      "summary": "很多外贸卖家想布局香港公司出海却被繁琐注册、银行开户流程难住😭 不用亲自飞往香港、不用精通英文、无需四处奔波资料线上提",
      "title_en": "HK company ｜ HSBC corporate account =9000✨",
      "summary_en": "Hong Kong company, bank account opening process 😭 Hong Kong,, materials",
      "author_nickname": "注册就找恒诚信",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-16",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a02c918000000003601ca61",
      "note_id": "6a02c918000000003601ca61",
      "title": "香港汇丰银行重大改变 开户要求大更新!!",
      "summary": "一、没有内地关联公司的初创企业⬇️ 1、股东两年以上的社保(具两年以上相关经验) 2、股东最近六个月内发出的银行对账单",
      "title_en": "Hong Kong HSBC account opening!!",
      "summary_en": "Company corporate ⬇️ 1, ( ) 2, bank",
      "author_nickname": "小v",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 0,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-12",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a86ad1f0000000035014b11",
      "note_id": "6a86ad1f0000000035014b11",
      "title": "客户自己去开户被拒了材料准备不对白跑三趟",
      "summary": "上午接到做外贸的王姐电话，语气又急又无奈。 \"帆妹，我去汇丰申请开香港公司的银行账户，被拒了。补了两次材料还是不行",
      "title_en": "Account opening documents",
      "summary_en": "\", HSBC Hong Kong company bank,. documents",
      "author_nickname": "帆妹聊出海",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-20",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a96c5ea00000000280370fe",
      "note_id": "6a96c5ea00000000280370fe",
      "title": "香港公司汇丰银行公户开通了",
      "summary": "收到短信了，是不是就成功了？ 全程自己搞的，没用中介，怒省8000港币。 事实证明如果业务真实，准备充分，完全也不需要中",
      "title_en": "Hong Kong company HSBC corporate account",
      "summary_en": "Successful?, intermediary, 8000",
      "author_nickname": "民间智慧大宝库",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 11,
        "comments": 37,
        "collects": 23
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-01",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa9fb1000000000290128bf",
      "note_id": "6aa9fb1000000000290128bf",
      "title": "香港公司注册+汇丰开户，9000全包值不值？",
      "summary": "💥核心套餐：香港公司注册 + 汇丰开户 + 送电子账户 优惠价：9000元 🎁福利换购（低价享超值）： ➕200元",
      "title_en": "Hong Kong company + HSBC account opening, 9000?",
      "summary_en": "💥: Hong Kong company + HSBC account opening +: 9000 🎁 ( ): ➕200",
      "author_nickname": "恒诚信一站式企业服务",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 3,
        "comments": 0,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-16",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a75b9030000000006007168",
      "note_id": "6a75b9030000000006007168",
      "title": "香港公司+汇丰公户=电商老板的月入过万秘籍",
      "summary": "做生意越往后越明白 经营架构做好，能省去超多麻烦 💡 最近超多实业、商贸的老板来咨询 香港公司搭配香港对公账户这套组合",
      "title_en": "Hong Kong company + HSBC corporate account =",
      "summary_en": "Troublesome 💡, Hong Kong company Hong Kong",
      "author_nickname": "Coco讲HK",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 9,
        "comments": 3,
        "collects": 5
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-07",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a855a4300000000290300be",
      "note_id": "6a855a4300000000290300be",
      "title": "香港汇丰银行公司登记商务网上理财账户被锁定#不懂就问有问必答 #万能的小红书",
      "summary": "香港汇丰银行公司登记商务网上理财账户被锁定#不懂就问有问必答  #万能的小红书",
      "title_en": "Hong Kong HSBC company",
      "summary_en": "Hong Kong HSBC company",
      "author_nickname": "独行侠！",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 5,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-19",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-683d62b000000000220343a6",
      "note_id": "683d62b000000000220343a6",
      "title": "香港汇丰银行公户电脑登录是个人理财还是商业理财 #不懂就问有问必答  #万能的小…",
      "summary": "香港汇丰银行公户电脑登录是个人理财还是商业理财 #不懂就问有问必答  #万能的小红书",
      "title_en": "Hong Kong HSBC corporate account business banking",
      "summary_en": "Hong Kong HSBC corporate account business banking",
      "author_nickname": "小家伙   卢爱玲",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 22,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-06-02",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-67ecd6c1000000001c035a7f",
      "note_id": "67ecd6c1000000001c035a7f",
      "title": "香港汇丰公户激活💰",
      "summary": "首先app下载对了，要下载香港汇丰Business Express 就是图2里的黑色hk的，一般的应用商店里没有这个AP",
      "title_en": "Hong Kong HSBC corporate account 💰",
      "summary_en": "App, Hong Kong HSBC Business Express 2 hk, AP",
      "author_nickname": "锦萱👑",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 160,
        "comments": 71,
        "collects": 155
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-04-02",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a4cd0f70000000017029d96",
      "note_id": "6a4cd0f70000000017029d96",
      "title": "一篇笔记讲清楚-香港汇丰公司户 3 大类型",
      "summary": "想要开展香港业务但不知道怎么弄 今天整理官方 3 类账户适配人群、门槛、费用，新手一篇看懂不踩坑 1️⃣ Sprint",
      "title_en": "Hong Kong HSBC corporate account 3",
      "summary_en": "Hong Kong 3, threshold, fees, 1️⃣ Sprint",
      "author_nickname": "智航商务咨询",
      "sentiment": "负面",
      "themes": [
        "费用门槛"
      ],
      "category": "费用门槛",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 6,
        "comments": 0,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-07-11",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a96cfae000000000d024afd",
      "note_id": "6a96cfae000000000d024afd",
      "title": "求指教，50万开汇丰还是渣打呀？",
      "summary": "如题，懂的朋友，给建议建议。谢谢 #定期存款  #理财  #储蓄  #银行  #理财小白  #资产配置",
      "title_en": "50 HSBC Standard Chartered?",
      "summary_en": "Deposit bank",
      "author_nickname": "珊瑚鱼",
      "sentiment": "中性",
      "themes": [
        "费用门槛"
      ],
      "category": "费用门槛",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 31,
        "comments": 103,
        "collects": 29
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-01",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰",
        "渣打"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6889967600000000220216d1",
      "note_id": "6889967600000000220216d1",
      "title": "是谁老说汇丰理财不好的 ？！",
      "summary": "每次一打开就推平安理财 平安给了你们广告费吗？ 我自己的就挺好的呀 [哇R] #汇丰  #理财",
      "title_en": "HSBC?!",
      "summary_en": "? [ R] HSBC",
      "author_nickname": "Momo",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 16,
        "comments": 33,
        "collects": 5
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-07-30",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-68cd2aab000000001203e252",
      "note_id": "68cd2aab000000001203e252",
      "title": "原来香港公司开汇丰公户也没那么难！",
      "summary": "好多人注册香港公司后，都想整个汇丰公户，但又怕流程复杂、门槛高。其实啊，只要把流程和要求摸透，开户真的很丝滑～ . 汇丰",
      "title_en": "Hong Kong company HSBC corporate account!",
      "summary_en": "Hong Kong company, HSBC corporate account, process, threshold., process, account opening ～. HSBC",
      "author_nickname": "骏星咨询",
      "sentiment": "负面",
      "themes": [
        "费用门槛"
      ],
      "category": "费用门槛",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 0,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-09-19",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-66ed1d24000000000c019206",
      "note_id": "66ed1d24000000000c019206",
      "title": "汇丰商业网上理财首次登记用户指南 注：只适用无于经汇丰中小企中心/视频会议开户，…",
      "summary": "汇丰商业网上理财首次登记用户指南 注：只适用无于经汇丰中小企中心/视频会议开户，而并没有收到实体保安编码器及啟动密码信件",
      "title_en": "HSBC commercial: HSBC SME / account opening",
      "summary_en": "HSBC commercial: HSBC SME / account opening",
      "author_nickname": "华港-海外注册咨询",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 51,
        "comments": 44,
        "collects": 53
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2024-09-20",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a72db95000000003301af1a",
      "note_id": "6a72db95000000003301af1a",
      "title": "汇丰银行理财经理值得去吗？#不懂就问有问必答 #万能的小红书",
      "summary": "汇丰银行理财经理值得去吗？#不懂就问有问必答  #万能的小红书",
      "title_en": "HSBC?",
      "summary_en": "HSBC?",
      "author_nickname": "快乐小刘",
      "sentiment": "正面",
      "themes": [
        "客户经理"
      ],
      "category": "客户经理",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 6,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-05",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a99789100000000120261dc",
      "note_id": "6a99789100000000120261dc",
      "title": "汇丰理财不是很满意",
      "summary": "客户经理推荐的这几只，拿手上一年多了，目前这个鬼样子！还不如手上其他的几只基金。推荐的这几只其他平台也能购买，并且手续费",
      "title_en": "HSBC",
      "summary_en": "Relationship manager recommend,,!. recommend",
      "author_nickname": "momo",
      "sentiment": "正面",
      "themes": [
        "客户经理"
      ],
      "category": "客户经理",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 2,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-03",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a90bae4000000002303e71d",
      "note_id": "6a90bae4000000002303e71d",
      "title": "为什么香港汇丰账户里购买理财产品扣钱的时候叫提款？#不懂就问有问必答 #万能的小",
      "summary": "为什么香港汇丰账户里购买理财产品扣钱的时候叫提款？#不懂就问有问必答  #万能的小红书",
      "title_en": "Hong Kong HSBC?",
      "summary_en": "Hong Kong HSBC?",
      "author_nickname": "小红薯6474A43D",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 4,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-28",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a3137d00000000021019097",
      "note_id": "6a3137d00000000021019097",
      "title": "#汇丰 #美股 #纳斯达克 #理财",
      "summary": "#汇丰  #美股  #纳斯达克  #理财",
      "title_en": "HSBC",
      "summary_en": "HSBC",
      "author_nickname": "momo",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 59,
        "comments": 100,
        "collects": 83
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-16",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a8192f8000000003300b50f",
      "note_id": "6a8192f8000000003300b50f",
      "title": "这不算泄题吧，偷拍到了汇丰的面试题",
      "summary": "26ng、27ng 打算在香港投行投递岗位的留学生👋，在香港 IBD 从业许久，跟大家梳理下 HSBC 莞 整面试流程",
      "title_en": "HSBC",
      "summary_en": "26ng, 27ng Hong Kong 👋, Hong Kong IBD, HSBC process",
      "author_nickname": "Calla",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1274,
        "comments": 84,
        "collects": 1761
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-16",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a85852f000000002500523f",
      "note_id": "6a85852f000000002500523f",
      "title": "汇丰自助机器开户 劝你放弃吧",
      "summary": "今天路过，看了一眼，还是放弃了。串行等待，站着排队时间超长。还是传统自助开卡在家等待收卡模式体验更好。 要是这个机器能够",
      "title_en": "HSBC account opening",
      "summary_en": "Time. experience",
      "author_nickname": "skybow",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 64,
        "comments": 33,
        "collects": 56
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-19",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-695dfbda000000002200baec",
      "note_id": "695dfbda000000002200baec",
      "title": "香港汇丰商业理财解锁教程✅",
      "summary": "输入三次错误密码，导致公司帐户被锁，小红书搜了半天，都没有搜到正经教程，打了几次香港客服电话才能接通，很难链接香港客服",
      "title_en": "Hong Kong HSBC business banking ✅",
      "summary_en": "Company,,, Hong Kong, Hong Kong",
      "author_nickname": "水蜜桃",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 40,
        "comments": 17,
        "collects": 46
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-01-07",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa525f5000000002502c2df",
      "note_id": "6aa525f5000000002502c2df",
      "title": "汇丰中国50万存款买什么比较好",
      "summary": "汇丰存了50万维持卓越账户，这笔钱之前是买债基，年化1.9% 前段时间行情好投资经理打电话说我这个钱放债基浪费行情，建议",
      "title_en": "HSBC 50 deposit",
      "summary_en": "HSBC 50,, 1.9% time",
      "author_nickname": "粑粑柑",
      "sentiment": "中性",
      "themes": [
        "费用门槛"
      ],
      "category": "费用门槛",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 323,
        "comments": 198,
        "collects": 501
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-12",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a7541cd0000000022017eec",
      "note_id": "6a7541cd0000000022017eec",
      "title": "HSBC公户开通整整等了63天",
      "summary": "等的有点久哦 总体还算顺利 #香港汇丰  #hsbc  #汇丰公户",
      "title_en": "HSBC corporate account 63",
      "summary_en": "Hong Kong HSBC hsbc HSBC corporate account",
      "author_nickname": "777-300ER",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 9,
        "comments": 4,
        "collects": 7
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-07",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa14edd000000002803bf3e",
      "note_id": "6aa14edd000000002803bf3e",
      "title": "🇭🇰香港HSBC汇丰OIA&JSA｜附笔面试",
      "summary": "香港HSBC汇丰2027测评已陆续发放📩 开放pathway： Graduate Programme • Transa",
      "title_en": "🇭🇰 Hong Kong HSBC HSBC OIA&JSA｜",
      "summary_en": "Hong Kong HSBC HSBC 2027 📩 pathway: Graduate Programme • Transa",
      "author_nickname": "qiqi",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 5,
        "comments": 3,
        "collects": 4
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-09",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-690b23ee000000000402a396",
      "note_id": "690b23ee000000000402a396",
      "title": "🇭🇰HSBC BA Graduate 进度交流",
      "summary": "终于收到HSBC minimum benchmark的邮件嘞 Timeline： 9/16 Apply 9/22 做完O",
      "title_en": "🇭🇰HSBC BA Graduate",
      "summary_en": "HSBC minimum benchmark Timeline: 9/16 Apply 9/22 O",
      "author_nickname": "1953",
      "sentiment": "中性",
      "themes": [
        "数字银行"
      ],
      "category": "数字银行",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 89,
        "comments": 60,
        "collects": 49
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-11-05",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a0c1e7b000000003601ce5a",
      "note_id": "6a0c1e7b000000003601ce5a",
      "title": "HSBC汇丰银行（香港）🇭🇰特种兵一日游",
      "summary": "用香港WIFI线上开卡就好哦～开完记得线下找柜台补签名，不然功能会受限哦 营业时间详见P3～#投行",
      "title_en": "HSBC HSBC ( Hong Kong )🇭🇰",
      "summary_en": "Hong Kong WIFI ～, time P3～",
      "author_nickname": "Evelyn Yang",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 31,
        "comments": 8,
        "collects": 26
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-19",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69e97f7b000000002301201b",
      "note_id": "69e97f7b000000002301201b",
      "title": "赴港开户必看！20分钟丝滑搞定汇丰攻略！",
      "summary": "准备去香港开户的朋友，今天这条最新的汇丰线上开户攻略一定要码住！如果你不想去香港银行排队排到怀疑人生的？其实拿着手机，在",
      "title_en": "Account opening! 20 HSBC!",
      "summary_en": "Hong Kong account opening, HSBC account opening! Hong Kong bank?",
      "author_nickname": "深藏blue",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 8,
        "comments": 2,
        "collects": 9
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-04-23",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a9e96b4000000000b00294a",
      "note_id": "6a9e96b4000000000b00294a",
      "title": "HSBC汇丰香港2027已开岗位︱有笔试面试题～",
      "summary": "汇丰HSBC香港地区多项目的笔面细节整理好了。 ✅ 开放项目梳理 💡 Graduate Programme（校招） 覆",
      "title_en": "HSBC HSBC Hong Kong 2027 ︱ ～",
      "summary_en": "HSBC HSBC Hong Kong. ✅ 💡 Graduate Programme( )",
      "author_nickname": "好运锦鲤就是我",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 10,
        "comments": 3,
        "collects": 13
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-07",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a90f3a2000000001803d0d6",
      "note_id": "6a90f3a2000000001803d0d6",
      "title": "8.28港卡实录✅到港30分钟极速拿下汇丰港卡",
      "summary": "这次亲自到港实测，整体流程比预想顺滑太多，不用排队、不用耗时长，半小时就顺利搞定✅ 整理了全套无坑实操流程，打算办港卡的",
      "title_en": "8.28 ✅ 30 HSBC",
      "summary_en": "Process,,, ✅ process",
      "author_nickname": "Tracy",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 96,
        "comments": 19,
        "collects": 114
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-28",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a28c271000000002201b29b",
      "note_id": "6a28c271000000002201b29b",
      "title": "6.10亲测｜香港汇丰开户1小时拿下",
      "summary": "之前看网上攻略都说开香港银行账户好麻烦，吓得我一直拖着。今天终于自己去跑了一趟，结果1小时左右就搞定了✌️ 早上我是坐最",
      "title_en": "6.10 ｜ Hong Kong HSBC account opening 1",
      "summary_en": "Hong Kong bank troublesome,., 1 ✌️",
      "author_nickname": "深藏blue",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 30,
        "comments": 7,
        "collects": 40
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-10",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-68590c090000000013012a68",
      "note_id": "68590c090000000013012a68",
      "title": "香港公司汇丰银行开户精简攻略 ～",
      "summary": "宝子们，想开香港公司汇丰银行账户的看过来！这份精简版攻略，助你轻松搞定开户。 一、开户条件 公司要求 ：香港合法注册的有",
      "title_en": "Hong Kong company HSBC account opening ～",
      "summary_en": "Hong Kong company HSBC!, account opening., account opening company: Hong Kong",
      "author_nickname": "易觉醒来做牛马",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 10,
        "comments": 2,
        "collects": 4
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-06-23",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa0d5d3000000000b0378b8",
      "note_id": "6aa0d5d3000000000b0378b8",
      "title": "9.9赴港半小时开好汇丰，不用跑柜台",
      "summary": "之前总听人说香港开卡要排几小时长队，还要抱一堆纸质材料去网点。这次我自己跑了一趟，全程线上操作20多分钟搞定，连汇丰柜台",
      "title_en": "9.9 HSBC",
      "summary_en": "Hong Kong, documents., 20, HSBC",
      "author_nickname": "小悦",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 16,
        "comments": 10,
        "collects": 30
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-09",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69fde6fc000000001a0370a0",
      "note_id": "69fde6fc000000001a0370a0",
      "title": "重磅利好！无需内地公司即可开香港汇丰公户",
      "summary": "香港汇丰银行针对内地客户开户要求全面放宽，正式取消 “必须提供内地背景关联公司” 的核心门槛，[赞R]电商、初创、科创三",
      "title_en": "! company Hong Kong HSBC corporate account",
      "summary_en": "Hong Kong HSBC account opening, “ company ” threshold, [ R]",
      "author_nickname": "DR德荣 I 商务服务",
      "sentiment": "中性",
      "themes": [
        "费用门槛"
      ],
      "category": "费用门槛",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 0,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-08",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a9a470400000000250370dd",
      "note_id": "6a9a470400000000250370dd",
      "title": "香港秋招｜汇丰银行2027管培大规模开岗",
      "summary": "汇丰香港 2027 Graduate Programme 大批岗位开放！今年覆盖前台、财富管理、商业银行、Treasur",
      "title_en": "Hong Kong ｜ HSBC 2027",
      "summary_en": "HSBC Hong Kong 2027 Graduate Programme!,, commercial banking, Treasur",
      "author_nickname": "offer assistant",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 56,
        "comments": 21,
        "collects": 38
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-04",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a04207c000000000702913f",
      "note_id": "6a04207c000000000702913f",
      "title": "HSBC最后几天了，有啥问的[害羞R][害羞R]#HSBC #HTC",
      "summary": "HSBC最后几天了，有啥问的[害羞R][害羞R]#HSBC  #HTC",
      "title_en": "HSBC, [ R][ R] HSBC HTC",
      "summary_en": "HSBC, [ R][ R] HSBC HTC",
      "author_nickname": "平民",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 117,
        "comments": 871,
        "collects": 119
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-13",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a6893ed00000000090376c8",
      "note_id": "6a6893ed00000000090376c8",
      "title": "7.28亲自赴港汇丰开户实录 30分钟下卡",
      "summary": "此前一直觉得香港银行卡开户流程繁琐，本次亲自赴港实操，找对线上操作方式，办理过程十分顺畅。 前置必要准备 过关抵达香港先",
      "title_en": "7.28 HSBC account opening 30",
      "summary_en": "Hong Kong bank account opening process,,, processing. Hong Kong",
      "author_nickname": "我馕死你",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 593,
        "comments": 108,
        "collects": 1001
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-07-28",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a9ff352000000002a02fd53",
      "note_id": "6a9ff352000000002a02fd53",
      "title": "HSBC汇丰香港2027新岗开放！有笔试面试题",
      "summary": "HSBC汇丰Hong Kong地区新岗开放啦！ 💡Graduate（5个）：Transaction Banking（S",
      "title_en": "HSBC HSBC Hong Kong 2027!",
      "summary_en": "HSBC HSBC Hong Kong! 💡Graduate(5 ): Transaction Banking(S",
      "author_nickname": "顺颂时祺一定要好运",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 4,
        "comments": 3,
        "collects": 5
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-08",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa3cef4000000002601966b",
      "note_id": "6aa3cef4000000002601966b",
      "title": "9.11在香港顺手把汇丰开了，记录一下",
      "summary": "实际自己操作下来，确实没那么难 我自己手机线上操作，20分钟搞好了，说实在小白也没难度！ 分享一下我感觉要必避的坑和操作",
      "title_en": "9.11 Hong Kong HSBC",
      "summary_en": "20,!",
      "author_nickname": "yaaa'",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 55,
        "comments": 32,
        "collects": 89
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-11",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6960cc68000000001a03710d",
      "note_id": "6960cc68000000001a03710d",
      "title": "1.9亲自赴港汇丰开户实录 30分钟下卡",
      "summary": "之前总担心港卡开户流程繁琐，自己实际操作了一遍才发现，找对方法真的超省心！ 重要提示：过关后第一件事，务必连上香港WiF",
      "title_en": "1.9 HSBC account opening 30",
      "summary_en": "Account opening process,,!:, Hong Kong WiF",
      "author_nickname": "豆豆泥",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2635,
        "comments": 330,
        "collects": 3861
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-01-09",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aaa436b0000000026023b2b",
      "note_id": "6aaa436b0000000026023b2b",
      "title": "非商科，如何拿下香港汇丰全职",
      "summary": "非商科想进香港汇丰，真的没机会吗？ 港大社科硕士，研一启动✨ 拿到 HSBC 零售管培，HKD30w💸 我的核心思路不",
      "title_en": "Hong Kong HSBC",
      "summary_en": "Hong Kong HSBC,?, ✨ HSBC, HKD30w💸",
      "author_nickname": "美加澳国际留学（快直达）",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 15,
        "comments": 2,
        "collects": 9
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-16",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a32658b000000002200957a",
      "note_id": "6a32658b000000002200957a",
      "title": "汇丰银行企业网银，不会玩",
      "summary": "想看所有账户列表，怎么给她弄出来呢@汇丰银行客服#用汇丰的财务牛马",
      "title_en": "HSBC corporate e-banking",
      "summary_en": "@ HSBC HSBC",
      "author_nickname": "水穷处～云起时",
      "sentiment": "中性",
      "themes": [
        "数字银行"
      ],
      "category": "数字银行",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 6,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-17",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69c1531b000000001f001dda",
      "note_id": "69c1531b000000001f001dda",
      "title": "有懂汇丰银行网银操作的小伙伴吗？ 汇丰银行财资网，公司账户，付款授权后，回单哪里…",
      "summary": "有懂汇丰银行网银操作的小伙伴吗？ 汇丰银行财资网，公司账户，付款授权后，回单哪里下载啊，救救宝子",
      "title_en": "HSBC? HSBC, company",
      "summary_en": "HSBC? HSBC, company",
      "author_nickname": "喵了一个喵",
      "sentiment": "中性",
      "themes": [
        "数字银行"
      ],
      "category": "数字银行",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 12,
        "comments": 4,
        "collects": 6
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-03-23",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-68c3e844000000001c004639",
      "note_id": "68c3e844000000001c004639",
      "title": "汇丰网银账户功能全解析",
      "summary": "#香港银行  #香港银行卡  #跨境电商  #香港银行账户  #香港银行开户  #港卡  #外贸",
      "title_en": "HSBC",
      "summary_en": "Hong Kong bank Hong Kong bank cross-border Hong Kong bank Hong Kong bank account opening",
      "author_nickname": "暖阳°",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 8,
        "comments": 0,
        "collects": 5
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-09-16",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-64e427a5000000000a019d90",
      "note_id": "64e427a5000000000a019d90",
      "title": "外汇汇款操作流程（汇丰银行公司网银）",
      "summary": "作为一枚小出纳，日常最重要的工作就是网银付款，但是对于新手小白来说，都不知道如何操作盾登录网银付款，因为自己淋过雨，想给",
      "title_en": "FX process ( HSBC company )",
      "summary_en": "HSBC Hong Kong commercial banking discussion",
      "author_nickname": "王兑兑",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 468,
        "comments": 144,
        "collects": 455
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2023-08-22",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6537b0bf00000000200000bc",
      "note_id": "6537b0bf00000000200000bc",
      "title": "赶紧来瞧瞧~香港汇丰网银首次激活指南",
      "summary": "上期我们说到，有实体保安编码器和密码信函的情况下怎么做汇丰对公账户首次激活。这次我们继续讲没有实体保安编码器和密码信函的",
      "title_en": "~ Hong Kong HSBC",
      "summary_en": "HSBC",
      "author_nickname": "潘大师做离岸",
      "sentiment": "中性",
      "themes": [
        "数字银行"
      ],
      "category": "数字银行",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 38,
        "comments": 2,
        "collects": 72
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2023-10-24",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a10ed1c0000000035028e43",
      "note_id": "6a10ed1c0000000035028e43",
      "title": "HSBC公户申请成功。",
      "summary": "自己搞定汇丰公户申请，全程丝滑，历时一个月。 4月底申请，几天后收到了汇丰客户经理电话沟通，补充了一些资料。5月中旬收到",
      "title_en": "HSBC corporate account successful",
      "summary_en": "HSBC corporate account,,. 4, HSBC relationship manager, materials. 5",
      "author_nickname": "年米爱吃猫条",
      "sentiment": "中性",
      "themes": [
        "客户经理"
      ],
      "category": "客户经理",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 6,
        "comments": 25,
        "collects": 10
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-23",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-695221c7000000002202f1b3",
      "note_id": "695221c7000000002202f1b3",
      "title": "汇丰对公账户发工资教程",
      "summary": "1、路径：登录之后，如图所示，一步步走到“自动转账” 2、第一次发工资，需要“加入新组别”，即把要发薪水的人加到名单里面",
      "title_en": "HSBC",
      "summary_en": "1,:,, “ ” 2,, “ ”",
      "author_nickname": "玩卡里格斯",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 55,
        "comments": 19,
        "collects": 71
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-12-29",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-685991680000000012032d12",
      "note_id": "685991680000000012032d12",
      "title": "汇丰香港转中银香港（公司/个人）账户全流程",
      "summary": "[彩虹R][彩虹R][彩虹R] 分享2部分内容： [一R]如何添加受款人及注意事项？ [二R]如何向公司及个人转款？ 可",
      "title_en": "HSBC Hong Kong BOCHK ( company / ) process",
      "summary_en": "[ R][ R][ R] 2: [ R]? [ R] company?",
      "author_nickname": "HK钱多多",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 208,
        "comments": 41,
        "collects": 271
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-06-24",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰",
        "中银香港"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-67b536a6000000000d01413c",
      "note_id": "67b536a6000000000d01413c",
      "title": "汇丰银行密码器解锁",
      "summary": "汇丰银行密码器输入三次 错误就被锁定， 打开汇丰银行网页，输入用户名点击登陆 登陆后输密码的网页右侧有一个 需要帮助",
      "title_en": "HSBC",
      "summary_en": "HSBC, HSBC",
      "author_nickname": "爱喝奶茶的露露子🥤",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 162,
        "comments": 113,
        "collects": 177
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-02-19",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6913124700000000070392c7",
      "note_id": "6913124700000000070392c7",
      "title": "记一下汇丰香港开公户流程，自己开花了1600",
      "summary": "汇丰香港公司开户 1.选银行填申请表，7个工作日内客户经理核对信息 2.客户经理询问业务（行业、交易规模、银行往来频率等",
      "title_en": "HSBC Hong Kong open a corporate account process, 1600",
      "summary_en": "HSBC Hong Kong company account opening 1. bank, 7 relationship manager 2. relationship manager (,, bank",
      "author_nickname": "西西姐xanthe",
      "sentiment": "中性",
      "themes": [
        "客户经理"
      ],
      "category": "客户经理",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 67,
        "comments": 37,
        "collects": 74
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-11-11",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-695facac000000000a02b4a6",
      "note_id": "695facac000000000a02b4a6",
      "title": "汇丰不用等密码函在家就能激活网银",
      "summary": "来香港必不可少一个银行账户 好消息1月6日开始汇丰更新app后大家可以在家激活网银 再也不用苦等密码函 #汇丰激活网银",
      "title_en": "HSBC",
      "summary_en": "Hong Kong bank 1 6 HSBC app HSBC",
      "author_nickname": "香港cherry中介师姐",
      "sentiment": "中性",
      "themes": [
        "数字银行"
      ],
      "category": "数字银行",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 15,
        "comments": 1,
        "collects": 14
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-01-08",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-684a86ec00000000120048fd",
      "note_id": "684a86ec00000000120048fd",
      "title": "简单粗暴，汇丰对公开户攻略！",
      "summary": "作为老大哥的汇丰银行，申请门槛更是逐渐提高，一些小白公司，没有足够流水，是没法开户的，最近帮公司在汇丰银行开对公账户，一",
      "title_en": "HSBC account opening!",
      "summary_en": "HSBC, threshold, company,, account opening, company HSBC",
      "author_nickname": "益嘉嘉",
      "sentiment": "中性",
      "themes": [
        "费用门槛"
      ],
      "category": "费用门槛",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 8,
        "comments": 1,
        "collects": 10
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-06-12",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a4f17c1000000001c027fb7",
      "note_id": "6a4f17c1000000001c027fb7",
      "title": "汇丰银行HSBC更改每日限额 更新版",
      "summary": "HSBC Business 汇丰商务网上理财更改每日限额 ‼️WBA002 商务网上理财服务更改表格 2026年5月更新",
      "title_en": "HSBC HSBC",
      "summary_en": "HSBC Business HSBC ‼️WBA002 service 2026 5",
      "author_nickname": "momo",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 7,
        "comments": 0,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-07-09",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-67e754730000000009017fd8",
      "note_id": "67e754730000000009017fd8",
      "title": "香港汇丰银行网银转账限额调整超详细攻略",
      "summary": "汇丰银行调整限额必须登录网页版登录改限额： [一R]登陆汇丰网页版，选择-汇丰网上理财（注意要登录港版看截图）找到最上面",
      "title_en": "Hong Kong HSBC",
      "summary_en": "HSBC: [ R] HSBC, - HSBC ( )",
      "author_nickname": "团团圆圆宝贝儿",
      "sentiment": "中性",
      "themes": [
        "数字银行"
      ],
      "category": "数字银行",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 125,
        "comments": 22,
        "collects": 130
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-03-29",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-68a84a02000000001b030556",
      "note_id": "68a84a02000000001b030556",
      "title": "香港汇丰：个户+公户，新手必看",
      "summary": "还在愁香港汇丰个户/公户怎么开？一次讲清，新手也能少走弯路～ 干货都在图里，收藏慢慢看！ ﻿#汇丰 ﻿ ﻿#汇丰银行",
      "title_en": "Hong Kong HSBC: + corporate account",
      "summary_en": "Hong Kong HSBC / corporate account?, ～,! ﻿ HSBC ﻿ ﻿ HSBC",
      "author_nickname": "雪瑞商务服务",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 6,
        "comments": 0,
        "collects": 14
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-08-22",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-66967d940000000025001048",
      "note_id": "66967d940000000025001048",
      "title": "HSBC网上银行🏦 | 对账单和流水打印指南🖨️",
      "summary": "今天来分享如何通过英国汇丰银行网站获取最新的对账单和流水，非常简单，跟着步骤来就行啦~ ❶：登录汇丰银行网站 打开网站",
      "title_en": "HSBC bank 🏦 | 🖨️",
      "summary_en": "Approved HSBC,, ~ ❶: HSBC",
      "author_nickname": "莎士比亚书店的猫",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 893,
        "comments": 49,
        "collects": 862
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2024-07-16",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-673156a6000000001b010c73",
      "note_id": "673156a6000000001b010c73",
      "title": "通过汇丰银行转账教程",
      "summary": "#汇丰银行    #海外银行开户    #离岸公司开户",
      "title_en": "Approved HSBC",
      "summary_en": "HSBC bank account opening company account opening",
      "author_nickname": "汇迈国际贸易服务",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 64,
        "comments": 2,
        "collects": 96
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2024-11-11",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-67566f64000000000700d302",
      "note_id": "67566f64000000000700d302",
      "title": "汇丰银行外汇账户网银转账？",
      "summary": "汇丰网银外汇转账，但是对于新手小白来说，都不知道如何操作盾登录网银付款，因为自己淋过雨，想给刚做出纳的小姐姐撑把伞",
      "title_en": "HSBC FX?",
      "summary_en": "HSBC FX",
      "author_nickname": "Ledo",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 49,
        "comments": 14,
        "collects": 44
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2024-12-09",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a8833890000000033029ae5",
      "note_id": "6a8833890000000033029ae5",
      "title": "香港注册+开公户一般都收多少钱呀？",
      "summary": "注册香港公司+开汇丰公户，8500元贵了吗？但是听说汇丰开下来挺久的，恒生怎么样？ #香港公司注册  #香港公户  #汇",
      "title_en": "Hong Kong + open a corporate account?",
      "summary_en": "Hong Kong company + HSBC corporate account, 8500? HSBC, Hang Seng? Hong Kong company Hong Kong corporate account",
      "author_nickname": "简单点🌱",
      "sentiment": "负面",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 3,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-21",
      "search_keyword": "汇丰 开公戶",
      "competitors": [
        "汇丰",
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a87f1d40000000017028536",
      "note_id": "6a87f1d40000000017028536",
      "title": "香港注册+开公户一般都收多少钱呀？",
      "summary": "注册香港公司+开汇丰公户，8500元贵了吗？但是听说汇丰开下来挺久的，恒生怎么样？ #香港公司注册  #香港公户  #汇",
      "title_en": "Hong Kong + open a corporate account?",
      "summary_en": "Hong Kong company + HSBC corporate account, 8500? HSBC, Hang Seng? Hong Kong company Hong Kong corporate account",
      "author_nickname": "Zola 朱朱",
      "sentiment": "负面",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 0,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-21",
      "search_keyword": "汇丰 开公戶",
      "competitors": [
        "汇丰",
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a223125000000002003a602",
      "note_id": "6a223125000000002003a602",
      "title": "🇭🇰6.5实测｜汇丰开户1小时搞定！",
      "summary": "姐妹们！之前刷到一堆说开Hu很麻烦的帖子，吓得我差点放弃😭 结果自己过关实测了一遍，总共1小时，丝滑下Ka！ 流程真的",
      "title_en": "🇭🇰6.5 ｜ HSBC account opening 1!",
      "summary_en": "! Hu troublesome, 😭, 1, Ka! process",
      "author_nickname": "小花在香港",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 112,
        "comments": 13,
        "collects": 135
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-05",
      "search_keyword": "汇丰 开公戶",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a87d72c000000000c0260a2",
      "note_id": "6a87d72c000000000c0260a2",
      "title": "香港注册+开公户一般都收多少钱呀？",
      "summary": "注册香港公司+开汇丰公户，8500元贵了吗？但是听说汇丰开下来挺久的，恒生怎么样？ #香港公司注册  #香港公户  #汇",
      "title_en": "Hong Kong + open a corporate account?",
      "summary_en": "Hong Kong company + HSBC corporate account, 8500? HSBC, Hang Seng? Hong Kong company Hong Kong corporate account",
      "author_nickname": "Lila爱追剧",
      "sentiment": "负面",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 2,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-21",
      "search_keyword": "汇丰 开公戶",
      "competitors": [
        "汇丰",
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a0c2c380000000008024282",
      "note_id": "6a0c2c380000000008024282",
      "title": "汇丰新规：香港汇丰公司户官方费用是多少？",
      "summary": "#香港公司  #香港汇丰  #香港汇丰公司户  #香港汇丰开户",
      "title_en": "HSBC: Hong Kong HSBC corporate account fees?",
      "summary_en": "Hong Kong company Hong Kong HSBC Hong Kong HSBC corporate account Hong Kong HSBC account opening",
      "author_nickname": "华港-海外注册咨询",
      "sentiment": "中性",
      "themes": [
        "费用门槛"
      ],
      "category": "费用门槛",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 4,
        "comments": 2,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-19",
      "search_keyword": "汇丰 开公戶",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a057efc0000000006031907",
      "note_id": "6a057efc0000000006031907",
      "title": "港企+汇丰公户，一周搞定",
      "summary": "做外贸、搞跨境电商的朋友都懂👇 想高效收款💰、优化税务结构、提升客户信任度…… 👉一个合规主体+一个支持多币种的对",
      "title_en": "+ HSBC corporate account",
      "summary_en": "Cross-border 👇 efficient collections 💰,,...... 👉 +",
      "author_nickname": "海客精灵-企业管理",
      "sentiment": "正面",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 118,
        "comments": 4,
        "collects": 5
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-14",
      "search_keyword": "汇丰 开公戶",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a609a1a000000001c00c0b5",
      "note_id": "6a609a1a000000001c00c0b5",
      "title": "香港公司对公开户难吗？哪家最适合你？",
      "summary": "收藏！香港公司开户 9 家银行全解析📊 一篇搞懂哪家最适合你～ 🏦 热门盘点 ✨ 汇丰 / 恒生 知名度高，国际认可",
      "title_en": "Hong Kong company account opening??",
      "summary_en": "! Hong Kong company account opening 9 bank 📊 ～ 🏦 ✨ HSBC / Hang Seng",
      "author_nickname": "Coco讲HK",
      "sentiment": "负面",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 8,
        "comments": 7,
        "collects": 4
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-07-22",
      "search_keyword": "汇丰 开公戶",
      "competitors": [
        "汇丰",
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a55aea500000000060205e5",
      "note_id": "6a55aea500000000060205e5",
      "title": "香港公司+汇丰开户🔥16年老牌财税",
      "summary": "做外贸、搞跨境电商的老板都知道： 想高效收💰、降低S务成本、提升客户信任度…… 一个合规的企业主体 + 一个支持多币种",
      "title_en": "Hong Kong company + HSBC account opening 🔥16",
      "summary_en": "Cross-border: efficient 💰, S,...... corporate +",
      "author_nickname": "Cindy-HK企业服务中心",
      "sentiment": "正面",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 7,
        "comments": 0,
        "collects": 5
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-07-14",
      "search_keyword": "汇丰 开公戶",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa24d8d000000002802f61c",
      "note_id": "6aa24d8d000000002802f61c",
      "title": "🔥开公司+汇丰公户，TCSP持牌秘书代办！",
      "summary": "全程一站式服务，交由我方持牌秘书全程代办～ 📂【办理所需资料】 1️⃣ 中英文公司名称 2️⃣ 股东董事护照 / 身份",
      "title_en": "🔥 company + HSBC corporate account, TCSP secretary agency service!",
      "summary_en": "One-stop service, secretary agency service ～ 📂【 processing materials 】 1️⃣ company 2️⃣ /",
      "author_nickname": "海客精灵-商务服务",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 1,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-10",
      "search_keyword": "汇丰 开公戶",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a83ff4a0000000025007d8d",
      "note_id": "6a83ff4a0000000025007d8d",
      "title": "只要找对人，香港公司开户一点都不难",
      "summary": "开户小贴士： 有关联公司和没关联公司资料不同，都可以开，有没有社保都可以 #香港公司注册  #香港银行开户  #汇丰香港",
      "title_en": "Hong Kong company account opening",
      "summary_en": "Account opening: company company materials,, Hong Kong company Hong Kong bank account opening HSBC Hong Kong",
      "author_nickname": "益嘉小庄",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 2,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-18",
      "search_keyword": "汇丰 开公戶",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a87db3d000000000501658f",
      "note_id": "6a87db3d000000000501658f",
      "title": "香港注册+开公户一般都收多少钱呀？",
      "summary": "注册香港公司+开汇丰公户，8500元贵了吗？但是听说汇丰开下来挺久的，恒生怎么样？ #香港公司注册  #香港公户  #汇",
      "title_en": "Hong Kong + open a corporate account?",
      "summary_en": "Hong Kong company + HSBC corporate account, 8500? HSBC, Hang Seng? Hong Kong company Hong Kong corporate account",
      "author_nickname": "KKaya",
      "sentiment": "负面",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 3,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-21",
      "search_keyword": "汇丰 开公户",
      "competitors": [
        "汇丰",
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69c8d96d000000002103a64f",
      "note_id": "69c8d96d000000002103a64f",
      "title": "🔥注册公司+汇丰公户快至一周搞定，不要太香 跨境生意人，这一步真的不能省！ 做外…",
      "summary": "🔥注册公司+汇丰公户快至一周搞定，不要太香 跨境生意人，这一步真的不能省！ 做外贸、搞跨境电商的朋友都知道： 想高效收",
      "title_en": "🔥 company + HSBC corporate account, worthwhile cross-border,!",
      "summary_en": "🔥 company + HSBC corporate account, worthwhile cross-border,!, cross-border: efficient",
      "author_nickname": "公主1123",
      "sentiment": "正面",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-03-29",
      "search_keyword": "汇丰 开公户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa640d50000000012000854",
      "note_id": "6aa640d50000000012000854",
      "title": "内地一天赴香港开通汇丰银行卡攻略(无预约)",
      "summary": "需要的准备的证件及资料:港澳通行证，身份证，公司名称英文版、常住地址英文版。 从广州早上坐顺风车，去深圳罗湖口岸入境，入",
      "title_en": "Hong Kong HSBC ( appointment )",
      "summary_en": "Materials:,, company",
      "author_nickname": "财妮柚",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 15,
        "comments": 32,
        "collects": 15
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-13",
      "search_keyword": "汇丰 开公户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69493374000000001e00f82e",
      "note_id": "69493374000000001e00f82e",
      "title": "你们有收到汇丰这条信息",
      "summary": "19号到港开了汇丰，没有当场通过，显示要5个工作日审核，今天收到这条信息，这是信息有误吗，还是说要电话审核#银行卡",
      "title_en": "HSBC",
      "summary_en": "19 HSBC, approved, 5,,, bank",
      "author_nickname": "超级无敌无敌无敌好",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 8,
        "comments": 23,
        "collects": 8
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-12-22",
      "search_keyword": "汇丰 开公户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-68cd0eee000000001201c173",
      "note_id": "68cd0eee000000001201c173",
      "title": "香港公司+汇丰🔥才知道好处这么多",
      "summary": "🔥不管您是做跨境经营、进出口贸易，都需要一家香港公司！香港公司+汇丰公户一周可下户？ 📃 香港公司的优势 ✅香港税种",
      "title_en": "Hong Kong company + HSBC 🔥",
      "summary_en": "🔥 cross-border, export, Hong Kong company! Hong Kong company + HSBC corporate account? 📃 Hong Kong company ✅ Hong Kong",
      "author_nickname": "恒业国际商务",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 116,
        "comments": 80,
        "collects": 96
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-09-19",
      "search_keyword": "汇丰 开公户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a3a45c9000000001c025d50",
      "note_id": "6a3a45c9000000001c025d50",
      "title": "汇丰开户审核…",
      "summary": "你们都是秒开，为啥我要等那么久[石化R][石化R][石化R] 分割线 25日晚收到汇丰sayhello",
      "title_en": "HSBC account opening",
      "summary_en": "[ R][ R][ R] 25 HSBC sayhello",
      "author_nickname": "就酱紫呵",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 7,
        "comments": 48,
        "collects": 5
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-23",
      "search_keyword": "汇丰 开公户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-690c07f60000000007031088",
      "note_id": "690c07f60000000007031088",
      "title": "发现同事开汇丰公户的思路好清晰！",
      "summary": "原来去汇丰面签公户，还可以把🏦经理的审批逻辑摸得这么透👇 朋友总觉得开香港公户超复杂，直到上周同事和他去汇丰面签，直",
      "title_en": "HSBC corporate account!",
      "summary_en": "HSBC corporate account, 🏦 approval 👇 Hong Kong corporate account, HSBC",
      "author_nickname": "骏星咨询",
      "sentiment": "正面",
      "themes": [
        "客户经理"
      ],
      "category": "客户经理",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 6,
        "comments": 1,
        "collects": 8
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-11-06",
      "search_keyword": "汇丰 开公户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a92416f000000000b026b8e",
      "note_id": "6a92416f000000000b026b8e",
      "title": "15分钟搞定汇丰港卡｜无需🇭🇰ID和住址",
      "summary": "不试不知道，汇丰香港线上开户真的丝滑！ 周日申请，周三上午就收到开户成功短信[okR] 全程没进分行、没排队、没找中介",
      "title_en": "15 HSBC ｜ 🇭🇰ID",
      "summary_en": "HSBC Hong Kong account opening!, account opening successful [okR],, intermediary",
      "author_nickname": "Sabrina_Xanadu",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 582,
        "comments": 93,
        "collects": 910
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-29",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aaa738d0000000026023529",
      "note_id": "6aaa738d0000000026023529",
      "title": "标题：到港那天办了汇丰账户｜我的操作顺序 正文： 昨天有姐妹问我到港之后具体怎么…",
      "summary": "标题：到港那天办了汇丰账户｜我的操作顺序 正文： 昨天有姐妹问我到港之后具体怎么弄的，干脆把当天的顺序整理一下👇 ✅我",
      "title_en": ": HSBC ｜:",
      "summary_en": ": HSBC ｜:, 👇 ✅",
      "author_nickname": "高泽",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 11,
        "comments": 6,
        "collects": 9
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-16",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a9e7bcd0000000029018ec4",
      "note_id": "6a9e7bcd0000000029018ec4",
      "title": "香港汇丰开立！难？我看未必",
      "summary": "香港汇丰的线上开立，看完网上的攻略🤣🤣真的是千遍一律！还有得黑心中介收💰💰真的看不下去了😳😳 这里我给大家做",
      "title_en": "Hong Kong HSBC!?",
      "summary_en": "Hong Kong HSBC, 🤣🤣! intermediary 💰💰 😳😳",
      "author_nickname": "来一碗",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 23,
        "comments": 21,
        "collects": 40
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-07",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a952ad7000000002303c799",
      "note_id": "6a952ad7000000002303c799",
      "title": "蓝狮子申请比想象中还要简单！",
      "summary": "这次去闺蜜香港，顺手教她把汇丰开了，她说比想象中还要简单。 是的，我们全程手机操作，大概二十分钟就能搞定。 出发前准备",
      "title_en": "!",
      "summary_en": "Hong Kong, HSBC",
      "author_nickname": "深藏blue",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 10,
        "comments": 5,
        "collects": 7
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-31",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69420d7f000000001f008d7a",
      "note_id": "69420d7f000000001f008d7a",
      "title": "港卡开户避雷！半天拿下中银和汇丰",
      "summary": "一天内轻松完成汇丰与中银香港银行卡的开户。 🌈出行小贴士（这三样必不可少！） 1、证件：SFZ+港澳通行证（有效期需至",
      "title_en": "Account opening! BOCHK HSBC",
      "summary_en": "HSBC BOCHK bank account opening. 🌈 (! ) 1,: SFZ+ (",
      "author_nickname": "西施",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 381,
        "comments": 22,
        "collects": 645
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-12-17",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰",
        "中银香港"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a9165ec000000002503ce34",
      "note_id": "6a9165ec000000002503ce34",
      "title": "香港存取美金踩坑分享",
      "summary": "[失望R]柜台取美金需要提前预约，当天walkin基本没戏 1️⃣HSBC： [向右R]柜台：柜台2000美金以下免手续",
      "title_en": "Hong Kong",
      "summary_en": "[ R] appointment, walkin 1️⃣HSBC: [ R]: 2000",
      "author_nickname": "黄浦卓玛",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 32,
        "comments": 24,
        "collects": 42
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-28",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa56bcb00000000110331af",
      "note_id": "6aa56bcb00000000110331af",
      "title": "香港汇丰银行金条“狮狮如意”",
      "summary": "🔥热门货，经典狮头一两司马金条，从最初手里的二十多枚到只剩几枚，且玩且珍惜！ 香港金银贸易场老牌实物金条，收藏圈大名鼎",
      "title_en": "Hong Kong HSBC “ ”",
      "summary_en": "🔥,,,! Hong Kong",
      "author_nickname": "金士多多",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 36,
        "comments": 5,
        "collects": 12
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-12",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa3b33f0000000019025d32",
      "note_id": "6aa3b33f0000000019025d32",
      "title": "🇭🇰港硕办汇丰银行卡一定要记得看信箱……",
      "summary": "如题 今天在信箱里发现了我躺了很久的debit card，才发现半个月前办的卡其实早就寄到了[失望R]然而因为一直没查看",
      "title_en": "🇭🇰 HSBC",
      "summary_en": "Debit card, [ R]",
      "author_nickname": "倍雨门环",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 29,
        "comments": 12,
        "collects": 14
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-11",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa101a200000000260098b1",
      "note_id": "6aa101a200000000260098b1",
      "title": "避坑！汇丰开立的小细节……",
      "summary": "在上一篇一篇的笔记中，讲了汇丰的开立‼️以及实体卡的激活，也得到了很多小伙伴的认可！感谢感谢☺️☺️ 今天说说汇丰这其中",
      "title_en": "! HSBC",
      "summary_en": "HSBC ‼️,! ☺️☺️ HSBC",
      "author_nickname": "来一碗",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 64,
        "comments": 14,
        "collects": 102
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-09",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-68917ca1000000002501fccd",
      "note_id": "68917ca1000000002501fccd",
      "title": "80年代全球最贵的建筑 香港汇丰银行",
      "summary": "英国建筑师 诺曼·福斯特（Norman Foster），1999年普利兹克奖获得者。 1986年完工时，它是全球最贵的建",
      "title_en": "80 Hong Kong HSBC",
      "summary_en": "· (Norman Foster), 1999. 1986",
      "author_nickname": "鲲_yz",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 758,
        "comments": 55,
        "collects": 231
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-08-05",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a8d8e9e0000000020035b64",
      "note_id": "6a8d8e9e0000000020035b64",
      "title": "汇丰pulse收到卡后使用攻略技巧集合",
      "summary": "[一R]汇丰app激活卡片。 [二R]下载reward+报名活动(必做),图2 箭头所指三个活动，登记左边箭头指示最红自",
      "title_en": "HSBC pulse",
      "summary_en": "[ R] HSBC app. [ R] reward+ ( ), 2",
      "author_nickname": "可有可吴",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 450,
        "comments": 85,
        "collects": 934
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-25",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aaa6288000000000b00275e",
      "note_id": "6aaa6288000000000b00275e",
      "title": "我的香港银行卡：常用四家体验",
      "summary": "这四家银行，我都亲自开过账户，现在也主要使用它们：中银香港、汇丰、恒生和众安。 用了一段时间再回头看，开户只是开始。手机",
      "title_en": "Hong Kong bank: experience",
      "summary_en": "Bank,,: BOCHK, HSBC, Hang Seng. time, account opening",
      "author_nickname": "岳书房在HK",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 11,
        "comments": 0,
        "collects": 14
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-16",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰",
        "中银香港",
        "恒生",
        "虚拟银行"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6864f930000000001d00c9d4",
      "note_id": "6864f930000000001d00c9d4",
      "title": "汇丰，中银，恒生，渣打四选一选哪家？",
      "summary": "1. 汇丰 优势： 国际化服务：全球覆盖60+国家，适合跨境业务、留学等 高端客户服务：全球资产配置便利。 企业银/行",
      "title_en": "HSBC, BOCHK, Hang Seng, Standard Chartered?",
      "summary_en": "1. HSBC: service: 60+, cross-border, service:. corporate /",
      "author_nickname": "香港企服Tiana",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 6,
        "comments": 2,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-07-02",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰",
        "渣打",
        "中银香港",
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-699bdb6d000000000d00a8a6",
      "note_id": "699bdb6d000000000d00a8a6",
      "title": "汇丰账户：卓越、Pulse、One，看这篇就够了",
      "summary": "汇丰Pulse热度不减，但面对略显复杂的汇丰账户以及信用卡体系，很多小白有些不知所措。加上最近汇丰中国信用卡又一次迎来温",
      "title_en": "HSBC:, Pulse, One",
      "summary_en": "HSBC Pulse, HSBC,. HSBC",
      "author_nickname": "那山玩卡",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 339,
        "comments": 59,
        "collects": 474
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-02-23",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a9253c5000000002501fe53",
      "note_id": "6a9253c5000000002501fe53",
      "title": "1028天磨难！出卖孟晚舟换取自保，百年汇丰",
      "summary": "1028天磨难！出卖孟晚舟换取自保，百年汇丰",
      "title_en": "1028!, HSBC",
      "summary_en": "1028!, HSBC",
      "author_nickname": "四海神君",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 149,
        "comments": 38,
        "collects": 48
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-29",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa78d4600000000100002b1",
      "note_id": "6aa78d4600000000100002b1",
      "title": "汇丰裁员2万人，不是因为亏钱",
      "summary": "很多人把银行裁员解读成「银行熬不住了」❌ 这次真的不是。 汇丰 HSBC，2026 年 3 月官宣：裁员 2 万人，占全",
      "title_en": "HSBC 2",
      "summary_en": "Bank 「 bank 」❌. HSBC HSBC, 2026 3: 2",
      "author_nickname": "YJ 博士🍠",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 812,
        "comments": 152,
        "collects": 391
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-14",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-68c14022000000001d00e268",
      "note_id": "68c14022000000001d00e268",
      "title": "真的不要随便办汇丰啊！汇丰开卡九月最新",
      "summary": "听劝！不了解港卡开户蕞新政策的宝子，千万不要盲目跟风过港办理港卡了！！ 汇丰开卡蕞新政策! ✅64周岁(64周岁不影响",
      "title_en": "HSBC! HSBC",
      "summary_en": "! account opening, processing!! HSBC! ✅64 (64",
      "author_nickname": "企无忧Linda",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 11,
        "comments": 10,
        "collects": 24
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-09-10",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-697093e5000000002102b97c",
      "note_id": "697093e5000000002102b97c",
      "title": "近期还是不要在汇丰开户卓越了吧",
      "summary": "当初听说汇丰本身就销售金融产品，想着便捷操作与多元化配置开了汇丰卓越，但实际体验下来落差巨大，想着降级算了。以下是原因",
      "title_en": "HSBC account opening",
      "summary_en": "HSBC, HSBC, experience",
      "author_nickname": "happysteei",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 456,
        "comments": 222,
        "collects": 529
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-01-21",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a9e30170000000025036979",
      "note_id": "6a9e30170000000025036979",
      "title": "🇭🇰旺角分行自助开卡机实测！真香",
      "summary": "好消息先说 旺角分行现在也有汇丰自助开卡机啦！现场拿实体卡，不用苦等邮寄📬 但是！ 如果专门跑一趟，排队真的看运气",
      "title_en": "🇭🇰!",
      "summary_en": "HSBC!, 📬!",
      "author_nickname": "从零生活",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 308,
        "comments": 152,
        "collects": 411
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-07",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa42f21000000002901b278",
      "note_id": "6aa42f21000000002901b278",
      "title": "✨汇丰：刘宏敏：达斯谈话精读",
      "summary": "一段超高净值客户的英文投资访谈💡 去年全球市场蒸发 30 万亿美元， 股市跌 19%，债市跌 16%， 叠加俄乌战争",
      "title_en": "✨ HSBC::",
      "summary_en": "💡 30, 19%, 16%",
      "author_nickname": "名人演讲英语",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 107,
        "comments": 1,
        "collects": 111
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-12",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a33b0ca0000000007010666",
      "note_id": "6a33b0ca0000000007010666",
      "title": "亲身体验｜原来汇丰办理这么省事",
      "summary": "趁着这次和闺蜜去香港，终于把汇丰的账户办下来了。去之前刷了不少分享帖，越看越担心，很多都说政策收紧了，结果自己操作一遍才",
      "title_en": "Experience ｜ HSBC processing",
      "summary_en": "Hong Kong, HSBC",
      "author_nickname": "开心就对了",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 37,
        "comments": 6,
        "collects": 52
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-18",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a2bb83d000000001603da48",
      "note_id": "6a2bb83d000000001603da48",
      "title": "香港公司开户难吗?",
      "summary": "以前高高在上的香港汇丰银行，现在迫于行业压力也有新政策了，没有内地关联公司的初创企业提供资料可开： 1. 股东两年以上的",
      "title_en": "Hong Kong company account opening?",
      "summary_en": "Hong Kong HSBC,, company corporate materials: 1",
      "author_nickname": "益嘉小庄",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 5,
        "comments": 16,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-12",
      "search_keyword": "HSBC 香港 公司账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-697c7903000000000a02f395",
      "note_id": "697c7903000000000a02f395",
      "title": "香港汇丰银行开公司户，为什么这么香？",
      "summary": "想拓展海外业务，一个给力的公司银行账户绝对是你的神助攻！🇭🇰 香港汇丰银行的公司户，一直是很多创业者和企业主的首选",
      "title_en": "Hong Kong HSBC open a corporate account,?",
      "summary_en": "Company bank! 🇭🇰 Hong Kong HSBC corporate account, corporate",
      "author_nickname": "赢心企业服务",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-01-30",
      "search_keyword": "HSBC 香港 公司账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69aa9a74000000000e03fec2",
      "note_id": "69aa9a74000000000e03fec2",
      "title": "终于！看看谁还没有收到汇丰的公司卡",
      "summary": "终于！心心念念的汇丰香港对公账户顺利下户了。刚激活就直接处理了一张支票，入账也一次成功！简单分享我的开户经验~ 公司是前",
      "title_en": "! HSBC company",
      "summary_en": "! HSBC Hong Kong., successful! account opening ~ company",
      "author_nickname": "Wendy（努力搬砖中）",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 5,
        "comments": 12,
        "collects": 7
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-03-06",
      "search_keyword": "HSBC 香港 公司账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6853ac530000000015023f83",
      "note_id": "6853ac530000000015023f83",
      "title": "汇丰香港公司账户开户，自己申请很简单",
      "summary": "完全自己操作，开个公司账户中介要八九千，下载香港汇丰Business Express手机应用程序以递交申请及上传文件。全",
      "title_en": "HSBC Hong Kong company account opening",
      "summary_en": "Company intermediary, Hong Kong HSBC Business Express documents",
      "author_nickname": "李条条",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 119,
        "comments": 149,
        "collects": 156
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-06-19",
      "search_keyword": "HSBC 香港 公司账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a66c6ff000000000f03f417",
      "note_id": "6a66c6ff000000000f03f417",
      "title": "🔥香港主体+汇丰公户，20年办理经验！",
      "summary": "全程一站式服务，交由我方持牌秘书全程代办～ 📂【办理所需资料】 1️⃣ 中英文公司名称 2️⃣ 股东董事护照 / 身份",
      "title_en": "🔥 Hong Kong + HSBC corporate account, 20 processing!",
      "summary_en": "One-stop service, secretary agency service ～ 📂【 processing materials 】 1️⃣ company 2️⃣ /",
      "author_nickname": "海客精灵-企业管理",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 6,
        "comments": 5,
        "collects": 7
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-07-27",
      "search_keyword": "HSBC 香港 公司账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a993569000000002803a7ff",
      "note_id": "6a993569000000002803a7ff",
      "title": "HK 主体｜汇丰 + 审计配套干货✨",
      "summary": "很多做的小伙伴会有困扰，没有关联主体，不知道该怎么对接账户 其实条件不用想象中那么严苛‼️ ✅无关联主体也可对接汇丰",
      "title_en": "HK ｜ HSBC + ✨",
      "summary_en": "‼️ ✅ HSBC",
      "author_nickname": "注册公司代理记账找恒诚信",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 6,
        "comments": 10,
        "collects": 6
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-03",
      "search_keyword": "HSBC 香港 公司账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a8d62150000000011012551",
      "note_id": "6a8d62150000000011012551",
      "title": "✅️香港公司+汇丰公户，可免费加急办理！",
      "summary": "全程一站式服务，交由我方持牌秘书全程代办～ 📂【办理所需资料】 1️⃣ 中英文公司名称 2️⃣ 股东董事护照 / 身份",
      "title_en": "✅️ Hong Kong company + HSBC corporate account, processing!",
      "summary_en": "One-stop service, secretary agency service ～ 📂【 processing materials 】 1️⃣ company 2️⃣ /",
      "author_nickname": "海客精灵-企业管理",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 2,
        "collects": 4
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-25",
      "search_keyword": "HSBC 香港 公司账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-655c7b3400000000320054d7",
      "note_id": "655c7b3400000000320054d7",
      "title": "实用攻略！app如何启用汇丰🏦公戸？",
      "summary": "今天小编来跟大家分享一篇关于汇丰公司账户app启用的指南。 记得提前装好香港汇丰Business Express哦~，可",
      "title_en": "! app HSBC 🏦?",
      "summary_en": "HSBC company app. Hong Kong HSBC Business Express ~",
      "author_nickname": "中海通达企业咨询",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 11,
        "comments": 0,
        "collects": 12
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2023-11-21",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-671ce670000000002100593d",
      "note_id": "671ce670000000002100593d",
      "title": "diy香港汇丰对公账户极速开户分享",
      "summary": "小红书上看很多人说hsbchk的公司户很难开，自己试了一下，流程其实蛮简单的。整体的服务也很好。周二申请周五就获批了，效",
      "title_en": "Diy Hong Kong HSBC account opening",
      "summary_en": "Hsbchk corporate account,, process. service",
      "author_nickname": "很难是多难",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 79,
        "comments": 23,
        "collects": 127
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2024-10-26",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a82a619000000002800a3dd",
      "note_id": "6a82a619000000002800a3dd",
      "title": "小米澎湃OS4 汇丰银行闪退",
      "summary": "小米17promax升级澎湃OS4后，香港汇丰银行APP无法打开，每次点开APP，就显示图二持续几秒后退出。 #澎湃os",
      "title_en": "OS4 HSBC",
      "summary_en": "17promax OS4, Hong Kong HSBC APP, APP,. os",
      "author_nickname": "Lucian.Y",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 12,
        "comments": 50,
        "collects": 5
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-17",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a9fe90b00000000260152ba",
      "note_id": "6a9fe90b00000000260152ba",
      "title": "汇丰银行双肩包",
      "summary": "汇丰银行双肩包",
      "title_en": "HSBC",
      "summary_en": "HSBC",
      "author_nickname": "爱吃草的鱼",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 5,
        "comments": 32,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-08",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-68626f49000000002203ff45",
      "note_id": "68626f49000000002203ff45",
      "title": "香港公司注册+汇丰开户外贸必备单品#香港公司 #香港公司转口贸易  #香港  #…",
      "summary": "香港公司注册+汇丰开户外贸必备单品#香港公司 #香港公司转口贸易  #香港  #vlog日常  #外贸",
      "title_en": "Hong Kong company + HSBC account opening Hong Kong company Hong Kong company Hong Kong",
      "summary_en": "Hong Kong company + HSBC account opening Hong Kong company Hong Kong company Hong Kong vlog",
      "author_nickname": "Mahesh",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-06-30",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69b6aed9000000001d01c328",
      "note_id": "69b6aed9000000001d01c328",
      "title": "汇丰这是怎么了",
      "summary": "命苦，一下午了都打不开[哭惹R]马上要离港了#银行卡  #汇丰",
      "title_en": "HSBC",
      "summary_en": "[ R] bank HSBC",
      "author_nickname": "是一只羊🐑",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 105,
        "comments": 95,
        "collects": 45
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-03-15",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-699ea085000000002801f0ac",
      "note_id": "699ea085000000002801f0ac",
      "title": "汇丰银行绑定环球网上银行",
      "summary": "#绑定银行卡  #银行卡  因为汇丰同名账户之间互转是免费用这个优势，所以办理了汇丰中国和汇丰中国香港的账户。 然后在网",
      "title_en": "HSBC bank",
      "summary_en": "Bank bank HSBC fees, processing HSBC HSBC Hong Kong",
      "author_nickname": "我是4月的小满",
      "sentiment": "中性",
      "themes": [
        "费用门槛"
      ],
      "category": "费用门槛",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 102,
        "comments": 25,
        "collects": 131
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-02-25",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69cb7ab8000000001a02f4f5",
      "note_id": "69cb7ab8000000001a02f4f5",
      "title": "换手机，旧手机已回收，无法登录汇丰银行AP",
      "summary": "换手机，旧手机已回收，无法登录汇丰银行AP",
      "title_en": "HSBC AP",
      "summary_en": "HSBC AP",
      "author_nickname": "Vivian",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 95,
        "comments": 12,
        "collects": 146
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-03-31",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a915036000000000502adcf",
      "note_id": "6a915036000000000502adcf",
      "title": "🇭🇰汇丰MT拿到offer啦（附经验芬享）",
      "summary": "我是去年秋招上岸HSBC MT的，bg不算出挑，英硕QS前50非G5，finance方向，之前有几段equity res",
      "title_en": "🇭🇰 HSBC MT offer ( )",
      "summary_en": "HSBC MT, bg, QS 50 G5, finance, equity res",
      "author_nickname": "BingBing",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 14,
        "comments": 13,
        "collects": 12
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-28",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a7f07b4000000003301b7a4",
      "note_id": "6a7f07b4000000003301b7a4",
      "title": "汇丰银行付款流程！",
      "summary": "#汇丰银行  #跨境电商  #支付  #跨境电商财务  #跨境电商出纳 #深圳跨境电商出纳",
      "title_en": "HSBC process!",
      "summary_en": "HSBC cross-border cross-border cross-border cross-border",
      "author_nickname": "秀垠",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 7,
        "comments": 1,
        "collects": 8
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-14",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-691512cd000000000d03a98a",
      "note_id": "691512cd000000000d03a98a",
      "title": "还不知道港卡怎么开吗，以汇丰红蓝狮子为例一次性讲清楚： 1 | 账户 内地：一卡…",
      "summary": "还不知道港卡怎么开吗，以汇丰红蓝狮子为例一次性讲清楚： 1 | 账户 内地：一卡一户，卡就是账户 香港：一户多卡，一户管",
      "title_en": "HSBC: 1 |:",
      "summary_en": "HSBC: 1 |:, Hong Kong:",
      "author_nickname": "不定时回忆录",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 515,
        "comments": 96,
        "collects": 870
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-11-13",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6973aafa0000000022021a77",
      "note_id": "6973aafa0000000022021a77",
      "title": "HSBC（香港汇丰银行）转账汇款失败（转数快）",
      "summary": "上一篇解决了手机 APP 受限的问题后，我分别用招商银行和农业银行的跨境支付通转账给我的汇丰银行，都失败了，我打电话咨询",
      "title_en": "HSBC( Hong Kong HSBC ) failed ( )",
      "summary_en": "APP, bank bank cross-border HSBC, failed",
      "author_nickname": "晓飞影",
      "sentiment": "负面",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 52,
        "comments": 4,
        "collects": 59
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-01-24",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69daec0e000000001a02c845",
      "note_id": "69daec0e000000001a02c845",
      "title": "内地中国银行转香港汇丰无手续费流程",
      "summary": "内地中国银行转香港汇丰无手续费流程",
      "title_en": "Bank Hong Kong HSBC process",
      "summary_en": "Bank Hong Kong HSBC process",
      "author_nickname": "Nan",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 334,
        "comments": 16,
        "collects": 368
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-04-12",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-682014380000000022027ccd",
      "note_id": "682014380000000022027ccd",
      "title": "HSBC",
      "summary": "Update ：昨天跟我说到账了[害羞R][赞R][赞R] 香港汇丰转账好慢呀，5月3号发的转账，现在还没有到账……（没",
      "title_en": "HSBC",
      "summary_en": "Update: [ R][ R][ R] Hong Kong HSBC, 5 3,......(",
      "author_nickname": "小红薯64BAD59D",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 34,
        "comments": 30,
        "collects": 19
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-05-11",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aaa9b590000000029014dbc",
      "note_id": "6aaa9b590000000029014dbc",
      "title": "🇬🇧 英留子必备｜HSBC开户全攻略",
      "summary": "刚到英国准备开银行卡的同学，除了Monzo、Starling这类线上bank，也可以考虑开一个传统账户。HSBC汇丰作为",
      "title_en": "🇬🇧 ｜HSBC account opening",
      "summary_en": "Bank, Monzo, Starling bank,. HSBC HSBC",
      "author_nickname": "呱呱蛙申根咨询",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 4,
        "comments": 0,
        "collects": 6
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-16",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-68633f0b0000000017036160",
      "note_id": "68633f0b0000000017036160",
      "title": "香港汇丰转美国花旗入金ibkr教程",
      "summary": "这个教程只适用于香港汇丰通过美国花旗入金美元的朋友。 如果ibkr给的是香港花旗是最好的，也有很多朋友跟我一样没有给选择",
      "title_en": "Hong Kong HSBC ibkr",
      "summary_en": "Hong Kong HSBC approved. ibkr Hong Kong",
      "author_nickname": "胖宁不吃菜",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 264,
        "comments": 78,
        "collects": 368
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-07-01",
      "search_keyword": "汇丰 贸易融资",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-694a26e3000000001e02257f",
      "note_id": "694a26e3000000001e02257f",
      "title": "汇丰密码函终于收到了",
      "summary": "12月20号咨询了客服，收不到密码怎么，客服让再等一等，结果今12月23号就收到了快递电话，密码函到了",
      "title_en": "HSBC",
      "summary_en": "12 20,,, 12 23",
      "author_nickname": "🆕焕然一新",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 21,
        "comments": 20,
        "collects": 13
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-12-23",
      "search_keyword": "汇丰 贸易融资",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a9c1daf0000000028028739",
      "note_id": "6a9c1daf0000000028028739",
      "title": "汇丰蓝狮子开卡踩坑贴",
      "summary": "其实一直到卡片到自己手里都没有什么踩坑 人在香港的时候就可以办理 收集APP操作，完了之后寄到内地的地址 网上有很多教程",
      "title_en": "HSBC",
      "summary_en": "Hong Kong processing APP",
      "author_nickname": "妹妹和端午",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 116,
        "comments": 27,
        "collects": 147
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-05",
      "search_keyword": "汇丰 贸易融资",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-675abc94000000000103dfff",
      "note_id": "675abc94000000000103dfff",
      "title": "千万不要跟风开香港汇丰银行卡，否则你会..",
      "summary": "最近香港银行开户真的太火了去香港开户现场顺利拿卡丝滑办理，给大家反馈下情况，供准备去香港开户的朋友一点儿参考~以下就是我",
      "title_en": "Hong Kong HSBC",
      "summary_en": "Hong Kong bank account opening Hong Kong account opening processing,, Hong Kong account opening ~",
      "author_nickname": "宜港汇身份咨询",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 185,
        "comments": 6,
        "collects": 256
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2024-12-12",
      "search_keyword": "汇丰 贸易融资",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a8fe5c2000000002c03d8d0",
      "note_id": "6a8fe5c2000000002c03d8d0",
      "title": "汇丰银行如果查到假资料，钱会被没收吗#不懂就问有问必答 #万能的小红书",
      "summary": "汇丰银行如果查到假资料，钱会被没收吗#不懂就问有问必答  #万能的小红书",
      "title_en": "HSBC materials",
      "summary_en": "HSBC materials",
      "author_nickname": "小红薯6A153A81",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 12,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-27",
      "search_keyword": "汇丰 贸易融资",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a88693b000000003400c65e",
      "note_id": "6a88693b000000003400c65e",
      "title": "终于用跨境支付通免手续费给汇丰香港转账了",
      "summary": "半年前就开始尝试用跨境支付通给汇丰转账了 一顿操作下来失败好几次，秒拒！ 我猜测是地址不对，汇丰那个地址真的好”烦人星",
      "title_en": "Cross-border HSBC Hong Kong",
      "summary_en": "Cross-border HSBC failed,!, HSBC ”",
      "author_nickname": "何耐",
      "sentiment": "负面",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 131,
        "comments": 60,
        "collects": 194
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-21",
      "search_keyword": "汇丰 贸易融资",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a95931e00000000370322d6",
      "note_id": "6a95931e00000000370322d6",
      "title": "#汇丰 败诉#不懂就问有问必答 #万能的小红书",
      "summary": "#汇丰 败诉#不懂就问有问必答  #万能的小红书",
      "title_en": "HSBC",
      "summary_en": "HSBC",
      "author_nickname": "大海的日落日出",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 3,
        "comments": 1,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-31",
      "search_keyword": "汇丰 贸易融资",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6937d37b000000001e004509",
      "note_id": "6937d37b000000001e004509",
      "title": "汇丰开户警告！这3个坑踩了，等于白跑一趟",
      "summary": "刚在HK帮大家肉测了汇丰开户，发现有几个天坑，一旦踩了，时间和精力都白费！想去开卡的姐妹，先花2分钟看完这篇避坑指南",
      "title_en": "HSBC account opening! 3",
      "summary_en": "HK HSBC account opening,,, time!, 2",
      "author_nickname": "Cherry",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 91,
        "comments": 6,
        "collects": 133
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-12-09",
      "search_keyword": "汇丰 贸易融资",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-693fffae000000000d03dead",
      "note_id": "693fffae000000000d03dead",
      "title": "汇丰银行的低級貸款推销手法 （邱小姐）",
      "summary": "一星期起码打兩次电话来，剛才还在一小时內打了兩次来，每次都不聽你说话，只不停说他们的稿詞，連你直接叫她她都不回答，已经很",
      "title_en": "HSBC ( )",
      "summary_en": "HSBC Hong Kong commercial banking discussion",
      "author_nickname": "KK",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 4,
        "comments": 0,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-12-15",
      "search_keyword": "汇丰 贸易融资",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-67dcf8cd000000001201d1a1",
      "note_id": "67dcf8cd000000001201d1a1",
      "title": "国际本票信用证业务",
      "summary": "#本票  #国际信用证  汇丰银行本票",
      "title_en": "Letter of credit",
      "summary_en": "Letter of credit HSBC",
      "author_nickname": "天天-",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 3,
        "comments": 11,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-03-21",
      "search_keyword": "汇丰 信用证",
      "competitors": [
        "汇丰"
      ],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa79d1b000000002802e9e0",
      "note_id": "6aa79d1b000000002802e9e0",
      "title": "备用信用证SBLC Provider",
      "summary": "UBS, HSBC DE, HSBC UK 直接开证方",
      "title_en": "Letter of credit SBLC Provider",
      "summary_en": "UBS, HSBC DE, HSBC UK",
      "author_nickname": "麦田守望者",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-14",
      "search_keyword": "汇丰 信用证",
      "competitors": [
        "汇丰"
      ],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-68d25e91000000000e033f55",
      "note_id": "68d25e91000000000e033f55",
      "title": "香港汇丰银行效率真差，信用证交单十多天还没寄走，银行资料更新一直显示待更新，垃圾…",
      "summary": "香港汇丰银行效率真差，信用证交单十多天还没寄走，银行资料更新一直显示待更新，垃圾",
      "title_en": "Hong Kong HSBC, letter of credit, bank materials",
      "summary_en": "Hong Kong HSBC, letter of credit, bank materials",
      "author_nickname": "若心矿泉水",
      "sentiment": "负面",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 20,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-09-23",
      "search_keyword": "汇丰 信用证",
      "competitors": [
        "汇丰"
      ],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a2fadae0000000022014129",
      "note_id": "6a2fadae0000000022014129",
      "title": "汇丰银行信用证申请",
      "summary": "汇丰银行信用证申请",
      "title_en": "HSBC letter of credit",
      "summary_en": "HSBC letter of credit",
      "author_nickname": "钱途小记",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 9,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-15",
      "search_keyword": "汇丰 信用证",
      "competitors": [
        "汇丰"
      ],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a1e65660000000037037088",
      "note_id": "6a1e65660000000037037088",
      "title": "香港汇丰银行信用证",
      "summary": "有人填写过汇丰银行信用证吗？第一行申请人公司地址这些没办法填写齐全，有什么办法能处理吗？[哭惹R][哭惹R][哭惹R",
      "title_en": "Hong Kong HSBC letter of credit",
      "summary_en": "HSBC letter of credit? company,? [ R][ R][ R",
      "author_nickname": "。。",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 7,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-02",
      "search_keyword": "汇丰 信用证",
      "competitors": [
        "汇丰"
      ],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-672616e5000000001b02c7cb",
      "note_id": "672616e5000000001b02c7cb",
      "title": "避雷！汇丰拒收人民币信用证➕取消账",
      "summary": "香港贸易公司用汇丰公户收美元信用证，开户到今7年一直都是收美元信用证，非常滿意。8月客户突然开人民币信用证，就出问题，被",
      "title_en": "! HSBC letter of credit ➕",
      "summary_en": "Hong Kong company HSBC corporate account letter of credit, account opening 7 letter of credit,. 8 letter of credit",
      "author_nickname": "Natalie 💫",
      "sentiment": "正面",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 6,
        "comments": 25,
        "collects": 4
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2024-11-02",
      "search_keyword": "汇丰 信用证",
      "competitors": [
        "汇丰"
      ],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-696442640000000021032905",
      "note_id": "696442640000000021032905",
      "title": "sblc 买断 提供pof bcl 多手勿扰",
      "summary": "#备用信用证买断#备用信用证融资 #巴克莱汇丰开证",
      "title_en": "Sblc pof bcl",
      "summary_en": "Letter of credit letter of credit HSBC",
      "author_nickname": "批发",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 2,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-01-12",
      "search_keyword": "汇丰 信用证",
      "competitors": [
        "汇丰"
      ],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69cfbf12000000001e00e427",
      "note_id": "69cfbf12000000001e00e427",
      "title": "孟加拉的信用证不做！",
      "summary": "孟加拉的信用证，能不做就不做。 如果你非要做，加汇丰或渣打做保兑行。 我之前遇到孟加拉客户要做信用证的，都是直接先要银行",
      "title_en": "Letter of credit!",
      "summary_en": "Letter of credit,., HSBC Standard Chartered. letter of credit, bank",
      "author_nickname": "美少女壮士",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 186,
        "comments": 166,
        "collects": 136
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-04-03",
      "search_keyword": "汇丰 信用证",
      "competitors": [
        "汇丰",
        "渣打"
      ],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a01d54f000000003700c794",
      "note_id": "6a01d54f000000003700c794",
      "title": "#信用证LC #香港汇丰银行 #信用证贴现",
      "summary": "#信用证LC  #香港汇丰银行  #信用证贴现",
      "title_en": "Letter of credit LC Hong Kong HSBC letter of credit",
      "summary_en": "Letter of credit LC Hong Kong HSBC letter of credit",
      "author_nickname": "兔兔子",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 0,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-11",
      "search_keyword": "汇丰 信用证",
      "competitors": [
        "汇丰"
      ],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa46a30000000001103184a",
      "note_id": "6aa46a30000000001103184a",
      "title": "汇丰银行英国版HSBC UK申请全流程攻略！",
      "summary": "有几个宝子私下问我某步骤，重新申请就记录下来啦 有需要的宝子可以码住！[害羞R] 不是最终结果之后还需要等待审核o",
      "title_en": "HSBC HSBC UK process!",
      "summary_en": "! [ R] o",
      "author_nickname": "Zeki",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 973,
        "comments": 44,
        "collects": 1488
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-12",
      "search_keyword": "汇丰 信用证",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa27e9a000000002601e196",
      "note_id": "6aa27e9a000000002601e196",
      "title": "限时｜香港西九龙高铁站港卡攻略！",
      "summary": "G层（地面大堂） 1. 汇丰银行（HSBC）｜西九龙个人理财中心 • 铺位：WEK G-15，近F出口（近复星财富G",
      "title_en": "｜ Hong Kong!",
      "summary_en": "G ( ) 1. HSBC (HSBC)｜ •: WEK G-15, F export ( G",
      "author_nickname": "是蛋妞啊Daniel",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 150,
        "comments": 47,
        "collects": 189
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-10",
      "search_keyword": "汇丰 信用证",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a777959000000002403d2e1",
      "note_id": "6a777959000000002403d2e1",
      "title": "汇丰pulse卡的下卡和使用攻略",
      "summary": "pulse这张卡还是蛮不一样的，跟大陆的卡确实有很多区别。在规则和使用上，我觉得比大陆的卡复杂多了。 这篇主要从以下几点",
      "title_en": "HSBC pulse",
      "summary_en": "Pulse",
      "author_nickname": "af",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 831,
        "comments": 211,
        "collects": 1520
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-09",
      "search_keyword": "汇丰 信用证",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa3be43000000001103342f",
      "note_id": "6aa3be43000000001103342f",
      "title": "关于建行跨境支付通向汇丰汇款终于成功了",
      "summary": "先是用汇丰转数快支付识别码支付，一直闪退款，试了很多次都不行，后来换汇丰账户号码，还是不行，还是闪退，最后选了用手机号转",
      "title_en": "Cross-border HSBC successful",
      "summary_en": "HSBC,,, HSBC",
      "author_nickname": "东三环薛定谔",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 6,
        "comments": 6,
        "collects": 7
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-11",
      "search_keyword": "汇丰 跨境收款",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa115ce0000000027016824",
      "note_id": "6aa115ce0000000027016824",
      "title": "享受丝滑收款，跨境电商人的王炸组合！",
      "summary": "做外贸、亚马逊、独立站的宝子们，谁懂啊！ 以前回款慢、汇损高、付款还一堆限制，真的头大😭 直到给香港公司配了汇丰公户",
      "title_en": "Collections, cross-border!",
      "summary_en": "!,,, 😭 Hong Kong company HSBC corporate account",
      "author_nickname": "港岛Office",
      "sentiment": "负面",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-09",
      "search_keyword": "汇丰 跨境收款",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aaa625d000000001001f940",
      "note_id": "6aaa625d000000001001f940",
      "title": "报错码K999",
      "summary": "【前情提要】 本抠搜留学生之前为了省手续费一直采用ATM取现金转存hsbc法，后面得知每年有境外提现限额，金色年华卡正在",
      "title_en": "K999",
      "summary_en": "【 】 ATM hsbc",
      "author_nickname": "大艺术家",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 3,
        "comments": 0,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-16",
      "search_keyword": "汇丰 跨境收款",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a8eb386000000000a008959",
      "note_id": "6a8eb386000000000a008959",
      "title": "光大转汇丰实测教程",
      "summary": "今天转了两笔同名汇丰都是秒到账的，转出💰就是到账💰，内地跟香港现在做的确实很好了！测试之前我以为只有四大才可以秒到",
      "title_en": "HSBC",
      "summary_en": "HSBC, 💰 💰, Hong Kong!",
      "author_nickname": "大哥莫说二哥🥕",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 11,
        "comments": 12,
        "collects": 13
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-26",
      "search_keyword": "汇丰 跨境收款",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a0126060000000035031d6f",
      "note_id": "6a0126060000000035031d6f",
      "title": "兴业银行境外支付终于成功了",
      "summary": "兴业转汇丰跨境支付避坑指南 亲测N次兴业跨境人民币转汇丰，终于踩坑成功💪 一开始次次被退，提示RR04收款机构审核拒绝",
      "title_en": "Bank successful",
      "summary_en": "HSBC cross-border N cross-border HSBC, successful 💪, RR04 collections rejected",
      "author_nickname": "柳北区靓仔",
      "sentiment": "负面",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 34,
        "comments": 19,
        "collects": 27
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-11",
      "search_keyword": "汇丰 跨境收款",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69e5f4e3000000001a032bd6",
      "note_id": "69e5f4e3000000001a032bd6",
      "title": "汇丰太会赚钱了",
      "summary": "听客户经理说汇丰卓越环球转账没有手续费 打算往香港转点RMB 结果没有人民币账户 原来人民币没有办法转到香港 要先换成外",
      "title_en": "HSBC",
      "summary_en": "Relationship manager HSBC Hong Kong RMB Hong Kong",
      "author_nickname": "来都Leila",
      "sentiment": "中性",
      "themes": [
        "客户经理"
      ],
      "category": "客户经理",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 34,
        "comments": 48,
        "collects": 13
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-04-20",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a8c16350000000017001d87",
      "note_id": "6a8c16350000000017001d87",
      "title": "8月24日实际操作了一下，发现这点小区别；",
      "summary": "1、汇丰有在线服务，遇到问题可以直接线上问，最开始是机器人，机器人无法解决的问题，就有真人答复。 2、美金汇率不一样，今",
      "title_en": "8 24,;",
      "summary_en": "1, HSBC service,,,,. 2",
      "author_nickname": "大头",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 16,
        "collects": 4
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-24",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa4ccd2000000002b027092",
      "note_id": "6aa4ccd2000000002b027092",
      "title": "汇丰中国9月新资金美金定存： 三个月：4.10%，2000美金起存 一年期：本月…",
      "summary": "汇丰中国9月新资金美金定存： 三个月：4.10%，2000美金起存 一年期：本月上调至3.75%，6000美金起存",
      "title_en": "HSBC 9:: 4.10%, 2000:",
      "summary_en": "HSBC 9:: 4.10%, 2000: 3.75%, 6000",
      "author_nickname": "ccccc",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 19,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-12",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a3fd7dd0000000017009364",
      "note_id": "6a3fd7dd0000000017009364",
      "title": "汇丰HSBC👋",
      "summary": "从汇丰离职也有几个月了，有问题随便问！ 老实讲外资的人文关怀和待遇还是很不错的，而且同事都是很优秀的小伙伴，有很多不同的",
      "title_en": "HSBC HSBC👋",
      "summary_en": "HSBC,!",
      "author_nickname": "未末Viki",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 207,
        "comments": 216,
        "collects": 75
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-27",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a570739000000001c025906",
      "note_id": "6a570739000000001c025906",
      "title": "寻上海汇丰和东亚银行客户经理",
      "summary": "想做等值50个rmb的美金定存",
      "title_en": "HSBC bank relationship manager",
      "summary_en": "50 rmb",
      "author_nickname": "Garmin✈",
      "sentiment": "中性",
      "themes": [
        "客户经理"
      ],
      "category": "客户经理",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 5,
        "comments": 38,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-07-15",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰",
        "东亚"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a2ed611000000001c027c12",
      "note_id": "6a2ed611000000001c027c12",
      "title": "香港汇丰RM到底能行吗？会不会被裁？",
      "summary": "香港汇丰RM，最近感觉身边好多人都面试上了，不用会说英语，不用会粤语都能去，甚至在原公司的考核都还蛮低的，然后就能去，这",
      "title_en": "Hong Kong HSBC RM??",
      "summary_en": "Hong Kong HSBC RM,,,, company",
      "author_nickname": "小c",
      "sentiment": "中性",
      "themes": [
        "客户经理"
      ],
      "category": "客户经理",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 139,
        "comments": 170,
        "collects": 109
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-15",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa22da200000000260308cb",
      "note_id": "6aa22da200000000260308cb",
      "title": "汇丰银行，38500/月，现在接受无经验",
      "summary": "汇丰银行9月开放的秋招急缺人，有人来么？实习&校招 接受无经验，组里非常缺人~salary很香，想捞点留子，公司业务稳定",
      "title_en": "HSBC, 38500/",
      "summary_en": "HSBC 9,? &, ~salary,, company",
      "author_nickname": "小红薯6A899009",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 13,
        "comments": 20,
        "collects": 14
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-10",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a71c05000000000320205d5",
      "note_id": "6a71c05000000000320205d5",
      "title": "美国汇丰7天了还没动静，怎么办，已经7个工作日了，没有任何邮件收到，怎么回事啊，…",
      "summary": "美国汇丰7天了还没动静，怎么办，已经7个工作日了，没有任何邮件收到，怎么回事啊，国内汇丰卓越申请的，说5～7个工作日，到",
      "title_en": "HSBC 7,, 7",
      "summary_en": "HSBC 7,, 7,,, HSBC, 5～7",
      "author_nickname": "随缘",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 4,
        "comments": 39,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-04",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a8ca91b000000003103b8e9",
      "note_id": "6a8ca91b000000003103b8e9",
      "title": "崩溃 HSBC退出澳洲市场 卡里还有外币怎么办",
      "summary": "求问卡里还有点外币怎么办啊，汇率不好现在换了巨亏，外汇卡好像只能储蓄。 又不能直接转给其他commonwealth的账户",
      "title_en": "HSBC",
      "summary_en": "FX. commonwealth",
      "author_nickname": "不想喝酒",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 46,
        "comments": 70,
        "collects": 45
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-25",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa763e4000000000b0378f3",
      "note_id": "6aa763e4000000000b0378f3",
      "title": "#汇丰外包…",
      "summary": "#汇丰外包",
      "title_en": "HSBC",
      "summary_en": "HSBC",
      "author_nickname": "倥白昵称",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 11,
        "comments": 64,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-14",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a019242000000000702a68d",
      "note_id": "6a019242000000000702a68d",
      "title": "🇦🇺帮HSBC汇丰银行朋友组捞人",
      "summary": "朋友组3月底开展新业务（Treasury & Trade Solutions），想捞一些小伙伴，1-3年经验跳槽或者马上",
      "title_en": "🇦🇺 HSBC HSBC",
      "summary_en": "3 (Treasury & Trade Solutions),, 1-3",
      "author_nickname": "Shirley留学生职场资讯",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 15,
        "comments": 5,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-11",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69c75826000000001a028c32",
      "note_id": "69c75826000000001a028c32",
      "title": "用汇丰出入金需要注意什么",
      "summary": "只打算到券商[呃R]，不存在非同名转账",
      "title_en": "HSBC",
      "summary_en": "[ R]",
      "author_nickname": "kami",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 58,
        "comments": 28,
        "collects": 102
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-03-28",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a8a5f550000000008012bef",
      "note_id": "6a8a5f550000000008012bef",
      "title": "汇丰开始“清理”内地客户？",
      "summary": "汇丰近期通知部分内地客户，要求提交账户维持声明，否则投资相关服务可能被暂停甚至终止。为什么汇丰突然收紧？背后又释放了什么",
      "title_en": "HSBC “ ”?",
      "summary_en": "HSBC,, service. HSBC?",
      "author_nickname": "张会长观点",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 28,
        "comments": 5,
        "collects": 25
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-23",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a9ab94c000000002900f033",
      "note_id": "6a9ab94c000000002900f033",
      "title": "求助",
      "summary": "目前我已经开了众安，在汇丰和恒生中间想选择一个",
      "title_en": "HSBC Hong Kong commercial banking discussion",
      "summary_en": "HSBC Hang Seng",
      "author_nickname": "青铜小白（备战中国史版）",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 3,
        "comments": 37,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-04",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰",
        "恒生",
        "虚拟银行"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a700713000000002803164a",
      "note_id": "6a700713000000002803164a",
      "title": "开汇丰香港不想过港？三种途径按需挑选",
      "summary": "不用专程跑香港，照样拿下汇丰离岸对公户，三种方式优缺点一目了然： ▫️内地见证：线下网点面签，风控最稳，就是需要本人前往",
      "title_en": "HSBC Hong Kong?",
      "summary_en": "Hong Kong, HSBC corporate account,: ▫️:",
      "author_nickname": "香港海外财税小杨 ✔Kate",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-15",
      "search_keyword": "汇丰 开公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a4764f900000000080017e6",
      "note_id": "6a4764f900000000080017e6",
      "title": "香港汇丰公户｜开户经历➕公司年审分享",
      "summary": "我的香港汇丰对公户早就通过秘书公司开好啦，平时基本都是登录网银操作，实体扣账卡收到之后一直放着没用过。 这次刚好去香港办",
      "title_en": "Hong Kong HSBC corporate account ｜ account opening ➕ company",
      "summary_en": "Hong Kong HSBC corporate account approved secretary company,,. Hong Kong",
      "author_nickname": "Irene_HK",
      "sentiment": "正面",
      "themes": [
        "数字银行"
      ],
      "category": "数字银行",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 1,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-07-03",
      "search_keyword": "汇丰 开公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a2baded000000001702d0ee",
      "note_id": "6a2baded000000001702d0ee",
      "title": "一个很变态但能开香港汇丰公户的方法",
      "summary": "#香港公司注册  #注册香港公司  #银行开户 #香港公司账户 #注册公司 #香港公户 #汇丰公户 #恒生银行  #香港",
      "title_en": "Hong Kong HSBC corporate account",
      "summary_en": "Hong Kong company Hong Kong company bank account opening Hong Kong company company Hong Kong corporate account HSBC corporate account Hang Seng bank Hong Kong",
      "author_nickname": "小西在香港",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 7,
        "comments": 4,
        "collects": 10
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-12",
      "search_keyword": "汇丰 开公司户",
      "competitors": [
        "汇丰",
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a0692c100000000060362ef",
      "note_id": "6a0692c100000000060362ef",
      "title": "重磅利好：汇丰公户新通道！！！",
      "summary": "香港汇丰银行针对内地客户开户要求全面放宽，正式取消 “必须提供内地背景关联公司” 的核心门槛，电商、初创、科创三大主流行",
      "title_en": ": HSBC corporate account!!!",
      "summary_en": "Hong Kong HSBC account opening, “ company ” threshold",
      "author_nickname": "香港海外财税小杨 ✔Kate",
      "sentiment": "中性",
      "themes": [
        "费用门槛"
      ],
      "category": "费用门槛",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 1,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-19",
      "search_keyword": "汇丰 开公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a754b540000000006006fd8",
      "note_id": "6a754b540000000006006fd8",
      "title": "终于有人把香港汇丰开公户说明白了～",
      "summary": "#注册香港公司  #香港汇丰  #香港汇丰开户  #香港汇丰银行  #香港公司开户",
      "title_en": "Hong Kong HSBC open a corporate account ～",
      "summary_en": "Hong Kong company Hong Kong HSBC Hong Kong HSBC account opening Hong Kong HSBC Hong Kong company account opening",
      "author_nickname": "百晓生-企服咨询",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-07",
      "search_keyword": "汇丰 开公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-691c1888000000001e022374",
      "note_id": "691c1888000000001e022374",
      "title": "注册香港公司+汇丰开户， 特点解析！！",
      "summary": "香港公司+外贸行业模式： ①省流程→不需要申请进出口权，可以直接做海外客户与内地工厂的中转站。 ②税率低→香港公司利得税",
      "title_en": "Hong Kong company + HSBC account opening,!!",
      "summary_en": "Hong Kong company +: ① process → export,. ② → Hong Kong company",
      "author_nickname": "方华国际企业服务",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 5,
        "comments": 0,
        "collects": 8
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-11-21",
      "search_keyword": "汇丰 开公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a30ee44000000001603f5f5",
      "note_id": "6a30ee44000000001603f5f5",
      "title": "香港公司开汇丰公户，原来不用去香港？",
      "summary": "很多人不知道，作为香港老牌大行的汇丰，其实支持“内地分行见证面签”。也就是说，你完全可以在内地某家分行，喝着咖啡就把香港",
      "title_en": "Hong Kong company HSBC corporate account, Hong Kong?",
      "summary_en": "Hong Kong HSBC, “ ”.,, Hong Kong",
      "author_nickname": "日途咨询",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-16",
      "search_keyword": "汇丰 开公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a2bb05b0000000035023ca1",
      "note_id": "6a2bb05b0000000035023ca1",
      "title": "香港汇丰公司开户要求更新",
      "summary": "1️⃣无需大陆关联公司 2️⃣提供社保即可开 3️⃣无需业务合同 4️⃣国内北上广深面签 5️⃣做外贸、跨境、电商的客户",
      "title_en": "Hong Kong HSBC company account opening",
      "summary_en": "1️⃣ company 2️⃣ 3️⃣ 4️⃣ 5️⃣, cross-border",
      "author_nickname": "香港海外财税小杨 ✔Kate",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-13",
      "search_keyword": "汇丰 开公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a61782a000000002201b713",
      "note_id": "6a61782a000000002201b713",
      "title": "🏦开香港汇丰害怕被拒？华缔国际来帮你",
      "summary": "姐妹们，开香港公司账户是不是总提心吊胆？ 怕面签被拒、怕资料不全、怕白跑一趟😰 别慌！华缔国际帮你搞定👇 ✅先批后签",
      "title_en": "🏦 Hong Kong HSBC?",
      "summary_en": "Hong Kong company?, materials, 😰! 👇 ✅",
      "author_nickname": "华缔国际商务",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-07-23",
      "search_keyword": "汇丰 开公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a03e16c0000000036018c65",
      "note_id": "6a03e16c0000000036018c65",
      "title": "大陆人专属，汇丰无关联公司也能开户！",
      "summary": "如果董事国内没有背景公司，符合以下条件也可以开户：（仅限中国大陆人背景） 今天立即生效 第一种：贸易/服务类企业，国内无",
      "title_en": "HSBC company account opening!",
      "summary_en": "Company, account opening: ( ): / service corporate",
      "author_nickname": "睿丰达国际商务",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 0,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-13",
      "search_keyword": "汇丰 开公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a1e8b5c000000002003adb0",
      "note_id": "6a1e8b5c000000002003adb0",
      "title": "#极速版香港汇丰公司户开户资料，极简资料",
      "summary": "#干货知识分享  【香港汇丰银行-公司户】 符合以下其中一个要求都可开 1、没关联公司可开:需2年同行业社保+6个月工资",
      "title_en": "Hong Kong HSBC corporate account account opening materials, materials",
      "summary_en": "【 Hong Kong HSBC - corporate account 】 1, company: 2 +6",
      "author_nickname": "云企点企业服务",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 2,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-02",
      "search_keyword": "汇丰 开公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a35040d000000002103edb1",
      "note_id": "6a35040d000000002103edb1",
      "title": "求助 香港汇丰银行的企业账户收不到验证码",
      "summary": "有家人们知道 为什么收不到短信验证码吗 ？ 第一步 手机是能收到验证码的 把启动资料填完后 又现显示需要填写验证码 这一",
      "title_en": "Hong Kong HSBC corporate",
      "summary_en": "? materials",
      "author_nickname": "给我点颜色看看",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 6,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-19",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-67a8be2a000000001902cc88",
      "note_id": "67a8be2a000000001902cc88",
      "title": "香港公司开户有新变化（汇丰） 🧐2024年12月份，汇丰有了新的变化了。 香港公…",
      "summary": "香港公司开户有新变化（汇丰） 🧐2024年12月份，汇丰有了新的变化了。 香港公司要开这个yin行的朋友可以先了解下",
      "title_en": "Hong Kong company account opening ( HSBC ) 🧐2024 12, HSBC. Hong Kong",
      "summary_en": "Hong Kong company account opening ( HSBC ) 🧐2024 12, HSBC. Hong Kong company yin",
      "author_nickname": "Zma大湾区最靓的仔",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-02-09",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a688d15000000000f016fef",
      "note_id": "6a688d15000000000f016fef",
      "title": "7.28汇丰",
      "summary": "全程仅需30分钟就能成功下卡 前置核心提示：抵达香港过关后，首要步骤就是连接香港本地WiFi，商场、麦当劳、银行网点、机",
      "title_en": "7.28 HSBC",
      "summary_en": "30 successful: Hong Kong, Hong Kong WiFi,,, bank",
      "author_nickname": "小香香带你你玩转香港",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 0,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-07-28",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69352cb5000000000d0359db",
      "note_id": "69352cb5000000000d0359db",
      "title": "香港汇丰银开户攻略🇭🇰亲测二十分钟",
      "summary": "如果按这个流程都不能完成开户，那我也没办法了🤣 [一R]本开户攻略不需跟任何人接触（更别说预约），纯线上办理，完成后即",
      "title_en": "Hong Kong HSBC account opening 🇭🇰",
      "summary_en": "Process account opening, 🤣 [ R] account opening ( appointment ), processing",
      "author_nickname": "唯自由不可负",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 38,
        "comments": 24,
        "collects": 47
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-12-07",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a97c391000000002a007dea",
      "note_id": "6a97c391000000002a007dea",
      "title": "在HK设立公司开汇丰有哪些优势",
      "summary": "💻每10家新香港公司，一半以上由内地人开设，多用于跨境电商、外贸收款、海外投资、品牌出海核心原因整理如下： 1️⃣内地",
      "title_en": "HK company HSBC",
      "summary_en": "💻 10 Hong Kong company,, cross-border, collections,,: 1️⃣",
      "author_nickname": "弦音ou",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-02",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a8813cd000000002c001baf",
      "note_id": "6a8813cd000000002c001baf",
      "title": "香港注册+开公户一般都收多少钱呀？",
      "summary": "注册香港公司+开汇丰公户，8500元贵了吗？但是听说汇丰开下来挺久的，恒生怎么样？ #香港公司注册  #香港公户  #汇",
      "title_en": "Hong Kong + open a corporate account?",
      "summary_en": "Hong Kong company + HSBC corporate account, 8500? HSBC, Hang Seng? Hong Kong company Hong Kong corporate account",
      "author_nickname": "Josie碎碎念",
      "sentiment": "负面",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 7,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-21",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰",
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aaa721c000000002802d22d",
      "note_id": "6aaa721c000000002802d22d",
      "title": "这次去香港，把的汇丰账户处理了",
      "summary": "之前以为会很麻烦，要排队、要预约、要准备很多复杂材料。实际操作下来，比我想象中顺利一些，很多步骤都能在手机上完成。 把这",
      "title_en": "Hong Kong, HSBC",
      "summary_en": "Troublesome,, appointment, documents",
      "author_nickname": "百洋会",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 0,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-16",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69fd5c5b0000000023015469",
      "note_id": "69fd5c5b0000000023015469",
      "title": "5.8过港日记｜半小时拿下汇丰",
      "summary": "过关后第一件事！连上香港WiFi（商场/机场/麦当劳/银行都ok）网络很重要！！ 办理流程大致： 1：打开HSBC HK",
      "title_en": "5.8 ｜ HSBC",
      "summary_en": "! Hong Kong WiFi( / / / bank ok)!! processing process: 1: HSBC HK",
      "author_nickname": "香港小亚",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 3,
        "comments": 2,
        "collects": 14
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-08",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a8f129c000000000303f638",
      "note_id": "6a8f129c000000000303f638",
      "title": "汇丰开户五年社保需要是连缴吗",
      "summary": "#汇丰开户  #香港公司开户  #香港公司开户攻略  #汇丰开户攻略",
      "title_en": "HSBC account opening",
      "summary_en": "HSBC account opening Hong Kong company account opening Hong Kong company account opening HSBC account opening",
      "author_nickname": "狗狗君Y",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 3,
        "comments": 13,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-27",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-691c19d3000000001e0369e0",
      "note_id": "691c19d3000000001e0369e0",
      "title": "香港注册公司+汇丰开户，真的不难！",
      "summary": "您是否还在为企业拓展国际业务、优化运营而发愁？ 不妨了解一下注册香港公司的诸多好处：它能让您在取名、径营范围上更自由，助",
      "title_en": "Hong Kong company + HSBC account opening,!",
      "summary_en": "Corporate,? Hong Kong company:",
      "author_nickname": "方华国际企业服务",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 18,
        "comments": 14,
        "collects": 19
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-11-22",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-68e5b7e0000000000500238f",
      "note_id": "68e5b7e0000000000500238f",
      "title": "汇丰香港线上开户公司名称怎么填 #不懂就问有问必答  #万能的小红书…",
      "summary": "汇丰香港线上开户公司名称怎么填 #不懂就问有问必答  #万能的小红书",
      "title_en": "HSBC Hong Kong account opening company",
      "summary_en": "HSBC Hong Kong account opening company",
      "author_nickname": "用死亡圈住祢",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 3,
        "comments": 2,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-10-08",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a87eab1000000002c0039b2",
      "note_id": "6a87eab1000000002c0039b2",
      "title": "香港注册+开公户一般都收多少钱呀？",
      "summary": "注册香港公司+开汇丰公户，8500元贵了吗？我们老板说贵了，正常多少钱？md这是个我收到最便宜的价格了！但是听说汇丰开下",
      "title_en": "Hong Kong + open a corporate account?",
      "summary_en": "Hong Kong company + HSBC corporate account, 8500?,? md! HSBC",
      "author_nickname": "库库崽",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 3,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-21",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a9f8319000000002b011db6",
      "note_id": "6a9f8319000000002b011db6",
      "title": "香港西九龙汇丰银行指南 周六日开门",
      "summary": "唯一一家周日开门的汇丰网点，适合做开户 ⏰周一-周六 9:00-17:00 ⏰周日14:00-17:00 在高铁站GFM",
      "title_en": "Hong Kong HSBC",
      "summary_en": "HSBC, account opening ⏰ - 9:00-17:00 ⏰ 14:00-17:00 GFM",
      "author_nickname": "不得饿",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 33,
        "comments": 17,
        "collects": 50
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-08",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa3980b00000000280013a1",
      "note_id": "6aa3980b00000000280013a1",
      "title": "汇丰银行新背景没有更新",
      "summary": "如题，有没有大佬知道为什么汇丰版本也更新到最新了还是没有新背景",
      "title_en": "HSBC",
      "summary_en": "HSBC",
      "author_nickname": "Ero",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 5,
        "comments": 23,
        "collects": 6
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-11",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6816f71c0000000023010250",
      "note_id": "6816f71c0000000023010250",
      "title": "什么资料都没带中银汇丰轻松就拿到卡了",
      "summary": "网上的攻略说什么这严格那严格，我几乎啥也没准备，什么资料都没带，5月2号现场去办理，就直接下卡了，就现场问你点问题你如实",
      "title_en": "Materials BOCHK HSBC",
      "summary_en": "Materials, 5 2 processing",
      "author_nickname": "阿古朵笨笨的",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 513,
        "comments": 150,
        "collects": 445
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-05-04",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰",
        "中银香港"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-68d8aad60000000013018e2a",
      "note_id": "68d8aad60000000013018e2a",
      "title": "国庆不白跑！15分钟开通香港汇丰手把手攻略",
      "summary": "#香港银行卡  #香港开户  #香港开卡  #香港汇丰  #香港汇丰银行开户  #港卡  #内地人香港开户  #香港中银",
      "title_en": "! 15 Hong Kong HSBC",
      "summary_en": "Hong Kong bank Hong Kong account opening Hong Kong Hong Kong HSBC Hong Kong HSBC account opening Hong Kong account opening Hong Kong BOCHK",
      "author_nickname": "Jenny爸爸在香港",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1083,
        "comments": 201,
        "collects": 1946
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-09-28",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰",
        "中银香港"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69a99d3c000000002202f5b2",
      "note_id": "69a99d3c000000002202f5b2",
      "title": "香港汇丰app打不开是为什么",
      "summary": "头好大啊，一直这个界面，有人知道是为什么吗",
      "title_en": "Hong Kong HSBC app",
      "summary_en": "HSBC Hong Kong commercial banking discussion",
      "author_nickname": "✨✨",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 5,
        "comments": 16,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-03-05",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a3ce1db000000002102198e",
      "note_id": "6a3ce1db000000002102198e",
      "title": "香港汇丰noe账户",
      "summary": "汇丰账户不打算用，申请注销为避免产生管理费寄表格准备到香港注销。#汇丰noe  #汇丰注销  #汇丰账户注销",
      "title_en": "Hong Kong HSBC noe",
      "summary_en": "HSBC, account closure / deregistration Hong Kong account closure / deregistration. HSBC noe HSBC account closure / deregistration HSBC account closure / deregistration",
      "author_nickname": "LIN 2580",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 7,
        "comments": 20,
        "collects": 14
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-25",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-68c3feee000000001d0259c0",
      "note_id": "68c3feee000000001d0259c0",
      "title": "汇丰迟迟收不到密码函怎么办？！",
      "summary": "刚办好汇丰香港卡却迟迟收不到密码函？别急！亲测有效的几种方法分享给大家，总有一种能帮到你 方法一：电话申请重置 这是最直",
      "title_en": "HSBC?!",
      "summary_en": "HSBC Hong Kong?!,:",
      "author_nickname": "老铁聊港卡",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 286,
        "comments": 25,
        "collects": 426
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-09-13",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a2032a9000000003803732b",
      "note_id": "6a2032a9000000003803732b",
      "title": "乐｜亲测，赴港开卡，线上半小时搞定3张",
      "summary": "❓为什么要去开银行卡 ▪️汇丰开卡成功后，再申请【投资账户】可直接买美股 ▪️通过中银HK卡作为桥梁转账免手续费。即中银",
      "title_en": "｜,, 3",
      "summary_en": "❓ bank ▪️ HSBC successful, 【 】 ▪️ approved BOCHK HK. BOCHK",
      "author_nickname": "不二游",
      "sentiment": "正面",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1512,
        "comments": 223,
        "collects": 2557
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-03",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰",
        "中银香港"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-68196d9b000000002301e9a9",
      "note_id": "68196d9b000000002301e9a9",
      "title": "开汇丰香港账户全流程",
      "summary": "分享一下如何在内地开立香港汇丰卡的流程细节。 首先是在内地找客户经理预约在开户，如果不预约wak in的话转账限额只有",
      "title_en": "HSBC Hong Kong process",
      "summary_en": "Hong Kong HSBC process. relationship manager appointment account opening, appointment wak in",
      "author_nickname": "半岛茶Chloe🧡",
      "sentiment": "中性",
      "themes": [
        "客户经理"
      ],
      "category": "客户经理",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 16,
        "comments": 1,
        "collects": 9
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-05-06",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a1811530000000007029363",
      "note_id": "6a1811530000000007029363",
      "title": "汇丰投资账户是什么意思",
      "summary": "#小红书搜索  #万能的小红书  #问一问",
      "title_en": "HSBC",
      "summary_en": "HSBC Hong Kong commercial banking discussion",
      "author_nickname": "Jerry含",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-28",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a0ac599000000003703624a",
      "note_id": "6a0ac599000000003703624a",
      "title": "🇭🇰 汇丰pulse12天下卡 个人时间线分享",
      "summary": "4月知道有这张卡后，在小红书做功课收藏了10+帖子，看完还是有点混乱。自己摸索走了一通，整体还是比较简单顺利的，分享一下",
      "title_en": "🇭🇰 HSBC pulse12 time",
      "summary_en": "4, 10+",
      "author_nickname": "qq板板",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 558,
        "comments": 180,
        "collects": 935
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-18",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69dc6022000000002200d3a5",
      "note_id": "69dc6022000000002200d3a5",
      "title": "香港汇丰成功入金IBKR加拿大",
      "summary": "网上资料不是转香港就是美国的，加拿大的没搜到有用信息，分享一下。 ⚠️因为我的IBKR是开的加拿大账户，所以IB提供的汇",
      "title_en": "Hong Kong HSBC successful IBKR",
      "summary_en": "Materials Hong Kong,,. ⚠️ IBKR, IB",
      "author_nickname": "喵不识数",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 35,
        "comments": 5,
        "collects": 32
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-04-13",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69636c18000000000903a750",
      "note_id": "69636c18000000000903a750",
      "title": "汇丰控股（00005.HK）是一家总部位于英国伦敦的跨国银行及金融服务集团，其业…",
      "summary": "汇丰控股（00005.HK）是一家总部位于英国伦敦的跨国银行及金融服务集团，其业务网络覆盖全球约60个国家和地区，主要提",
      "title_en": "HSBC (00005.HK) bank service",
      "summary_en": "HSBC (00005.HK) bank service, 60",
      "author_nickname": "王梁",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-01-11",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69e82dd00000000023020233",
      "note_id": "69e82dd00000000023020233",
      "title": "4.22亲测！香港汇丰线上开户全流程",
      "summary": "香港银行开户全步骤｜新手避坑指南一篇看懂 刚深港往返回来，顺利拿下Y行 账 户！过程比想象中丝滑，分享我的经验，计划去开",
      "title_en": "4.22! Hong Kong HSBC account opening process",
      "summary_en": "Hong Kong bank account opening ｜, Y!",
      "author_nickname": "小花在香港",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 25,
        "comments": 0,
        "collects": 39
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-04-22",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-68e9d3350000000004011cf2",
      "note_id": "68e9d3350000000004011cf2",
      "title": "10.25汇丰、中银、渣打开户:30分钟搞定✌",
      "summary": "宝子们，个人办港卡那叫一个难哦😩门槛高到够不着（要存💰、还要各种复杂证明），流程烦到让人头大（预约、跑香港、等审核",
      "title_en": "10.25 HSBC, BOCHK, Standard Chartered account opening:30 ✌",
      "summary_en": "😩 threshold ( 💰, ), process ( appointment, Hong Kong",
      "author_nickname": "奶昔暴富",
      "sentiment": "负面",
      "themes": [
        "费用门槛"
      ],
      "category": "费用门槛",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1422,
        "comments": 203,
        "collects": 2169
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-10-11",
      "search_keyword": "汇丰 中介 开户",
      "competitors": [
        "汇丰",
        "渣打",
        "中银香港"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-696852bb000000000a02d8b6",
      "note_id": "696852bb000000000a02d8b6",
      "title": "汇丰经理被判刑！找非法中介开户的连带风险到底有多大？#汇丰银行客户经理  #中介…",
      "summary": "汇丰经理被判刑！找非法中介开户的连带风险到底有多大？#汇丰银行客户经理  #中介开户  ##都做金融明白人  ##资产配",
      "title_en": "HSBC! intermediary account opening? HSBC relationship manager intermediary",
      "summary_en": "HSBC! intermediary account opening? HSBC relationship manager intermediary account opening",
      "author_nickname": "紫晴在香港",
      "sentiment": "中性",
      "themes": [
        "客户经理"
      ],
      "category": "客户经理",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 17,
        "comments": 1,
        "collects": 12
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-01-15",
      "search_keyword": "汇丰 中介 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-699d7f32000000000b010357",
      "note_id": "699d7f32000000000b010357",
      "title": "香港汇丰开户｜含泪复盘✅找代办稳拿卡 😭跑断腿总结的干货！别再自己瞎折腾啦～ 💡…",
      "summary": "香港汇丰开户｜含泪复盘✅找代办稳拿卡 😭跑断腿总结的干货！别再自己瞎折腾啦～ 💡 必看避坑重点 ❌ 别连香港公共Wi",
      "title_en": "Hong Kong HSBC account opening ｜ ✅ agency service 😭! ～ 💡",
      "summary_en": "Hong Kong HSBC account opening ｜ ✅ agency service 😭! ～ 💡 ❌ Hong Kong Wi",
      "author_nickname": "Michellel愛自由",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 17,
        "comments": 0,
        "collects": 16
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-02-24",
      "search_keyword": "汇丰 中介 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-695d47d600000000090399cf",
      "note_id": "695d47d600000000090399cf",
      "title": "汇丰内部人员协助内地客户开户被抓",
      "summary": "汇丰银行内部人员协助内地客户被判刑，应该那些通过中介开户的吧，120多人才赚了1.3万真不值啊[扯脸H",
      "title_en": "HSBC account opening",
      "summary_en": "HSBC, approved intermediary account opening, 120 1.3 [ H",
      "author_nickname": "虎比木",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 222,
        "comments": 97,
        "collects": 97
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-01-07",
      "search_keyword": "汇丰 中介 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69d61f47000000001b0039c4",
      "note_id": "69d61f47000000001b0039c4",
      "title": "4.8赴港开户找了个代办15分钟下户~",
      "summary": "1.重要提示：过关后第一件事！连上香港WiFi（商场/机场/麦当劳/银行都ok）再操作！ 2.打开HSBC HK App",
      "title_en": "4.8 account opening agency service 15 ~",
      "summary_en": "1.:! Hong Kong WiFi( / / / bank ok)! 2. HSBC HK App",
      "author_nickname": "企无忧Linda",
      "sentiment": "中性",
      "themes": [
        "数字银行"
      ],
      "category": "数字银行",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 24,
        "comments": 9,
        "collects": 34
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-04-08",
      "search_keyword": "汇丰 中介 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a6ab317000000000101d9f4",
      "note_id": "6a6ab317000000000101d9f4",
      "title": "汇丰、恒生整合的7个职能部门主管，汤颖欣M",
      "summary": "Marina、Jonathon Lee、张家慧Kathy、柴逸民Forrest、倪福连Derek、张嘉玲Maggie、廖",
      "title_en": "HSBC, Hang Seng 7, M",
      "summary_en": "Marina, Jonathon Lee, Kathy, Forrest, Derek, Maggie",
      "author_nickname": "投行生活家",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 27,
        "comments": 4,
        "collects": 30
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-07-30",
      "search_keyword": "汇丰 公司秘书 开户",
      "competitors": [
        "汇丰",
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a438ecb00000000170299af",
      "note_id": "6a438ecb00000000170299af",
      "title": "终于找到家靠谱的秘书公司了～",
      "summary": "香港公司注册好了，汇丰公户也开下来了[偷笑R]，也不妄我花这么多时间去找秘书公司 注册花了4600，汇丰开户花了",
      "title_en": "Secretary company ～",
      "summary_en": "Hong Kong company, HSBC corporate account [ R], time secretary company 4600, HSBC account opening",
      "author_nickname": "薯仔",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 16,
        "comments": 17,
        "collects": 15
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-30",
      "search_keyword": "汇丰 公司秘书 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-696445f9000000000e00cba7",
      "note_id": "696445f9000000000e00cba7",
      "title": "汇丰密码函到了",
      "summary": "早上刚到公司，心心念念的汇丰密码函就到出现在了工位上",
      "title_en": "HSBC",
      "summary_en": "Company, HSBC",
      "author_nickname": "Admire",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 4,
        "comments": 11,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-01-12",
      "search_keyword": "汇丰 公司秘书 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a432973000000000f031182",
      "note_id": "6a432973000000000f031182",
      "title": "蹲汇丰上海客户经理，想开卡，以前手欠开过个二类户，可以的来[捂脸R]#银行卡…",
      "summary": "蹲汇丰上海客户经理，想开卡，以前手欠开过个二类户，可以的来[捂脸R]#银行卡",
      "title_en": "HSBC relationship manager,,, [ R] bank",
      "summary_en": "HSBC relationship manager,,, [ R] bank",
      "author_nickname": "Daz",
      "sentiment": "中性",
      "themes": [
        "客户经理"
      ],
      "category": "客户经理",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 6,
        "comments": 25,
        "collects": 4
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-30",
      "search_keyword": "汇丰 公司秘书 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a7d64350000000022014b04",
      "note_id": "6a7d64350000000022014b04",
      "title": "单位汇丰银行使用者名称不知道怎么办理#不懂就问有问必答 #万能的小红书",
      "summary": "单位汇丰银行使用者名称不知道怎么办理#不懂就问有问必答  #万能的小红书",
      "title_en": "HSBC processing",
      "summary_en": "HSBC processing",
      "author_nickname": "流星花园",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 1,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-13",
      "search_keyword": "汇丰 公司秘书 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a1a55fa00000000070251d4",
      "note_id": "6a1a55fa00000000070251d4",
      "title": "汇丰CDO岗位实际情况如何？",
      "summary": "#汇丰银行  #工作方向抉择",
      "title_en": "HSBC CDO?",
      "summary_en": "HSBC",
      "author_nickname": "哈哈",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 37,
        "comments": 71,
        "collects": 15
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-30",
      "search_keyword": "汇丰 公司秘书 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a2f9a4b000000001102f3af",
      "note_id": "6a2f9a4b000000001102f3af",
      "title": "HK公司+汇丰公户🔥真的太香了！",
      "summary": "全程一站式服务，交由我方持牌秘书全程代办～ 📂【办理所需资料】 1️⃣ 中英文公司名称 2️⃣ 股东董事护照 / 身份",
      "title_en": "HK company + HSBC corporate account 🔥 really worthwhile!",
      "summary_en": "One-stop service, secretary agency service ～ 📂【 processing materials 】 1️⃣ company 2️⃣ /",
      "author_nickname": "海客精灵-企服",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 10,
        "comments": 2,
        "collects": 10
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-15",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a1f8c69000000003502fb53",
      "note_id": "6a1f8c69000000003502fb53",
      "title": "香港公司+汇丰公户丨全程代办丨持牌机构",
      "summary": "想拓展海外市场？香港公司+汇丰公户绝对是热门选择🌟 条件相对宽松、税制简单、国际形象佳，特别适合外贸、跨境电商及创业者",
      "title_en": "Hong Kong company + HSBC corporate account agency service",
      "summary_en": "? Hong Kong company + HSBC corporate account 🌟,,,, cross-border",
      "author_nickname": "海客精灵-企业管理",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 8,
        "comments": 2,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-03",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a4c9fce000000001702f8dc",
      "note_id": "6a4c9fce000000001702f8dc",
      "title": "香港公司+汇丰公户｜全套办理 无需赴港！",
      "summary": "✨想要在香港拥有一家公司 香港公司+汇丰公户 全程代办🔥 🌟香港公司遇到以下情况一站式搞： 新设｜公户｜年审｜审计",
      "title_en": "Hong Kong company + HSBC corporate account ｜ processing!",
      "summary_en": "✨ Hong Kong company Hong Kong company + HSBC corporate account agency service 🔥 🌟 Hong Kong company one-stop: ｜ corporate account ｜ ｜",
      "author_nickname": "恒鑫晟港企服务",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 7,
        "comments": 16,
        "collects": 6
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-07-07",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-695562db0000000021029b93",
      "note_id": "695562db0000000021029b93",
      "title": "外贸公司注册+汇丰公户，省时又省钱！",
      "summary": "🏢 公司注册关键步骤： 1️⃣ 确定公司名称 2️⃣ 准备董事和股东身份证明 3️⃣ 填写经营范围 4️⃣ 提交资料审",
      "title_en": "Company + HSBC corporate account,!",
      "summary_en": "🏢 company: 1️⃣ company 2️⃣ 3️⃣ 4️⃣ materials",
      "author_nickname": "盛森鑫旺企业咨询",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 1,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-01-01",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a2f9df5000000001003dc22",
      "note_id": "6a2f9df5000000001003dc22",
      "title": "香港公司+汇丰公户🔥全程一站式代办！",
      "summary": "全程一站式服务，交由我方持牌秘书全程代办～ 📂【办理所需资料】 1️⃣ 中英文公司名称 2️⃣ 股东董事护照 / 身份",
      "title_en": "Hong Kong company + HSBC corporate account 🔥 one-stop agency service!",
      "summary_en": "One-stop service, secretary agency service ～ 📂【 processing materials 】 1️⃣ company 2️⃣ /",
      "author_nickname": "海客精灵-企服",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 36,
        "comments": 14,
        "collects": 32
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-15",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6912f6170000000004011e55",
      "note_id": "6912f6170000000004011e55",
      "title": "做跨境电商！注册香港公司+汇丰公户全程代办",
      "summary": "做跨境电商注意！注册香港公司+汇丰公户全程代办🔥 一众大牌都扎堆香港开公司了‼️ 做外贸/跨境电商想拓展国际市场，注册",
      "title_en": "Cross-border! Hong Kong company + HSBC corporate account agency service",
      "summary_en": "Cross-border! Hong Kong company + HSBC corporate account agency service 🔥 Hong Kong company ‼️ / cross-border",
      "author_nickname": "新思路丨企业服务咨询",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 12,
        "comments": 1,
        "collects": 7
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2025-11-11",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a102ebf000000003701c2e2",
      "note_id": "6a102ebf000000003701c2e2",
      "title": "外贸公司注册+汇丰公户，一站式全程代办！",
      "summary": "[暗中观察R][暗中观察R]做贸易用外贸公司？ ①省流程→不需要申请进出口权，可以直接做海外客户与内地工厂的中转站",
      "title_en": "Company + HSBC corporate account, one-stop agency service!",
      "summary_en": "[ R][ R] company? ① process → export",
      "author_nickname": "亚拓财税代理记账",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 4,
        "comments": 0,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-22",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-699ef103000000001d013956",
      "note_id": "699ef103000000001d013956",
      "title": "开一家香港公司+汇丰公户,快至1周",
      "summary": "做跨境电商、外贸创业的老板看过来！ 天财国际一站式代办香港公司，3980 元一口价全包 全程不用本人赴港，线上办理超省心",
      "title_en": "Hong Kong company + HSBC corporate account, 1",
      "summary_en": "Cross-border,! one-stop agency service Hong Kong company, 3980, processing",
      "author_nickname": "天财国际-企业出海服务",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 3,
        "comments": 5,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-02-26",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a2f9586000000002201862e",
      "note_id": "6a2f9586000000002201862e",
      "title": "设立公司+汇丰公户🔥一站式服务",
      "summary": "全程一站式服务，交由我方持牌秘书全程代办～ 📂【办理所需资料】 1️⃣ 中英文公司名称 2️⃣ 股东董事护照 / 身份",
      "title_en": "Company + HSBC corporate account 🔥 one-stop service",
      "summary_en": "One-stop service, secretary agency service ～ 📂【 processing materials 】 1️⃣ company 2️⃣ /",
      "author_nickname": "海客精灵-企服",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 13,
        "comments": 9,
        "collects": 7
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-15",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a1e9dc0000000000702a17e",
      "note_id": "6a1e9dc0000000000702a17e",
      "title": "开汇丰公户送香港公司注册，极速落地太香",
      "summary": "做跨境外贸，这套配置刚需必备！ 做进出口、跨境电商的boss都清楚： 想要顺畅收汇、合理节流、稳固海外客源， HK公司",
      "title_en": "HSBC corporate account Hong Kong company, worthwhile",
      "summary_en": "Cross-border,! export, cross-border boss:,,, HK company",
      "author_nickname": "小红薯6A91DDE1",
      "sentiment": "正面",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 1,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-06-02",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a69a43f000000000401f11a",
      "note_id": "6a69a43f000000000401f11a",
      "title": "香港公司 + 汇丰对公账户｜一站式出海方案",
      "summary": "外贸、跨境电商刚需配置 资金调度灵活，全球认可度高 📋 所需资料 公司名称、经营范围 董事股东证件、持股比例 注册地址",
      "title_en": "Hong Kong company + HSBC ｜ one-stop",
      "summary_en": "Cross-border, 📋 materials company",
      "author_nickname": "尼希米企业出海咨询",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-07-31",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6aa1101f000000002802e8dd",
      "note_id": "6aa1101f000000002802e8dd",
      "title": "🔥港企+汇丰公户，快至一周下户❗👍️",
      "summary": "全程一站式服务，交由我方持牌秘书全程代办～ 📂【办理所需资料】 1️⃣ 中英文公司名称 2️⃣ 股东董事护照 / 身份",
      "title_en": "🔥 + HSBC corporate account, ❗👍️",
      "summary_en": "One-stop service, secretary agency service ～ 📂【 processing materials 】 1️⃣ company 2️⃣ /",
      "author_nickname": "海客精灵-商务服务",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 3,
        "comments": 1,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-09-09",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a1570e3000000003503890f",
      "note_id": "6a1570e3000000003503890f",
      "title": "🔥公司+汇丰公户快至一周搞定，不要太香",
      "summary": "做外贸、搞跨境电商的朋友都知道: 想高效收💰、降低S务成本、提升客户信任度 一个合规的企业主体+一个支持多币种的对公账",
      "title_en": "🔥 company + HSBC corporate account, worthwhile",
      "summary_en": "Cross-border: efficient 💰, S, corporate +",
      "author_nickname": "弘通小余在香港",
      "sentiment": "正面",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 0,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-26",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-69fed53f000000001f00360e",
      "note_id": "69fed53f000000001f00360e",
      "title": "香港主体 + 开户｜一站式搞定，不用跑香港",
      "summary": "📌 给需要做业务拓展的老板整理了省心方案： ✅ 主体注册 ✅ 对公开户（汇丰 / 华侨 / 大新等渠道可对接） ✅ 年",
      "title_en": "Hong Kong + account opening ｜ one-stop, Hong Kong",
      "summary_en": "📌: ✅ ✅ account opening ( HSBC / / ) ✅",
      "author_nickname": "Vera恒诚信|HK",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 4,
        "comments": 2,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-09",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a195c52000000003501cd0b",
      "note_id": "6a195c52000000003501cd0b",
      "title": "外贸公司＋汇丰公户一站式代办",
      "summary": "🔥公司+汇丰公户快至一周搞定，不要太香 做外贸、搞跨境电商的朋友都知道: 想高效收💰、降低S务成本、提升客户信任度",
      "title_en": "Company ＋ HSBC corporate account one-stop agency service",
      "summary_en": "🔥 company + HSBC corporate account, worthwhile, cross-border: efficient 💰, S",
      "author_nickname": "弘通小余在香港",
      "sentiment": "正面",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-05-29",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    },
    {
      "id": "xhs-6a8d63c9000000001a02994f",
      "note_id": "6a8d63c9000000001a02994f",
      "title": "🔥香港公司+汇丰公户，真的太好用了！！",
      "summary": "全程一站式服务，交由我方持牌秘书全程代办～ 📂【办理所需资料】 1️⃣ 中英文公司名称 2️⃣ 股东董事护照 / 身份",
      "title_en": "🔥 Hong Kong company + HSBC corporate account,!!",
      "summary_en": "One-stop service, secretary agency service ～ 📂【 processing materials 】 1️⃣ company 2️⃣ /",
      "author_nickname": "海客精灵-企业管理",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 3,
        "comments": 3,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书公开内容样本",
      "source_label_en": "Xiaohongshu public posts sample",
      "published_at": "2026-08-25",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium"
    }
  ]
};
