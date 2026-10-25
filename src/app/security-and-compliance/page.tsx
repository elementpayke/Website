import type { Metadata } from "next";
import Link from "next/link";
import { getMarketingPage } from "@/lib/marketing/pagesData";
import { breadcrumbSchema, faqSchema, jsonLdGraph, serviceSchema } from "@/lib/schema";
import { COLOR, TYPE, fullStopSquare } from "@/lib/brand";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";

const page = getMarketingPage("/security-and-compliance")!;

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

const PILLARS: Array<[string, string]> = [
  ["Business verification", "We verify each company's registration, directors, beneficial owners and use case before it can send or receive money."],
  ["Transaction monitoring", "Payments are screened against sanctions lists and monitored for unusual activity, in fiat and stablecoins."],
  ["Licensed partners", "Customer funds are held with licensed banking partners in the markets where we operate."],
  ["Data security", "Data is encrypted in transit and at rest. Access is limited by role and logged."],
];

// "Approval thresholds" and AI-agent allow-lists aren't built yet (no
// approval workflow or agentic payments infrastructure exists as of
// 2026-10) — marked accordingly rather than claimed as live, unlike
// roles/permissions and the audit trail, which are both real.
const CONTROLS: Array<[string, string, boolean]> = [
  ["Roles and permissions", "Decide who on your team can view, create and manage payments.", true],
  ["Approval thresholds", "Require one or more approvers above amounts you choose.", false],
  ["Allow-lists", "Limit which recipients your team can pay. AI agent allow-lists are coming with agentic payments.", false],
  ["Audit trail", "Every action is recorded with who did it and when.", true],
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
            <span style={{ color: COLOR.indigo }}>Security and compliance</span>
          </nav>
          <h1 style={{ ...TYPE.h1Hero, margin: "28px 0 0" }}>
            How we protect your money
            <span aria-hidden="true" style={fullStopSquare} />
          </h1>
          <p style={{ ...TYPE.lede, margin: "24px 0 0", maxWidth: "50ch" }}>{page.lede}</p>
          <p style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.muted, margin: "20px 0 0" }}>Updated October 2026</p>
        </div>
        <div style={{ padding: 24, borderRadius: 24, background: COLOR.ink, color: COLOR.cream }}>
          <div style={{ fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".12em", color: COLOR.onDark }}>QUICK ANSWER</div>
          <p style={{ fontSize: 18, lineHeight: "28px", margin: "12px 0 0" }}>
            ElementPay is a financial technology company, not a bank. Banking services are provided by licensed partner institutions. Every business is verified before going live, and every payment is screened and monitored.
          </p>
        </div>
      </section>

      <div style={{ background: COLOR.cream }}>
        <section data-screen-label="Pillars" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Section, margin: 0 }}>Four layers of protection.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 12, marginTop: 32 }}>
            {PILLARS.map(([t, d]) => (
              <div key={t} style={{ padding: 28, borderRadius: 24, background: "#fff", display: "flex", flexDirection: "column", gap: 12 }}>
                <h3 style={{ ...TYPE.h3Feature, margin: 0 }}>{t}</h3>
                <p style={{ fontSize: 15, lineHeight: "23px", color: COLOR.slate, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section data-screen-label="Licences" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <div style={{ padding: "clamp(24px,3vw,36px)", borderRadius: 28, background: "#fff", border: `2px dashed ${COLOR.onDark}` }}>
            <div style={{ fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".12em", color: COLOR.indigo, marginBottom: 12 }}>
              LICENCES AND PARTNERS · TO COMPLETE
            </div>
            <h2 style={{ ...TYPE.h2Section, margin: 0 }}>Regulators and banking partners.</h2>
            <p style={{ fontSize: 16, lineHeight: "25px", color: COLOR.slate, margin: "16px 0 0", maxWidth: "60ch" }}>
              Add each licence or registration (regulator, licence type, number, jurisdiction) and each banking partner here before publishing.
            </p>
          </div>
        </section>

        <section data-screen-label="Controls" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Section, margin: 0 }}>Controls you set.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 12, marginTop: 32 }}>
            {CONTROLS.map(([t, d, live]) => (
              <div key={t} style={{ padding: 28, borderRadius: 24, background: "#fff", display: "flex", flexDirection: "column", gap: 12 }}>
                <h3 style={{ ...TYPE.h3Feature, margin: 0 }}>{live ? t : `${t}, coming soon`}</h3>
                <p style={{ fontSize: 15, lineHeight: "23px", color: COLOR.slate, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 64,
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
            <h2 style={{ ...TYPE.h2Cta, margin: 0, maxWidth: "14ch" }}>Talk to our compliance team.</h2>
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
