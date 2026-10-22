"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { COLOR } from "@/lib/brand";
import { RATE, CURRENCY_FLAG, fmt } from "@/lib/products/fx";

const CURRENCIES = ["USD", "USDC", "USDT", "EUR", "GBP", "AED", "CNY", "ZAR", "KES", "NGN", "GHS", "TZS", "XOF", "XAF", "CAD", "JPY"];

function chip(on: boolean, dark = false) {
  return {
    display: "inline-flex" as const,
    alignItems: "center" as const,
    gap: 7,
    padding: "8px 11px",
    border: 0,
    borderRadius: 10,
    cursor: "pointer" as const,
    font: "500 13px var(--font-body)",
    background: on ? (dark ? "#fff" : COLOR.ink) : dark ? "rgba(255,255,255,.08)" : "#F6F4EF",
    color: on ? (dark ? COLOR.ink : "#fff") : dark ? "#F6F4EF" : COLOR.ink,
  };
}

export default function FxDemo() {
  const [amt, setAmt] = useState("10000");
  const [from, setFrom] = useState("USDC");
  const [to, setTo] = useState("KES");
  const [lockedAt, setLockedAt] = useState(-1);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const amount = parseFloat(amt.replace(/,/g, "")) || 0;
  const rate = (RATE[to] ?? 1) / (RATE[from] ?? 1);
  const left = lockedAt >= 0 ? Math.max(0, 60 - (tick - lockedAt)) : 60 - (tick % 60);
  const decimals = rate < 0.1 ? 6 : rate < 10 ? 4 : 2;
  const outDecimals = (RATE[to] ?? 1) > 50 ? 0 : 2;
  const locked = lockedAt >= 0;
  const expired = locked && left === 0;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: 12 }}>
      <div style={{ borderRadius: 28, background: "#fff", padding: "clamp(20px,3vw,32px)", display: "grid", gap: 10 }}>
        <div style={{ padding: 20, borderRadius: 20, background: "#F6F4EF" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.muted }}>
            <span>YOU CONVERT</span>
            <span>{from}</span>
          </div>
          <input
            type="text"
            inputMode="decimal"
            value={amt}
            onChange={(e) => { setAmt(e.target.value); setLockedAt(-1); }}
            aria-label="Amount"
            style={{ width: "100%", boxSizing: "border-box", border: 0, background: "transparent", outline: "none", font: "600 44px var(--font-heading)", letterSpacing: "-0.03em", color: COLOR.ink, marginTop: 6, padding: 0 }}
          />
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginTop: 10 }}>
            {CURRENCIES.map((c) => (
              <button key={c} type="button" onClick={() => { setFrom(c); setLockedAt(-1); }} style={chip(c === from)}>
                <Image src={`/flags/${CURRENCY_FLAG[c]}.svg`} alt="" width={18} height={13} style={{ width: 18, height: 13, borderRadius: 2, objectFit: "cover" }} />
                {c}
              </button>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={() => { setFrom(to); setTo(from); setLockedAt(-1); }}
          aria-label="Swap currencies"
          style={{ justifySelf: "center", width: 44, height: 44, borderRadius: "50%", border: 0, background: COLOR.ink, color: "#fff", fontSize: 18, cursor: "pointer", margin: "-22px 0", position: "relative", zIndex: 1 }}
        >
          ⇅
        </button>
        <div style={{ padding: 20, borderRadius: 20, background: COLOR.ink, color: "#F6F4EF" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.onDark }}>
            <span>YOU RECEIVE</span>
            <span>{to}</span>
          </div>
          <div style={{ font: "600 44px var(--font-heading)", letterSpacing: "-0.03em", marginTop: 6 }}>{fmt(amount * rate, outDecimals)}</div>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginTop: 10 }}>
            {CURRENCIES.map((c) => (
              <button key={c} type="button" onClick={() => { setTo(c); setLockedAt(-1); }} style={chip(c === to, true)}>
                <Image src={`/flags/${CURRENCY_FLAG[c]}.svg`} alt="" width={18} height={13} style={{ width: 18, height: 13, borderRadius: 2, objectFit: "cover" }} />
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderRadius: 28, background: "#fff", padding: "clamp(20px,3vw,32px)", display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.muted }}>QUOTE</div>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em" }}>
          1 {from} = {fmt(rate, decimals)} {to}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 14px", borderRadius: 12, background: "#F6F4EF", fontSize: 14 }}>
            <span>Correspondent banks</span><b style={{ fontWeight: 600 }}>None</b>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 14px", borderRadius: 12, background: "#F6F4EF", fontSize: 14 }}>
            <span>Settles</span><b style={{ fontWeight: 600 }}>Depends on the local rail</b>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 14px", borderRadius: 12, background: "#F6F4EF", fontSize: 14 }}>
            <span>Fee</span><b style={{ fontWeight: 600 }}>Shown before you confirm</b>
          </div>
        </div>
        <div style={{ marginTop: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: COLOR.slate, marginBottom: 8 }}>
            <span>{locked ? (left ? "Quote locked" : "Quote expired") : "Live quote refreshes in"}</span>
            <span style={{ fontFamily: "var(--font-label)" }}>00:{String(left).padStart(2, "0")}</span>
          </div>
          <div style={{ height: 6, borderRadius: 999, background: COLOR.tint, overflow: "hidden" }}>
            <div style={{ width: `${(left / 60) * 100}%`, height: "100%", background: COLOR.indigo, transition: "width 1s linear" }} />
          </div>
          <button
            type="button"
            onClick={() => setLockedAt(tick)}
            style={{ width: "100%", height: 52, marginTop: 14, border: 0, borderRadius: 14, background: COLOR.indigo, color: "#fff", font: "500 16px var(--font-body)", cursor: "pointer" }}
          >
            {locked && !expired ? "Confirm conversion" : "Lock this quote"}
          </button>
        </div>
      </div>
    </div>
  );
}
