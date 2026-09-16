/* HSBC Commercial Social Listening — shared dashboard engine (v2) */
(function () {
  'use strict';

  var DATA = window.HSBC_SL_DATA;
  if (!DATA) {
    console.error('HSBC_SL_DATA missing');
    return;
  }

  var personaId = (document.body && document.body.getAttribute('data-persona')) || 'head';
  var persona = (DATA.personas && (DATA.personas[personaId] || DATA.personas.head)) || {};
  var chartInstances = [];
  var ChartOK = typeof window.Chart !== 'undefined';

  /* ---------- utils ---------- */
  function byId(id) {
    if (!id) return null;
    try { return document.getElementById(id); } catch (e) { return null; }
  }
  function $(sel, root) {
    if (!sel) return null;
    if (!root && sel.charAt(0) === '#' && sel.indexOf(' ') < 0 && sel.indexOf('.') < 0 && sel.indexOf('[') < 0) {
      return byId(sel.slice(1));
    }
    try { return (root || document).querySelector(sel); } catch (e) { return null; }
  }
  function $$(sel, root) {
    try { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
    catch (e) { return []; }
  }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function setHTML(node, html) {
    if (!node || typeof node.innerHTML !== 'string' && typeof node.innerHTML === 'undefined') {
      /* still allow empty string */
    }
    if (!node || !('innerHTML' in node)) return false;
    node.innerHTML = html == null ? '' : html;
    return true;
  }
  function setText(node, text) {
    if (!node || !('textContent' in node)) return false;
    node.textContent = text == null ? '' : String(text);
    return true;
  }
  function safe(name, fn) {
    try { fn(); }
    catch (e) { console.error('[dashboard] ' + name + ' failed', e); }
  }
  function leanClass(lean) {
    var map = { negative: 'neg', positive: 'pos', mixed: 'mixed', neutral: 'neutral', neg: 'neg', pos: 'pos' };
    return map[lean] || 'neutral';
  }

  function filterPosts(opts) {
    opts = opts || {};
    var hideInt = !!opts.hideIntermediaries;
    var hidePers = !!opts.hidePersonalNoise;
    var sent = opts.sentiment || '';
    var cat = opts.category || '';
    var q = (opts.q || '').trim().toLowerCase();
    var posts = DATA.posts || [];
    return posts.filter(function (p) {
      if (hideInt && p.is_intermediary) return false;
      if (hidePers && p.is_personal_noise) return false;
      if (sent && p.sentiment !== sent) return false;
      if (cat && p.category !== cat) return false;
      if (q) {
        var hay = ((p.title || '') + ' ' + (p.summary || '') + ' ' + (p.author_nickname || '')).toLowerCase();
        if (hay.indexOf(q) < 0) return false;
      }
      return true;
    });
  }

  /* ---------- page tabs ---------- */
  function initTabs() {
    $$('.page-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        var id = tab.getAttribute('data-page');
        $$('.page-tab').forEach(function (t) { t.classList.toggle('active', t === tab); });
        $$('.page').forEach(function (p) { p.classList.toggle('active', p.id === id); });
      });
    });
  }

  /* ---------- header ---------- */
  function renderHeader() {
    var meta = DATA.meta || {};
    setText(byId('personaTitle'), persona.title || '');
    setText(byId('personaAudience'), persona.audience || '');
    var upd = byId('updatedAt');
    if (upd) setText(upd, '更新 ' + (meta.updated_at_display || ''));
    $$('.persona-nav a').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-id') === personaId);
    });
  }

  /* ---------- KPI ---------- */
  var KPI_DEFS = [
    { key: 'total_posts', label: '可见帖数', hint: '噪声过滤后', fmt: function (v) { return v; } },
    { key: 'positive_pct', label: '正面占比', hint: '情感正向', cls: 'pos', fmt: function (v) { return v + '%'; } },
    { key: 'negative_pct', label: '负面占比', hint: '情感负向', cls: 'neg', fmt: function (v) { return v + '%'; } },
    { key: 'neutral_pct', label: '中性占比', hint: '情感中性', cls: 'neu', fmt: function (v) { return v + '%'; } },
    { key: 'net_sentiment', label: '净情感', hint: '正面−负面 pp', fmt: function (v) { return (v > 0 ? '+' : '') + v + 'pp'; } },
    { key: 'commercial_related_pct', label: '商业相关', hint: '可见样本内', fmt: function (v) { return v + '%'; } },
    { key: 'intermediary_count', label: '中介/企服', hint: '全量样本', fmt: function (v) { return v; } },
    { key: 'justone_count', label: 'Just One 实拉', hint: '含占位 ' + ((DATA.kpis_clean && DATA.kpis_clean.placeholder_count) || 0), fmt: function (v) { return v; } },
    { key: 'placeholder_count', label: '占位帖', hint: '示意补齐', fmt: function (v) { return v; } },
    { key: 'hot_theme_count', label: '热点主题', hint: '主题条数目', fmt: function (v) { return v; } }
  ];

  function renderKPIs() {
    var box = byId('kpiStrip');
    if (!box) return;
    var kpis = DATA.kpis_clean || DATA.kpis || {};
    var hi = persona.kpi_highlight || [];
    var cards = [];
    KPI_DEFS.forEach(function (def) {
      var v = kpis[def.key];
      if (v == null && def.key === 'net_sentiment') v = 0;
      if (v == null) return;
      /* persona-specific extras (placeholder/hot theme) only when highlighted */
      if ((def.key === 'placeholder_count' || def.key === 'hot_theme_count') && hi.indexOf(def.key) < 0) return;
      cards.push(
        '<div class="kpi' + (def.cls ? ' ' + def.cls : '') + (hi.indexOf(def.key) >= 0 ? ' highlight' : '') + '">' +
          '<div class="k-label">' + esc(def.label) + '</div>' +
          '<div class="k-value">' + esc(String(def.fmt(v))) + '</div>' +
          '<div class="k-hint">' + esc(def.hint) + '</div>' +
        '</div>'
      );
    });
    setHTML(box, cards.join(''));
  }

  /* ---------- sentiment donut + sparkline ---------- */
  function renderSentiment() {
    var s = DATA.sentiment || {};
    var total = (s['正面'] || 0) + (s['负面'] || 0) + (s['中性'] || 0);
    var canvas = byId('sentimentDonut');
    var host = canvas && canvas.parentNode;
    if (host && 'innerHTML' in host) {
      setHTML(host, fallbackDonut(s, total) + '<canvas id="sentimentDonut" class="hidden"></canvas>');
    }
    var hiddenCanvas = byId('sentimentDonut');
    if (hiddenCanvas && hiddenCanvas.classList) hiddenCanvas.classList.add('hidden');

    var leg = byId('sentimentLegend');
    if (leg) {
      setHTML(leg,
        '<span class="l-pos">正面 ' + (s['正面'] || 0) + '</span>' +
        '<span class="l-neg">负面 ' + (s['负面'] || 0) + '</span>' +
        '<span class="l-neu">中性 ' + (s['中性'] || 0) + '</span>'
      );
    }

    var trend = DATA.sentiment_trend;
    var spark = byId('sentimentSpark');
    if (spark && ChartOK && trend) {
      try {
        chartInstances.push(new Chart(spark.getContext('2d'), {
          type: 'line',
          data: {
            labels: trend.labels,
            datasets: [
              { label: '正面%', data: trend.positive, borderColor: '#0a7a3e', backgroundColor: 'transparent', tension: 0.3, pointRadius: 2, borderWidth: 2 },
              { label: '负面%', data: trend.negative, borderColor: '#DB0011', backgroundColor: 'transparent', tension: 0.3, pointRadius: 2, borderWidth: 2 }
            ]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: true, labels: { boxWidth: 10, font: { size: 10 } } } },
            scales: {
              x: { ticks: { font: { size: 9 } }, grid: { display: false } },
              y: { ticks: { font: { size: 9 } }, min: 0, suggestedMax: 30, grid: { color: '#f0f0f0' } }
            }
          }
        }));
      } catch (err) {
        console.warn('[dashboard] Chart.js sparkline failed, using text fallback', err);
        sparkTextFallback(spark, trend);
      }
    } else if (spark && trend) {
      sparkTextFallback(spark, trend);
    }
  }

  function sparkTextFallback(spark, trend) {
    var host = spark && spark.parentNode;
    if (host && 'innerHTML' in host) {
      setHTML(host, '<p class="card-muted">周趋势（示意）：正面 ' + (trend.positive || []).join('/') + ' · 负面 ' + (trend.negative || []).join('/') + '</p>');
    }
  }

  function fallbackDonut(s, total) {
    var p = total ? Math.round(((s['正面'] || 0) / total) * 100) : 0;
    var n = total ? Math.round(((s['负面'] || 0) / total) * 100) : 0;
    var u = Math.max(0, 100 - p - n);
    return '<div class="css-donut-wrap" style="display:flex;align-items:center;justify-content:center;height:200px;gap:16px;font-size:0.85rem;">' +
      '<div style="width:130px;height:130px;border-radius:50%;background:conic-gradient(#0a7a3e 0 ' + p + '%,#DB0011 ' + p + '% ' + (p + n) + '%,#bbb ' + (p + n) + '% 100%);position:relative;">' +
      '<div style="position:absolute;inset:28px;background:#fff;border-radius:50%;"></div></div>' +
      '<div style="line-height:1.7"><div><strong>正</strong> ' + p + '%</div><div><strong>负</strong> ' + n + '%</div><div><strong>中</strong> ' + u + '%</div></div></div>';
  }

  /* ---------- word cloud (pure CSS absolute layout, no appendChild) ---------- */
  function renderWordCloud() {
    var box = byId('wordCloud');
    if (!box) return;
    var words = (DATA.word_cloud || []).slice(0, 36);
    if (!words.length) { setText(box, '暂无词云'); return; }
    var maxW = words[0].weight || 1;
    var minW = words[words.length - 1].weight || 1;
    var parts = [];
    words.forEach(function (w, i) {
      var t = (w.weight - minW) / (maxW - minW || 1);
      var size = 11 + Math.round(t * 22);
      var colors = ['#1e1e1e', '#333', '#DB0011', '#666', '#444', '#b4000e'];
      var color = i < 3 ? '#DB0011' : colors[i % colors.length];
      var angle = i * 2.4;
      var radius = 8 + i * 3.2;
      var cx = 50 + Math.cos(angle) * Math.min(radius, 42) * (0.7 + (i % 3) * 0.1);
      var cy = 50 + Math.sin(angle) * Math.min(radius, 38) * 0.75;
      var h = ((w.text && w.text.charCodeAt(0)) || 0) * 17 + i * 31;
      h = h % 100;
      cx += (h % 7) - 3;
      cy += ((h * 3) % 7) - 3;
      cx = Math.max(6, Math.min(94, cx));
      cy = Math.max(8, Math.min(92, cy));
      parts.push(
        '<span style="left:' + cx.toFixed(1) + '%;top:' + cy.toFixed(1) + '%;font-size:' + size +
        'px;color:' + color + ';opacity:' + (0.55 + t * 0.45).toFixed(2) +
        '" title="' + esc(w.text) + ' · 权重 ' + esc(w.weight) + '">' + esc(w.text) + '</span>'
      );
    });
    setHTML(box, parts.join(''));
  }

  /* ---------- theme bars ---------- */
  function renderThemes() {
    var box = byId('themeBars');
    if (!box) return;
    var themes = DATA.themes || [];
    var max = themes.reduce(function (m, t) { return Math.max(m, t.count || 0); }, 1);
    setHTML(box, themes.map(function (t) {
      var lean = leanClass(t.sentiment_lean);
      var pct = Math.round(((t.count || 0) / max) * 100);
      return '<div class="bar-row">' +
        '<div class="name" title="' + esc(t.name) + '">' + esc(t.name) + '</div>' +
        '<div class="bar-track"><div class="bar-fill ' + esc(lean) + ' ' + esc(t.sentiment_lean || '') + '" style="width:' + pct + '%"></div></div>' +
        '<div class="cnt">' + (t.count || 0) + '</div></div>';
    }).join(''));
  }

  /* ---------- competitors ---------- */
  function renderCompetitors() {
    var box = byId('compTable');
    if (!box) return;
    var rows = DATA.competitors || [];
    var html = '<table class="comp-table"><thead><tr>' +
      '<th>机构</th><th>声量份额</th><th>情感倾向</th><th>说明</th></tr></thead><tbody>';
    rows.forEach(function (c) {
      var cls = c.name === '汇丰' ? 'hsbc' : '';
      var badge = c.placeholder ? ' <span class="pill demo">示意数据</span>' : '';
      var sov = Number(c.sov) || 0;
      html += '<tr class="' + cls + '"><td>' + esc(c.name) + badge + '</td>' +
        '<td><div class="bar-track" style="display:inline-block;width:80px;vertical-align:middle;margin-right:6px">' +
        '<div class="bar-fill' + (c.name === '汇丰' ? ' neg' : '') + '" style="width:' + sov + '%"></div></div>' +
        sov + '%</td>' +
        '<td><span class="lean-pill ' + esc(c.sentiment_lean) + '">' + leanZh(c.sentiment_lean) + '</span></td>' +
        '<td>' + esc(c.note || '') + '</td></tr>';
    });
    html += '</tbody></table>';
    setHTML(box, html);
  }

  function leanZh(l) {
    return ({ positive: '偏正', negative: '偏负', mixed: '分化', neutral: '中性' })[l] || l || '—';
  }

  /* ---------- risks / opps ---------- */
  function renderIssues() {
    var box = byId('issueGrid');
    if (!box) return;
    var risks = DATA.risks || [];
    var opps = DATA.opportunities || [];
    var html = '';
    risks.forEach(function (r) {
      html += '<div class="issue risk"><span class="sev">' + esc(r.severity) + '</span>' +
        '<div class="itag">风险</div><div class="ititle">' + esc(r.title) + '</div>' +
        '<div class="idetail">' + esc(r.detail) + '</div></div>';
    });
    opps.forEach(function (o) {
      html += '<div class="issue opp"><span class="sev">' + esc(o.severity) + '</span>' +
        '<div class="itag">机会</div><div class="ititle">' + esc(o.title) + '</div>' +
        '<div class="idetail">' + esc(o.detail) + '</div></div>';
    });
    setHTML(box, html || '<p class="card-muted">暂无风险/机会条目</p>');
  }

  /* ---------- voice / segment mix ---------- */
  function renderMix() {
    var vm = DATA.voice_mix || {};
    var total = (vm['真实商业相关'] || 0) + (vm['中介/企服'] || 0) + (vm['个人户噪声'] || 0) || 1;
    var colors = { '真实商业相关': '#1e1e1e', '中介/企服': '#DB0011', '个人户噪声': '#999' };
    var bar = byId('voiceMixBar');
    if (bar) {
      setHTML(bar, Object.keys(vm).map(function (k) {
        var pct = ((vm[k] / total) * 100).toFixed(1);
        return '<div class="mix-seg" style="width:' + pct + '%;background:' + (colors[k] || '#ccc') + '" title="' + esc(k) + ' ' + vm[k] + '">' +
          (Number(pct) > 12 ? pct + '%' : '') + '</div>';
      }).join(''));
    }
    var leg = byId('voiceMixLegend');
    if (leg) {
      setHTML(leg, Object.keys(vm).map(function (k) {
        return '<span><i style="background:' + (colors[k] || '#ccc') + '"></i>' + esc(k) + ' ' + vm[k] + '</span>';
      }).join(''));
    }

    var segBox = byId('segmentMix');
    if (segBox && DATA.segment_mix) {
      var max = DATA.segment_mix.reduce(function (m, s) { return Math.max(m, s.count || 0); }, 1);
      setHTML(segBox, DATA.segment_mix.map(function (s) {
        var w = Math.round(((s.count || 0) / max) * 100);
        return '<div class="bar-row"><div class="name">' + esc(s.name) + '</div>' +
          '<div class="bar-track"><div class="bar-fill" style="width:' + w + '%;background:#333"></div></div>' +
          '<div class="cnt">' + (s.count || 0) + '</div></div>';
      }).join(''));
    }
  }

  /* ---------- persona focus + insights ---------- */
  function renderPersonaBits() {
    setText(byId('oneLiner'), persona.one_liner || '');

    var focus = byId('focusWeek');
    if (focus) {
      setHTML(focus, (persona.focus_week || []).map(function (f) {
        return '<div class="focus-card"><div class="flabel">本周关注 · ' + esc(f.label) + '</div>' +
          '<div class="ftext">' + esc(f.text) + '</div></div>';
      }).join(''));
    }

    var ins = byId('insightList');
    if (ins) {
      setHTML(ins, (persona.insights || []).map(function (t) {
        return '<li>' + esc(t) + '</li>';
      }).join(''));
    }
  }

  /* ---------- page 2: filters + feed ---------- */
  var fd = DATA.filter_defaults || {};
  var filterState = {
    hideIntermediaries: !!fd.hideIntermediaries,
    hidePersonalNoise: !!fd.hidePersonalNoise,
    sentiment: '',
    category: '',
    q: ''
  };

  function initFilters() {
    var fInt = byId('fHideInt');
    var fPers = byId('fHidePers');
    var fSent = byId('fSentiment');
    var fCat = byId('fCategory');
    var fQ = byId('fSearch');
    if (fInt) {
      fInt.checked = filterState.hideIntermediaries;
      fInt.addEventListener('change', function () { filterState.hideIntermediaries = !!fInt.checked; renderFeed(); });
    }
    if (fPers) {
      fPers.checked = filterState.hidePersonalNoise;
      fPers.addEventListener('change', function () { filterState.hidePersonalNoise = !!fPers.checked; renderFeed(); });
    }
    if (fSent) {
      setHTML(fSent, '<option value="">全部情感</option><option>正面</option><option>负面</option><option>中性</option>');
      fSent.addEventListener('change', function () { filterState.sentiment = fSent.value; renderFeed(); });
    }
    if (fCat) {
      setHTML(fCat, '<option value="">全部分类</option>' + (DATA.categories || []).map(function (c) {
        return '<option value="' + esc(c) + '">' + esc(c) + '</option>';
      }).join(''));
      fCat.addEventListener('change', function () { filterState.category = fCat.value; syncTopicChips(); renderFeed(); });
    }
    if (fQ) {
      var t;
      fQ.addEventListener('input', function () {
        clearTimeout(t);
        t = setTimeout(function () { filterState.q = fQ.value; renderFeed(); }, 200);
      });
    }

    var topics = byId('topicChips');
    if (topics) {
      var chips = '<button type="button" class="topic-chip active" data-cat="">全部</button>' +
        (DATA.categories || []).map(function (c) {
          return '<button type="button" class="topic-chip" data-cat="' + esc(c) + '">' + esc(c) + '</button>';
        }).join('');
      setHTML(topics, chips);
      topics.addEventListener('click', function (e) {
        var btn = e.target && e.target.closest ? e.target.closest('.topic-chip') : null;
        if (!btn) return;
        var cat = btn.getAttribute('data-cat') || '';
        if (filterState.category === cat && cat) { cat = ''; }
        filterState.category = cat;
        if (fCat) fCat.value = cat;
        syncTopicChips();
        renderFeed();
      });
    }
  }

  function syncTopicChips() {
    var topics = byId('topicChips');
    if (!topics) return;
    $$('.topic-chip', topics).forEach(function (b) {
      b.classList.toggle('active', (b.getAttribute('data-cat') || '') === (filterState.category || ''));
    });
  }

  function renderFeed() {
    var posts = filterPosts(filterState);
    var countEl = byId('filterCount');
    var total = (DATA.posts || []).length;
    if (countEl) setText(countEl, '显示 ' + posts.length + ' / 共 ' + total + ' 条');

    var tbody = byId('postBody');
    if (!tbody) return;
    if (!posts.length) {
      setHTML(tbody, '<tr><td colspan="6" class="card-muted">无匹配帖子</td></tr>');
      return;
    }
    setHTML(tbody, posts.slice(0, 100).map(function (p) {
      var demo = p.is_placeholder ? '<span class="pill demo">示意</span> ' : '';
      var src = p.source_status === 'justone_api' ? '<span class="pill src">Just One</span>' : '<span class="pill demo">占位</span>';
      var comps = (p.competitors && p.competitors.length) ? p.competitors.join('、') : '—';
      return '<tr>' +
        '<td><div class="title">' + demo + esc(p.title || '（无标题）') + '</div>' +
        '<div class="summary">' + esc(p.summary || '') + '</div>' +
        '<div class="card-muted" style="margin-top:4px">' + esc(p.id || '') + '</div></td>' +
        '<td><span class="pill ' + esc(p.sentiment) + '">' + esc(p.sentiment) + '</span></td>' +
        '<td>' + esc(p.category || '—') + '</td>' +
        '<td>' + esc(p.author_type || '—') + '<div class="card-muted">' + esc(p.segment || '') + '</div></td>' +
        '<td>' + src + '<div class="card-muted">' + esc(p.published_at || '') + '</div></td>' +
        '<td class="card-muted">' + esc(comps) + '</td>' +
        '</tr>';
    }).join(''));
  }

  /* ---------- method page ---------- */
  function renderMethod() {
    var box = byId('methodBody');
    if (!box) return;
    var m = DATA.meta || {};
    var ms = DATA.management_summary || {};
    var k = DATA.kpis_clean || {};
    setHTML(box,
      '<h3>数据来源与口径</h3>' +
      '<ul>' +
      '<li><strong>主平台：</strong>' + esc(m.focus_platform || '小红书') + '</li>' +
      '<li><strong>样本：</strong>Just One API 实拉 ' + (k.justone_count || 0) + ' 条 + 占位 ' + (k.placeholder_count || 0) + ' 条（合计 ' + ((DATA.posts || []).length) + '）</li>' +
      '<li><strong>更新：</strong>' + esc(m.updated_at_display || '') + '</li>' +
      '<li><strong>默认过滤：</strong>隐藏中介/公司秘书/企服推广 + 隐藏个人户噪声；KPI 以清洗后口径汇报</li>' +
      '<li><strong>免责声明：</strong>' + esc(m.disclaimer || '') + '</li>' +
      '<li><strong>数据缺口：</strong>' + esc(m.data_gap_note || '') + '</li>' +
      '</ul>' +
      '<h3>声音质量说明</h3>' +
      '<p>' + esc(ms.voice_quality_note || '') + '</p>' +
      '<h3>示意数据标记</h3>' +
      '<p>竞品声量份额（SOV）、周情感趋势曲线、部分竞品情感倾向标有 <span class="pill demo">示意数据</span>，用于管理层沟通结构演示，非正式市占统计。帖子列表中来源为占位的条目亦有标记。</p>' +
      '<h3>推荐管理层行动</h3>' +
      '<ul>' + (ms.recommended_actions || []).map(function (a) { return '<li>' + esc(a) + '</li>'; }).join('') + '</ul>'
    );
  }

  /* ---------- boot ---------- */
  function boot() {
    safe('header', renderHeader);
    safe('tabs', initTabs);
    safe('kpis', renderKPIs);
    safe('sentiment', renderSentiment);
    safe('wordcloud', renderWordCloud);
    safe('themes', renderThemes);
    safe('competitors', renderCompetitors);
    safe('issues', renderIssues);
    safe('mix', renderMix);
    safe('persona', renderPersonaBits);
    safe('filters', initFilters);
    safe('feed', renderFeed);
    safe('method', renderMethod);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
