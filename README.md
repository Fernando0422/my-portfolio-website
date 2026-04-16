# Portfolio — Fernando Rojas

Personal portfolio site: work, skills, and case-study project pages. **Live:** [fernandorojas.xyz](https://fernandorojas.xyz)

## Overview

- **Stack:** React (Create React App), **HashRouter** (GitHub Pages–friendly URLs with `/#/…`), GSAP + Framer Motion, **Vanta** globe + **Three.js** for full-viewport backgrounds on Work and About.
- **UI:** Responsive layout with glass-style navigation, home, and portfolio surfaces; case-study tiles and detail pages tuned for mobile and desktop.
- **Hosting:** Production is deployed on **Vercel** (push to `main` triggers a build). `vercel.json` adds SPA-friendly rewrites. **`public/CNAME`** is only relevant if you still publish to **GitHub Pages**; it does not configure Vercel.

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
- `public/CNAME` — used by GitHub Pages if you deploy there; optional for Vercel-only hosting.
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

## Deployment (Vercel)

1. Connect the GitHub repo to Vercel and deploy from **`main`** (default **Build Command:** `npm run build`, **Output Directory:** `build`).
2. In Vercel: **Project → Settings → Domains** — add `fernandorojas.xyz` and `www.fernandorojas.xyz` if needed. Use the **DNS records Vercel shows** for your registrar (do not reuse GitHub Pages records).

### If the custom domain does not load but the `.vercel.app` URL works

Your registrar DNS is still sending traffic **elsewhere** (often **GitHub Pages**). For **Namecheap → Advanced DNS**:

- Remove **A** records for `@` that point to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (those are GitHub Pages).
- Remove **`www`** **CNAME** pointing to `fernando0422.github.io` (also GitHub Pages).
- Add the records **Vercel lists** for your domain. Commonly the apex uses an **A** record for `@` (for example Vercel’s current value from their UI — often **`76.76.21.21`**) and **`www`** is a **CNAME** to **`cname.vercel-dns.com`** (confirm in **Vercel → Domains → your domain → DNS**; values can change).

Wait for DNS propagation (minutes to a few hours). In GitHub: **Repo → Settings → Pages** — remove the custom domain from Pages if it is still set there so only **one** host serves `fernandorojas.xyz`.

### Optional: GitHub Pages

You can still publish to **`gh-pages`** with `npx gh-pages -d build` if you add a **`homepage`** in `package.json` again for that workflow only.

Live site: **https://fernandorojas.xyz**

## About

Creative front-end developer focused on clear UX, motion, and maintainable UI. Always learning new tools and patterns.

## Contact

- **Email:** fernando.rojas0422@gmail.com  
- **LinkedIn:** [linkedin.com/in/fernando-rojas0422](https://www.linkedin.com/in/fernando-rojas0422/)  
- **Site:** [fernandorojas.xyz](https://fernandorojas.xyz)
