import type { Metadata } from "next";
import Link from "next/link";
import { getMarketingPage } from "@/lib/marketing/pagesData";
import { breadcrumbSchema, faqSchema, jsonLdGraph, serviceSchema } from "@/lib/schema";
import { COLOR, TYPE, fullStopSquare } from "@/lib/brand";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import FaqAccordion from "@/components/shared/FaqAccordion";
import PricingTable from "@/components/marketing/PricingTable";

const page = getMarketingPage("/pricing")!;

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

const PRINCIPLES: Array<[string, string]> = [
  ["No intermediary deductions", "No correspondent banks take a cut on the way."],
  ["Locked quotes", "The amount the recipient gets is fixed when you approve."],
  ["Volume pricing", "Rates improve with volume and the markets you use."],
];

export default function Page() {
  const jsonLd = jsonLdGraph(
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: page.seo.title, path: page.path },
    ]),
    serviceSchema({ name: page.seo.title, description: page.seo.description, path: page.path }),
    ...(page.faqs.length ? [faqSchema(page.faqs)] : [])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EPNav active="Company" />

      <section
        data-screen-label="Hero"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "clamp(48px,7vw,96px) clamp(20px,4vw,48px) clamp(48px,6vw,80px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))",
          gap: "clamp(32px,5vw,72px)",
          alignItems: "start",
        }}
      >
        <div>
          <nav aria-label="Breadcrumb" style={{ display: "flex", gap: 8, flexWrap: "wrap", fontFamily: "var(--font-label)", fontSize: 13, color: COLOR.muted }}>
            <Link href="/" style={{ color: COLOR.muted }}>Home</Link>
            <span>/</span>
            <span style={{ color: COLOR.indigo }}>Pricing</span>
          </nav>
          <h1 style={{ ...TYPE.h1Hero, margin: "28px 0 0" }}>
            Know the cost before you send
            <span aria-hidden="true" style={fullStopSquare} />
          </h1>
          <p style={{ ...TYPE.lede, margin: "24px 0 0", maxWidth: "50ch" }}>{page.lede}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
            <Link href="/contact" style={{ padding: "16px 26px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: COLOR.indigo, color: "#fff" }}>
              Get your pricing
            </Link>
            <Link href="/exchange-rates" style={{ padding: "16px 26px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: COLOR.cream, color: COLOR.ink }}>
              See indicative rates →
            </Link>
          </div>
          <p style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.muted, margin: "20px 0 0" }}>Updated October 2026</p>
        </div>
        <div style={{ padding: 24, borderRadius: 24, background: COLOR.ink, color: COLOR.cream }}>
          <div style={{ fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".12em", color: COLOR.onDark }}>QUICK ANSWER</div>
          <p style={{ fontSize: 18, lineHeight: "28px", margin: "12px 0 0" }}>
            Each payment shows two things before you confirm: the exchange rate and the fee. Nothing is deducted by intermediaries on the way, so the recipient gets the amount shown.
          </p>
        </div>
      </section>

      <div style={{ background: COLOR.cream }}>
        <section data-screen-label="What you pay" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Section, margin: 0 }}>What you pay for.</h2>
          <PricingTable />
        </section>

        <section data-screen-label="Principles" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 12, marginTop: 32 }}>
            {PRINCIPLES.map(([t, d]) => (
              <div key={t} style={{ padding: 28, borderRadius: 24, background: "#fff", display: "flex", flexDirection: "column", gap: 12 }}>
                <h3 style={{ ...TYPE.h3Feature, margin: 0 }}>{t}</h3>
                <p style={{ fontSize: 15, lineHeight: "23px", color: COLOR.slate, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section data-screen-label="FAQ" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(24px,4vw,56px)", alignItems: "start" }}>
            <h2 style={{ ...TYPE.h2Section, margin: 0 }}>{page.faqHeading}</h2>
            <div style={{ gridColumn: "span 2", minWidth: 0 }}>
              <FaqAccordion faqs={page.faqs} />
            </div>
          </div>
        </section>

        <section style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(80px,10vw,140px) clamp(20px,4vw,48px) 0" }}>
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
            <h2 style={{ ...TYPE.h2Cta, margin: 0, maxWidth: "14ch" }}>Get pricing for your markets.</h2>
            <Link href="/contact" style={{ padding: "16px 28px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: "#fff", color: COLOR.indigo }}>
              Talk to sales
            </Link>
          </div>
        </section>

        <EPFooter />
      </div>
    </>
  );
}
