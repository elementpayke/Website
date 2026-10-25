import Link from "next/link";
import Image from "next/image";
import { TYPE } from "@/lib/brand";

const MUTED = "#4C4A66";
const INK = "#131126";
const PURPLE = "#3B2ED3";

export default function PlatformSection() {
  return (
    <section data-screen-label="Platform" id="platform" style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(56px,8vw,96px) clamp(12px,3vw,24px) 0", display: "flex", flexDirection: "column", gap: 16, scrollMarginTop: 80 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 20, flexWrap: "wrap", marginBottom: 20, padding: "0 4px" }}>
        <h2 style={{ margin: 0, ...TYPE.h2Section, maxWidth: "14ch" }}>
          One platform, three ways in.
        </h2>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: MUTED, maxWidth: "42ch" }}>
          Finance, operations and product teams work on the same rails, the same balance and the same records.
        </p>
      </div>

      <article style={{ background: "#3B2ED3", color: "#fff", borderRadius: 28, padding: "clamp(24px,3.4vw,40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: 40, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={{ fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".06em", opacity: 0.8 }}>01 · Mboka · for finance teams</span>
          <h3 style={{ margin: 0, ...TYPE.h3Feature, letterSpacing: "-0.04em", lineHeight: 1.04 }}>
            Real business bank accounts, cards and payouts.
          </h3>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, opacity: 0.88, maxWidth: "46ch" }}>
            A web app that gives your company bank accounts in its own name, cards for online spend, and payouts
            to suppliers and staff.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))", gap: "16px 22px" }}>
            {[
              ["Accounts in your name", "Local account details per currency."],
              ["Cards", "For ads, software and suppliers."],
              ["Payouts", "To mobile money and banks."],
            ].map(([t, d]) => (
              <div key={t} style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,.22)" }}>
                <b style={{ fontFamily: "var(--font-heading)", fontSize: 15 }}>{t}</b>
                <span style={{ fontSize: 13, lineHeight: 1.5, opacity: 0.85 }}>{d}</span>
              </div>
            ))}
          </div>
          <a href="https://mboka.finance" style={{ alignSelf: "flex-start", padding: "13px 24px", borderRadius: 999, background: "#fff", color: "#3B2ED3", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            Visit mboka.finance →
          </a>
        </div>
        <div style={{ maxWidth: 420, width: "100%", justifySelf: "center", display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ background: "#fff", color: INK, borderRadius: 22, padding: "18px 20px 8px", boxShadow: "0 34px 60px -30px rgba(10,8,40,.6)", transform: "rotate(-1.5deg)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 12 }}>
              <Image src="/flags/ke.svg" alt="" width={26} height={19} style={{ width: 26, height: 19, borderRadius: 4, objectFit: "cover", boxShadow: "0 0 0 1px rgba(0,0,0,.08)" }} />
              <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }}>
                <b style={{ fontFamily: "var(--font-heading)", fontSize: 15 }}>Kenya shilling account</b>
                <span style={{ fontSize: 11, color: "#6B6880" }}>Local bank · Nairobi</span>
              </div>
              <span style={{ fontFamily: "var(--font-label)", fontSize: 11.5, padding: "4px 9px", borderRadius: 999, background: "#EDEBFB", color: "#3B2ED3" }}>KES</span>
            </div>
            {[["Account name", "ACME TRADING LTD"], ["Account number", "0100 •••• 4471"], ["SWIFT / BIC", "••••KENA"]].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "9px 0", borderTop: "1px solid #EEECF4" }}>
                <span style={{ fontSize: 11.5, color: "#6B6880" }}>{k}</span>
                <span style={{ fontFamily: "var(--font-label)", fontSize: 12.5 }}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#fff", color: INK, borderRadius: 22, padding: "18px 20px 8px", boxShadow: "0 34px 60px -30px rgba(10,8,40,.6)", transform: "rotate(1.5deg) translateX(14px)", marginTop: -6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 12 }}>
              <Image src="/flags/us.svg" alt="" width={26} height={19} style={{ width: 26, height: 19, borderRadius: 4, objectFit: "cover", boxShadow: "0 0 0 1px rgba(0,0,0,.08)" }} />
              <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }}>
                <b style={{ fontFamily: "var(--font-heading)", fontSize: 15 }}>US dollar account</b>
                <span style={{ fontSize: 11, color: "#6B6880" }}>US partner bank</span>
              </div>
              <span style={{ fontFamily: "var(--font-label)", fontSize: 11.5, padding: "4px 9px", borderRadius: 999, background: "#EDEBFB", color: "#3B2ED3" }}>USD</span>
            </div>
            {[["Account number", "•••• 9982"], ["ACH routing", "026•••••9"]].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "9px 0", borderTop: "1px solid #EEECF4" }}>
                <span style={{ fontSize: 11.5, color: "#6B6880" }}>{k}</span>
                <span style={{ fontFamily: "var(--font-label)", fontSize: 12.5 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </article>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        <article style={{ flex: "1 1 380px", minWidth: "min(100%,300px)", background: "#FFB224", color: INK, borderRadius: 28, padding: "clamp(24px,3.4vw,40px)", display: "flex", flexDirection: "column", gap: 20, boxSizing: "border-box" }}>
          <span style={{ fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".06em", opacity: 0.8 }}>02 · Merchant dashboard · for operations teams</span>
          <h3 style={{ margin: 0, ...TYPE.h3Feature, letterSpacing: "-0.04em", lineHeight: 1.04 }}>
            Collections, payouts and approvals in one place.
          </h3>
          <div style={{ background: "#fff", borderRadius: 22, padding: 18, display: "flex", flexDirection: "column", gap: 12, marginTop: "auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 8 }}>
              <div style={{ padding: 12, borderRadius: 14, background: "#F6F4EF" }}>
                <div style={{ fontSize: 11, color: "#6B6880" }}>Collected</div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 700 }}>$128.4k</div>
              </div>
              <div style={{ padding: 12, borderRadius: 14, background: "#F6F4EF" }}>
                <div style={{ fontSize: 11, color: "#6B6880" }}>Paid out</div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 700 }}>$96.2k</div>
              </div>
              <div style={{ padding: 12, borderRadius: 14, background: INK, color: "#fff" }}>
                <div style={{ fontSize: 11, opacity: 0.75 }}>To approve</div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 700 }}>3</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 12, border: "1.5px dashed #CFCBE0" }}>
              <span style={{ width: 28, height: 34, borderRadius: 4, background: "#5ED6B4", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 4, boxSizing: "border-box", fontSize: 8, fontWeight: 700 }}>CSV</span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <b style={{ fontSize: 12.5 }}>october-payouts.csv</b>
                <span style={{ fontSize: 11, color: "#6B6880" }}>250 recipients · 6 countries</span>
              </div>
            </div>
          </div>
          <Link href="/merchant-dashboard" style={{ alignSelf: "flex-start", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, color: INK, textDecoration: "none" }}>
            Explore the dashboard →
          </Link>
        </article>
        <article style={{ flex: "1 1 380px", minWidth: "min(100%,300px)", background: "#fff", color: INK, border: "1px solid rgba(19,17,38,.08)", borderRadius: 28, padding: "clamp(24px,3.4vw,40px)", display: "flex", flexDirection: "column", gap: 20, boxSizing: "border-box" }}>
          <span style={{ fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".06em", opacity: 0.8 }}>03 · ElementPay API · for product teams</span>
          <h3 style={{ margin: 0, ...TYPE.h3Feature, letterSpacing: "-0.04em", lineHeight: 1.04 }}>
            Build payments into your own product.
          </h3>
          <div style={{ background: INK, color: "#E8E6F5", borderRadius: 18, overflow: "hidden", marginTop: "auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF6A55" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFB224" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#5ED6B4" }} />
            </div>
            <pre style={{ margin: 0, padding: "16px 18px", fontFamily: "var(--font-label)", fontSize: 12.5, lineHeight: 1.75, overflowX: "auto" }}>
              <span style={{ color: "#A79EFF" }}>POST</span> /v1/payouts{"\n"}
              {"{ \"amount\": 1000, \"currency\": \"KES\",\n  \"rail\": \"mpesa\", \"reference\": \"INV-208\" }"}
              {"\n"}
              <span style={{ color: "#5ED6B4" }}>→ webhook: payout.settled</span>
            </pre>
          </div>
          <Link href="/payments-api" style={{ alignSelf: "flex-start", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, color: PURPLE }}>
            Explore the API →
          </Link>
        </article>
      </div>
      <p style={{ margin: "4px 4px 0", fontSize: 14, lineHeight: "21px", color: MUTED }}>
        Holding stablecoins? The <Link href="/elementpay-dapp" style={{ fontWeight: 700 }}>ElementPay dApp</Link> handles USDC and USDT on- and off-ramps.
      </p>
    </section>
  );
}
