/* Buildless portfolio: navigation, mobile drawer, theme and contact actions. */
(function () {
  'use strict';
  var pages = Array.from(document.querySelectorAll('.page'));
  var navLinks = Array.from(document.querySelectorAll('.menu a'));
  var rail = document.getElementById('rail');
  var burger = document.getElementById('burger');
  var scrim = document.getElementById('scrim');
  var main = document.getElementById('main');
  var mobile = window.matchMedia('(max-width: 960px)');
  function closeRail(returnFocus) {
    rail.classList.remove('is-open');
    document.body.classList.remove('drawer-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open navigation menu');
    scrim.hidden = true;
    rail.inert = mobile.matches;
    main.inert = false;
    if (returnFocus) burger.focus();
  }
  function show(fragment, push, focus) {
    var anchor = document.getElementById(fragment);
    var target = anchor && (anchor.classList.contains('page') ? anchor : anchor.closest('.page'));
    if (!target) { target = document.getElementById('home'); anchor = target; fragment = 'home'; }
    pages.forEach(function (page) { page.classList.toggle('is-active', page === target); });
    navLinks.forEach(function (link) {
      var current = link.hash === '#' + (fragment === 'about' ? 'about' : target.id);
      link.classList.toggle('is-current', current);
      if (current) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    document.querySelectorAll('video').forEach(function (video) { if (!target.contains(video)) video.pause(); });
    var heading = target.querySelector('h1');
    document.title = target.id === 'home' ? 'Md. Meherab Hossen — Mechanical Engineering, CFD & Thermal Sciences'
      : (heading ? heading.textContent.trim() : 'Portfolio') + ' — Md. Meherab Hossen';
    if (push && location.hash !== '#' + fragment) history.pushState(null, '', '#' + fragment);
    if (focus) {
      var destination = anchor === target ? (heading || main) : anchor;
      destination.setAttribute('tabindex', '-1');
      destination.focus({ preventScroll: true });
    }
    if (anchor !== target) requestAnimationFrame(function () { anchor.scrollIntoView({ block: 'start' }); });
    else window.scrollTo(0, 0);
  }
  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[data-page], a[href^="#"]');
    if (!link || event.button > 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || link.hash === '#main') return;
    var fragment = link.getAttribute('data-page') || link.hash.slice(1);
    if (!fragment) return;
    event.preventDefault();
    closeRail(false);
    document.querySelectorAll('.menu details[open]').forEach(function (details) { details.open = false; });
    show(fragment, true, true);
  });
  window.addEventListener('hashchange', function () { closeRail(false); show(location.hash.slice(1), false, true); });
  window.addEventListener('popstate', function () { closeRail(false); show(location.hash.slice(1), false, true); });
  burger.addEventListener('click', function () {
    if (rail.classList.contains('is-open')) return closeRail(true);
    rail.inert = false;
    main.inert = true;
    rail.classList.add('is-open');
    document.body.classList.add('drawer-open');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Close navigation menu');
    scrim.hidden = false;
    var firstLink = rail.querySelector('a');
    if (firstLink) firstLink.focus();
  });
  scrim.addEventListener('click', function () { closeRail(true); });
  mobile.addEventListener('change', function () { closeRail(false); });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      if (rail.classList.contains('is-open')) closeRail(true);
      document.querySelectorAll('.menu details[open]').forEach(function (details) { details.open = false; details.querySelector('summary').focus(); });
    }
    if (event.key !== 'Tab' || !rail.classList.contains('is-open')) return;
    var controls = [burger].concat(Array.from(rail.querySelectorAll('a, button, summary')))
      .filter(function (element) { return !element.disabled && element.getClientRects().length; });
    var first = controls[0], last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.menu__group')) document.querySelectorAll('.menu details[open]').forEach(function (details) { details.open = false; });
  });
  closeRail(false);
  show(location.hash.slice(1) || 'home', false, false);
  // The user's chosen behaviour: each visit starts in light mode.
  var theme = document.getElementById('theme');
  function setTheme(dark) {
    if (dark) document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    theme.setAttribute('aria-pressed', String(dark));
    theme.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    theme.querySelector('.theme__txt').textContent = dark ? 'Light' : 'Dark';
  }
  setTheme(false);
  theme.addEventListener('click', function () { setTheme(document.documentElement.getAttribute('data-theme') !== 'dark'); });
  var copy = document.getElementById('copy-email');
  var status = document.getElementById('copy-email-status');
  if (copy) copy.addEventListener('click', async function () {
    var email = copy.dataset.email;
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(email);
      status.textContent = 'Email address copied: ' + email;
    } catch (error) {
      status.textContent = 'Please select and copy the email address above: ' + email;
    }
  });
  document.querySelectorAll('#year, .year').forEach(function (element) { element.textContent = String(new Date().getFullYear()); });
})();
