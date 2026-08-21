# KB0RB.net

The personal site of Jon, KB0RB — **[kb0rb.net](https://kb0rb.net)**.

Plain HTML and CSS. No build step, no generator, no dependencies. What is in this repo
is exactly what gets served. Edit a file, commit, and GitHub Pages publishes it.

## Running it locally

Any static file server will do. With Python, from the repo root:

```bash
python3 -m http.server 4000
```

Then <http://localhost:4000>. Opening the `.html` files directly with `file://` mostly
works too, but the absolute paths (`/assets/...`, `/projects/...`) will not resolve, so
the server is the better option.

## Layout

| Path | What it is |
| --- | --- |
| `index.html` | Home — hero, contact card, about, projects, equipment |
| `projects/index.html` | Projects index |
| `projects/allstar-node-control/index.html` | AllStar Node Control |
| `projects/allstar-node-control/privacy/index.html` | Its privacy policy — the URL Apple's App Review points at |
| `equipment/index.html` | Equipment |
| `contact/index.html` | Contact |
| `404.html` | Not found |
| `assets/css/main.css` | The whole stylesheet, colour tokens at the top |
| `assets/js/site.js` | Theme toggle, mobile menu, header scroll state |
| `sitemap.xml`, `robots.txt` | Hand-maintained |
| `scripts/make-og-card.py` | Generates a social preview card (see below) |

Each page is a directory with an `index.html` so the URLs stay clean — `/contact/`, not
`/contact.html`.

## The tradeoff you are living with

There is no templating, so **the shell of every page is duplicated**: `<head>`, the icon
sprite, the header and the footer are the same markup in all seven files. That is the
price of having no build step, and it is the one thing to be careful about.

When you change any of the following, change it in **all seven** pages:

- the nav (both the header and the footer copies)
- the footer — including the copyright year
- anything in `<head>` that is not the page's own title/description/social tags
- the icon sprite

`grep -rl 'the old text' --include='*.html' .` will find every file that needs the edit.
Everything else — page content, the stylesheet, the JavaScript — lives in exactly one
place and is safe to edit on its own.

## Icons

Each page carries an inline SVG sprite near the top of `<body>`: a `<defs>` block of
`<symbol>` elements, one per icon, hidden by the `.sprite` rule. Icons are then used as:

```html
<svg class="icon" aria-hidden="true" focusable="false"><use href="#i-radio"/></svg>
```

They inherit `currentColor`, so they follow the theme. The sprite is inlined rather than
loaded from an external file because Safari does not reliably support `<use>` pointing at
a separate SVG document.

## Social preview cards

Every page carries its own `og:` and `twitter:` tags. `og:image` is the station photo
(`assets/img/og-image.jpg`) except on the AllStar Node Control page, which uses a
purpose-built card.

`scripts/make-og-card.py` builds one of those cards — the app icon on the site's dark
background beside the name, tagline and a short blurb, at the 1200×630 that link previews
expect. It needs nothing but macOS (`qlmanage` and `sips`):

```bash
scripts/make-og-card.py --icon assets/img/node-control-icon.png --title "AllStar Node Control" --tagline "Manage your AllStarLink node from your pocket" --line "Connect and disconnect links, watch node status, record" --line "custom command macros, and keep your favourite nodes a" --line "tap away. Everything stays on your device." --out assets/img/og-allstar-node-control.jpg
```

SVG has no automatic wrapping, so each `--line` is placed literally — break them yourself
at roughly 55 characters.

The text a link preview actually shows comes from the page's `<meta name="description">`,
not from the image, so keep that to a couple of sentences worth reading on their own.

Social scrapers cache aggressively. After changing a card, force a refresh with
[Facebook's Sharing Debugger](https://developers.facebook.com/tools/debug/) or
[LinkedIn's Post Inspector](https://www.linkedin.com/post-inspector/); iMessage is the
stubborn one.

## Deployment

**Settings → Pages → Build and deployment → Source** must be **Deploy from a branch**,
branch `main`, folder `/ (root)`. There is no Actions workflow and nothing to build —
GitHub serves these files as they are.

`.nojekyll` matters: without it GitHub Pages would run the files through Jekyll on its
way out the door. It is empty on purpose.

The custom domain lives in `CNAME`. DNS for `kb0rb.net` is four `A` records to GitHub's
apex addresses (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
`185.199.111.153`), with `www` a `CNAME` to `jonnyborbs.github.io`.
