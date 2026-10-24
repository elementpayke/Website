"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { SCENE_NAMES } from "./homeData";

const EpGlobe = dynamic(() => import("./EpGlobe"));

const INK = "#131126";
const PURPLE = "#3B2ED3";

type Flow = {
  iso: string;
  amt: string;
  rail: string;
  top: string;
  inc: boolean;
  delay: number;
};

const FLOWS: Flow[] = [
  { iso: "ke", amt: "+ KES 84,000", rail: "M-Pesa", top: "16%", inc: true, delay: 0.4 },
  { iso: "us", amt: "+ $2,400", rail: "ACH", top: "38%", inc: true, delay: 0.65 },
  { iso: "ng", amt: "+ ₦1.25M", rail: "Bank", top: "60%", inc: true, delay: 0.9 },
  { iso: "gh", amt: "GHS 9,800", rail: "MoMo", top: "16%", inc: false, delay: 1.1 },
  { iso: "cn", amt: "¥ 52,000", rail: "Bank", top: "38%", inc: false, delay: 1.35 },
  { iso: "ug", amt: "UGX 3.1M", rail: "MTN", top: "60%", inc: false, delay: 1.6 },
];

export default function HeroScene() {
  const [scene, setScene] = useState(0);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (document.visibilityState === "visible") setScene((s) => (s + 1) % 5);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ width: "100%", maxWidth: 520, justifySelf: "center" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1/0.92",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 16,
            top: 16,
            zIndex: 3,
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "7px 12px",
            borderRadius: 999,
            background: "#fff",
            boxShadow: "0 14px 30px -16px rgba(19,17,38,.4)",
            fontFamily: "var(--font-label)",
            fontSize: 11.5,
            color: INK,
          }}
        >
          <span style={{ width: 7, height: 7, background: "#FFB224" }} />
          {"0" + (scene + 1) + " · " + SCENE_NAMES[scene]}
        </div>

        {scene === 0 && (
          <div style={{ position: "absolute", inset: 0, animation: "epIn .6s cubic-bezier(.2,.8,.2,1) both" }}>
            {FLOWS.map((f) => (
              <div key={f.iso + f.top}>
                <div
                  style={{
                    position: "absolute",
                    top: f.top,
                    [f.inc ? "left" : "right"]: "4%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "9px 13px 9px 10px",
                      borderRadius: 999,
                      background: "#fff",
                      color: INK,
                      border: "1px solid rgba(19,17,38,.08)",
                      boxShadow: "0 14px 30px -16px rgba(19,17,38,.4)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span aria-hidden style={{ width: 20, height: 14, borderRadius: 3, flex: "none", backgroundImage: `url(/flags/${f.iso}.svg)`, backgroundSize: "cover", backgroundPosition: "center", boxShadow: "0 0 0 1px rgba(0,0,0,.08)" }} />
                    <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
                      <span style={{ fontFamily: "var(--font-label)", fontSize: 12.5, color: f.inc ? "#0E7A5A" : INK }}>{f.amt}</span>
                      <span style={{ fontSize: 10.5, color: "#6E6C8A", fontWeight: 700 }}>{f.rail}</span>
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: f.inc ? "32%" : "61%",
                    width: "7%",
                    top: `calc(${f.top} + 20px)`,
                    height: 2,
                    background: "repeating-linear-gradient(90deg,rgba(19,17,38,.14) 0 4px,transparent 4px 8px)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: -3,
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: f.inc ? "#5ED6B4" : "#FFB224",
                      animation: `epTravel 1.8s ${f.delay}s linear infinite`,
                    }}
                  />
                </div>
              </div>
            ))}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "44%",
                transform: "translate(-50%,-50%)",
                animation: "epBreathe 2.4s ease-in-out infinite",
                width: "17%",
                aspectRatio: "1",
                borderRadius: "24%",
                background: PURPLE,
                display: "grid",
                placeItems: "center",
                boxShadow: "0 20px 40px -14px rgba(59,46,211,.8)",
              }}
            >
              <span style={{ width: "38%", height: "38%", borderRadius: "22%", background: "#fff" }} />
            </div>
            <div style={{ position: "absolute", left: 0, right: 0, bottom: "6%", display: "flex", justifyContent: "space-between", padding: "0 7%", fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 700, color: "#4C4A66" }}>
              <span>Collections in</span>
              <span>Payouts out</span>
            </div>
          </div>
        )}

        {scene === 1 && (
          <div style={{ position: "absolute", inset: 0, animation: "epIn .6s cubic-bezier(.2,.8,.2,1) both" }}>
            <div style={{ position: "absolute", left: "50%", top: "45%", width: "80%", aspectRatio: "1", transform: "translate(-50%,-50%)", filter: "drop-shadow(0 40px 50px rgba(59,46,211,.4))" }}>
              <EpGlobe />
            </div>
            <div style={{ position: "absolute", left: 0, right: 0, bottom: "3%", display: "flex", justifyContent: "center", fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 700, color: "#4C4A66", whiteSpace: "nowrap", animation: "epIn .6s 1s both" }}>
              Payouts in 10+ African countries. Accounts in 30 currencies.
            </div>
          </div>
        )}

        {scene === 2 && <BulkPayoutScene />}
        {scene === 3 && <StablecoinRampScene />}
        {scene === 4 && <FxConversionScene />}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 18 }}>
        {SCENE_NAMES.map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => setScene(i)}
            aria-label={label}
            style={{
              width: i === scene ? 26 : 8,
              height: 8,
              borderRadius: 99,
              border: 0,
              padding: 0,
              cursor: "pointer",
              background: i === scene ? PURPLE : "rgba(19,17,38,.18)",
              transition: "width .3s ease, background .3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const PAYOUT_ROWS: Array<{ iso: string; country: string; rail: string; amt: string; width: string; delay: number }> = [
  { iso: "ke", country: "Kenya", rail: "M-Pesa", amt: "KES 4.2M", width: "100%", delay: 0.45 },
  { iso: "ng", country: "Nigeria", rail: "Bank", amt: "₦18.6M", width: "100%", delay: 0.6 },
  { iso: "gh", country: "Ghana", rail: "MoMo", amt: "GHS 96,400", width: "100%", delay: 0.75 },
  { iso: "ug", country: "Uganda", rail: "MTN", amt: "UGX 52.1M", width: "88%", delay: 0.9 },
  { iso: "za", country: "South Africa", rail: "EFT", amt: "ZAR 310,500", width: "64%", delay: 1.05 },
];

function BulkPayoutScene() {
  return (
    <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", animation: "epIn .6s cubic-bezier(.2,.8,.2,1) both" }}>
      <div style={{ width: "86%", background: "#fff", borderRadius: 20, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 0 14px", animation: "epTick .45s .05s both" }}>
          <span style={{ width: 28, height: 34, borderRadius: 4, background: "#5ED6B4", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 4, boxSizing: "border-box", fontSize: 8, fontWeight: 700 }}>
            CSV
          </span>
          <span style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }}>
            <b style={{ fontSize: 13 }}>supplier-payouts.csv</b>
            <span style={{ fontSize: 11.5, color: "#6E6C8A" }}>250 recipients · 5 countries</span>
          </span>
          <span style={{ padding: "5px 10px", borderRadius: 999, background: "#EEEDFB", color: "#3B2ED3", fontSize: 11.5, fontWeight: 700 }}>Approved</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {PAYOUT_ROWS.map((row, i) => (
            <div
              key={row.iso}
              style={{
                display: "grid",
                gridTemplateColumns: "auto minmax(0,1fr) auto",
                gap: "4px 10px",
                alignItems: "center",
                padding: "10px 0",
                borderTop: i === 0 ? "none" : "1px solid rgba(19,17,38,.06)",
                animation: `epTick .45s ${row.delay}s both`,
              }}
            >
              <span aria-hidden style={{ width: 20, height: 14, borderRadius: 3, flex: "none", background: `url(/flags/${row.iso}.svg) center/cover`, boxShadow: "0 0 0 1px rgba(0,0,0,.08)" }} />
              <span style={{ fontSize: 12.5, fontWeight: 700 }}>
                {row.country} <span style={{ color: "#6E6C8A", fontWeight: 500 }}>· {row.rail}</span>
              </span>
              <span style={{ fontFamily: "var(--font-label)", fontSize: 12 }}>{row.amt}</span>
              <span />
              <span style={{ gridColumn: "span 2", height: 6, borderRadius: 99, background: "#EEECF4", overflow: "hidden" }}>
                <span style={{ display: "block", height: "100%", width: row.width, background: "#3B2ED3", borderRadius: 99, animation: `epBar 1.4s ${row.delay + 0.3}s cubic-bezier(.2,.8,.2,1) both` }} />
              </span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12.5, fontWeight: 700, paddingTop: 14, animation: "epTick .45s 1.2s both" }}>
          <span>One file. One approval. Five countries.</span>
          <span style={{ fontFamily: "var(--font-label)", color: "#0E7A5A" }}>231 / 250 paid</span>
        </div>
      </div>
    </div>
  );
}

function UsdcIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="50" fill="#2775CA" />
      <path d="M38 22a30 30 0 0 0 0 56M62 22a30 30 0 0 1 0 56" stroke="#fff" strokeWidth={5} fill="none" strokeLinecap="round" />
      <text x="50" y="64" textAnchor="middle" fontFamily="var(--font-heading)" fontWeight={700} fontSize={40} fill="#fff">$</text>
    </svg>
  );
}

function StablecoinRampScene() {
  const steps = [
    { n: 1, title: "Off-ramp to local currency", sub: "USDC → KES at a rate shown upfront", delay: 0.3, active: false },
    { n: 2, title: "Pay the supplier", sub: "KES to a Kenyan bank account", delay: 0.6, active: false },
    { n: 3, title: "Reconcile", sub: "Status and your reference: INV-208", delay: 0.9, active: true },
  ];
  return (
    <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", animation: "epIn .6s cubic-bezier(.2,.8,.2,1) both" }}>
      <div style={{ width: "82%", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 18, background: INK, color: "#fff", animation: "epTick .45s .05s both" }}>
          <span style={{ width: 36, height: 36, flex: "none", animation: "epCoin 5s .6s ease-in-out infinite" }}>
            <UsdcIcon size={36} />
          </span>
          <span style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <span style={{ fontSize: 11.5, color: "#B4B1D0" }}>Stablecoin balance</span>
            <b style={{ fontFamily: "var(--font-heading)", fontSize: 22, letterSpacing: "-0.02em" }}>25,000.00 USDC</b>
          </span>
        </div>
        <div style={{ padding: "16px 16px 2px", borderRadius: 18, background: "#fff" }}>
          {steps.map((step) => (
            <div key={step.n} style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gap: "0 12px", animation: `epTick .45s ${step.delay}s both` }}>
              <span style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: step.active ? PURPLE : "#fff",
                    color: step.active ? "#fff" : PURPLE,
                    boxShadow: `inset 0 0 0 1.5px ${PURPLE}`,
                    display: "grid",
                    placeItems: "center",
                    fontFamily: "var(--font-label)",
                    fontSize: 11,
                  }}
                >
                  {step.n}
                </span>
                {step.n < 3 && <span style={{ width: 2, flex: 1, minHeight: 14, background: "repeating-linear-gradient(#CFCBE0 0 4px,transparent 4px 8px)" }} />}
              </span>
              <span style={{ padding: "3px 0 14px" }}>
                <b style={{ display: "block", fontSize: 13.5 }}>{step.title}</b>
                <span style={{ display: "block", fontSize: 12, color: "#6E6C8A", marginTop: 2 }}>{step.sub}</span>
              </span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", animation: "epTick .45s 1.2s both" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 13px 9px 10px", borderRadius: 999, background: "#fff", border: "1px solid rgba(19,17,38,.08)", boxShadow: "0 14px 30px -16px rgba(19,17,38,.4)", fontSize: 12.5, fontWeight: 700, whiteSpace: "nowrap" }}>
            <span style={{ width: 20, height: 20 }}>
              <UsdcIcon size={20} />
            </span>
            USDC<span style={{ color: "#6E6C8A" }}>→</span>
            <span aria-hidden style={{ width: 20, height: 14, borderRadius: 3, flex: "none", background: "url(/flags/ke.svg) center/cover", boxShadow: "0 0 0 1px rgba(0,0,0,.08)" }} />
            KES<span style={{ color: "#6E6C8A" }}>·</span>
            <span style={{ fontFamily: "var(--font-label)", color: PURPLE }}>On- and off-ramps</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FxConversionScene() {
  return (
    <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", animation: "epIn .6s cubic-bezier(.2,.8,.2,1) both" }}>
      <div style={{ width: "78%", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ padding: 18, borderRadius: 20, background: "#fff", animation: "epTick .5s .1s both" }}>
          <div style={{ fontSize: 12, color: "#6E6C8A", fontWeight: 700 }}>You send</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
            <b style={{ fontFamily: "var(--font-heading)", fontSize: 30, letterSpacing: "-0.03em" }}>10,000.00</b>
            <span style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 700 }}>
              <span aria-hidden style={{ width: 20, height: 14, borderRadius: 3, flex: "none", background: "url(/flags/us.svg) center/cover", boxShadow: "0 0 0 1px rgba(0,0,0,.08)" }} />
              USD
            </span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", animation: "epTick .5s .35s both" }}>
          <span style={{ padding: "6px 12px", borderRadius: 999, background: "#EEEDFB", color: PURPLE, fontFamily: "var(--font-label)", fontSize: 12 }}>
            Rate locked before you confirm
          </span>
        </div>
        <div style={{ padding: 18, borderRadius: 20, background: PURPLE, color: "#fff", animation: "epTick .5s .6s both" }}>
          <div style={{ fontSize: 12, opacity: 0.8, fontWeight: 700 }}>Supplier receives</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
            <b style={{ fontFamily: "var(--font-heading)", fontSize: 30, letterSpacing: "-0.03em" }}>¥ 71,820.00</b>
            <span style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 700 }}>
              <span aria-hidden style={{ width: 20, height: 14, borderRadius: 3, flex: "none", background: "url(/flags/cn.svg) center/cover", boxShadow: "0 0 0 1px rgba(0,0,0,.08)" }} />
              CNY
            </span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-label)", fontSize: 11.5, color: "#6E6C8A", padding: "0 4px", animation: "epTick .5s .85s both" }}>
          <span>Settlement and FX</span>
          <span>Indicative rate</span>
        </div>
      </div>
    </div>
  );
}
