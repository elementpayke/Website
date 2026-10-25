# ElementPay website

The ElementPay marketing site (Next.js app router). Pages are built from the
Claude Design export and follow [`BRAND.md`](./BRAND.md).

## Develop

```bash
npm install
npm run dev        # http://localhost:3100
npm run test:run   # unit tests (Vitest)
npm run test:e2e   # end-to-end tests (Playwright; builds and starts the site)
npm run lint
```

## How pages are built

| Pages | Source |
| --- | --- |
| Country, corridor, currency-account, stablecoin, gateway, comparison and other static pages (154, including the 16 French pages) | Imported verbatim from the design into `src/content/design-pages/` and served by `src/app/(site)/[slug]` and `src/app/(fr)/fr/[slug]` |
| Homepage, products, solutions, company, blog, press, status, careers, contact, coverage | React components in `src/components/*`, ported from the design's interactive components |
| Shared nav and footer | `src/components/nav/EPNav.tsx`, `src/components/footer/EPFooter.tsx` |
| Titles, descriptions, Open Graph, hreflang and JSON-LD | Taken from each design page's `<helmet>` (`src/content/design-pages/heads.json` for the hand-built pages) |
| `sitemap.xml`, `llms.txt` | The design's own files, imported alongside the pages |

French pages live in a separate root layout so they render with `<html lang="fr">`.

### Updating from a new design export

```bash
node scripts/import-design.mjs <path-to-design-project>
```

The importer rewrites `src/content/design-pages/` and `src/app/design-pseudo.css`
(hover and focus states). It maps design filenames to clean URLs using each
page's canonical link, points flags at `/flags`, swaps the design font names for
the `next/font` variables and removes speed and opening-hours claims from the
French copy (BRAND.md). Run the tests afterwards: `src/app/sitemap.test.ts`
checks every sitemap URL has a route, and `src/lib/design/pseudo.test.ts`
checks every hover state a component uses was generated.

Hand-built pages are not regenerated; port changes to their components by hand.

## Design handoff notes

[`docs/design/`](./docs/design) holds the notes that came with the design:
the developer handoff (URL map, redirects, forms, live data, launch checklist)
and the SEO/AI-search and code-review prompts.
