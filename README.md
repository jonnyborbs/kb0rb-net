# KB0RB.net

The personal site of Jon, KB0RB — a static [Jekyll](https://jekyllrb.com) site published
to GitHub Pages at **[kb0rb.net](https://kb0rb.net)**.

No frameworks, no build step beyond Jekyll, and no client-side JavaScript apart from the
theme toggle and mobile menu.

## Running it locally

You need Ruby 3.x or newer (`brew install ruby`), then:

```bash
bundle install
```

```bash
bundle exec jekyll serve --livereload
```

The site is then at <http://localhost:4000>. Changes to files under `_data/`, `_layouts/`
and `_includes/` are picked up on save; changes to `_config.yml` need a restart.

## How it's put together

| Path | What lives there |
| --- | --- |
| `_config.yml` | Site title, description, URL, plugins |
| `_data/` | The site's content that isn't prose — see below |
| `_layouts/` | `default` (shell), `project` (a project page), `legal` (privacy policies) |
| `_includes/` | Header, footer, icons, and the reusable card blocks |
| `assets/css/main.css` | The whole stylesheet, with light/dark colour tokens at the top |
| `assets/js/site.js` | Theme toggle, mobile nav, header scroll state |
| `projects/` | One Markdown file per project, plus the privacy policy |

### Editing content without touching HTML

Most of what changes lives in `_data/`:

- **`_data/equipment.yml`** — the gear list. Add a line under the right `items:` block and
  it appears on the home page and `/equipment/`.
- **`_data/callsigns.yml`** — callsigns, DMR ID, grid, email, QRZ. Drives the contact card
  in both places it appears.
- **`_data/memberships.yml`** — club and organisation links in the contact card and footer.
- **`_data/projects.yml`** — the project cards. Each entry's `slug` must match the `slug:`
  in the matching file under `projects/`.
- **`_data/nav.yml`** — the header and footer navigation.

### Adding a project

Add an entry to `_data/projects.yml` with a unique `slug`, then give the card somewhere
to point — one of two ways, never both:

- **`url:`** — the project has its own website. The card title and its call to action
  open that site in a new tab, and nothing about the project is duplicated here.
  Greyline FT8 and We Have Wine at Home! work this way.
- **`page:`** — there is no dedicated site, so the project needs a page here. Create
  `projects/<slug>.md` with `layout: project`, the same `slug:`, and
  `permalink: /projects/<slug>/`. The layout pulls the name, tagline, icon and status
  from the data file, so the Markdown body is just the prose. AllStar Node Control
  works this way, and its privacy policy hangs off it.

**`appstore:`** adds Apple's "Download on the App Store" badge to the card. If a project
has no `appstore:` but does have a `status:`, that shows as a pill instead — which is how
AllStar Node Control shows "Coming soon to the App Store" until it ships.

**`icon_image:`** points at an app icon in `assets/img/`. Export it as a square around
256px; the CSS rounds the corners, so a full-bleed square with no rounding of its own is
the ideal source. Projects without one fall back to an SVG icon named by `icon:`.

Icons come from `_includes/icon.html` — add a `when "name"` branch there with the SVG paths
to introduce a new one.

### Social preview cards

Every page gets `og:image` from a default in `_config.yml` — the station photo,
`assets/img/og-image.jpg`. A page can override it by setting `image:` in its own front
matter, which is what `/projects/allstar-node-control/` does.

`scripts/make-og-card.py` builds a project card: the app icon on the site's dark
background beside the name, tagline and a short blurb, at the 1200×630 that link
previews expect. It needs nothing but macOS (`qlmanage` and `sips`):

```bash
scripts/make-og-card.py --icon assets/img/node-control-icon.png --title "AllStar Node Control" --tagline "Manage your AllStarLink node from your pocket" --line "Connect and disconnect links, watch node status, record" --line "custom command macros, and keep your favourite nodes a" --line "tap away. Everything stays on your device." --out assets/img/og-allstar-node-control.jpg
```

SVG has no automatic wrapping, so each `--line` is placed literally — break them yourself
at roughly 55 characters.

The text a preview actually shows comes from the page's `description:`, not the image, so
keep that to a couple of sentences and worth reading on its own.

Note there is deliberately no `twitter:` block in `_config.yml`; see the comment there.

## Deployment

`.github/workflows/deploy.yml` builds the site with Jekyll and publishes it with the
official GitHub Pages actions on every push to `main`. Pull requests run the same build
(plus an internal link check with html-proofer) without deploying.

For this to work, **Settings → Pages → Build and deployment → Source** must be set to
**GitHub Actions**.

The custom domain is held in `CNAME`. DNS for `kb0rb.net` should be four `A` records to
GitHub's apex addresses (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
`185.199.111.153`), with `www` as a `CNAME` to `jonnyborbs.github.io`.
