# Portfolio styling guide

Use this document when building or updating **any page, case study, or widget** so typography, color, and layout stay consistent. It is the **site-wide** reference.

**Specialized guides**

- **[Case study pages](CASE_STUDY_STYLE_GUIDE.md)** — `.caseStudy` layout: **Disney** = fastest template for typical pages (La Mer, etc.); **Snapchat** = AR / phone-frame gallery. Shared: **back link** (Oswald, `--cs-back`), **meta stack** lists. Import **`caseStudy.css`** + per-project CSS (see guide).

---

## Quick map: what lives where

| Area | Main CSS | Notes |
|------|----------|--------|
| Global tokens & reset | `src/App.css` | `:root` variables, scrollbar, focus, page transitions |
| Base font stack | `src/App.css` | `html, body` default (Roboto Slab); Lexend via `--font-main` on components |
| Home | `src/components/Home.css` | Hero, venture blocks, green accent |
| Work / portfolio grid | `src/components/Portfolio.css` | Oswald mega title, Vanta backdrop, cards |
| Navigation | `src/components/Navbar.css` | Pill bar, glass / solid scroll state |
| About (dark) | `src/components/About.css` | `html.about-page` overrides; brutalist mono + Oswald |
| Case studies | `src/components/work/caseStudy.css` | Shared shell + defaults |
| Case study reference (standard) | `src/components/work/Disney.css` + `Disney.js` | **Template** for type, spacing, meta stack, 2-up gallery frames (use for La Mer–style pages) |
| Case study reference (AR / phone) | `src/components/work/Snapchat.css` + `Snapchat.js` | Phone frame, asymmetric gallery, optional brand yellow hero |
| Shared case study base | `src/components/work/caseStudy.css` | Shell, **Oswald back link** (`--cs-back`), **`.caseStudy__metaStack`** |
| Per-project overrides | e.g. `lamer.css`, `CAH.css` | Scoped with `.caseStudy--project` |
| Backdrops | `src/components/backgrounds/*.css` | Home gradient (Vanta fog); Work/About globe (`VantaGlobeBackdrop`) |

Fonts are loaded in **`public/index.html`** (Lexend, Oswald, JetBrains Mono, etc.).

---

## Design tokens (`:root` in `App.css`)

These are the **canonical** names for new CSS. Prefer `var(...)` over hard-coding duplicates.

| Token | Role |
|-------|------|
| `--primary-bg` | Page background (`#fcfff6`) — matches `.App` |
| `--primary-text` | Default black text |
| `--text-editorial` | Case study / portfolio body (`#0b0b0b`) — slightly softer than pure black |
| `--font-main` | **Lexend** — UI, buttons, Home hero |
| `--font-display` | **Oswald** — large titles (Work page, About mega, case study heroes) |
| `--font-mono` | **JetBrains Mono** — labels, uppercase mono blocks, About body |
| `--border-hairline` | Dividers, meta grid (`rgba(11,11,11,0.2)`) |
| `--border-hairline-soft` | Light list rows |
| `--brand-green` | Primary accent (Home name line, primary CTA) |
| `--brand-green-soft` | Secondary green (subtitle, muted accents) |
| `--focus-ring` | Focus outline (`#1ee2e7`) — matches `App.css` `:focus` |
| `--nav-height-mobile` | `60px` at ≤768px |

Case study pages use **scoped** tokens on `.caseStudy` (e.g. `--cs-hero-title`, **`--cs-back`** for the back link). Large Oswald section titles and related overrides are documented in the [case study guide](CASE_STUDY_STYLE_GUIDE.md) and implemented on **Disney** and **Snapchat**.

---

## Typography system

| Use | Font | Typical locations |
|-----|------|-------------------|
| Display / impact | Oswald 600–700 | Work page title, About `about__megaTitle`, `.caseStudy__title` |
| UI & marketing blocks | Lexend (weights 600–900) | Home hero, cards |
| Editorial / systems | JetBrains Mono 500–700 | Case study eyebrows, subheads, meta labels, About (brutalist) |
| Long reading (default body) | Roboto Slab | Set on `html, body` in `App.css` where components do not override |

**Convention:** Uppercase + mono is intentional on case studies and many labels. Prefer **comma or period** over em dashes in body copy (site-wide).

---

## Color modes

1. **Light (default)** — Cream background (`--primary-bg`), black/near-black text. Navbar: frosted pill → solid cream (`#fcfff6`) on scroll (`Navbar.css`).

2. **About** — `html.about-page` switches to **black field / white type**; navbar gets dark glass overrides. Do not assume global `--primary-bg` on About without checking `About.css`.

---

## Layout & shells

| Pattern | Width / behavior |
|---------|------------------|
| Case study content | `min(1040px, calc(100vw - 48px))` — `.caseStudy__shell` |
| Work hero + grid | `calc(100vw - 8px)` with `4px` side margins — matches About mega band |
| Home hero inner | `min(560px, 92vw)` |
| Main content padding | `.main-content` gets horizontal padding at ≤768px / ≤480px (`App.css`) |

---

## Navigation

- Fixed **pill** centered top; `z-index: 120`.
- **Solid** state when content scrolls under the bar (`.topbar--solid`) for contrast.
- About page: larger type and dark styling via `html.about-page` selectors.

---

## Motion & accessibility

- **Page transitions:** `300ms` opacity + translate (`App.css` `.page-transition-*`).
- **Reduced motion:** Respect `prefers-reduced-motion` where animations exist (e.g. navbar breath).
- **Focus:** `outline: 2px solid var(--focus-ring)` with `:focus:not(:focus-visible)` reset.

---

## Widgets & overlays

- **Work page:** Full-viewport **Vanta globe** behind content (`z-index: -1`); cards stay readable with transparent → solid hover states per `Portfolio.css`.

---

## Checklist for new UI

1. Reuse **`App.css` tokens** before introducing new hex/rgba values.
2. Match **font roles** (display vs Lexend vs mono) to the closest existing page.
3. Case study routes → **`caseStudy.css`** + per-project CSS; match **[CASE_STUDY_STYLE_GUIDE.md](CASE_STUDY_STYLE_GUIDE.md)** (Disney template for typical pages, Snapchat for AR / phone UI).
4. Dark sections → follow **About** patterns or document a new subsection here.
5. After changing shared tokens or patterns, update **this file** and any affected specialized guide in the same PR.

---

## README

Project overview and scripts stay in the root **`README.md`**. Documentation index:

- **This file** — site-wide styling
- **`docs/CASE_STUDY_STYLE_GUIDE.md`** — case study detail pages (Disney = standard template, Snapchat = AR / phone patterns)
