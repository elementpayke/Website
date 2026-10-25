import type { Metadata } from "next";
import Link from "next/link";
import { getMarketingPage } from "@/lib/marketing/pagesData";
import { breadcrumbSchema, faqSchema, jsonLdGraph, serviceSchema } from "@/lib/schema";
import { COLOR, TYPE, fullStopSquare } from "@/lib/brand";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import FaqAccordion from "@/components/shared/FaqAccordion";
import ExchangeRateTable from "@/components/marketing/ExchangeRateTable";

const page = getMarketingPage("/exchange-rates")!;

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
      <EPNav active="Resources" />

      <section
        data-screen-label="Hero"
        style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(48px,7vw,96px) clamp(20px,4vw,48px) clamp(40px,5vw,64px)" }}
      >
        <nav aria-label="Breadcrumb" style={{ display: "flex", gap: 8, flexWrap: "wrap", fontFamily: "var(--font-label)", fontSize: 13, color: COLOR.muted }}>
          <Link href="/" style={{ color: COLOR.muted }}>Home</Link>
          <span>/</span>
          <span style={{ color: COLOR.indigo }}>Exchange rates</span>
        </nav>
        <h1 style={{ ...TYPE.h1Hero, margin: "28px 0 0" }}>
          Exchange rates to Africa
          <span aria-hidden="true" style={fullStopSquare} />
        </h1>
        <p style={{ ...TYPE.lede, margin: "24px 0 0", maxWidth: "50ch" }}>{page.lede}</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
          <Link href="/contact" style={{ padding: "16px 26px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: COLOR.indigo, color: "#fff" }}>
            Get a live quote
          </Link>
          <Link href="/pricing" style={{ padding: "16px 26px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: COLOR.cream, color: COLOR.ink }}>
            How pricing works →
          </Link>
        </div>
        <p style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.muted, margin: "20px 0 0" }}>Indicative · October 2026</p>
      </section>

      <div style={{ background: COLOR.cream }}>
        <section data-screen-label="Table" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Section, margin: 0 }}>Indicative rates.</h2>
          <ExchangeRateTable />
        </section>

        <section data-screen-label="FAQ" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(24px,4vw,56px)", alignItems: "start" }}>
            <h2 style={{ ...TYPE.h2Section, margin: 0 }}>About these rates.</h2>
            <div style={{ gridColumn: "span 2", minWidth: 0 }}>
              <FaqAccordion faqs={page.faqs} />
            </div>
          </div>
        </section>

        <section style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(80px,10vw,140px) clamp(20px,4vw,48px) 0 " }}>
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
            <h2 style={{ ...TYPE.h2Cta, margin: 0, maxWidth: "14ch" }}>Lock a real quote.</h2>
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
