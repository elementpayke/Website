"use client";

import { useState } from "react";
import { COLOR } from "@/lib/brand";

const TABS = ["cURL", "Node", "Python"];
const CODE = [
  `curl https://api.elementpay.net/v1/payouts \\
  -H "Authorization: Bearer $EP_KEY" \\
  -d amount=2500 \\
  -d source_currency=USDC \\
  -d destination[country]=KE \\
  -d destination[rail]=mpesa \\
  -d destination[phone]=+254712345678`,
  `const payout = await elementpay.payouts.create({
  amount: 2500,
  source_currency: "USDC",
  destination: {
    country: "KE",
    rail: "mpesa",
    phone: "+254712345678"
  }
});`,
  `payout = elementpay.Payout.create(
    amount=2500,
    source_currency="USDC",
    destination={
        "country": "KE",
        "rail": "mpesa",
        "phone": "+254712345678",
    },
)`,
];
const EVENTS: Array<[string, string, string]> = [
  ["order.created", "2,500 USDC → KES, M-Pesa", "09:41:02"],
  ["quote.locked", "1 USDC = 127.46 KES", "09:41:02"],
  ["payout.routed", "Safaricom M-Pesa · Kenya", "09:41:05"],
  ["payout.settled", "KES 318,650 delivered", "09:41:36"],
];

function segStyle(on: boolean) {
  return {
    padding: "8px 14px",
    border: 0,
    borderRadius: 9,
    cursor: "pointer" as const,
    font: "500 14px var(--font-body)",
    background: on ? "#fff" : "transparent",
    color: on ? COLOR.ink : COLOR.onDark,
  };
}

export default function ApiDemo() {
  const [tabIdx, setTabIdx] = useState(0);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: 12 }}>
      <div style={{ borderRadius: 24, background: COLOR.ink, overflow: "hidden", minWidth: 0 }}>
        <div style={{ display: "flex", gap: 4, padding: 12 }}>
          {TABS.map((t, i) => (
            <button key={t} type="button" onClick={() => setTabIdx(i)} style={segStyle(i === tabIdx)}>{t}</button>
          ))}
        </div>
        <pre style={{ margin: 0, padding: "8px 24px 28px", overflowX: "auto", fontFamily: "var(--font-label)", fontSize: 13, lineHeight: "22px", color: "#D9D7FB", whiteSpace: "pre" }}>
          {CODE[tabIdx]}
        </pre>
      </div>
      <div style={{ borderRadius: 24, background: "#fff", padding: 24, display: "grid", gap: 0, alignContent: "start" }}>
        <div style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.muted, marginBottom: 12 }}>WEBHOOK EVENTS · ORDER ord_8f3c21</div>
        {EVENTS.map(([n, d, t], i) => (
          <div key={n} style={{ display: "grid", gridTemplateColumns: "16px 1fr auto", gap: 14, alignItems: "start" }}>
            <span style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: COLOR.indigo, marginTop: 4, flex: "none" }} />
              {i < EVENTS.length - 1 && <span style={{ width: 2, flex: 1, background: COLOR.tint }} />}
            </span>
            <span style={{ paddingBottom: 18 }}>
              <span style={{ display: "block", fontFamily: "var(--font-label)", fontSize: 14, fontWeight: 500 }}>{n}</span>
              <span style={{ display: "block", fontSize: 13, color: COLOR.slate, marginTop: 2 }}>{d}</span>
            </span>
            <span style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.muted }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
