"use client";

import { useState } from "react";
import Image from "next/image";
import { COLOR } from "@/lib/brand";

const NAV = ["Overview", "Payouts", "Collections", "Accounts", "Stablecoins", "Approvals"];
const TX: Array<[string, string, string, string, string]> = [
  ["ke", "Wanjiru K.", "M-Pesa", "KES 64,000", "Settled"],
  ["ng", "Lagos Supplies", "Bank", "₦2,400,000", "Settled"],
  ["gh", "Accra Cocoa Co-op", "MTN MoMo", "GHS 41,500", "Settled"],
  ["sn", "Dakar Textiles", "Wave", "XOF 1.8M", "Routing"],
  ["us", "Contractor payout", "USDC wallet", "2,500 USDC", "Settled"],
  ["za", "Cape Logistics", "Bank EFT", "ZAR 88,400", "Settled"],
];

export default function DashboardDemo() {
  const [navIdx, setNavIdx] = useState(0);
  const [approved, setApproved] = useState(false);

  const tx = TX.filter((t) => (navIdx === 4 ? t[2].includes("USDC") : true));
  const kpis: Array<[string, string]> = [
    ["Collected today", "$128.4k"],
    ["Paid out", "$96.2k"],
    ["USDC balance", "84,210"],
    ["To approve", approved ? "0" : "1"],
  ];

  return (
    <div style={{ borderRadius: 24, background: "#fff", overflow: "hidden", display: "grid", gridTemplateColumns: "minmax(0,200px) minmax(0,1fr)", boxShadow: "0 40px 80px -50px rgba(19,17,38,.4)" }}>
      <div style={{ background: COLOR.ink, color: COLOR.onDark, padding: "20px 14px", display: "grid", gap: 4, alignContent: "start", fontSize: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff", fontWeight: 600, padding: "0 8px 16px" }}>
          <span style={{ width: 22, height: 22, borderRadius: 6, background: COLOR.indigo, display: "grid", placeItems: "center" }}>
            <span style={{ width: 9, height: 9, borderRadius: 2, background: "#fff" }} />
          </span>
          ElementPay
        </div>
        {NAV.map((t, i) => (
          <button
            key={t}
            type="button"
            onClick={() => setNavIdx(i)}
            style={{ all: "unset", cursor: "pointer", padding: "10px 10px", borderRadius: 10, background: i === navIdx ? "rgba(255,255,255,.1)" : "transparent", color: i === navIdx ? "#fff" : COLOR.onDark, fontSize: 14 }}
          >
            {t}
          </button>
        ))}
      </div>
      <div style={{ padding: "clamp(16px,2.4vw,28px)", display: "grid", gap: 16, minWidth: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-heading)", fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em" }}>{NAV[navIdx]}</span>
          <span style={{ padding: "10px 14px", borderRadius: 10, background: COLOR.indigo, color: "#fff", fontSize: 14, fontWeight: 500 }}>New payout</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 8 }}>
          {kpis.map(([k, v]) => (
            <div key={k} style={{ padding: 14, borderRadius: 14, background: "#F6F4EF" }}>
              <div style={{ fontSize: 12, color: COLOR.muted }}>{k}</div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 700 }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ overflowX: "auto" }}>
          <div style={{ minWidth: 560, display: "grid" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr .9fr", gap: 12, padding: "8px 12px", fontFamily: "var(--font-label)", fontSize: 11, color: COLOR.muted }}>
              <span>RECIPIENT</span><span>RAIL</span><span>AMOUNT</span><span>STATUS</span>
            </div>
            {tx.map(([flag, n, rail, amount, status]) => (
              <div key={n} style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr .9fr", gap: 12, alignItems: "center", padding: 12, borderTop: "1px solid #EEEDE8", fontSize: 14 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Image src={`/flags/${flag}.svg`} alt="" width={22} height={16} style={{ width: 22, height: 16, borderRadius: 3, objectFit: "cover" }} />
                  {n}
                </span>
                <span style={{ color: COLOR.slate }}>{rail}</span>
                <span style={{ fontWeight: 600 }}>{amount}</span>
                <span style={{ fontSize: 12, fontWeight: 600, padding: "4px 9px", borderRadius: 999, width: "fit-content", background: status === "Settled" ? COLOR.tint : "#F6F4EF", color: status === "Settled" ? COLOR.indigo : COLOR.slate }}>
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap", padding: "14px 16px", borderRadius: 14, background: COLOR.tint }}>
          <span style={{ fontSize: 14 }}>
            <b style={{ fontWeight: 600 }}>{approved ? "Approved." : "Payroll · October"}</b>{" "}
            {approved ? "86 payouts are on their way." : "86 payouts across Kenya, Uganda and Ghana wait for your approval."}
          </span>
          <button
            type="button"
            onClick={() => setApproved(true)}
            style={{ height: 40, padding: "0 16px", border: 0, borderRadius: 10, background: COLOR.ink, color: "#fff", font: "500 14px var(--font-body)", cursor: "pointer" }}
          >
            {approved ? "Done ✓" : "Approve run"}
          </button>
        </div>
      </div>
    </div>
  );
}
