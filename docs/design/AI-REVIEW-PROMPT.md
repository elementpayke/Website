# Prompt: review the ElementPay Next.js site for brand, build and SEO/GEO

Paste everything below this line into your AI coding assistant (Claude Code, Cursor, Copilot and so on), with the repo open. Attach `BRAND.md` or keep it in the repo root.

---

You are a senior Next.js engineer and technical SEO lead reviewing the ElementPay marketing site (elementpay.net). ElementPay is cross-border and stablecoin payment infrastructure for **businesses**, with a focus on Africa. The site must rank in classic search and be quoted by AI answer engines (ChatGPT, Perplexity, Gemini, Google AI Overviews). It must also follow `BRAND.md` exactly.

## Ground rules

- `BRAND.md` in the repo root is binding for colours, fonts, the type scale, breakpoints, components, copy claims and SEO. When code and `BRAND.md` disagree, the code is wrong.
- Do not invent product capabilities, numbers, licences, partners or speed claims.
- Approved facts:
  - 20 African payout countries.
  - 30 account currencies.
  - USDC and USDT.
  - Rate and fee shown before you confirm.
  - Status and reference on every payment.
  - Roles and approvals.
  - ElementPay is not a bank; banking services are provided by licensed partner institutions.
  - Every customer goes through business verification.
- Banned until confirmed in writing:
  - Speed claims: "seconds", "instant", "under a minute", "24/7", "weekends".
  - Volume or customer counts, uptime and licence numbers.
  - Partner logos and card acceptance.
- Work in this order: **audit → report → propose diffs → apply only after I approve.** Do not mass-rewrite.

## Step 1: Map the project

Report:
- Next.js version, App Router or Pages Router, and the rendering mode per route group (SSG, ISR, SSR or client).
- Where content lives: CMS, MDX, JSON, or hard-coded in components.
- How the shared nav, footer, layout and fonts are wired.
- Every route, with a count per template: country, corridor, currency account, stablecoin-by-country, product, solution, blog, French pages, other.

## Step 2: Rendering and crawlability (highest priority)

AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) mostly **do not run JavaScript**. Every page must send its full content in the first HTML response.

Check and fix:
- **Server-rendered content:** every marketing page is a Server Component, statically generated (`generateStaticParams` for dynamic routes) or ISR.
  - No `"use client"` at page or layout level unless unavoidable.
  - Client components hold only interactive bits: the menu sheet, hero scene cycle, rails marquee, coverage table filter, forms and accordions.
- **Raw HTML test:** run `curl -s https://<preview>/<route> | grep -i "<h1"` on 10 sample routes. The H1, the "In short" answer, the body copy, the FAQ text and the JSON-LD must all be in the raw HTML.
- **Collapsed content:** FAQs use `<details>` or render all answers in the HTML. Nothing important is fetched after hydration or hidden behind tabs that only exist in JS state.
- **No content via `useEffect` fetch** on marketing pages. Coverage data, blog posts and FAQs load at build time.
- **`dynamic(() => ..., { ssr: false })`** is only for purely decorative widgets (for example, the hero globe).
- **Status codes:** 404 pages return a real 404 via `notFound()`. Redirects use `permanent: true` (308) in `next.config.js`. No soft-404s.

## Step 3: Metadata (Next.js Metadata API)

Every route exports `metadata` or `generateMetadata`. The root layout sets `metadataBase: new URL('https://www.elementpay.net')`.

Per page:
- **`title`:** unique, 50–65 characters, keyword first. Use the template `'%s | ElementPay'`.
- **`description`:** unique, 140–160 characters, a complete sentence naming the country, rail or stablecoin.
- **`alternates.canonical`:** the absolute, final URL. No trailing-slash mismatch, no query strings.
- **`alternates.languages`:** for pages with a French pair, `{ 'en': ..., 'fr': ..., 'x-default': ... }`, both directions.
- **`openGraph`:** title, description, url, siteName `ElementPay`, type, and `images` (1200×630, `/og-image.png` or a per-page `opengraph-image.tsx`).
- **`twitter`:** card `summary_large_image`.
- **`robots`:** index and follow for marketing pages. Use noindex for thank-you, status and test pages.

Produce a table of every route with title length, description length, canonical and duplicates. Flag any duplicate titles or descriptions.

## Step 4: Structured data (JSON-LD)

Render JSON-LD server-side in the page: `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />`. Make one typed helper per schema in `lib/schema.ts`.

Required:
- **Site-wide, in the root layout:**
  - `Organization` (`@id` `https://www.elementpay.net/#org`) with name, `alternateName` "Element Pay", url, logo and `sameAs` (only the real social URLs I supply).
  - `knowsAbout` and `areaServed` (the 20 countries).
  - `address` with both offices:
    - One Africa Place, 5th floor, Waiyaki Way, Nairobi, Kenya.
    - Elementpay Inc., 1007 N Orange St, 4th Floor, Ste 1382, Wilmington, DE 19801, US.
  - `brand` Mboka.
  - `WebSite`.
- **Every page:** `BreadcrumbList` matching the visible breadcrumb.
- **Service, product, country and corridor pages:** `Service` with `provider` set to `{ "@id": "#org" }`, plus `serviceType`, `areaServed` and `audience: BusinessAudience`.
- **Pages with FAQs:** `FAQPage` whose questions and answers exactly match the visible text.
- **Blog posts:** `Article` with `headline`, `description`, `datePublished`, `dateModified`, `author`, `publisher` and `image`.
- **Careers:** `JobPosting` only when real roles exist.

Validate 10 sample pages with Google's Rich Results Test and Schema.org's validator, and report any errors.

## Step 5: Crawl infrastructure

- `app/sitemap.ts` generates **every** indexable URL from the same data source as the pages (coverage data, blog list and route list), with real `lastModified` dates. Split into several sitemaps if there are more than 5,000 URLs.
- `app/robots.ts` allows all, links the sitemap, and **explicitly allows** GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot and Applebot. Disallow only `/api` and preview routes.
- `public/llms.txt` lists the key pages with one-line factual descriptions. Generate it at build time from the same data, so it never drifts.
- **No orphan pages:** every page is reachable within 3 clicks from the homepage, through nav, footer, hubs or related-links sections. Report any orphans.
- **Internal links:** use `next/link`, real `href`s, and descriptive anchor text. No "click here" or "learn more" alone.
- **URL rules:** lowercase, hyphenated and stable. Examples:
  - `/send-money-to-kenya`
  - `/stablecoin-payments-in-ghana`
  - `/open-a-usd-account`
  - `/blog/<slug>`
  - French pages under `/fr/...`

## Step 6: On-page SEO and GEO template rules

Every service, product, country, corridor and stablecoin page must have:
1. **One H1** containing the main search phrase, for example "Stablecoin payments in Ghana" or "Mobile money API for Africa". The H1 ends with the amber square (see `BRAND.md`).
2. **An "In short" answer block** in the first 100 words: two sentences that answer the search directly and are self-contained enough to be quoted.
3. **Headings in order:** H2s phrased the way people search ("How it works", "Which mobile money networks are supported?"), never skipping a level.
4. **Concrete local entities:** currency name and code, rail names (M-Pesa, MTN MoMo, NIBSS and so on) and country name. These help AI engines match the page to the query.
5. **3–5 FAQs** mirroring real queries, also in `FAQPage` JSON-LD.
6. **At least 3 internal links** to related pages: the country to its corridors, stablecoin page and currency account; the product to its solutions; and the blog to the matching service page.
7. **Calls to action:** "Talk to sales" as primary and "See the platform" as secondary. No API-docs CTA in heroes.
8. **Visible "Last updated" date** on guides and coverage pages, matching `dateModified`.
9. **Unique copy:** templated pages must vary meaningfully (rails, currency facts, FAQs). Flag any pages that are more than 80% identical text.

Also run a keyword-to-page map. Every target phrase below should have exactly one owning page; flag gaps and cannibalisation:
- stablecoin payments in Africa / in [country]
- B2B stablecoin payments
- stablecoin payment gateway
- payment gateway Africa
- card payment gateway (keep or hide pending confirmation)
- USDT / USDC to [country]
- stablecoin on-ramp / off-ramp API
- mobile money API
- M-Pesa API for business
- payout API
- bulk payouts Africa
- send money from [X] to [Y] for business
- open a [currency] business account
- pay suppliers in China from Africa
- pay contractors in Africa
- cross-border payments Africa

## Step 7: Performance (Core Web Vitals are a ranking factor)

Targets on mobile (Moto G Power on slow 4G in Lighthouse): **LCP < 2.5s, INP < 200ms, CLS < 0.1**, Lighthouse SEO 100 and Accessibility ≥ 95.

Check:
- **Fonts:** load through `next/font/google` (Space Grotesk 500/600/700, DM Sans 400/500/700, DM Mono 400/500) with `display: 'swap'` and CSS variables. Remove any `<link>` to Google Fonts. Use no other families.
- **Images:** `next/image` everywhere, with `width` and `height` or `fill` plus `sizes`, and `priority` only on the hero LCP element.
  - Flags are local SVGs.
  - No hot-linked favicon services in production. Download partner and rail logos into `/public/logos`.
- **Lazy loading:** the hero globe and heavy animations are dynamically imported below the fold or after idle, and must not block LCP. The LCP element should be the H1 text, not an animation.
- **Animations:**
  - Only use CSS transforms and opacity.
  - Pause when `document.hidden`.
  - Respect `prefers-reduced-motion`.
  - No layout shift from the marquee or scene cycle; reserve their height.
- **JS size:** report the client JS per route. Flag anything over 150KB gzip on marketing pages, and remove unused libraries.
- **Third-party scripts:** use `next/script` with `strategy="lazyOnload"` or `afterInteractive`.

## Step 8: Brand and screens (from `BRAND.md`)

Use `grep` to check, and report every violation with file and line:
- **Colours:** any hex or rgba not in `BRAND.md` section 2. Move all colours into Tailwind theme tokens or CSS variables. No raw hexes in components.
- **Fonts:** any font family other than Space Grotesk, DM Sans or DM Mono.
- **Heading sizes:** any heading font-size not on the `BRAND.md` scale, and anything above 64px.
- **Corner rounding:** square cards, left-border accent cards, or drop shadows on cards.
- **Tap and input sizes:** tap targets under 44px, and inputs under 16px font (which causes iOS zoom).
- **Overflow:** horizontal scroll at 360px. Test 360, 390, 768, 1024, 1280 and 1440 with Playwright screenshots of the homepage, one country page, one product page, coverage, the blog index, one post, contact and careers.
- **Grid gaps:** orphan cards (a single card alone on the last row) at 768 and 1024.
- **Accessibility:**
  - Missing focus-visible styles.
  - Missing `alt` text.
  - Decorative elements without `aria-hidden`.
  - Colour contrast below 4.5:1 for body text.
- **Copy:** banned claims, consumer-facing language, dApp promoted ahead of the B2B platform, or API docs pushed as the main CTA.

## Step 9: Data architecture (to stop hard-coding)

Propose, but don't apply without approval, one typed source of truth:
- `data/coverage.ts`: countries, currency, code, rails, payouts yes/no and account yes/no. It feeds the coverage table, homepage figures ("20 countries", "30 currencies" computed, not typed), globe, rails strip, country pages via `generateStaticParams`, sitemap and `llms.txt`.
- `data/rails.ts`: rail name, type and local logo path.
- **Blog:** a CMS (Sanity, Contentful or Notion) or MDX in `content/blog`. Each post generates its page, metadata, `Article` JSON-LD, sitemap entry and `llms.txt` line automatically.
- **Countries:** adding a country means one data entry. Pages, links and counts update at build.

## Step 10: Forms and conversion

- "Talk to sales" opens a short form: name, work email, company, what they need, and an optional message. Markets and volume fields are **removed** on purpose.
- Forms submit through a Server Action or route handler, with validation (zod), spam protection (honeypot or Turnstile) and a real success state. They must not reload or lose input.
- The newsletter signup in the footer works and confirms.
- Analytics events fire on: Talk to sales click, form submit, See the platform click, and newsletter signup.

## Output I want

1. **Summary scorecard:** rendering, metadata, schema, crawl, on-page, performance, brand and accessibility, each rated pass, warn or fail.
2. **Prioritised issue list:** P0 (blocks ranking or AI visibility), P1 and P2. Each item gives the file and line, what's wrong, why it matters and the exact fix.
3. **Code diffs** for P0 items, ready to apply.
4. **The keyword-to-page map** with gaps.
5. **A test plan:** the curl checks, Rich Results checks, Lighthouse runs and Playwright viewport screenshots, with pass criteria.

Do not change copy meaning, invent facts or add new colours or fonts. If something needs a business decision (card payments, partner logos, licence numbers, real social links), list it under **"Needs confirmation"** instead of guessing.
