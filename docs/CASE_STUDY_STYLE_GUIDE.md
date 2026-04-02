# Case study pages — style guide

**Site-wide tokens:** **[STYLING_GUIDE.md](./STYLING_GUIDE.md)** (`:root` in `src/App.css`).

---

## Canonical references (match these)

There are **two** reference implementations—pick the one closest to the project:

| Use when… | Reference files | Scoped class |
|-----------|-----------------|--------------|
| **Standard work page** (overview, meta grid, gallery, footer CTAs)—e.g. **La Mer**, CAH, Dorothy’s, **MayanRoots** | **`Disney.js`** + **`Disney.css`** | **`.caseStudy--disney`** (copy → **`.caseStudy--lamer`**, **`.caseStudy--mayanroots`**, etc.) |
| **AR / lens / phone-native** deliverables, asymmetric gallery, external program link | **`Snapchat.js`** + **`Snapchat.css`** | **`.caseStudy--snapchat`** |

**Disney** is the fastest template for “normal” case studies: it already includes the Snapchat-aligned **type scale**, **spacing**, **meta layout**, and **gallery framing** without Snapchat-only UI (phone mockup, Snap Academies callout).

**Pattern:** `<article className="caseStudy caseStudy--projectSlug">` + import **`caseStudy.css`** + **`ProjectSlug.css`**.

---

## Shared `caseStudy.css` (every case study)

These ship globally—no per-project file needed:

| Addition | Purpose |
|----------|---------|
| **`--cs-back`** | `clamp(20px, 2.35vw, 30px)` — back link size token |
| **`.caseStudy__back`** | **Oswald** (`"Oswald", var(--font-main)`), **700**, `font-size: var(--cs-back)`, tracking **`-0.05em`**, color **`rgba(0, 0, 0, 0.88)`** — same family as the hero title, smaller than **`--cs-hero-title`**. |
| **`.caseStudy__metaStack`** | `display: flex; flex-direction: column; gap: 0.5em`; **no list markers**. Use on **`<ul className="caseStudy__metaValue caseStudy__metaStack">`** with **`<li>`** per line so **SERVICE** / **INDUSTRY** / **TIMELINE** lines do not wrap awkwardly mid-**`·`**. |

**CHALLENGE**-style prose stays a **`<p className="caseStudy__metaValue">`**.

---

## Typography — target scale (Snapchat / Disney aligned)

**Principle:** **Oswald** (`var(--font-display)`) for hero title, **section titles**, **meta column labels**, **tool row titles**, and **subhead kickers** (when used). **JetBrains Mono** for subhead body, meta values, overview, lists, tools body.

Per-project overrides live in **`Snapchat.css`** or **`Disney.css`** (same numeric values; scope with **`.caseStudy--snapchat`** or **`.caseStudy--disney`**).

### Hero

| Class | Target styling |
|-------|----------------|
| `.caseStudy__back` | See **Shared `caseStudy.css`** above (Oswald, `--cs-back`). Per-project files may add **`margin-bottom: clamp(28px, 4vw, 40px)`** only. |
| `.caseStudy__eyebrow` | Mono, `var(--cs-hero-eyebrow)` (shared). Disney/Snapchat increase margin below eyebrow with `clamp`. |
| `.caseStudy__title` | Oswald **700**, `var(--cs-hero-title)`, **`-0.08em`** (shared). |
| `.caseStudy__subhead` + intro modifier | Single or multi-line intro: use **`caseStudy__subhead--disneyIntro`** (or **`--snapIntro`**) with **`--disney-intro-size` / `--snap-intro-size`: `clamp(16px, 1.25vw, 19px)`**, full-width, `margin-top/bottom` clamps. |
| `.caseStudy__subheadBody` | Mono **700**, uppercase, `letter-spacing: 0.05em`, `rgba(11,11,11,0.9)`. |
| **`.caseStudy__subheadBody`** | Single intro sentence under the title (**`--snapIntro`**, **`--disneyIntro`**, etc.); **dates stay in TIMELINE** meta. Optional **`.caseStudy__subheadKicker`** only if you want a date prefix without duplicating the grid. |

### Meta grid

| Class | Target styling (overrides default small mono labels) |
|-------|------------------------------------------------------|
| `.caseStudy__metaLabel` | **Oswald 700**, `clamp(17px, 1.35vw, 21px)`, **`-0.06em`**, `rgba(0,0,0,0.96)`. |
| `.caseStudy__metaValue` | Mono **700**, `clamp(15px, 1.15vw, 17px)` — paragraph or stack (see **`.caseStudy__metaStack`**). |

### Section titles

| Target | Value |
|--------|--------|
| Font | Oswald **700** |
| Size | `clamp(28px, 3.8vw, 52px)` |
| Tracking | **`-0.06em`** |
| Color | `rgba(0, 0, 0, 0.94)` |
| Bottom margin | `clamp(28px, 4vw, 40px)` |

### Prose, KEY IMPACT, tools

Same as before: prose / list body / tools body at **`clamp(18px, 1.35vw, 21px)`**, **`rgba(11,11,11,0.76)`**; list lead + tools label at **Oswald** **`clamp(26px, 2.05vw, 32px)`**; list + tools **gap** clamps per **Spacing** below.

---

## Spacing rhythm (Disney / Snapchat)

| Area | Target |
|------|--------|
| Back link (optional extra) | `margin-bottom: clamp(28px, 4vw, 40px)` |
| Hero padding | `padding: clamp(28px, 5vw, 52px) 0 clamp(48px, 7vw, 72px)` |
| Eyebrow margin under | `clamp(24px, 3.5vw, 40px)` |
| Hero media | `margin-top: clamp(52px, 8vw, 84px)` |
| Sections | `margin-top: clamp(52px, 8vw, 96px)` |
| Footer | `margin-top: clamp(64px, 10vw, 120px)`, `padding-top: clamp(44px, 6vw, 64px)`, `gap: clamp(20px, 3vw, 24px)` |

---

## Disney-specific styling (`Disney.css`)

**When to mirror:** Employer-brand / CMS / web work pages (La Mer, etc.). Copy **`Disney.css`** → **`Lamer.css`** (or `Project.css`) and replace **`.caseStudy--disney`** with **`.caseStudy--lamer`**.

| Block | What it does |
|-------|----------------|
| **`.caseStudy--disney .caseStudy__hero`** | Hero padding clamps (see spacing table). |
| **`.caseStudy__subhead--disneyIntro`** | Intro paragraph scale (`--disney-intro-size`). Rename to **`--lamerIntro`** and keep the same token. |
| **`.caseStudy--disney .caseStudy__subheadBody`** | Mono body treatment for intro (same rules as Snapchat body). |
| **`.caseStudy__heroMedia--disney`** | Hero band background **`#eef1f8`**, border **`rgba(11,11,11,0.14)`**. **La Mer:** swap hex for brand-appropriate light tint (e.g. soft beige or brand pale). |
| **`.caseStudy__heroMedia--browser.caseStudy__heroMedia--disney .caseStudy__heroImg`** | `object-position: center 8%` — adjust per screenshot. |
| **`.caseStudy--disney .caseStudy__sectionTitle`** … through **tools**, **list** | Same Oswald / mono / gap rules as in the **Typography** section (duplicate of Snapchat’s override block). |
| **`.caseStudy--disney .caseStudy__gallery`** | `gap: clamp(18px, 2.5vw, 22px)`; **`align-items: stretch`**. |
| **`.caseStudy--disney .caseStudy__galleryItem`** | **`border: 2px solid #0b0b0b`**, **`background: #f0efea`**. |

**Hero caption:** Disney (and Snapchat) **omit** **`<figcaption className="caseStudy__heroCaption">`** for a cleaner hero unless a caption is truly needed.

---

## Snapchat-only (do not copy to La Mer unless relevant)

- **`.caseStudy__gallery--snapPhone`**, **`.snapPhoneFrame`**, poster column, Snap Academies callout — see **`Snapchat.css`** and earlier sections in this file for AR / program-link layouts.

---

## Color & borders

| Token / pattern | Value |
|-----------------|--------|
| Primary text | `#0b0b0b` |
| Muted mono body | `rgba(11, 11, 11, 0.76)` |
| Hairline | `rgba(11, 11, 11, 0.2)` |
| Disney hero band | `#eef1f8` + soft border |
| Snapchat hero band | `#f8f16d` + soft border |
| Disney gallery tiles | `2px solid #0b0b0b`, fill `#f0efea` |

---

## CSS variables on `.caseStudy` (`caseStudy.css`)

```text
--cs-text, --cs-muted, --cs-border, --cs-shell
--cs-hero-eyebrow, --cs-hero-title, --cs-hero-subhead
--cs-back
```

---

## Migration checklist — La Mer (fast path)

1. Add **`caseStudy--lamer`** on **`lamer.js`** article (or equivalent).
2. Copy **`Disney.css`** → **`lamer.css`**; replace every **`disney`** with **`lamer`** (class names and modifier **`--disneyIntro`** → **`--lamerIntro`**).
3. Import **`./lamer.css`** after **`./caseStudy.css`**.
4. In JSX: **`caseStudy__heroMedia--browser caseStudy__heroMedia--lamer`** — set the hero band color in **`lamer.css`** for **`.caseStudy__heroMedia--lamer`**.
5. Use **`<ul className="caseStudy__metaValue caseStudy__metaStack">`** for any meta column that is a list of lines (avoid dot-separated run-ons).
6. Compare side-by-side with **`/#/work/disney`** and **`/#/snapchat`** only for special patterns.

---

## Migration checklist — Snapchat parity (AR / special UI)

1. Add **`caseStudy--snapchat`** + **`Snapchat.css`**.
2. Copy section / meta / prose blocks from **`Snapchat.css`** or **`Disney.css`** (they match for type).
3. Add phone gallery + callout only if the project needs them.

---

## Files checklist (new case study)

1. **`caseStudy.css`** — always.
2. **Standard page:** start from **`Disney.js`**, copy **`Disney.css`** → rename and scope.
3. **AR / lens page:** add **`Snapchat.js`** patterns + **`Snapchat.css`** where needed.
4. Update **this doc** if you add a **new reusable pattern** to `caseStudy.css`.
