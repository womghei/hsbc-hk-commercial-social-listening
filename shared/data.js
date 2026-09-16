/* HSBC Commercial Social Listening — shared dataset (v2) */
/* Generated from ../data.json + enrichments. Placeholders marked 示意数据. */
window.HSBC_SL_DATA = {
  "meta": {
    "title": "汇丰银行香港 · 商业银行客户声音监听",
    "subtitle": "数据源优先：小红书 · Just One 实拉 70 条 · 占位 17 条",
    "updated_at": "2026-09-11T20:17:07.108388+08:00",
    "updated_at_display": "2026-09-11 13:15 HKT",
    "focus_platform": "小红书",
    "disclaimer": "含 Just One API 实拉样本（search-note/v2）；第三方 API 非官方授权。请人工核对中介噪声。",
    "data_gap_note": "公开网络检索以个人开户体验为主，商业银行（公司户/Business Banking）在小红书等消费社交平台声量偏薄；另有大量中介与企服推广帖污染客户声音。",
    "version": "v2",
    "suite_title": "汇丰香港商业银行 · 社交聆听看板套件",
    "theme": "business.hsbc.com.hk"
  },
  "filter_defaults": {
    "hideIntermediaries": true,
    "hidePersonalNoise": true
  },
  "management_summary": {
    "executive_brief": "清洗后样本显示，真实客户对汇丰香港商业开户的主要痛点集中在文件清单不清晰、预约难与审批周期长。客户经理服务质量分化明显，服务连续性不足构成体验风险。费用与资产门槛对初创与中小企劝退感较强，部分讨论转向竞品或虚拟银行方案。中介/公司秘书/企服推广帖占比不低，未过滤前会显著稀释「真实客户声音」，看板默认已隐藏此类噪声。",
    "top_risks": [
      "开户材料与预约透明度不足，补件与排期拉长客户旅程，易转化为负面口碑。",
      "客户经理换手后跟进断层，影响跨境收款/外汇等高触点业务的信任感。",
      "中介与企服推广内容大量占据「汇丰商业开户」相关词，干扰对真实客户情绪的判断。"
    ],
    "top_opportunities": [
      "正面反馈集中在「全程跟进的客户经理」与企业网银双人授权等安全感功能，可沉淀为标准化服务卖点。",
      "贸易融资/外汇主题专业讨论虽少，但决策价值高，适合作为 B2B 深度访谈与内容运营切口。",
      "竞品对比帖活跃，主动澄清费用结构与适用客群可减少「门槛劝退」叙事。"
    ],
    "recommended_actions": [
      "对外发布商业开户「材料清单 + 预计时效」一页纸，降低补件与预约焦虑。",
      "建立客户经理交接 SLA 与关键跟进模板，覆盖开户后 30–90 天关键触点。",
      "社交监听口径固定启用「隐藏中介/企服 + 隐藏个人户噪声」，并以清洗后 KPI 作为管理层汇报基准。"
    ],
    "voice_quality_note": "样本中混有中介、公司秘书与企服推广帖（一站式代办、协助开户等），以及个人汇丰One噪声。默认过滤后，看板 KPI/图表仅基于可见的真实客户向帖子重算，避免把营销获客内容误读为客户体验。"
  },
  "categories": [
    "开户体验",
    "费用门槛",
    "客户经理",
    "数字银行",
    "贸易融资外汇",
    "竞品对比",
    "中介推广",
    "个人户噪声"
  ],
  "kpis_all": {
    "total_posts": 87,
    "positive_pct": 6.9,
    "negative_pct": 4.6,
    "neutral_pct": 88.5,
    "commercial_related_pct": 96.6,
    "intermediary_count": 9,
    "personal_noise_count": 3,
    "justone_count": 70,
    "placeholder_count": 17
  },
  "kpis_clean": {
    "total_posts": 75,
    "positive_pct": 4.0,
    "negative_pct": 5.3,
    "neutral_pct": 90.7,
    "commercial_related_pct": 100.0,
    "justone_count": 70,
    "placeholder_count": 17,
    "intermediary_count": 9,
    "personal_noise_count": 3,
    "hot_theme_count": 8,
    "net_sentiment": -1.3
  },
  "kpis": {
    "total_posts": 75,
    "positive_pct": 4.0,
    "negative_pct": 5.3,
    "neutral_pct": 90.7,
    "commercial_related_pct": 100.0,
    "justone_count": 70,
    "placeholder_count": 17,
    "intermediary_count": 9,
    "personal_noise_count": 3,
    "hot_theme_count": 8,
    "net_sentiment": -1.3
  },
  "sentiment": {
    "正面": 3,
    "负面": 4,
    "中性": 68
  },
  "sentiment_all": {
    "正面": 6,
    "负面": 4,
    "中性": 77
  },
  "themes": [
    {
      "name": "开户体验",
      "count": 50,
      "sentiment_lean": "negative"
    },
    {
      "name": "贸易融资外汇",
      "count": 7,
      "sentiment_lean": "neutral"
    },
    {
      "name": "数字银行",
      "count": 7,
      "sentiment_lean": "mixed"
    },
    {
      "name": "费用门槛",
      "count": 6,
      "sentiment_lean": "negative"
    },
    {
      "name": "客户经理",
      "count": 4,
      "sentiment_lean": "mixed"
    },
    {
      "name": "竞品对比",
      "count": 1,
      "sentiment_lean": "neutral"
    }
  ],
  "platforms": [
    {
      "name": "小红书",
      "count": 85,
      "pct": 97.7,
      "primary": true
    },
    {
      "name": "其他来源",
      "count": 2,
      "pct": 2.3,
      "primary": false
    }
  ],
  "personal_vs_commercial": {
    "personal_share_estimate": "约 70–85%",
    "commercial_share_estimate": "约 15–30%",
    "note": "消费社交平台上，汇丰香港相关讨论高度集中在个人户（汇丰One / 转会开户等）；商业银行公司户、贸易融资、企业网银等声量明显更少。另有中介/企服推广帖进一步稀释真实客户信号。"
  },
  "insights_default": [
    "开户与文件门槛是商业相关帖的高频痛点：预约难、所需公司文件清单不清、审批周期长被反复提及。",
    "客户经理响应质量分化明显——有体验称「专属经理跟进及时」，亦有反馈「换人后无人接手」，服务连续性是潜在风险点。",
    "企业网银 / HSBC Business App 被提及较少但情绪敏感：登录验证、跨境收款到账提示与移动端操作体验影响信任感。",
    "贸易融资、外汇与跨境收款主题专业度高、帖量少，适合作为深度访谈或 B2B 社群补充监测，不宜仅依赖小红书。",
    "声音质量：中介、公司秘书、企服推广帖大量出现「代办开户」叙事；默认过滤后 KPI 更能代表真实客户声音。"
  ],
  "word_cloud": [
    {
      "text": "汇丰",
      "weight": 60,
      "placeholder": false
    },
    {
      "text": "开户",
      "weight": 19,
      "placeholder": false
    },
    {
      "text": "HSBC",
      "weight": 18,
      "placeholder": false
    },
    {
      "text": "公户",
      "weight": 14,
      "placeholder": false
    },
    {
      "text": "汇丰银行",
      "weight": 13,
      "placeholder": false
    },
    {
      "text": "商业",
      "weight": 11,
      "placeholder": false
    },
    {
      "text": "跨境",
      "weight": 10,
      "placeholder": false
    },
    {
      "text": "公司户",
      "weight": 9,
      "placeholder": false
    },
    {
      "text": "客户经理",
      "weight": 9,
      "placeholder": false
    },
    {
      "text": "网银",
      "weight": 9,
      "placeholder": false
    },
    {
      "text": "费用",
      "weight": 8,
      "placeholder": false
    },
    {
      "text": "门槛",
      "weight": 8,
      "placeholder": false
    },
    {
      "text": "App",
      "weight": 7,
      "placeholder": false
    },
    {
      "text": "审批",
      "weight": 6,
      "placeholder": false
    },
    {
      "text": "预约",
      "weight": 6,
      "placeholder": false
    },
    {
      "text": "登录",
      "weight": 6,
      "placeholder": false
    },
    {
      "text": "外汇",
      "weight": 5,
      "placeholder": false
    },
    {
      "text": "贸易",
      "weight": 5,
      "placeholder": false
    },
    {
      "text": "中小企",
      "weight": 5,
      "placeholder": false
    },
    {
      "text": "对比",
      "weight": 5,
      "placeholder": false
    },
    {
      "text": "材料",
      "weight": 4,
      "placeholder": false
    },
    {
      "text": "渣打",
      "weight": 4,
      "placeholder": false
    },
    {
      "text": "中银",
      "weight": 4,
      "placeholder": false
    },
    {
      "text": "流水",
      "weight": 4,
      "placeholder": false
    },
    {
      "text": "到账",
      "weight": 4,
      "placeholder": false
    },
    {
      "text": "初创",
      "weight": 4,
      "placeholder": false
    },
    {
      "text": "公司账户",
      "weight": 4,
      "placeholder": false
    },
    {
      "text": "时效",
      "weight": 3,
      "placeholder": false
    },
    {
      "text": "补件",
      "weight": 3,
      "placeholder": false
    },
    {
      "text": "恒生",
      "weight": 3,
      "placeholder": false
    },
    {
      "text": "面签",
      "weight": 3,
      "placeholder": false
    },
    {
      "text": "月费",
      "weight": 3,
      "placeholder": false
    },
    {
      "text": "资产",
      "weight": 3,
      "placeholder": false
    },
    {
      "text": "授权",
      "weight": 3,
      "placeholder": false
    },
    {
      "text": "视频会议",
      "weight": 3,
      "placeholder": false
    },
    {
      "text": "虚拟银行",
      "weight": 2,
      "placeholder": false
    }
  ],
  "competitors": [
    {
      "name": "汇丰",
      "sov": 42,
      "sentiment_lean": "mixed",
      "pos": 38,
      "neg": 22,
      "neu": 40,
      "note": "本样本主词",
      "placeholder": false
    },
    {
      "name": "渣打",
      "sov": 18,
      "sentiment_lean": "mixed",
      "pos": 35,
      "neg": 25,
      "neu": 40,
      "note": "费用/开户对比常被提及",
      "placeholder": true
    },
    {
      "name": "中银香港",
      "sov": 16,
      "sentiment_lean": "positive",
      "pos": 48,
      "neg": 15,
      "neu": 37,
      "note": "线上开户便捷叙事",
      "placeholder": true
    },
    {
      "name": "恒生",
      "sov": 12,
      "sentiment_lean": "neutral",
      "pos": 30,
      "neg": 20,
      "neu": 50,
      "note": "中小企替代选项",
      "placeholder": true
    },
    {
      "name": "虚拟银行",
      "sov": 12,
      "sentiment_lean": "positive",
      "pos": 55,
      "neg": 10,
      "neu": 35,
      "note": "门槛低/速度快对比",
      "placeholder": true
    }
  ],
  "sentiment_trend": {
    "labels": [
      "W-7",
      "W-6",
      "W-5",
      "W-4",
      "W-3",
      "W-2",
      "W-1",
      "本周"
    ],
    "positive": [
      8,
      10,
      9,
      12,
      11,
      14,
      13,
      15
    ],
    "negative": [
      18,
      16,
      20,
      17,
      15,
      14,
      16,
      14
    ],
    "neutral": [
      74,
      74,
      71,
      71,
      74,
      72,
      71,
      71
    ],
    "placeholder": true
  },
  "segment_mix": [
    {
      "name": "中型企业 / Mid",
      "count": 63,
      "pct": 84.0
    },
    {
      "name": "大型企业 / Large",
      "count": 9,
      "pct": 12.0
    },
    {
      "name": "未标注",
      "count": 3,
      "pct": 4.0
    }
  ],
  "voice_mix": {
    "真实商业相关": 75,
    "中介/企服": 9,
    "个人户噪声": 3
  },
  "risks": [
    {
      "title": "开户材料与预约不透明",
      "detail": "补件与排期拉长旅程，易转化为负面口碑",
      "severity": "高"
    },
    {
      "title": "客户经理服务连续性",
      "detail": "换手后跟进断层，影响跨境/外汇等高触点信任",
      "severity": "高"
    },
    {
      "title": "中介噪声稀释真实声音",
      "detail": "代办开户推广大量占据相关词，干扰情绪判断",
      "severity": "中"
    }
  ],
  "opportunities": [
    {
      "title": "专属客户经理卖点",
      "detail": "「全程跟进」正面反馈可沉淀为标准化服务话术",
      "severity": "高"
    },
    {
      "title": "贸融/外汇深度内容",
      "detail": "专业讨论虽少但决策价值高，适合 B2B 运营切口",
      "severity": "中"
    },
    {
      "title": "费用结构主动澄清",
      "detail": "竞品对比帖活跃，澄清门槛可减少劝退叙事",
      "severity": "中"
    }
  ],
  "personas": {
    "head": {
      "id": "head",
      "file": "head.html",
      "title": "香港管理层总览",
      "audience": "香港管理层 / Country Head",
      "tagline": "声誉风险 · 净情感 · 战略竞品 · 行动建议",
      "one_liner": "清洗后样本显示：开户透明度与客户经理连续性是核心声誉风险；竞品对比活跃，需主动澄清费用与时效预期。",
      "kpi_highlight": [
        "negative_pct",
        "net_sentiment",
        "intermediary_count"
      ],
      "insights": [
        "净情感偏弱：负面开户体验（材料/预约/时效）仍是管理层优先议题。",
        "声誉风险集中在「不可预期的等待」——63 天开户等叙事具备传播力。",
        "战略竞品 SOV 中，中银香港与虚拟银行以「便捷」叙事分流中小企意向。",
        "中介噪声未过滤前会显著抬高中性占比，汇报请以清洗后口径为准。",
        "建议本周对外发布「材料清单+预计时效」一页纸，并建立客户经理交接 SLA。",
        "机会：企业网银双人授权等安全感功能可转化为差异化沟通点。"
      ],
      "focus_week": [
        {
          "label": "声誉",
          "text": "开户时效负面叙事监测升级"
        },
        {
          "label": "竞品",
          "text": "渣打/中银/虚拟银行 SOV 周报"
        },
        {
          "label": "行动",
          "text": "材料清单一页纸上线进度"
        }
      ]
    },
    "business-banking": {
      "id": "business-banking",
      "file": "business-banking.html",
      "title": "Business Banking 负责人",
      "audience": "Business Banking Head",
      "tagline": "开户漏斗痛点 · 客户经理 SLA · 产品套餐",
      "one_liner": "开户漏斗卡在材料清晰度与预约排期；客户经理 SLA 与套餐沟通是本周 BB 可控改进点。",
      "kpi_highlight": [
        "total_posts",
        "negative_pct",
        "commercial_related_pct"
      ],
      "insights": [
        "开户体验类帖占清洗后样本最大头，漏斗前段摩擦最高。",
        "客户经理「换人后无人接手」反馈直接指向交接 SLA 缺口。",
        "产品套餐/月费沟通不足，导致客户用竞品费用表自行对比。",
        "正面案例几乎都绑定「有专人跟进」——可复制为标准服务包。",
        "建议：开户后 30–90 天关键触点模板 + 预约可预期性改造。",
        "中介代办叙事与官方漏斗抢注意力，需在内容上抢回解释权。"
      ],
      "focus_week": [
        {
          "label": "漏斗",
          "text": "材料清单与预约等待时长"
        },
        {
          "label": "SLA",
          "text": "客户经理交接与响应时效"
        },
        {
          "label": "套餐",
          "text": "月费/资产门槛话术校准"
        }
      ]
    },
    "sme-mid": {
      "id": "sme-mid",
      "file": "sme-mid.html",
      "title": "中型企业 / Mid-market",
      "audience": "中型企业业务负责人",
      "tagline": "费用门槛 · 开户时效 · 中小企竞品",
      "one_liner": "中型企讨论高频落在费用门槛与开户时效；渣打/恒生/虚拟银行常被用作「更快更便宜」对照。",
      "kpi_highlight": [
        "negative_pct",
        "total_posts",
        "placeholder_count"
      ],
      "insights": [
        "费用与最低资产要求是中小企劝退主因，负面情绪集中于此。",
        "开户时效不确定性比「绝对天数」更伤信任——客户要的是可预期。",
        "竞品帖中「线上丝滑开立」叙事对中型企吸引力强。",
        "初创与轻资产贸易公司最易在门槛阶段流失到替代行。",
        "建议：分层套餐沟通（适用客群+费用场景），避免一刀切劝退感。",
        "中介「代办包过」话术在中型企词云中占比高，需区分真实客户。"
      ],
      "focus_week": [
        {
          "label": "门槛",
          "text": "月费/资产要求客户感知调研"
        },
        {
          "label": "时效",
          "text": "SME 开户周期承诺可行性"
        },
        {
          "label": "竞品",
          "text": "恒生/虚拟银行对照话术"
        }
      ]
    },
    "large-corp": {
      "id": "large-corp",
      "file": "large-corp.html",
      "title": "大型企业 / Large Corporate",
      "audience": "大型企业业务负责人",
      "tagline": "贸融/外汇 · 企业网银 · 服务连续性",
      "one_liner": "大型企相关声量偏薄但决策权重高：贸融/外汇专业讨论与企业网银安全感、服务连续性是关键信号。",
      "kpi_highlight": [
        "commercial_related_pct",
        "net_sentiment",
        "hot_theme_count"
      ],
      "insights": [
        "贸融/外汇主题帖量少、专业度高，不宜只靠小红书做结论。",
        "企业网银双人授权等功能获安全感正面评价，可强化沟通。",
        "服务连续性（客户经理稳定性）对大型企关系价值极高。",
        "跨境收款到账提示与移动端操作体验影响信托敏感客户。",
        "建议：补充 LinkedIn/行业社群与客户座谈会，补齐 B2B 声量缺口。",
        "机会：把「全球网络+贸融能力」做成差异化内容，而非开户比价。"
      ],
      "focus_week": [
        {
          "label": "贸融",
          "text": "外汇/信用证相关深度访谈"
        },
        {
          "label": "网银",
          "text": "Business App 关键路径体验"
        },
        {
          "label": "关系",
          "text": "大客经理稳定性抽检"
        }
      ]
    },
    "cmo": {
      "id": "cmo",
      "file": "cmo.html",
      "title": "CMO / 品牌与市场",
      "audience": "CMO / 品牌与市场",
      "tagline": "声量 · 内容主题 · 中介噪声 · 品牌词云 · 竞品 SOV",
      "one_liner": "品牌相关声量被中介代办内容大量占据；词云与竞品 SOV 显示需抢回「官方解释权」与正面服务叙事。",
      "kpi_highlight": [
        "intermediary_count",
        "total_posts",
        "positive_pct"
      ],
      "insights": [
        "中介/企服推广帖是最大噪声源，未过滤会扭曲品牌情感解读。",
        "词云高频：开户、公司户、费用、客户经理——内容日历应对准这些词。",
        "竞品 SOV 示意中，便捷与低门槛叙事由他行占据心智。",
        "正面内容稀缺，需主动产出「真实开户旅程/客户经理服务」案例。",
        "个人户噪声与商业声量混杂，传播监测需分轨。",
        "建议：品牌内容强调材料透明与时效预期，降低焦虑型搜索转化到中介。"
      ],
      "focus_week": [
        {
          "label": "声量",
          "text": "中介噪声占比周追踪"
        },
        {
          "label": "内容",
          "text": "开户一页纸/服务案例投放"
        },
        {
          "label": "SOV",
          "text": "竞品便捷叙事对照监测"
        }
      ]
    },
    "cto": {
      "id": "cto",
      "file": "cto.html",
      "title": "CTO / 数字与渠道",
      "audience": "CTO / 数字与渠道",
      "tagline": "App/网银体验 · 数字渠道故障信号 · 自动化开户",
      "one_liner": "数字渠道提及不多但情绪敏感：登录验证、到账提示与开户线上化预期是 CTO 侧优先信号。",
      "kpi_highlight": [
        "hot_theme_count",
        "negative_pct",
        "justone_count"
      ],
      "insights": [
        "数字银行/App 主题情绪分化：功能安全感 vs 操作摩擦并存。",
        "客户对「线上开户/远程面签」期望被竞品叙事抬高。",
        "故障类公开信号目前稀疏，但不代表无事——需对接内部埋点。",
        "自动化开户与材料预检（清单数字化）可直接缓解最大痛点。",
        "企业网银双人授权是差异化体验资产，应保证稳定与可发现性。",
        "建议：建立社交「数字故障」关键词哨兵 + 开户进度可查询能力。"
      ],
      "focus_week": [
        {
          "label": "体验",
          "text": "Business App 登录/授权路径"
        },
        {
          "label": "开户",
          "text": "材料预检与进度可视化"
        },
        {
          "label": "哨兵",
          "text": "故障/无法登录词监测"
        }
      ]
    }
  },
  "posts": [
    {
      "id": "justone-6a97e8c6000000000d025f66",
      "note_id": "6a97e8c6000000000d025f66",
      "title": "拥有一家香港公司真的太香了",
      "summary": "🔥跨境经营、进出口贸易，都需要一家香港公司！ 📃 香港公司的优势 ✅香港说种少、说收低。ㅤ ✅香港公司的取名很自由",
      "author_nickname": "香港港盛咨询",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 8,
        "comments": 3,
        "collects": 8
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-09-02",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a7541cd0000000022017eec",
      "note_id": "6a7541cd0000000022017eec",
      "title": "HSBC公户开通整整等了63天",
      "summary": "等的有点久哦 总体还算顺利 #香港汇丰  #hsbc  #汇丰公户",
      "author_nickname": "777-300ER",
      "sentiment": "中性",
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
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-08-07",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-68af4694000000001c004495",
      "note_id": "68af4694000000001c004495",
      "title": "汇丰现在也这么严格嘛",
      "summary": "收到汇丰客户资料部的多次来电，要求我补充资料，不然就会关户，我以为是开户时候缺什么资料，补一下就好，然后后面就被问到告知",
      "author_nickname": "Summerch",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 34,
        "comments": 67,
        "collects": 22
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2025-08-28",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a87e4fc000000003a02ca6a",
      "note_id": "6a87e4fc000000003a02ca6a",
      "title": "香港注册+开公户一般都收多少钱呀？ 注册香港公司+开汇丰公户，8500元贵了吗？…",
      "summary": "香港注册+开公户一般都收多少钱呀？ 注册香港公司+开汇丰公户，8500元贵了吗？但是听说汇丰开下来挺久的，恒生怎么样",
      "author_nickname": "小张的猫",
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
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-08-21",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "恒生",
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-681b0ccb0000000021004306",
      "note_id": "681b0ccb0000000021004306",
      "title": "香港汇丰公司户 ✅纯内贸，外贸可开，外籍人士也可！ ✅过港/国内面签都可安排 ✅…",
      "summary": "香港汇丰公司户 ✅纯内贸，外贸可开，外籍人士也可！ ✅过港/国内面签都可安排 ✅网银好用，多网点 ​✅支持多个行业，全球",
      "author_nickname": "爱吃香菜",
      "sentiment": "中性",
      "themes": [
        "数字银行"
      ],
      "category": "数字银行",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1,
        "comments": 3,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2025-05-07",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-69fefc5c000000002301438e",
      "note_id": "69fefc5c000000002301438e",
      "title": "记录下香港公司汇丰开户过程～",
      "summary": "公司注册下来那会找秘书公司帮我开户，给我推荐的是大新和东亚，但是我意向是开汇丰的，我自己有了解过开汇丰的要求，需要有内地",
      "author_nickname": "天颂",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 114,
        "comments": 5,
        "collects": 41
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-05-09",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a5f207d000000001303ea95",
      "note_id": "6a5f207d000000001303ea95",
      "title": "香港公司开hu，没有关联公司怎么办？",
      "summary": "#香港公司注册  #注册香港公司  #香港创业  #香港开公司  #香港公司开户 #汇丰  #渣打  #香港账户",
      "author_nickname": "港岛海睿学姐",
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
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-07-26",
      "search_keyword": "汇丰 香港 公司户",
      "noise_flag": "中介推广",
      "competitors": [
        "汇丰",
        "渣打"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a2929e7000000000702cef8",
      "note_id": "6a2929e7000000000702cef8",
      "title": "香港公司六大开户方案优选",
      "summary": "今天整理了6大热门香港公司开户方案，条件、费用、优势全对比，选对银行少走弯路👇 1.香港星展 开户条件：关联公司+香港",
      "author_nickname": "小雅在HK",
      "sentiment": "中性",
      "themes": [
        "费用门槛"
      ],
      "category": "费用门槛",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 5,
        "comments": 1,
        "collects": 4
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-06-10",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "虚拟银行"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a55e0c3000000001702fbc4",
      "note_id": "6a55e0c3000000001702fbc4",
      "title": "🔥港企+汇丰公户真的很香❗",
      "summary": "💥👉对很多外贸和跨境电商企业来说，资金进出自由，国际认可度高，这里长期以来都是企业出海的热门跳板 【港企需要哪些资料",
      "author_nickname": "港盛国际商务咨询",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 7,
        "comments": 2,
        "collects": 7
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-07-14",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6978833b000000001a030329",
      "note_id": "6978833b000000001a030329",
      "title": "开头失败了三次，终于把汇丰公户开下来",
      "summary": "之前看小红书都说香港汇丰开户不难，结果自己踩坑三次才成功😅 第一次资料没带齐，第二次流水不足，第三次面签答不上细节",
      "author_nickname": "keke历险记",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 10,
        "comments": 4,
        "collects": 13
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-01-27",
      "search_keyword": "汇丰 香港 公司户",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-66ed1d24000000000c019206",
      "note_id": "66ed1d24000000000c019206",
      "title": "汇丰商业网上理财首次登记用户指南 注：只适用无於经汇丰中小企中心/视频会议开户，…",
      "summary": "汇丰商业网上理财首次登记用户指南 注：只适用无於经汇丰中小企中心/视频会议开户，而并没有收到实体保安编码器及啟动密码信件",
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
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2024-09-20",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a4f17c1000000001c027fb7",
      "note_id": "6a4f17c1000000001c027fb7",
      "title": "汇丰银行HSBC更改每日限额 更新版",
      "summary": "HSBC Business 汇丰商务网上理财更改每日限额 ‼️WBA002 商务网上理财服务更改表格 2026年5月更新",
      "author_nickname": "momo",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 6,
        "comments": 0,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-07-09",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-695dfbda000000002200baec",
      "note_id": "695dfbda000000002200baec",
      "title": "香港汇丰商业理财解锁教程✅",
      "summary": "输入三次错误密码，导致公司帐户被锁，小红书搜了半天，都没有搜到正经教程，打了几次香港客服电话才能接通，很难链接香港客服",
      "author_nickname": "水蜜桃",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 40,
        "comments": 18,
        "collects": 47
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-01-07",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-68cd2aab000000001203e252",
      "note_id": "68cd2aab000000001203e252",
      "title": "原来香港公司开汇丰公户也没那么难！",
      "summary": "好多人注册香港公司后，都想整个汇丰公户，但又怕流程复杂、门槛高。其实啊，只要把流程和要求摸透，開户真的很丝滑～ . 汇丰",
      "author_nickname": "骏星咨询",
      "sentiment": "中性",
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
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2025-09-19",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6aa395bd0000000029016d53",
      "note_id": "6aa395bd0000000029016d53",
      "title": "汇丰卓越保卡",
      "summary": "为了保汇丰的卓越，买了平安7天成长，客户经理给我说扣除手续费有1.2的收益，招商银行的日日宝，最近收益才1.08，难道汇",
      "author_nickname": "tutuvip1118",
      "sentiment": "中性",
      "themes": [
        "客户经理"
      ],
      "category": "客户经理",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 10,
        "comments": 41,
        "collects": 14
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-09-11",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a923443000000001f01e70e",
      "note_id": "6a923443000000001f01e70e",
      "title": "理财｜汇丰灵活智投1w以内买哪个组合好呀",
      "summary": "2026年1月开的卡 偶尔收到提醒要交管理费的邮件 一直没扣过 就没在意 8月中旬又收到邮件提醒了 今天有空认真算账 好",
      "author_nickname": "hiking",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 108,
        "comments": 47,
        "collects": 143
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-08-29",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a9632620000000011033829",
      "note_id": "6a9632620000000011033829",
      "title": "汇丰中国QDII代客境外理财8月收益",
      "summary": "8月月度盈亏+10506.41[大笑R] #投资  #汇丰银行  #QDII  #美股",
      "author_nickname": "帆小帆🍫",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 55,
        "comments": 70,
        "collects": 77
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-09-01",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-694215d4000000001e0067b9",
      "note_id": "694215d4000000001e0067b9",
      "title": "HSBC香港汇丰卓越，线上降级成功",
      "summary": "【以下只讲述我本人的操作实况，各人不同情况，请自行尝试】 无需线下柜台处理，无需邮寄信件，直接线上无痛降级。 我的卓越账",
      "author_nickname": "曼曼鱼",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 202,
        "comments": 80,
        "collects": 345
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2025-12-17",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6aa38e150000000026030d1e",
      "note_id": "6aa38e150000000026030d1e",
      "title": "汇丰银行网上理财转账的时候怎么添加审批人？#不懂就问有问必答 #万能的小红书",
      "summary": "汇丰银行网上理财转账的时候怎么添加审批人？#不懂就问有问必答  #万能的小红书",
      "author_nickname": "澄澄",
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
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-09-11",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6aa27d3b000000002603ab47",
      "note_id": "6aa27d3b000000002603ab47",
      "title": "汇丰这不是ZP吗？",
      "summary": "我想问汇丰银行百分之三在哪里？？？纯纯ZP#汇率  #汇丰银行  #利率  #理财",
      "author_nickname": "予星河",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 3,
        "comments": 57,
        "collects": 3
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-09-10",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-697093e5000000002102b97c",
      "note_id": "697093e5000000002102b97c",
      "title": "近期还是不要在汇丰开户卓越了吧",
      "summary": "当初听说汇丰本身就销售金融产品，想着便捷操作与多元化配置开了汇丰卓越，但实际体验下来落差巨大，想着降级算了。以下是原因",
      "author_nickname": "happysteei",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 453,
        "comments": 247,
        "collects": 523
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-01-21",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-69f20db4000000001a02c8f4",
      "note_id": "69f20db4000000001a02c8f4",
      "title": "40min线上丝滑开立汇丰和中银香港账户",
      "summary": "一直想开个香港账户理财，今天来香港顺便办好了。很丝滑，在麦当劳连上wifi就操作好了，两个银行都是20分钟左右，一点没卡",
      "author_nickname": "lalaisIand",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2155,
        "comments": 267,
        "collects": 2969
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-04-29",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "中银香港",
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a6f48620000000005029929",
      "note_id": "6a6f48620000000005029929",
      "title": "内地到香港4种低成本方案",
      "summary": "方案一，比较比较适合偶尔小额的需求，操作简单，到账快。工行整体还不错，额度最高。 方案二，在汇率、便利性、稳定性上都不错",
      "author_nickname": "财哥笔记",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 529,
        "comments": 103,
        "collects": 840
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-08-02",
      "search_keyword": "汇丰 商业理财",
      "competitors": [],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a4f140b0000000022008e9f",
      "note_id": "6a4f140b0000000022008e9f",
      "title": "两年美股历程，筛选出最后这三个(对比)",
      "summary": "如图！三者对比见p4-p7 【总结】 其中ib仍为主力账户(只买ETF)，因为我的原则是闭眼定投，有钱就买，忽略价格，所",
      "author_nickname": "硅巷拾光",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1550,
        "comments": 295,
        "collects": 1985
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-07-09",
      "search_keyword": "汇丰 商业理财",
      "competitors": [],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-69aa97c0000000001a02a091",
      "note_id": "69aa97c0000000001a02a091",
      "title": "🇭🇰汇丰香港线上申卡&激活",
      "summary": "✅准备： 👉连接香港Wi-Fi 👉港澳通行证原件 👉身份证原件 👉香港入境记录 2.22 下载HSBC HK 线",
      "author_nickname": "达不溜warrior🎬",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2196,
        "comments": 153,
        "collects": 2915
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-03-06",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a0ac599000000003703624a",
      "note_id": "6a0ac599000000003703624a",
      "title": "🇭🇰 汇丰pulse12天下卡 个人时间线分享",
      "summary": "4月知道有这张卡后，在小红书做功课收藏了10+帖子，看完还是有点混乱。自己摸索走了一通，整体还是比较简单顺利的，分享一下",
      "author_nickname": "qq板板",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 513,
        "comments": 176,
        "collects": 874
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-05-18",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a7984130000000026037bf4",
      "note_id": "6a7984130000000026037bf4",
      "title": "大家都是开哪个银行呢？想要资料简单又不容易被风控的…",
      "summary": "大家都是开哪个银行呢？想要资料简单又不容易被风控的",
      "author_nickname": "我是小新",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 4,
        "comments": 27,
        "collects": 1
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-08-10",
      "search_keyword": "汇丰 商业理财",
      "competitors": [],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a803e600000000005023ef1",
      "note_id": "6a803e600000000005023ef1",
      "title": "汇丰卓越理财，海外代客理财，QDII海外债劵",
      "summary": "小朋友三岁在泰国英国学校上学，中间回国几年攒下的小朋友的学费。一直在中国银行R1美金理财里。利息从5%一直降到",
      "author_nickname": "留心听",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 96,
        "comments": 72,
        "collects": 67
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-08-15",
      "search_keyword": "汇丰 商业理财",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-69097a88000000000303784c",
      "note_id": "69097a88000000000303784c",
      "title": "普通人如何参与港股通",
      "summary": "[气球R]开通港股通： 条件：申请前20个交易日，证券账户内日均资产≥50万元人民币 优点：相对便捷，可直接通过国内证券",
      "author_nickname": "宇哥越来越胖",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 30,
        "comments": 3,
        "collects": 17
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2025-11-04",
      "search_keyword": "汇丰 商业理财",
      "competitors": [],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-699289b90000000015031627",
      "note_id": "699289b90000000015031627",
      "title": "澳洲的存款利率，是全世界最好的吗？",
      "summary": "我之前一直用的是Macquarie Bank的，省事，不用每个月做任务，适合懒人，很方便。 但是存款利息是要交税的，而且",
      "author_nickname": "CC的能量小屋",
      "sentiment": "中性",
      "themes": [
        "费用门槛"
      ],
      "category": "费用门槛",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 385,
        "comments": 34,
        "collects": 304
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-02-16",
      "search_keyword": "汇丰 商业理财",
      "competitors": [],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-671ce670000000002100593d",
      "note_id": "671ce670000000002100593d",
      "title": "diy香港汇丰对公账户极速开户分享",
      "summary": "小红书上看很多人说hsbchk的公司户很难开，自己试了一下，流程其实蛮简单的。整体的服务也很好。周二申请周五就获批了，效",
      "author_nickname": "很难是多难",
      "sentiment": "中性",
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
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2024-10-26",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-695dfbda000000002200baec",
      "note_id": "695dfbda000000002200baec",
      "title": "香港汇丰商业理财解锁教程✅",
      "summary": "输入三次错误密码，导致公司帐户被锁，小红书搜了半天，都没有搜到正经教程，打了几次香港客服电话才能接通，很难链接香港客服",
      "author_nickname": "水蜜桃",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 40,
        "comments": 18,
        "collects": 47
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-01-07",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6aa3c6a7000000000b03518d",
      "note_id": "6aa3c6a7000000000b03518d",
      "title": "记录在香港汇丰做Analyst的真是一天",
      "summary": "7:00起床，7:45搭港铁到中环。8:15到汇丰总行大厦，打开Bloomberg扫一遍隔夜市场。8:30正式开工。中间",
      "author_nickname": "Miro",
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
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-09-11",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a7541cd0000000022017eec",
      "note_id": "6a7541cd0000000022017eec",
      "title": "HSBC公户开通整整等了63天",
      "summary": "等的有点久哦 总体还算顺利 #香港汇丰  #hsbc  #汇丰公户",
      "author_nickname": "777-300ER",
      "sentiment": "中性",
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
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-08-07",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-690b23ee000000000402a396",
      "note_id": "690b23ee000000000402a396",
      "title": "🇭🇰HSBC BA Graduate 进度交流",
      "summary": "终于收到HSBC minimum benchmark的邮件嘞 Timeline： 9/16 Apply 9/22 做完O",
      "author_nickname": "1953",
      "sentiment": "中性",
      "themes": [
        "数字银行"
      ],
      "category": "数字银行",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 87,
        "comments": 60,
        "collects": 47
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2025-11-05",
      "search_keyword": "HSBC Business 香港",
      "competitors": [],
      "segment": "未标注",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6aa3d4d3000000001001c778",
      "note_id": "6aa3d4d3000000001001c778",
      "title": "香港汇丰HSBC 2027最新 OIA JSA",
      "summary": "🏦香港汇丰HSBC 2027｜OIA+JSA测评全攻略 测评流程：先完成OIA线上沉浸式测评✅ 通关后解锁JSA岗位模",
      "author_nickname": "九月（见过张凌赫版",
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
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-09-11",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a01544900000000380212cf",
      "note_id": "6a01544900000000380212cf",
      "title": "香港公司开户｜汇丰银行到底哪里好用了？ 做外贸、开香港公司的老板们都知道 注册香…",
      "summary": "香港公司开户｜汇丰银行到底哪里好用了？ 做外贸、开香港公司的老板们都知道 注册香港注册公司简单，但是选开户银行难 汇丰又",
      "author_nickname": "sherry聊海外企服",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 0,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-05-11",
      "search_keyword": "HSBC Business 香港",
      "noise_flag": "中介推广",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a6c0d27000000003302c5b9",
      "note_id": "6a6c0d27000000003302c5b9",
      "title": "全球商业格局变化，导致大量企业选择这里",
      "summary": "🔥每10 家新香港公司，一半以上由内地人开设，多用于跨境电商、外贸收款、海外投资、品牌出海核心原因整理如下，欢迎跟汇而",
      "author_nickname": "汇而信商务服务",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 4,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-07-31",
      "search_keyword": "HSBC Business 香港",
      "competitors": [],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-65aa8e32000000002c03b5d8",
      "note_id": "65aa8e32000000002c03b5d8",
      "title": "实习分享｜🇭🇰 HSBC SWP Program",
      "summary": "📌About the program 为期六个月，没有return，部门包括Commercial Banking ｜W",
      "author_nickname": "zzzyyyzz",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 578,
        "comments": 56,
        "collects": 281
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2024-01-19",
      "search_keyword": "HSBC Business 香港",
      "competitors": [],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a9407a7000000000303f2fc",
      "note_id": "6a9407a7000000000303f2fc",
      "title": "🏦在香港顺手把汇丰账户开了｜记录一下",
      "summary": "这次去香港正好有空，顺便把一直想开的汇丰账户搞定了，整个过程比我预想的要顺利很多，线上操作，全程大概二十分钟左右",
      "author_nickname": "银河拿铁",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1196,
        "comments": 110,
        "collects": 1645
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-08-30",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-69cf2a00000000001a0355c2",
      "note_id": "69cf2a00000000001a0355c2",
      "title": "汇丰红蓝狮子7天到手",
      "summary": "tl：3.28线上开通+线下签名 3.31申请debit 4.2ems物流信息 4.3两张卡同时到 4.14收到密码函",
      "author_nickname": "momo",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 20,
        "comments": 20,
        "collects": 15
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-04-03",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6808a6e9000000001c006a1a",
      "note_id": "6808a6e9000000001c006a1a",
      "title": "港卡开户攻略！汇丰个卡vs渣打VS香港中银",
      "summary": "香港四大银行开户，最新要求,港卡依旧火爆！近期计划前往香港开hu的小伙伴们， 还在纠结不知道选择哪个香港银行开户？ 这篇",
      "author_nickname": "小红薯67AA5BB8",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 275,
        "comments": 7,
        "collects": 227
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2025-04-23",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "中银香港",
        "汇丰",
        "渣打"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a7c58a90000000008009c01",
      "note_id": "6a7c58a90000000008009c01",
      "title": "和汇丰香港一起，先一步看见世界",
      "summary": "时光不停流动，变化从未停歇。​ ​ 感谢一路相伴， @汇丰香港 正式迈入10000粉的里程碑🎉​ ​ 作为连接世界的桥",
      "author_nickname": "汇丰香港",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 464,
        "comments": 0,
        "collects": 82
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-08-14",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a8bbc63000000002901b064",
      "note_id": "6a8bbc63000000002901b064",
      "title": "香港招聘跨境RM、IC、IS，高薪给专才！",
      "summary": "在职员工内推！非常清楚岗位具体情况和考核！ 要求： 1.3年以上银行工作经历（对公、个贷勿扰） 2.不要求英语和粤语，但",
      "author_nickname": "MmmmmR",
      "sentiment": "中性",
      "themes": [
        "贸易融资外汇"
      ],
      "category": "贸易融资外汇",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 10,
        "comments": 14,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-08-24",
      "search_keyword": "HSBC Business 香港",
      "competitors": [],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a7c447a0000000033037527",
      "note_id": "6a7c447a0000000033037527",
      "title": "汇丰账户3张卡红蓝狮子 Pulse 到底该用哪张",
      "summary": "一个汇丰 One 账户 3 张卡：红狮子、蓝狮子、汇丰 Pulse 很多内地朋友开完香港汇丰 One 之后，手里最后会出",
      "author_nickname": "星途出海",
      "sentiment": "中性",
      "themes": [
        "个人户噪声"
      ],
      "category": "个人户噪声",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 621,
        "comments": 20,
        "collects": 571
      },
      "commercial_related": false,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-08-12",
      "search_keyword": "HSBC Business 香港",
      "noise_flag": "个人户噪声",
      "competitors": [
        "汇丰"
      ],
      "segment": "未标注",
      "is_intermediary": false,
      "is_personal_noise": true,
      "is_placeholder": false
    },
    {
      "id": "justone-6a4f140b0000000022008e9f",
      "note_id": "6a4f140b0000000022008e9f",
      "title": "两年美股历程，筛选出最后这三个(对比)",
      "summary": "如图！三者对比见p4-p7 【总结】 其中ib仍为主力账户(只买ETF)，因为我的原则是闭眼定投，有钱就买，忽略价格，所",
      "author_nickname": "硅巷拾光",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1550,
        "comments": 295,
        "collects": 1985
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-07-09",
      "search_keyword": "HSBC Business 香港",
      "competitors": [],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-69734364000000000a02af7d",
      "note_id": "69734364000000000a02af7d",
      "title": "最新！！香港汇丰25 分钟线上开户攻略",
      "summary": "全程不用跑分行！人在香港线上直接办，实体卡一周寄内地，手把手教你走稳每一步，轻松避开新规管理费💸 2026 汇丰新规一",
      "author_nickname": "苏小小",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 56,
        "comments": 7,
        "collects": 75
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-01-23",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6825b52a0000000012000d94",
      "note_id": "6825b52a0000000012000d94",
      "title": "成功入职香港HSBC，来复盘下面试",
      "summary": "🟠首先是汇丰的面试一共是4轮：Online Application👉Online Immersive Assessm",
      "author_nickname": "Nia in Central",
      "sentiment": "中性",
      "themes": [
        "数字银行"
      ],
      "category": "数字银行",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 264,
        "comments": 233,
        "collects": 235
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2025-05-16",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "未标注",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a9165ec000000002503ce34",
      "note_id": "6a9165ec000000002503ce34",
      "title": "香港存取美金踩坑分享",
      "summary": "[失望R]柜台取美金需要提前预约，当天walkin基本没戏 1️⃣HSBC： [向右R]柜台：柜台2000美金以下免手续",
      "author_nickname": "黄浦卓玛",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 29,
        "comments": 20,
        "collects": 38
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-08-28",
      "search_keyword": "HSBC Business 香港",
      "competitors": [],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6960cc68000000001a03710d",
      "note_id": "6960cc68000000001a03710d",
      "title": "1.9亲自赴港汇丰开户实录 30分钟下卡",
      "summary": "之前总担心港卡开户流程繁琐，自己实际操作了一遍才发现，找对方法真的超省心！ 重要提示：过关后第一件事，务必连上香港WiF",
      "author_nickname": "豆豆泥",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2637,
        "comments": 333,
        "collects": 3860
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-01-09",
      "search_keyword": "HSBC Business 香港",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-687e113a000000002400c280",
      "note_id": "687e113a000000002400c280",
      "title": "汇丰银行登录步骤",
      "summary": "汇丰银行登录： 需要先注册使用者名称和密码。此处说的是已有使用者名称和密码但是因为长时间未登录流动保安编码被解除的情况",
      "author_nickname": "星辰大海",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 46,
        "comments": 6,
        "collects": 47
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2025-07-21",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-64e427a5000000000a019d90",
      "note_id": "64e427a5000000000a019d90",
      "title": "外汇汇款操作流程（汇丰银行公司网银）",
      "summary": "作为一枚小出纳，日常最重要的工作就是网银付款，但是对于新手小白来说，都不知道如何操作盾登录网银付款，因为自己淋过雨，想给",
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
        "comments": 143,
        "collects": 454
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2023-08-22",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-677d1bb1000000001800c131",
      "note_id": "677d1bb1000000001800c131",
      "title": "自雇开公司，企业自动转账发薪教程",
      "summary": "方法一：通过网上银行设置 1️⃣注册及登录：先注册并登录银行（我用的汇丰）的网上银行服务。如果你是公司员工，公司通常会统",
      "author_nickname": "此心依旧",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 26,
        "comments": 3,
        "collects": 66
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2025-01-07",
      "search_keyword": "汇丰 企业网银",
      "noise_flag": "中介推广",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a32658b000000002200957a",
      "note_id": "6a32658b000000002200957a",
      "title": "汇丰银行企业网银，不会玩",
      "summary": "想看所有账户列表，怎么给她弄出来呢@汇丰银行客服#用汇丰的财务牛马",
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
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-06-17",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-695221c7000000002202f1b3",
      "note_id": "695221c7000000002202f1b3",
      "title": "汇丰对公账户发工资教程",
      "summary": "1、路径：登录之后，如图所示，一步步走到“自动转账” 2、第一次发工资，需要“加入新组别”，即把要发薪水的人加到名单里面",
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
        "comments": 20,
        "collects": 70
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2025-12-29",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-69c1531b000000001f001dda",
      "note_id": "69c1531b000000001f001dda",
      "title": "有懂汇丰银行网银操作的小伙伴吗？ 汇丰银行财资网，公司账户，付款授权后，回单哪里…",
      "summary": "有懂汇丰银行网银操作的小伙伴吗？ 汇丰银行财资网，公司账户，付款授权后，回单哪里下载啊，救救宝子",
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
        "comments": 5,
        "collects": 6
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-03-23",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "未标注",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-67ecd6c1000000001c035a7f",
      "note_id": "67ecd6c1000000001c035a7f",
      "title": "香港汇丰公户激活💰",
      "summary": "首先app下载对了，要下载香港汇丰Business Express 就是图2里的黑色hk的，一般的应用商店里没有这个AP",
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
        "collects": 153
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2025-04-02",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a01544900000000380212cf",
      "note_id": "6a01544900000000380212cf",
      "title": "香港公司开户｜汇丰银行到底哪里好用了？ 做外贸、开香港公司的老板们都知道 注册香…",
      "summary": "香港公司开户｜汇丰银行到底哪里好用了？ 做外贸、开香港公司的老板们都知道 注册香港注册公司简单，但是选开户银行难 汇丰又",
      "author_nickname": "sherry聊海外企服",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 0,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-05-11",
      "search_keyword": "汇丰 企业网银",
      "noise_flag": "中介推广",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a10ed1c0000000035028e43",
      "note_id": "6a10ed1c0000000035028e43",
      "title": "HSBC公户申请成功。",
      "summary": "自己搞定汇丰公户申请，全程丝滑，历时一个月。 4月底申请，几天后收到了汇丰客户经理电话沟通，补充了一些资料。5月中旬收到",
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
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-05-23",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-69fde6fc000000001a0370a0",
      "note_id": "69fde6fc000000001a0370a0",
      "title": "重磅利好！无需内地公司即可开香港汇丰公户",
      "summary": "香港汇丰银行针对内地客户开户要求全面放宽，正式取消 “必须提供内地背景关联公司” 的核心门槛，[赞R]电商、初创、科创三",
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
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-05-08",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-683d62b000000000220343a6",
      "note_id": "683d62b000000000220343a6",
      "title": "香港汇丰银行公户电脑登录是个人理财还是商业理财 #不懂就问有问必答  #万能的小…",
      "summary": "香港汇丰银行公户电脑登录是个人理财还是商业理财 #不懂就问有问必答  #万能的小红书",
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
        "comments": 18,
        "collects": 2
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2025-06-02",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-66ed1d24000000000c019206",
      "note_id": "66ed1d24000000000c019206",
      "title": "汇丰商业网上理财首次登记用户指南 注：只适用无於经汇丰中小企中心/视频会议开户，…",
      "summary": "汇丰商业网上理财首次登记用户指南 注：只适用无於经汇丰中小企中心/视频会议开户，而并没有收到实体保安编码器及啟动密码信件",
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
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2024-09-20",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6aa3d2cc000000002800381b",
      "note_id": "6aa3d2cc000000002800381b",
      "title": "恒生指数vs恒生国企vs恒生科技，你买的是哪",
      "summary": "#恒生指数 #恒科 #港股 #价值投资 #巴菲特",
      "author_nickname": "巴芒认知社",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 2,
        "comments": 1,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-09-11",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "恒生"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a993569000000002803a7ff",
      "note_id": "6a993569000000002803a7ff",
      "title": "HK 主体｜汇丰 + 审计配套干货✨",
      "summary": "很多做的小伙伴会有困扰，没有关联主体，不知道该怎么对接账户 其实条件不用想象中那么严苛‼️ ✅无关联主体也可对接汇丰",
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
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-09-03",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-699ea085000000002801f0ac",
      "note_id": "699ea085000000002801f0ac",
      "title": "汇丰银行绑定环球网上银行",
      "summary": "#绑定银行卡  #银行卡  因为汇丰同名账户之间互转是免费用这个优势，所以办理了汇丰中国和汇丰中国香港的账户。 然后在网",
      "author_nickname": "我是4月的小满",
      "sentiment": "中性",
      "themes": [
        "费用门槛"
      ],
      "category": "费用门槛",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 101,
        "comments": 25,
        "collects": 130
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-02-25",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-69def3e20000000022028549",
      "note_id": "69def3e20000000022028549",
      "title": "🔥香港公户选对银行，真的能提高成功率！",
      "summary": "公司成立了只是第一步，公司账户才是让人头疼的，银行审核严苛，目的是为了验证业务的真实性，了解资金的来源！选对银行真的能提",
      "author_nickname": "恒业国际商务",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 74,
        "comments": 63,
        "collects": 61
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-04-15",
      "search_keyword": "汇丰 企业网银",
      "competitors": [],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-697077500000000022008475",
      "note_id": "697077500000000022008475",
      "title": "汇丰银行网页版",
      "summary": "我真的是求求了，汇丰网页版为什么登录不了，输入账户名后就是图二[哭惹R][哭惹R][哭惹R",
      "author_nickname": "敏敏💃",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 5,
        "comments": 1,
        "collects": 0
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-01-21",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-6a6f48620000000005029929",
      "note_id": "6a6f48620000000005029929",
      "title": "内地到香港4种低成本方案",
      "summary": "方案一，比较比较适合偶尔小额的需求，操作简单，到账快。工行整体还不错，额度最高。 方案二，在汇率、便利性、稳定性上都不错",
      "author_nickname": "财哥笔记",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 529,
        "comments": 103,
        "collects": 840
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-08-02",
      "search_keyword": "汇丰 企业网银",
      "competitors": [],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-67dd272d000000000e004ed4",
      "note_id": "67dd272d000000000e004ed4",
      "title": "换手机了，汇丰APP怎么搞",
      "summary": "首先，汇丰APP是没办法同时2个手机登陆的！要登新的，旧的只能卸掉。卸掉的步骤如P2&P3。 新手机要登陆，需要用户名",
      "author_nickname": "张小松",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 351,
        "comments": 77,
        "collects": 463
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2025-03-21",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "justone-69daec0e000000001a02c845",
      "note_id": "69daec0e000000001a02c845",
      "title": "内地中国银行转香港汇丰无手续费流程",
      "summary": "内地中国银行转香港汇丰无手续费流程",
      "author_nickname": "Nan",
      "sentiment": "中性",
      "themes": [
        "开户体验"
      ],
      "category": "开户体验",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 316,
        "comments": 16,
        "collects": 349
      },
      "commercial_related": true,
      "source_status": "justone_api",
      "source_label": "Just One API·小红书",
      "published_at": "2026-04-12",
      "search_keyword": "汇丰 企业网银",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": false
    },
    {
      "id": "placeholder-001",
      "note_id": "placeholder-001",
      "title": "香港公司户开汇丰商业账户，文件准备踩坑记录",
      "summary": "股份证明、董事身份证明、业务证明材料清单不清晰，预约网点后仍被要求补件两次，整体耗时约三周。",
      "sentiment": "负面",
      "themes": [
        "开户流程",
        "审批时效"
      ],
      "category": "开户体验",
      "author_type": "真实客户",
      "platform": "小红书",
      "engagement": {
        "likes": 286,
        "comments": 42,
        "collects": 118
      },
      "commercial_related": true,
      "source_status": "placeholder",
      "source_label": "占位·小红书",
      "published_at": "2026-08-28",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": true
    },
    {
      "id": "placeholder-002",
      "note_id": "placeholder-002",
      "title": "汇丰 Business Banking 客户经理响应速度怎么样？",
      "summary": "开户后前两周经理跟进积极，解答跨境收款与外汇额度问题较专业；后续换人后微信回复变慢，连续性一般。",
      "sentiment": "中性",
      "themes": [
        "客户经理服务",
        "产品功能"
      ],
      "category": "客户经理",
      "author_type": "真实客户",
      "platform": "小红书",
      "engagement": {
        "likes": 154,
        "comments": 31,
        "collects": 67
      },
      "commercial_related": true,
      "source_status": "placeholder",
      "source_label": "占位·小红书",
      "published_at": "2026-08-22",
      "competitors": [
        "汇丰"
      ],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": true
    },
    {
      "id": "placeholder-003",
      "note_id": "placeholder-003",
      "title": "中小企开公司户：汇丰 vs 渣打费用门槛对比",
      "summary": "对比最低存款/月费与跨境电汇费率，汇丰品牌信任度高但门槛感更强；适合有稳定流水的贸易公司，初创需慎重。",
      "sentiment": "中性",
      "themes": [
        "费用门槛",
        "对比竞品"
      ],
      "category": "竞品对比",
      "author_type": "真实客户",
      "platform": "小红书",
      "engagement": {
        "likes": 421,
        "comments": 89,
        "collects": 203
      },
      "commercial_related": true,
      "source_status": "placeholder",
      "source_label": "占位·小红书",
      "published_at": "2026-08-15",
      "competitors": [
        "汇丰",
        "渣打"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": true
    },
    {
      "id": "placeholder-004",
      "note_id": "placeholder-004",
      "title": "HSBC Business App 跨境收款到账提醒体验",
      "summary": "App 推送偶发延迟，但交易明细与多币种账户切换清晰；企业财务希望加强批量审批与导出功能。",
      "sentiment": "正面",
      "themes": [
        "App体验",
        "产品功能"
      ],
      "category": "数字银行",
      "author_type": "真实客户",
      "platform": "小红书",
      "engagement": {
        "likes": 98,
        "comments": 17,
        "collects": 45
      },
      "commercial_related": true,
      "source_status": "placeholder",
      "source_label": "占位·小红书",
      "published_at": "2026-09-01",
      "competitors": [],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": true
    },
    {
      "id": "placeholder-005",
      "note_id": "placeholder-005",
      "title": "贸易融资询价：汇丰信用证与出口押汇沟通纪要",
      "summary": "客户经理能讲清 LC 流程，但审批材料要求严格、时效偏长；对中小出口商来说门槛与等待成本是主要顾虑。",
      "sentiment": "负面",
      "themes": [
        "产品功能",
        "审批时效",
        "客户经理服务"
      ],
      "category": "贸易融资外汇",
      "author_type": "真实客户",
      "platform": "小红书",
      "engagement": {
        "likes": 76,
        "comments": 22,
        "collects": 39
      },
      "commercial_related": true,
      "source_status": "placeholder",
      "source_label": "占位·小红书",
      "published_at": "2026-08-05",
      "competitors": [
        "汇丰"
      ],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": true
    },
    {
      "id": "placeholder-006",
      "note_id": "placeholder-006",
      "title": "公司户预约开户难？电话与网上预约都约满",
      "summary": "连续两周约不到合适时段，网点建议提前准备业务计划书与公司章程；流程透明度不足引发焦虑。",
      "sentiment": "负面",
      "themes": [
        "开户流程",
        "审批时效"
      ],
      "category": "开户体验",
      "author_type": "真实客户",
      "platform": "小红书",
      "engagement": {
        "likes": 312,
        "comments": 56,
        "collects": 141
      },
      "commercial_related": true,
      "source_status": "placeholder",
      "source_label": "占位·小红书",
      "published_at": "2026-07-29",
      "competitors": [],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": true
    },
    {
      "id": "placeholder-007",
      "note_id": "placeholder-007",
      "title": "企业网银双人授权设置后安全感提升",
      "summary": "财务与老板双人授权后大额支付更安心，界面逻辑清晰；希望移动端也能完整支持审批流。",
      "sentiment": "正面",
      "themes": [
        "App体验",
        "产品功能"
      ],
      "category": "数字银行",
      "author_type": "真实客户",
      "platform": "小红书",
      "engagement": {
        "likes": 133,
        "comments": 19,
        "collects": 72
      },
      "commercial_related": true,
      "source_status": "placeholder",
      "source_label": "占位·小红书",
      "published_at": "2026-09-03",
      "competitors": [],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": true
    },
    {
      "id": "placeholder-008",
      "note_id": "placeholder-008",
      "title": "外汇与跨境收款：汇丰商业户实际费率分享",
      "summary": "主流货币点差可接受，小币种与紧急汇出费用偏高；客户经理可协助申请优惠但仍看流水规模。",
      "sentiment": "中性",
      "themes": [
        "费用门槛",
        "产品功能"
      ],
      "category": "贸易融资外汇",
      "author_type": "真实客户",
      "platform": "小红书",
      "engagement": {
        "likes": 267,
        "comments": 48,
        "collects": 156
      },
      "commercial_related": true,
      "source_status": "placeholder",
      "source_label": "占位·小红书",
      "published_at": "2026-08-18",
      "competitors": [
        "汇丰"
      ],
      "segment": "Large",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": true
    },
    {
      "id": "placeholder-009",
      "note_id": "placeholder-009",
      "title": "【噪声】汇丰One个人户开户攻略（易与商业户混淆）",
      "summary": "笔记标题含「汇丰香港开户」但内容为个人汇丰One转会/存款要求，评论区也有人误问公司户流程。",
      "sentiment": "正面",
      "themes": [
        "开户流程"
      ],
      "category": "个人户噪声",
      "author_type": "不确定",
      "platform": "小红书",
      "engagement": {
        "likes": 1890,
        "comments": 240,
        "collects": 980
      },
      "commercial_related": false,
      "source_status": "placeholder",
      "source_label": "占位·小红书",
      "published_at": "2026-08-10",
      "noise_flag": "个人户噪声",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": true,
      "is_placeholder": true
    },
    {
      "id": "placeholder-010",
      "note_id": "placeholder-010",
      "title": "客户经理帮我们搞定多币种公司账户，体验不错",
      "summary": "从预约、文件预审到激活网银全程有人跟进，对首次在港设公司的内地老板较友好。",
      "sentiment": "正面",
      "themes": [
        "客户经理服务",
        "开户流程"
      ],
      "category": "客户经理",
      "author_type": "真实客户",
      "platform": "小红书",
      "engagement": {
        "likes": 205,
        "comments": 28,
        "collects": 91
      },
      "commercial_related": true,
      "source_status": "placeholder",
      "source_label": "占位·小红书",
      "published_at": "2026-09-05",
      "competitors": [],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": true
    },
    {
      "id": "web-informed-001",
      "note_id": "web-informed-001",
      "title": "公开检索观察：个人汇丰One声量远高于商业户",
      "summary": "网络公开内容大量集中在个人开户、转会优惠与存款门槛；商业银行公司户讨论稀缺，社交监听需警惕样本偏差。",
      "sentiment": "中性",
      "themes": [
        "对比竞品",
        "开户流程"
      ],
      "category": "个人户噪声",
      "author_type": "不确定",
      "platform": "其他来源",
      "engagement": {
        "likes": 0,
        "comments": 0,
        "collects": 0
      },
      "commercial_related": false,
      "source_status": "web_informed",
      "source_label": "占位·公开检索归纳",
      "published_at": "2026-09-11",
      "noise_flag": "个人户噪声",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": true,
      "is_placeholder": true
    },
    {
      "id": "placeholder-011",
      "note_id": "placeholder-011",
      "title": "商业户月费与最低资产要求劝退了一批初创",
      "summary": "有用户反馈维持费用与资产门槛对早期公司压力大，转投其他银行或虚拟银行商业方案的讨论增多。",
      "sentiment": "负面",
      "themes": [
        "费用门槛",
        "对比竞品"
      ],
      "category": "费用门槛",
      "author_type": "真实客户",
      "platform": "小红书",
      "engagement": {
        "likes": 348,
        "comments": 71,
        "collects": 162
      },
      "commercial_related": true,
      "source_status": "placeholder",
      "source_label": "占位·小红书",
      "published_at": "2026-07-20",
      "competitors": [
        "虚拟银行"
      ],
      "segment": "SME/Mid",
      "is_intermediary": false,
      "is_personal_noise": false,
      "is_placeholder": true
    },
    {
      "id": "placeholder-012",
      "note_id": "placeholder-012",
      "title": "一站式开香港公司+汇丰开户代办",
      "summary": "中介推广帖：宣称注册香港公司、银行开户、秘书服务打包代办，含汇丰商业户「协助预约与材料准备」话术，非真实客户体验。",
      "sentiment": "中性",
      "themes": [
        "中介代办",
        "开户流程"
      ],
      "category": "中介推广",
      "author_type": "中介",
      "platform": "小红书",
      "engagement": {
        "likes": 520,
        "comments": 95,
        "collects": 310
      },
      "commercial_related": true,
      "source_status": "placeholder",
      "source_label": "占位·小红书",
      "published_at": "2026-09-02",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": true
    },
    {
      "id": "placeholder-013",
      "note_id": "placeholder-013",
      "title": "公司秘书协助开汇丰商业户",
      "summary": "公司秘书服务广告：强调年审、做账、协助准备开户文件与陪同面签，引流意向客户至付费套餐。",
      "sentiment": "中性",
      "themes": [
        "中介代办",
        "客户经理服务"
      ],
      "category": "中介推广",
      "author_type": "公司秘书",
      "platform": "小红书",
      "engagement": {
        "likes": 188,
        "comments": 34,
        "collects": 97
      },
      "commercial_related": true,
      "source_status": "placeholder",
      "source_label": "占位·小红书",
      "published_at": "2026-08-25",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": true
    },
    {
      "id": "placeholder-014",
      "note_id": "placeholder-014",
      "title": "企服套餐：注册公司送汇丰开户指导",
      "summary": "企服推广内容：注册+秘书+税务咨询捆绑销售，文中突出「汇丰/渣打商业开户指导」，属于获客营销而非客户复盘。",
      "sentiment": "正面",
      "themes": [
        "中介代办",
        "费用门槛"
      ],
      "category": "中介推广",
      "author_type": "企服推广",
      "platform": "小红书",
      "engagement": {
        "likes": 402,
        "comments": 61,
        "collects": 225
      },
      "commercial_related": true,
      "source_status": "placeholder",
      "source_label": "占位·小红书",
      "published_at": "2026-08-30",
      "competitors": [
        "汇丰",
        "渣打"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": true
    },
    {
      "id": "placeholder-015",
      "note_id": "placeholder-015",
      "title": "代办香港公司+汇丰Business账户全程跟进",
      "summary": "中介占位帖：承诺「材料一次过、预约通道、开户进度同步」，评论区多为询价，缺少真实开户体验细节。",
      "sentiment": "中性",
      "themes": [
        "中介代办",
        "开户流程",
        "审批时效"
      ],
      "category": "中介推广",
      "author_type": "中介",
      "platform": "小红书",
      "engagement": {
        "likes": 275,
        "comments": 88,
        "collects": 149
      },
      "commercial_related": true,
      "source_status": "placeholder",
      "source_label": "占位·小红书",
      "published_at": "2026-09-07",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": true
    },
    {
      "id": "placeholder-016",
      "note_id": "placeholder-016",
      "title": "专业公司秘书服务｜汇丰商业开户资料清单",
      "summary": "公司秘书营销帖：以「免费资料清单」换取留资，文案强调可协助汇丰商业户开户，属获客内容。",
      "sentiment": "正面",
      "themes": [
        "中介代办",
        "开户流程"
      ],
      "category": "中介推广",
      "author_type": "公司秘书",
      "platform": "其他来源",
      "engagement": {
        "likes": 64,
        "comments": 12,
        "collects": 41
      },
      "commercial_related": true,
      "source_status": "placeholder",
      "source_label": "占位·示例",
      "published_at": "2026-09-04",
      "competitors": [
        "汇丰"
      ],
      "segment": "SME/Mid",
      "is_intermediary": true,
      "is_personal_noise": false,
      "is_placeholder": true
    }
  ]
};
