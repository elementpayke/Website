"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { COLOR } from "@/lib/brand";
import { fmt } from "@/lib/products/fx";

const PAIRS: Array<[string, string, string, number, string, string, number]> = [
  ["USD → NGN", "us", "ng", 2500000, "USD", "NGN", 1528.4],
  ["USDT → KES", "us", "ke", 1000000, "USDT", "KES", 129.05],
  ["EUR → XOF", "eu", "sn", 800000, "EUR", "XOF", 655.957],
  ["USD → GHS", "us", "gh", 1500000, "USD", "GHS", 12.38],
];

export default function OtcDemo() {
  const [pairIdx, setPairIdx] = useState(0);
  const [openedAt, setOpenedAt] = useState(0);
  const [done, setDone] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const [, f1, f2, size, sellCur, outCur, rate] = PAIRS[pairIdx];
  const left = done ? 0 : Math.max(0, 60 - (tick - openedAt));
  const out = size * rate;

  const chat: Array<[boolean, string]> = [
    [true, `Need to sell ${sellCur} ${fmt(size / 1e6, 1)}M for ${outCur}, settle today.`],
    [false, "On it. Checking liquidity across our local partners."],
    [false, `Firm at ${fmt(rate, 2)}. Held for 60 seconds.`],
    [true, done ? "Done. Booking now." : "Looking at it now."],
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: 12 }}>
      <div style={{ borderRadius: 28, background: "#fff", padding: "clamp(20px,3vw,32px)", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 12 }}>
          <span style={{ width: 36, height: 36, borderRadius: 10, background: COLOR.ink, color: "#fff", display: "grid", placeItems: "center", fontWeight: 600 }}>OT</span>
          <div>
            <div style={{ fontWeight: 600 }}>OTC desk</div>
            <div style={{ fontSize: 12, color: COLOR.indigo }}>Trader online</div>
          </div>
        </div>
        {chat.map(([me, t], i) => (
          <div
            key={i}
            style={{
              alignSelf: me ? "flex-end" : "flex-start",
              maxWidth: "82%",
              padding: "12px 14px",
              borderRadius: me ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
              background: me ? COLOR.indigo : "#F6F4EF",
              color: me ? "#fff" : COLOR.ink,
              fontSize: 14,
              lineHeight: "20px",
            }}
          >
            {t}
          </div>
        ))}
      </div>
      <div style={{ borderRadius: 28, background: COLOR.ink, color: "#F6F4EF", padding: "clamp(20px,3vw,32px)", display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {PAIRS.map(([n], i) => (
            <button
              key={n}
              type="button"
              onClick={() => { setPairIdx(i); setOpenedAt(tick); setDone(false); }}
              style={{ padding: "8px 14px", border: 0, borderRadius: 9, cursor: "pointer", font: "500 14px var(--font-body)", background: i === pairIdx ? "#fff" : "rgba(255,255,255,.08)", color: i === pairIdx ? COLOR.ink : "#F6F4EF" }}
            >
              {n}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image src={`/flags/${f1}.svg`} alt="" width={34} height={24} style={{ width: 34, height: 24, borderRadius: 4, objectFit: "cover" }} />
          <span style={{ color: COLOR.onDark }}>→</span>
          <Image src={`/flags/${f2}.svg`} alt="" width={34} height={24} style={{ width: 34, height: 24, borderRadius: 4, objectFit: "cover" }} />
          <span style={{ fontFamily: "var(--font-label)", fontSize: 13, color: COLOR.onDark }}>FIRM QUOTE</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          <div style={{ padding: 16, borderRadius: 14, background: "rgba(255,255,255,.08)" }}>
            <div style={{ fontSize: 12, color: COLOR.onDark }}>You sell</div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: 26, fontWeight: 700 }}>{sellCur} {fmt(size / 1e6, 1)}M</div>
          </div>
          <div style={{ padding: 16, borderRadius: 14, background: "rgba(255,255,255,.08)" }}>
            <div style={{ fontSize: 12, color: COLOR.onDark }}>Rate</div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: 26, fontWeight: 700 }}>{fmt(rate, 2)}</div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 12, color: COLOR.onDark }}>You receive</div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(27px,3.2vw,35px)", fontWeight: 700, letterSpacing: "-0.03em" }}>{outCur} {fmt(out)}</div>
        </div>
        <div style={{ marginTop: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: COLOR.onDark, marginBottom: 8 }}>
            <span>{done ? "Booked · settling today" : left ? "Quote held for" : "Quote expired"}</span>
            <span style={{ fontFamily: "var(--font-label)" }}>00:{String(left).padStart(2, "0")}</span>
          </div>
          <div style={{ height: 6, borderRadius: 999, background: "rgba(255,255,255,.12)", overflow: "hidden" }}>
            <div style={{ width: `${(left / 60) * 100}%`, height: "100%", background: "#fff", transition: "width 1s linear" }} />
          </div>
          <button
            type="button"
            onClick={() => { if (left && !done) setDone(true); else { setOpenedAt(tick); setDone(false); } }}
            style={{ width: "100%", height: 52, marginTop: 14, border: 0, borderRadius: 14, background: "#fff", color: COLOR.ink, font: "600 16px var(--font-body)", cursor: "pointer" }}
          >
            {done ? "Booked ✓" : left ? "Accept quote" : "Request new quote"}
          </button>
        </div>
      </div>
    </div>
  );
}
