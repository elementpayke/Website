import type { Metadata } from "next";
import Link from "next/link";
import { getMarketingPage } from "@/lib/marketing/pagesData";
import { breadcrumbSchema, faqSchema, jsonLdGraph, serviceSchema } from "@/lib/schema";
import { COLOR, TYPE, fullStopSquare } from "@/lib/brand";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import FactsList from "@/components/marketing/FactsList";

const page = getMarketingPage("/elementpay-facts")!;

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
      { name: "Company", path: "/about" },
      { name: "At a glance", path: page.path },
    ]),
    serviceSchema({ name: page.seo.title, description: page.seo.description, path: page.path }),
    ...(page.faqs.length ? [faqSchema(page.faqs)] : [])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EPNav active="Company" />

      <section data-screen-label="Facts" style={{ maxWidth: 960, margin: "0 auto", padding: "clamp(48px,7vw,96px) clamp(20px,4vw,48px) 0" }}>
        <nav aria-label="Breadcrumb" style={{ display: "flex", gap: 8, flexWrap: "wrap", fontFamily: "var(--font-label)", fontSize: 13, color: COLOR.slate }}>
          <Link href="/" style={{ color: COLOR.slate }}>Home</Link>
          <span>/</span>
          <Link href="/about" style={{ color: COLOR.slate }}>Company</Link>
          <span>/</span>
          <span style={{ color: COLOR.indigo }}>At a glance</span>
        </nav>
        <h1 style={{ ...TYPE.h1Hero, margin: "28px 0 0" }}>
          ElementPay at a glance
          <span aria-hidden="true" style={fullStopSquare} />
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.55, color: COLOR.slate, margin: "20px 0 0", maxWidth: "58ch" }}>
          The short, factual version of who we are and what we do. Updated October 2026.
        </p>

        <FactsList />

        <h2 style={{ ...TYPE.h2Section, fontSize: "clamp(28px, 1.5vw + 22px, 44px)", margin: "64px 0 0" }}>Common questions</h2>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", marginTop: 20, borderTop: `1px solid rgba(19,17,38,.12)` }}>
          {page.faqs.map((faq) => (
            <div key={faq.q} style={{ padding: "20px 0", borderBottom: "1px solid rgba(19,17,38,.12)" }}>
              <h3 style={{ ...TYPE.h3Card, margin: 0 }}>{faq.q}</h3>
              <p style={{ margin: "8px 0 0", fontSize: 16, lineHeight: 1.6, color: COLOR.slate }}>{faq.a}</p>
            </div>
          ))}
        </div>

        <p style={{ margin: "40px 0 0", fontSize: 15, color: COLOR.slate }}>
          Press and partnership enquiries: <Link href="/contact" style={{ fontWeight: 700 }}>contact us</Link>. Brand assets on the{" "}
          <Link href="/press" style={{ fontWeight: 700 }}>press page</Link>.
        </p>
      </section>

      <div style={{ height: 80 }} />
      <EPFooter />
    </>
  );
}
