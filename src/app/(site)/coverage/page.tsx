import Image from "next/image";
import Link from "next/link";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import DesignJsonLd from "@/components/design/DesignJsonLd";
import CoverageTable from "@/components/coverage/CoverageTable";
import { designHead, designMetadata } from "@/lib/design/pages";
import { hover } from "@/lib/design/pseudo";
import { GLOBAL, LOCAL_RAIL_COUNT, flagsOf } from "@/lib/geo/coverageTable";

// Design: Coverage v3.dc.html, which replaces the earlier map-based page.
export const metadata = designMetadata(designHead("/coverage"));

const section = (top: string, bottom = "0") => ({
  maxWidth: 1200,
  margin: "0 auto",
  padding: `${top} clamp(16px,4vw,24px) ${bottom}`,
});
const h2 = {
  fontFamily: "var(--font-heading)",
  fontSize: "clamp(28px, 1.5vw + 22px, 44px)",
  fontWeight: 700,
  letterSpacing: "-0.04em",
  lineHeight: 1,
} as const;
const statCard = { padding: 22, borderRadius: 20, background: "#fff", border: "1px solid rgba(19,17,38,.08)" } as const;
const statNum = { fontFamily: "var(--font-heading)", fontSize: "clamp(26px,2.72vw,35px)", fontWeight: 700, letterSpacing: "-0.03em" } as const;
const sq = (c: string) => ({ width: 12, height: 12, background: c, flex: "none" as const });

const REGION_CARDS = [
  {
    t: "East Africa",
    c: "#5ED6B4",
    flags: flagsOf("East Africa"),
    p: "Payouts in Kenya, Uganda, Tanzania, Rwanda and Ethiopia over M-Pesa, Airtel Money, MTN MoMo, Mixx by Yas, telebirr, PesaLink and local banks. Business accounts in KES and TZS.",
  },
  {
    t: "West Africa",
    c: "#FFB224",
    flags: flagsOf("West Africa"),
    p: "Bank transfers in Nigeria, MTN MoMo, Telecel Cash and AT Money in Ghana, and Orange Money, Wave, Moov Money, MTN MoMo and Free Money across the XOF markets. Accounts in NGN, GHS and XOF.",
  },
  {
    t: "Central Africa",
    c: "#FF6A55",
    flags: flagsOf("Central Africa"),
    p: "MTN MoMo and Orange Money in Cameroon, and M-Pesa, Airtel Money and Orange Money in DR Congo. Business accounts in XAF.",
  },
  {
    t: "Southern Africa",
    c: "#A79EFF",
    flags: flagsOf("Southern Africa"),
    p: "Bank EFT in South Africa, MTN MoMo, Airtel Money and Zamtel in Zambia, Airtel Money and TNM Mpamba in Malawi, M-Pesa and e-Mola in Mozambique, Orange Money and banks in Botswana. Accounts in ZAR.",
  },
  {
    t: "Global accounts",
    c: "#3B2ED3",
    flags: GLOBAL.slice(0, 8).map(([iso, name]) => ({ src: `/flags/${iso}.svg`, alt: name })),
    p: "Business accounts in 30 currencies, including USD, EUR, GBP, CAD, AED, CNY and HKD, so you can receive from customers and pay suppliers in their own currency.",
  },
  {
    t: "Stablecoin funding",
    c: "#131126",
    flags: [],
    p: "Fund payouts to any of the 20 African countries in USDC or USDT, or off-ramp stablecoins into local currency, mobile money and bank accounts from one balance.",
  },
];

const RELATED = [
  { t: "Stablecoin payments in Africa", d: "Move USDC and USDT into mobile money and bank accounts across 20 African countries.", href: "/stablecoin-payments-africa", c: "#5ED6B4" },
  { t: "Payment gateway for Africa", d: "Collect and pay out across mobile money and banks through one platform.", href: "/payment-gateway-africa", c: "#FFB224" },
  { t: "B2B stablecoin payments", d: "Pay suppliers and partners in stablecoins and settle them in local currency.", href: "/b2b-stablecoin-payments", c: "#A79EFF" },
  { t: "Business accounts", d: "Accounts in your company’s name in 30 currencies.", href: "/business-accounts", c: "#3B2ED3" },
];

export default function CoveragePage() {
  return (
    <div style={{ background: "#F6F4EF" }}>
      <DesignJsonLd url="/coverage" />
      <div style={{ position: "sticky", top: 0, zIndex: 30, background: "#F6F4EF", boxShadow: "0 1px 0 rgba(19,17,38,.08)" }}>
        <EPNav />
      </div>

      <main>
        <section style={section("clamp(40px,7vw,88px)")}>
          <nav aria-label="Breadcrumb" style={{ display: "flex", gap: 8, fontFamily: "var(--font-label)", fontSize: 12, color: "#6E6C8A", marginBottom: 22 }}>
            <Link href="/" className={hover("color:#131126")} style={{ color: "#6E6C8A" }}>
              Home
            </Link>
            <span>/</span>
            <span style={{ color: "#131126" }}>Coverage</span>
          </nav>
          <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "clamp(34px, 2.2vw + 26px, 58px)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 0.98, maxWidth: "15ch" }}>
            Payment coverage across Africa and 30 currencies
            <span aria-hidden="true" style={{ display: "inline-block", width: ".2em", height: ".2em", marginLeft: ".06em", background: "#FFB224" }} />
          </h1>
          <p style={{ margin: "24px 0 0", fontSize: "clamp(16px,1.6vw,19px)", lineHeight: 1.55, color: "#4C4A66", maxWidth: "56ch" }}>
            Pay out to mobile money and bank accounts in 20 African countries. Hold and receive money in business accounts in 30 currencies. Fund any payout in USD, EUR, GBP, USDC or USDT, with the rate shown before you confirm.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: 10, marginTop: 40 }}>
            <div style={statCard}>
              <div style={statNum}>20</div>
              <div style={{ fontSize: 14, color: "#4C4A66", marginTop: 4 }}>African payout countries</div>
            </div>
            <div style={statCard}>
              <div style={statNum}>30</div>
              <div style={{ fontSize: 14, color: "#4C4A66", marginTop: 4 }}>account currencies</div>
            </div>
            <div style={statCard}>
              <div style={statNum}>{LOCAL_RAIL_COUNT}</div>
              <div style={{ fontSize: 14, color: "#4C4A66", marginTop: 4 }}>local payout rails</div>
            </div>
            <div style={{ padding: 22, borderRadius: 20, background: "#3B2ED3", color: "#fff" }}>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(24px,2.25vw,31px)", fontWeight: 700, letterSpacing: "-0.03em", whiteSpace: "nowrap", lineHeight: 1.25 }}>USDC · USDT</div>
              <div style={{ fontSize: 14, opacity: 0.88, marginTop: 4 }}>stablecoin funding and off-ramps</div>
            </div>
          </div>
        </section>

        <section aria-labelledby="regions-h" style={section("clamp(64px,8vw,104px)")}>
          <h2 id="regions-h" style={{ ...h2, margin: "0 0 28px", maxWidth: "20ch" }}>
            Cross-border payouts in Africa, region by region
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: 12 }}>
            {REGION_CARDS.map((rc) => (
              <article key={rc.t} style={{ display: "flex", flexDirection: "column", gap: 12, padding: 24, borderRadius: 24, background: "#fff", border: "1px solid rgba(19,17,38,.08)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={sq(rc.c)} />
                  <h3 style={{ margin: 0, flex: 1, minWidth: 0, fontFamily: "var(--font-heading)", fontSize: "clamp(19px, 0.45vw + 17px, 24px)", fontWeight: 700, letterSpacing: "-0.02em" }}>{rc.t}</h3>
                </div>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "#4C4A66" }}>{rc.p}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: "auto" }}>
                  {rc.flags.map((f) => (
                    <Image key={f.src} src={f.src} alt={f.alt} title={f.alt} width={26} height={18} style={{ width: 26, height: 18, borderRadius: 3, objectFit: "cover", boxShadow: "0 0 0 1px rgba(0,0,0,.08)" }} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="table" aria-labelledby="table-h" style={{ ...section("clamp(64px,8vw,104px)"), scrollMarginTop: 80 }}>
          <CoverageTable />
          <p style={{ margin: "14px 4px 0", fontSize: 13, lineHeight: 1.55, color: "#6E6C8A" }}>
            Delivery times depend on the local rail. Coverage grows over time; <Link href="/contact">talk to sales</Link> about a market that is not listed.
          </p>
        </section>

        <section aria-labelledby="rel-h" style={section("clamp(64px,8vw,104px)")}>
          <h2 id="rel-h" style={{ ...h2, margin: "0 0 28px" }}>
            Related solutions for African payments
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 12 }}>
            {RELATED.map((x) => (
              <Link
                key={x.href}
                href={x.href}
                className={hover("border-color:#3B2ED3;color:#131126")}
                style={{ display: "flex", flexDirection: "column", gap: 12, padding: 24, borderRadius: 24, background: "#fff", border: "1px solid rgba(19,17,38,.08)", color: "#131126", minHeight: 220 }}
              >
                <span style={sq(x.c)} />
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 21, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}>{x.t}</span>
                <span style={{ fontSize: 14, lineHeight: 1.55, color: "#4C4A66", flex: 1 }}>{x.d}</span>
                <span style={{ fontSize: 13.5, fontWeight: 700, color: "#3B2ED3" }}>Explore →</span>
              </Link>
            ))}
          </div>
        </section>

        <section style={section("clamp(64px,8vw,104px)", "clamp(56px,7vw,88px)")}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: 28, alignItems: "center", padding: "clamp(28px,4vw,52px)", borderRadius: 28, background: "#131126", color: "#fff" }}>
            <div>
              <h2 style={{ ...h2, margin: 0 }}>Ready to move money across borders?</h2>
              <p style={{ margin: "16px 0 0", fontSize: 16, lineHeight: 1.55, color: "#B4B1D0", maxWidth: "46ch" }}>
                Tell us where you pay and collect. We will confirm coverage for your corridors and set up your account.
              </p>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-start" }}>
              <Link
                href="/contact"
                className={hover("background:#fff;color:#131126")}
                style={{ display: "inline-flex", alignItems: "center", minHeight: 52, padding: "0 24px", borderRadius: 999, background: "#FFB224", color: "#131126", fontWeight: 700, fontSize: 15 }}
              >
                Talk to sales
              </Link>
              <Link
                href="/#platform"
                className={hover("border-color:#fff;color:#fff")}
                style={{ display: "inline-flex", alignItems: "center", minHeight: 52, padding: "0 24px", borderRadius: 999, border: "1.5px solid rgba(255,255,255,.4)", color: "#fff", fontWeight: 700, fontSize: 15 }}
              >
                See the platform
              </Link>
            </div>
          </div>
        </section>
      </main>

      <EPFooter />
    </div>
  );
}
