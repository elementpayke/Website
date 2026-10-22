import type { Metadata } from "next";
import Link from "next/link";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import ContactForm from "@/components/contact/ContactForm";
import { COLOR, TYPE, fullStopSquare } from "@/lib/brand";
import { breadcrumbSchema, jsonLdGraph } from "@/lib/schema";

const TITLE = "Contact ElementPay";
const DESCRIPTION =
  "Talk to the ElementPay team about payouts across Africa, business accounts, OTC desk access or stablecoin rails for your business.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/contact", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const EXPECTATIONS = [
  ["01", "We reply by email", "Usually within one business day, from a real person on the team."],
  ["02", "We scope your markets", "Which countries, currencies and rails fit what you're building."],
  ["03", "We set up a call", "To walk through rates, fees and what going live looks like."],
];

export default function ContactPage() {
  const jsonLd = jsonLdGraph(
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Company", path: "/contact" },
      { name: "Contact", path: "/contact" },
    ])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EPNav active="Company" />
      <section
        data-screen-label="Contact hero"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "clamp(48px,7vw,96px) clamp(20px,4vw,48px) clamp(64px,8vw,112px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))",
          gap: "clamp(32px,5vw,80px)",
          alignItems: "start",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", fontFamily: "var(--font-label)", fontSize: 13, color: COLOR.muted }}>
            <Link href="/" style={{ color: COLOR.muted }}>
              Home
            </Link>
            <span>/</span>
            <span style={{ color: COLOR.indigo }}>Contact</span>
          </div>
          <h1 style={{ ...TYPE.h1Hero, margin: "24px 0 0", maxWidth: "15ch" }}>
            Talk to the team
            <span aria-hidden="true" style={fullStopSquare} />
          </h1>
          <p style={{ fontSize: "clamp(17px,1.4vw,19px)", lineHeight: 1.55, color: COLOR.slate, margin: "24px 0 0", maxWidth: "50ch" }}>
            Tell us about your business and what you need to move. We&apos;ll come back with the markets, rails and
            rates that fit.
          </p>
          <div style={{ display: "grid", gap: 4, marginTop: 40 }}>
            {EXPECTATIONS.map(([n, title, sub]) => (
              <div key={n} style={{ display: "flex", gap: 16, padding: "16px 4px", borderTop: `1px solid ${COLOR.hairline}` }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 700, color: COLOR.violet, flex: "none" }}>
                  {n}
                </span>
                <span style={{ minWidth: 0 }}>
                  <b style={{ display: "block", fontSize: 15 }}>{title}</b>
                  <span style={{ display: "block", fontSize: 14, lineHeight: 1.5, color: COLOR.muted, marginTop: 2 }}>{sub}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ minWidth: 0 }}>
          <ContactForm />
        </div>
      </section>
      <EPFooter />
    </>
  );
}
