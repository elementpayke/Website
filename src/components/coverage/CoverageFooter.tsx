import Link from "next/link";

// Design: Coverage.html keeps its own compact footer.
const COLUMNS: Array<[string, Array<[string, string]>]> = [
  ["Platform", [["Mboka", "https://mboka.finance"], ["Merchant dashboard", "/merchant-dashboard"], ["ElementPay API", "/payments-api"], ["ElementPay dApp", "/elementpay-dapp"]]],
  ["Products", [["Payments", "/payments"], ["Settlement & FX", "/settlement-and-fx"], ["Accounts", "/business-accounts"], ["OTC desk", "/otc-desk"], ["Stablecoins", "/stablecoins"]]],
  ["Resources", [["Coverage", "/coverage"], ["Blog", "/blog"], ["Help centre", "/help"], ["Status", "/status"], ["Docs", "https://partners.elementpay.net/"]]],
  ["Company", [["About", "/about"], ["Why ElementPay", "/why-elementpay"], ["Press", "/press"], ["Contact", "/contact"], ["Privacy", "https://www.elementpay.net/privacy-policy"]]],
];

export default function CoverageFooter() {
  return (
    <footer className="wrap" style={{ paddingTop: "clamp(56px,7vw,96px)", paddingBottom: 48 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,160px),1fr))", gap: 40 }}>
        <div style={{ gridColumn: "span 2", minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 28, height: 28, borderRadius: 8, background: "#3B2ED3", display: "grid", placeItems: "center" }}>
              <span style={{ width: 12, height: 12, borderRadius: 3, background: "#fff" }} />
            </span>
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 19, letterSpacing: "-0.02em" }}>ElementPay</span>
          </div>
          <p style={{ fontSize: 15, lineHeight: "23px", color: "#4C4A66", margin: "14px 0 0", maxWidth: "34ch" }}>Payment rails for emerging markets. Mobile money, banks and stablecoins through one API.</p>
        </div>
        {COLUMNS.map(([h, links]) => (
          <div key={h} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 10, alignContent: "start", fontSize: 15 }}>
            <span style={{ fontWeight: 600 }}>{h}</span>
            {links.map(([t, href]) =>
              href.startsWith("http") ? (
                <a key={t} href={href} style={{ color: "#4C4A66" }}>
                  {t}
                </a>
              ) : (
                <Link key={t} href={href} style={{ color: "#4C4A66" }}>
                  {t}
                </Link>
              ),
            )}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 56, display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap", fontSize: 13, lineHeight: "20px", color: "#6E6C8A" }}>
        <p style={{ margin: 0, maxWidth: "72ch" }}>
          ElementPay is a financial technology company, not a bank. Banking services are provided by licensed partner institutions. Digital asset services are subject to local regulation. Rates shown are indicative.
        </p>
        <span>© 2026 ElementPay</span>
      </div>
    </footer>
  );
}
