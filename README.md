# New Birth Baptist Church, Ikorodu: website

React 18 + Vite + Tailwind CSS. Deployed on Netlify (`netlify.toml`).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run lint
```

## Where things live

| Path | What |
|---|---|
| `src/data/church.js` | **All church facts**: address, phones, weekly schedule, the monthly programme, leadership, bank accounts, form IDs. Edit here, not in components. |
| `src/data/ministries.js` | Ministry families and teams |
| `src/data/media.js` | Service recordings list (YouTube IDs) and photo gallery |
| `src/pages/` | One file per route |
| `src/components/` | Header, footer, shared UI, page sections, forms |
| `public/assets/church/` | Optimised WebP photography. Sources and permissions: `public/assets/IMAGE_SOURCES.md` |
| `public/fonts/` | Self-hosted Newsreader and Instrument Sans (preloaded in `index.html`) |
| `docs/` | Research report, design system, QA report, screenshots |

## Routes

`/` · `/about-us` · `/ministries` · `/events` · `/media` · `/visit` · `/give` · `/prayer` · `/link`

Redirects: `/home` shows the homepage; `/resources` (old giving page) goes to `/give`; `/about` goes to `/about-us`; `/contact` goes to `/visit#contact`.

## Monthly upkeep

1. **Programme:** replace `programme.label` and `programme.items` in `src/data/church.js`. Past dates hide themselves.
2. **Recordings (optional):** add new YouTube IDs to `src/data/media.js`, and save a thumbnail as `public/assets/church/media/yt-{id}-640.webp`. The "Play newest uploads" button always shows the latest without any change.

## Integrations kept from the previous site

- Formspree forms (contact `xpwzpljq`, counselling `xvgokqba`, prayer `myzyepdq`)
- NBBCI Radio embed, SociableKit Facebook widgets, YouTube, social links
