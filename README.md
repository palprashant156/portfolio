# Prashant Pal — Full Stack Developer Portfolio (Next.js)

Apple-style **Cupertino Editorial** portfolio ported from Google Stitch (`projects/16269005212135830421 — Apple-Style Developer Portfolio`) to **Next.js 15 App Router** with local Tailwind.

## Stack
- **Framework**: Next.js 15.2.3 (App Router, `app/`), React 19, TypeScript 5
- **Styling**: Tailwind CSS 3.4.17 (local build, no CDN) — tokens from Stitch `tailwind.config` at `tailwind.config.js:5`
- **Canvas**: `#1D1D1F` (dark) / `#FFFFFF` (light) alternating editorial rhythm
- **Accent**: `#0071E3` electric blue (`#0077ED` hover)
- **Typography**: Inter (headlines/body) via `next/font/google` + JetBrains Mono (labels) + Material Symbols Outlined via Google Fonts link in `app/layout.tsx:44`
- **Rounded**: `full` pills / `2xl-3xl` cards
- **Effects**: `backdrop-blur-xl saturate-180%`, hairline `rgba(255,255,255,0.08)` borders, `0 24px 64px -12px rgba(0,0,0,0.45)` ambient shadows

## Project Structure
```
portfolio0/
├── app/
│   ├── layout.tsx      # RootLayout: html.dark, Inter+JetBrains fonts, SEO, JSON-LD, viewport
│   ├── page.tsx        # Client page — ports stitch-reference.html (410 className, header/main/footer + copy+scroll logic)
│   └── globals.css     # @tailwind base/components/utilities + Stitch base (overscroll, scrollbar, smooth scroll)
├── public/             # static assets
├── tailwind.config.js  # Stitch tokens: colors, borderRadius, spacing, fontFamily, fontSize
├── postcss.config.mjs  # tailwindcss + autoprefixer
├── next.config.mjs     # nextConfig
├── tsconfig.json       # bundler, @/* alias
├── DESIGN.md           # Stitch designMd (Cupertino Editorial, 231 lines)
├── PRD.md              # PRD from second screen (868544ee1d524770b15d9b28204b57da, 150 lines)
├── stitch-reference.html # Original Stitch export (655 lines, 52KB) — backup reference
├── opencode.json       # Stitch MCP: https://stitch.googleapis.com/mcp via X-Goog-Api-Key
└── .gitignore
```

## Source — Stitch Project
- **Project**: `projects/16269005212135830421`
- **Title**: Apple-Style Developer Portfolio (`Cupertino Editorial`)
- **Screen**: `bb1ee02a18e44ceeb5afc548ccb2b535` — "Prashant Pal — Full Stack Developer Portfolio" (2560×16218, DESKTOP) → `app/page.tsx:1`
- **Design System**: `INTER` / `JETBRAINS_MONO`, `FIDELITY` / `DARK` with `#0071e3` seed — extracted to `tailwind.config.js:11`
- **Other screen**: `868544ee1d524770b15d9b28204b57da` → `PRD.md:1`
- **MCP**: `stitch` remote at `https://stitch.googleapis.com/mcp` via `X-Goog-Api-Key` (see `opencode.json:4`)

## Run Locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # next build → .next (8.47kB page, 109kB First Load)
npm start        # http://localhost:3000 (after build)
```

Build verified: `next build` ✓ compiled, 4 static pages, no warnings (viewport fixed at `app/layout.tsx:24`).

## Sections (per Stitch, now in `app/page.tsx`)
1. **Header** — Fixed frosted glass (`bg-canvas-dark/80 backdrop-blur-xl`), nav anchor links + "Get in touch" pill
2. **Hero** — Cinematic dark with radial glow, pill badge, 3 metric proofs
3. **About** — Gallery white, philosophy pull-quote + 4 bento stats (40% stability, 30% memory, 30% engagement, 40% LCP)
4. **Projects (4)** — Alternating dark/light showcase + telemetry mockups:
   - Digital Payment Fraud Monitoring (`MongoDB/Express/React/Node/WebSocket/GeoIP`, -15% fraud)
   - Doomscrolling Tracker Analytics (`React/Node/Express/Mongo/Tailwind`, +21% retention)
   - Daily Fuel Reservation Analytics (`React/Node/Express/Mongo/Vercel`, +35% interactions)
   - Quick Serve Marketplace (`React/Node/Mongo/REST`, +22% retention)
5. **Experience** — Timeline (MediaNv Aidos Pvt Ltd Dec 2025–Present, My Virtual Team May–Nov 2024)
6. **Skills** — 4-bento matrix (Frontend / Backend / Databases / Cloud & DevOps)
7. **Certifications** — Strip (AWS Coursera, IBM edX, Cybrary, Coursera)
8. **Contact** — `palprashant156@gmail.com` copy chip (React `useState` at `app/page.tsx:7` + `handleCopy`) + LinkedIn/GitHub pills
9. **Footer** — 3-col Cupertino

Interactivity in `app/page.tsx:14` (`useEffect`): smooth anchor scroll + `IntersectionObserver` active nav highlight.

## Key Files
- `app/layout.tsx:1` — entry layout, fonts, metadata
- `app/page.tsx:1` — ported Stitch HTML (JSX, `className`, SVG fixes, `{/* comments */}`, copy button)
- `app/globals.css:1` — Tailwind directives
- `tailwind.config.js:5` — Stitch tokens
- `opencode.json:4` — MCP stitch config
- `stitch-reference.html:1` — original export (for diff)

## Deployment
Next.js static — deploy `.next` to Vercel (zero-config):
```bash
npm run build
# Vercel auto-detects next.config.mjs
# Or: npx vercel
# Or Docker: next start on port 3000
```

Static export alternative: `next build` already prerenders `/` as static (see route `○ /`).

## Restart opencode
Config hot-reloads only on restart. After editing `opencode.json`, quit & restart opencode to reconnect Stitch MCP.
