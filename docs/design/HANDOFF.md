# ElementPay website: developer handoff

Updated 19 October 2026. 183 public URLs, all listed in `sitemap.xml`.

## 1. Pre-render every page (highest priority)
Pages in this project are built in the browser at load time. That is the main cause of slow loads, and crawlers may index thin or empty HTML.
- Render each `*.dc.html` to static HTML at build time (SSG). Ship the rendered markup; hydrate only interactive parts (nav, forms, calculators, FAQ toggles).
- Shared header/footer: `EPNav.dc.html`, `EPFooter.dc.html`. Render once as partials.
- Keep every `<title>`, meta description, canonical, hreflang, Open Graph and JSON-LD block exactly as written in each file's `<helmet>`.
- Self-host fonts (Bricolage Grotesque 600, Geist 400/500/600, Geist Mono 400/500) with `font-display: swap`, and preload the two heading/body files.
- Serve `flags/*.svg` and `og-image.png` with long cache headers.
- Target: LCP < 2.5s on 4G mobile, CLS < 0.1.

## 2. URL map
Strip `.dc.html` and serve at the root. Exceptions:
- `ElementPay v2.dc.html` → `/`
- `Coverage.html` → `/coverage`
- `Blog.dc.html` → `/blog`, `Press.dc.html` → `/press`, `Status.dc.html` → `/status`
- `fr-*.dc.html` → `/fr/*` without the `fr-` prefix (e.g. `fr-paiements-stablecoins-senegal` → `/fr/paiements-stablecoins-senegal`)
- Not public, do not deploy: `Company`, `Products`, `Solutions`, `BlogView`, `PressView`, `EPNav`, `EPFooter` (view components), `og-image.dc.html` (image source, noindex).

Internal links currently point at `*.dc.html` filenames. Rewrite them to clean URLs at build.

## 3. Redirects from the old site
301 every old URL to its closest new page. Old hash routes (`/#payments`, `/#contact`, etc.) can't be redirected server-side; add a small script on `/` that maps hash → path. At minimum:
- `/#contact` → `/contact`
- `/#payments` → `/payments`
- `/#coverage` → `/coverage`
- `/#solutions` → `/for-fintechs-and-wallets`

## 4. Forms
- **Talk to sales** (`/contact`): first name, last name, work email, job title, company, website, HQ, business type, needs (multi), go-live timing, message. POST to the CRM; route by "needs". Supports `?email=` prefill from the homepage.
- **Newsletter** (footer, every page): email only. POST to the email platform with double opt-in.
- Add bot protection (honeypot or Turnstile). Neither form is wired today; both show a success state only.

## 5. Live data
- `exchange-rates` and the route pages show placeholder rates dated October 2026. Wire to the rates API and update the "Updated" label and JSON-LD dates from the feed.
- `Status` shows static "All rails operational". Wire to the status provider.

## 6. SEO launch checklist
- Submit `sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- Confirm `robots.txt` and `llms.txt` are served at the root.
- Validate JSON-LD (FAQPage, Service, Article, BreadcrumbList, Organization) with the Rich Results Test.
- Pre-rendered HTML must contain all three `<link rel="alternate" hreflang>` tags (en, fr, x-default) on every paired page. The in-browser preview drops duplicates, so a small script re-adds them; remove that script once pages are pre-rendered.
- Check hreflang pairs: 8 French send-money pages and 8 French stablecoin pages, each paired with an English page.
- Replace placeholder social URLs in `EPFooter.dc.html` and `ElementPay v2.dc.html` (search `linkedin.com/company/elementpay`).

## 7. Content still needed from ElementPay
- Regulators, licence numbers and banking partners (`security-and-compliance`)
- Legal entity, registered address, team, author names
- Customer stories
- Confirmation that card acceptance is offered (`card-payment-gateway`, `payment-gateway-africa`)
