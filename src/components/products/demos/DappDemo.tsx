"use client";

import { useState } from "react";
import Image from "next/image";
import { COLOR } from "@/lib/brand";
import { RATE, fmt } from "@/lib/products/fx";

const DESTINATIONS: Array<[string, string, string, string, string]> = [
  ["ke", "Kenya", "KES", "M-Pesa", "+254 7•• ••• 412"],
  ["ng", "Nigeria", "NGN", "Bank", "•••• 4821"],
  ["gh", "Ghana", "GHS", "MTN MoMo", "+233 2•• ••• 118"],
  ["ug", "Uganda", "UGX", "MTN MoMo", "+256 7•• ••• 903"],
  ["tz", "Tanzania", "TZS", "M-Pesa", "+255 7•• ••• 551"],
  ["sn", "Senegal", "XOF", "Wave", "+221 7•• ••• 260"],
];

const STEPS: Array<[string, string]> = [
  ["Connect", "Connect your self-custody wallet to the dApp."],
  ["Quote", "Enter the USDC or USDT amount and a destination to see the local payout."],
  ["Sign", "Approve the transaction. Funds arrive on the phone or account."],
];

export default function DappDemo() {
  const [token, setToken] = useState("USDC");
  const [amt, setAmt] = useState("250");
  const [destIdx, setDestIdx] = useState(0);
  const [done, setDone] = useState(false);

  const [, , currency, rail, phone] = DESTINATIONS[destIdx];
  const amount = parseFloat(amt) || 0;
  const out = fmt(amount * (RATE[currency] ?? 1) * 0.995);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: 12, alignItems: "stretch" }}>
      <div style={{ borderRadius: 28, background: COLOR.ink, padding: "clamp(24px,4vw,48px)", display: "grid", placeItems: "center" }}>
        <div style={{ width: "min(100%,380px)", borderRadius: 24, background: "#fff", padding: 22 }}>
          {!done ? (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 600 }}>ElementPay dApp</span>
                <span style={{ fontFamily: "var(--font-label)", fontSize: 12, padding: "6px 10px", borderRadius: 999, background: COLOR.tint, color: COLOR.indigo }}>0x8f3…c21a</span>
              </div>
              <div style={{ marginTop: 16, padding: 16, borderRadius: 16, background: "#F6F4EF" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: COLOR.muted }}>
                  <span>You sell</span>
                  <span style={{ display: "flex", gap: 4 }}>
                    {["USDC", "USDT"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setToken(t)}
                        style={{ border: 0, borderRadius: 6, padding: "3px 8px", cursor: "pointer", font: "600 11px var(--font-label)", background: token === t ? COLOR.ink : "#fff", color: token === t ? "#fff" : COLOR.slate }}
                      >
                        {t}
                      </button>
                    ))}
                  </span>
                </div>
                <input
                  type="text"
                  inputMode="decimal"
                  value={amt}
                  onChange={(e) => setAmt(e.target.value)}
                  aria-label="Amount"
                  style={{ width: "100%", boxSizing: "border-box", border: 0, background: "transparent", outline: "none", font: "600 32px var(--font-heading)", color: COLOR.ink, padding: 0, marginTop: 4 }}
                />
              </div>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginTop: 10 }}>
                {DESTINATIONS.map(([f, n], i) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setDestIdx(i)}
                    style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "8px 11px", border: 0, borderRadius: 10, cursor: "pointer", font: "500 13px var(--font-body)", background: i === destIdx ? COLOR.ink : "#F6F4EF", color: i === destIdx ? "#fff" : COLOR.ink }}
                  >
                    <Image src={`/flags/${f}.svg`} alt="" width={18} height={13} style={{ width: 18, height: 13, borderRadius: 2, objectFit: "cover" }} />
                    {n}
                  </button>
                ))}
              </div>
              <div style={{ marginTop: 10, padding: 16, borderRadius: 16, background: COLOR.ink, color: "#fff" }}>
                <div style={{ fontSize: 12, color: COLOR.onDark }}>To {rail} · {phone}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: 32, fontWeight: 700 }}>{out}</span>
                  <span style={{ fontFamily: "var(--font-label)" }}>{currency}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setDone(true)}
                style={{ width: "100%", marginTop: 12, height: 50, border: 0, borderRadius: 14, background: COLOR.indigo, color: "#fff", font: "500 16px var(--font-body)", cursor: "pointer" }}
              >
                Sign and cash out
              </button>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "24px 8px" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: COLOR.indigo, color: "#fff", display: "grid", placeItems: "center", fontSize: 24, margin: "0 auto" }}>✓</div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 700, marginTop: 16 }}>{out} {currency}</div>
              <div style={{ fontSize: 14, color: COLOR.slate, marginTop: 6 }}>Delivered to {rail} in 31s</div>
              <button
                type="button"
                onClick={() => setDone(false)}
                style={{ marginTop: 20, height: 44, padding: "0 18px", border: 0, borderRadius: 12, background: "#F6F4EF", color: COLOR.ink, font: "500 15px var(--font-body)", cursor: "pointer" }}
              >
                Cash out again
              </button>
            </div>
          )}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 10 }}>
        {STEPS.map(([t, d], i) => (
          <div key={t} style={{ padding: 24, borderRadius: 22, background: "#fff", display: "flex", gap: 18 }}>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 40, lineHeight: 1, fontWeight: 700, color: COLOR.violet }}>{String(i + 1).padStart(2, "0")}</span>
            <span>
              <b style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 700 }}>{t}</b>
              <span style={{ display: "block", fontSize: 15, lineHeight: "22px", color: COLOR.slate, marginTop: 4 }}>{d}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
