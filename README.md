# 🌿 Verdana — Plant Wellbeing Studio

A professional, fully static frontend website for plant care and wellbeing — built with semantic HTML5, external CSS3, and vanilla JavaScript. Developed as **Project 1** of the DecodeLabs Frontend Development Industrial Training Programme (Batch 2026).

---

## 📋 Table of Contents

- [Overview](#overview)
- [Live Preview](#live-preview)
- [Project Structure](#project-structure)
- [Features](#features)
- [Sections](#sections)
- [Technologies Used](#technologies-used)
- [DecodeLabs Compliance Checklist](#decodelabs-compliance-checklist)
- [How to Run](#how-to-run)
- [Design System](#design-system)
- [JavaScript Modules](#javascript-modules)
- [Accessibility](#accessibility)
- [Responsive Breakpoints](#responsive-breakpoints)
- [Credits](#credits)

---

## Overview

**Verdana** is a science-backed plant wellbeing platform that translates complex horticultural research into clear, actionable care rituals. The site covers the four pillars of plant health — light, water, soil, and air — and provides an interactive symptom diagnosis tool, seasonal care calendar, and curated plant profiles.

This project demonstrates mastery of:

- Semantic HTML structure and document outline hierarchy
- CSS engineering with the DRY principle and BEM methodology
- CSS Grid for macro page layout and Flexbox for micro component alignment
- Vanilla JavaScript for interactivity with zero external dependencies
- Accessibility standards (A11Y / WCAG 2.1)

---

## Live Preview

To view the site locally, open `index.html` in any modern browser. No build step, server, or installation required.

---

## Project Structure

```
verdana/
├── index.html      # Semantic HTML structure — the skeleton
├── style.css       # External stylesheet — all visual styling
├── main.js         # Vanilla JavaScript — all interactivity
└── README.md       # This file
```

All three files must remain in the **same directory** for the site to work correctly.

---

## Features

| Feature | Description |
|---|---|
| Fixed Navigation | Scroll-aware header with backdrop blur and mobile burger menu |
| Hero Section | Full-viewport landing with animated plant health stat card |
| News Ticker | Auto-scrolling botanical facts strip |
| Care Guide | Four-pillar system — light, water, soil, air — with hover interactions |
| Plant Profiles | Six species cards with specs, difficulty badges, and pro tips |
| Diagnosis Tool | Click-to-diagnose symptom checker with treatment steps |
| Seasonal Calendar | Year-round care rituals across Spring, Summer, Autumn, Winter |
| Newsletter Signup | Email validation with user feedback messaging |
| Scroll Reveal | Staggered entrance animations triggered by IntersectionObserver |
| Fully Responsive | Three breakpoints covering desktop, tablet, and mobile |

---

## Sections

### 1. Header / Navigation
- Fixed to the top of the viewport at 80px height
- Becomes opaque with a border on scroll (`is-scrolled` class)
- Desktop: logo + nav links + CTA button
- Mobile: logo + hamburger menu (full-screen overlay)

### 2. Hero
- Two-column CSS Grid layout (content + visual card)
- Animated plant health card showing humidity, light, and water levels via CSS custom property `--fill`
- Decorative radial orbs and noise texture for depth

### 3. Ticker
- Infinite horizontal marquee of plant facts
- Pure CSS animation — no JavaScript

### 4. About
- Two-column asymmetric grid with a label column
- Four philosophy pillars in a responsive 4-column grid

### 5. Care Guide
- Two-column grid of care cards (light, water, soil, air)
- Each card has a colour-coded accent (gold, blue, purple, cyan)
- Dot-based requirement meter

### 6. Plant Profiles
- Three-column grid of six plant species
- Each card includes: difficulty badge, emoji icon, scientific + common name, tag pills, spec table (light / water / humidity), and a pro tip
- Hover effect: lift + green border glow

### 7. Symptom Diagnosis Tool
- Two-column layout: intro copy + interactive panel
- Six symptom buttons — clicking one updates the result panel with severity, diagnosis title, treatment steps, and prevention tip
- Result panel uses `aria-live="polite"` for screen reader announcements

### 8. Seasonal Calendar
- Four-column grid (one per season)
- Each card has a colour-coded bottom accent bar on hover

### 9. Newsletter / CTA
- Full-width green gradient section
- Two-column layout: copy + form
- Client-side email validation with success / error feedback

### 10. Footer
- Four-column grid: brand, navigation, contact, social links
- `<address>` element for semantic contact information

---

## Technologies Used

- **HTML5** — Semantic elements, ARIA roles, document outline hierarchy
- **CSS3** — Custom properties (variables), Grid, Flexbox, animations, `@keyframes`, `backdrop-filter`
- **JavaScript (ES6+)** — Modules pattern (IIFEs), `IntersectionObserver`, `classList`, event delegation
- **Google Fonts** — Playfair Display (display), Cormorant Garamond (body), DM Mono (mono)

No frameworks. No libraries. No build tools. Zero dependencies.

---

## DecodeLabs Compliance Checklist

This project was built to meet every requirement in the Project 1 Flight Checklist:

- **IA** — Logical sitemap defined first; navigation reflects the content hierarchy
- **HTML** — Semantic tags throughout: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<address>`. Exactly one `<h1>` per page. No heading levels skipped.
- **CSS** — External file only (`style.css`). No inline styles anywhere. DRY principle enforced via CSS custom properties and BEM class reuse. No IDs used for styling.
- **Layout** — CSS Grid for all macro page structure. Flexbox for all micro component alignment (nav, buttons, stat bars, tags, etc.).
- **Assets** — Explicit dimensions on all measured elements to prevent Cumulative Layout Shift (CLS). AVIF/WebP-ready image markup patterns.
- **Validation** — Markup structured for zero W3C validation errors. Lighthouse-friendly: semantic landmarks, alt text, contrast, form labels.

---

## How to Run

### Option 1 — Open directly

1. Download or clone all three files into one folder.
2. Double-click `index.html` to open in your browser.

### Option 2 — Local development server (recommended)

Using VS Code with the **Live Server** extension:

1. Open the project folder in VS Code.
2. Right-click `index.html` → **Open with Live Server**.

Using Python:

```bash
# Python 3
python -m http.server 8000
# Then visit http://localhost:8000
```

Using Node.js:

```bash
npx serve .
# Then visit the URL shown in your terminal
```

---

## Design System

All visual tokens are defined as CSS custom properties in the `:root` block at the top of `style.css`. To customise the look, edit only this section.

### Colour Palette

| Token | Value | Usage |
|---|---|---|
| `--clr-bg` | `#0d1a12` | Page background |
| `--clr-surface` | `#162219` | Card backgrounds |
| `--clr-green-1` | `#4ade80` | Primary accent / CTA |
| `--clr-green-2` | `#86efac` | Secondary accent |
| `--clr-gold` | `#d4a853` | Submit button / highlights |
| `--clr-text` | `#e8ede9` | Primary text |
| `--clr-text-muted` | `#8aaa90` | Body / secondary text |

### Typography

| Role | Font | Usage |
|---|---|---|
| Display | Playfair Display | Hero title, section headings, card names |
| Body | Cormorant Garamond | Paragraphs, descriptions |
| Mono | DM Mono | Labels, badges, stats, navigation |

### Spacing Scale

Spacing uses a named scale: `--sp-xs` (0.25rem) through `--sp-4xl` (8rem), applied consistently throughout the stylesheet.

---

## JavaScript Modules

`main.js` is organised into six self-contained IIFE modules, each with a single responsibility:

| Module | Function | Responsibility |
|---|---|---|
| `initNav` | Navigation | Scroll state, burger menu, keyboard close |
| `initReveal` | Scroll Reveal | IntersectionObserver staggered fade-in |
| `initDiagnosis` | Diagnosis Tool | Symptom selection and dynamic result rendering |
| `initNewsletter` | Newsletter Form | Email validation and user feedback |
| `initHeroStats` | Hero Stats | Stat bar animation observer |
| `initSmoothAnchors` | Smooth Scroll | Offset-corrected smooth anchor navigation |

---

## Accessibility

- All interactive elements are keyboard-navigable with visible focus rings (`:focus-visible`)
- Decorative elements use `aria-hidden="true"`
- The diagnosis result panel uses `aria-live="polite"` and `aria-atomic="true"` for screen reader updates
- Symptom buttons use `aria-pressed` to communicate toggle state
- Progress bars use `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- Navigation has `aria-label="Main navigation"` and `aria-expanded` on the burger button
- Form inputs have associated `<label>` elements (visually hidden via `.sr-only`)
- Colour contrast ratios exceed WCAG 2.1 AA (4.5:1) for all text

---

## Responsive Breakpoints

| Breakpoint | Layout changes |
|---|---|
| `> 1100px` | Full desktop layout — all multi-column grids active |
| `≤ 1100px` | Care cards go single-column; plants/seasons go 2-column; footer goes 2-column |
| `≤ 900px` | Hero goes single-column; nav collapses to burger; about/diagnosis/CTA go single-column |
| `≤ 640px` | All grids collapse to single column; hero plant card hidden |

---

## Credits

- **Project brief** — DecodeLabs Frontend Development Industrial Training Programme, Batch 2026
- **Fonts** — Google Fonts (Playfair Display, Cormorant Garamond, DM Mono)
- **Design & Code** — Built to DecodeLabs Project 1 specifications

---

*Verdana Plant Wellbeing Studio · Built with HTML, CSS & JavaScript · No frameworks · No dependencies*
