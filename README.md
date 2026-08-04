# houta.dev

Personal site — Shoham Houta, Junior SOC Analyst. Static HTML/CSS/JS, no build step,
deployed to Cloudflare Pages.

## Files

| File | Purpose |
|---|---|
| `index.html` | All page content. Nothing is rendered by JavaScript. |
| `assets/styles.css` | Styles. Mobile-first, verified at 375px. |
| `assets/app.js` | Progressive enhancement only: nav, scroll reveal, email link injection. |
| `_headers` | Security headers and cache policy. |
| `assets/og.png` | 1200x630 social share image. |
| `tools/og-image.html` | Source for `assets/og.png`. Not served. |
| `.assetsignore` | Keeps `.git` and other repo plumbing out of the deployed assets. |
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

## Regenerating the share image

`tools/og-image.html` pulls Unbounded and Geist Mono from Google Fonts, so the render needs
network access. Edit that file, then:

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --virtual-time-budget=8000 --window-size=1200,630 \
  --screenshot=assets/og.png "file://$PWD/tools/og-image.html"
```

Keep at least 80px of clear space on every side, and re-check after any text change — the
name is close to the right edge at the current size.

## Local preview

```
python3 -m http.server 8787
```

## Deploy

Cloudflare, `npx wrangler deploy`, assets directory `.` (the repo root).

Because the assets directory is the repo root, **everything not listed in
`.assetsignore` is publicly reachable** at `houta.dev/<path>` — including `.git`
if it is not excluded. Check after any change to that file:

```
curl -sI https://houta.dev/.git/config | head -1   # expect 404
```

There is no `_redirects` file. Wrangler rejects absolute URLs there, and a
`/*  /index.html  200` fallback loops on a static site. Handle www → apex with a
Redirect Rule in the Cloudflare dashboard instead.
