import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
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

function Svg({ children, stroke = COLOR.ink }: { children: ReactNode; stroke?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

const ICON_LANDMARK = (
  <Svg>
    <line x1="3" x2="21" y1="22" y2="22" />
    <line x1="6" x2="6" y1="18" y2="11" />
    <line x1="10" x2="10" y1="18" y2="11" />
    <line x1="14" x2="14" y1="18" y2="11" />
    <line x1="18" x2="18" y1="18" y2="11" />
    <polygon points="12 2 20 7 4 7" />
  </Svg>
);

const ICON_ID_CARD = (
  <Svg>
    <path d="M16 10h2" />
    <path d="M16 14h2" />
    <path d="M6.17 15a3 3 0 0 1 5.66 0" />
    <circle cx="9" cy="11" r="2" />
    <rect x="2" y="5" width="20" height="14" rx="2" />
  </Svg>
);

function radar(stroke: string) {
  return (
    <Svg stroke={stroke}>
      <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
      <path d="M4 6h.01" />
      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
      <path d="M12 18h.01" />
      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
      <circle cx="12" cy="12" r="2" />
      <path d="m13.41 10.59 5.66-5.66" />
    </Svg>
  );
}

const ICON_LOCK = (
  <Svg stroke="#fff">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </Svg>
);

const ICON_SHIELD_CHECK = (
  <Svg stroke={COLOR.indigo}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);

const ICON_LIST_CHECKS = (
  <Svg stroke={COLOR.indigo}>
    <path d="m3 17 2 2 4-4" />
    <path d="m3 7 2 2 4-4" />
    <path d="M13 6h8" />
    <path d="M13 12h8" />
    <path d="M13 18h8" />
  </Svg>
);

const ICON_KEY_ROUND = (
  <Svg stroke={COLOR.indigo}>
    <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
    <circle cx="16.5" cy="7.5" r=".5" />
  </Svg>
);

const ICON_USERS = (
  <Svg stroke={COLOR.indigo}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Svg>
);

const ICON_FILE_TEXT = (
  <Svg stroke={COLOR.indigo}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </Svg>
);

const LAYERS = [
  { num: "01", bg: COLOR.mint, icon: ICON_LANDMARK, title: "Funds held with licensed partners", body: "Customer money is held with licensed partner institutions in the markets where we operate, kept separate from ElementPay’s own operating funds." },
  { num: "02", bg: COLOR.amber, icon: ICON_ID_CARD, title: "Business verification", body: "We verify each company’s registration, directors, beneficial owners and use case before it can send or receive money." },
  { num: "03", bg: COLOR.coral, icon: radar(COLOR.ink), title: "Transaction monitoring", body: "Payments are screened against sanctions lists and monitored for unusual activity, in fiat and in stablecoins." },
  { num: "04", bg: COLOR.indigo, icon: ICON_LOCK, title: "Encryption and access control", body: "Data is encrypted in transit and at rest. Staff access is limited by role, protected by multi-factor authentication and logged." },
];

const PARTNER_CERTS = [
  { src: "/badges/soc2-type2.png", alt: "AICPA SOC 2 Type 2 badge", title: "AICPA SOC 2 Type 2", body: "Security, availability and confidentiality controls tested over a period of operation." },
  { src: "/badges/soc1-type2.png", alt: "AICPA SOC 1 Type 2 badge", title: "AICPA SOC 1 Type 2", body: "Controls over financial reporting tested over a period of operation." },
  { src: "/badges/iso27001.png", alt: "ISO/IEC 27001:2022 badge", title: "ISO/IEC 27001:2022", body: "An audited information security management system." },
  { src: "/badges/gdpr.png", alt: "GDPR compliant badge", title: "GDPR compliant", body: "Personal data handled under the EU General Data Protection Regulation." },
];

const COMPLIANCE_PILLARS = [
  { icon: ICON_SHIELD_CHECK, title: "Know your business", body: "Company documents, directors and ultimate beneficial owners checked at onboarding, and reviewed when risk changes." },
  { icon: ICON_LIST_CHECKS, title: "Sanctions and PEP screening", body: "Customers, owners and counterparties screened against global sanctions and politically exposed persons lists." },
  { icon: radar(COLOR.indigo), title: "Ongoing monitoring", body: "Rules and reviews that flag unusual patterns, with escalation and reporting to authorities where required." },
  { icon: ICON_KEY_ROUND, title: "Stablecoin screening", body: "Wallet addresses and on-chain flows screened before USDC and USDT are accepted or sent." },
  { icon: ICON_USERS, title: "Trained people", body: "Staff are trained on AML, fraud and data handling, with a dedicated compliance function." },
  { icon: ICON_FILE_TEXT, title: "Records you can audit", body: "Every onboarding decision and payment is recorded and retained for review." },
];

const PAYMENT_STEPS = [
  { num: "01", title: "Created", body: "Your team or API creates the payment" },
  { num: "02", title: "Approved", body: "Rules and approvers you set release it" },
  { num: "03", title: "Screened", body: "Sanctions and risk checks run" },
  { num: "04", title: "Delivered", body: "Paid on the local rail by a licensed partner" },
  { num: "05", title: "Recorded", body: "Status and reference kept for audit" },
];

// "Approval thresholds" and AI-agent allow-lists aren't built yet (no approval
// workflow or agentic payments infrastructure exists as of 2026-10) so they're
// marked "coming soon" rather than claimed as live, unlike roles/permissions
// and the audit trail, which are both real.
const CONTROLS: Array<[string, string, boolean]> = [
  ["Roles and permissions", "Decide who can view, create and approve payments.", true],
  ["Approval thresholds", "Require one or more approvers above amounts you choose.", false],
  ["Allow-lists", "Limit which recipients your team can pay. AI agent allow-lists are coming with agentic payments.", false],
  ["Audit trail", "Every action is recorded with who did it and when.", true],
];

function pairs<T>(items: T[]): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += 2) out.push(items.slice(i, i + 2));
  return out;
}

function BadgeCircle({ size, inner }: { size: number; inner: number }) {
  return (
    <div style={{ position: "relative", flex: "none", width: size, height: size, borderRadius: "50%", background: "#fff", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: "50%", top: "50%", width: inner, height: inner, transform: "translate(-50%,-50%)" }}>
        <Image src="/badges/aicpa-soc.png" alt="AICPA SOC badge" fill sizes={`${inner}px`} style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
}

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
          alignItems: "center",
        }}
      >
        <div>
          <nav aria-label="Breadcrumb" style={{ display: "flex", gap: 8, flexWrap: "wrap", fontFamily: "var(--font-label)", fontSize: 13, color: COLOR.muted }}>
            <Link href="/" style={{ color: COLOR.muted }}>Home</Link>
            <span>/</span>
            <span style={{ color: COLOR.indigo }}>Security and compliance</span>
          </nav>
          <h1 style={{ ...TYPE.h1Hero, margin: "28px 0 0", maxWidth: "14ch" }}>
            How we keep your money safe
            <span aria-hidden="true" style={fullStopSquare} />
          </h1>
          <p style={{ ...TYPE.lede, margin: "24px 0 0", maxWidth: "52ch" }}>{page.lede}</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 28 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, minHeight: 40, padding: "0 14px", borderRadius: 999, background: COLOR.ink, color: "#fff", fontSize: 13.5, fontWeight: 600, whiteSpace: "nowrap" }}>
              <span style={{ width: 8, height: 8, background: COLOR.mint }} />SOC 2 Type I attested
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, minHeight: 40, padding: "0 14px", borderRadius: 999, background: "#fff", color: COLOR.ink, fontSize: 13.5, fontWeight: 600, whiteSpace: "nowrap" }}>
              <span style={{ width: 8, height: 8, background: COLOR.amber }} />Licensed partner institutions
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, minHeight: 40, padding: "0 14px", borderRadius: 999, background: "#fff", color: COLOR.ink, fontSize: 13.5, fontWeight: 600, whiteSpace: "nowrap" }}>
              <span style={{ width: 8, height: 8, background: COLOR.lilac }} />KYB on every customer
            </span>
          </div>
          <p style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.muted, margin: "22px 0 0" }}>Updated October 2026</p>
        </div>

        <div style={{ width: "100%", maxWidth: 520, justifySelf: "center", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(16px,3vw,28px)", alignItems: "center", padding: "clamp(20px,3vw,32px)", borderRadius: 28, background: COLOR.ink, color: "#fff" }}>
            <BadgeCircle size={84} inner={60} />
            <div style={{ flex: "1 1 200px", minWidth: 0 }}>
              <div style={{ fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".12em", color: COLOR.onDark }}>INDEPENDENTLY ATTESTED</div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px,3vw,36px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, marginTop: 8 }}>SOC 2 Type I</div>
              <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.5, color: COLOR.onDark }}>AICPA Trust Services Criteria for security.</p>
            </div>
          </div>
          <div style={{ padding: "18px clamp(16px,2.4vw,24px) 20px", borderRadius: 24, background: "#fff" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".12em", color: COLOR.slate }}>
              <span style={{ width: 8, height: 8, background: COLOR.mint }} />OUR PARTNERS ARE CERTIFIED TO
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 8, marginTop: 14 }}>
              {PARTNER_CERTS.map((b) => (
                <figure key={b.title} style={{ margin: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <div style={{ position: "relative", width: "100%", maxWidth: 96, aspectRatio: "1/1" }}>
                    <Image src={b.src} alt={`${b.title} certification held by ElementPay partners`} fill sizes="96px" style={{ objectFit: "contain" }} />
                  </div>
                  <figcaption style={{ fontSize: 11.5, lineHeight: 1.3, color: COLOR.slate, textAlign: "center" }}>{b.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: COLOR.cream }}>
        <section data-screen-label="Pillars" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Section, margin: 0 }}>Four layers of protection<span aria-hidden="true" style={fullStopSquare} /></h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
            {pairs(LAYERS).map((pair, i) => (
              <div key={i} style={{ flex: "1 1 440px", display: "flex", flexWrap: "wrap", gap: 12 }}>
                {pair.map((layer) => (
                  <div key={layer.title} style={{ flex: "1 1 200px", display: "grid" }}>
                    <div style={{ padding: 28, borderRadius: 24, background: "#fff", display: "flex", flexDirection: "column", gap: 14, minHeight: 240 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <span aria-hidden="true" style={{ width: 48, height: 48, borderRadius: 14, background: layer.bg, display: "grid", placeItems: "center", flex: "none" }}>{layer.icon}</span>
                        <span style={{ fontFamily: "var(--font-label)", fontSize: 13, color: COLOR.muted }}>{layer.num}</span>
                      </div>
                      <h3 style={{ ...TYPE.h3Card, margin: 0 }}>{layer.title}</h3>
                      <p style={{ fontSize: 15, lineHeight: "23px", color: COLOR.slate, margin: 0 }}>{layer.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section data-screen-label="SOC 2" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "clamp(24px,4vw,56px)", alignItems: "center", padding: "clamp(28px,4vw,56px)", borderRadius: 28, background: COLOR.ink, color: COLOR.cream }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <BadgeCircle size={104} inner={60} />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".12em", color: COLOR.onDark }}>
                <span style={{ width: 8, height: 8, background: COLOR.mint }} />INDEPENDENT ATTESTATION
              </div>
              <h2 style={{ ...TYPE.h2Section, margin: "14px 0 0", color: "#fff" }}>SOC 2 Type I attested<span aria-hidden="true" style={fullStopSquare} /></h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: COLOR.onDark, margin: "16px 0 0", maxWidth: "52ch" }}>
                An independent auditor has examined the design of ElementPay&rsquo;s security controls against the AICPA Trust Services Criteria for security. The report is available to customers and prospects under NDA.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
                <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", minHeight: 48, padding: "0 22px", borderRadius: 999, background: COLOR.amber, color: COLOR.ink, fontWeight: 600, fontSize: 15 }}>
                  Request the SOC 2 report
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section data-screen-label="Partner certifications" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 20, flexWrap: "wrap" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".12em", color: COLOR.slate }}>
                <span style={{ width: 8, height: 8, background: COLOR.mint }} />OUR PARTNERS
              </div>
              <h2 style={{ ...TYPE.h2Section, margin: "12px 0 0", maxWidth: "20ch" }}>Built on independently certified infrastructure<span aria-hidden="true" style={fullStopSquare} /></h2>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: COLOR.slate, margin: 0, maxWidth: "46ch" }}>
              The banking and infrastructure partners that hold funds and process payments for ElementPay carry the certifications below.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
            {pairs(PARTNER_CERTS).map((pair, i) => (
              <div key={i} style={{ flex: "1 1 440px", display: "flex", flexWrap: "wrap", gap: 12 }}>
                {pair.map((cert) => (
                  <div key={cert.title} style={{ flex: "1 1 200px", display: "grid" }}>
                    <div style={{ padding: 24, borderRadius: 24, background: "#fff", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}>
                      <div style={{ position: "relative", width: 96, height: 96 }}>
                        <Image src={cert.src} alt={cert.alt} fill sizes="96px" style={{ objectFit: "contain" }} />
                      </div>
                      <h3 style={{ ...TYPE.h3Card, margin: 0 }}>{cert.title}</h3>
                      <p style={{ fontSize: 15, lineHeight: "23px", color: COLOR.slate, margin: 0 }}>{cert.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.55, color: COLOR.muted, margin: "14px 4px 0" }}>
            These certifications are held by ElementPay&rsquo;s partners. ElementPay&rsquo;s own attestation is SOC 2 Type I.
          </p>
        </section>

        <section data-screen-label="Compliance" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Section, margin: 0 }}>Compliance built into every payment<span aria-hidden="true" style={fullStopSquare} /></h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: COLOR.slate, margin: "16px 0 0", maxWidth: "60ch" }}>
            Our compliance programme follows a risk-based approach to anti-money-laundering and counter-terrorist financing, applied before onboarding and on every transaction after it.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: 12, marginTop: 32 }}>
            {COMPLIANCE_PILLARS.map((c) => (
              <div key={c.title} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: 24, borderRadius: 24, background: "#fff" }}>
                <span aria-hidden="true" style={{ width: 48, height: 48, borderRadius: 14, background: COLOR.tint, display: "grid", placeItems: "center", flex: "none" }}>{c.icon}</span>
                <div>
                  <h3 style={{ ...TYPE.h3Card, margin: 0 }}>{c.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: "23px", color: COLOR.slate, margin: "8px 0 0" }}>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section data-screen-label="Payment path" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Section, margin: 0 }}>What happens to every payment<span aria-hidden="true" style={fullStopSquare} /></h2>
          <div style={{ marginTop: 32, padding: "clamp(20px,3vw,32px)", borderRadius: 28, background: "#fff", overflowX: "auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5,minmax(150px,1fr))", gap: 10, minWidth: 780 }}>
              {PAYMENT_STEPS.map((s, i) => {
                const last = i === PAYMENT_STEPS.length - 1;
                return (
                  <div key={s.num} style={{ position: "relative", padding: 20, borderRadius: 20, background: last ? COLOR.indigo : COLOR.cream, color: last ? "#fff" : COLOR.ink, display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={{ width: 28, height: 28, borderRadius: "50%", background: last ? "#fff" : COLOR.ink, color: last ? COLOR.indigo : "#fff", display: "grid", placeItems: "center", fontFamily: "var(--font-label)", fontSize: 12 }}>{s.num}</span>
                    <b style={{ fontFamily: "var(--font-heading)", fontSize: 19, letterSpacing: "-0.02em" }}>{s.title}</b>
                    <span style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.85 }}>{s.body}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section data-screen-label="Licences" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <div style={{ padding: "clamp(24px,3vw,36px)", borderRadius: 28, background: "#fff", border: `2px dashed ${COLOR.onDark}` }}>
            <div style={{ fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".12em", color: COLOR.indigo, marginBottom: 12 }}>
              LICENCES AND PARTNERS · TO COMPLETE
            </div>
            <h2 style={{ ...TYPE.h2Section, margin: 0 }}>Regulators and banking partners<span aria-hidden="true" style={fullStopSquare} /></h2>
            <p style={{ fontSize: 16, lineHeight: "25px", color: COLOR.slate, margin: "16px 0 0", maxWidth: "60ch" }}>
              Add each licence or registration (regulator, licence type, number, jurisdiction) and each banking partner here before publishing.
            </p>
          </div>
        </section>

        <section data-screen-label="Controls" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Section, margin: 0 }}>Controls you set<span aria-hidden="true" style={fullStopSquare} /></h2>
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
            <h2 style={{ ...TYPE.h2Section, margin: 0, lineHeight: 0.92, letterSpacing: "-0.045em", maxWidth: "14ch" }}>
              Talk to our compliance team<span aria-hidden="true" style={fullStopSquare} />
            </h2>
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
