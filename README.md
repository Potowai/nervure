# ForgeWeb — Next.js Rebuild

A production-ready Next.js 14 rebuild of [forgeweb.in](https://www.forgeweb.in/) using the App Router, Tailwind CSS, and Framer Motion.

## Quick start

```bash
# 1. Install
npm install

# 2. Add missing assets to /public (see "Assets" below)

# 3. Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 14.2** (App Router)
- **React 18**
- **TypeScript** (strict)
- **Tailwind CSS 3.4** with custom design tokens
- **Framer Motion** for scroll reveals and UI transitions
- **Lucide React** for icons
- **Google Fonts**: Fraunces (display) + Geist (sans/mono)

## Project structure

```
.
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind + custom utilities (grain, grid, ember)
│   │   ├── layout.tsx         # Root layout + font wiring + metadata
│   │   └── page.tsx           # Main page — assembles all sections
│   ├── components/
│   │   └── sections/
│   │       ├── Navbar.tsx
│   │       ├── Hero.tsx
│   │       ├── ServicesTicker.tsx
│   │       ├── About.tsx
│   │       ├── TechStack.tsx
│   │       ├── Services.tsx
│   │       ├── Works.tsx
│   │       ├── Pricing.tsx
│   │       ├── Testimonials.tsx
│   │       ├── FAQ.tsx
│   │       ├── CTA.tsx
│   │       └── Footer.tsx
│   └── lib/
│       ├── cn.ts              # Tailwind class merger
│       └── content.ts         # ALL copy & data — edit this to change content
├── public/                    # Drop images and brochure here
├── tailwind.config.ts         # Design tokens
├── next.config.js
├── tsconfig.json
└── package.json
```

## Design tokens

All tokens live in `tailwind.config.ts`. Key decisions:

| Token | Value | Use |
|---|---|---|
| `bg.DEFAULT` | `#0A0A0A` | Page background |
| `bg.elevated` | `#111111` | Alternating sections |
| `bg.card` | `#161616` | Cards on elevated bg |
| `accent.DEFAULT` | `#FF5A1F` | Primary accent ("forge orange") |
| `accent.glow` | `#FF7A45` | Hover/active states |
| `fg.DEFAULT` | `#F5F5F5` | Body text |
| `fg.muted` | `#A1A1A1` | Secondary text |
| `fg.subtle` | `#6B6B6B` | Eyebrow labels, meta |
| `border.DEFAULT` | `#1F1F1F` | Light dividers |
| `border.strong` | `#2A2A2A` | Card borders |

**Fonts:** Fraunces for display (serif with optical sizing + WONK axis for italics), Geist for body and mono.

**Custom animations:** `marquee`, `marquee-reverse`, `spin-slow`. See `tailwind.config.ts`.

**Custom utilities** (in `globals.css`):
- `.grain` — SVG noise overlay
- `.grid-bg` — subtle grid backdrop
- `.ember-glow` — radial orange glow for heroes

## Assets needed

Drop these into `/public/` before running:

- `forgeweb-logo.png` — used in Navbar (currently a diamond glyph placeholder)
- `Ecommerce.png` — project card
- `project-landing.png` — project card
- `SkillShastra.png` — project card
- `brochure.pdf` (optional) — wired to the "Download Brochure" button

You can grab them from the live site at `https://www.forgeweb.in/<filename>`.

## Editing content

**All copy and data lives in `src/lib/content.ts`.** Edit there — no need to touch components for text changes.

Sections in order:
1. `Hero` — rotating word array: `heroRotatingWords`
2. `ServicesTicker` + `Services` — array: `services`
3. `About` — stats: `stats`
4. `TechStack` — two rows: `techStack.row1` / `techStack.row2`
5. `Works` — projects: `projects`
6. `Pricing` — niches, tiers, addons: `pricingNiches` / `pricingTiers` / `addons`
7. `Testimonials` — array: `testimonials`
8. `FAQ` — array: `faqs`
9. `Footer` — `site.contact`, `site.socials`

## Notes on fidelity

This rebuild was produced from the **public content and observable structure** of forgeweb.in. Exact colors, fonts, and animation timings are **principled inferences**, not extracted values. To match the original pixel-for-pixel:

1. Take screenshots of the live site.
2. Sample colors with a picker (e.g. [ColorZilla](https://www.colorzilla.com/)).
3. Adjust `accent.DEFAULT` and background shades in `tailwind.config.ts`.
4. If the original uses a different display font, swap `Fraunces` in `src/app/layout.tsx`.

## Deploy

The project is Vercel-ready:

```bash
vercel
```

Or push to GitHub and import the repo in the Vercel dashboard.

## License

Client project — all rights reserved to ForgeWeb.
