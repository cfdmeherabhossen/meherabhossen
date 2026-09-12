/* =========================================================
   Md. Meherab Hossen — portfolio behaviour
   No build step, no dependencies. Works on GitHub Pages.
   ========================================================= */
(function () {
  'use strict';

  var pages   = Array.prototype.slice.call(document.querySelectorAll('.page'));
  var navLinks= Array.prototype.slice.call(document.querySelectorAll('.menu a'));
  var rail    = document.getElementById('rail');
  var burger  = document.getElementById('burger');
  var scrim   = document.getElementById('scrim');
  var DEFAULT = 'home';

  /* ---------- page switching ---------- */
  function show(id, push) {
    var target = document.getElementById(id);
    if (!target || !target.classList.contains('page')) { id = DEFAULT; target = document.getElementById(id); }

    pages.forEach(function (p) { p.classList.toggle('is-active', p === target); });

    navLinks.forEach(function (a) {
      var on = a.getAttribute('href') === '#' + id;
      a.classList.toggle('is-current', on);
      if (on) { a.setAttribute('aria-current', 'page'); } else { a.removeAttribute('aria-current'); }
    });

    document.title = titleFor(id);
    if (push && location.hash !== '#' + id) { history.pushState(null, '', '#' + id); }
    window.scrollTo(0, 0);
  }

  function titleFor(id) {
    var link = document.querySelector('.menu a[href="#' + id + '"]');
    var label = link ? link.textContent.trim() : '';
    var base = 'Md. Meherab Hossen';
    return (id === 'home' || !label) ? base + ' — Mechanical Engineering, CFD & Thermal Sciences'
                                     : label + ' — ' + base;
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[data-page]') : null;
    if (!a) return;
    e.preventDefault();
    show(a.getAttribute('data-page'), true);
    closeRail();
  });

  window.addEventListener('hashchange', function () {
    show((location.hash || '#' + DEFAULT).slice(1), false);
  });

  show((location.hash || '#' + DEFAULT).slice(1), false);

  /* ---------- mobile drawer ---------- */
  function openRail() {
    rail.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    scrim.hidden = false;
  }
  function closeRail() {
    rail.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    scrim.hidden = true;
  }
  burger.addEventListener('click', function () {
    rail.classList.contains('is-open') ? closeRail() : openRail();
  });
  scrim.addEventListener('click', closeRail);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeRail(); });

  /* ---------- theme ---------- */
  var themeBtn = document.getElementById('theme');
  var label    = themeBtn.querySelector('.theme__txt');

  function store(key, val) { try { localStorage.setItem(key, val); } catch (err) {} }
  function read(key) { try { return localStorage.getItem(key); } catch (err) { return null; } }

  function setTheme(mode) {
    if (mode === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    themeBtn.setAttribute('aria-pressed', mode === 'dark' ? 'true' : 'false');
    label.textContent = mode === 'dark' ? 'Light' : 'Dark';
    store('theme', mode);
  }

  var saved = read('theme');
  if (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { saved = 'dark'; }
  setTheme(saved === 'dark' ? 'dark' : 'light');

  themeBtn.addEventListener('click', function () {
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  /* ---------- images that have not been added yet ---------- */
  document.addEventListener('error', function (e) {
    var img = e.target;
    if (!img || img.tagName !== 'IMG') return;
    var box = img.parentElement;
    if (!box) return;
    if (box.classList.contains('hero__img') || box.classList.contains('avatar') ||
        box.classList.contains('edu__logo')) {
      img.style.display = 'none';
      return;
    }
    box.classList.add('is-missing');
    box.setAttribute('data-hint', img.getAttribute('alt') || 'Image goes here');
  }, true);

  /* ---------- drop links that have not been filled in ---------- */
  // Video links stay hidden until you paste a real URL over the "#".
  Array.prototype.forEach.call(document.querySelectorAll('a[data-video]'), function (a) {
    var href = a.getAttribute('href');
    if (!href || href === '#') { a.remove(); }
  });

  // PDF links hide themselves until the file is actually uploaded, so a visitor
  // never lands on a 404. Skipped when opening the page straight off disk.
  if (location.protocol !== 'file:' && window.fetch) {
    Array.prototype.forEach.call(document.querySelectorAll('a[data-optional]'), function (a) {
      fetch(a.getAttribute('href'), { method: 'HEAD' })
        .then(function (r) { if (!r.ok) a.remove(); })
        .catch(function () { a.remove(); });
    });
  }

  /* ---------- year ---------- */
  var y = String(new Date().getFullYear());
  Array.prototype.forEach.call(document.querySelectorAll('#year, .year'), function (el) { el.textContent = y; });
})();
