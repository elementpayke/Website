# ElementPay brand and type rules

Binding rules for any person or AI building or editing elementpay.net. If a page breaks a rule here, fix the page, not the rule. If a rule is missing, ask before inventing one.

Brand priority: these ElementPay rules override any attached third-party design system (for example "Industry"). Do not use its colors, fonts, square corners or registration marks on the site.

---

## 1. Positioning and voice

- **Audience is businesses.** Banks, PSPs, fintechs and wallets, remittance companies, merchants, marketplaces, traders, NGOs. Never write for consumers.
- **One-line definition:** ElementPay is cross-border and stablecoin payment infrastructure for businesses, with a focus on Africa.
- **Hero headline (fixed):** "Money should move like messages."
- **Sell the whole platform**, in this order:
  1. Platform: Mboka, merchant dashboard, API, dApp.
  2. Products: Payments, Settlement and FX, Accounts, OTC, Stablecoins, Agentic payments.
  3. Solutions, by customer type.
- **Mboka** is a web app that issues real business bank accounts. Describe it that way.
- **The dApp** is only for on-ramp and off-ramp. Mention it last and never lead with it.
- **Do not push API docs.** The primary CTA is "Talk to sales". The secondary CTA is "See the platform". "Read the docs" never appears in a hero.
- **Tone:** plain, factual, calm.
  - Short sentences.
  - No hype words: revolutionary, seamless, lightning-fast, game-changing.
  - No emoji.
  - No exclamation marks.
- **Approved facts only:**
  - 20 African payout countries.
  - 30 account currencies.
  - USDC and USDT.
  - Rate and fee shown before you confirm.
  - Status and reference on every payment.
  - Roles and approvals.
  - Not a bank: banking services are provided by licensed partner institutions.
  - Every customer goes through business verification.
- **Banned claims** unless the company confirms them in writing:
  - Speed: "seconds", "instant", "under a minute", "24/7", "including weekends".
  - Volume or customer counts.
  - Uptime.
  - Licence numbers.
  - Partner names or logos.
  - Card acceptance.
- **Delivery time wording:** "Depends on the local rail."

---

## 2. Colour

Use only these values. Do not add new hexes, gradients or tinted variants.

| Token | Hex | Role |
|---|---|---|
| ink | `#131126` | Primary text, dark panels, footer CTA ground |
| indigo | `#3B2ED3` | Brand accent, primary buttons, links, active states |
| indigo-press | `#2A1FB0` | Hover and pressed on indigo, link hover |
| cream | `#F6F4EF` | Page ground (homepage), section bands, input fills |
| cream-press | `#ECEAE4` | Hover on cream buttons |
| white | `#FFFFFF` | Cards on cream, page ground on inner pages |
| slate | `#4C4A66` | Secondary text, ledes, card body |
| muted | `#6E6C8A` | Captions, meta, placeholders, table headers |
| tint | `#EEEDFB` | "Yes" badges, selected chips, indigo-tinted fills |
| on-dark | `#B4B1D0` | Secondary text on ink only |
| violet | `#7C6FFF` | Focus ring, large numerals on white |
| lilac | `#A79EFF` | Decorative square, card cycle |
| amber | `#FFB224` | Headline full-stop square, CTA on ink, decorative square |
| mint | `#5ED6B4` | Decorative square, card cycle, "In short" marker |
| coral | `#FF6A55` | Decorative square only |
| success | `#0E7A5A` | "Paid / delivered" text only |
| hairline | `rgba(19,17,38,.08)` | Borders and dividers. Use `.12` for input borders |

**How to use them:**
- **Proportion:** about 70% cream or white, 20% ink, 8% indigo, 2% decorative (amber, mint, lilac, coral).
- **Decorative colours** appear only as small solid squares (7–12px), the 4-card cycle, or flat panels. They are never used for text, and there are never two on one small element.
- **Card cycle for numbered steps:** indigo with white text, then amber, lilac and mint with ink text, repeating in that order.
- **Contrast:** body text must reach 4.5:1.
  - Allowed: slate or ink on cream or white, white on indigo or ink, on-dark on ink.
  - Not allowed: muted on cream for paragraphs (use it only for 12–13px meta), or indigo on ink for text.
- **Links:** indigo by default, indigo-press on hover. Define `a` and `a:hover` on every page.
- **Focus:** `outline: 2px solid #7C6FFF; outline-offset: 2px` on `:focus-visible`.
- **Selection:** tint background with indigo text.

---

## 3. Type

Three families only, loaded on every page with this one link:

```html
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=DM+Mono:wght@400;500&display=swap">
```

| Family | Use | Weights |
|---|---|---|
| Space Grotesk | Headings, big numbers, the wordmark | 700 (headings), 500–600 (rare) |
| DM Sans | All body text, buttons, nav, forms | 400, 500, 600, 700 |
| DM Mono | Eyebrows, breadcrumbs, table headers, codes (KES, USD), step numbers, meta | 400, 500 |

Never use Inter, Roboto, Arial, Fraunces, system serif fonts, or any other family.

### Type scale

This scale is fluid, from a 360px phone to a 1440px desktop. Use these exact clamps. Do not set a heading at a fixed px size, and nothing on the site may exceed 64px.

| Role | Size | Line height | Letter spacing | Family / weight |
|---|---|---|---|---|
| H1 (page hero) | `clamp(34px, 2.2vw + 26px, 58px)` | 0.95 | -0.045em | Space Grotesk 700 |
| H1 (article) | `clamp(30px, 1.6vw + 24px, 48px)` | 1.0 | -0.04em | Space Grotesk 700 |
| H2 (section) | `clamp(28px, 1.5vw + 22px, 44px)` | 1.0 | -0.04em | Space Grotesk 700 |
| H2 (CTA panel) | `clamp(30px, 1.9vw + 23px, 52px)` | 0.95 | -0.045em | Space Grotesk 700 |
| H3 (feature) | `clamp(24px, 0.9vw + 20px, 34px)` | 1.05 | -0.03em | Space Grotesk 700 |
| H3 (card) | `clamp(19px, 0.45vw + 17px, 24px)` | 1.15 | -0.02em | Space Grotesk 700 |
| Stat number | `clamp(30px, 1.3vw + 25px, 44px)` | 1.0 | -0.03em | Space Grotesk 700 |
| Lede | `clamp(17px, 0.2vw + 16px, 19px)` | 1.55 | 0 | DM Sans 400, slate |
| Body | `16px` | 1.6 | 0 | DM Sans 400 |
| Article body | `clamp(17px, 0.1vw + 16.6px, 18px)` | 1.7 | 0 | DM Sans 400 |
| Small / card body | `14–15px` | 1.55 | 0 | DM Sans 400, slate |
| Button | `15–16px` | 1 | 0 | DM Sans 500–600 |
| Nav item | `clamp(13px, 0.4vw + 12px, 15px)` | 1 | 0 | DM Sans 500 |
| Eyebrow / label | `12–13px`, uppercase | 1.3 | 0.06–0.12em | DM Mono 400–500, muted or slate |
| Caption / meta | `12–13px` | 1.5 | 0 | DM Sans or DM Mono, muted |

**Type rules:**
- **Signature full stop:** every H1, and H2s that are statements, end in a small amber square instead of a period:
  ```html
  <span aria-hidden="true" style="display:inline-block;width:.2em;height:.2em;margin-left:.06em;background:#FFB224"></span>
  ```
  Remove the typed period. One square per heading, never in body text.
- **Heading width:** set `max-width` to about 15–20ch on H1 and H2 so they break into 2–3 balanced lines.
- **Paragraph width:** 56–64ch.
- **Wrapping:** `text-wrap: pretty` on body. Use `text-wrap: balance` on headings where supported.
- **Sentence case** everywhere. No all-caps headings; only eyebrows and table headers use uppercase.
- **One H1 per page.** H2 and H3 appear in order, never skipping a level.
- **Minimum sizes:** body text never below 14px on any screen. Form inputs are at least 16px, so iOS doesn't zoom.

---

## 4. Screens and breakpoints

Design mobile-first. Test every page at these widths:

| Name | Width | Notes |
|---|---|---|
| Small phone | 360 | Minimum supported width. No horizontal scroll. |
| Phone | 390–430 | iPhone and Pixel standard |
| Tablet portrait | 768 | Two-column grids begin |
| Tablet landscape / small laptop | 1024 | Desktop nav appears from here |
| Laptop | 1280 | |
| Desktop | 1440+ | Content stops growing at the container width |

**Layout:**
- **Containers:**
  - Default: `max-width: 1240px; margin: 0 auto; padding-inline: clamp(20px, 4vw, 48px)`.
  - Prose (articles, legal): `max-width: 720px`.
  - Forms: `max-width: 880px`.
- **Section rhythm:** `padding-block: clamp(64px, 8vw, 112px)` between major sections. The hero top is `clamp(40px, 7vw, 96px)`.
- **Grids:** always reflow with `grid-template-columns: repeat(auto-fit, minmax(min(100%, Xpx), 1fr))`.
  - X = 260px for 4-up cards.
  - X = 300–340px for 3-up cards.
  - X = 380px for 2-up splits.
  - Never use fixed column counts without a fallback.
- **Card groups that must not orphan** (4 cards): use two flex pairs (`flex: 1 1 440px`), each holding two cards (`flex: 1 1 200px`). That gives 4 cards per row on desktop, 2 per row on tablet and 1 per row on phones.
- **Gaps:** 12px between cards, 8px between pills and chips, 16–24px inside forms.
- **Tables:** wrap them in `overflow-x: auto`, with a `min-width` on the table (560–760px). Never squash columns.
- **Text containers:** no fixed heights. Use `min-height` only.
- **Wide content:** `nowrap` only on chips, buttons and short labels. Use `overflow-x: clip` on `body`.

**Navigation by screen:**
- **≥1024:** sticky top bar, 72px, cream with a hairline bottom. Hover dropdowns, plus Blog as a plain link. "Talk to sales" is an indigo pill on the right.
- **<1024:** a hamburger opens a full-height sheet. Groups are accordions, rows are at least 52px tall, and "Talk to sales" is a full-width button at the bottom.

**Touch and input:**
- **Hit targets:** at least 44×44px on every screen, including pills, chips, flags in filters and footer links.
- **Buttons:** primary buttons 48–52px tall, inputs 52px.
- **Hover:** never rely on hover alone. Every hover reveal must also work on tap.

**Motion:**
- **Allowed:** the hero scene cycle, the rails marquee, and small fades or rises of 0.3–0.6s.
- **Stop it:** pause motion when the tab is hidden. Under `prefers-reduced-motion: reduce`, stop all animation and show the first frame.
- **Not allowed:** parallax, scroll-jacking, bouncing, or animation on body text.

**Images:**
- **Flags:** SVG from `/flags/`, 3px radius, with a hairline shadow ring.
- **Loading:** `loading="lazy"` and `decoding="async"` below the fold.
- **No fake imagery:** no stock photos of people, no AI images, no drawn SVG "illustrations". Use placeholders and ask for real assets.

---

## 5. Shape and components

**Shape:**

| Element | Radius |
|---|---|
| Buttons, pills, badges, search fields | 999px |
| Large panels (hero visual, CTA band) | 28px |
| Cards | 20–24px |
| Inputs, small tiles, segmented options | 10–12px |
| Flags, logo tiles | 3–6px |

- No square-cornered cards.
- No left-border accent cards.
- No drop shadows on cards. Separate cards by fill (white on cream) or a hairline.
- Shadows only on floating elements (dropdowns, chips over visuals): `0 14px 30px -16px rgba(19,17,38,.4)`.

**Buttons:**

| Kind | Style | Hover |
|---|---|---|
| Primary | indigo fill, white text, pill, `padding: 16px 26px` | indigo-press |
| Secondary | cream fill, ink text, pill | cream-press |
| On ink | amber fill, ink text | white fill, ink text |
| Outline | 1.5px ink border, transparent | ink fill, white text |

Use at most one primary button per view. Arrows (→) go only on secondary and text links.

**Recurring blocks:**
- **"In short" answer box:** cream panel, mint square and a DM Mono label, then a 2-sentence answer. It sits directly under the hero on every service, product and country page.
- **Breadcrumb:** DM Mono 13px, muted. The current page is in indigo.
- **FAQ:** `<details>` rows on white, 20px radius, summary text 17px 600.
- **Footer:** the shared `EPFooter` on every page except the homepage. It includes both addresses:
  - Nairobi: One Africa Place, 5th floor, Waiyaki Way.
  - Wilmington: Elementpay Inc., 1007 N Orange St, 4th Floor, Ste 1382, Wilmington, DE 19801.
- **Nav:** the shared `EPNav` on every page except the homepage.

---

## 6. SEO and AI-answer (GEO) rules for every page

- **Title:** unique, 50–65 characters, with the keyword first and "· ElementPay" or "| ElementPay" at the end.
- **Meta description:** unique, 140–160 characters, a complete sentence that names the country, rails or stablecoin.
- **Head tags:** a canonical URL, Open Graph tags, a Twitter card and `og-image.png`.
- **H1:** contains the main search phrase, for example "Stablecoin payments in Ghana" or "Mobile money API for Africa".
- **Direct answer:** the "In short" answer appears in the first 100 words.
- **Questions:** 3–5 FAQs that mirror real searches, mirrored in `FAQPage` JSON-LD.
- **JSON-LD:**
  - Every page: `BreadcrumbList`.
  - Service pages: `Service`, with provider ElementPay, `areaServed` and the BusinessAudience audience.
  - Articles: `Article`.
- **Internal links:** at least 3 to related pages. Every new page is linked from a hub, the footer or a related section, so no page is orphaned.
- **Indexes:** add every new URL to `sitemap.xml` and `llms.txt` in the same change.
- **Localised pages:** French pages use `lang="fr"` and hreflang pairs.
- **Accessibility:** alt text on every content image. Decorative elements get `aria-hidden="true"`.

---

## 7. Pre-ship checklist

Run this before marking any page done:

1. Only the colours in section 2. Only Space Grotesk, DM Sans and DM Mono.
2. Headings use the section 3 clamps. Nothing is over 64px. The H1 ends with the amber square.
3. No horizontal scroll at 360px. No orphan card at 768px or 1024px.
4. Every tap target is at least 44px. Every input is at least 16px.
5. CTAs are "Talk to sales" and "See the platform". There is no API-docs CTA in the hero.
6. No banned claims (section 1).
7. Title, description, canonical, JSON-LD, the "In short" box, FAQs, sitemap and `llms.txt` are all done.
8. Motion stops under reduced-motion.
