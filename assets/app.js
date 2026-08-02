/* houta.dev — progressive enhancement only.
   All page content lives in index.html; nothing here is required to read the site. */

document.documentElement.classList.remove('no-js');

// Address kept split so the literal string never appears in the served file —
// regex-based harvesters scraping the source won't match it. A human-readable
// fallback for visitors without JavaScript sits in the <noscript> block in index.html.
const EMAIL_PARTS = { user: 'houta.shoham', domain: 'gmail.com' };
const emailAddress = () => EMAIL_PARTS.user + String.fromCharCode(64) + EMAIL_PARTS.domain;

const MAIL_ICON =
  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
  'stroke-width="1.8" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 ' +
  '2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>';

/* ────────────────────────────────────────────────────────────
   NAV
   ──────────────────────────────────────────────────────────── */

const toggle   = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

function closeNav() {
  toggle.classList.remove('open');
  navLinks.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}

toggle.addEventListener('click', () => {
  const open = !navLinks.classList.contains('open');
  toggle.classList.toggle('open', open);
  navLinks.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
});

navLinks.addEventListener('click', e => {
  if (e.target.tagName === 'A') closeNav();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navLinks.classList.contains('open')) {
    closeNav();
    toggle.focus();
  }
});

/* ────────────────────────────────────────────────────────────
   EMAIL LINK — injected at runtime, not present in the markup
   ──────────────────────────────────────────────────────────── */

(function injectEmail() {
  const host = document.getElementById('contact-direct');
  if (!host) return;
  const addr = emailAddress();
  const a = document.createElement('a');
  a.className = 'contact-item contact-item-lg contact-item-primary';
  a.href = 'mailto:' + addr;
  a.innerHTML = MAIL_ICON;
  a.appendChild(document.createTextNode(addr));
  host.prepend(a);
})();

/* ────────────────────────────────────────────────────────────
   REVEAL ON SCROLL
   ──────────────────────────────────────────────────────────── */

(function initReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(t => t.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.06 });
  targets.forEach(t => obs.observe(t));
})();
