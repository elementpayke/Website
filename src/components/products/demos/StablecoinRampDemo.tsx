"use client";

import { useState } from "react";
import Image from "next/image";
import { COLOR } from "@/lib/brand";

const TOKENS = [{ n: "USDC", d: "USD Coin", i: "$" }, { n: "USDT", d: "Tether USD", i: "₮" }];
const LOCATIONS: Array<[string, string, string]> = [
  ["ke", "Kenya", "M-Pesa · KES"], ["ng", "Nigeria", "Bank · NGN"], ["gh", "Ghana", "MTN MoMo · GHS"], ["sn", "Senegal", "Wave · XOF"],
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

export default function StablecoinRampDemo() {
  const [offRamp, setOffRamp] = useState(true);

  return (
    <div style={{ borderRadius: 28, background: COLOR.ink, color: "#F6F4EF", padding: "clamp(20px,3vw,40px)" }}>
      <div style={{ display: "flex", gap: 4, padding: 5, borderRadius: 12, background: "rgba(255,255,255,.08)", width: "fit-content" }}>
        <button type="button" onClick={() => setOffRamp(true)} style={segStyle(offRamp)}>Off-ramp</button>
        <button type="button" onClick={() => setOffRamp(false)} style={segStyle(!offRamp)}>On-ramp</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: 12, marginTop: 24, alignItems: "center" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 8 }}>
          <div style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.onDark }}>{offRamp ? "YOU SEND" : "CUSTOMER PAYS"}</div>
          {offRamp
            ? TOKENS.map((t) => (
                <div key={t.n} style={{ display: "flex", alignItems: "center", gap: 12, padding: 16, borderRadius: 16, background: "rgba(255,255,255,.08)" }}>
                  <span style={{ width: 36, height: 36, borderRadius: "50%", background: "#fff", color: COLOR.ink, display: "grid", placeItems: "center", fontWeight: 700, flex: "none" }}>{t.i}</span>
                  <span>
                    <b style={{ display: "block", fontWeight: 600 }}>{t.n}</b>
                    <span style={{ fontSize: 13, color: COLOR.onDark }}>{t.d}</span>
                  </span>
                </div>
              ))
            : LOCATIONS.map(([f, n, d]) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 12, padding: 16, borderRadius: 16, background: "rgba(255,255,255,.08)" }}>
                  <Image src={`/flags/${f}.svg`} alt="" width={36} height={26} style={{ width: 36, height: 26, borderRadius: 4, objectFit: "cover" }} />
                  <span>
                    <b style={{ display: "block", fontWeight: 600 }}>{n}</b>
                    <span style={{ fontSize: 13, color: COLOR.onDark }}>{d}</span>
                  </span>
                </div>
              ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", placeItems: "center", gap: 12, padding: "20px 0" }}>
          <div style={{ position: "relative", width: "100%", height: 2, background: "rgba(255,255,255,.15)", overflow: "hidden" }}>
            <span style={{ position: "absolute", left: 0, top: 0, width: "30%", height: 2, background: "#fff", animation: "epFlow 1.6s linear infinite" }} />
          </div>
          <div style={{ padding: "18px 22px", borderRadius: 18, background: "#fff", color: COLOR.ink, textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center" }}>
              <span style={{ width: 22, height: 22, borderRadius: 6, background: COLOR.indigo, display: "grid", placeItems: "center" }}>
                <span style={{ width: 9, height: 9, borderRadius: 2, background: "#fff" }} />
              </span>
              <b style={{ fontFamily: "var(--font-heading)", fontSize: 18 }}>ElementPay</b>
            </div>
            <div style={{ fontSize: 12, color: COLOR.muted, marginTop: 4 }}>
              {offRamp ? "Converts and routes locally" : "Collects and settles in USDC"}
            </div>
          </div>
          <div style={{ position: "relative", width: "100%", height: 2, background: "rgba(255,255,255,.15)", overflow: "hidden" }}>
            <span style={{ position: "absolute", left: 0, top: 0, width: "30%", height: 2, background: "#fff", animation: "epFlow 1.6s linear infinite .8s" }} />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 8 }}>
          <div style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.onDark }}>{offRamp ? "RECIPIENT GETS" : "YOU RECEIVE"}</div>
          {offRamp
            ? LOCATIONS.map(([f, n, d]) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 14, background: "rgba(255,255,255,.08)" }}>
                  <Image src={`/flags/${f}.svg`} alt="" width={26} height={18} style={{ width: 26, height: 18, borderRadius: 3, objectFit: "cover" }} />
                  <span>
                    <b style={{ display: "block", fontWeight: 600, fontSize: 14 }}>{n}</b>
                    <span style={{ fontSize: 12, color: COLOR.onDark }}>{d}</span>
                  </span>
                </div>
              ))
            : TOKENS.map((t) => (
                <div key={t.n} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 14, background: "rgba(255,255,255,.08)" }}>
                  <Image src="/flags/us.svg" alt="" width={26} height={18} style={{ width: 26, height: 18, borderRadius: 3, objectFit: "cover" }} />
                  <span>
                    <b style={{ display: "block", fontWeight: 600, fontSize: 14 }}>{t.n}</b>
                    <span style={{ fontSize: 12, color: COLOR.onDark }}>Settled to your wallet or balance</span>
                  </span>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
