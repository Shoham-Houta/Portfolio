# houta.dev

Personal site — Shoham Houta, Junior SOC Analyst. Static HTML/CSS/JS, no build step,
deployed to Cloudflare Pages.

## Files

| File | Purpose |
|---|---|
| `index.html` | All page content. Nothing is rendered by JavaScript. |
| `assets/styles.css` | Styles. Mobile-first, verified at 375px. |
| `assets/app.js` | Progressive enhancement only: nav, scroll reveal, email link injection. |
| `_headers` | Security headers and cache policy for Cloudflare Pages. |
| `_redirects` | www → apex, `/index.html` → `/`, SPA-style fallback. |
| `robots.txt` | Allows search crawlers, blocks AI and SEO scrapers. |

## Contact

There is no contact form and no backend. The contact section is a mailto link plus GitHub and
LinkedIn — nothing to host, nothing to break, no third-party endpoint.

The email address is stored split in `app.js` (`EMAIL_PARTS`) and reassembled at runtime, so
the literal string never appears in the served files. A human-readable `houta.shoham [at] gmail
[dot] com` fallback sits in a `<noscript>` block for visitors without JavaScript. No phone
number is published. Keep it that way.

Because there is no form, the CSP in `_headers` is strict: `connect-src 'none'` and
`form-action 'none'`. If a form is ever added back, both need loosening.

## Local preview

```
python3 -m http.server 8787
```

## Deploy

Cloudflare Pages, root directory `/`, no build command, output directory `/`.
