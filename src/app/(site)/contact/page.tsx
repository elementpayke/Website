import Link from "next/link";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import DesignJsonLd from "@/components/design/DesignJsonLd";
import ContactForm from "@/components/contact/ContactForm";
import { designHead, designMetadata } from "@/lib/design/pages";

export const metadata = designMetadata(designHead("/contact"));

const STEPS = ["We reply within one business day.", "A 30-minute call to scope your markets and use case.", "Sandbox access and a pricing proposal."];

/** Talk to sales (design: contact.dc.html). */
export default function ContactPage() {
  return (
    <div style={{ background: "#F6F4EF" }}>
      <DesignJsonLd url="/contact" />
      <div style={{ position: "sticky", top: 0, zIndex: 30 }}>
        <EPNav active="Company" />
      </div>
      <section
        data-screen-label="Talk to sales"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "clamp(48px,7vw,96px) clamp(20px,4vw,48px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))",
          gap: "clamp(32px,5vw,72px)",
          alignItems: "start",
        }}
      >
        <div style={{ position: "sticky", top: 120 }}>
          <div style={{ fontFamily: "var(--font-label)", fontSize: 13, color: "#3B2ED3" }}>Talk to sales</div>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(34px, 2.2vw + 26px, 58px)", lineHeight: 0.95, letterSpacing: "-0.045em", fontWeight: 700, margin: "20px 0 0" }}>
            Tell us how your business moves money
            <span aria-hidden="true" style={{ display: "inline-block", width: ".2em", height: ".2em", marginLeft: ".06em", background: "#FFB224" }} />
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "#4C4A66", margin: "24px 0 0", maxWidth: "42ch" }}>
            A few details about your company and what you need help us bring the right coverage, pricing and integration plan to the first call.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 14, marginTop: 36, fontSize: 16, color: "#4C4A66" }}>
            {STEPS.map((t, i) => (
              <div key={t} style={{ display: "flex", gap: 14 }}>
                <span style={{ fontFamily: "var(--font-label)", color: "#3B2ED3" }}>{String(i + 1).padStart(2, "0")}</span>
                {t}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: "#6E6C8A", margin: "36px 0 0" }}>
            Existing customer?{" "}
            <Link href="/help" style={{ fontWeight: 500 }}>
              Visit the help centre
            </Link>
          </p>
        </div>
        <div style={{ borderRadius: 28, background: "#fff", padding: "clamp(24px,4vw,44px)" }}>
          <ContactForm />
        </div>
      </section>
      <EPFooter />
    </div>
  );
}
