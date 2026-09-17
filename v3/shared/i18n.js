/* HSBC SL i18n — v3 Keyword Explorer · 简体 | EN */
(function (global) {
  'use strict';
  var STORAGE_KEY = 'hsbc-sl-lang';
  var UI = {
    zh: {
      'v3.title': '汇丰香港 · 关键词探索器 v3',
      'v3.sub': 'Keyword Explorer · 社交聆听',
      'v3.h1': '关键词探索器',
      'v3.lead': '输入一个或多个关键词（逗号分隔），由安全流水线拉取小红书公开样本并生成可永久打开的分析页。浏览器不持有 API 密钥。',
      'v3.back': '← 返回 v2 看板套件',
      'v3.keywords': '关键词',
      'v3.keywords_ph': '例如：ODI, 837 号令, 汇丰 公司户',
      'v3.run': '开始分析',
      'v3.run_en': 'Run analysis',
      'v3.status_idle': '分析报告由安全流水线生成后会出现在下方「已保存分析」。本页会记住您最近输入的关键词。',
      'v3.status_saved': '已保存关键词到本地。请运行流水线生成报告，或在下方打开已有分析。',
      'v3.status_api': '正在请求同域 /api …',
      'v3.status_api_fail': '同域 /api 不可用。关键词已存入本地；请使用 pipeline 脚本生成报告。',
      'v3.honest': '说明：实时检索经安全流水线执行（密钥永不进入浏览器）。本页提供表单记忆与已保存报告库；实际跑数请用 v3/pipeline/run_keyword_analysis.py。',
      'v3.library': '已保存分析',
      'v3.library_empty': '暂无已保存分析。运行流水线后将出现在此列表。',
      'v3.posts': '帖',
      'v3.created': '创建',
      'v3.open': '打开报告 →',
      'v3.footer': '汇丰银行香港 · 商业银行 · Keyword Explorer v3 · 主题参考 business.hsbc.com.hk · 内部演示'
    },
    en: {
      'v3.title': 'HSBC HK · Keyword Explorer v3',
      'v3.sub': 'Keyword Explorer · Social Listening',
      'v3.h1': 'Keyword Explorer',
      'v3.lead': 'Enter one or more keywords (comma-separated). A secure pipeline fetches Xiaohongshu public samples and writes reopenable analysis pages. API keys never live in the browser.',
      'v3.back': '← Back to v2 dashboard suite',
      'v3.keywords': 'Keywords',
      'v3.keywords_ph': 'e.g. ODI, 837 号令, HSBC corporate account',
      'v3.run': '开始分析',
      'v3.run_en': 'Run analysis',
      'v3.status_idle': 'Saved reports appear below after the pipeline runs. This page remembers your last keywords locally.',
      'v3.status_saved': 'Keywords saved locally. Run the pipeline to generate a report, or open an existing analysis below.',
      'v3.status_api': 'Calling same-origin /api …',
      'v3.status_api_fail': 'Same-origin /api unavailable. Keywords stored locally; use the pipeline script to generate reports.',
      'v3.honest': 'Note: live search runs via a secure pipeline (keys never in the browser). This page stores last keywords and lists saved reports; the runner is v3/pipeline/run_keyword_analysis.py.',
      'v3.library': 'Saved analyses',
      'v3.library_empty': 'No saved analyses yet. They will appear here after the pipeline runs.',
      'v3.posts': 'posts',
      'v3.created': 'Created',
      'v3.open': 'Open report →',
      'v3.footer': 'HSBC Hong Kong · Commercial Banking · Keyword Explorer v3 · theme ref. business.hsbc.com.hk · internal demo'
    }
  };

  var lang = 'zh';
  var listeners = [];

  function detect() {
    try {
      var q = new URLSearchParams(location.search || '');
      var ql = (q.get('lang') || '').toLowerCase();
      if (ql === 'en' || ql === 'zh' || ql.indexOf('zh') === 0) {
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
    listeners.forEach(function (fn) { try { fn(lang); } catch (err) {} });
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

  function applyDom(root) {
    root = root || document;
    root.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!key) return;
      var val = t(key);
      if (el.getAttribute('data-i18n-attr') === 'placeholder') {
        el.setAttribute('placeholder', val);
      } else {
        el.textContent = val;
      }
    });
    var titleEl = root.querySelector('title[data-i18n]');
    if (titleEl) titleEl.textContent = t(titleEl.getAttribute('data-i18n'));
  }

  function syncToggle() {
    document.querySelectorAll('.lang-toggle button').forEach(function (b) {
      var L = b.getAttribute('data-lang');
      b.classList.toggle('active', L === lang);
      b.setAttribute('aria-pressed', L === lang ? 'true' : 'false');
      b.textContent = L === 'zh' ? (lang === 'en' ? 'SC' : '简体') : 'EN';
    });
  }

  function mountToggle(host) {
    host = host || document.getElementById('langToggleHost');
    if (!host) return;
    if (host.querySelector('.lang-toggle')) { syncToggle(); return; }
    host.innerHTML =
      '<div class="lang-toggle" role="group" aria-label="Language">' +
      '<button type="button" data-lang="zh">简体</button>' +
      '<button type="button" data-lang="en">EN</button></div>';
    host.addEventListener('click', function (e) {
      var btn = e.target && e.target.closest ? e.target.closest('button[data-lang]') : null;
      if (!btn) return;
      setLang(btn.getAttribute('data-lang'));
    });
    syncToggle();
  }

  function onChange(fn) { if (typeof fn === 'function') listeners.push(fn); }
  function isEn() { return lang === 'en'; }

  global.HSBC_V3_I18N = {
    t: t, setLang: setLang, applyDom: applyDom, mountToggle: mountToggle,
    onChange: onChange, isEn: isEn, getLang: function () { return lang; }
  };

  function boot() {
    lang = detect();
    try {
      document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
      document.documentElement.setAttribute('data-lang', lang);
    } catch (e) {}
    mountToggle();
    applyDom(document);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})(typeof window !== 'undefined' ? window : this);
