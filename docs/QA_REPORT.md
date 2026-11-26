# QA report: responsive, accessibility, performance

Tested 26 November 2026 against the **production build** (`vite build` + `vite preview`). Headless Chrome was driven over the DevTools protocol (scripts are kept out of the repo). The Claude Chrome extension was not connected, so every check below ran through headless Chrome. Nothing here is estimated: each line was run.

## 1. Responsive

**Method:** each route loaded at each width, scrolled top to bottom, then checked automatically for:
- horizontal overflow (`scrollWidth > clientWidth`, plus any element extending past the viewport and not inside a clipping container)
- broken images
- console errors and warnings
- the `<h1>` count

| Widths | Routes | Result |
|---|---|---|
| 1440 · 820 · 390 · 320 | `/`, `/about-us`, `/ministries`, `/events`, `/media`, `/visit`, `/give`, `/prayer`, `/link` | **36 of 36 clean.** No overflow, no broken images, no console errors, exactly one `h1` per page. |
| 1440 · 768 · 375 · 320 | same, light mode | clean after one fix (below) |
| 1440 · 390 | `/`, `/about-us`, `/give`, dark mode | clean |

**Issues found and fixed during QA**

| Issue | Fix |
|---|---|
| Give page overflowed at 320px; the 48px account numbers were too wide | Fluid number size (32 → 48px) and tighter card padding on small screens |
| Two button styles (`btn-outline`, `btn-outline-light`) were never generated, because a dynamic class name was invisible to Tailwind's scanner | Explicit variant map in `ButtonLink` |
| Email addresses broke mid-word (`break-all`) | `overflow-wrap: anywhere` |
| **Image reveal left images blank for real visitors.** A `clip-path` reveal made images count as invisible, so lazy loading and the scroll observer never fired. The screenshot harness masked it by forcing the revealed state. | Reveal rebuilt as a retracting cover layer; harness changed to scroll like a real visitor without forcing anything |
| React warning for `fetchPriority` (React 18 only forwards lowercase) | Lowercase attribute |
| Faces marquee: portraits outside the strip's visible window had not loaded when they scrolled in | Eager, low-priority loading (13 small files) |
| Visit page had no photograph on mobile | Image shown on mobile as a 16:10 crop; arch frame on desktop |

**Real-visitor scroll test.** Every route at 1440 and 390 was scrolled in 500px steps, then checked that every `[data-reveal]` element revealed and every `<img>` in `main` loaded. Nothing was forced.

Screenshots at desktop (1440), tablet (820) and mobile (390): [`docs/screenshots/`](screenshots/). The intro sequence is in `cinematic-intro-sequence.jpg`.

*Note on the screenshots:* they are full-page captures, which do not scroll the way a visitor does. In `media-desktop.jpg` one gallery tile appears as a plain placeholder for that reason. The real-visitor scroll test (below) confirmed that every gallery image loads and displays.

## 2. Interaction tests (scripted, headless Chrome)

| Test | Result |
|---|---|
| First Tab lands on "Skip to content" | pass |
| Mobile menu opens; `aria-expanded=true`; body scroll locked; focus moves to first link ("Home") | pass (focus fixed during QA) |
| Escape closes menu and returns focus to the menu button | pass |
| Navigating from the mobile menu closes it and updates the page title | pass |
| Theme toggle switches `html.dark` and persists in `localStorage` | pass |
| Media: 14 recordings, "Midweek" filter shows 2, search "health" shows 3, nonsense search shows empty state, "Clear filters" restores | pass |
| Media: playing a recording loads `youtube-nocookie` embed and writes `?v=` to URL; `/media?v=ID` deep link opens that recording; "Play newest uploads" loads channel uploads playlist | pass |
| Give: "Copy number" with a real mouse click puts `0023417883` on the clipboard | pass. A fallback message shows if the clipboard is refused. |
| Contact form: empty submit blocked by native validation; all labels bound to inputs | pass. **Forms were not submitted**, since that would email the church. |
| Events: past September items hidden; empty state shown; "Past programme" disclosure opens with 13 items | pass |
| `/resources` redirects to `/give`; `/about-us#pastor` scrolls the section into view below the fixed header | pass |
| Cinematic intro plays on first visit; second visit in the same session gets quiet mode | pass (filmstrip captured at 250/900/1500/2200 ms) |

## 3. Accessibility

- **Lighthouse accessibility:** 100 on every page tested (Home, About, Ministries, Events, Media, Visit, Give, Prayer; mobile and desktop).
- **Issues fixed to get there:** invalid `<dl>` children; the wordmark's `aria-label` not matching its visible text; a low-contrast animated loading label.
- **Colour contrast:** every token pair measured. The lowest is 6.5:1 (ochre on aubergine). See `DESIGN_SYSTEM.md`.
- **Structure:** semantic landmarks (`header`, `nav` ×n with labels, `main`, `footer`); one `h1` per page; sections labelled by their headings; the weekly schedule is a real `<table>` with caption and headers.
- **Keyboard and screen readers:**
  - visible focus ring everywhere (`:focus-visible`)
  - skip link
  - focus-trapped mobile dialog
  - `aria-pressed` filter chips
  - `aria-live` for the copy status, player title and result count
  - external links announce "opens in a new tab"
- **Touch targets:** buttons ≥ 44–48px. Footer and contact links padded to ≥ 24px (WCAG 2.2 AA target size). Inline links within sentences are exempt.
- **Motion:** all animation is gated on `prefers-reduced-motion: no-preference`. Content is visible without JavaScript-driven motion.

## 4. Performance (Lighthouse 12, simulated throttling)

| Page | Mobile perf | Desktop perf | A11y | Best practices | SEO | CLS |
|---|---|---|---|---|---|---|
| Home | 91 | 99 | 100 | 100 | 100 | 0.001 |
| About | 94 | 99 | 100 | 100 | 100 | 0 |
| Ministries | 93 | 99 | 100 | 100 | 100 | 0 |
| Events | 93 | 100 | 100 | 100 | 100 | ≤0.03 |
| Media | 90 | 99 | 100 | 100 | 100 | 0 |
| Visit | 93 | 99 | 100 | 100 | 100 | 0 |
| Give | 94 | 99 | 100 | 100 | 100 | 0 |
| Prayer | 92 | 100 | 100 | 100 | 100 | ≤0.03 |

Home, About and Ministries were re-measured after the motion layer was added. Events and Prayer figures are from the run before it.

**What moved the numbers**
- Removed Chakra UI, Emotion, framer-motion, react-slick and react-intersection-observer.
- Interior pages are code-split; the Formspree code (8 KB gzipped) loads only on Visit and Prayer.
- Images went from 22 MB of PNG/JPEG to about 2 MB of responsive WebP; the hero is preloaded with `srcset`.
- Fonts are self-hosted at stable URLs and preloaded, which took CLS from 0.2 to 0.
- The radio and Facebook widgets load on request. The radio page set ad cookies, which had cost 22 Best Practices points.

**Remaining limit:** mobile LCP is about 3–3.5s under Lighthouse's slow-4G simulation, because the page is rendered client-side, so text paints after the 76 KB (gzip) JS bundle runs. The next step would be build-time prerendering (for example `vite-plugin-ssr`/`vike` or `react-snap`). That is a larger architectural change and was left for the church to decide.

## 5. SEO

- Per-route `<title>`, meta description, Open Graph tags and canonical URL.
- `og:image` (1200×630) from the church's own photograph.
- `schema.org/Church` JSON-LD with address, phone, socials and the weekly Sunday service schedule.
- `robots.txt` and `sitemap.xml`.
- A `<noscript>` fallback with service time and phone number.
- The canonical domain is set to `https://www.nbbcil.org` (printed on church flyers). **Confirm this before deploy.**
