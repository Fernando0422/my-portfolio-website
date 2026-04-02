# Portfolio — Fernando Rojas

Personal portfolio site: work, skills, and case-study project pages. **Live:** [fernandorojas.xyz](https://fernandorojas.xyz)

## Overview

- **Stack:** React (Create React App), **HashRouter** (GitHub Pages–friendly URLs with `/#/…`), GSAP + Framer Motion, **Vanta** globe + **Three.js** for full-viewport backgrounds on Work and About.
- **UI:** Responsive layout with glass-style navigation, home, and portfolio surfaces; case-study tiles and detail pages tuned for mobile and desktop.
- **Hosting:** Static build on **GitHub Pages** (`gh-pages` branch). Asset base URL and custom domain come from `package.json` → `"homepage"` and `public/CNAME`.

## Features

- Route transitions with **AnimatePresence**; scroll-driven animation where **GSAP ScrollTrigger** is used.
- **Portfolio** grid linking to case-study routes (Disney, CAH, Snapchat, Mayan Roots, Dorothy’s Calculator, Lamer, etc.).
- **About** page with education, skills, and experience timeline.
- **404** routes redirect home.

## Tech

| Area | Packages |
|------|----------|
| App | `react`, `react-dom`, `react-router-dom`, `react-scripts` |
| Motion | `gsap`, `framer-motion` |
| 3D backdrop | `vanta`, `three` |

## Project layout (high level)

- `src/components/` — pages (`Home`, `About`, `Portfolio`, `Navbar`) and shared UI.
- `src/components/work/` — case study pages and widgets.
- `src/components/backgrounds/` — Vanta globe backdrop component (+ related CSS).
- `public/CNAME` — custom domain for GitHub Pages (`fernandorojas.xyz`).
- `docs/` — internal design references (see below).

## Documentation

- **[Styling guide](docs/STYLING_GUIDE.md)** — tokens, typography, page map, widgets.
- **[Case study style guide](docs/CASE_STUDY_STYLE_GUIDE.md)** — layout and tokens for project detail pages.

## Getting started

```bash
git clone https://github.com/Fernando0422/my-portfolio-website.git
cd my-portfolio-website
npm install
npm start
```

App runs at [http://localhost:3000](http://localhost:3000).

### Environment

- **`.env`** is gitignored. Use **`.env.example`** as a reference if you add local-only variables.
- Do **not** commit API keys or tokens. Anything prefixed with `REACT_APP_` is exposed in the browser build.

### Optional local-only code

A portfolio assistant (OpenAI) was removed from the **public** build; related files are listed in `.gitignore` so they stay off GitHub. To experiment locally, restore those files and wire a **server-side** API—never ship secret keys in the static site.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm start` | Dev server |
| `npm run build` | Production build → `build/` |
| `npm run deploy` | `predeploy` (build) + publish `build/` to **`gh-pages`** via `gh-pages` |

## Deployment

1. Push source to **`main`** as usual.
2. Run **`npm run deploy`** when you want the live site updated (updates the `gh-pages` branch).
3. In the repo: **Settings → Pages** — source should serve from **`gh-pages`** (typically `/ (root)`).
4. DNS at your registrar must point to GitHub Pages; **`public/CNAME`** must match the hostname you configure in Pages settings.

Live site: **https://fernandorojas.xyz**

## About

Creative front-end developer focused on clear UX, motion, and maintainable UI. Always learning new tools and patterns.

## Contact

- **Email:** fernando.rojas0422@gmail.com  
- **LinkedIn:** [linkedin.com/in/fernando-rojas0422](https://www.linkedin.com/in/fernando-rojas0422/)  
- **Site:** [fernandorojas.xyz](https://fernandorojas.xyz)
