"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { COLOR } from "@/lib/brand";
import { fmt } from "@/lib/products/fx";

const AGENTS: Array<[string, number, number, string]> = [
  ["Procurement agent", 3120, 5000, "Suppliers in Nigeria, Ghana, Kenya"],
  ["Freight agent", 1480, 2500, "Allow-list: 6 logistics partners"],
  ["Contractor agent", 4210, 6000, "Pays in local currency or USDC"],
];

const POLICIES = [
  "Require approval over $1,000",
  "Pay allow-listed payees only",
  "Allow weekend payments",
  "Pay suppliers in USDC when they prefer it",
];

const LOG: Array<[string, string, string, string]> = [
  ["ke", "Freight agent", "paid Mombasa Freight KES 148,000 on M-Pesa", "within budget · auto-approved"],
  ["ng", "Procurement agent", "paid Lagos Supplies NGN 1.2M by bank", "allow-listed payee"],
  ["us", "Contractor agent", "paid 4 contractors 1,840 USDC", "usage-based payout"],
  ["gh", "Procurement agent", "paid Accra Packaging GHS 9,400 on MTN MoMo", "within budget"],
  ["ke", "Freight agent", "requested $3,400 to Mombasa Freight", "held · over $1,000"],
  ["za", "Treasury agent", "swept ZAR 210,000 to USD", "scheduled sweep"],
];

export default function AgenticDemo() {
  const [policies, setPolicies] = useState([true, true, false, true]);
  const [held, setHeld] = useState(true);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: 12 }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 10, alignContent: "start" }}>
        {AGENTS.map(([n, used, budget, scope]) => (
          <div key={n} style={{ padding: 20, borderRadius: 22, background: "#fff", display: "grid", gap: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 32, height: 32, borderRadius: 10, background: COLOR.tint, color: COLOR.indigo, display: "grid", placeItems: "center", fontFamily: "var(--font-label)", fontSize: 12 }}>AI</span>
                <span style={{ fontWeight: 600 }}>{n}</span>
              </span>
              <span style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.muted }}>${fmt(used)} / ${fmt(budget)}</span>
            </div>
            <div style={{ height: 8, borderRadius: 999, background: "#F6F4EF", overflow: "hidden" }}>
              <div style={{ width: `${(used / budget) * 100}%`, height: "100%", borderRadius: 999, background: COLOR.indigo }} />
            </div>
            <div style={{ fontSize: 13, color: COLOR.slate }}>{scope}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: 24, borderRadius: 22, background: "#fff", display: "grid", gap: 8, alignContent: "start" }}>
        <div style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.muted, marginBottom: 6 }}>POLICIES</div>
        {POLICIES.map((t, i) => {
          const on = policies[i];
          return (
            <button
              key={t}
              type="button"
              onClick={() => setPolicies((p) => p.map((x, j) => (j === i ? !x : x)))}
              style={{ all: "unset", boxSizing: "border-box", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, padding: 14, borderRadius: 14, background: "#F6F4EF", fontSize: 14, lineHeight: "20px" }}
            >
              <span>{t}</span>
              <span style={{ width: 40, height: 24, borderRadius: 999, background: on ? COLOR.indigo : "#E2DED4", position: "relative", flex: "none", transition: "background .2s" }}>
                <span style={{ position: "absolute", top: 3, left: on ? 19 : 3, width: 18, height: 18, borderRadius: "50%", background: "#fff", transition: "left .2s" }} />
              </span>
            </button>
          );
        })}
        {held && (
          <div style={{ marginTop: 8, padding: 16, borderRadius: 16, background: COLOR.ink, color: "#F6F4EF" }}>
            <div style={{ fontSize: 12, color: COLOR.onDark }}>Held for approval</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
              <Image src="/flags/ke.svg" alt="" width={22} height={16} style={{ width: 22, height: 16, borderRadius: 3 }} />
              <b style={{ fontWeight: 600 }}>Mombasa Freight · $3,400</b>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 12 }}>
              <button type="button" onClick={() => setHeld(false)} style={{ height: 40, border: 0, borderRadius: 10, background: "#fff", color: COLOR.ink, font: "600 14px var(--font-body)", cursor: "pointer" }}>Approve</button>
              <button type="button" onClick={() => setHeld(false)} style={{ height: 40, border: 0, borderRadius: 10, background: "rgba(255,255,255,.12)", color: "#fff", font: "500 14px var(--font-body)", cursor: "pointer" }}>Decline</button>
            </div>
          </div>
        )}
      </div>
      <div style={{ padding: 24, borderRadius: 22, background: COLOR.ink, color: "#F6F4EF", display: "grid", gap: 8, alignContent: "start" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.onDark, marginBottom: 6 }}>
          <span>AUDIT LOG</span>
          <span>PREVIEW</span>
        </div>
        {[0, 1, 2, 3, 4].map((offset) => {
          const [flag, agent, text, status] = LOG[(tick + offset) % LOG.length];
          return (
            <div key={offset} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 10, padding: "10px 12px", borderRadius: 12, background: "rgba(255,255,255,.07)", fontSize: 13, lineHeight: "19px" }}>
              <Image src={`/flags/${flag}.svg`} alt="" width={20} height={14} style={{ width: 20, height: 14, borderRadius: 2, objectFit: "cover", marginTop: 3 }} />
              <span>
                <b style={{ fontWeight: 600 }}>{agent}</b> {text}
                <span style={{ display: "block", fontFamily: "var(--font-label)", fontSize: 11, color: "#8E8BAB" }}>{status}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
