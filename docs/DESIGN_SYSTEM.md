# NBBC design system

Everything here is implemented. Tokens live in [`src/index.css`](../src/index.css) as CSS variables, Tailwind maps them in [`tailwind.config.js`](../tailwind.config.js), and shared components are in [`src/components/ui.jsx`](../src/components/ui.jsx).

## Colour

Colours are RGB triplets so Tailwind opacity modifiers work (`bg-ink/10`). Components only use semantic names, never raw hex, so light and dark themes swap automatically.

| Token | Light | Dark | Use |
|---|---|---|---|
| `paper` | `#F7F2EA` warm ivory | `#161014` | Page background |
| `paper-2` | `#EEE6DA` | `#1F171D` | Sunken / alternate sections |
| `ink` | `#1E1419` aubergine black | `#F3ECE4` | Body text, headings |
| `ink-2` | `#5C4A53` | `#C4B6BD` | Secondary text |
| `line` | ink @ 15% | ink @ 15% | Hairline rules (`.hairline`) |
| `plum` | `#8A2F6B` | `#E2A0CB` | Brand, links, primary buttons (from the crest's `#A8518A`, deepened for contrast) |
| `aubergine` | `#3A142E` | `#2C1023` | Feature sections, footer |
| `ochre` | `#D69B3E` | `#E4B05C` | Accent on dark surfaces only |
| `cream` | `#FAF4EC` | `#FAF4EC` | Text on aubergine |

**Measured contrast (WCAG 2.2):**

| Pair | Light | Dark |
|---|---|---|
| ink / paper | 16.1:1 | 16.0:1 |
| ink-2 / paper | 7.4:1 | 9.6:1 |
| plum / paper | 7.0:1 | 9.1:1 |
| button text / plum | 7.8:1 | 8.7:1 |
| cream / aubergine | 14.6:1 | 15.9:1 |
| ochre / aubergine | 6.5:1 | 8.9:1 |

Every pair passes AA; most pass AAA.

**Rules**
- Ochre is never used on ivory (too little contrast). It belongs on aubergine.
- At most one aubergine section in a row. Alternate with paper and `paper-2`.
- Gradients appear only as legibility scrims over photography.

## Typography

| Role | Family | Notes |
|---|---|---|
| Display | **Newsreader Variable** (self-hosted, `@fontsource-variable`) | Weight 400. Italic for one or two words of emphasis per headline. |
| UI & body | **Instrument Sans Variable** (self-hosted) | 17px body, 1.65 line height. |

Fluid scale (`clamp`, no breakpoint jumps):

| Token | Range | Used for |
|---|---|---|
| `text-display-xl` | 44 → 108px | Page `h1` |
| `text-display-l` | 36 → 72px | Section titles |
| `text-display-m` | 28 → 46px | Sub-section titles, names |
| `text-display-s` | 22 → 28px | Row titles, scripture |
| `text-lede` | 18 → 21px | Intro paragraphs |
| `eyebrow` | 12px, 0.16em tracking, uppercase, semibold | Section labels |

Headings use `text-wrap: balance`, paragraphs `pretty`. Times and account numbers use `tabular-nums`. Straight apostrophes are replaced with typographic ones (’) in copy.

## Space & layout

- Container: `.container-site`, max 82rem (1312px), gutter `clamp(1.25rem, 3vw, 3rem)`.
- Vertical rhythm: `py-section` = `clamp(4.5rem, 6vw, 9rem)`.
- A 12-column grid on `lg`. Text columns never exceed `max-w-prose` (38rem).
- Breakpoints: `xs` 400, `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536.

## Shape

- **Arch** (`.arch`): the church-window crop. Only for portraits and the one or two feature images per page.
- Everything else is square or `rounded-sm` (2px). No rounded cards.
- Buttons and filter chips are pills, the only fully-rounded shape.

## Components

| Component | Where | Notes |
|---|---|---|
| `ButtonLink` | `ui.jsx` | Variants: `primary`, `light`, `outline`, `outline-light`. Minimum height 48px. External links get an ↗ icon and an "opens in a new tab" note for screen readers. |
| `ArrowLink` | `ui.jsx` | Inline text link with arrow; the arrow nudges on hover. |
| `SectionHeading` | `ui.jsx` | Eyebrow + serif title + optional lede; `tone="light"` for aubergine. |
| `PageHeader` | `ui.jsx` | Interior-page `h1` with lede in the right column. |
| `Picture` | `ui.jsx` | Responsive WebP `srcset`, lazy by default, `focus` sets `object-position`. |
| `Scripture` | `ui.jsx` | Serif italic `blockquote` + reference. |
| `Embed` | `ui.jsx` | Lazy iframe with a loading state. |
| `SundayTimeline` | `sections.jsx` | The Sunday morning sequence. |
| `WeeklyRhythm` | `sections.jsx` | A real `<table>` of weekly gatherings; collapses to two columns on mobile. |
| `FindUs` | `sections.jsx` | Address, call, WhatsApp, email, directions and map. |
| `ContactForm`, `PrayerForm`, `CounsellingForm` | `forms.jsx` | Formspree; labelled fields, success and error states. Code-split. |

## Motion

All motion is in `src/index.css` under `@media (prefers-reduced-motion: no-preference)`. With reduced motion turned on, every element is simply present and static.

| Moment | What happens | Duration |
|---|---|---|
| **Cinematic landing** (first homepage visit per session, `src/lib/intro.js`) | **3D crest intro.** The church crest is built as a CSS-3D medallion: a front and back face plus 12 stacked edge layers that give it real thickness when turned. It spins in from depth (−560° to 0°), overshoots slightly and settles, then floats gently. Around it, a thin halo draws itself, a dotted ochre ring fades in and a warm glow blooms; a light sheen sweeps across the crest. "New Birth Baptist Church" rises word by word, then the tagline. At 2.6s an **iris** opens outward from the crest onto the congregation photograph while the intro dissolves. The eyebrow, headline words, lede, CTAs, Sunday strip and header follow. A **Skip intro** button, any key, the scroll wheel or a touch-scroll ends it instantly. No 3D library is used, only CSS transforms. | about 4.5s |
| Hero at rest | Slow drift of the photograph (scale 1.03 to 1.09, 26s alternate) | continuous, barely perceptible |
| Hero on scroll | Photo parallax (up to 18vh); hero copy fades and lifts | linked to scroll |
| Image reveal (`<Picture reveal>` or `data-reveal="image"`) | The frame opens from the bottom like a window (clip-path); the photo inside settles from 1.14× | 1.4s / 2s |
| Text reveal (`data-reveal`) | 18px rise and fade, once | 0.9s |
| Faces of NBBC | Continuous marquee; pauses on hover or keyboard focus | 70s per loop |
| Route change | Page fades and rises 14px | 0.7s |
| Hover | Images scale 1.035; nav underline draws; arrows nudge 3px | 0.3–1.2s |
| Mobile menu | Panel fades; links stagger 40ms each | 0.5s |

Easing: `cubic-bezier(0.22, 1, 0.36, 1)` for settling, `cubic-bezier(0.77, 0, 0.18, 1)` for the window reveal. Returning to the homepage in the same session skips the curtain and word reveal, so the intro never becomes a chore.

## Dark mode

- Defaults to the visitor's OS setting, and the toggle stores their choice in `localStorage` (`nbbc-color-mode`).
- A tiny inline script in `index.html` sets the class before first paint, so there is no flash.
- The map is colour-inverted in dark mode.

## Content

All church facts live in [`src/data/`](../src/data/):
- `church.js`: contacts, schedule, programme, leadership, accounts
- `ministries.js`
- `media.js`

Update the monthly programme there; past dates hide themselves. Values the church still needs to confirm are marked `// CONFIRM`.
