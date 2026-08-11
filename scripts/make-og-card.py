#!/usr/bin/env python3
"""Render a 1200x630 social preview card for a project.

Draws the project's app icon alongside its name, tagline and a short blurb, on
the site's dark background. Run it whenever a project's icon or pitch changes,
then point that project's page at the result with `image:` in its front matter.

Usage:
    scripts/make-og-card.py \\
        --icon assets/img/node-control-icon.png \\
        --title "AllStar Node Control" \\
        --tagline "Run your AllStarLink node from your pocket" \\
        --line "Connect and disconnect links, watch node status, record" \\
        --line "custom command macros, and keep your favourite nodes a" \\
        --line "tap away. Everything stays on your device." \\
        --out assets/img/og-allstar-node-control.jpg

Lines are placed literally — SVG has no automatic wrapping — so break them
yourself at roughly 55 characters. Feed it the largest icon you have (1024px
is ideal); it is scaled down here, so quality comes from the source.

macOS only: it shells out to `qlmanage` to rasterise the SVG and `sips` to
crop and encode. No third-party Python packages required.
"""

import argparse
import base64
import subprocess
import sys
from pathlib import Path

CARD_W, CARD_H = 1200, 630

# qlmanage always renders into a square canvas, so lay the artwork out in a
# 1200x1200 SVG with the card centred, then crop the middle band back out.
CANVAS = CARD_W
TOP = (CANVAS - CARD_H) // 2

BG_A, BG_B = "#020818", "#0d1a33"   # matches --background in main.css
PRIMARY = "#3c83f6"                  # hsl(217 91% 60%)
FG = "#f8fafc"
MUTED = "#94a3b8"

FONT = "SF Pro Display, -apple-system, Helvetica Neue, Helvetica, Arial, sans-serif"
MONO = "SF Mono, Menlo, monospace"

ICON_SIZE = 260
ICON_X = 90
TEXT_X = ICON_X + ICON_SIZE + 70


def escape(text):
    return (text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))


def build_svg(icon_path, title, tagline, lines, wordmark):
    icon_b64 = base64.b64encode(Path(icon_path).read_bytes()).decode()
    icon_y = TOP + (CARD_H - ICON_SIZE) // 2

    body = "".join(
        f'<tspan x="{TEXT_X}" dy="{0 if i == 0 else 42}">{escape(line)}</tspan>'
        for i, line in enumerate(lines)
    )

    return f'''<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     width="{CANVAS}" height="{CANVAS}" viewBox="0 0 {CANVAS} {CANVAS}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="{BG_A}"/>
      <stop offset="100%" stop-color="{BG_B}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.78" cy="0.16" r="0.55">
      <stop offset="0%" stop-color="{PRIMARY}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="{PRIMARY}" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="squircle">
      <rect x="{ICON_X}" y="{icon_y}" width="{ICON_SIZE}" height="{ICON_SIZE}" rx="58" ry="58"/>
    </clipPath>
  </defs>

  <rect width="{CANVAS}" height="{CANVAS}" fill="url(#bg)"/>
  <rect width="{CANVAS}" height="{CANVAS}" fill="url(#glow)"/>

  <image x="{ICON_X}" y="{icon_y}" width="{ICON_SIZE}" height="{ICON_SIZE}"
         clip-path="url(#squircle)" preserveAspectRatio="xMidYMid slice"
         xlink:href="data:image/png;base64,{icon_b64}"/>
  <rect x="{ICON_X}" y="{icon_y}" width="{ICON_SIZE}" height="{ICON_SIZE}" rx="58" ry="58"
        fill="none" stroke="#ffffff" stroke-opacity="0.14" stroke-width="2"/>

  <text x="{TEXT_X}" y="{TOP + 232}" font-family="{FONT}" font-size="66" font-weight="700"
        fill="{FG}" letter-spacing="-1.5">{escape(title)}</text>
  <text x="{TEXT_X}" y="{TOP + 288}" font-family="{FONT}" font-size="32" font-weight="600"
        fill="{PRIMARY}">{escape(tagline)}</text>
  <text x="{TEXT_X}" y="{TOP + 356}" font-family="{FONT}" font-size="28" font-weight="400"
        fill="{MUTED}">{body}</text>

  <text x="{TEXT_X}" y="{TOP + 508}" font-family="{MONO}" font-size="26" font-weight="500"
        fill="{FG}" fill-opacity="0.55">{escape(wordmark)}</text>
</svg>'''


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--icon", required=True, help="square app icon, 1024px ideally")
    ap.add_argument("--title", required=True)
    ap.add_argument("--tagline", required=True)
    ap.add_argument("--line", action="append", default=[], dest="lines",
                    help="one line of the blurb; repeat for each line")
    ap.add_argument("--wordmark", default="KB0RB.net")
    ap.add_argument("--out", required=True, help="destination .jpg")
    args = ap.parse_args()

    out = Path(args.out)
    svg = out.with_suffix(".svg")
    rendered = svg.with_suffix(".svg.png")

    svg.write_text(build_svg(args.icon, args.title, args.tagline,
                             args.lines, args.wordmark))
    try:
        rendered.unlink(missing_ok=True)
        subprocess.run(["qlmanage", "-t", "-s", str(CANVAS), "-o", str(svg.parent), str(svg)],
                       check=True, capture_output=True)
        if not rendered.exists():
            sys.exit("qlmanage produced no output — is the SVG valid?")
        subprocess.run(["sips", "-c", str(CARD_H), str(CARD_W), str(rendered),
                        "-s", "format", "jpeg", "-s", "formatOptions", "90",
                        "--out", str(out)], check=True, capture_output=True)
    finally:
        svg.unlink(missing_ok=True)
        rendered.unlink(missing_ok=True)

    print(f"wrote {out} ({out.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
