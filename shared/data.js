/* HSBC Commercial Social Listening — shared dataset (v2) */
/* Built from Xiaohongshu public posts sample. No placeholders. */
window.HSBC_SL_DATA = {
  "meta": {
    "title": "汇丰银行香港 · 商业银行客户声音监听",
    "subtitle": "数据源：小红书公开内容样本 254 条（商业+中介；已剔除个人户）",
    "updated_at": "2026-09-16T23:01:41.884225+08:00",
    "updated_at_display": "2026-09-16 23:01 HKT",
    "focus_platform": "小红书",
    "disclaimer": "样本来自小红书公开内容检索；非官方授权。请人工核对中介推广帖。个人银行相关帖已从发布数据集中排除。",
    "data_gap_note": "消费社交平台上商业银行声量仍偏薄；中介推广帖较多。个人户已排除。公开检索非平台官方授权。",
    "version": "v2",
    "suite_title": "汇丰香港商业银行 · 社交聆听看板套件",
    "theme": "business.hsbc.com.hk",
    "multi_source": false,
    "title_en": "HSBC Hong Kong · Commercial Banking Customer Voice",
    "subtitle_en": "Source: Xiaohongshu public posts sample · 254 commercial (+ intermediary) posts · personal banking removed",
    "disclaimer_en": "Sample from Xiaohongshu public content search; not officially authorised. Please verify intermediary promo posts. Personal-banking posts excluded from the published dataset."
  },
  "filter_defaults": {
    "hideIntermediaries": false,
    "hidePersonalNoise": true
  },
  "management_summary": {
    "executive_brief": "小红书公开样本 254 条（其中中介/企服约 29 条）显示：商业开户讨论仍集中在材料清单、预约与审批时效；费用/TRB 门槛与客户经理连续性亦反复出现。个人户噪声已从发布数据剔除；中介帖默认展示供管理层监测。",
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
    "voice_quality_note": "发布数据集含商业相关与中介/企服帖，已排除个人银行噪声与占位/示意帖。声音构成：商业真实约 225 · 中介约 29。",
    "executive_brief_en": "Xiaohongshu public sample of 254 posts (about 29 intermediary/B2B promo) shows commercial account-opening talk still centres on document lists, appointments and approval turnaround; fee/TRB thresholds and RM continuity recur. Personal-banking noise is excluded from the published set; intermediary posts are shown by default for monitoring."
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
    "total_posts": 254,
    "positive_pct": 11.4,
    "negative_pct": 17.3,
    "neutral_pct": 71.3,
    "net_sentiment": -5.9,
    "commercial_related_pct": 100.0,
    "hot_theme_count": 6,
    "intermediary_count": 29,
    "personal_noise_count": 0,
    "xhs_sample_count": 254,
    "justone_count": 254,
    "placeholder_count": 0,
    "web_informed_count": 0,
    "platform_count": 1
  },
  "kpis_clean": {
    "total_posts": 225,
    "positive_pct": 11.6,
    "negative_pct": 17.3,
    "neutral_pct": 71.1,
    "net_sentiment": -5.7,
    "commercial_related_pct": 100.0,
    "hot_theme_count": 6,
    "intermediary_count": 29,
    "personal_noise_count": 0,
    "xhs_sample_count": 254,
    "justone_count": 254,
    "placeholder_count": 0,
    "web_informed_count": 0,
    "platform_count": 1
  },
  "kpis": {
    "total_posts": 254,
    "positive_pct": 11.4,
    "negative_pct": 17.3,
    "neutral_pct": 71.3,
    "net_sentiment": -5.9,
    "commercial_related_pct": 100.0,
    "hot_theme_count": 6,
    "intermediary_count": 29,
    "personal_noise_count": 0,
    "xhs_sample_count": 254,
    "justone_count": 254,
    "placeholder_count": 0,
    "web_informed_count": 0,
    "platform_count": 1
  },
  "sentiment": {
    "正面": 29,
    "负面": 44,
    "中性": 181,
    "positive": 29,
    "negative": 44,
    "neutral": 181
  },
  "sentiment_all": {
    "正面": 29,
    "负面": 44,
    "中性": 181,
    "positive": 29,
    "negative": 44,
    "neutral": 181
  },
  "themes": [
    {
      "name": "开户体验",
      "count": 144,
      "sentiment_lean": "mixed"
    },
    {
      "name": "贸易融资外汇",
      "count": 44,
      "sentiment_lean": "mixed"
    },
    {
      "name": "竞品对比",
      "count": 44,
      "sentiment_lean": "mixed"
    },
    {
      "name": "客户经理",
      "count": 12,
      "sentiment_lean": "neutral"
    },
    {
      "name": "费用门槛",
      "count": 8,
      "sentiment_lean": "neutral"
    },
    {
      "name": "数字银行",
      "count": 2,
      "sentiment_lean": "neutral"
    }
  ],
  "platforms": [
    {
      "name": "小红书",
      "count": 254,
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
      "text": "汇丰",
      "weight": 56
    },
    {
      "text": "HSBC",
      "weight": 33
    },
    {
      "text": "注册香港公司",
      "weight": 22
    },
    {
      "text": "香港公司注册",
      "weight": 21
    },
    {
      "text": "香港汇丰银行",
      "weight": 19
    },
    {
      "text": "万能的小红书",
      "weight": 19
    },
    {
      "text": "不懂就问有问",
      "weight": 18
    },
    {
      "text": "必答",
      "weight": 18
    },
    {
      "text": "香港",
      "weight": 17
    },
    {
      "text": "开汇丰公户",
      "weight": 14
    },
    {
      "text": "元贵了吗",
      "weight": 14
    },
    {
      "text": "汇丰银行",
      "weight": 13
    },
    {
      "text": "香港注册",
      "weight": 13
    },
    {
      "text": "开公户一般都",
      "weight": 13
    },
    {
      "text": "收多少钱呀",
      "weight": 13
    },
    {
      "text": "香港公司",
      "weight": 13
    },
    {
      "text": "HK",
      "weight": 12
    },
    {
      "text": "但是听说汇丰",
      "weight": 12
    },
    {
      "text": "香港公户",
      "weight": 12
    },
    {
      "text": "香港汇丰",
      "weight": 11
    },
    {
      "text": "开下来挺久的",
      "weight": 11
    },
    {
      "text": "恒生怎么样",
      "weight": 11
    },
    {
      "text": "开户",
      "weight": 10
    },
    {
      "text": "汇丰香港",
      "weight": 8
    },
    {
      "text": "APP",
      "weight": 8
    },
    {
      "text": "汇丰公户",
      "weight": 7
    },
    {
      "text": "银行",
      "weight": 7
    },
    {
      "text": "app",
      "weight": 7
    },
    {
      "text": "汇丰开户",
      "weight": 6
    },
    {
      "text": "渣打",
      "weight": 5
    },
    {
      "text": "理财",
      "weight": 5
    },
    {
      "text": "银行卡",
      "weight": 5
    },
    {
      "text": "香港公司开户",
      "weight": 5
    },
    {
      "text": "注册公司",
      "weight": 4
    },
    {
      "text": "pulse",
      "weight": 4
    },
    {
      "text": "汇丰蓝狮子卡",
      "weight": 4
    },
    {
      "text": "中银香港",
      "weight": 4
    },
    {
      "text": "Graduate",
      "weight": 4
    },
    {
      "text": "害羞",
      "weight": 4
    },
    {
      "text": "JSA",
      "weight": 4
    }
  ],
  "competitors": [
    {
      "name": "汇丰",
      "share_pct": 77.7,
      "sentiment_lean": "negative",
      "note": "基于样本内提及频次，非正式市占",
      "illustrative": true
    },
    {
      "name": "恒生",
      "share_pct": 9.2,
      "sentiment_lean": "negative",
      "note": "基于样本内提及频次，非正式市占",
      "illustrative": true
    },
    {
      "name": "中银香港",
      "share_pct": 5.1,
      "sentiment_lean": "negative",
      "note": "基于样本内提及频次，非正式市占",
      "illustrative": true
    },
    {
      "name": "渣打",
      "share_pct": 4.1,
      "sentiment_lean": "mixed",
      "note": "基于样本内提及频次，非正式市占",
      "illustrative": true
    },
    {
      "name": "虚拟银行",
      "share_pct": 1.6,
      "sentiment_lean": "negative",
      "note": "基于样本内提及频次，非正式市占",
      "illustrative": true
    },
    {
      "name": "大新",
      "share_pct": 1.3,
      "sentiment_lean": "mixed",
      "note": "基于样本内提及频次，非正式市占",
      "illustrative": true
    }
  ],
  "sentiment_trend": [
    {
      "week": "2026-01",
      "positive": 0,
      "negative": 1,
      "neutral": 0,
      "illustrative": false
    },
    {
      "week": "2026-03",
      "positive": 1,
      "negative": 1,
      "neutral": 2,
      "illustrative": false
    },
    {
      "week": "2026-04",
      "positive": 1,
      "negative": 2,
      "neutral": 9,
      "illustrative": false
    },
    {
      "week": "2026-05",
      "positive": 5,
      "negative": 2,
      "neutral": 29,
      "illustrative": false
    },
    {
      "week": "2026-06",
      "positive": 5,
      "negative": 3,
      "neutral": 17,
      "illustrative": false
    },
    {
      "week": "2026-07",
      "positive": 4,
      "negative": 5,
      "neutral": 19,
      "illustrative": false
    },
    {
      "week": "2026-08",
      "positive": 5,
      "negative": 24,
      "neutral": 40,
      "illustrative": false
    },
    {
      "week": "2026-09",
      "positive": 8,
      "negative": 4,
      "neutral": 60,
      "illustrative": false
    }
  ],
  "segment_mix": [
    {
      "name": "SME/Mid",
      "count": 246
    },
    {
      "name": "Large",
      "count": 8
    }
  ],
  "voice_mix": {
    "真实商业相关": 225,
    "中介/企服": 29,
    "个人户噪声": 0,
    "其他来源": 0,
    "商业真实": 225,
    "中介": 29
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
      "id": "xhs-6a94f361000000002003a129",
      "note_id": "6a94f361000000002003a129",
      "title": "香港汇丰开户门槛大降！无内地公司也能开",
      "summary": "香港汇丰开户门槛下调｜无内地公司也可开立企业账户 过去香港汇丰对公账户，对于内地背景客户审核严苛，内地关联实体是开户的硬",
      "title_en": "HSBCaccount openingthreshold ! [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBCaccount openingthreshold ｜ HSBC , , account opening [translated from Chinese commercial/XHS post]",
      "author_nickname": "雅信_专注离岸Crystal",
      "sentiment": "中性",
      "themes": [
        "费用门槛"
      ],
      "category": "费用门槛",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 3,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-31",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a94f361000000002003a129",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g008324h4seoj7k6g5pg0sil1hq7k5li2ad8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=5f1afb39db8967871c4738df279bc7f6&t=6aaaade0"
    },
    {
      "id": "xhs-6a0d19dd000000000803f2dc",
      "note_id": "6a0d19dd000000000803f2dc",
      "title": "香港公司注册➕汇丰公司户",
      "summary": "#外贸公司  #香港公司注册  #注册公司  #跨境创业  #跨境创业",
      "title_en": "Hong Kong company注册➕HSBCcorporate account",
      "summary_en": "# #Hong Kong company # # # [translated from Chinese commercial/XHS post]",
      "author_nickname": "A-海外秘书公司  Rose",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 4,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-20",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a0d19dd000000000803f2dc",
      "cover_url": "https://sns-na-i2.xhscdn.com/notes_pre_post/1040g3k8320ce6fu8mecg5ok908uocmpo187vdf0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=e258dcb7aef9543efc650b19cf2a742c&t=6aaaade0"
    },
    {
      "id": "xhs-6a96c5ea00000000280370fe",
      "note_id": "6a96c5ea00000000280370fe",
      "title": "香港公司汇丰银行公户开通了",
      "summary": "收到短信了，是不是就成功了？ 全程自己搞的，没用中介，怒省8000港币。 事实证明如果业务真实，准备充分，完全也不需要中",
      "title_en": "Hong Kong companyHSBCcorporate account开通了",
      "summary_en": "? , intermediary, 8000 [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a96c5ea00000000280370fe",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g2sg324itnps0n27042r00gad6htbnngq6to?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=4d75695f943cece124d09c21779f7f35&t=6aaaade0"
    },
    {
      "id": "xhs-6a97fd2f0000000026008983",
      "note_id": "6a97fd2f0000000026008983",
      "title": "汇丰公户终于到手啦，等了好久",
      "summary": "\"香港公户基本都会要求有关联公司或者流水，如果是0背景的初创公司，审核回很严，而且大概率回秒拒，目前尝试下来只有建行、东",
      "title_en": "HSBCcorporate accountfinally secured啦, waited a long time",
      "summary_en": "\" corporate account , 0 [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a97fd2f0000000026008983",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g2sg324k3sr0lnu005qkm95rkoc000cnomk8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=5675c4a1358abc7692c96da0b27a985d&t=6aaaade0"
    },
    {
      "id": "xhs-6a057efc0000000006031907",
      "note_id": "6a057efc0000000006031907",
      "title": "港企+汇丰公户，一周搞定",
      "summary": "做外贸、搞跨境电商的朋友都懂👇 想高效收款💰、优化税务结构、提升客户信任度…… 👉一个合规主体+一个支持多币种的对",
      "title_en": "港企+HSBCcorporate account, 一周搞定",
      "summary_en": "👇 💰, , ...... 👉 + [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-14",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a057efc0000000006031907",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g0k032051udrvk8005puq2kh3969g6v4dd20?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=da6741345a67dfb327c76ec695e16480&t=6aaaade0"
    },
    {
      "id": "xhs-6a777959000000002403d2e1",
      "note_id": "6a777959000000002403d2e1",
      "title": "汇丰pulse卡的下卡和使用攻略",
      "summary": "pulse这张卡还是蛮不一样的，跟大陆的卡确实有很多区别。在规则和使用上，我觉得比大陆的卡复杂多了。 这篇主要从以下几点",
      "title_en": "HSBCpulse [translated from Chinese commercial/XHS post]",
      "summary_en": "pulse [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-09",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a777959000000002403d2e1",
      "cover_url": "https://sns-na-i2.xhscdn.com/notes_pre_post/1040g3k0323kb78lpna1g5nuit4lg8o0pk9trkqo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=dc262aba0ec8debbd27ceb275c380404&t=6aaaade0"
    },
    {
      "id": "xhs-6a881f7e000000002802d253",
      "note_id": "6a881f7e000000002802d253",
      "title": "一天办完hkid、中银香港卡、汇丰蓝狮子卡",
      "summary": "整体流程： 9:00中银香港（元朗分行）walk-in取号——取完号去对面麦当劳吃早餐——去元朗办事处办理hkid（利用",
      "title_en": "hkid, BOCHK , HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": ": 9:00BOCHK( )walk-in -- -- hkid( [translated from Chinese commercial/XHS post]",
      "author_nickname": "anz",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 544,
        "comments": 45,
        "collects": 619
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-21",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰",
        "中银香港"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a881f7e000000002802d253",
      "cover_url": "https://sns-na-i2.xhscdn.com/note_pre_post_uhdr/1040g3r83244j47fn74705nad88q42vktng3in68?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=85466ca61c84e3dd90ec7a9e62b0b713&t=6aaaade0"
    },
    {
      "id": "xhs-6a47aba80000000022009225",
      "note_id": "6a47aba80000000022009225",
      "title": "香港汇丰转账至内地银行，已成功",
      "summary": "希望可以帮助到需要的人，我是根据这个步骤流程，已经转账成功了。 1. 我是从香港汇丰转到内地的招商银行，扣掉了一笔手续费",
      "title_en": "HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "1. HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "蓓乐耶",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1419,
        "comments": 254,
        "collects": 1753
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-03",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a47aba80000000022009225",
      "cover_url": "https://sns-na-i2.xhscdn.com/c/1040g0083225lubdfna005p57bvkn56nnbdnjv08?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=f507fe9e2d94a859f3ed98269a0d38c0&t=6aaaade0"
    },
    {
      "id": "xhs-6a83b8eb0000000010036d19",
      "note_id": "6a83b8eb0000000010036d19",
      "title": "旺角汇丰也有自助开卡机了",
      "summary": "之前5月份启德汇丰设了个24h自助开卡机 可以当场拿卡[偷笑R] 现在旺角分行也有了 趁着知道的人不多，可以来试试 免得",
      "title_en": "HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "5 HSBC 24h [ R] [translated from Chinese commercial/XHS post]",
      "author_nickname": "小黄的HK笔记",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 371,
        "comments": 68,
        "collects": 421
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-18",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a83b8eb0000000010036d19",
      "cover_url": "https://sns-na-i2.xhscdn.com/oss-sg/notes_pre_post/1040g3mo3240acjaj2e6g5qj6p6fjen004iuml20?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=0ef3aadc791c0918c1130e97183c4bb9&t=6aaaade0"
    },
    {
      "id": "xhs-6a50ac1c0000000008030cde",
      "note_id": "6a50ac1c0000000008030cde",
      "title": "七月香港开卡实录",
      "summary": "7 月 2 号傍晚飞机到香港。 1️⃣ 汇丰 它的开户教程我很早之前就看过了。到手之后就正常一步步操作，该传的资料都上传",
      "title_en": "七月香港开卡实录",
      "summary_en": "7 2 . 1️⃣ HSBC account opening [translated from Chinese commercial/XHS post]",
      "author_nickname": "吗蓉",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1190,
        "comments": 150,
        "collects": 1318
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-10",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a50ac1c0000000008030cde",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g2sg322edt2atnp605o84khu85suit0qpk4g?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=10d8721968f300edcaf32f06b7e22326&t=6aaaade0"
    },
    {
      "id": "xhs-6a43364e000000001702c3c3",
      "note_id": "6a43364e000000001702c3c3",
      "title": "香港汇丰真的值得定存吗",
      "summary": "目前为了满足10000港币余额，研究了下定存收益，发现真的值得折腾吗？ 方案1：离岸人民币换成10000港币定存（纯亏",
      "title_en": "HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "10000 , , ? 1: 10000 ( [translated from Chinese commercial/XHS post]",
      "author_nickname": "whysoserious",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 583,
        "comments": 89,
        "collects": 657
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-06-30",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a43364e000000001702c3c3",
      "cover_url": "https://sns-na-i2.xhscdn.com/notes_pre_post/1040g3k03221akmcv70005ojgqitoca194tf4sk0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=f1336c28cd9f6baa88f92ecf1adeff56&t=6aaaade0"
    },
    {
      "id": "xhs-6a4f17c1000000001c027fb7",
      "note_id": "6a4f17c1000000001c027fb7",
      "title": "汇丰银行HSBC更改每日限额 更新版",
      "summary": "HSBC Business 汇丰商务网上理财更改每日限额 ‼️WBA002 商务网上理财服务更改表格 2026年5月更新",
      "title_en": "HSBCHSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC Business HSBC ‼️WBA002 2026 5 [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-09",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a4f17c1000000001c027fb7",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g008322csdssvne004als5d5p5aofqt051a8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=2b7dd6815bc81543271a64fbbfaaa873&t=6aaaadea"
    },
    {
      "id": "xhs-6a855a4300000000290300be",
      "note_id": "6a855a4300000000290300be",
      "title": "香港汇丰银行公司登记商务网上理财账户被锁定#不懂就问有问必答 #万能的小红书",
      "summary": "香港汇丰银行公司登记商务网上理财账户被锁定#不懂就问有问必答  #万能的小红书",
      "title_en": "HSBC # # [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC # # [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a855a4300000000290300be",
      "cover_url": "https://sns-na-i2.xhscdn.com/notes_pre_post/1040g3k83241tgcok70004bv22dgbhjk328cd4fo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=4ce1c581bca1c1dda20b65a59a6c66c1&t=6aaaadea"
    },
    {
      "id": "xhs-6a4cd0f70000000017029d96",
      "note_id": "6a4cd0f70000000017029d96",
      "title": "一篇笔记讲清楚-香港汇丰公司户 3 大类型",
      "summary": "想要开展香港业务但不知道怎么弄 今天整理官方 3 类账户适配人群、门槛、费用，新手一篇看懂不踩坑 1️⃣ Sprint",
      "title_en": "HSBCcorporate account 3 [translated from Chinese commercial/XHS post]",
      "summary_en": "3 , threshold, , 1️⃣ Sprint [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a4cd0f70000000017029d96",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g34o322amld6m72105p922i0osheqaj4orjo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=eb187731de36e9424b422a8fb528f87b&t=6aaaadea"
    },
    {
      "id": "xhs-6aaa2b69000000000b003965",
      "note_id": "6aaa2b69000000000b003965",
      "title": "#汇丰 #渣打 #银行",
      "summary": "#汇丰  #渣打  #银行",
      "title_en": "#HSBC #Standard Chartered #银行",
      "summary_en": "#HSBC #Standard Chartered #银行",
      "author_nickname": "阿巴阿巴",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 17,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-16",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aaa2b69000000000b003965",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g2sg3255s10fs4ecg5p8phlnghqa5hjq1h48?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=02dd0424a2ec69232e1d939a9db80ac3&t=6aaaadea"
    },
    {
      "id": "xhs-6a99789100000000120261dc",
      "note_id": "6a99789100000000120261dc",
      "title": "汇丰理财不是很满意",
      "summary": "客户经理推荐的这几只，拿手上一年多了，目前这个鬼样子！还不如手上其他的几只基金。推荐的这几只其他平台也能购买，并且手续费",
      "title_en": "HSBC理财不是很满意",
      "summary_en": "relationship managerrecommend , , ! . recommend [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a99789100000000120261dc",
      "cover_url": "https://sns-na-i2.xhscdn.com/notes_pre_post/1040g3k0324li3f4gn20g5p3n2rf3ok0ot1en04o?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=6610e42622b9691b6db5d6627ac8b3b9&t=6aaaadea"
    },
    {
      "id": "xhs-6a852d68000000002c0021d1",
      "note_id": "6a852d68000000002c0021d1",
      "title": "汇丰这不是zp吗",
      "summary": "进入端口现有资金利率这么高 一点进去怎么又变成百分之0.几了？#汇率  #理财  #汇丰  #港币",
      "title_en": "HSBC这不是zp吗",
      "summary_en": "0. ? # # #HSBC # [translated from Chinese commercial/XHS post]",
      "author_nickname": "喜喜",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 20,
        "comments": 41,
        "collects": 20
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a852d68000000002c0021d1",
      "cover_url": "https://sns-na-i2.xhscdn.com/notes_pre_post/1040g3k83241o032d0me05q8mo9bdo4qd4qrbk28?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=6ff32cd0033a7f7977392c92830c5d46&t=6aaaadea"
    },
    {
      "id": "xhs-6aa4c9df000000002601b70c",
      "note_id": "6aa4c9df000000002601b70c",
      "title": "汇丰银行通过网申了",
      "summary": "要进行网上测试，有什么建议的吗",
      "title_en": "HSBC通过网申了",
      "summary_en": "HSBC Hong Kong commercial banking discussion",
      "author_nickname": "大大花甲王",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 32,
        "comments": 32,
        "collects": 17
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa4c9df000000002601b70c",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g0083250jrdlcj6005pkapdkgufhktnovnao?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=c7db4d7bc0bd2435ae136b189b843a06&t=6aaaadea"
    },
    {
      "id": "xhs-6aaa6398000000002601e99e",
      "note_id": "6aaa6398000000002601e99e",
      "title": "深圳打工仔8月中旬到9月中旬理财营收",
      "summary": "计算是-11233.66元，汇丰也亏了大约1000hkd吧 我在骗谁啊",
      "title_en": "8 9 [translated from Chinese commercial/XHS post]",
      "summary_en": "11233.66 , HSBC 1000hkd [translated from Chinese commercial/XHS post]",
      "author_nickname": "墨子量子",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-16",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aaa6398000000002601e99e",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g00832562qg2v4ed05p0jruil214sesl9k20?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=3f4fc355526933d3c9ccdb8f7b7246d9&t=6aaaadea"
    },
    {
      "id": "xhs-6a17bc23000000000701383e",
      "note_id": "6a17bc23000000000701383e",
      "title": "汇丰果然大气",
      "summary": "免费送新秀丽双肩包，接到电话就去了 ，购物公园A5出口，嘉里建设广场39楼。做过攻略，担心他们推销理财产品，结果并没有",
      "title_en": "HSBC果然大气",
      "summary_en": "A5 , 39 [translated from Chinese commercial/XHS post]",
      "author_nickname": "温朵爱喝柠檬茶",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 65,
        "comments": 96,
        "collects": 37
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-28",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a17bc23000000000701383e",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g008320mrs11slm0049oqdmtmn3a66slv3lg?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=66260dde51f2ed193321b533b47b2627&t=6aaaadea"
    },
    {
      "id": "xhs-69df0863000000001b0017e2",
      "note_id": "69df0863000000001b0017e2",
      "title": "问一下大家汇丰这个是什么情况，不是骗子吧。 #银行卡  #理财  #信用卡  #…",
      "summary": "问一下大家汇丰这个是什么情况，不是骗子吧。 #银行卡  #理财  #信用卡  #汇丰",
      "title_en": "HSBC , . # # # # [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC , . # # # #HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "^O^",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 14,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-04-15",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69df0863000000001b0017e2",
      "cover_url": "https://sns-na-i2.xhscdn.com/notes_pre_post/1040g3k031uvfvge7j40g5omiip23hleljrfh5qg?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=36f96df1d1c40b8de8d02d01d4a111fb&t=6aaaadea"
    },
    {
      "id": "xhs-6aa27d3b000000002603ab47",
      "note_id": "6aa27d3b000000002603ab47",
      "title": "汇丰这不是ZP吗？",
      "summary": "我想问汇丰银行百分之三在哪里？？？纯纯ZP#汇率  #汇丰银行  #利率  #理财",
      "title_en": "HSBC这不是ZP吗?",
      "summary_en": "HSBC ? ? ? ZP# #HSBC # # [translated from Chinese commercial/XHS post]",
      "author_nickname": "予星河",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 12,
        "comments": 83,
        "collects": 7
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-10",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa27d3b000000002603ab47",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g2sg324ubtl9b3udg5p2ve5l44vq526cllog?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=1114d2d8f3e3207797767ce93feb4974&t=6aaaadea"
    },
    {
      "id": "xhs-69dc373f000000001d018255",
      "note_id": "69dc373f000000001d018255",
      "title": "被汇丰狠狠上了一课",
      "summary": "去年初，我为了把孩子的学费转出去备用，我去香港汇丰开了个账户，为了利息可以高点，还办了个定存利率3 ％，为了省事，点了个",
      "title_en": "被HSBC狠狠上了一课",
      "summary_en": "HSBC , , 3 ％ [translated from Chinese commercial/XHS post]",
      "author_nickname": "Y🎈🎈",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 774,
        "comments": 276,
        "collects": 552
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-04-13",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69dc373f000000001d018255",
      "cover_url": "https://sns-na-i2.xhscdn.com/notes_uhdr/1040g3qo31usnvjl71m705nj1ekrg8bh0lqpi4b8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=2ce24f1abf137f2542d8c228616ea6e0&t=6aaaadea"
    },
    {
      "id": "xhs-6a9ecdb1000000002800057c",
      "note_id": "6a9ecdb1000000002800057c",
      "title": "汇丰香港app登陆界面更新了",
      "summary": "#汇丰香港  #港卡  #汇丰  #汇丰银行",
      "title_en": "HSBC app [translated from Chinese commercial/XHS post]",
      "summary_en": "#HSBC香港 #港卡 #HSBC #HSBC",
      "author_nickname": "。。。。",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 25,
        "comments": 38,
        "collects": 5
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-07",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9ecdb1000000002800057c",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g008324qoqs6nhs005n66vmh4f6gn4brsmgo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=8d36111a84511aa99cc3ec87403539d2&t=6aaaadea"
    },
    {
      "id": "xhs-6a7541cd0000000022017eec",
      "note_id": "6a7541cd0000000022017eec",
      "title": "HSBC公户开通整整等了63天",
      "summary": "等的有点久哦 总体还算顺利 #香港汇丰  #hsbc  #汇丰公户",
      "title_en": "HSBCcorporate account开通整整等了63天",
      "summary_en": "# HSBC #hsbc #HSBCcorporate account [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a7541cd0000000022017eec",
      "cover_url": "https://sns-na-i1.xhscdn.com/note_pre_post_uhdr/1040g3r8323i5g9s072ag4a4i24h7ip2l6sf5mco?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=ec40e04471357af0a7e976b5cad0ecec&t=6aaaadf3"
    },
    {
      "id": "xhs-69cf43ff000000002102ee1d",
      "note_id": "69cf43ff000000002102ee1d",
      "title": "香港汇丰银行到这一步算是完成资料更新了吗",
      "summary": "#香港汇丰银行  #香港汇丰账户  #香港汇丰 #香港汇丰商务资料",
      "title_en": "HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "# HSBC # HSBC # HSBC # HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "小张的生活日记",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 5,
        "comments": 12,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-04-03",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69cf43ff000000002102ee1d",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_uhdr/1040g3qo31ug38jnuig005otihr7q35rl7ava778?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=647108df8b3c799819fc5111e07f0549&t=6aaaadf3"
    },
    {
      "id": "xhs-69fde6fc000000001a0370a0",
      "note_id": "69fde6fc000000001a0370a0",
      "title": "重磅利好！无需内地公司即可开香港汇丰公户",
      "summary": "香港汇丰银行针对内地客户开户要求全面放宽，正式取消 “必须提供内地背景关联公司” 的核心门槛，[赞R]电商、初创、科创三",
      "title_en": "! HSBCcorporate account [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC account opening , “ ” threshold, [ R] [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69fde6fc000000001a0370a0",
      "cover_url": "https://sns-na-i1.xhscdn.com/spectrum/1040g34o31vtkfv16l4705p2ltsv4mvjdaa6i890?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=4bc13894012177d1934dbf1727d9eaff&t=6aaaadf3"
    },
    {
      "id": "xhs-6a9e96b4000000000b00294a",
      "note_id": "6a9e96b4000000000b00294a",
      "title": "HSBC汇丰香港2027已开岗位︱有笔试面试题～",
      "summary": "汇丰HSBC香港地区多项目的笔面细节整理好了。 ✅ 开放项目梳理 💡 Graduate Programme（校招） 覆",
      "title_en": "HSBCHSBC 2027 ︱ ～ [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBCHSBC . ✅ 💡 Graduate Programme( ) [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9e96b4000000000b00294a",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k8324qi4g802gdg5p92eds92oi4uauo5dg?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=443ead17cebc36175b01c4a7221ae8c4&t=6aaaadf3"
    },
    {
      "id": "xhs-6aa14edd000000002803bf3e",
      "note_id": "6aa14edd000000002803bf3e",
      "title": "🇭🇰香港HSBC汇丰OIA&JSA｜附笔面试",
      "summary": "香港HSBC汇丰2027测评已陆续发放📩 开放pathway： Graduate Programme • Transa",
      "title_en": "🇭🇰香港HSBCHSBCOIA&JSA｜附笔面试",
      "summary_en": "香港HSBCHSBC2027测评已陆续发放📩 开放pathway: Graduate Programme • Transa",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa14edd000000002803bf3e",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g008324t5fmu6j46g5pthg5kji25flurjvj8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=eb614f9a9acaebb82d34848f6b3a3c87&t=6aaaadf3"
    },
    {
      "id": "xhs-6a9c9e0000000000110301c1",
      "note_id": "6a9c9e0000000000110301c1",
      "title": "运气爆棚连开工亚，汇丰",
      "summary": "过程： 插入身份证，然后港澳通行证，然后把通关凭证放右上角扫描，然后人脸识别。可以把东西提前放密码输入框的上方。 让打开",
      "title_en": "运气爆棚连开工亚, HSBC",
      "summary_en": ": [translated from Chinese commercial/XHS post]",
      "author_nickname": "ZZL",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 19,
        "comments": 28,
        "collects": 39
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-06",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9c9e0000000000110301c1",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g008324oje52d7u0049miimgc14o2i41fsno?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=8b3e991097c38f99aaf239733dcfb04f&t=6aaaadf3"
    },
    {
      "id": "xhs-6a856835000000000801068b",
      "note_id": "6a856835000000000801068b",
      "title": "8月亲测｜香港汇丰线上开户，我踩过的坑别踩",
      "summary": "上个星期去香港办点事，顺便把汇丰的户开了。去之前看了不少攻略，结果实操的时候还是踩了几个小坑。 今天就站在个人角度，把我",
      "title_en": "8 ｜ HSBC account opening [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "港岛糖糖Tauris",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 46,
        "comments": 6,
        "collects": 83
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-19",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a856835000000000801068b",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k83241v5gau0o7g5q78hcnttaojfcc2si8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=84dc02988563552b7c64ce4b2087a5fd&t=6aaaadf3"
    },
    {
      "id": "xhs-69fd5c5b0000000023015469",
      "note_id": "69fd5c5b0000000023015469",
      "title": "5.8过港日记｜半小时拿下汇丰",
      "summary": "过关后第一件事！连上香港WiFi（商场/机场/麦当劳/银行都ok）网络很重要！！ 办理流程大致： 1：打开HSBC HK",
      "title_en": "5.8 ｜ HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "! WiFi( / / / ok) ! ! : 1: HSBC HK [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69fd5c5b0000000023015469",
      "cover_url": "https://sns-na-i1.xhscdn.com/spectrum/1040g0k031vt3ibpe48005pb0buk0l7lblm2pjt8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=30f0da6463b6a701928bfe5810046181&t=6aaaadf3"
    },
    {
      "id": "xhs-6a7405600000000008012f74",
      "note_id": "6a7405600000000008012f74",
      "title": "注册公司终于等到汇丰开户成功～",
      "summary": "筹备一年多，上个月在香港注册公司。公司很快就办理好了，银行是真的麻烦。好不容易预约到今天面谈。本来中介说要带一大堆材料",
      "title_en": "HSBCaccount opening ～ [translated from Chinese commercial/XHS post]",
      "summary_en": "appointment . intermediary documents [translated from Chinese commercial/XHS post]",
      "author_nickname": "大模型创业者",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 9,
        "comments": 13,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-06",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a7405600000000008012f74",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k0323gvqmhh0a005q5vmlimblkitrsjrp8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=f7ec0bae9e756f2c8d8152b0de432321&t=6aaaadf3"
    },
    {
      "id": "xhs-6a35040d000000002103edb1",
      "note_id": "6a35040d000000002103edb1",
      "title": "求助 香港汇丰银行的企业账户收不到验证码",
      "summary": "有家人们知道 为什么收不到短信验证码吗 ？ 第一步 手机是能收到验证码的 把启动资料填完后 又现显示需要填写验证码 这一",
      "title_en": "HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "? [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-06-19",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a35040d000000002103edb1",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k8321jeo8n07k705n9gj7g48j0lfeql6c8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=42ebb531228a77e7463228e0bffb7bfd&t=6aaaadf3"
    },
    {
      "id": "xhs-6aaa0d8c0000000011037295",
      "note_id": "6aaa0d8c0000000011037295",
      "title": "汇丰香港One账户邮寄销户",
      "summary": "汇丰香港邮寄销户申请攻略。 2026年申请的账户，月日均不足10000港币，每个月需要支付100块账户管理费。还是算了",
      "title_en": "HSBC香港One账户邮寄销户",
      "summary_en": "HSBC . 2026 , 10000 , 100 [translated from Chinese commercial/XHS post]",
      "author_nickname": "想退休了",
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
        "collects": 6
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aaa0d8c0000000011037295",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g2sg3255o6pnll0e05o4kqg70biio2jckhv0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=b64fd63dd0de895c60924356f30c9b9f&t=6aaaadf3"
    },
    {
      "id": "xhs-6a648150000000000f031edb",
      "note_id": "6a648150000000000f031edb",
      "title": "#HSBC私行 #New Cies# #BVI",
      "summary": "#HSBC私行  #New  Cies# #BVI",
      "title_en": "#HSBC私行 #New Cies# #BVI",
      "summary_en": "#HSBC私行 #New Cies# #BVI",
      "author_nickname": "relax",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 12,
        "comments": 9,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-25",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a648150000000000f031edb",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k03231qmno6n0005o11lnm0865l2lftga0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=9c5a45a15739680eab36dad8ca595fdd&t=6aaaadf3"
    },
    {
      "id": "xhs-6aaa0cde000000000d024c4d",
      "note_id": "6aaa0cde000000000d024c4d",
      "title": "入职HSBC AML一年，顺便refe入职HSBC AML一",
      "summary": "入职 HSBC HK Compliance｜AML/KYC 方向满一周年。写给冲刺香港外资的 26NG & 27NG 英",
      "title_en": "HSBC AML , refe HSBC AML [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC HK Compliance｜AML/KYC . 26NG & 27NG [translated from Chinese commercial/XHS post]",
      "author_nickname": "Ada Mak",
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
        "collects": 7
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aaa0cde000000000d024c4d",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k03255o4gugkq5g5qi24pb3v200fp7rppo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=5a4bd45df48661b7721a0f37509dcd01&t=6aaaadf3"
    },
    {
      "id": "xhs-6a04207c000000000702913f",
      "note_id": "6a04207c000000000702913f",
      "title": "HSBC最后几天了，有啥问的[害羞R][害羞R]#HSBC #HTC",
      "summary": "HSBC最后几天了，有啥问的[害羞R][害羞R]#HSBC  #HTC",
      "title_en": "HSBC , [ R][ R]#HSBC #HTC [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC , [ R][ R]#HSBC #HTC [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a04207c000000000702913f",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g0083203n5u5n2g605o1ls910bn3tf554r8o?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=45d572421e960f5b794f33530987b772&t=6aaaadf3"
    },
    {
      "id": "xhs-6a05a6e000000000350227d5",
      "note_id": "6a05a6e000000000350227d5",
      "title": "汇丰香港转账内地银行攻略",
      "summary": "🗓️ 时间线（亲测版） Day 1 添加受款人 Day 2 完成转账操作 Day 5-7 内地银行到账 ⚠️ 添加受款",
      "title_en": "HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "🗓️ ( ) Day 1 Day 2 Day 5-7 ⚠️ [translated from Chinese commercial/XHS post]",
      "author_nickname": "水水的AI笔记🔆",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 196,
        "comments": 84,
        "collects": 267
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-14",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a05a6e000000000350227d5",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k0320567943k8005pj99regu6c6f2if8e8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=8cd775cc82dca63559a3193223dc71c6&t=6aaaadf3"
    },
    {
      "id": "xhs-6aa4a00a000000002700aaea",
      "note_id": "6aa4a00a000000002700aaea",
      "title": "所有出發，只是为了更好的回来。#汇丰银行 #香港 #维多利亚港 #我梦想中的城市",
      "summary": "所有出發，只是为了更好的回来。#汇丰银行  #香港  #维多利亚港 #我梦想中的城市  #汇丰  #香港汇丰 #高清壁纸",
      "title_en": "#HSBC # # # [translated from Chinese commercial/XHS post]",
      "summary_en": "#HSBC # # # #HSBC # HSBC # [translated from Chinese commercial/XHS post]",
      "author_nickname": "Argus旅行日記",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 10,
        "comments": 0,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-12",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa4a00a000000002700aaea",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k83250eo2e1iu705por3l0neef26ectl9o?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=9823a0ca4690252f997e138f5fa88ad4&t=6aaaadf3"
    },
    {
      "id": "xhs-6a91902f000000000b025a9f",
      "note_id": "6a91902f000000000b025a9f",
      "title": "香港汇丰线上开卡💣血泪踩坑｜别再照搬碎片",
      "summary": "谁懂啊😭 刷爆小红书各种港卡攻略 周末特种兵冲香港线上开汇丰 明明提前做足功课，到现场还是踩一堆坑 把自己真实实操全部",
      "title_en": "HSBC 💣 ｜ [translated from Chinese commercial/XHS post]",
      "summary_en": "😭 HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "咖啡配烟",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 284,
        "comments": 81,
        "collects": 476
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a91902f000000000b025a9f",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k8324dqqg2u72105n5jrl55phl3m529sa0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=5a78635fab424b6a93981ed9bc44d1b2&t=6aaaadf3"
    },
    {
      "id": "xhs-6a87ed2a00000000330265a0",
      "note_id": "6a87ed2a00000000330265a0",
      "title": "香港注册+开公户一般都收多少钱呀？",
      "summary": "注册香港公司+开汇丰公户，8500元贵了吗？但是听说汇丰开下来挺久的，恒生怎么样？ #香港公司注册  #香港公户  #汇",
      "title_en": "+ corporate account ? [translated from Chinese commercial/XHS post]",
      "summary_en": "注册Hong Kong company+开HSBCcorporate account, 8500元贵了吗? 但是听说HSBC开下来挺久的, Hang Seng怎么样? #Hong Kong company注册 #香港corporate account #汇",
      "author_nickname": "锦鲤附体",
      "sentiment": "负面",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 6,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a87ed2a00000000330265a0",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g0083244dtnp0go605qc1b8ln858gp3ej2uo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=388bc206325c80f41d3014173132ac97&t=6aaaae29"
    },
    {
      "id": "xhs-6a0c21e0000000000802470e",
      "note_id": "6a0c21e0000000000802470e",
      "title": "香港5月新规开香港汇丰公户爽到飞起...",
      "summary": "试了8家银行，表填了不少，最后都没成。理由基本都是“业务材料不够”或者“zi金记录不符合要求” 后来听一个做外贸的朋友说",
      "title_en": "5 HSBCcorporate account [translated from Chinese commercial/XHS post]",
      "summary_en": "8 , , . “ documents ” “zi ” [translated from Chinese commercial/XHS post]",
      "author_nickname": "77在港漂",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 8,
        "comments": 11,
        "collects": 22
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a0c21e0000000000802470e",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g008320bh5j65me5g5q1li4qn9d11m42s158?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=a1623c1b2011c79d0fe267fe03de3c14&t=6aaaae29"
    },
    {
      "id": "xhs-6a87d9ec0000000005030297",
      "note_id": "6a87d9ec0000000005030297",
      "title": "香港注册+开公户一般都收多少钱呀？",
      "summary": "注册香港公司+开汇丰公户，8500元贵了吗？但是听说汇丰开下来挺久的，恒生怎么样？ #香港公司注册 #香港公户 #汇丰开",
      "title_en": "+ corporate account ? [translated from Chinese commercial/XHS post]",
      "summary_en": "注册Hong Kong company+开HSBCcorporate account, 8500元贵了吗? 但是听说HSBC开下来挺久的, Hang Seng怎么样? #Hong Kong company注册 #香港corporate account #HSBC开",
      "author_nickname": "噼里啪啦🔥",
      "sentiment": "负面",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 4,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a87d9ec0000000005030297",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g2sg3244bid007kkg5ptttap397ot186c510?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=87fa43116d9d3bfc0e5f23baf8513d9c&t=6aaaae29"
    },
    {
      "id": "xhs-6a87db3d000000000501658f",
      "note_id": "6a87db3d000000000501658f",
      "title": "香港注册+开公户一般都收多少钱呀？",
      "summary": "注册香港公司+开汇丰公户，8500元贵了吗？但是听说汇丰开下来挺久的，恒生怎么样？ #香港公司注册  #香港公户  #汇",
      "title_en": "+ corporate account ? [translated from Chinese commercial/XHS post]",
      "summary_en": "注册Hong Kong company+开HSBCcorporate account, 8500元贵了吗? 但是听说HSBC开下来挺久的, Hang Seng怎么样? #Hong Kong company注册 #香港corporate account #汇",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a87db3d000000000501658f",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g2sg3244bnfbrgo005o2jg4gg8qqek4ujo5o?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=a08fc5fd677d4a01daa2064953a612d8&t=6aaaae29"
    },
    {
      "id": "xhs-6a058da9000000000702fd54",
      "note_id": "6a058da9000000000702fd54",
      "title": "汇丰公户条件降低",
      "summary": "重大利好消息#汇丰银行开户",
      "title_en": "HSBCcorporate account条件降低",
      "summary_en": "重大利好消息#HSBCaccount opening",
      "author_nickname": "海维国际",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a058da9000000000702fd54",
      "cover_url": "https://sns-na-i2.xhscdn.com/notes_pre_post/1040g3k032053p64a3q605qaa24stpebrfom4t60?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=638973cee1883f767c0022b35b6c3be7&t=6aaaae29"
    },
    {
      "id": "xhs-6a87d72c000000000c0260a2",
      "note_id": "6a87d72c000000000c0260a2",
      "title": "香港注册+开公户一般都收多少钱呀？",
      "summary": "注册香港公司+开汇丰公户，8500元贵了吗？但是听说汇丰开下来挺久的，恒生怎么样？ #香港公司注册  #香港公户  #汇",
      "title_en": "+ corporate account ? [translated from Chinese commercial/XHS post]",
      "summary_en": "注册Hong Kong company+开HSBCcorporate account, 8500元贵了吗? 但是听说HSBC开下来挺久的, Hang Seng怎么样? #Hong Kong company注册 #香港corporate account #汇",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a87d72c000000000c0260a2",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g0083244b7e2r725g5p9jhbsqjcnmq126t5g?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=ed6f5a30d5eaeaf2ad97f0232536708d&t=6aaaae29"
    },
    {
      "id": "xhs-6aa24d8d000000002802f61c",
      "note_id": "6aa24d8d000000002802f61c",
      "title": "🔥开公司+汇丰公户，TCSP持牌秘书代办！",
      "summary": "全程一站式服务，交由我方持牌秘书全程代办～ 📂【办理所需资料】 1️⃣ 中英文公司名称 2️⃣ 股东董事护照 / 身份",
      "title_en": "🔥开公司+HSBCcorporate account, TCSP持牌秘书agency service!",
      "summary_en": "one-stop , agency service～ 📂【 】 1️⃣ 2️⃣ / [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa24d8d000000002802f61c",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g0k0324u63vqu34005q9d69oduatm01ipabo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=515fbb735b42cb355620cb7cdda20c20&t=6aaaae29"
    },
    {
      "id": "xhs-6aa20be70000000011034149",
      "note_id": "6aa20be70000000011034149",
      "title": "🔥港企+汇丰公户，真的太香了！免赴港～",
      "summary": "全程一站式服务，交由我方持牌秘书全程代办～ 📂【办理所需资料】 1️⃣ 中英文公司名称 2️⃣ 股东董事护照 / 身份",
      "title_en": "🔥港企+HSBCcorporate account, 真的really worthwhile! 免赴港～",
      "summary_en": "one-stop , agency service～ 📂【 】 1️⃣ 2️⃣ / [translated from Chinese commercial/XHS post]",
      "author_nickname": "海客精灵-商务服务",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 4,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa20be70000000011034149",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g34o324tu47j730105q9d69oduatm99vd1t0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=ed5dd6c64f6d5f99f9e9fe8c48443e8e&t=6aaaae29"
    },
    {
      "id": "xhs-6a223125000000002003a602",
      "note_id": "6a223125000000002003a602",
      "title": "🇭🇰6.5实测｜汇丰开户1小时搞定！",
      "summary": "姐妹们！之前刷到一堆说开Hu很麻烦的帖子，吓得我差点放弃😭 结果自己过关实测了一遍，总共1小时，丝滑下Ka！ 流程真的",
      "title_en": "🇭🇰6.5实测｜HSBCaccount opening1小时搞定!",
      "summary_en": "! Hu , 😭 , 1 , Ka! [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a223125000000002003a602",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g34o32112hhpn6u205qb2ae5duau836ht5to?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=40777dc9193043643dddd3bd2897422b&t=6aaaae29"
    },
    {
      "id": "xhs-6a2bb83d000000001603da48",
      "note_id": "6a2bb83d000000001603da48",
      "title": "香港公司开户难吗?",
      "summary": "以前高高在上的香港汇丰银行，现在迫于行业压力也有新政策了，没有内地关联公司的初创企业提供资料可开： 1. 股东两年以上的",
      "title_en": "Hong Kong companyaccount opening难吗?",
      "summary_en": "HSBC, , : 1 [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-06-12",
      "search_keyword": "汇丰 开公戶",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a2bb83d000000001603da48",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g008321accn5t7u6g5qh7ohei1500go25220?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=c6b6cb617ec9d06feebd25bc05b5e84f&t=6aaaae29"
    },
    {
      "id": "xhs-6a9107bf00000000040290a0",
      "note_id": "6a9107bf00000000040290a0",
      "title": "汇丰香港：为什么要求转进15万港币？",
      "summary": "汇丰香港开公司账户，为什么要求转入15万港币来启动账户？难道是因为ODI备案的香港公司吗",
      "title_en": "HSBC : 15 ? [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC , 15 ? ODI Hong Kong company [translated from Chinese commercial/XHS post]",
      "author_nickname": "夹心饼干🐷",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 6,
        "comments": 7,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-28",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9107bf00000000040290a0",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g0k0324dadl3en4005oajq9q0jpvluk9hco8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=561b025c9751198b9c5689ac91c9603f&t=6aaaae29"
    },
    {
      "id": "xhs-6a8813cd000000002c001baf",
      "note_id": "6a8813cd000000002c001baf",
      "title": "香港注册+开公户一般都收多少钱呀？",
      "summary": "注册香港公司+开汇丰公户，8500元贵了吗？但是听说汇丰开下来挺久的，恒生怎么样？ #香港公司注册  #香港公户  #汇",
      "title_en": "+ corporate account ? [translated from Chinese commercial/XHS post]",
      "summary_en": "注册Hong Kong company+开HSBCcorporate account, 8500元贵了吗? 但是听说HSBC开下来挺久的, Hang Seng怎么样? #Hong Kong company注册 #香港corporate account #汇",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a8813cd000000002c001baf",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g0083244ij0sfgo6g5qjphub4u601i1qksbo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=8559ba29c9b6cabef035f3280c6c917d&t=6aaaae29"
    },
    {
      "id": "xhs-6a87c44a000000001402515c",
      "note_id": "6a87c44a000000001402515c",
      "title": "香港注册+开公户一般都收多少钱呀？",
      "summary": "注册香港公司+开汇丰公户，8500元贵了吗？但是听说汇丰开下来挺久的，恒生怎么样？ #香港公司注册  #香港公户  #汇",
      "title_en": "+ corporate account ? [translated from Chinese commercial/XHS post]",
      "summary_en": "注册Hong Kong company+开HSBCcorporate account, 8500元贵了吗? 但是听说HSBC开下来挺久的, Hang Seng怎么样? #Hong Kong company注册 #香港corporate account #汇",
      "author_nickname": "会发光的土豆🥔",
      "sentiment": "负面",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 5,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a87c44a000000001402515c",
      "cover_url": "https://sns-na-i2.xhscdn.com/notes_pre_post/1040g3k032448u4khnk005p72q2009r62mrsl7e0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=5d8305750d7c2f1fa4dc3fdf0c29f104&t=6aaaae29"
    },
    {
      "id": "xhs-6a87eab1000000002c0039b2",
      "note_id": "6a87eab1000000002c0039b2",
      "title": "香港注册+开公户一般都收多少钱呀？",
      "summary": "注册香港公司+开汇丰公户，8500元贵了吗？我们老板说贵了，正常多少钱？md这是个我收到最便宜的价格了！但是听说汇丰开下",
      "title_en": "+ corporate account ? [translated from Chinese commercial/XHS post]",
      "summary_en": "Hong Kong company+ HSBCcorporate account, 8500 ? , ? md ! HSBC [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-21",
      "search_keyword": "汇丰 开公戶",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a87eab1000000002c0039b2",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g2sg3244dimb07ukg5q248bdmr4h78ditfeg?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=5368ba0d2e5d59d8a36f767ff955add2&t=6aaaae29"
    },
    {
      "id": "xhs-6a87ec46000000001700a1b6",
      "note_id": "6a87ec46000000001700a1b6",
      "title": "香港注册+开公户一般都收多少钱呀？",
      "summary": "注册香港公司+开汇丰公户，8500元贵了吗？但是听说汇丰开下来挺久的，恒生怎么样？ #香港公司注册  #香港公户  #汇",
      "title_en": "+ corporate account ? [translated from Chinese commercial/XHS post]",
      "summary_en": "注册Hong Kong company+开HSBCcorporate account, 8500元贵了吗? 但是听说HSBC开下来挺久的, Hang Seng怎么样? #Hong Kong company注册 #香港corporate account #汇",
      "author_nickname": "一束光",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a87ec46000000001700a1b6",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g2sg3244dppvl7akg5q88k4jcj6p64n3lv7o?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=b211c410d19353e80594db6f2867233b&t=6aaaae29"
    },
    {
      "id": "xhs-6a8878f0000000002800967e",
      "note_id": "6a8878f0000000002800967e",
      "title": "香港注册+开公户一般都收多少钱呀？",
      "summary": "注册香港公司+开汇丰公户，8500元贵了吗？但是听说汇丰开下来挺久的，恒生怎么样？ #香港公司注册  #香港公户  #汇",
      "title_en": "+ corporate account ? [translated from Chinese commercial/XHS post]",
      "summary_en": "注册Hong Kong company+开HSBCcorporate account, 8500元贵了吗? 但是听说HSBC开下来挺久的, Hang Seng怎么样? #Hong Kong company注册 #香港corporate account #汇",
      "author_nickname": "打工牛马Ray",
      "sentiment": "负面",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 1,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-22",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a8878f0000000002800967e",
      "cover_url": "https://sns-na-i2.xhscdn.com/notes_pre_post/1040g3k03244uvmgtgo2g49458fljq7n1ss36lho?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=1765db1632b687b13a4f91f47e1bc690&t=6aaaae29"
    },
    {
      "id": "xhs-6a87f1d40000000017028536",
      "note_id": "6a87f1d40000000017028536",
      "title": "香港注册+开公户一般都收多少钱呀？",
      "summary": "注册香港公司+开汇丰公户，8500元贵了吗？但是听说汇丰开下来挺久的，恒生怎么样？ #香港公司注册  #香港公户  #汇",
      "title_en": "+ corporate account ? [translated from Chinese commercial/XHS post]",
      "summary_en": "注册Hong Kong company+开HSBCcorporate account, 8500元贵了吗? 但是听说HSBC开下来挺久的, Hang Seng怎么样? #Hong Kong company注册 #香港corporate account #汇",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a87f1d40000000017028536",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g0083244eean5na5g5qion4rjvb026argb50?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=2fd0b199fe3a8915c681315f5b0991fd&t=6aaaae29"
    },
    {
      "id": "xhs-6aaa6786000000002902e43b",
      "note_id": "6aaa6786000000002902e43b",
      "title": "HK公司注册｜搭配汇丰公户=9000✨",
      "summary": "很多外贸卖家想布局香港公司出海却被繁琐注册、银行开户流程难住😭 不用亲自飞往香港、不用精通英文、无需四处奔波资料线上提",
      "title_en": "HK公司注册｜搭配HSBCcorporate account=9000✨",
      "summary_en": "Hong Kong company , account opening 😭 [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-16",
      "search_keyword": "汇丰 开公户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aaa6786000000002902e43b",
      "cover_url": "https://sns-na-i4.xhscdn.com/spectrum/1040g34o32563aon5kc104a6ms0eadpmbqobeddg?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=ce789cbfac95c943f74028ead641f12a&t=6aaaae33"
    },
    {
      "id": "xhs-6a1850a6000000003701e3ab",
      "note_id": "6a1850a6000000003701e3ab",
      "title": "香港汇丰开公户已经电话回访了，还在等邮件",
      "summary": "4月22号先是在线申请的，提交了公司的资料和业务资料，当时要预约电话回访的时间，于是选了最近的5月21号的电话回访（其他",
      "title_en": "HSBC corporate account [translated from Chinese commercial/XHS post]",
      "summary_en": "4 22 , , appointment , 5 21 ( [translated from Chinese commercial/XHS post]",
      "author_nickname": "汤麻子",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 8,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-28",
      "search_keyword": "汇丰 开公户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a1850a6000000003701e3ab",
      "cover_url": "https://sns-na-i4.xhscdn.com/notes_pre_post/1040g3k0320ndrkro6e704bn8v0953pos463795o?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=34bbe7a248895b5b5c2874daa4cdfa83&t=6aaaae33"
    },
    {
      "id": "xhs-6a8833890000000033029ae5",
      "note_id": "6a8833890000000033029ae5",
      "title": "香港注册+开公户一般都收多少钱呀？",
      "summary": "注册香港公司+开汇丰公户，8500元贵了吗？但是听说汇丰开下来挺久的，恒生怎么样？ #香港公司注册  #香港公户  #汇",
      "title_en": "+ corporate account ? [translated from Chinese commercial/XHS post]",
      "summary_en": "注册Hong Kong company+开HSBCcorporate account, 8500元贵了吗? 但是听说HSBC开下来挺久的, Hang Seng怎么样? #Hong Kong company注册 #香港corporate account #汇",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a8833890000000033029ae5",
      "cover_url": "https://sns-na-i4.xhscdn.com/notes_pre_post/1040g3k03244mgqfrgs605pkma8h0uekij1vcv0o?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=0364ea4386b733095f3806c22950bd5e&t=6aaaae33"
    },
    {
      "id": "xhs-6a9d557e000000001203eea6",
      "note_id": "6a9d557e000000001203eea6",
      "title": "📝香港开户真实体验｜4 家热门银行全对比",
      "summary": "自己实地跑出来的干货分享🙋‍♀️ 想办香港银行卡，纠结选哪家的看这篇！ ✅汇丰｜办理时长≈15min 📎资料：身份证",
      "title_en": "📝 account opening experience｜4 [translated from Chinese commercial/XHS post]",
      "summary_en": "🙋‍♀️ , ! ✅HSBC｜ ≈15min 📎 : [translated from Chinese commercial/XHS post]",
      "author_nickname": "Michellel愛自由",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-06",
      "search_keyword": "汇丰 开公户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9d557e000000001203eea6",
      "cover_url": "https://sns-na-i4.xhscdn.com/notes_pre_post/1040g3k0324pagobdhg4g5nq1ro808eo6bdhldd8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=676909811635bdbb58f7db793fec1964&t=6aaaae33"
    },
    {
      "id": "xhs-6aa9282f00000000260087e2",
      "note_id": "6aa9282f00000000260087e2",
      "title": "9.13收到卡了，半小时开好的汇丰心得分享",
      "summary": "8月底开好的港卡，等到红蓝两张卡都到了才发出来✌🏻 是自己在香港全程用手机APP操作的 在西九龙附近连好wifi，从开",
      "title_en": "9.13 , HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "8 , ✌🏻 APP wifi [translated from Chinese commercial/XHS post]",
      "author_nickname": "小鱼儿云游去",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 27,
        "comments": 24,
        "collects": 35
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-15",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa9282f00000000260087e2",
      "cover_url": "https://sns-na-i11.xhscdn.com/notes_pre_post/1040g3k03254scpik4e004a0dgfsu5l9ikm2uk90?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=a4fb1a23f71a5c1d8adce28f5072dc27&t=6aaaae51"
    },
    {
      "id": "xhs-6a92939f000000000b0251f3",
      "note_id": "6a92939f000000000b0251f3",
      "title": "9.14到港亲测有效，汇丰香港半小时拿下",
      "summary": "我自己整理了一版开户思路，尽量不说废话，只讲实际能落地的步骤。 📝25步超全实操｜小白直接照搬 1. 下载HSBC H",
      "title_en": "9.14 , HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "account opening , , . 📝25 ｜ 1. HSBC H [translated from Chinese commercial/XHS post]",
      "author_nickname": "第五页",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 18,
        "comments": 19,
        "collects": 22
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-29",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a92939f000000000b0251f3",
      "cover_url": "https://sns-na-i11.xhscdn.com/1040g008324eqlmsggs0g5qgulgth66050u6u4no?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=cff0f78b7e0974db18c4a79b8350ec3c&t=6aaaae51"
    },
    {
      "id": "xhs-6aaa9204000000001001dea2",
      "note_id": "6aaa9204000000001001dea2",
      "title": "香港滙丰，太给力了，11号网上申请的，说要两个星期，没想今天快递到卡[赞R][赞…",
      "summary": "香港滙丰，太给力了，11号网上申请的，说要两个星期，没想今天快递到卡[赞R][赞R]#银行卡  #香港汇丰银行",
      "title_en": "11 , , [ R][ [translated from Chinese commercial/XHS post]",
      "summary_en": "11 , , [ R][ R]# # HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "羲熠之光",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 15,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aaa9204000000001001dea2",
      "cover_url": "https://sns-na-i11.xhscdn.com/note_pre_post_uhdr/1040g3r832568hgstl67049nbnr5plfdb01jmgag?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=4b0dd0fae9e2ad85cd214723e0c90171&t=6aaaae51"
    },
    {
      "id": "xhs-6a507966000000000f01e522",
      "note_id": "6a507966000000000f01e522",
      "title": "2027 HSBC HK Intern&Grad 新JSA",
      "summary": "昨天做完的 香港汇丰 2027第一轮 OIA，今天早上就收到了第二轮JSA了，跟第一轮一样都是要求10天内完成，已经全部",
      "title_en": "2027 HSBC HK Intern&Grad 新JSA",
      "summary_en": "HSBC 2027 OIA, JSA , 10 [translated from Chinese commercial/XHS post]",
      "author_nickname": "OT之神",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 83,
        "comments": 34,
        "collects": 75
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-10",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a507966000000000f01e522",
      "cover_url": "https://sns-na-i11.xhscdn.com/notes_pre_post/1040g3k8322e8vje66u005n0lse419omu16mdjeo?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=d28653a39608a662e16b9e8a95005fd4&t=6aaaae51"
    },
    {
      "id": "xhs-6aaa738d0000000026023529",
      "note_id": "6aaa738d0000000026023529",
      "title": "标题：到港那天办了汇丰账户｜我的操作顺序 正文： 昨天有姐妹问我到港之后具体怎么…",
      "summary": "标题：到港那天办了汇丰账户｜我的操作顺序 正文： 昨天有姐妹问我到港之后具体怎么弄的，干脆把当天的顺序整理一下👇 ✅我",
      "title_en": ": HSBC ｜ : [translated from Chinese commercial/XHS post]",
      "summary_en": ": HSBC ｜ : , 👇 ✅ [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aaa738d0000000026023529",
      "cover_url": "https://sns-na-i11.xhscdn.com/1040g00832564r49fka2g5q597mqmbom2p0ol4rg?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=a104d2b894cb8489c3531216487afd34&t=6aaaae51"
    },
    {
      "id": "xhs-6a9407a7000000000303f2fc",
      "note_id": "6a9407a7000000000303f2fc",
      "title": "🏦在香港顺手把汇丰账户开了｜记录一下",
      "summary": "这次去香港正好有空，顺便把一直想开的汇丰账户搞定了，整个过程比我预想的要顺利很多，线上操作，全程大概二十分钟左右",
      "title_en": "🏦 HSBC ｜ [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "银河拿铁",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1625,
        "comments": 155,
        "collects": 2248
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-30",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9407a7000000000303f2fc",
      "cover_url": "https://sns-na-i11.xhscdn.com/note_pre_post_uhdr/1040g3r8324g827o77k9049leschu77ungtclt10?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=1dcfbbfdead47a6c8ae81043b032aab2&t=6aaaae51"
    },
    {
      "id": "xhs-6a96c7fc0000000025037c1d",
      "note_id": "6a96c7fc0000000025037c1d",
      "title": "香港HSBC，48000/月，接受无经验，可远程",
      "summary": "汇丰HSBC香港的总部9月开放的Graduate Program秋招急缺人，有来么？实习和校招full- time接受无",
      "title_en": "HSBC, 48000/ [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBCHSBC 9 Graduate Program , ? full- time [translated from Chinese commercial/XHS post]",
      "author_nickname": "我吃饱啦",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 5,
        "comments": 9,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-01",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a96c7fc0000000025037c1d",
      "cover_url": "https://sns-na-i11.xhscdn.com/notes_pre_post/1040g3k8324iu4392gadg5qhdf7840200gpd6vco?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=991a7b84d8a85829a115d8300cc8660d&t=6aaaae51"
    },
    {
      "id": "xhs-6a2ed611000000001c027c12",
      "note_id": "6a2ed611000000001c027c12",
      "title": "香港汇丰RM到底能行吗？会不会被裁？",
      "summary": "香港汇丰RM，最近感觉身边好多人都面试上了，不用会说英语，不用会粤语都能去，甚至在原公司的考核都还蛮低的，然后就能去，这",
      "title_en": "HSBCRM ? ? [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBCRM [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-06-15",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a2ed611000000001c027c12",
      "cover_url": "https://sns-na-i11.xhscdn.com/notes_pre_post/1040g3k8321ddn9u27o7048tiicobcss8tks6bgg?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=094cdb4ae434df0e8566778e3bbafadb&t=6aaaae51"
    },
    {
      "id": "xhs-6aa640d50000000012000854",
      "note_id": "6aa640d50000000012000854",
      "title": "内地一天赴香港开通汇丰银行卡攻略(无预约)",
      "summary": "需要的准备的证件及资料:港澳通行证，身份证，公司名称英文版、常住地址英文版。 从广州早上坐顺风车，去深圳罗湖口岸入境，入",
      "title_en": "HSBC ( appointment) [translated from Chinese commercial/XHS post]",
      "summary_en": ": [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-13",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa640d50000000012000854",
      "cover_url": "https://sns-na-i11.xhscdn.com/1040g2sg32521960u2se04buv1frstsknnmgdr68?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=3e4bf1de512cb88bcc785afdb4b4a15e&t=6aaaae51"
    },
    {
      "id": "xhs-6a5a0fc6000000001302cab7",
      "note_id": "6a5a0fc6000000001302cab7",
      "title": "7.17半小时开好汇丰，不用跑柜台",
      "summary": "先说结果：7月17号，我在麦当劳用手机APP开了户，从点开APP到收到下卡通知，差不多半小时，全程没去柜台排过队。 到香",
      "title_en": "7.17 HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": ": 7 17 , APP , APP [translated from Chinese commercial/XHS post]",
      "author_nickname": "我馕死你",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 480,
        "comments": 289,
        "collects": 696
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-17",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a5a0fc6000000001302cab7",
      "cover_url": "https://sns-na-i11.xhscdn.com/notes_pre_post/1040g3k0322nkjkalg0dg5qhjkomjvc00cnsd9h0?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=3bc833582e40f59fa64998196061d2a9&t=6aaaae51"
    },
    {
      "id": "xhs-6a952ad7000000002303c799",
      "note_id": "6a952ad7000000002303c799",
      "title": "蓝狮子申请比想象中还要简单！",
      "summary": "这次去闺蜜香港，顺手教她把汇丰开了，她说比想象中还要简单。 是的，我们全程手机操作，大概二十分钟就能搞定。 出发前准备",
      "title_en": "! [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a952ad7000000002303c799",
      "cover_url": "https://sns-na-i11.xhscdn.com/1040g2sg324hblkdh0md05qee2tvcsgqsp8a57pg?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=f4436116cd0d2c4b3f4aa8d08e736fef&t=6aaaae51"
    },
    {
      "id": "xhs-6aa8f65c000000002900ecd2",
      "note_id": "6aa8f65c000000002900ecd2",
      "title": "香港汇丰银行约见多心酸",
      "summary": "香港汇丰银行电话提前预约约见更新信息很nice 对不对？ 约见你之后推荐你办理理财保险，我说暂时没这个计划 ，我只是来更",
      "title_en": "香港HSBC约见多心酸",
      "summary_en": "HSBC appointment nice ? recommend [translated from Chinese commercial/XHS post]",
      "author_nickname": "小萌（跨境版）",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 4,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-15",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa8f65c000000002900ecd2",
      "cover_url": "https://sns-na-i11.xhscdn.com/notes_uhdr/1040g3qg3254ma4oeis005o3l301093ahqc0pa3g?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=cb3c6549b6768076037d63abb264faf3&t=6aaaae51"
    },
    {
      "id": "xhs-6aa21d1c0000000026015b9b",
      "note_id": "6aa21d1c0000000026015b9b",
      "title": "在HSBC香港熬过一年比想象中糙也比想象中值",
      "summary": "在HSBC香港办公室熬过了一年，刚从一个季度末的忙季里爬出来，坐下来想想还是挺有感触的。毕业那会儿对银行的认知很模糊，以",
      "title_en": "HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "Joeyce Leung",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 12,
        "comments": 1,
        "collects": 6
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-10",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa21d1c0000000026015b9b",
      "cover_url": "https://sns-na-i11.xhscdn.com/notes_pre_post/1040g3k8324u05j1h3idg5qhbopsjv1021fc2108?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=9d87e40d45cd0c5853be871c6b96da58&t=6aaaae51"
    },
    {
      "id": "xhs-6a8a5f550000000008012bef",
      "note_id": "6a8a5f550000000008012bef",
      "title": "汇丰开始“清理”内地客户？",
      "summary": "汇丰近期通知部分内地客户，要求提交账户维持声明，否则投资相关服务可能被暂停甚至终止。为什么汇丰突然收紧？背后又释放了什么",
      "title_en": "HSBC开始“清理”内地客户?",
      "summary_en": "HSBC , , . HSBC ? [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-23",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a8a5f550000000008012bef",
      "cover_url": "https://sns-na-i11.xhscdn.com/spectrum/1040g0k03246qa7l2mu005o7aj30082h6p1ejsc0?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=ef8fb9de23e9ccf6bfb113003abd1d02&t=6aaaae51"
    },
    {
      "id": "xhs-6a991f93000000000d027682",
      "note_id": "6a991f93000000000d027682",
      "title": "hk 汇丰 2027 S&T Graduate 秋招记录",
      "summary": "8.25 申请 8.26 收到 OIA 邮件，8.31 完成 9.1 收到 JSA 邮件 9.11 完成 JSA：还遇到",
      "title_en": "hk HSBC 2027 S&T Graduate 秋招记录",
      "summary_en": "8.25 8.26 OIA , 8.31 9.1 JSA 9.11 JSA: [translated from Chinese commercial/XHS post]",
      "author_nickname": "料理鼠王🐀",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 17,
        "comments": 38,
        "collects": 5
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-03",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a991f93000000000d027682",
      "cover_url": "https://sns-na-i11.xhscdn.com/notes_pre_post/1040g3k0324l72qr67u0049l4k1bfn53t7hii2og?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=3be22f8e887861c6c170e604a9bdf912&t=6aaaae51"
    },
    {
      "id": "xhs-6aa016220000000012035888",
      "note_id": "6aa016220000000012035888",
      "title": "香港“特产”",
      "summary": "上周去了趟香港 非常丝滑的把中银香港、汇丰、众安的卡办下来了，整体体验感也相对不错，把我自己的经验以及我个人认为这些卡的",
      "title_en": "香港“特产”",
      "summary_en": "BOCHK, HSBC, , experience [translated from Chinese commercial/XHS post]",
      "author_nickname": "小禾同学呀",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 57,
        "comments": 20,
        "collects": 52
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-08",
      "search_keyword": "汇丰银行 香港",
      "competitors": [
        "汇丰",
        "中银香港",
        "虚拟银行"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa016220000000012035888",
      "cover_url": "https://sns-na-i11.xhscdn.com/1040g2sg324s0bdenhke05nkd1uhg84fb8kv90fg?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=aac64c46e977f50aaa20ce81bc776883&t=6aaaae51"
    },
    {
      "id": "xhs-6a855aa300000000110225a7",
      "note_id": "6a855aa300000000110225a7",
      "title": "#汇丰银行 #渣打银行 #外资银行…",
      "summary": "#汇丰银行 #渣打银行 #外资银行",
      "title_en": "#HSBC #Standard Chartered银行 #外资银行...",
      "summary_en": "#HSBC #Standard Chartered银行 #外资银行",
      "author_nickname": "甜蜜蜜",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 13,
        "comments": 43,
        "collects": 6
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-19",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰",
        "渣打"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a855aa300000000110225a7",
      "cover_url": "https://sns-na-i2.xhscdn.com/oss-sg/notes_pre_post/1040g3mo3241tg8ls28005o566pb08t9lq6vlahg?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=8f869a01a058f3ed068f45aba80c052b&t=6aaaae5b"
    },
    {
      "id": "xhs-6a43d7f5000000001003ff7c",
      "note_id": "6a43d7f5000000001003ff7c",
      "title": "汇丰蓝狮子，在澳门取港币零费用",
      "summary": "在澳门汇丰取港币零费用，在银河一楼大堂旁边有一个汇丰的ATM#澳门汇丰银行  #汇率",
      "title_en": "HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC , HSBC ATM# HSBC # [translated from Chinese commercial/XHS post]",
      "author_nickname": "旅行GO",
      "sentiment": "中性",
      "themes": [
        "费用门槛"
      ],
      "category": "费用门槛",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 23,
        "comments": 6,
        "collects": 11
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-06-30",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a43d7f5000000001003ff7c",
      "cover_url": "https://sns-na-i2.xhscdn.com/notes_uhdr/1040g3qo3221u868vn06g5pcclnl8gcid0sl22c0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=727fbbca9fee0c75f495572aa1ae5caf&t=6aaaae5b"
    },
    {
      "id": "xhs-6a9e30170000000025036979",
      "note_id": "6a9e30170000000025036979",
      "title": "🇭🇰旺角分行自助开卡机实测！真香",
      "summary": "好消息先说 旺角分行现在也有汇丰自助开卡机啦！现场拿实体卡，不用苦等邮寄📬 但是！ 如果专门跑一趟，排队真的看运气",
      "title_en": "🇭🇰 ! [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC ! , 📬 ! [translated from Chinese commercial/XHS post]",
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
        "collects": 412
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9e30170000000025036979",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g2sg324q5j7rtnkk05p22gpmk4h1ittcdum0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=987b38f295accf5b9a7f6ade93721f1a&t=6aaaae5b"
    },
    {
      "id": "xhs-6a7c6d92000000003400cf3d",
      "note_id": "6a7c6d92000000003400cf3d",
      "title": "汇丰蓝狮子卡终于到手了",
      "summary": "汇丰蓝狮子卡，没想到不到一周就收到了。之前开了卡，但是回到上海一直没收到，又特意去香港找汇丰银行的人员问了一下。 结果是",
      "title_en": "HSBC蓝狮子卡finally secured了",
      "summary_en": "HSBC , . , , HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "饺子猫猫wex",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 8,
        "comments": 4,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-12",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a7c6d92000000003400cf3d",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g2sg323p68h81nue05ng81aag9bsdl9et0q0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=be6c18866aecd3f3cddf1d5d66f6107f&t=6aaaae5b"
    },
    {
      "id": "xhs-6a8d8ee90000000021026450",
      "note_id": "6a8d8ee90000000021026450",
      "title": "汇丰pulse3分钟丝滑绑定Apple Pay详细教程",
      "summary": "[向右R] 提前准备工作：打开“钱包”APP-＞借记卡或信用卡-＞添加其他卡片，手动输入HKD账户卡号、有效期及 CVV",
      "title_en": "HSBCpulse3 Apple Pay [translated from Chinese commercial/XHS post]",
      "summary_en": "[ R] : “ ”APP-＞ -＞ , HKD , CVV [translated from Chinese commercial/XHS post]",
      "author_nickname": "可有可吴",
      "sentiment": "中性",
      "themes": [
        "数字银行"
      ],
      "category": "数字银行",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 96,
        "comments": 29,
        "collects": 156
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-25",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a8d8ee90000000021026450",
      "cover_url": "https://sns-na-i2.xhscdn.com/notes_pre_post/1040g3k83249tt4dp0al05q7iqntdtl7dcqcqs00?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=3654e4cfea610ea2803104a9f278cdf3&t=6aaaae5b"
    },
    {
      "id": "xhs-6a8807a9000000001601bced",
      "note_id": "6a8807a9000000001601bced",
      "title": "#汇丰 #香港",
      "summary": "#汇丰  #香港",
      "title_en": "#HSBC #香港",
      "summary_en": "#HSBC #香港",
      "author_nickname": "Yachen",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 7,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-21",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a8807a9000000001601bced",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g0083244h4c6kn4004a5g89atm6tu8bdi6v0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=4936f4b96e723559f1750fe1f428c0d0&t=6aaaae5b"
    },
    {
      "id": "xhs-6aa10438000000002802e152",
      "note_id": "6aa10438000000002802e152",
      "title": "汇丰银行中国涉六项违规，被罚179.35万元",
      "summary": "#媒体原创  汇丰银行中国涉六项违规，被罚179.35万元#汇丰银行",
      "title_en": "HSBC , 179.35 [translated from Chinese commercial/XHS post]",
      "summary_en": "# HSBC , 179.35 #HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "极光新闻",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 440,
        "comments": 280,
        "collects": 161
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-09",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa10438000000002802e152",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g0k0324stvufoiu005pqo91mndv5vq7hh1l8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=3f94281c6cb0fd1247d206fdb4306d4d&t=6aaaae5b"
    },
    {
      "id": "xhs-6a9fb61e000000001103187a",
      "note_id": "6a9fb61e000000001103187a",
      "title": "汇丰人好多。。",
      "summary": "找了个工作日来英蓝 怎么也这么多人[呃R][呃R] #汇丰银行开户  #汇丰北京",
      "title_en": "HSBC人好多. .",
      "summary_en": "[ R][ R] #HSBCaccount opening #HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "不洗头多好啊👀",
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
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-08",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9fb61e000000001103187a",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g2sg324rl6gd52ge049fdq092lqdqhrb4ggo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=32d479609cedf83389f9786f877738af&t=6aaaae5b"
    },
    {
      "id": "xhs-6aa2784c000000002b012ed0",
      "note_id": "6aa2784c000000002b012ed0",
      "title": "我带着离开的决心，只为了更辉煌的归来#汇丰…",
      "summary": "我带着离开的决心，只为了更辉煌的归来#汇丰",
      "title_en": "#HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "#HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "小顾同学5",
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
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-10",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa2784c000000002b012ed0",
      "cover_url": "https://sns-na-i2.xhscdn.com/note_pre_post_uhdr/1040g3r0324ubd4263c005qi4fpn3v101j4ust18?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=78889e63b5edf0b51cce5d0ddcf65193&t=6aaaae5b"
    },
    {
      "id": "xhs-6a965a76000000002602290b",
      "note_id": "6a965a76000000002602290b",
      "title": "真是雪中送炭",
      "summary": "汇丰莫名其妙送了一个包给我，上海打电话过来的，知道我的包坏了吗？都不知道自己参加的什么活动，问了下ATM原来不在恒隆，下",
      "title_en": "真是雪中送炭",
      "summary_en": "HSBC , , ? , ATM [translated from Chinese commercial/XHS post]",
      "author_nickname": "zuiailuluzhu",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 20,
        "comments": 18,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-01",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a965a76000000002602290b",
      "cover_url": "https://sns-na-i2.xhscdn.com/notes_pre_post/1040g3k0324iglu6r746g5psf9o81i1kr361cvq0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=25ca22427e340c17a9b91aeb74cf6bd8&t=6aaaae5b"
    },
    {
      "id": "xhs-6a040e46000000000702133a",
      "note_id": "6a040e46000000000702133a",
      "title": "现在香港开户越来越严格了",
      "summary": "帶客户一个上午跑了汇丰、星展、渣打银行开户 1.汇丰在西九龙高铁站就有一家（香港人士认识不用预约可以walk-in，内地",
      "title_en": "account opening [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC, , Standard Chartered account opening 1.HSBC ( appointment walk-in [translated from Chinese commercial/XHS post]",
      "author_nickname": "嘉欣Tammy",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 16,
        "comments": 20,
        "collects": 7
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-13",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰",
        "渣打"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a040e46000000000702133a",
      "cover_url": "https://sns-na-i2.xhscdn.com/notes_uhdr/1040g3qg3203kvguijq00499u6ll9lv9867urmhg?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=161d85f52e6bffa74a7d3d4c82f45bee&t=6aaaae5b"
    },
    {
      "id": "xhs-6a95931e00000000370322d6",
      "note_id": "6a95931e00000000370322d6",
      "title": "#汇丰 败诉#不懂就问有问必答 #万能的小红书",
      "summary": "#汇丰 败诉#不懂就问有问必答  #万能的小红书",
      "title_en": "#HSBC # # [translated from Chinese commercial/XHS post]",
      "summary_en": "#HSBC # # [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-31",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a95931e00000000370322d6",
      "cover_url": "https://sns-na-i2.xhscdn.com/oss-sg/notes_pre_post/1040g3mo324hodfhs2q005n54p485ps1k8kcu5eg?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=35f8a51627736513abcd7370561c0dcc&t=6aaaae5b"
    },
    {
      "id": "xhs-6a0ef6890000000007024b56",
      "note_id": "6a0ef6890000000007024b56",
      "title": "🇭🇰汇丰蓝狮子卡在内地取钱保姆级攻略！",
      "summary": "亲测免手续费+不占额度💳✨ 之前一直头疼：汇丰卡不能直接跨境转到内地银行卡😭 UP主亲自跑到深圳汇丰中国ATM机试了",
      "title_en": "🇭🇰HSBC ! [translated from Chinese commercial/XHS post]",
      "summary_en": "+ 💳✨ : HSBC 😭 UP HSBC ATM [translated from Chinese commercial/XHS post]",
      "author_nickname": "康bro",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 376,
        "comments": 35,
        "collects": 578
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-21",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a0ef6890000000007024b56",
      "cover_url": "https://sns-na-i2.xhscdn.com/note_pre_post_uhdr/1040g3r0320e9q2as62005oh2vu7k0rc9qmgf90g?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=945d327189a536260e8f0cec544acd1a&t=6aaaae5b"
    },
    {
      "id": "xhs-6a98d921000000000d0271f4",
      "note_id": "6a98d921000000000d0271f4",
      "title": "汇丰香港app打不开",
      "summary": "昨天开始就一直打不开 低电量模式关闭也试了 手机重启也试了 都不好用呢？ 有啥好办法吗？ 卸载app还能下载吗？ #汇丰",
      "title_en": "HSBC香港app打不开",
      "summary_en": "? ? app ? #HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "momo",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 3,
        "comments": 10,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-03",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a98d921000000000d0271f4",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g008324kumo3vga7049spltgap9rb1okjkn0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=2eecc0be7795c044b7eeee760368b2db&t=6aaaae5b"
    },
    {
      "id": "xhs-6a77c9000000000028001af3",
      "note_id": "6a77c9000000000028001af3",
      "title": "香港中环风水阵，谁能解释一下Henderson？",
      "summary": "香港中环，金融重地，斗法已是大家都知道的事情。中银和汇丰都是被写在书里的，不知道懂行的朋友能否解释一下Henderson",
      "title_en": "Henderson? [translated from Chinese commercial/XHS post]",
      "summary_en": "BOCHK HSBC , Henderson [translated from Chinese commercial/XHS post]",
      "author_nickname": "柯火火",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 53,
        "comments": 5,
        "collects": 27
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-09",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰",
        "中银香港"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a77c9000000000028001af3",
      "cover_url": "https://sns-na-i2.xhscdn.com/note_pre_post_uhdr/1040g3r8323klbdbsga70414d5rlc0kh78sao21g?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=34174770158e725f6b4061fdf6c5bf12&t=6aaaae5b"
    },
    {
      "id": "xhs-6a9010e6000000001f01ec14",
      "note_id": "6a9010e6000000001f01ec14",
      "title": "Why this bank - HSBC",
      "summary": "HSBC最独特的地方，是它并非进入香港市场的普通外资行，而是一家在香港成立的英资银行。 虽然总部位于英国，但香港一直是集",
      "title_en": "Why this bank - HSBC",
      "summary_en": "HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "Good Day",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 62,
        "comments": 0,
        "collects": 51
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-27",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9010e6000000001f01ec14",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g2sg324cc95pjmue05qfuu21gg300b1i29e8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=ee4b1d096cc92b38499c7e1fe4f43c0f&t=6aaaae5b"
    },
    {
      "id": "xhs-6a9253c5000000002501fe53",
      "note_id": "6a9253c5000000002501fe53",
      "title": "1028天磨难！出卖孟晚舟换取自保，百年汇丰",
      "summary": "1028天磨难！出卖孟晚舟换取自保，百年汇丰",
      "title_en": "1028 ! , HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "1028 ! , HSBC [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9253c5000000002501fe53",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g008324eiu19ego1g5o853rfgbooj3onjhc0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=503e075ffbdc296e57c42af63162e32e&t=6aaaae5b"
    },
    {
      "id": "xhs-6a8cd3700000000037032412",
      "note_id": "6a8cd3700000000037032412",
      "title": "汇丰银行第100间分行 百德新街 1974_07_17 #香港汇丰银行 #历史的…",
      "summary": "汇丰银行第100间分行 百德新街 1974_07_17 #香港汇丰银行 #历史的痕迹  #银行  #懷舊",
      "title_en": "HSBC 100 1974_07_17 # HSBC # [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC 100 1974_07_17 # HSBC # # # [translated from Chinese commercial/XHS post]",
      "author_nickname": "Katherine",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-25",
      "search_keyword": "汇丰 商业银行",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a8cd3700000000037032412",
      "cover_url": "https://sns-na-i2.xhscdn.com/oss-sg/notes_pre_post/1040g3mo32496ljf7j21g5nqv0q5g9akle47mhgg?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=2fc88df5cc1b899d7f1f08085f86b9b2&t=6aaaae5b"
    },
    {
      "id": "xhs-6a474de3000000000f01492b",
      "note_id": "6a474de3000000000f01492b",
      "title": "🇭🇰香港公司+汇丰公户",
      "summary": "王炸组合[火R][火R][火R] 谁做外贸还没个香港公司+汇丰公户的请自行退出外贸圈；在内地即可操作接收外汇，无需过港",
      "title_en": "🇭🇰Hong Kong company+HSBCcorporate account",
      "summary_en": "[ R][ R][ R] Hong Kong company+HSBCcorporate account ; FX [translated from Chinese commercial/XHS post]",
      "author_nickname": "橙子皮7xn",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 12,
        "comments": 12,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-03",
      "search_keyword": "HSBC 香港 公司账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a474de3000000000f01492b",
      "cover_url": "https://sns-na-i11.xhscdn.com/notes_pre_post/1040g3k83225aas1k6s0g4a76oip1160gnadhch8?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=fbaf1b9feaa276fa5f4f91e3fa21c67b&t=6aaaae63"
    },
    {
      "id": "xhs-69aa9a74000000000e03fec2",
      "note_id": "69aa9a74000000000e03fec2",
      "title": "终于！看看谁还没有收到汇丰的公司卡",
      "summary": "终于！心心念念的汇丰香港对公账户顺利下户了。刚激活就直接处理了一张支票，入账也一次成功！简单分享我的开户经验~ 公司是前",
      "title_en": "! HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "! HSBC . , ! account opening ~ [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69aa9a74000000000e03fec2",
      "cover_url": "https://sns-na-i11.xhscdn.com/notes_pre_post/1040g3k831tc9j2nf62dg5prie9v567g1ca9grmo?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=c500997c9c3c594a494f76e210dd4ac0&t=6aaaae63"
    },
    {
      "id": "xhs-6a2d6ee7000000001503c50e",
      "note_id": "6a2d6ee7000000001503c50e",
      "title": "香港自雇续签之路：商业银行账户",
      "summary": "昨天收到汇丰邮件，商业银行账户和卡都申请通过了。[萌萌哒R][萌萌哒R] 之前所有人都告诉我，在香港开公司账户特别难，特",
      "title_en": ": commercial banking [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC , commercial banking . [ R][ R] [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-06-13",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a2d6ee7000000001503c50e",
      "cover_url": "https://sns-na-i11.xhscdn.com/1040g008321bvosnc7o605phjip91oiu00iva1c0?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=92d140e0554703718b9dd76178c68761&t=6aaaae63"
    },
    {
      "id": "xhs-6913124700000000070392c7",
      "note_id": "6913124700000000070392c7",
      "title": "记一下汇丰香港开公户流程，自己开花了1600",
      "summary": "汇丰香港公司开户 1.选银行填申请表，7个工作日内客户经理核对信息 2.客户经理询问业务（行业、交易规模、银行往来频率等",
      "title_en": "HSBC corporate account , 1600 [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBCHong Kong companyaccount opening 1. , 7 relationship manager 2.relationship manager ( [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2025-11-11",
      "search_keyword": "HSBC 香港 公司账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6913124700000000070392c7",
      "cover_url": "https://sns-na-i11.xhscdn.com/spectrum/1040g0k031ooa53jkks005pfrtsq1huk9v95a7m0?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=2f7da8b709f97baf635a2582bbece3ab&t=6aaaae63"
    },
    {
      "id": "xhs-6a010f990000000006036a62",
      "note_id": "6a010f990000000006036a62",
      "title": "亲临中环汇丰银行总行开公司强积金账户",
      "summary": "控股集团旗下新设立一家子公司，需开雇主MPF账户，到达地点： 中环皇后大道中1号汇丰总行大厦（强积金服务在6楼中小企业服",
      "title_en": "HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "MPF , : 1 HSBC ( 6 SME [translated from Chinese commercial/XHS post]",
      "author_nickname": "Victor的笔记",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 6,
        "comments": 1,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-11",
      "search_keyword": "HSBC 香港 公司账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "Large",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a010f990000000006036a62",
      "cover_url": "https://sns-na-i11.xhscdn.com/note_pre_post_uhdr/1040g3r83200n96gs2q705o2dcip08d0hlsmlc5g?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=e6704b58d407b51f282d47e1316bc167&t=6aaaae63"
    },
    {
      "id": "xhs-695dfbda000000002200baec",
      "note_id": "695dfbda000000002200baec",
      "title": "香港汇丰商业理财解锁教程✅",
      "summary": "输入三次错误密码，导致公司帐户被锁，小红书搜了半天，都没有搜到正经教程，打了几次香港客服电话才能接通，很难链接香港客服",
      "title_en": "香港HSBCbusiness banking解锁教程✅",
      "summary_en": "HSBC Hong Kong commercial banking discussion",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-01-07",
      "search_keyword": "HSBC 香港 公司账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/695dfbda000000002200baec",
      "cover_url": "https://sns-na-i11.xhscdn.com/1040g00831r1ek80jga004b33bc382fespbj9qao?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=dc97cb0852e6d78c8790d3d8ca0ad968&t=6aaaae63"
    },
    {
      "id": "xhs-6a6dfe34000000003300b0a7",
      "note_id": "6a6dfe34000000003300b0a7",
      "title": "汇丰降门槛啦",
      "summary": "#跨境电商  #外贸  #亚马逊  #注册香港公司  #香港公司 #离岸公司  #注册公司  #助力企业出海发展  #企",
      "title_en": "HSBC降threshold啦",
      "summary_en": "# # # # Hong Kong company #Hong Kong company # # # # [translated from Chinese commercial/XHS post]",
      "author_nickname": "太正和商务咨询",
      "sentiment": "中性",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-01",
      "search_keyword": "HSBC 香港 公司账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a6dfe34000000003300b0a7",
      "cover_url": "https://sns-na-i11.xhscdn.com/1040g2sg323b3cepp7as05p1ir473oivbu78v7l8?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=9eaf94ce6c52a893a7d622fa317306a6&t=6aaaae63"
    },
    {
      "id": "xhs-6a7451ad000000003302da78",
      "note_id": "6a7451ad000000003302da78",
      "title": "谁懂！香港公司HSBC公hu的窗口期",
      "summary": "#快乐瞬间  #香港公司  #注册香港公司  #注册香港公司  #香港公司户  #干货分享",
      "title_en": "谁懂! Hong Kong companyHSBC公hu的窗口期",
      "summary_en": "#快乐瞬间 #Hong Kong company #注册Hong Kong company #注册Hong Kong company #Hong Kong company户 #干货分享",
      "author_nickname": "CC聊出海",
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
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-06",
      "search_keyword": "HSBC 香港 公司账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a7451ad000000003302da78",
      "cover_url": "https://sns-na-i11.xhscdn.com/spectrum/1040g0k0323h95qjbmu705q1qqeln914i2gmia90?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=f8d3c1e0cc7832c1f8b5b50ce6dbe090&t=6aaaae63"
    },
    {
      "id": "xhs-6aa34645000000002900cf9e",
      "note_id": "6aa34645000000002900cf9e",
      "title": "HK🇭🇰HSBC",
      "summary": "我的香港汇丰APP登陆页面还没有升级更新#香港汇丰  #香港汇丰港卡  #香港滙丰",
      "title_en": "HK🇭🇰HSBC",
      "summary_en": "HSBCAPP # HSBC # HSBC # [translated from Chinese commercial/XHS post]",
      "author_nickname": "小红薯🍠",
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
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-11",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa34645000000002900cf9e",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k8324v4hra832d05npfkl40998fibvark8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=45379a490aa2f1c92b3936ee63af03e4&t=6aaaae68"
    },
    {
      "id": "xhs-6a82a619000000002800a3dd",
      "note_id": "6a82a619000000002800a3dd",
      "title": "小米澎湃OS4 汇丰银行闪退",
      "summary": "小米17promax升级澎湃OS4后，香港汇丰银行APP无法打开，每次点开APP，就显示图二持续几秒后退出。 #澎湃os",
      "title_en": "小米澎湃OS4 HSBC闪退",
      "summary_en": "17promax OS4 , HSBCAPP , APP, . # os [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a82a619000000002800a3dd",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g008323v8tbr1go605o0td3kg8ia4l6lep10?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=25701979b7413c321d61e730681b31ee&t=6aaaae68"
    },
    {
      "id": "xhs-6aa40be5000000000b0013c8",
      "note_id": "6aa40be5000000000b0013c8",
      "title": "汇丰app背景更新",
      "summary": "汇丰app背景更新",
      "title_en": "HSBCapp背景更新",
      "summary_en": "HSBCapp背景更新",
      "author_nickname": "海上740",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-11",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa40be5000000000b0013c8",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g008324vslmggj6005nhlsavg8jnk04t4tto?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=8ff2c46f422ace223402556f7fdbd20a&t=6aaaae68"
    },
    {
      "id": "xhs-6a689178000000000e03483d",
      "note_id": "6a689178000000000e03483d",
      "title": "HSBCUS开户体验",
      "summary": "背景： HSBCCN开户10个月，主账户+达标 HSBCHK开户1年，内地同步卓越，存款30🧱 cnid，无美国住址",
      "title_en": "HSBCUSaccount openingexperience",
      "summary_en": "背景: HSBCCNaccount opening10个月, 主账户+达标 HSBCHKaccount opening1年, 内地同步卓越, deposit30🧱 cnid, 无美国住址",
      "author_nickname": "月魔",
      "sentiment": "中性",
      "themes": [
        "费用门槛"
      ],
      "category": "费用门槛",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 251,
        "comments": 89,
        "collects": 286
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-28",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a689178000000000e03483d",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g2sg3235pdf68nae05p9j87nao95ut609q48?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=ed28b82f96873f25be95f69b01fe6b86&t=6aaaae68"
    },
    {
      "id": "xhs-6a9a227b0000000029012845",
      "note_id": "6a9a227b0000000029012845",
      "title": "怎么查询汇丰银行的开户行信息#不懂就问有问必答 #万能的小红书",
      "summary": "怎么查询汇丰银行的开户行信息#不懂就问有问必答  #万能的小红书",
      "title_en": "HSBC account opening # # [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC account opening # # [translated from Chinese commercial/XHS post]",
      "author_nickname": "小红薯64805329",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 2,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-04",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9a227b0000000029012845",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k8324m6ufgigsdg5p400hik3pb8mg5mac0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=eccae98e23c83565e1aed1120fed11cc&t=6aaaae68"
    },
    {
      "id": "xhs-6a9aa1160000000026014741",
      "note_id": "6a9aa1160000000026014741",
      "title": "汇丰银行怎么看账号和户名#不懂就问有问必答 #万能的小红书 ，转帐记录怎么找出转",
      "summary": "汇丰银行怎么看账号和户名#不懂就问有问必答  #万能的小红书  ，转帐记录怎么找出转出人的姓名那页",
      "title_en": "HSBC # # [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC # # [translated from Chinese commercial/XHS post]",
      "author_nickname": "莉",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 2,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-04",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9aa1160000000026014741",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g008324mmc8os7a0049odaqua1ftot4euulo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=099868c3f9b1d21219029597882cfdd7&t=6aaaae68"
    },
    {
      "id": "xhs-6aa2a52e0000000012025291",
      "note_id": "6aa2a52e0000000012025291",
      "title": "汇丰啊，这也不值得专门发邮件啊",
      "summary": "汇丰啊，这也不值得专门发邮件啊",
      "title_en": "HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "mo不mo的无所谓",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 9,
        "comments": 7,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-10",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa2a52e0000000012025291",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g2sg324ugscq8iue05pqj1va7dl1bspl6f7g?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=c9668a5bd674917e49dd4d1dc1765e15&t=6aaaae68"
    },
    {
      "id": "xhs-6aa35186000000002902fa56",
      "note_id": "6aa35186000000002902fa56",
      "title": "有被香港汇丰登录页面惊艳到",
      "summary": "有被香港汇丰登录页面惊艳到",
      "title_en": "HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "行则将至",
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
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-11",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa35186000000002902fa56",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g008324v5shiq34l05p43d4b4miqvdcf55h8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=6047ed33e79a2125f47302a59b1ee4b5&t=6aaaae68"
    },
    {
      "id": "xhs-6aa616c0000000001001c795",
      "note_id": "6aa616c0000000001001c795",
      "title": "Moneyback 兑换回汇丰发生错误",
      "summary": "如图，系统发生错误，错误代码249000，这是为啥",
      "title_en": "Moneyback 兑换回HSBC发生错误",
      "summary_en": "249000 [translated from Chinese commercial/XHS post]",
      "author_nickname": "小红薯627A3F2C",
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
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-13",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa616c0000000001001c795",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g0083251sejneji005ojq50rocmd50h18og8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=045ae4b92aae363ea9c40ae9242f3e84&t=6aaaae68"
    },
    {
      "id": "xhs-6a9fe90b00000000260152ba",
      "note_id": "6a9fe90b00000000260152ba",
      "title": "汇丰银行双肩包",
      "summary": "汇丰银行双肩包",
      "title_en": "HSBC双肩包",
      "summary_en": "HSBC双肩包",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9fe90b00000000260152ba",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g2sg324rrdsda2mkg5o6oj16g9agft4m6qf0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=25f8175b4a0dacee0fa1626fc3ffd346&t=6aaaae68"
    },
    {
      "id": "xhs-6a8aabe3000000002802f928",
      "note_id": "6a8aabe3000000002802f928",
      "title": "下周有没有去香港开卡的，汇丰",
      "summary": "下周有没有去香港开卡的，汇丰",
      "title_en": "HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "11",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 4,
        "comments": 16,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-23",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a8aabe3000000002802f928",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g00832473mtuo720g5qe5mk3cj3dmrp0q7fo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=048b21b217581ff4803a50f3c0a0d2a3&t=6aaaae68"
    },
    {
      "id": "xhs-6a9e804b000000000d02d0ed",
      "note_id": "6a9e804b000000000d02d0ed",
      "title": "🇲🇾 hsbc ， 收到这个信息是对的吗",
      "summary": "🇲🇾 收到了这个信息 就有去看 app ， 但是 app 没有扣 这个是骗人的吗？ 还是？ [笑哭R][笑哭R",
      "title_en": "🇲🇾 hsbc [translated from Chinese commercial/XHS post]",
      "summary_en": "🇲🇾 app , app ? ? [ R][ R [translated from Chinese commercial/XHS post]",
      "author_nickname": "M8",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 3,
        "comments": 5,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-07",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9e804b000000000d02d0ed",
      "cover_url": "https://sns-na-i1.xhscdn.com/oss-sg/notes_pre_post/1040g3mo324qfbjfg3s005n54d2vk87i5sl3cbeg?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=1e6a42c71cecdd65c0eaea6262e86e00&t=6aaaae68"
    },
    {
      "id": "xhs-6aa4cd78000000002603baee",
      "note_id": "6aa4cd78000000002603baee",
      "title": "汇丰pulse返现比例不对",
      "summary": "云闪付消费了240，正常应按照4.4返现10.56rc，实际才返现8rc，返现比例为3.3%，大佬求指导",
      "title_en": "HSBCpulse返现比例不对",
      "summary_en": "240, 4.4 10.56rc, 8rc, 3.3% [translated from Chinese commercial/XHS post]",
      "author_nickname": "ihugus",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 17,
        "comments": 17,
        "collects": 21
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-12",
      "search_keyword": "汇丰 Business App",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa4cd78000000002603baee",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k83250k71kd3i705pho8m71opnkj4c0k90?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=51c78b0c916ec364a150a358e1c7f092&t=6aaaae68"
    },
    {
      "id": "xhs-6a923e0e000000002a03e399",
      "note_id": "6a923e0e000000002a03e399",
      "title": "50亿美金汇丰假函大揭秘！",
      "summary": "一张纸凭空变出50亿美金？揭秘汇丰银行巨额资金确认函伪造案！排版破绽、UCP600规则张冠李戴……教你三秒看穿国际金融顶",
      "title_en": "50亿美金HSBC假函大揭秘!",
      "summary_en": "50 ? HSBC ! , UCP600 [translated from Chinese commercial/XHS post]",
      "author_nickname": "国际信用证咨询",
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
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-29",
      "search_keyword": "汇丰 贸易融资",
      "competitors": [
        "汇丰"
      ],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a923e0e000000002a03e399",
      "cover_url": "https://sns-na-i4.xhscdn.com/1040g008324ega7qf0a1g5qeorcccleo8jjl2reg?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=85a0223503c7b879f0cbf55cf1dfa0f9&t=6aaaae74"
    },
    {
      "id": "xhs-6aaa1bd200000000280350ab",
      "note_id": "6aaa1bd200000000280350ab",
      "title": "汇丰国际BG保函|全球信用，跨境无忧 依托汇丰54国全球网络，遵循URDG758…",
      "summary": "汇丰国际BG保函|全球信用，跨境无忧 依托汇丰54国全球网络，遵循URDG758国际准则，为跨境贸易、工程、投标、融资提",
      "title_en": "HSBC BG | , HSBC54 , URDG758 [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC BG | , HSBC54 , URDG758 [translated from Chinese commercial/XHS post]",
      "author_nickname": "angel.保函",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-16",
      "search_keyword": "汇丰 贸易融资",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aaa1bd200000000280350ab",
      "cover_url": "https://sns-na-i4.xhscdn.com/1040g2sg3255q4fbo44dg5npldgsg8aglr7ksjg0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=020d60cb03eb62dbd6d9dbc591e86029&t=6aaaae74"
    },
    {
      "id": "xhs-6aa3ccfd000000002502fa1f",
      "note_id": "6aa3ccfd000000002502fa1f",
      "title": "为什么劝你做外贸一定要开香港公司+汇丰？",
      "summary": "#香港公司  #注册香港公司  #外贸出口  #进出口贸易  #汇丰开户  #香港公司开户",
      "title_en": "Hong Kong company+HSBC? [translated from Chinese commercial/XHS post]",
      "summary_en": "#Hong Kong company #注册Hong Kong company #外贸出口 #进出口贸易 #HSBCaccount opening #Hong Kong companyaccount opening",
      "author_nickname": "susu出海顾问",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-13",
      "search_keyword": "汇丰 贸易融资",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa3ccfd000000002502fa1f",
      "cover_url": "https://sns-na-i4.xhscdn.com/spectrum/1040g0k0324vkv090j0005q7hr7ocigil6vva200?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=a6e1229ab663d4113e1e6d7bdb7150e1&t=6aaaae74"
    },
    {
      "id": "xhs-6a2fadae0000000022014129",
      "note_id": "6a2fadae0000000022014129",
      "title": "汇丰银行信用证申请",
      "summary": "汇丰银行信用证申请",
      "title_en": "HSBCletter of credit申请",
      "summary_en": "HSBCletter of credit申请",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a2fadae0000000022014129",
      "cover_url": "https://sns-na-i6.xhscdn.com/1040g2sg321e83are7o705oi30svk1a3nn1fs3v8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=33ee4782b107e43c19c9269fa7757ea7&t=6aaaae7b"
    },
    {
      "id": "xhs-6a1e65660000000037037088",
      "note_id": "6a1e65660000000037037088",
      "title": "香港汇丰银行信用证",
      "summary": "有人填写过汇丰银行信用证吗？第一行申请人公司地址这些没办法填写齐全，有什么办法能处理吗？[哭惹R][哭惹R][哭惹R",
      "title_en": "香港HSBCletter of credit",
      "summary_en": "HSBCletter of credit ? , ? [ R][ R][ R [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a1e65660000000037037088",
      "cover_url": "https://sns-na-i6.xhscdn.com/notes_pre_post/1040g3k0320tc1ecq7o0040071rth8qu9a974vkg?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=176ec3eb0ceb6396cc2999f0fffb7bb8&t=6aaaae7b"
    },
    {
      "id": "xhs-69cfbf12000000001e00e427",
      "note_id": "69cfbf12000000001e00e427",
      "title": "孟加拉的信用证不做！",
      "summary": "孟加拉的信用证，能不做就不做。 如果你非要做，加汇丰或渣打做保兑行。 我之前遇到孟加拉客户要做信用证的，都是直接先要银行",
      "title_en": "孟加拉的letter of credit不做!",
      "summary_en": "letter of credit, . , HSBC Standard Chartered . letter of credit [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69cfbf12000000001e00e427",
      "cover_url": "https://sns-na-i6.xhscdn.com/1040g2sg31ugi4bkgig6g49pm8u82tq75i0m0k90?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=58b6e692ab2524d4c1826ac3db017c54&t=6aaaae7b"
    },
    {
      "id": "xhs-6a01d54f000000003700c794",
      "note_id": "6a01d54f000000003700c794",
      "title": "#信用证LC #香港汇丰银行 #信用证贴现",
      "summary": "#信用证LC  #香港汇丰银行  #信用证贴现",
      "title_en": "#letter of creditLC #香港HSBC #letter of credit贴现",
      "summary_en": "#letter of creditLC #香港HSBC #letter of credit贴现",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a01d54f000000003700c794",
      "cover_url": "https://sns-na-i6.xhscdn.com/1040g2sg3201fftpnigj05o6rt5q0bkf3pprgdao?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=20487106a3369b1db32586e8305e85a5&t=6aaaae7b"
    },
    {
      "id": "xhs-6aa79d1b000000002802e9e0",
      "note_id": "6aa79d1b000000002802e9e0",
      "title": "备用信用证SBLC Provider",
      "summary": "UBS, HSBC DE, HSBC UK 直接开证方",
      "title_en": "备用letter of creditSBLC Provider",
      "summary_en": "UBS, HSBC DE, HSBC UK 直接开证方",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa79d1b000000002802e9e0",
      "cover_url": "https://sns-na-i6.xhscdn.com/1040g0083253c42g2jo4g5plkgqfnc07qakkfv68?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=57567a5ef627731bb5b925af2cc57f27&t=6aaaae7b"
    },
    {
      "id": "xhs-6aa25fcc0000000012001f5b",
      "note_id": "6aa25fcc0000000012001f5b",
      "title": "9.10勇闯香港开卡，顺利办结",
      "summary": "网上很多说法称汇丰香港开hu名额紧张，一定要提前预约。本人实测，没有预约直接到店也可以办理，全程2小时顺利开好自用储蓄账",
      "title_en": "9.10 [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC hu , appointment. , appointment , 2 [translated from Chinese commercial/XHS post]",
      "author_nickname": "Lana都在干嘛",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 26,
        "comments": 5,
        "collects": 19
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa25fcc0000000012001f5b",
      "cover_url": "https://sns-na-i6.xhscdn.com/notes_pre_post/1040g3k0324u8344qj2205qgssd00g4015mvj1vo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=6e10776b2bf1cd58f04fe2145cfc28ed&t=6aaaae7b"
    },
    {
      "id": "xhs-6a65e23d000000000f02a30b",
      "note_id": "6a65e23d000000000f02a30b",
      "title": "725线上汇丰，半小时拿下，流程分享",
      "summary": "纯粹的个人经验分享，没有任何辅导建议，也无任何tz建议 这天的经验分享：7月25号，我在麦当劳用APP开了户，从点开AP",
      "title_en": "725 HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "tz : 7 25 , APP , AP [translated from Chinese commercial/XHS post]",
      "author_nickname": "peep",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 915,
        "comments": 148,
        "collects": 1449
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-26",
      "search_keyword": "汇丰 信用证",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a65e23d000000000f02a30b",
      "cover_url": "https://sns-na-i6.xhscdn.com/1040g2sg3234h6tb6n0905ol836kmd5eq3s22gro?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=3121102a7ab225f95b21a2f192b51b8e&t=6aaaae7b"
    },
    {
      "id": "xhs-6a8447a0000000002402cc1a",
      "note_id": "6a8447a0000000002402cc1a",
      "title": "2026.8.18汇丰香港线上开户 全程约30分钟完成申请提交。本人8.12亲测…",
      "summary": "2026.8.18汇丰香港线上开户 全程约30分钟完成申请提交。本人8.12亲测实操，流程简洁无冗余步骤，全程手机自主操",
      "title_en": "2026.8.18HSBC account opening 30 . 8.12 [translated from Chinese commercial/XHS post]",
      "summary_en": "2026.8.18HSBC account opening 30 . 8.12 [translated from Chinese commercial/XHS post]",
      "author_nickname": "小红帽",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 112,
        "comments": 30,
        "collects": 181
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-18",
      "search_keyword": "汇丰 信用证",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a8447a0000000002402cc1a",
      "cover_url": "https://sns-na-i6.xhscdn.com/notes_pre_post/1040g3k03240rtvl7go6g5oh0qh5419c3n0ihoro?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=cbb223d60ef6c113e0d26dab14d562cf&t=6aaaae7b"
    },
    {
      "id": "xhs-6a9c1daf0000000028028739",
      "note_id": "6a9c1daf0000000028028739",
      "title": "汇丰蓝狮子开卡踩坑贴",
      "summary": "其实一直到卡片到自己手里都没有什么踩坑 人在香港的时候就可以办理 收集APP操作，完了之后寄到内地的地址 网上有很多教程",
      "title_en": "HSBC蓝狮子开卡踩坑贴",
      "summary_en": "APP [translated from Chinese commercial/XHS post]",
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
        "collects": 148
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-05",
      "search_keyword": "汇丰 信用证",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9c1daf0000000028028739",
      "cover_url": "https://sns-na-i6.xhscdn.com/notes_uhdr/1040g3qo324o4rnqg7k7048e6m7tvel0vp9r9nhg?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=1286e9ae92fe6e31efb183300ddb9203&t=6aaaae7b"
    },
    {
      "id": "xhs-6a89b0730000000024024cf4",
      "note_id": "6a89b0730000000024024cf4",
      "title": "汇丰中国降级",
      "summary": "#汇丰中国 #汇丰中国卓越降级  花了一点点时间去一下深圳湾华润大厦，因为没有找客户经理预约，就在前台提供一下身份证临时",
      "title_en": "HSBC中国降级",
      "summary_en": "#HSBC #HSBC , relationship managerappointment [translated from Chinese commercial/XHS post]",
      "author_nickname": "二十四桥明月夜",
      "sentiment": "中性",
      "themes": [
        "客户经理"
      ],
      "category": "客户经理",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 51,
        "comments": 22,
        "collects": 22
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-22",
      "search_keyword": "汇丰 信用证",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a89b0730000000024024cf4",
      "cover_url": "https://sns-na-i6.xhscdn.com/note_pre_post_uhdr/1040g3r832464v7g3nu6g5oipglek19at3scl72o?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=1e6e6fe795b0776946343ca3c69556a4&t=6aaaae7b"
    },
    {
      "id": "xhs-6a43ab7a000000001603c97e",
      "note_id": "6a43ab7a000000001603c97e",
      "title": "汇丰pulse 放水 29小时下卡 一周收到卡",
      "summary": "cnid，24年10月的one，里面一直没放钱 时间线 6.29星期一 13点50 搬23🧱 6.29 14点发起pu",
      "title_en": "HSBCpulse 29 [translated from Chinese commercial/XHS post]",
      "summary_en": "cnid, 24 10 one, 6.29 13 50 23🧱 6.29 14 pu [translated from Chinese commercial/XHS post]",
      "author_nickname": "忘了怎么说就不要说。",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 130,
        "comments": 164,
        "collects": 124
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-06-30",
      "search_keyword": "汇丰 信用证",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a43ab7a000000001603c97e",
      "cover_url": "https://sns-na-i6.xhscdn.com/notes_uhdr/1040g3qg322bori14no4g5n5qutvkm6f42bu1ugg?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=9efd0a9932cb5c80918e94dfec35c2e4&t=6aaaae7b"
    },
    {
      "id": "xhs-6a88693b000000003400c65e",
      "note_id": "6a88693b000000003400c65e",
      "title": "终于用跨境支付通免手续费给汇丰香港转账了",
      "summary": "半年前就开始尝试用跨境支付通给汇丰转账了 一顿操作下来失败好几次，秒拒！ 我猜测是地址不对，汇丰那个地址真的好”烦人星",
      "title_en": "HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC , ! , HSBC ” [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-21",
      "search_keyword": "汇丰 跨境收款",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a88693b000000003400c65e",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k03244s01cm7u705ov33b2pt33fkavioc0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=958b354a13e727ba3326ef7c757c83da&t=6aaaae83"
    },
    {
      "id": "xhs-6a857a240000000033010ae7",
      "note_id": "6a857a240000000033010ae7",
      "title": "HSBC HK 跨境转账个人使用记录",
      "summary": "8月初刚开好 HSBC HK 后，我想了解一下内地银行向香港账户跨境转账的实际体验。后来我通过银行官方渠道试了一次，也顺",
      "title_en": "HSBC HK [translated from Chinese commercial/XHS post]",
      "summary_en": "8 HSBC HK , experience [translated from Chinese commercial/XHS post]",
      "author_nickname": "普通人的研究笔记",
      "sentiment": "正面",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 6,
        "collects": 4
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-19",
      "search_keyword": "汇丰 跨境收款",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a857a240000000033010ae7",
      "cover_url": "https://sns-na-i1.xhscdn.com/spectrum/1040g34o3244ppf1674805qk02k0kob01ime1lag?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=ce7ad18510fc3c2a404f2a81cce596a5&t=6aaaae83"
    },
    {
      "id": "xhs-6aa115ce0000000027016824",
      "note_id": "6aa115ce0000000027016824",
      "title": "享受丝滑收款，跨境电商人的王炸组合！",
      "summary": "做外贸、亚马逊、独立站的宝子们，谁懂啊！ 以前回款慢、汇损高、付款还一堆限制，真的头大😭 直到给香港公司配了汇丰公户",
      "title_en": "! [translated from Chinese commercial/XHS post]",
      "summary_en": "! , , , 😭 Hong Kong company HSBCcorporate account [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa115ce0000000027016824",
      "cover_url": "https://sns-na-i1.xhscdn.com/spectrum/1040g34o324t01ats2s104b9939voolro2b2c6hg?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=92f71be44da895ecb227a6214175b785&t=6aaaae83"
    },
    {
      "id": "xhs-6a8318b40000000006006c04",
      "note_id": "6a8318b40000000006006c04",
      "title": "跨境收款第一步：香港对公户怎么开",
      "summary": "📋 材料清单（以有内地公司为例） ① 香港公司基础资料 ② 董事、股东个人证件 ③营业执照、税表、发票 以上就是汇丰的",
      "title_en": "cross-border collections第一步: 香港对corporate account怎么开",
      "summary_en": "📋 documentschecklist( ) ① Hong Kong company ② , ③ , , HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "Molly跨境企业",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 3,
        "comments": 2,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-17",
      "search_keyword": "汇丰 跨境收款",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a8318b40000000006006c04",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k0323vmo70p7a6g49ou40663bnh5ghshmg?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=6ce12f6396c880cbc508d3c958e581c9&t=6aaaae83"
    },
    {
      "id": "xhs-6a82860a000000002c006269",
      "note_id": "6a82860a000000002c006269",
      "title": "实测兴业寰宇人生无损跨境汇款汇丰",
      "summary": "之前港👃🏻跨境汇丰差不多半天时间，这次美🔪一个多小时，无损很香，之前还担心被拦截，是我多虑了，有几个注意事项",
      "title_en": "HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "👃🏻 HSBC , 🔪 [translated from Chinese commercial/XHS post]",
      "author_nickname": "青春已逝",
      "sentiment": "负面",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 25,
        "comments": 20,
        "collects": 35
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-17",
      "search_keyword": "汇丰 跨境收款",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a82860a000000002c006269",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k0323v4t7un746g5pacq7e25l1if72jbd0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=87c3021f2090dc92620113328cb24b2a&t=6aaaae83"
    },
    {
      "id": "xhs-6a97c391000000002a007dea",
      "note_id": "6a97c391000000002a007dea",
      "title": "在HK设立公司开汇丰有哪些优势",
      "summary": "💻每10家新香港公司，一半以上由内地人开设，多用于跨境电商、外贸收款、海外投资、品牌出海核心原因整理如下： 1️⃣内地",
      "title_en": "HK HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "💻 10 Hong Kong company, , , , , : 1️⃣ [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-02",
      "search_keyword": "汇丰 跨境收款",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a97c391000000002a007dea",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k8324jshkp77u705o824aa0bkup885q7og?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=95aa8f3e0e09f3356eb434f7f66af125&t=6aaaae83"
    },
    {
      "id": "xhs-6aaa80d50000000012025f9d",
      "note_id": "6aaa80d50000000012025f9d",
      "title": "求助怎么把汇丰银行的一万多港币转回内地招行卡[失望R]然后这一步的下一步就不会了…",
      "summary": "求助怎么把汇丰银行的一万多港币转回内地招行卡[失望R]然后这一步的下一步就不会了，银行让我输入英文 各种",
      "title_en": "HSBC [ R] [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC [ R] [translated from Chinese commercial/XHS post]",
      "author_nickname": "小红薯69F7B02",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 8,
        "comments": 52,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aaa80d50000000012025f9d",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k032566585sk4eg5pfgf65195nuf7d6je8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=9911a570c4b258a6ffe903e8b9b05600&t=6aaaae83"
    },
    {
      "id": "xhs-6aa9fd720000000025035386",
      "note_id": "6aa9fd720000000025035386",
      "title": "求助｜外贸收款信息填写",
      "summary": "本人没有拉美的经验，有些说可以用hk，汇丰。有些说走国内公帐美元账户好一点。 现在厄瓜多尔客户准备付汇丰，有些信息请问是",
      "title_en": "｜ [translated from Chinese commercial/XHS post]",
      "summary_en": "hk, HSBC. . HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "你爹是我",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 4,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa9fd720000000025035386",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k03255m8kkvke005olt3kamd9mria2jm1o?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=14b092938c4c07f40f5976b4f18186c2&t=6aaaae83"
    },
    {
      "id": "xhs-6aa3be43000000001103342f",
      "note_id": "6aa3be43000000001103342f",
      "title": "关于建行跨境支付通向汇丰汇款终于成功了",
      "summary": "先是用汇丰转数快支付识别码支付，一直闪退款，试了很多次都不行，后来换汇丰账户号码，还是不行，还是闪退，最后选了用手机号转",
      "title_en": "HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC , , , HSBC [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa3be43000000001103342f",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g008324vitjcfji005q7i2u3cjoevkih6dt8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=b607c86cbae1fefcec098cd3339f9c92&t=6aaaae83"
    },
    {
      "id": "xhs-6a9f81b8000000002603bb01",
      "note_id": "6a9f81b8000000002603bb01",
      "title": "发现跨境汇款新大陆！招行转香港汇丰秒到账",
      "summary": "之前都是用工行转账到香港汇丰，每次要扣掉两百多手续费，今天搜了搜发现招行竟然有免费汇款路径了！ 更方便的是无需提！前！换",
      "title_en": "! HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC, , ! ! ! [translated from Chinese commercial/XHS post]",
      "author_nickname": "马猴烧酒",
      "sentiment": "正面",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 63,
        "comments": 41,
        "collects": 94
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-08",
      "search_keyword": "汇丰 跨境收款",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9f81b8000000002603bb01",
      "cover_url": "https://sns-na-i1.xhscdn.com/spectrum/1040g0k0324remu12hs205ocud4u41q66ns4oi4o?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=1bdb639f42c69d1fd575185055e8540c&t=6aaaae83"
    },
    {
      "id": "xhs-6aa93a2d000000001203d985",
      "note_id": "6aa93a2d000000001203d985",
      "title": "港卡里的💰怎么用？汇丰蓝狮子篇",
      "summary": "港卡开好了，在内地到底怎么花？ 这篇以汇丰蓝狮子卡为例：从激活到线上支付、线下取现，一次说清👇 【先激活，再使用】 申",
      "title_en": "💰 ? HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "? HSBC : , , 👇 【 , 】 [translated from Chinese commercial/XHS post]",
      "author_nickname": "小红薯6A43E153",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 15,
        "comments": 0,
        "collects": 18
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-15",
      "search_keyword": "汇丰 跨境收款",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa93a2d000000001203d985",
      "cover_url": "https://sns-na-i1.xhscdn.com/spectrum/1040g34o3254ug2bkk41043csj0lkctbhai8o9no?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=25f6c91a8d2fa1dc8a3a847946c4d9dd&t=6aaaae83"
    },
    {
      "id": "xhs-6a8eb386000000000a008959",
      "note_id": "6a8eb386000000000a008959",
      "title": "光大转汇丰实测教程",
      "summary": "今天转了两笔同名汇丰都是秒到账的，转出💰就是到账💰，内地跟香港现在做的确实很好了！测试之前我以为只有四大才可以秒到",
      "title_en": "光大转HSBC实测教程",
      "summary_en": "HSBC , 💰 💰, ! [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a8eb386000000000a008959",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g008324b9vhqk0s005phopuj0uaev6knjk60?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=355f967b9dbc9b18a46120c0d44532c1&t=6aaaae83"
    },
    {
      "id": "xhs-6a849e9600000000330343df",
      "note_id": "6a849e9600000000330343df",
      "title": "骗子公司？香港汇丰转账是这样的吗？",
      "summary": "做外贸遇到一个自称祖籍潮汕香港生意人在印尼发展，有客户需要机器人，找我们订购两台[笑哭R]！全程就是很愉快那种，我们没有",
      "title_en": "? HSBC ? [translated from Chinese commercial/XHS post]",
      "summary_en": "[ R]! [translated from Chinese commercial/XHS post]",
      "author_nickname": "潇潇",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 38,
        "comments": 139,
        "collects": 15
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-19",
      "search_keyword": "汇丰 跨境收款",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a849e9600000000330343df",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g2sg32416ds79nk005ndb89pg8pl36hcvgug?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=abb9d3ce6c54b356b811d3a4b5a385ee&t=6aaaae83"
    },
    {
      "id": "xhs-6a83eb2e000000003400f2e5",
      "note_id": "6a83eb2e000000003400f2e5",
      "title": "汇丰香港怎么算境外收入？朋友转账算吗？ #汇丰  #境外收入  #汇丰香港  #…",
      "summary": "汇丰香港怎么算境外收入？朋友转账算吗？ #汇丰  #境外收入  #汇丰香港  #投资账户",
      "title_en": "HSBC ? ? #HSBC # #HSBC # [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC ? ? #HSBC # #HSBC # [translated from Chinese commercial/XHS post]",
      "author_nickname": "国服燕双鹰",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 9,
        "comments": 28,
        "collects": 7
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-18",
      "search_keyword": "汇丰 跨境收款",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a83eb2e000000003400f2e5",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g0083240gl8q27u6g5ni2hq2g9err7ghkd38?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=8f9c2cda042b941f8a50b32244304dd9&t=6aaaae83"
    },
    {
      "id": "xhs-6a77e99b0000000029030988",
      "note_id": "6a77e99b0000000029030988",
      "title": "汇丰银行新建指定收款人",
      "summary": "#跨境电商出纳  #汇丰银行  #跨境电商财务 #指定收款人  #出纳实操",
      "title_en": "HSBC新建指定收款人",
      "summary_en": "# #HSBC # # # [translated from Chinese commercial/XHS post]",
      "author_nickname": "秀垠",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-09",
      "search_keyword": "汇丰 跨境收款",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a77e99b0000000029030988",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g008323kpartv744g5p7o0nogi3l5r01du58?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=2aa51ca15972ef39c42a0fb21e7f12e3&t=6aaaae83"
    },
    {
      "id": "xhs-69c741f9000000001a03319b",
      "note_id": "69c741f9000000001a03319b",
      "title": "我们国际版块的合作机构之一#金融  #财经  #国际  #外汇  #香港  #汇…",
      "summary": "我们国际版块的合作机构之一#金融  #财经  #国际  #外汇  #香港  #汇丰  #合作伙伴  #拓展国际视野",
      "title_en": "# # # #FX # # [translated from Chinese commercial/XHS post]",
      "summary_en": "# # # #FX # #HSBC # # [translated from Chinese commercial/XHS post]",
      "author_nickname": "杨邦俊国际Finance联盟创业者",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69c741f9000000001a03319b",
      "cover_url": "https://sns-na-i11.xhscdn.com/1040g2sg31u88umnliorg5nfkqu9088ris67mlm8?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=3eddc0584328a3dd9f23493c0e6c752a&t=6aaaae8f"
    },
    {
      "id": "xhs-69e5f4e3000000001a032bd6",
      "note_id": "69e5f4e3000000001a032bd6",
      "title": "汇丰太会赚钱了",
      "summary": "听客户经理说汇丰卓越环球转账没有手续费 打算往香港转点RMB 结果没有人民币账户 原来人民币没有办法转到香港 要先换成外",
      "title_en": "HSBC太会赚钱了",
      "summary_en": "relationship manager HSBC RMB [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69e5f4e3000000001a032bd6",
      "cover_url": "https://sns-na-i11.xhscdn.com/1040g2sg31v689iak2i005o0h0jd08oed3rm90mg?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=dda8c91df7ab2e2d7ecda6d4a00aa3c0&t=6aaaae8f"
    },
    {
      "id": "xhs-69ae1f0e000000001a0375c6",
      "note_id": "69ae1f0e000000001a0375c6",
      "title": "香港汇丰vs招商永隆 又一明显差异",
      "summary": "#香港汇丰银行  #香港招商永隆  #外币存款  香港招商永隆一直我个人非常喜欢的银行 高铁西九龙站也有ATM 很适合优",
      "title_en": "HSBCvs [translated from Chinese commercial/XHS post]",
      "summary_en": "# HSBC # # deposit ATM [translated from Chinese commercial/XHS post]",
      "author_nickname": "港途统筹社HK",
      "sentiment": "负面",
      "themes": [
        "费用门槛"
      ],
      "category": "费用门槛",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 19,
        "comments": 11,
        "collects": 21
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-03-09",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69ae1f0e000000001a0375c6",
      "cover_url": "https://sns-na-i11.xhscdn.com/1040g2sg31tfmdqj6686g5q81o5rtt1rp5rcqti8?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=f62c4970193360971592e1267c4f7133&t=6aaaae8f"
    },
    {
      "id": "xhs-6a0b00a70000000006020401",
      "note_id": "6a0b00a70000000006020401",
      "title": "怎么搬砖到汇丰 hk",
      "summary": "汇丰自己的汇率太差了，算了下20🧱少了很多。 搜了下招行的汇率很不错，有人试过招行购汇之后转到汇丰的吗？这样会收手续费",
      "title_en": "怎么搬砖到HSBC hk",
      "summary_en": "HSBC , 20🧱 . , HSBC ? [translated from Chinese commercial/XHS post]",
      "author_nickname": "孤立无援",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 4,
        "comments": 27,
        "collects": 7
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-18",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a0b00a70000000006020401",
      "cover_url": "https://sns-na-i11.xhscdn.com/1040g2sg320advs486ekg5of25suk1jog70e8bq0?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=cc3e2a55c3dcb7330cda3fc402999eef&t=6aaaae8f"
    },
    {
      "id": "xhs-6925a3da000000001e00c816",
      "note_id": "6925a3da000000001e00c816",
      "title": "这是一篇很「红」的小「红」书",
      "summary": "红，是汇丰的底色。 是财富的信号，是陪伴的温度，是连通世界的桥梁。 你好，小「红」书[红书R] 我们是，汇丰「红」[握手",
      "title_en": "「 」 「 」 [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC . , , . , 「 」 [ R] , HSBC「 」[ [translated from Chinese commercial/XHS post]",
      "author_nickname": "汇丰中国",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1532,
        "comments": 0,
        "collects": 215
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2025-11-25",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6925a3da000000001e00c816",
      "cover_url": "https://sns-na-i11.xhscdn.com/spectrum/1040g0k031pae1ot4i60049e0o927pn6r893jeh0?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=e0ea82742cc8a994f7bdd1a5010ee8be&t=6aaaae8f"
    },
    {
      "id": "xhs-6a996cde000000002a025f57",
      "note_id": "6a996cde000000002a025f57",
      "title": "香港汇丰开户+AIA储蓄险全记录",
      "summary": "坐标【西安】跑香港，友邦保单刚回来，趁热整理了全程，收藏照着走！ 一、先说为什么去香港买储蓄险（友邦环宇盈活） 1.想配",
      "title_en": "香港HSBCaccount opening+AIA储蓄险全记录",
      "summary_en": "【 】 , , , ! , ( ) 1 [translated from Chinese commercial/XHS post]",
      "author_nickname": "46A1",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 43,
        "comments": 31,
        "collects": 20
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-03",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a996cde000000002a025f57",
      "cover_url": "https://sns-na-i11.xhscdn.com/1040g008324lgos3cgo005pkl9313us681m06dd0?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=cba3ee2fec647862117025ce4f4f462d&t=6aaaae8f"
    },
    {
      "id": "xhs-6aa413a8000000002b01097f",
      "note_id": "6aa413a8000000002b01097f",
      "title": "我的持有+",
      "summary": "来吧，展示#渣打  #汇丰  #兴业",
      "title_en": "我的持有+",
      "summary_en": "来吧, 展示#Standard Chartered #HSBC #兴业",
      "author_nickname": "齐天纳米圣",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 5,
        "comments": 5,
        "collects": 7
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-11",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰",
        "渣打"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa413a8000000002b01097f",
      "cover_url": "https://sns-na-i11.xhscdn.com/1040g2sg324vtjeltjuk05pv4oad3ictstu9ier0?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=d67c0035c75905a18fed22861a6ab49f&t=6aaaae8f"
    },
    {
      "id": "xhs-691d97e7000000001e009896",
      "note_id": "691d97e7000000001e009896",
      "title": "🇭🇰带团队走进汇丰总行是一种什么体验",
      "summary": "很荣幸受到汇丰邀请参访学习🤝很宝贵的机会🙌🏻学习到很多😊 希望Won Team的成员都能步调一致 稳步向前",
      "title_en": "🇭🇰 HSBC experience [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC 🤝 🙌🏻 😊 Won Team [translated from Chinese commercial/XHS post]",
      "author_nickname": "安柏環球_Won Team",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 86,
        "comments": 8,
        "collects": 15
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2025-11-19",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/691d97e7000000001e009896",
      "cover_url": "https://sns-na-i11.xhscdn.com/notes_pre_post/1040g3k031p2ifrrr280g5puot5v3if508lh45c8?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=4840546e75b9eb3b68ce373f000c89a3&t=6aaaae8f"
    },
    {
      "id": "xhs-6a963e4b0000000012027f0d",
      "note_id": "6a963e4b0000000012027f0d",
      "title": "ZA的一折换汇真划算！",
      "summary": "以前不懂，直接汇丰的跨境支付通换过去HKD，直到用了众安的一折优惠才知道自己光在汇率上就亏了那么多！ 看了下跨境到汇丰",
      "title_en": "ZA的一折换汇真划算!",
      "summary_en": "HSBC HKD, ! HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "meek peek geek",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 88,
        "comments": 43,
        "collects": 79
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-01",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰",
        "虚拟银行"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a963e4b0000000012027f0d",
      "cover_url": "https://sns-na-i11.xhscdn.com/notes_pre_post/1040g3k0324id4eiun40g5pjcilphovdb6c99kj8?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=7c1ee63832a34998ccec107cf9b00034&t=6aaaae8f"
    },
    {
      "id": "xhs-6aa7be8b000000000d0203db",
      "note_id": "6aa7be8b000000000d0203db",
      "title": "幸汇开丰！汇丰为您准备最红祝福",
      "summary": "中秋、国庆黄金周到香港，还在犹豫选什么伴手礼？​ 规划行程时，不妨把汇丰总行加入您的打卡清单！​ 来收下汇丰为您准备的",
      "title_en": "! HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "? ​ , HSBC checklist! ​ HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "汇丰香港",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 194,
        "comments": 0,
        "collects": 79
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa7be8b000000000d0203db",
      "cover_url": "https://sns-na-i11.xhscdn.com/oss-sg/spectrum/1040g3ug3253duanoim005pujsv5j960o1hski58?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=d6f7b1ba6037b0bafdd28a7f7d31b879&t=6aaaae8f"
    },
    {
      "id": "xhs-6a1a139c000000003502ae21",
      "note_id": "6a1a139c000000003502ae21",
      "title": "汇丰对我一直挺好的",
      "summary": "汇丰大客户➕投资人，还是不错的，不光投资回报比较稳定，定期集中更新认知，不断学习，体验很好[买爆R][买爆R]#IPO",
      "title_en": "HSBC对我一直挺好的",
      "summary_en": "HSBC ➕ , , , , , experience [ R][ R]#IPO [translated from Chinese commercial/XHS post]",
      "author_nickname": "Mark说IP",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 9,
        "comments": 1,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-30",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a1a139c000000003502ae21",
      "cover_url": "https://sns-na-i11.xhscdn.com/note_pre_post_uhdr/1040g3r0320p52re0lk005n1ja6g1a424gtg20k8?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=5f4a84c38b1d3fe8d02a6045993ee69e&t=6aaaae8f"
    },
    {
      "id": "xhs-691d4ddf000000001e013135",
      "note_id": "691d4ddf000000001e013135",
      "title": "😊谢邀🇭🇰汇丰总行",
      "summary": "有幸带领团队一同参访中环地标一汇丰银行总行😎 听完汇丰的深度分享🧐令Won Team对投资管理及债券市场有更深入的认",
      "title_en": "😊谢邀🇭🇰HSBC总行",
      "summary_en": "HSBC 😎 HSBC 🧐 Won Team [translated from Chinese commercial/XHS post]",
      "author_nickname": "安柏環球_Won Team",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 50,
        "comments": 0,
        "collects": 11
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2025-11-19",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/691d4ddf000000001e013135",
      "cover_url": "https://sns-na-i11.xhscdn.com/notes_pre_post/1040g3k831p29bq5m2c205puot5v3if5059ngaeo?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=b29de625c402893a11b51139ac469e48&t=6aaaae8f"
    },
    {
      "id": "xhs-6a3fd7dd0000000017009364",
      "note_id": "6a3fd7dd0000000017009364",
      "title": "汇丰HSBC👋",
      "summary": "从汇丰离职也有几个月了，有问题随便问！ 老实讲外资的人文关怀和待遇还是很不错的，而且同事都是很优秀的小伙伴，有很多不同的",
      "title_en": "HSBCHSBC👋",
      "summary_en": "HSBC , ! [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a3fd7dd0000000017009364",
      "cover_url": "https://sns-na-i11.xhscdn.com/1040g2sg321tv2iic7uh05pu2v3d22prdo68gbo0?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=66588a1f22acc8c2929d2014a3fe0e13&t=6aaaae8f"
    },
    {
      "id": "xhs-68ebcd44000000000303a8a1",
      "note_id": "68ebcd44000000000303a8a1",
      "title": "26秋招已开公司解读6：外资行天花板—汇丰",
      "summary": "留学生回国想拿高薪offer，真的建议多看外资银行，现在汇丰银行已经开了26届秋招，留学生们到底该怎么投，今天给大家讲清",
      "title_en": "26 6: -HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "offer, , HSBC 26 [translated from Chinese commercial/XHS post]",
      "author_nickname": "樊大星",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 123,
        "comments": 19,
        "collects": 63
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2025-10-12",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/68ebcd44000000000303a8a1",
      "cover_url": "https://sns-na-i11.xhscdn.com/spectrum/1040g0k031nhute64kq005ofrjt2k0gp2dofjb2o?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=02dc675ba99c46ea48c72eed3c89b9fe&t=6aaaae8f"
    },
    {
      "id": "xhs-69f5dde4000000003501f502",
      "note_id": "69f5dde4000000003501f502",
      "title": "汇丰银行的国际业务仅限以下四家",
      "summary": "记住，国际业务需要预约，先打400电话约以下四家银行的一家，然后再去。 带好开户资料，银行卡去吧，一定要提前去，别问我为",
      "title_en": "HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "appointment, 400 , . account opening [translated from Chinese commercial/XHS post]",
      "author_nickname": "奔跑重启的人生~",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 93,
        "comments": 17,
        "collects": 50
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-02",
      "search_keyword": "汇丰 外汇 公司",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69f5dde4000000003501f502",
      "cover_url": "https://sns-na-i11.xhscdn.com/notes_pre_post/1040g3k031vlphdc23m605nlbiir08s7nqs8uem0?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=2b5fa5aeb565db233d4c9d4988b4e823&t=6aaaae8f"
    },
    {
      "id": "xhs-6a4b5db2000000002003974a",
      "note_id": "6a4b5db2000000002003974a",
      "title": "香港公司注册+汇丰公户，靠自己4380直接拿",
      "summary": "🌪刷到独立站风口，一看要求必须是香港公司，应届生一穷二白的，家里都说我🙄疯了：“你连社保都没交，香港银行凭啥给你开户",
      "title_en": "Hong Kong company注册+HSBCcorporate account, 靠自己4380直接拿",
      "summary_en": "🌪 , Hong Kong company, , 🙄 : “ , account opening [translated from Chinese commercial/XHS post]",
      "author_nickname": "苏西偷偷告诉你",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 49,
        "comments": 27,
        "collects": 34
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-06",
      "search_keyword": "汇丰 开公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a4b5db2000000002003974a",
      "cover_url": "https://sns-na-i6.xhscdn.com/1040g2sg32299dq9a7u005qee3j3smmmg321f0c0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=5f2de41e080b473cc03d1fdc27d51265&t=6aaaae94"
    },
    {
      "id": "xhs-6a2baded000000001702d0ee",
      "note_id": "6a2baded000000001702d0ee",
      "title": "一个很变态但能开香港汇丰公户的方法",
      "summary": "#香港公司注册  #注册香港公司  #银行开户 #香港公司账户 #注册公司 #香港公户 #汇丰公户 #恒生银行  #香港",
      "title_en": "HSBCcorporate account [translated from Chinese commercial/XHS post]",
      "summary_en": "#Hong Kong company注册 #注册Hong Kong company #银行account opening #Hong Kong company账户 #注册公司 #香港corporate account #HSBCcorporate account #Hang Seng银行 #香港",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a2baded000000001702d0ee",
      "cover_url": "https://sns-na-i6.xhscdn.com/1040g2sg321ab557pna605pqg43973achtefo9i8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=5ec68b757be0bd096cf977c76495ff3e&t=6aaaae94"
    },
    {
      "id": "xhs-6aa7c1ef000000002502cbff",
      "note_id": "6aa7c1ef000000002502cbff",
      "title": "急需香港公司注册",
      "summary": "需要次年维护费用和开户 （最好汇丰、其次中信） #注册公司  #跨境电商营业执照",
      "title_en": "急需Hong Kong company注册",
      "summary_en": "account opening ( HSBC, ) # # [translated from Chinese commercial/XHS post]",
      "author_nickname": "不求承",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 35,
        "comments": 78,
        "collects": 4
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-14",
      "search_keyword": "汇丰 开公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa7c1ef000000002502cbff",
      "cover_url": "https://sns-na-i6.xhscdn.com/1040g0083253gjjqiji6g5pjvtk3jckuonf55o78?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=213fb914b1047918fc9bf00eb5e48b4f&t=6aaaae94"
    },
    {
      "id": "xhs-69d6227a00000000200398b3",
      "note_id": "69d6227a00000000200398b3",
      "title": "2026年Bvi公司开户攻略",
      "summary": "🎈哪些银行能开： ①有关联：大新总行+汇丰+渣打+花旗（全球网点多 但是审核严，适合流水大的公司） ②无关联：离岸nr",
      "title_en": "2026年Bvi公司account opening攻略",
      "summary_en": "🎈 : ① : +HSBC+Standard Chartered+ ( , ) ② : nr [translated from Chinese commercial/XHS post]",
      "author_nickname": "铭丰海外企业服务",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 5,
        "comments": 1,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-04-08",
      "search_keyword": "汇丰 开公司户",
      "competitors": [
        "汇丰",
        "渣打",
        "大新"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69d6227a00000000200398b3",
      "cover_url": "https://sns-na-i6.xhscdn.com/spectrum/1040g0k031umpsp2j3m005p90osl8snq3jr5tc68?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=823d26df14749d9e0e3c8bbf8859b86f&t=6aaaae94"
    },
    {
      "id": "xhs-6a87e4fc000000003a02ca6a",
      "note_id": "6a87e4fc000000003a02ca6a",
      "title": "香港注册+开公户一般都收多少钱呀？ 注册香港公司+开汇丰公户，8500元贵了吗？…",
      "summary": "香港注册+开公户一般都收多少钱呀？ 注册香港公司+开汇丰公户，8500元贵了吗？但是听说汇丰开下来挺久的，恒生怎么样",
      "title_en": "香港注册+开corporate account一般都收多少钱呀? 注册Hong Kong company+开HSBCcorporate account, 8500元贵了吗? ...",
      "summary_en": "+ corporate account ? Hong Kong company+ HSBCcorporate account, 8500 ? HSBC , Hang Seng [translated from Chinese commercial/XHS post]",
      "author_nickname": "小张的猫",
      "sentiment": "负面",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 1,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-21",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a87e4fc000000003a02ca6a",
      "cover_url": "https://sns-na-i6.xhscdn.com/1040g0083244ct0qngm605qam3g4tok8htkipbv8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=58db76bc005bf9bc193db953ba7cac58&t=6aaaae94"
    },
    {
      "id": "xhs-68f06ed0000000000700cf57",
      "note_id": "68f06ed0000000000700cf57",
      "title": "一般都收多少钱呀？",
      "summary": "在东莞，注册香港公司+开汇丰公户，8800元贵了吗？#香港公司注册  #香港公户  #汇丰开户  #东莞同城",
      "title_en": "一般都收多少钱呀?",
      "summary_en": "在东莞, 注册Hong Kong company+开HSBCcorporate account, 8800元贵了吗? #Hong Kong company注册 #香港corporate account #HSBCaccount opening #东莞同城",
      "author_nickname": "潮汕人在东莞做玩具外贸的小帅",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 23,
        "comments": 66,
        "collects": 5
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2025-10-16",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/68f06ed0000000000700cf57",
      "cover_url": "https://sns-na-i11.xhscdn.com/1040g2sg31nmfkeo0kud05q4tppe69nhfa9o2ep0?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=6b5fec2391588369b28c8111614ddc8d&t=6aaaae9d"
    },
    {
      "id": "xhs-6aa9fb1000000000290128bf",
      "note_id": "6aa9fb1000000000290128bf",
      "title": "香港公司注册+汇丰开户，9000全包值不值？",
      "summary": "💥核心套餐：香港公司注册 + 汇丰开户 + 送电子账户 优惠价：9000元 🎁福利换购（低价享超值）： ➕200元",
      "title_en": "Hong Kong company注册+HSBCaccount opening, 9000全包值不值?",
      "summary_en": "💥 : Hong Kong company + HSBCaccount opening + : 9000 🎁 ( ): ➕200 [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-16",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa9fb1000000000290128bf",
      "cover_url": "https://sns-na-i11.xhscdn.com/notes_pre_post/1040g3k83255lt4dhk4c05q6a336omj7acuch24g?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=cc3bde7ce8c5369df6eb36a9e6f4440b&t=6aaaae9d"
    },
    {
      "id": "xhs-6a55aea500000000060205e5",
      "note_id": "6a55aea500000000060205e5",
      "title": "香港公司+汇丰开户🔥16年老牌财税",
      "summary": "做外贸、搞跨境电商的老板都知道： 想高效收💰、降低S务成本、提升客户信任度…… 一个合规的企业主体 + 一个支持多币种",
      "title_en": "Hong Kong company+HSBCaccount opening🔥16年老牌财税",
      "summary_en": ": 💰, S , ...... + [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-14",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a55aea500000000060205e5",
      "cover_url": "https://sns-na-i11.xhscdn.com/spectrum/1040g0k0322jbfr2572005qfs7kv08t00r501gr0?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=db0b7e45be24569bf0ea1d1e9a1fe149&t=6aaaae9d"
    },
    {
      "id": "xhs-68cd0eee000000001201c173",
      "note_id": "68cd0eee000000001201c173",
      "title": "香港公司+汇丰🔥才知道好处这么多",
      "summary": "🔥不管您是做跨境经营、进出口贸易，都需要一家香港公司！香港公司+汇丰公户一周可下户？ 📃 香港公司的优势 ✅香港税种",
      "title_en": "Hong Kong company+HSBC🔥才知道好处这么多",
      "summary_en": "🔥 , , Hong Kong company! Hong Kong company+HSBCcorporate account ? 📃 Hong Kong company ✅ [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2025-09-19",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/68cd0eee000000001201c173",
      "cover_url": "https://sns-na-i11.xhscdn.com/spectrum/1040g0k031qokb4fu740g5p5netnk3k0d84t64l8?imageView2/2/w/576/format/heif/q/58|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=e1b3bad812efa0404294d5f8282e8a78&t=6aaaae9d"
    },
    {
      "id": "xhs-6a8d62150000000011012551",
      "note_id": "6a8d62150000000011012551",
      "title": "✅️香港公司+汇丰公户，可免费加急办理！",
      "summary": "全程一站式服务，交由我方持牌秘书全程代办～ 📂【办理所需资料】 1️⃣ 中英文公司名称 2️⃣ 股东董事护照 / 身份",
      "title_en": "✅️Hong Kong company+HSBCcorporate account, 可免费加急办理!",
      "summary_en": "one-stop , agency service～ 📂【 】 1️⃣ 2️⃣ / [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-25",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a8d62150000000011012551",
      "cover_url": "https://sns-na-i11.xhscdn.com/spectrum/1040g0k03249od0lt0s005puq2kh3969g0all6ko?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=e160b16ba847e6ee3235f49ec57f5eeb&t=6aaaae9d"
    },
    {
      "id": "xhs-6a9a8835000000000b00c70d",
      "note_id": "6a9a8835000000000b00c70d",
      "title": "香港公司注册+汇丰开户，到底香在哪里？",
      "summary": "不管是做出口贸易还是跨境经_营，一家香港公司真的是刚需配置！今天就来给宝子们盘一盘，注册香港公司并搭配汇丰开戸到底有什么",
      "title_en": "Hong Kong company注册+HSBCaccount opening, 到底香在哪里?",
      "summary_en": "_ , Hong Kong company ! , Hong Kong company HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "深圳前海百科企业服务",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 2,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-04",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9a8835000000000b00c70d",
      "cover_url": "https://sns-na-i11.xhscdn.com/spectrum/1040g34o324mj79l9n20g5o7mi1og9bdgt8rqh00?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=cb17dd74e55963d6c145c99315bc4662&t=6aaaae9d"
    },
    {
      "id": "xhs-6a01544900000000380212cf",
      "note_id": "6a01544900000000380212cf",
      "title": "香港公司开户｜汇丰银行到底哪里好用了？ 做外贸、开香港公司的老板们都知道 注册香…",
      "summary": "香港公司开户｜汇丰银行到底哪里好用了？ 做外贸、开香港公司的老板们都知道 注册香港注册公司简单，但是选开户银行难 汇丰又",
      "title_en": "Hong Kong companyaccount opening｜HSBC到底哪里好用了? 做外贸, 开Hong Kong company的老板们都知道 注册香...",
      "summary_en": "Hong Kong companyaccount opening｜HSBC ? , Hong Kong company , account opening HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "sherry聊海外企服",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 2,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-11",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a01544900000000380212cf",
      "cover_url": "https://sns-na-i11.xhscdn.com/notes_pre_post/1040g3k83200vk0ca2ae04a4hsuipqn28ofodmc0?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=85dbda3573fc2215782d5069ddb751b3&t=6aaaae9d"
    },
    {
      "id": "xhs-6a0588c80000000007029372",
      "note_id": "6a0588c80000000007029372",
      "title": "汇丰香港公户早该这样了…我那堆血泪教训算",
      "summary": "姐妹们谁理解啊！！ 3月我跑去开汇丰香港的公户 柜台一句“有没有内地关联公司？” 我说没有，当场连申请表都不给我🤡 后",
      "title_en": "HSBC corporate account [translated from Chinese commercial/XHS post]",
      "summary_en": "! ! 3 HSBC corporate account “ ? ” , 🤡 [translated from Chinese commercial/XHS post]",
      "author_nickname": "Umi在香港",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 5,
        "collects": 4
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-14",
      "search_keyword": "香港 公司开户 汇丰",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a0588c80000000007029372",
      "cover_url": "https://sns-na-i11.xhscdn.com/1040g00832052obf4jq605prsoou62tlssr6jr9g?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=ba39b55fb00673b19243ec568af97368&t=6aaaae9d"
    },
    {
      "id": "xhs-6a02e8a700000000370371c9",
      "note_id": "6a02e8a700000000370371c9",
      "title": "💥👉港企+汇丰公户快至一周下户❗️岂能不香",
      "summary": "⭕为什么做跨境电商和外贸的老板们都想要办理一家港企+汇丰银行账户呢❓ ⭕港企的优势: ✅1️⃣港企的取名很自由，经营范围",
      "title_en": "💥👉 +HSBCcorporate account ❗️ [translated from Chinese commercial/XHS post]",
      "summary_en": "⭕ +HSBC ❓ ⭕ : ✅1️⃣ [translated from Chinese commercial/XHS post]",
      "author_nickname": "汇而信商务",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 11,
        "comments": 1,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-12",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a02e8a700000000370371c9",
      "cover_url": "https://sns-na-i6.xhscdn.com/notes_pre_post/1040g3k83202h3r2s2g705q34jl0n9ealq8ru5i0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=233800137db8e98a7de96d0c5a287625&t=6aaaaea2"
    },
    {
      "id": "xhs-6a447987000000001702eac6",
      "note_id": "6a447987000000001702eac6",
      "title": "🇭🇰香港汇丰公司户🎉 ✅无需存款、无需理财 ✅在香港/内地一线城市见证 ​✅新公…",
      "summary": "🇭🇰香港汇丰公司户🎉 ✅无需存款、无需理财 ✅在香港/内地一线城市见证 ​✅新公司/贸易/物流行业都可以开",
      "title_en": "🇭🇰 HSBCcorporate account🎉 ✅ deposit, ✅ / ​✅ [translated from Chinese commercial/XHS post]",
      "summary_en": "🇭🇰 HSBCcorporate account🎉 ✅ deposit, ✅ / ​✅ / / [translated from Chinese commercial/XHS post]",
      "author_nickname": "稀奇古怪的悟空",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-01",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a447987000000001702eac6",
      "cover_url": "https://sns-na-i6.xhscdn.com/notes_pre_post/1040g3k03222i2ag07u6g5q9q8mbcl0rt459iba0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=d3ec97c59c41efcc34555f74fd161c13&t=6aaaaea2"
    },
    {
      "id": "xhs-6a2032a9000000003803732b",
      "note_id": "6a2032a9000000003803732b",
      "title": "乐｜亲测，赴港开卡，线上半小时搞定3张",
      "summary": "❓为什么要去开银行卡 ▪️汇丰开卡成功后，再申请【投资账户】可直接买美股 ▪️通过中银HK卡作为桥梁转账免手续费。即中银",
      "title_en": "｜ , , 3 [translated from Chinese commercial/XHS post]",
      "summary_en": "❓ ▪️HSBC , 【 】 ▪️ BOCHKHK . BOCHK [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a2032a9000000003803732b",
      "cover_url": "https://sns-na-i6.xhscdn.com/1040g2sg320v3pk1n7ee05ni8q9u08vs79r7a898?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=923ea6da7ccf207a56531da893eb362a&t=6aaaaea2"
    },
    {
      "id": "xhs-69d85f480000000023014336",
      "note_id": "69d85f480000000023014336",
      "title": "香港中银+汇丰线上开户经验总结",
      "summary": "4.10过港亲测 一天搞定中银+汇丰，全程线上 cao作，不用跑柜台，新手零踩坑，超省心! 核心前提（缺一不可） 必须本",
      "title_en": "香港BOCHK+HSBC线上account opening经验总结",
      "summary_en": "4.10 BOCHK+HSBC, cao , , , ! ( ) [translated from Chinese commercial/XHS post]",
      "author_nickname": "cc库",
      "sentiment": "负面",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 489,
        "comments": 15,
        "collects": 717
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-04-10",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69d85f480000000023014336",
      "cover_url": "https://sns-na-i6.xhscdn.com/notes_pre_post/1040g3k831uovpspl2qdg5qbgeca0q218f5q0iro?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=2eb21ad7484779f5a3489917f44acea0&t=6aaaaea2"
    },
    {
      "id": "xhs-6a9008ab000000000700615a",
      "note_id": "6a9008ab000000000700615a",
      "title": "汇丰领的新秀丽包",
      "summary": "客户经理提前给我约好的时间，喊我来领礼品 来了以后给我讲了一下卓越卡怎么办理，需要后期一直存50w进去，不存就会降级，挺",
      "title_en": "HSBC领的新秀丽包",
      "summary_en": "relationship manager , , 50w [translated from Chinese commercial/XHS post]",
      "author_nickname": "momo",
      "sentiment": "中性",
      "themes": [
        "客户经理"
      ],
      "category": "客户经理",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 17,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-27",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9008ab000000000700615a",
      "cover_url": "https://sns-na-i6.xhscdn.com/1040g008324cb9en37a004bj2d04rtf07mnl990o?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=dce6cebfeb9267bde6917cbe8052c435&t=6aaaaea2"
    },
    {
      "id": "xhs-6a01ad8f000000003601fb3a",
      "note_id": "6a01ad8f000000003601fb3a",
      "title": "香港汇丰银行公司开户门槛放宽！无内地关联公司也可申请，跨境电商迎来窗口期…",
      "summary": "香港汇丰银行公司开户门槛放宽！无内地关联公司也可申请，跨境电商迎来窗口期",
      "title_en": "HSBC account openingthreshold ! [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC account openingthreshold ! [translated from Chinese commercial/XHS post]",
      "author_nickname": "海哥说海外公司",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-11",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a01ad8f000000003601fb3a",
      "cover_url": "https://sns-na-i6.xhscdn.com/1040g0083201almbqig605qdjq1rckpa4331icro?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=24da7831d4216b55d663bb706822bf90&t=6aaaaea2"
    },
    {
      "id": "xhs-6aa675df00000000250354bf",
      "note_id": "6aa675df00000000250354bf",
      "title": "华侨城新开的一家汇丰",
      "summary": "华侨城新开的一家汇丰",
      "title_en": "华侨城新开的一家HSBC",
      "summary_en": "华侨城新开的一家HSBC",
      "author_nickname": "L~ Y",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 485,
        "comments": 123,
        "collects": 136
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-13",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa675df00000000250354bf",
      "cover_url": "https://sns-na-i6.xhscdn.com/notes_uhdr/1040g3qg325284306ju005nvr42q0bq263pt4ed8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=894a90191eded91246a33e9dd3c81478&t=6aaaaea2"
    },
    {
      "id": "xhs-6a0ac599000000003703624a",
      "note_id": "6a0ac599000000003703624a",
      "title": "🇭🇰 汇丰pulse12天下卡 个人时间线分享",
      "summary": "4月知道有这张卡后，在小红书做功课收藏了10+帖子，看完还是有点混乱。自己摸索走了一通，整体还是比较简单顺利的，分享一下",
      "title_en": "🇭🇰 HSBCpulse12 [translated from Chinese commercial/XHS post]",
      "summary_en": "4 , 10+ [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a0ac599000000003703624a",
      "cover_url": "https://sns-na-i6.xhscdn.com/notes_pre_post/1040g3k8320a6hknq6e8g4a1gi3tqe9nlrupi6p0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=2adce626689646b5a8e1116a1cc946c7&t=6aaaaea2"
    },
    {
      "id": "xhs-6a38afac0000000021015662",
      "note_id": "6a38afac0000000021015662",
      "title": "原来不同公司开汇丰户要求这多",
      "summary": "深圳外贸老板、跨境SOHO、初创企业快看！ 很多初创跨境从业者都有误区：没有内地关联企业，就没法办理香港企业账户",
      "title_en": "HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "SOHO, ! : [translated from Chinese commercial/XHS post]",
      "author_nickname": "博瑞郑姐",
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
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-06-22",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a38afac0000000021015662",
      "cover_url": "https://sns-na-i6.xhscdn.com/spectrum/1040g0k0321n1c4jrn4005qgdeargg403oiqpru8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=1cd7ca385a5706cf391fcdd43c8689e1&t=6aaaaea2"
    },
    {
      "id": "xhs-6a1f8e730000000036031209",
      "note_id": "6a1f8e730000000036031209",
      "title": "汇丰银行这个投资账户怎么开啊？",
      "summary": "为什么我开了投资账户，还说我地址不合格，怎么改地址才能成功啊",
      "title_en": "HSBC ? [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC Hong Kong commercial banking discussion",
      "author_nickname": "方解石",
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
        "collects": 4
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-06-03",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a1f8e730000000036031209",
      "cover_url": "https://sns-na-i6.xhscdn.com/1040g2sg320ugb1cp7ae05ovetf8jq459l6flf4o?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=774d4e349b1a845e7186981ab8d70149&t=6aaaaea2"
    },
    {
      "id": "xhs-6a91136a00000000050294ef",
      "note_id": "6a91136a00000000050294ef",
      "title": "汇丰银行boxhill分行电话#不懂就问有问必答 #万能的小红书",
      "summary": "汇丰银行boxhill分行电话#不懂就问有问必答  #万能的小红书",
      "title_en": "HSBCboxhill # # [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBCboxhill # # [translated from Chinese commercial/XHS post]",
      "author_nickname": "万推司",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-28",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a91136a00000000050294ef",
      "cover_url": "https://sns-na-i6.xhscdn.com/notes_pre_post/1040g3k8324dbrlf60adg5pfl4qe1944alic17o0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=8448ee57a16d8f7d4763c490f8edad7b&t=6aaaaea2"
    },
    {
      "id": "xhs-69d61f47000000001b0039c4",
      "note_id": "69d61f47000000001b0039c4",
      "title": "4.8赴港开户找了个代办15分钟下户~",
      "summary": "1.重要提示：过关后第一件事！连上香港WiFi（商场/机场/麦当劳/银行都ok）再操作！ 2.打开HSBC HK App",
      "title_en": "4.8赴港account opening找了个agency service15分钟下户~",
      "summary_en": "1. : ! WiFi( / / / ok) ! 2. HSBC HK App [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-04-08",
      "search_keyword": "汇丰 中小企 账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69d61f47000000001b0039c4",
      "cover_url": "https://sns-na-i6.xhscdn.com/1040g00831umpgvca1m0g5pu9dgv2nsoo2naaf0o?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=c7974e9fb2c8a1e73e07875af1df8cd0&t=6aaaaea2"
    },
    {
      "id": "xhs-6a6b4b87000000002402422b",
      "note_id": "6a6b4b87000000002402422b",
      "title": "一名保险中介贿赂三名汇丰银行客户经理，协助客户插队，让他们无需轮候，直接办理开户…",
      "summary": "一名保险中介贿赂三名汇丰银行客户经理，协助客户插队，让他们无需轮候，直接办理开户，三名经理被捕。 #香港  #香港ICA",
      "title_en": "intermediary HSBCrelationship manager, , , account opening [translated from Chinese commercial/XHS post]",
      "summary_en": "intermediary HSBCrelationship manager, , , account opening, . # # ICA [translated from Chinese commercial/XHS post]",
      "author_nickname": "香港動态",
      "sentiment": "中性",
      "themes": [
        "客户经理"
      ],
      "category": "客户经理",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 1,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-30",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a6b4b87000000002402422b",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k83238f5vbp6u005ob8ohj0kco6tb1ln08?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=99b16ef0ee9060557ca883c34ddc86bd&t=6aaaaea7"
    },
    {
      "id": "xhs-6a73db79000000002402f150",
      "note_id": "6a73db79000000002402f150",
      "title": "想开汇丰卓越卡…",
      "summary": "想开汇丰卓越卡",
      "title_en": "想开HSBC卓越卡...",
      "summary_en": "想开HSBC卓越卡",
      "author_nickname": "小王先森丶有点贱",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 15,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-06",
      "search_keyword": "汇丰 中介 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a73db79000000002402f150",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g2sg323gqopdq02dg4br5gbq6ugmrc8irvf8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=a4e053efb0f6783c2e4cc72ae280a476&t=6aaaaea7"
    },
    {
      "id": "xhs-6a1bf16400000000070298a0",
      "note_id": "6a1bf16400000000070298a0",
      "title": "26号一天极限搞定，今天都收到了",
      "summary": "#香港汇丰  #香港券商  #开户  #开户攻略  #券商",
      "title_en": "26 [translated from Chinese commercial/XHS post]",
      "summary_en": "#香港HSBC #香港券商 #account opening #account opening攻略 #券商",
      "author_nickname": "，，，",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 6,
        "comments": 13,
        "collects": 9
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-31",
      "search_keyword": "汇丰 中介 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a1bf16400000000070298a0",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g2sg320qvbngm62e05plfpkf7e3ddfmsetfo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=7703ba3fb84caab3fc78b00d14c9836c&t=6aaaaea7"
    },
    {
      "id": "xhs-6a323d29000000002101b7da",
      "note_id": "6a323d29000000002101b7da",
      "title": "汇丰开户审核回访电话回答注意事项求指点 #不懂就问有问必答  #万能的小红书…",
      "summary": "汇丰开户审核回访电话回答注意事项求指点 #不懂就问有问必答  #万能的小红书",
      "title_en": "HSBCaccount opening # # [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBCaccount opening # # [translated from Chinese commercial/XHS post]",
      "author_nickname": "小晚",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-06-17",
      "search_keyword": "汇丰 中介 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a323d29000000002101b7da",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g008321go6mlsne6g49rb7jg00d77vjo9nc8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=1365157d853a1785119f2c6e6c429e11&t=6aaaaea7"
    },
    {
      "id": "xhs-6aa1588b000000001001fbb9",
      "note_id": "6aa1588b000000001001fbb9",
      "title": "汇丰线上开户疑问",
      "summary": "详情看我上一篇帖子，被审核之后现在再进入申请流程完全无法扫描身份证。这种情况是永久屏蔽了吗[扶墙R",
      "title_en": "HSBC线上account opening疑问",
      "summary_en": "[ R [translated from Chinese commercial/XHS post]",
      "author_nickname": "Yang14eVer&Asta",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 2,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-09",
      "search_keyword": "汇丰 中介 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa1588b000000001001fbb9",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k8324t88m1eju705nr4go4g8jcqlilhgo8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=28472ac465fbc178782bfff9fe08fdda&t=6aaaaea7"
    },
    {
      "id": "xhs-6a75b9030000000006007168",
      "note_id": "6a75b9030000000006007168",
      "title": "香港公司+汇丰公户=电商老板的月入过万秘籍",
      "summary": "做生意越往后越明白 经营架构做好，能省去超多麻烦 💡 最近超多实业、商贸的老板来咨询 香港公司搭配香港对公账户这套组合",
      "title_en": "Hong Kong company+HSBCcorporate account=电商老板的月入过万秘籍",
      "summary_en": "💡 , Hong Kong company [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-07",
      "search_keyword": "汇丰 中介 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a75b9030000000006007168",
      "cover_url": "https://sns-na-i1.xhscdn.com/spectrum/1040g0k0323ikn1aa70005qftfj3g8t00pketieo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=304b7e3dfd7e5fcc0ca2c3743253d88e&t=6aaaaea7"
    },
    {
      "id": "xhs-6a7c786c0000000008010be7",
      "note_id": "6a7c786c0000000008010be7",
      "title": "没有收到汇丰实体卡，是否能开通券商#不懂就问有问必答 #万能的小红书",
      "summary": "没有收到汇丰实体卡，是否能开通券商#不懂就问有问必答  #万能的小红书",
      "title_en": "HSBC , # # [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC , # # [translated from Chinese commercial/XHS post]",
      "author_nickname": "大头",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 14,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-12",
      "search_keyword": "汇丰 中介 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a7c786c0000000008010be7",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g2sg323p7u7887ke05oc9t9j41qd0sue42do?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=67c2be463eb18e16f17bfe1f32f0052c&t=6aaaaea7"
    },
    {
      "id": "xhs-6a752bf1000000002102397f",
      "note_id": "6a752bf1000000002102397f",
      "title": "汇丰的金葫芦～",
      "summary": "RM小姐姐送的金葫芦！#HSBC  #汇丰银行  #汇丰香港  #香港汇丰",
      "title_en": "HSBC的金葫芦～",
      "summary_en": "RM ! #HSBC #HSBC #HSBC # HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "Sunny",
      "sentiment": "中性",
      "themes": [
        "客户经理"
      ],
      "category": "客户经理",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 10,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-07",
      "search_keyword": "汇丰 中介 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a752bf1000000002102397f",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g008323i3q1qg6s005qi79ql3vd03qo6o53o?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=f7c0904bdfc68d92adc7bc57f1199a35&t=6aaaaea7"
    },
    {
      "id": "xhs-6a9f5ea40000000011031eb1",
      "note_id": "6a9f5ea40000000011031eb1",
      "title": "求北京汇丰客户经理，需要开户礼 坐标南四环，相对近一点的（好吧基本都挺远的）客户…",
      "summary": "求北京汇丰客户经理，需要开户礼 坐标南四环，相对近一点的（好吧基本都挺远的）客户经理可以联系我了，存50w超三个月，该拿",
      "title_en": "HSBCrelationship manager, account opening , ( ) [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBCrelationship manager, account opening , ( )relationship manager , 50w [translated from Chinese commercial/XHS post]",
      "author_nickname": "Rochelimit.",
      "sentiment": "中性",
      "themes": [
        "客户经理"
      ],
      "category": "客户经理",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 11,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-08",
      "search_keyword": "汇丰 中介 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9f5ea40000000011031eb1",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g008324rae3daia605o0kuf1g87shu22ivm8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=9740bd276093acffa503eb407eb57d5d&t=6aaaaea7"
    },
    {
      "id": "xhs-6a438ecb00000000170299af",
      "note_id": "6a438ecb00000000170299af",
      "title": "终于找到家靠谱的秘书公司了～",
      "summary": "香港公司注册好了，汇丰公户也开下来了[偷笑R]，也不妄我花这么多时间去找秘书公司 注册花了4600，汇丰开户花了",
      "title_en": "～ [translated from Chinese commercial/XHS post]",
      "summary_en": "Hong Kong company , HSBCcorporate account [ R], 4600, HSBCaccount opening [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a438ecb00000000170299af",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g2sg3221l6ae87ed05q5ass06afs168feiq0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=eeece319ec5e4214c3ef7b4f8f1ae77e&t=6aaaaeaf"
    },
    {
      "id": "xhs-69fefc5c000000002301438e",
      "note_id": "69fefc5c000000002301438e",
      "title": "记录下香港公司汇丰开户过程～",
      "summary": "公司注册下来那会找秘书公司帮我开户，给我推荐的是大新和东亚，但是我意向是开汇丰的，我自己有了解过开汇丰的要求，需要有内地",
      "title_en": "记录下Hong Kong companyHSBCaccount opening过程～",
      "summary_en": "account opening, recommend , HSBC , HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "天颂",
      "sentiment": "正面",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 114,
        "comments": 5,
        "collects": 41
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-09",
      "search_keyword": "汇丰 公司秘书 开户",
      "competitors": [
        "汇丰",
        "东亚",
        "大新"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69fefc5c000000002301438e",
      "cover_url": "https://sns-na-i1.xhscdn.com/note_pre_post_uhdr/1040g3r831vul9vl62g905p586aik3jeu7noej7o?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=8e0cb69fe04a0490f9cb1e0b0b265a16&t=6aaaaeaf"
    },
    {
      "id": "xhs-6a6b02e30000000014006eb8",
      "note_id": "6a6b02e30000000014006eb8",
      "title": "香港主体+汇丰公户，认证12年TCSP持牌秘书",
      "summary": "很多做跨境的老板，注册完后，卡在最关键的一步—开户。 自己约不到、资料理不清、被拒一次又得等几个月…… 其实找对专业团队",
      "title_en": "+HSBCcorporate account, 12 TCSP [translated from Chinese commercial/XHS post]",
      "summary_en": "account opening [translated from Chinese commercial/XHS post]",
      "author_nickname": "企诺达商务咨询",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-30",
      "search_keyword": "汇丰 公司秘书 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a6b02e30000000014006eb8",
      "cover_url": "https://sns-na-i1.xhscdn.com/spectrum/1040g0k0323868agjn20g5paeabi0hsms7mgl7so?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=42e6a3443a9c32a63f359326d94c809f&t=6aaaaeaf"
    },
    {
      "id": "xhs-6aa3b77e0000000011030979",
      "note_id": "6aa3b77e0000000011030979",
      "title": "汇丰WPB就是iWPB吗？ 第一天入职权限都还没有就给活了…",
      "summary": "汇丰WPB就是iWPB吗？ 第一天入职权限都还没有就给活了",
      "title_en": "HSBCWPB iWPB ? [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBCWPB iWPB ? [translated from Chinese commercial/XHS post]",
      "author_nickname": "杰瑞",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 19,
        "comments": 56,
        "collects": 9
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-11",
      "search_keyword": "汇丰 公司秘书 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa3b77e0000000011030979",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g008324vi9hpejc0g5qaiijmgq2dsvhr8v28?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=43f220a917c022eb441a9a3086c14023&t=6aaaaeaf"
    },
    {
      "id": "xhs-69db782e000000001f007bcb",
      "note_id": "69db782e000000001f007bcb",
      "title": "汇丰1w管理费别再傻傻“存定期”啦！",
      "summary": "为什么不推荐“存定期”！接下来我来算一笔，大家可以对比看看哪个合适！ 方案[一R]：存定期（年利率） 1️⃣港元(图",
      "title_en": "HSBC1w “ ” ! [translated from Chinese commercial/XHS post]",
      "summary_en": "recommend“ ”! , ! [ R]: ( ) 1️⃣ ( [translated from Chinese commercial/XHS post]",
      "author_nickname": "不贪那两毛",
      "sentiment": "正面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 370,
        "comments": 57,
        "collects": 478
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-04-12",
      "search_keyword": "汇丰 公司秘书 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69db782e000000001f007bcb",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k0320093aa1ia0g5q9eskjtodb8l6kqvf8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=e58dca3db6695ef63d8e39be8c6ea2a0&t=6aaaaeaf"
    },
    {
      "id": "xhs-6a06946f0000000036033146",
      "note_id": "6a06946f0000000036033146",
      "title": "香港汇丰银行卡怎么买港股",
      "summary": "#小红书搜索  #万能的小红书  #问一问",
      "title_en": "香港HSBC卡怎么买港股",
      "summary_en": "# # # [translated from Chinese commercial/XHS post]",
      "author_nickname": "Keep-reading",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 12,
        "comments": 1,
        "collects": 26
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-15",
      "search_keyword": "汇丰 公司秘书 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a06946f0000000036033146",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k032063ridm2i005o66ii708vfj8mfs540?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=829fbc8f09250bfa95cb3fbb35c482fb&t=6aaaaeaf"
    },
    {
      "id": "xhs-6a8ef0e80000000008011af0",
      "note_id": "6a8ef0e80000000008011af0",
      "title": "嘉信schwab怎么入金",
      "summary": "直接用汇丰香港给图一schwab提供的美国账户转账，这个流程能成功入jin吗？还有更好的入金办法吗！#券商  #金融投资",
      "title_en": "嘉信schwab怎么入金",
      "summary_en": "HSBC schwab , jin ? ! # # [translated from Chinese commercial/XHS post]",
      "author_nickname": "健身篮球滑雪运动混子",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 51,
        "comments": 56,
        "collects": 85
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-26",
      "search_keyword": "汇丰 公司秘书 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a8ef0e80000000008011af0",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k0324b8ib4u721g4154uqca1muc5dr2bj8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=94cd82ebbd1ca49c0ba440a79e87b3ad&t=6aaaaeaf"
    },
    {
      "id": "xhs-6a35fb87000000000702ace7",
      "note_id": "6a35fb87000000000702ace7",
      "title": "香港开户后续之汇丰卡第一次入金分享",
      "summary": "香港汇丰卡到手后，第一次入金实测来了！ 之前申请的香港汇丰，大概一周左右就成功了，银行卡也已经寄到。 同时招商永隆的卡也",
      "title_en": "account opening HSBC [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC , ! HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "阿咘咘吧",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 117,
        "comments": 22,
        "collects": 97
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-06-20",
      "search_keyword": "汇丰 公司秘书 开户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a35fb87000000000702ace7",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g2sg321kcuonf7ke05q3ifron9eo9o63ge70?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=ebe32030501964418218bdb0953a13ef&t=6aaaaeaf"
    },
    {
      "id": "xhs-6a8d63c9000000001a02994f",
      "note_id": "6a8d63c9000000001a02994f",
      "title": "🔥香港公司+汇丰公户，真的太好用了！！",
      "summary": "全程一站式服务，交由我方持牌秘书全程代办～ 📂【办理所需资料】 1️⃣ 中英文公司名称 2️⃣ 股东董事护照 / 身份",
      "title_en": "🔥Hong Kong company+HSBCcorporate account, 真的太好用了! !",
      "summary_en": "one-stop , agency service～ 📂【 】 1️⃣ 2️⃣ / [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a8d63c9000000001a02994f",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g34o3249oj4pd0s105puq2kh3969g4r2kef0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=648a5f1871b905d7a194926d9e0535e2&t=6aaaaeb6"
    },
    {
      "id": "xhs-6a2f9df5000000001003dc22",
      "note_id": "6a2f9df5000000001003dc22",
      "title": "香港公司+汇丰公户🔥全程一站式代办！",
      "summary": "全程一站式服务，交由我方持牌秘书全程代办～ 📂【办理所需资料】 1️⃣ 中英文公司名称 2️⃣ 股东董事护照 / 身份",
      "title_en": "Hong Kong company+HSBCcorporate account🔥全程one-stopagency service!",
      "summary_en": "one-stop , agency service～ 📂【 】 1️⃣ 2️⃣ / [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a2f9df5000000001003dc22",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g0k0321e64po6n4e05pehkhq1e0jft69kkr0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=884d2391ac0d23d94b58e16dbf20e832&t=6aaaaeb6"
    },
    {
      "id": "xhs-6a8d584200000000260214ff",
      "note_id": "6a8d584200000000260214ff",
      "title": "HK 主体｜汇丰账户可安排✨",
      "summary": "做全球电商的小伙伴看过来👀 HK 主体搭配主流账户选择真的很重要 市面主流账户均可对接 汇丰也可以安排到位 整套资料齐",
      "title_en": "HK 主体｜HSBC账户可安排✨",
      "summary_en": "👀 HK HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "注册公司代理记账找恒诚信",
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
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-25",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a8d584200000000260214ff",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g0k03249n3sqs0s005n1ti2p1gvlmc0lbcg8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=f97cef7943aaf135092ea7f402274704&t=6aaaaeb6"
    },
    {
      "id": "xhs-6a2f9a4b000000001102f3af",
      "note_id": "6a2f9a4b000000001102f3af",
      "title": "HK公司+汇丰公户🔥真的太香了！",
      "summary": "全程一站式服务，交由我方持牌秘书全程代办～ 📂【办理所需资料】 1️⃣ 中英文公司名称 2️⃣ 股东董事护照 / 身份",
      "title_en": "HK公司+HSBCcorporate account🔥真的really worthwhile!",
      "summary_en": "one-stop , agency service～ 📂【 】 1️⃣ 2️⃣ / [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a2f9a4b000000001102f3af",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g34o321e5d60j722g5pehkhq1e0jfk790f48?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=f764db53adafd4d4d26f6b14fd4e6cc3&t=6aaaaeb6"
    },
    {
      "id": "xhs-6a1f8c69000000003502fb53",
      "note_id": "6a1f8c69000000003502fb53",
      "title": "香港公司+汇丰公户丨全程代办丨持牌机构",
      "summary": "想拓展海外市场？香港公司+汇丰公户绝对是热门选择🌟 条件相对宽松、税制简单、国际形象佳，特别适合外贸、跨境电商及创业者",
      "title_en": "Hong Kong company+HSBCcorporate account丨全程agency service丨持牌机构",
      "summary_en": "? Hong Kong company+HSBCcorporate account 🌟 [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a1f8c69000000003502fb53",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g0k0320ufu1d9ms005puq2kh3969gfas5og0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=31c172b3280b51934c6423c53b88db6c&t=6aaaaeb6"
    },
    {
      "id": "xhs-6a102ebf000000003701c2e2",
      "note_id": "6a102ebf000000003701c2e2",
      "title": "外贸公司注册+汇丰公户，一站式全程代办！",
      "summary": "[暗中观察R][暗中观察R]做贸易用外贸公司？ ①省流程→不需要申请进出口权，可以直接做海外客户与内地工厂的中转站",
      "title_en": "外贸公司注册+HSBCcorporate account, one-stop全程agency service!",
      "summary_en": "[ R][ R] ? ① → [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a102ebf000000003701c2e2",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g0k0320ffshaimk005p2omh6k4o5bfikkc9g?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=07e9b5025f0a53e806f37dbe89ab0285&t=6aaaaeb6"
    },
    {
      "id": "xhs-6a66c6ff000000000f03f417",
      "note_id": "6a66c6ff000000000f03f417",
      "title": "🔥香港主体+汇丰公户，20年办理经验！",
      "summary": "全程一站式服务，交由我方持牌秘书全程代办～ 📂【办理所需资料】 1️⃣ 中英文公司名称 2️⃣ 股东董事护照 / 身份",
      "title_en": "🔥香港主体+HSBCcorporate account, 20年办理经验!",
      "summary_en": "one-stop , agency service～ 📂【 】 1️⃣ 2️⃣ / [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-27",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a66c6ff000000000f03f417",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g34o3234207r16u105puq2kh3969gocsfpuo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=59f2c6180545e79c34c3935392116986&t=6aaaaeb6"
    },
    {
      "id": "xhs-6a2f9586000000002201862e",
      "note_id": "6a2f9586000000002201862e",
      "title": "设立公司+汇丰公户🔥一站式服务",
      "summary": "全程一站式服务，交由我方持牌秘书全程代办～ 📂【办理所需资料】 1️⃣ 中英文公司名称 2️⃣ 股东董事护照 / 身份",
      "title_en": "设立公司+HSBCcorporate account🔥one-stop服务",
      "summary_en": "one-stop , agency service～ 📂【 】 1️⃣ 2️⃣ / [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a2f9586000000002201862e",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g34o321e53t8bn2105pehkhq1e0jfc146uuo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=ae87f31fc40fd83c04e2d444baad1ae7&t=6aaaaeb6"
    },
    {
      "id": "xhs-6a195c52000000003501cd0b",
      "note_id": "6a195c52000000003501cd0b",
      "title": "外贸公司＋汇丰公户一站式代办",
      "summary": "🔥公司+汇丰公户快至一周搞定，不要太香 做外贸、搞跨境电商的朋友都知道: 想高效收💰、降低S务成本、提升客户信任度",
      "title_en": "外贸公司＋HSBCcorporate accountone-stopagency service",
      "summary_en": "🔥 +HSBCcorporate account , worthwhile , : 💰, S [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a195c52000000003501cd0b",
      "cover_url": "https://sns-na-i2.xhscdn.com/notes_pre_post/1040g3k8320oedaov6obg5ojtsq68cq313q33e3o?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=d6f74c0094dca53652e53dc72c40e1d0&t=6aaaaeb6"
    },
    {
      "id": "xhs-6a4c9fce000000001702f8dc",
      "note_id": "6a4c9fce000000001702f8dc",
      "title": "香港公司+汇丰公户｜全套办理 无需赴港！",
      "summary": "✨想要在香港拥有一家公司 香港公司+汇丰公户 全程代办🔥 🌟香港公司遇到以下情况一站式搞： 新设｜公户｜年审｜审计",
      "title_en": "Hong Kong company+HSBCcorporate account｜全套办理 无需赴港!",
      "summary_en": "✨想要在香港拥有一家公司 Hong Kong company+HSBCcorporate account 全程agency service🔥 🌟Hong Kong company遇到以下情况one-stop搞: 新设｜corporate account｜年审｜审计",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a4c9fce000000001702f8dc",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g0k0322ag4640ms005phdun31oqcc922r8m0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=e6f5287eede86df695566b6a5124f268&t=6aaaaeb6"
    },
    {
      "id": "xhs-6a9e17cc000000002902d5f2",
      "note_id": "6a9e17cc000000002902d5f2",
      "title": "TCSP 持牌秘书公司，香港全套只需 8000",
      "summary": "注册香港公司➕汇丰开户，只需8000，无需过港#跨境电商  #海外业务拓展  #财税合规  #香港公司注册  #ODI备",
      "title_en": "TCSP , 8000 [translated from Chinese commercial/XHS post]",
      "summary_en": "注册Hong Kong company➕HSBCaccount opening, 只需8000, 无需过港#跨境电商 #海外业务拓展 #财税合规 #Hong Kong company注册 #ODI备",
      "author_nickname": "思衡",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 3,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-07",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9e17cc000000002902d5f2",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g008324q2j4qh1g605q2ffh66r5e301tqa7g?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=b5bf65d2373f0ecfaaca68e3b3d6e971&t=6aaaaeb6"
    },
    {
      "id": "xhs-6a69a43f000000000401f11a",
      "note_id": "6a69a43f000000000401f11a",
      "title": "香港公司 + 汇丰对公账户｜一站式出海方案",
      "summary": "外贸、跨境电商刚需配置 资金调度灵活，全球认可度高 📋 所需资料 公司名称、经营范围 董事股东证件、持股比例 注册地址",
      "title_en": "Hong Kong company + HSBC对公账户｜one-stop出海方案",
      "summary_en": "📋 [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a69a43f000000000401f11a",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g0k03236rgu3v6s005pmpflhne4khalmukao?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=ae9f02b51cb4a1c337c413218c8e30d7&t=6aaaaeb6"
    },
    {
      "id": "xhs-6aa1101f000000002802e8dd",
      "note_id": "6aa1101f000000002802e8dd",
      "title": "🔥港企+汇丰公户，快至一周下户❗👍️",
      "summary": "全程一站式服务，交由我方持牌秘书全程代办～ 📂【办理所需资料】 1️⃣ 中英文公司名称 2️⃣ 股东董事护照 / 身份",
      "title_en": "🔥港企+HSBCcorporate account, 快至一周下户❗👍️",
      "summary_en": "one-stop , agency service～ 📂【 】 1️⃣ 2️⃣ / [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa1101f000000002802e8dd",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g34o324sv4kkj340g5q9d69oduatmitp156g?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=031b690d8100d948f72a728063448193&t=6aaaaeb6"
    },
    {
      "id": "xhs-69fed53f000000001f00360e",
      "note_id": "69fed53f000000001f00360e",
      "title": "香港主体 + 开户｜一站式搞定，不用跑香港",
      "summary": "📌 给需要做业务拓展的老板整理了省心方案： ✅ 主体注册 ✅ 对公开户（汇丰 / 华侨 / 大新等渠道可对接） ✅ 年",
      "title_en": "+ account opening｜one-stop [translated from Chinese commercial/XHS post]",
      "summary_en": "📌 : ✅ ✅ account opening(HSBC / / ) ✅ [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-09",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰",
        "大新"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69fed53f000000001f00360e",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g0k031vuhb1l0is005qftffa0fv048508qig?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=3dad1fc1a47fa41b80344785691299df&t=6aaaaeb6"
    },
    {
      "id": "xhs-6a69cbff0000000009034077",
      "note_id": "6a69cbff0000000009034077",
      "title": "香港顺利开户",
      "summary": "上午线上汇丰，下午线下中银，投资账户也开了！成都✈️深圳🚄香港✈️成都，只在香港待了10小时不到。 汇丰：朋友在安盛上",
      "title_en": "香港顺利account opening",
      "summary_en": "HSBC, BOCHK, ! ✈️ 🚄 ✈️ , 10 . HSBC: [translated from Chinese commercial/XHS post]",
      "author_nickname": "知行未晚",
      "sentiment": "正面",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 7,
        "comments": 15,
        "collects": 4
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-29",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰",
        "中银香港"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a69cbff0000000009034077",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g0083236u9phu7u00493qei73ukqe0u9a2c8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=0d074e29fa92081850ff7f3b0f6d76ee&t=6aaaaeb6"
    },
    {
      "id": "xhs-6a0e863e000000003700e7a1",
      "note_id": "6a0e863e000000003700e7a1",
      "title": "寻一个汇丰中国客户经理帮开户",
      "summary": "如题，想开一个汇丰中国账户，账面资金存不到50w但可以接受买理财保险 扣管理费 等其他要求，有意可私信～ #客户经理",
      "title_en": "寻一个HSBC中国relationship manager帮account opening",
      "summary_en": "HSBC , 50w , ～ #relationship manager [translated from Chinese commercial/XHS post]",
      "author_nickname": "Sytao",
      "sentiment": "中性",
      "themes": [
        "客户经理"
      ],
      "category": "客户经理",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 7,
        "comments": 48,
        "collects": 5
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-21",
      "search_keyword": "汇丰 代办 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a0e863e000000003700e7a1",
      "cover_url": "https://sns-na-i2.xhscdn.com/1040g008320ds210nm2e05o9iv8rgk4btron7b00?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=8ac128234f326253bbef367c13ec3202&t=6aaaaeb6"
    },
    {
      "id": "xhs-6a8417a9000000003202358c",
      "note_id": "6a8417a9000000003202358c",
      "title": "开户被银行拒了，帆妹说不是条件差是没选对",
      "summary": "中午好🍽️ 今天聊对公开户怎么选银行。 前阵子有个老板找帆妹，海外公司注册完了，但开户卡住了。他先去了汇丰被拒，又试了",
      "title_en": "account opening [translated from Chinese commercial/XHS post]",
      "summary_en": "🍽️ account opening . , , account opening . HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "帆妹聊出海",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-18",
      "search_keyword": "汇丰 渣打 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a8417a9000000003202358c",
      "cover_url": "https://sns-na-i4.xhscdn.com/spectrum/1040g34o3240m229b74105qa3d2bgq9vamah6nd8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=d6cc30a5c64eef95262bd0e6fbbb2683&t=6aaaaec8"
    },
    {
      "id": "xhs-6a96cfae000000000d024afd",
      "note_id": "6a96cfae000000000d024afd",
      "title": "求指教，50万开汇丰还是渣打呀？",
      "summary": "如题，懂的朋友，给建议建议。谢谢 #定期存款  #理财  #储蓄  #银行  #理财小白  #资产配置",
      "title_en": "求指教, 50万开HSBC还是Standard Chartered呀?",
      "summary_en": "# deposit # # # # # [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-01",
      "search_keyword": "汇丰 渣打 公司户",
      "competitors": [
        "汇丰",
        "渣打"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a96cfae000000000d024afd",
      "cover_url": "https://sns-na-i4.xhscdn.com/notes_pre_post/1040g3k0324iv0ts10o004bf9l4p5oo9k8h662gg?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=f04a031deba1425ebfdfae7f346d3acf&t=6aaaaec8"
    },
    {
      "id": "xhs-6a7d64350000000022014b04",
      "note_id": "6a7d64350000000022014b04",
      "title": "单位汇丰银行使用者名称不知道怎么办理#不懂就问有问必答 #万能的小红书",
      "summary": "单位汇丰银行使用者名称不知道怎么办理#不懂就问有问必答  #万能的小红书",
      "title_en": "HSBC # # [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC # # [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-13",
      "search_keyword": "汇丰 渣打 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a7d64350000000022014b04",
      "cover_url": "https://sns-na-i4.xhscdn.com/notes_pre_post/1040g3k8323q4n6vdn2dg5n62p81429l7l9rguoo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=913e2f2ec0ae285dae3443346fe73d7e&t=6aaaaec8"
    },
    {
      "id": "xhs-6aa8042b000000002a02e3cd",
      "note_id": "6aa8042b000000002a02e3cd",
      "title": "求助🆘定期更推荐渣打还是汇丰",
      "summary": "杭州或者香港都可以 随时能去香港开户 想对比一下利率和安全性 求建议 谢谢老师们🙏🏻🙏🏻🫶🏻🫶🏻#定期存",
      "title_en": "求助🆘定期更recommendStandard Chartered还是HSBC",
      "summary_en": "account opening 🙏🏻🙏🏻🫶🏻🫶🏻# [translated from Chinese commercial/XHS post]",
      "author_nickname": "美味金猪",
      "sentiment": "正面",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 28,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-14",
      "search_keyword": "汇丰 渣打 公司户",
      "competitors": [
        "汇丰",
        "渣打"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa8042b000000002a02e3cd",
      "cover_url": "https://sns-na-i4.xhscdn.com/notes_pre_post/1040g3k03253ohpn9jo0048vi07cte6m294safng?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=7264001145c36d2d51099e6c9b398627&t=6aaaaec8"
    },
    {
      "id": "xhs-6a72db95000000003301af1a",
      "note_id": "6a72db95000000003301af1a",
      "title": "汇丰银行理财经理值得去吗？#不懂就问有问必答 #万能的小红书",
      "summary": "汇丰银行理财经理值得去吗？#不懂就问有问必答  #万能的小红书",
      "title_en": "HSBC ? # # [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC ? # # [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-05",
      "search_keyword": "汇丰 渣打 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a72db95000000003301af1a",
      "cover_url": "https://sns-na-i4.xhscdn.com/1040g008323fgrarun20g5q5u6o0mcc270qc3vd8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=0fcae159e33504a17094bbe7258225dc&t=6aaaaec8"
    },
    {
      "id": "xhs-6a1013a7000000003502e6d2",
      "note_id": "6a1013a7000000003502e6d2",
      "title": "做外贸用香港公司和恒生公户",
      "summary": "内地老板怎么注册香港公司来做外贸？香港公司开恒生公户有什么好处？ #香港公司注册  #香港公司开户  #香港外贸公司",
      "title_en": "做外贸用Hong Kong company和Hang Sengcorporate account",
      "summary_en": "内地老板怎么注册Hong Kong company来做外贸? Hong Kong company开Hang Sengcorporate account有什么好处? #Hong Kong company注册 #Hong Kong companyaccount opening #香港外贸公司",
      "author_nickname": "星企航国际商业服务",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 1,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-24",
      "search_keyword": "汇丰 恒生 公司账户",
      "competitors": [
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a1013a7000000003502e6d2",
      "cover_url": "https://sns-na-i4.xhscdn.com/spectrum/1040g34o320fcj28h5c105pancjp0lb67nlmdmgo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=5657b615663105712c098ed3f4d67496&t=6aaaaf03"
    },
    {
      "id": "xhs-6a6aded1000000000e0361b8",
      "note_id": "6a6aded1000000000e0361b8",
      "title": "恒生银行，牛逼！",
      "summary": "汇丰银行旗下恒生银行的打新确实要得，开户存1000港币以上送200港币，中国大陆没有哪家银行敢这样搞",
      "title_en": "Hang Seng银行, 牛逼!",
      "summary_en": "HSBC Hang Seng , account opening 1000 200 [translated from Chinese commercial/XHS post]",
      "author_nickname": "Ho Wan Fung",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 194,
        "comments": 120,
        "collects": 115
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-30",
      "search_keyword": "汇丰 恒生 公司账户",
      "competitors": [
        "汇丰",
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a6aded1000000000e0361b8",
      "cover_url": "https://sns-na-i4.xhscdn.com/1040g2sg32381tv8q7a005q1affs3i021hpvhl6g?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=9ce2d5621d890d546c2e17a65b80e9af&t=6aaaaf03"
    },
    {
      "id": "xhs-6a423b570000000017009be1",
      "note_id": "6a423b570000000017009be1",
      "title": "恒生可以主动关户吗",
      "summary": "主动关户会影响汇丰吗？ 之前去香港，一下子把好几个HK银行都申请了，后面刷到说会影响汇丰，我用的不多，只是在香港玩的时候",
      "title_en": "Hang Seng可以主动关户吗",
      "summary_en": "HSBC ? , HK , HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "冷血市民 Z",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 13,
        "comments": 59,
        "collects": 18
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-06-29",
      "search_keyword": "汇丰 恒生 公司账户",
      "competitors": [
        "汇丰",
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a423b570000000017009be1",
      "cover_url": "https://sns-na-i4.xhscdn.com/1040g2sg3220bsjfo7ukg5p10n9f4idgfobo2nvo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=1fcd49d26d1b681ba64f341462e60fed&t=6aaaaf03"
    },
    {
      "id": "xhs-69f46cc800000000220271b9",
      "note_id": "69f46cc800000000220271b9",
      "title": "汇丰和恒生开卡选哪个？",
      "summary": "原本打算五一过后去一趟开汇丰的，但是现在恒生能线上开卡了，听说恒生不用手续费，汇丰要手续费，除此还有什么区别吗？#银行卡",
      "title_en": "HSBC和Hang Seng开卡选哪个?",
      "summary_en": "HSBC , Hang Seng , Hang Seng , HSBC , ? # [translated from Chinese commercial/XHS post]",
      "author_nickname": "幻宝",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 87,
        "comments": 113,
        "collects": 109
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-01",
      "search_keyword": "汇丰 恒生 公司账户",
      "competitors": [
        "汇丰",
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69f46cc800000000220271b9",
      "cover_url": "https://sns-na-i4.xhscdn.com/notes_pre_post/1040g3k031vkcdd802q005omcahrjht3i1390um0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=0518798062a3c1eb982139274b8cba54&t=6aaaaf03"
    },
    {
      "id": "xhs-69f20db4000000001a02c8f4",
      "note_id": "69f20db4000000001a02c8f4",
      "title": "40min线上丝滑开立汇丰和中银香港账户",
      "summary": "一直想开个香港账户理财，今天来香港顺便办好了。很丝滑，在麦当劳连上wifi就操作好了，两个银行都是20分钟左右，一点没卡",
      "title_en": "40min HSBC BOCHK [translated from Chinese commercial/XHS post]",
      "summary_en": "wifi , 20 [translated from Chinese commercial/XHS post]",
      "author_nickname": "lalaisIand",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2164,
        "comments": 259,
        "collects": 2973
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-04-29",
      "search_keyword": "汇丰 恒生 公司账户",
      "competitors": [
        "汇丰",
        "中银香港"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69f20db4000000001a02c8f4",
      "cover_url": "https://sns-na-i4.xhscdn.com/1040g00831vi1e69hii005n8tlffki5qbplteq28?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=e21adde9281285416ae78edee36bf08c&t=6aaaaf03"
    },
    {
      "id": "xhs-6a432aee000000000f015a35",
      "note_id": "6a432aee000000000f015a35",
      "title": "手贱开汇丰",
      "summary": "我真是手贱，开什么汇丰啊，太难用了",
      "title_en": "手贱开HSBC",
      "summary_en": "HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "曾经沧海",
      "sentiment": "负面",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 161,
        "comments": 124,
        "collects": 113
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-06-30",
      "search_keyword": "汇丰 恒生 公司账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a432aee000000000f015a35",
      "cover_url": "https://sns-na-i4.xhscdn.com/notes_pre_post/1040g3k8322192ecv747g4a6o0vm26h70e464d18?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=da18b00c19c227085b0d3032208a69c4&t=6aaaaf03"
    },
    {
      "id": "xhs-6a65d249000000000503a28c",
      "note_id": "6a65d249000000000503a28c",
      "title": "求助港硕银行卡办理",
      "summary": "问问各位uu是办理中银的还是汇丰之类的 有什么区别捏 以及办信用卡还是储蓄卡🤔 感谢家人们[皱眉R][皱眉R][皱眉R",
      "title_en": "HSBC Hong Kong commercial banking discussion",
      "summary_en": "uu BOCHK HSBC 🤔 [ R][ R][ R [translated from Chinese commercial/XHS post]",
      "author_nickname": "随橙想呢",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 329,
        "comments": 30,
        "collects": 354
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-26",
      "search_keyword": "汇丰 恒生 公司账户",
      "competitors": [
        "汇丰",
        "中银香港"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a65d249000000000503a28c",
      "cover_url": "https://sns-na-i4.xhscdn.com/1040g008323344bje7u3g5p6f96aap7f63f0bfcg?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=fc4fc2eaff60dcf6bc19c05633852778&t=6aaaaf03"
    },
    {
      "id": "xhs-6a1c0a2b00000000380234d4",
      "note_id": "6a1c0a2b00000000380234d4",
      "title": "汇丰Pulse信用卡申请注意事项和细节",
      "summary": "汇丰Pulse信用卡申请注意事项和细节",
      "title_en": "HSBCPulse [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBCPulse [translated from Chinese commercial/XHS post]",
      "author_nickname": "xuan",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 131,
        "comments": 25,
        "collects": 283
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-31",
      "search_keyword": "汇丰 恒生 公司账户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a1c0a2b00000000380234d4",
      "cover_url": "https://sns-na-i4.xhscdn.com/1040g2sg320r1too5mee04a6qm9sa573of9llqg8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=59208fc37ae6672b171431b69d557952&t=6aaaaf03"
    },
    {
      "id": "xhs-6aaa6288000000000b00275e",
      "note_id": "6aaa6288000000000b00275e",
      "title": "我的香港银行卡：常用四家体验",
      "summary": "这四家银行，我都亲自开过账户，现在也主要使用它们：中银香港、汇丰、恒生和众安。 用了一段时间再回头看，开户只是开始。手机",
      "title_en": ": experience [translated from Chinese commercial/XHS post]",
      "summary_en": ": BOCHK, HSBC, Hang Seng . , account opening [translated from Chinese commercial/XHS post]",
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
        "collects": 15
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-16",
      "search_keyword": "汇丰 恒生 公司账户",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aaa6288000000000b00275e",
      "cover_url": "https://sns-na-i4.xhscdn.com/spectrum/1040g0k032562nj8k4c005ql6cv0ks600vr61im0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=70899060f8a3d14efcda8a4f66fd4748&t=6aaaaf03"
    },
    {
      "id": "xhs-6a4ddc890000000022014acc",
      "note_id": "6a4ddc890000000022014acc",
      "title": "汇丰恒生惊喜联动",
      "summary": "又又又又关户啦[笑哭R] 自从去年12月恒生被检视，还抱有侥幸心理我的汇丰可以幸存。因为本身在港有工作有消费，又是发薪户",
      "title_en": "HSBCHang Seng惊喜联动",
      "summary_en": "[ R] 12 Hang Seng , HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "Lucian刘",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 29,
        "comments": 40,
        "collects": 17
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-08",
      "search_keyword": "汇丰 恒生 公司账户",
      "competitors": [
        "汇丰",
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a4ddc890000000022014acc",
      "cover_url": "https://sns-na-i4.xhscdn.com/1040g008322bn59i5na305q1dt38ji1c6pcjvbb8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=356a61e711fb750642155cfd222f6418&t=6aaaaf03"
    },
    {
      "id": "xhs-6a8ce7d40000000011011763",
      "note_id": "6a8ce7d40000000011011763",
      "title": "8.17 一天办完三张卡～",
      "summary": "深圳出差顺便去香港开卡了 8.17入港 一次性办了汇丰 ZA 恒生三张卡 本来想线下的 但是去的太晚 不是银行太关门就是",
      "title_en": "8.17 一天办完三张卡～",
      "summary_en": "8.17 HSBC ZA Hang Seng [translated from Chinese commercial/XHS post]",
      "author_nickname": "Boffet",
      "sentiment": "负面",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 89,
        "comments": 116,
        "collects": 71
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-25",
      "search_keyword": "汇丰 恒生 公司账户",
      "competitors": [
        "汇丰",
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a8ce7d40000000011011763",
      "cover_url": "https://sns-na-i4.xhscdn.com/1040g00832499d63h0s505o13thqgbluhig5t8e8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=8b336d45c9be1381fe44bccb07277f4f&t=6aaaaf03"
    },
    {
      "id": "xhs-6a4c82f8000000001503c8d4",
      "note_id": "6a4c82f8000000001503c8d4",
      "title": "渣打香港开户体验｜适合哪类人去开？",
      "summary": "渣打银行在香港也是老牌子了，但比起汇丰和中银，它的定位略有不同。今天聊聊渣打适合什么人开。 渣打的特点 国际化程度高，和",
      "title_en": "Standard Chartered香港account openingexperience｜适合哪类人去开?",
      "summary_en": "Standard Chartered , HSBC BOCHK, . Standard Chartered . Standard Chartered [translated from Chinese commercial/XHS post]",
      "author_nickname": "企业出海通",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 1,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-07",
      "search_keyword": "渣打 香港 公司户",
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
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a4c82f8000000001503c8d4",
      "cover_url": "https://sns-na-i4.xhscdn.com/1040g008322ad7c7pne605q49pcka2ejnictmgg0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=9fd8188485f446459f6c0c8ec59d6e55&t=6aaaaf0b"
    },
    {
      "id": "xhs-69d8b088000000002200ddc8",
      "note_id": "69d8b088000000002200ddc8",
      "title": "蹲一个能开香港对公账户的经理 渣打中信汇丰东亚中信花旗恒生富邦众安…",
      "summary": "蹲一个能开香港对公账户的经理 渣打中信汇丰东亚中信花旗恒生富邦众安",
      "title_en": "Standard Chartered HSBC Hang Seng [translated from Chinese commercial/XHS post]",
      "summary_en": "Standard Chartered HSBC Hang Seng [translated from Chinese commercial/XHS post]",
      "author_nickname": "华zz",
      "sentiment": "中性",
      "themes": [
        "客户经理"
      ],
      "category": "客户经理",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 25,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-04-10",
      "search_keyword": "渣打 香港 公司户",
      "competitors": [
        "汇丰",
        "渣打",
        "恒生",
        "东亚",
        "虚拟银行"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69d8b088000000002200ddc8",
      "cover_url": "https://sns-na-i4.xhscdn.com/notes_pre_post/1040g3k831up987v0340g5p2k6h3aad1df04u72o?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=4cdfa3c9f88b45945f928134a3a567c6&t=6aaaaf0b"
    },
    {
      "id": "xhs-6a609a1a000000001c00c0b5",
      "note_id": "6a609a1a000000001c00c0b5",
      "title": "香港公司对公开户难吗？哪家最适合你？",
      "summary": "收藏！香港公司开户 9 家银行全解析📊 一篇搞懂哪家最适合你～ 🏦 热门盘点 ✨ 汇丰 / 恒生 知名度高，国际认可",
      "title_en": "Hong Kong company对公account opening难吗? 哪家最适合你?",
      "summary_en": "! Hong Kong companyaccount opening 9 📊 ～ 🏦 ✨ HSBC / Hang Seng [translated from Chinese commercial/XHS post]",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-22",
      "search_keyword": "渣打 香港 公司户",
      "competitors": [
        "汇丰",
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a609a1a000000001c00c0b5",
      "cover_url": "https://sns-na-i4.xhscdn.com/spectrum/1040g34o322u0gg8sn2105qftfj3g8t00t7aibho?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=0f5d25f00c2a8c83cbfeaf0d31c1b28b&t=6aaaaf0b"
    },
    {
      "id": "xhs-69c4fa29000000001a032879",
      "note_id": "69c4fa29000000001a032879",
      "title": "香港各大银🏦行公司账户对比！",
      "summary": "汇丰🏦 ✨ 全球认可度高，客户信赖 📄 K户资料简单，可收付信用证 📍 北上广深杭等地分行可面签 💰 管理费",
      "title_en": "🏦 ! [translated from Chinese commercial/XHS post]",
      "summary_en": "HSBC🏦 ✨ , 📄 K , letter of credit 📍 💰 [translated from Chinese commercial/XHS post]",
      "author_nickname": "XR鑫瑞咨询",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 5,
        "comments": 0,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-03-26",
      "search_keyword": "渣打 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69c4fa29000000001a032879",
      "cover_url": "https://sns-na-i4.xhscdn.com/spectrum/1040g34o31u61o95d1u0g5od8jbj40sc44av5tlg?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=5138da34c5824805f7870e669782ddc1&t=6aaaaf0b"
    },
    {
      "id": "xhs-6aa7b0a3000000002b026cd5",
      "note_id": "6aa7b0a3000000002b026cd5",
      "title": "#渣打香港 #香港银行公户",
      "summary": "#渣打香港  #香港银行公户",
      "title_en": "#Standard Chartered香港 #香港银行corporate account",
      "summary_en": "#Standard Chartered香港 #香港银行corporate account",
      "author_nickname": "Momo",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 15,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-09-14",
      "search_keyword": "渣打 香港 公司户",
      "competitors": [
        "渣打"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6aa7b0a3000000002b026cd5",
      "cover_url": "https://sns-na-i4.xhscdn.com/notes_pre_post/1040g3k83253eg0fujo705pjjgn4hon2tepap5g8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=34b56420ca2978d0c0d411bde3946a73&t=6aaaaf0b"
    },
    {
      "id": "xhs-6a5894f00000000011010449",
      "note_id": "6a5894f00000000011010449",
      "title": "中银香港开公户体验不错",
      "summary": "开之前各种说开公户很难，却原来又是中介制造焦虑。 全程 diy 搞定，中间还有中银工作人员微信指导，一周不到下户",
      "title_en": "BOCHK开corporate accountexperience不错",
      "summary_en": "corporate account , intermediary . diy , BOCHK [translated from Chinese commercial/XHS post]",
      "author_nickname": "轻舟已过万重山",
      "sentiment": "负面",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 4,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-16",
      "search_keyword": "中银香港 公司户",
      "competitors": [
        "中银香港"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a5894f00000000011010449",
      "cover_url": "https://sns-na-i11.xhscdn.com/notes_pre_post/1040g3k0322m6ca70n0005nb7dao0823p7ped8g8?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=660c916b6cf40284056f240f3f41cecc&t=6aaaaf15"
    },
    {
      "id": "xhs-6a1394c6000000003700ff09",
      "note_id": "6a1394c6000000003700ff09",
      "title": "零中介费｜中银香港公户DIY上岸",
      "summary": "真心佩服自己，全程独自搞定中银香港公司账户啦✅ 优才获批后考虑续签，需要香港纳税、强积金，决定注册香港公司自主创业",
      "title_en": "零intermediary费｜BOCHKcorporate accountDIY上岸",
      "summary_en": "BOCHKHong Kong company ✅ , , , Hong Kong company [translated from Chinese commercial/XHS post]",
      "author_nickname": "HK续签易",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 5,
        "comments": 0,
        "collects": 7
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-25",
      "search_keyword": "中银香港 公司户",
      "competitors": [
        "中银香港"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a1394c6000000003700ff09",
      "cover_url": "https://sns-na-i11.xhscdn.com/1040g2sg320ips3hc68i05ppv7v87dh9em85bcg0?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=20d8d04f252cb43ce746183972e881d9&t=6aaaaf15"
    },
    {
      "id": "xhs-6a9044850000000025018de3",
      "note_id": "6a9044850000000025018de3",
      "title": "DIY 香港高才中银开公户，💰0真香",
      "summary": "我来做好人了，这个高才优才优惠码是藏在中银香港官网边边一个忽隐忽现的侧栏里的，真是服了🤦‍♂️在此分享给大家，给我点赞",
      "title_en": "DIY 香港高才BOCHK开corporate account, 💰0真香",
      "summary_en": "BOCHK , 🤦‍♂️ [translated from Chinese commercial/XHS post]",
      "author_nickname": "璐飞的日记",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 9,
        "comments": 3,
        "collects": 8
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-27",
      "search_keyword": "中银香港 公司户",
      "competitors": [
        "中银香港"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a9044850000000025018de3",
      "cover_url": "https://sns-na-i11.xhscdn.com/notes_pre_post/1040g3k0324ci89odnk005oc7nnrgkvf22drahd0?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=b17a7866d3a4cb4364806abad857f74b&t=6aaaaf15"
    },
    {
      "id": "xhs-6a043374000000000702c077",
      "note_id": "6a043374000000000702c077",
      "title": "内地人香港DIY开公司户✨4个月终上岸",
      "summary": "谁懂啊家人们！内地身份｜香港新公司｜DIY中银香港公户 今年我帮内地亲属开香港公司公户，耗时整整4个月‼️ 没找代理全自",
      "title_en": "DIYopen a corporate account✨4 [translated from Chinese commercial/XHS post]",
      "summary_en": "! ｜ ｜DIYBOCHKcorporate account Hong Kong companycorporate account, 4 ‼️ [translated from Chinese commercial/XHS post]",
      "author_nickname": "张's",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 17,
        "comments": 8,
        "collects": 17
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-13",
      "search_keyword": "中银香港 公司户",
      "competitors": [
        "中银香港"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a043374000000000702c077",
      "cover_url": "https://sns-na-i11.xhscdn.com/notes_pre_post/1040g3k03203pgc96iq6g4buo73o0tc36n0rkdr0?imageView2/2/w/608/format/heif/q/56|imageMogr2/strip&redImage/frame/0/enhance/4&ap=5&sc=SRH_PRV&sign=eda5fb7f968681f0c732658d51a597d8&t=6aaaaf15"
    },
    {
      "id": "xhs-6a61bf62000000000e0346a5",
      "note_id": "6a61bf62000000000e0346a5",
      "title": "🇭🇰跨境电商人速看！恒生银行放大招了！！",
      "summary": "做跨境的姐妹兄弟应该都懂 在香港开公司户到底有多难😭 没有内地关联公司👉被拒 业务刚起步没流水👉被拒 资料准备不齐",
      "title_en": "🇭🇰 ! Hang Seng ! ! [translated from Chinese commercial/XHS post]",
      "summary_en": "open a corporate account 😭 👉 👉 [translated from Chinese commercial/XHS post]",
      "author_nickname": "香港公司注册",
      "sentiment": "负面",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 0,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-23",
      "search_keyword": "恒生 公司账户",
      "competitors": [
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false,
      "noise_flag": "中介推广",
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a61bf62000000000e0346a5",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k8322v4pgir7k705nm3lb6gbvaep2nogdo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=f83285d477528ace683e4ac454ec11a8&t=6aaaaf19"
    },
    {
      "id": "xhs-6a742a050000000006004b84",
      "note_id": "6a742a050000000006004b84",
      "title": "香港公司｜恒生对公账户办理资料",
      "summary": "香港公司｜恒生银行对公账户办理资料📑 不少做跨境、外贸的老板想办理香港公司恒生对公账户，不清楚要准备什么材料，把实用信",
      "title_en": "Hong Kong company｜Hang Seng对公账户办理资料",
      "summary_en": "Hong Kong company｜Hang Seng 📑 , Hong Kong companyHang Seng , documents [translated from Chinese commercial/XHS post]",
      "author_nickname": "君林天下商wu",
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
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-06",
      "search_keyword": "恒生 公司账户",
      "competitors": [
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a742a050000000006004b84",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k0323h4a120ga005onchsrnqhudf87fdko?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=57a2f96192d85ad726378f5f181a23dd&t=6aaaaf19"
    },
    {
      "id": "xhs-6a3b9765000000000701259a",
      "note_id": "6a3b9765000000000701259a",
      "title": "想开恒生银行对公户？这份清单收好！",
      "summary": "📢恒生银行因资金灵活、全球网点多，成为跨境卖家热门选择。我们团队整理最新实操要点，帮你高效开户✨ ✅恒生开户核心优势",
      "title_en": "想开Hang Seng银行对corporate account? 这份checklist收好!",
      "summary_en": "📢Hang Seng , , . , account opening✨ ✅Hang Sengaccount opening [translated from Chinese commercial/XHS post]",
      "author_nickname": "金中商务",
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
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-06-24",
      "search_keyword": "恒生 公司账户",
      "competitors": [
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a3b9765000000000701259a",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k0321psdvou7udg5p4qiocpem5d3fsvja8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=7e08479ed7ac38b52fdff07d84226a2c&t=6aaaaf19"
    },
    {
      "id": "xhs-6a6881fe000000001d020784",
      "note_id": "6a6881fe000000001d020784",
      "title": "香港公司商业户，为什么推荐汇丰和恒生",
      "summary": "#香港公司账户  #香港公司  #香港汇丰  #香港公司注册流程  #香港恒生",
      "title_en": "Hong Kong company商业户, 为什么recommendHSBC和Hang Seng",
      "summary_en": "#Hong Kong company账户 #Hong Kong company #香港HSBC #Hong Kong company注册流程 #香港Hang Seng",
      "author_nickname": "海莉说跨境（企财盈）",
      "sentiment": "正面",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 0,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-30",
      "search_keyword": "恒生 公司账户",
      "competitors": [
        "汇丰",
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a6881fe000000001d020784",
      "cover_url": "https://sns-na-i1.xhscdn.com/spectrum/1040g0k03235o1ch9mu005q56kdsmbd7j0ghttc8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=cca144828c6dfe4e75427e30d54ac00e&t=6aaaaf19"
    },
    {
      "id": "xhs-6a7006530000000025004448",
      "note_id": "6a7006530000000025004448",
      "title": "四大香港银行公司账户费用明细对照",
      "summary": "整理汇丰、恒生、大新、东亚四家主流港司账户各项成本、门槛、时效、难度，按需挑选适配自己外贸收款的银行👇 🏦汇丰银行",
      "title_en": "HSBC Hong Kong commercial banking discussion",
      "summary_en": "HSBC, Hang Seng, , , threshold, turnaround time, , 👇 🏦HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "香港海外财税小杨 ✔Kate",
      "sentiment": "负面",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-14",
      "search_keyword": "恒生 公司账户",
      "competitors": [
        "汇丰",
        "恒生",
        "东亚",
        "大新"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a7006530000000025004448",
      "cover_url": "https://sns-na-i1.xhscdn.com/spectrum/1040g0k0323d2v2vgn4005qdopv7d3fqt0fih8do?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=9e26963bd0a0aeb83313eac9a9faa551&t=6aaaaf19"
    },
    {
      "id": "xhs-6a0e7faf000000000802796a",
      "note_id": "6a0e7faf000000000802796a",
      "title": "恒生银行（中国）",
      "summary": "今天来开立恒生中国优越理财账户，流程简单没有过多废话，比汇丰和谐多了，现场开户也给个信封也有密码涵，感觉都是落后的操作",
      "title_en": "Hang Seng银行(中国)",
      "summary_en": "Hang Seng , , HSBC , account opening [translated from Chinese commercial/XHS post]",
      "author_nickname": "BFD04",
      "sentiment": "中性",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 95,
        "comments": 59,
        "collects": 39
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-21",
      "search_keyword": "恒生 公司账户",
      "competitors": [
        "汇丰",
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a0e7faf000000000802796a",
      "cover_url": "https://sns-na-i1.xhscdn.com/1040g2sg320dr2m236f3g5ps8sf0i371lgbn10p8?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=01f345bf1ad4bbc00abcaa288c805525&t=6aaaaf19"
    },
    {
      "id": "xhs-6a461be30000000011017c13",
      "note_id": "6a461be30000000011017c13",
      "title": "Etsy 香港店可以绑定第三方银行账户吗？",
      "summary": "香港 Etsy 真人店除了香港本地银行（汇丰、恒生、中银香港、渣打等）之外，也有不少卖家使用第三方跨境收款账户，例如：W",
      "title_en": "Etsy ? [translated from Chinese commercial/XHS post]",
      "summary_en": "Etsy (HSBC, Hang Seng, BOCHK, Standard Chartered ) , cross-border collections , : W [translated from Chinese commercial/XHS post]",
      "author_nickname": "Paradise",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 8,
        "comments": 2,
        "collects": 5
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-07-02",
      "search_keyword": "恒生 公司账户",
      "competitors": [
        "汇丰",
        "渣打",
        "中银香港",
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a461be30000000011017c13",
      "cover_url": "https://sns-na-i1.xhscdn.com/spectrum/1040g34o32244tofrms105ng0mpsg94baggqoga0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=0e27c14c7cb8e3dc214f46a3abb3ad42&t=6aaaaf19"
    },
    {
      "id": "xhs-6a0ac5900000000035031ca0",
      "note_id": "6a0ac5900000000035031ca0",
      "title": "iang自雇续签中期花费",
      "summary": "[清单R]秘书公司把开对公户的恒生银行约到了尖沙咀分行，特别方便，离汉口中心五百米（P2）走过去不到十分钟，路过一个很可",
      "title_en": "iang自雇续签中期花费",
      "summary_en": "[checklistR] corporate account Hang Seng , , (P2) [translated from Chinese commercial/XHS post]",
      "author_nickname": "Patty的雙城記",
      "sentiment": "正面",
      "themes": [
        "竞品对比"
      ],
      "category": "竞品对比",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 62,
        "comments": 28,
        "collects": 74
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-05-18",
      "search_keyword": "恒生 公司账户",
      "competitors": [
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a0ac5900000000035031ca0",
      "cover_url": "https://sns-na-i1.xhscdn.com/notes_pre_post/1040g3k8320a5bjv55ia05op2lj28vt7m682kjoo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=73653d3b237f045e3da7577e447d95f8&t=6aaaaf19"
    },
    {
      "id": "xhs-6a82b312000000002402dede",
      "note_id": "6a82b312000000002402dede",
      "title": "香港公司开户银行怎么选？一篇讲透不踩坑",
      "summary": "注册了香港公司，却在选银行这步卡住了？汇丰、渣打、中银还是虚拟银行？每家门槛、费用、适合人群各不相同，选错很可能白白耗费",
      "title_en": "Hong Kong companyaccount opening ? [translated from Chinese commercial/XHS post]",
      "summary_en": "Hong Kong company, ? HSBC, Standard Chartered, BOCHK virtual bank? threshold [translated from Chinese commercial/XHS post]",
      "author_nickname": "佳华丰财税娟姐",
      "sentiment": "负面",
      "themes": [
        "费用门槛"
      ],
      "category": "费用门槛",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 0,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "xhs_public",
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-08-17",
      "search_keyword": "虚拟银行 公司户 香港",
      "competitors": [
        "汇丰",
        "渣打",
        "中银香港",
        "虚拟银行"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/6a82b312000000002402dede",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g34o324l6tjb80m105qasdgvqqjusrpv21u0?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=39ab458862d6dc6d7334af3915fe03c9&t=6aaaaf21"
    },
    {
      "id": "xhs-69ce091300000000230103fe",
      "note_id": "69ce091300000000230103fe",
      "title": "香港公司注册后银行开户如何选择",
      "summary": "整理了一份最新银行避坑 + 选型指南，赶紧码住！👇 🏦 四大类银行深度测评，选对不踩雷 1️⃣ 🌏 国际大行（汇丰",
      "title_en": "Hong Kong company注册后银行account opening如何选择",
      "summary_en": "+ , ! 👇 🏦 , pitfall 1️⃣ 🌏 (HSBC [translated from Chinese commercial/XHS post]",
      "author_nickname": "🚢宝艾东｜企业出海顾问",
      "sentiment": "负面",
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
      "source_label": "小红书",
      "source_label_en": "Xiaohongshu",
      "published_at": "2026-04-02",
      "search_keyword": "虚拟银行 公司户 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false,
      "source_channel": "ugc",
      "credibility": "medium",
      "url": "https://www.xiaohongshu.com/explore/69ce091300000000230103fe",
      "cover_url": "https://sns-na-i2.xhscdn.com/spectrum/1040g34o31uesncj81u0g5q83bfuttmg2c39l7mo?imageView2/2/w/576/format/webp/q/87%7CimageMogr2/strip&redImage/frame/0&ap=5&sc=SRH_PRV&sign=3de146a329ef23c5376731702fe073f4&t=6aaaaf21"
    }
  ],
  "hub_analysis": {
    "exec_summary_zh": "本套件基于小红书公开商业相关样本 254 条（中介约 29 条、11.4%）。净情感 -5.7pp（正 11.6% / 负 17.3% / 中 71.1%）。主题以「开户体验」为主；竞品侧见 恒生 29次、中银香港 16次、渣打 13次。头条风险：开户材料与预约不透明拉长旅程并易成负面口碑；机会：专属客户经理「全程跟进」正面反馈可标准化为服务话术。",
    "exec_summary_en": "This suite is grounded in 254 Xiaohongshu commercial-related posts (intermediary ~29, 11.4%). Net sentiment -5.7pp (pos 11.6% / neg 17.3% / neu 71.1%). Themes led by “Account opening 144”; competitors: Hang Seng 29, BOCHK 16, StanChart 13. Headline risk: Opaque opening documents & booking stretch the journey into negative WOM. Opportunity: Dedicated RM “end-to-end follow-through” praise can be packaged as standard service copy.",
    "overview_zh": "全量可见样本 254 条中，情感结构为正面 29、负面 44、中性 181。主题分布：开户体验 144条（56.7%）、贸易融资外汇 44条（17.3%）、竞品对比 44条（17.3%）、客户经理 12条（4.7%）。中介/企服占比 11.4%，未过滤会抬高中性、稀释真实客户声音。竞品提及：恒生 29次、中银香港 16次、渣打 13次。综合判断：开户旅程可预期性与费用沟通仍是管理层优先议题；同时应用正例服务故事对冲负面叙事。",
    "overview_en": "Across 254 visible posts: positive 29, negative 44, neutral 181. Theme mix: Account opening 144 (56.7%); Trade finance / FX 44 (17.3%); Competitor compare 44 (17.3%); Relationship manager 12 (4.7%). Intermediary/B2B promo share is 11.4% — unfiltered it inflates neutral and dilutes real customer voice. Competitor mentions: Hang Seng 29, BOCHK 16, StanChart 13. Overall: opening-journey predictability and fee communication remain management priorities; pair that with positive service stories to counter negative narratives.",
    "symptom_zh": "客户与帖子主要信号：开户体验相关 144 条、费用门槛 8 条、客户经理 12 条、数字银行 2 条。负面占比 17.3%，常见表述围绕材料不清、预约难、审批慢、门槛劝退；中介推广约占 11.4%，与真实声音混杂。",
    "symptom_en": "Main signals: account-opening 144, fees/thresholds 8, RM 12, digital banking 2. Negative share 17.3%, often about unclear documents, hard booking, slow approval, deterrent thresholds; intermediary promo ~11.4% mixed into the feed.",
    "diagnosis_zh": "根因阅读：开户前信息（材料清单/时效）不透明 → 不确定性转化为负面口碑；费用与资产门槛沟通不足 → 中小企对比竞品（恒生 29次、中银香港 16次、渣打 13次）；客户经理交接连续性缺口放大高触点（跨境/外汇）不信任；中介内容抢占「汇丰公司户」词场，干扰情绪与 SOV 判断。",
    "diagnosis_en": "Root-cause read: opaque pre-opening information (document list / timelines) turns uncertainty into WOM risk; weak fee/asset-threshold messaging pushes SMEs to competitors (Hang Seng 29, BOCHK 16, StanChart 13); RM handover gaps hurt trust on high-touch cross-border/FX moments; intermediary content crowds “HSBC corporate account” terms and skews sentiment/SOV.",
    "treatment_zh": "建议处置：①对外发布「材料清单+预计时效」一页纸；②建立客户经理交接 SLA 与开户后 30–90 天跟进模板；③分层说清月费/TRB/适用客群，减少一刀切劝退；④看板默认保留中介监测但汇报以清洗后 KPI 为准；⑤用真实开户/RM 正例内容回收解释权。",
    "treatment_en": "Actions: (1) publish a documents + expected-timeline one-pager; (2) stand up RM handover SLA and 30–90 day post-opening touch templates; (3) tier monthly fee/TRB/fit-segment messaging to cut one-size deterrence; (4) keep intermediary monitoring on by default but report cleaned KPIs; (5) reclaim narrative with real opening/RM positive cases.",
    "followup_zh": "随访指标：净情感与负面开户帖周环比；中介占比是否回落；竞品（恒生 29次、中银香港 16次、渣打 13次）公司户相关 SOV；一页纸上线后「材料/预约」负面词是否下降；客户经理连续性投诉是否减少。",
    "followup_en": "Watch: week-on-week net sentiment & negative opening posts; intermediary share; competitor corporate-account SOV (Hang Seng 29, BOCHK 16, StanChart 13); drop in “documents/booking” negatives after the one-pager; fewer RM continuity complaints.",
    "stats": {
      "n": 254,
      "pos": 29,
      "neg": 44,
      "neu": 181,
      "intermediary": 29,
      "intermediary_pct": 11.4,
      "top_categories": [
        [
          "开户体验",
          144
        ],
        [
          "贸易融资外汇",
          44
        ],
        [
          "竞品对比",
          44
        ],
        [
          "客户经理",
          12
        ]
      ],
      "top_competitors": [
        [
          "恒生",
          29
        ],
        [
          "中银香港",
          16
        ],
        [
          "渣打",
          13
        ]
      ],
      "net_sentiment": -5.7
    }
  }
};
