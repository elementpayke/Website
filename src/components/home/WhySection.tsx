import { TYPE } from "@/lib/brand";

const FEATURES: Array<[string, string, string]> = [
  ["#FFB224", "One integration", "One platform for every market and rail we cover."],
  ["#5ED6B4", "Pricing upfront", "The rate and fee are shown before you confirm."],
  ["#7C6FFF", "Every payment traceable", "Your reference and a status on every payment."],
  ["#FF6A55", "Approvals built in", "Decide who can create and release payments."],
];

export default function WhySection() {
  return (
    <section data-screen-label="Why" id="why" style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(72px,9vw,112px) clamp(12px,3vw,24px) 0" }}>
      <div style={{ borderRadius: 28, background: "#131126", color: "#fff", padding: "clamp(28px,4vw,48px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(28px,4vw,56px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".06em", opacity: 0.7 }}>Why ElementPay</span>
          <h2 style={{ margin: 0, ...TYPE.h2Section }}>
            Built for teams that need control.
          </h2>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#B4B1D0", maxWidth: "42ch" }}>
            ElementPay is a financial technology company, not a bank. Banking services are provided by licensed
            partner institutions, and every customer goes through business verification.
          </p>
          <a
            href="/security-and-compliance"
            style={{ alignSelf: "flex-start", marginTop: 4, padding: "12px 22px", borderRadius: 999, border: "1px solid rgba(255,255,255,.22)", color: "#fff", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, textDecoration: "none" }}
          >
            How we protect funds →
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: 12 }}>
          {FEATURES.map(([color, title, desc]) => (
            <div key={title} style={{ padding: 22, borderRadius: 20, background: "rgba(255,255,255,.07)" }}>
              <span style={{ display: "block", width: 10, height: 10, background: color }} />
              <h3 style={{ margin: "14px 0 0", fontFamily: "var(--font-heading)", fontSize: "clamp(19px, 0.45vw + 17px, 24px)", fontWeight: 700, letterSpacing: "-0.02em" }}>{title}</h3>
              <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.55, color: "#B4B1D0" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
