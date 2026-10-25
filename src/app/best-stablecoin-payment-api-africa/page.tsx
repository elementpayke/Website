import type { Metadata } from "next";
import Link from "next/link";
import { getMarketingPage } from "@/lib/marketing/pagesData";
import { breadcrumbSchema, faqSchema, jsonLdGraph, serviceSchema } from "@/lib/schema";
import { COLOR, TYPE, fullStopSquare } from "@/lib/brand";
import { AFRICAN_COUNTRY_COUNT } from "@/lib/geo/coverage";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";

const page = getMarketingPage("/best-stablecoin-payment-api-africa")!;

export const metadata: Metadata = {
  title: page.seo.title,
  description: page.seo.description,
  alternates: { canonical: page.path },
  openGraph: {
    title: `${page.seo.title} | ElementPay`,
    description: page.seo.description,
    url: page.path,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${page.seo.title} | ElementPay`,
    description: page.seo.description,
  },
};

const CHECKLIST: Array<[string, React.ReactNode]> = [
  [
    "Country and rail coverage",
    <>
      Ask for the exact rails per country, not just a country count. In Kenya that means M-Pesa and Airtel Money; in Nigeria, bank transfer. ElementPay covers{" "}
      <Link href="/coverage">{AFRICAN_COUNTRY_COUNT}+ African countries</Link>, plus Argentina and Colombia, on mobile money and bank rails.
    </>,
  ],
  ["Payout speed, including weekends", "Payroll and supplier payments often fall on Fridays and month-ends. Check delivery times on mobile money and banks, and whether payouts run on weekends and public holidays."],
  [
    "FX transparency",
    <>
      You should see the rate and fee before you confirm, and the local amount should be fixed once you approve. Compare against <Link href="/exchange-rates">indicative market rates</Link>.
    </>,
  ],
  ["Collections as well as payouts", "If you also collect from African customers, check whether the same API settles local collections into USDC or USDT, so you run one integration instead of two."],
  ["Webhooks and reconciliation", "Every payment should carry your own reference through every status change, so it can be matched to an invoice or payroll line without manual work."],
  [
    "Compliance and business verification",
    <>
      Ask who holds the licences in each market, how funds are safeguarded and what verification your business and recipients go through. See our{" "}
      <Link href="/security-and-compliance">security and compliance</Link> page.
    </>,
  ],
  ["Sandbox and support", "A sandbox with realistic statuses shortens integration. Check support hours against your payout schedule and the time zones of your recipients."],
];

const COUNTRY_GUIDES: Array<[string, string]> = [
  ["Nigeria", "/stablecoin-payments-in-nigeria"],
  ["Kenya", "/stablecoin-payments-in-kenya"],
  ["Ghana", "/stablecoin-payments-in-ghana"],
  ["South Africa", "/stablecoin-payments-in-south-africa"],
  ["Uganda", "/stablecoin-payments-in-uganda"],
];

export default function Page() {
  const jsonLd = jsonLdGraph(
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Stablecoins", path: "/stablecoin-payments-africa" },
      { name: "Buyer's guide", path: page.path },
    ]),
    serviceSchema({ name: page.seo.title, description: page.seo.description, path: page.path }),
    ...(page.faqs.length ? [faqSchema(page.faqs)] : [])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EPNav active="Products" />

      <article data-screen-label="Guide" style={{ maxWidth: 880, margin: "0 auto", padding: "clamp(48px,7vw,96px) clamp(20px,4vw,48px) 0" }}>
        <nav aria-label="Breadcrumb" style={{ display: "flex", gap: 8, flexWrap: "wrap", fontFamily: "var(--font-label)", fontSize: 13, color: COLOR.slate }}>
          <Link href="/" style={{ color: COLOR.slate }}>Home</Link>
          <span>/</span>
          <Link href="/stablecoin-payments-africa" style={{ color: COLOR.slate }}>Stablecoins</Link>
          <span>/</span>
          <span style={{ color: COLOR.indigo }}>Buyer&rsquo;s guide</span>
        </nav>
        <h1 style={{ ...TYPE.h1Hero, margin: "28px 0 0" }}>
          How to choose a stablecoin payment API for Africa
          <span aria-hidden="true" style={fullStopSquare} />
        </h1>
        <p style={{ fontSize: "clamp(17px,1.4vw,19px)", lineHeight: 1.6, color: COLOR.slate, margin: "24px 0 0" }}>
          Fintechs, payroll providers and platforms entering African markets increasingly fund payouts and settle collections in USDC and USDT. The API you pick decides which countries you can reach, how fast money lands and how much work your finance team does each month. These are the seven things to check.
        </p>
        <p style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.slate, margin: "20px 0 0" }}>Updated October 2026</p>

        <ol style={{ listStyle: "none", padding: 0, margin: "48px 0 0", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 12 }}>
          {CHECKLIST.map(([title, body], i) => (
            <li key={title} style={{ padding: 28, borderRadius: 24, background: COLOR.cream }}>
              <span style={{ fontFamily: "var(--font-label)", fontSize: 13, color: COLOR.indigo }}>{String(i + 1).padStart(2, "0")}</span>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 1.5vw + 22px, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 700, margin: "10px 0 0" }}>
                {title}
              </h2>
              <p style={{ fontSize: 16, lineHeight: "26px", color: COLOR.slate, margin: "10px 0 0" }}>{body}</p>
            </li>
          ))}
        </ol>

        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 1.5vw + 22px, 44px)", lineHeight: 1, letterSpacing: "-0.035em", fontWeight: 700, margin: "64px 0 0" }}>
          Guides by country.
        </h2>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20 }}>
          {COUNTRY_GUIDES.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              style={{ display: "inline-flex", alignItems: "center", minHeight: 44, padding: "0 18px", borderRadius: 999, background: COLOR.cream, color: COLOR.ink, fontWeight: 500, fontSize: 15 }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/stablecoin-payments-africa"
            style={{ display: "inline-flex", alignItems: "center", minHeight: 44, padding: "0 18px", borderRadius: 999, background: COLOR.cream, color: COLOR.ink, fontWeight: 500, fontSize: 15 }}
          >
            All {AFRICAN_COUNTRY_COUNT}+ countries
          </Link>
        </div>
      </article>

      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
        <div
          style={{
            borderRadius: 28,
            background: COLOR.indigo,
            color: "#fff",
            padding: "clamp(36px,6vw,80px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <h2 style={{ ...TYPE.h2Cta, margin: 0, maxWidth: "12ch" }}>Test it in the sandbox.</h2>
          <Link href="/contact" style={{ padding: "16px 28px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: "#fff", color: COLOR.indigo }}>
            Talk to sales
          </Link>
        </div>
      </section>

      <EPFooter />
    </>
  );
}
