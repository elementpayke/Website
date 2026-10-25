"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { hover } from "@/lib/design/pseudo";

// Design: Status.dc.html. Figures are illustrative until a status provider
// is wired in (see HANDOFF.md, "Live data").
const flag = (c: string) => `/flags/${c}.svg`;

const LAST: Array<[string, string, string]> = [
  ["ke", "Nairobi", "M-Pesa"],
  ["ng", "Lagos", "Bank transfer"],
  ["gh", "Accra", "MTN MoMo"],
  ["sn", "Dakar", "Wave"],
  ["ug", "Kampala", "Airtel Money"],
  ["ci", "Abidjan", "Orange Money"],
  ["za", "Johannesburg", "Bank EFT"],
  ["cm", "Douala", "MTN MoMo"],
];

const RAILS: Array<[string, "Mobile money" | "Bank" | "Stablecoin" | "Platform", string[]]> = [
  ["M-Pesa", "Mobile money", ["ke", "tz", "cd", "mz"]],
  ["MTN MoMo", "Mobile money", ["ug", "gh", "rw", "cm", "ci", "bj", "zm"]],
  ["Airtel Money", "Mobile money", ["ke", "ug", "tz", "rw", "cd", "zm", "mw"]],
  ["Orange Money", "Mobile money", ["sn", "ci", "bf", "ml", "cm", "cd", "bw"]],
  ["Wave", "Mobile money", ["sn", "ci"]],
  ["Moov Money", "Mobile money", ["ci", "bj", "tg", "bf", "ml"]],
  ["Bank payouts", "Bank", ["ng", "za", "ke", "gh", "et"]],
  ["PesaLink", "Bank", ["ke"]],
  ["SEPA", "Bank", ["eu"]],
  ["Faster Payments", "Bank", ["gb"]],
  ["ACH and SWIFT", "Bank", ["us"]],
  ["USDC settlement", "Stablecoin", []],
  ["USDT settlement", "Stablecoin", []],
  ["API and webhooks", "Platform", []],
];

const REGIONS: Array<[string, string[], number]> = [
  ["East Africa", ["ke", "ug", "tz", "rw", "et"], 29],
  ["West Africa", ["ng", "gh", "sn", "ci", "bj", "tg", "bf", "ml"], 34],
  ["Central Africa", ["cm", "cd"], 38],
  ["Southern Africa", ["za", "zm", "mw", "mz", "bw"], 36],
  ["Global settlement", ["us", "eu", "gb", "ae", "cn"], 14],
];

const INCIDENTS: Array<[string, string, string, string, string]> = [
  ["Oct 11, 2026", "ug", "Delayed MTN MoMo callbacks in Uganda", "Payouts completed but confirmations arrived late. We held webhooks until the network caught up.", "18 min"],
  ["Sep 27, 2026", "ng", "Slow bank transfers to two Nigerian banks", "Rerouted affected payouts through an alternate clearing path. No payouts failed.", "42 min"],
  ["Sep 3, 2026", "sn", "Wave payouts queued in Senegal", "Scheduled maintenance at the partner network. Queued payouts were released in order.", "25 min"],
  ["Aug 14, 2026", "us", "Elevated API latency", "A database failover raised p95 latency. All requests completed.", "9 min"],
];

const seed = (a: number, b: number) => ((a + 3) * 7919 + b * 104729) % 131;
const INITIAL_LAT = Array.from({ length: 48 }, (_, i) => 30 + Math.sin(i / 3) * 4 + ((i * 37) % 7));

// 90-day uptime grids are deterministic, so they are computed once.
const RAIL_CELLS = RAILS.map((_, i) => {
  let bad = 0;
  const cells = Array.from({ length: 91 }, (_, j) => {
    const degraded = seed(i, j) === 7 || seed(i, j) === 64;
    if (degraded) bad++;
    return { borderRadius: 2, background: degraded ? "#A79EFF" : "#3B2ED3", opacity: degraded ? 1 : 0.55 + (seed(i, j) % 9) / 20 };
  });
  return { cells, up: `${(100 - bad * 0.05).toFixed(2)}% uptime` };
});

const wrap = { maxWidth: 1240, margin: "0 auto" } as const;
const h2 = { fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 1.5vw + 22px, 44px)", lineHeight: 0.95, letterSpacing: "-0.04em", fontWeight: 700, margin: 0 } as const;
const mono = { fontFamily: "var(--font-label)" } as const;

export default function StatusBoard({ children }: { children?: React.ReactNode }) {
  const [tick, setTick] = useState(0);
  const [lat, setLat] = useState(INITIAL_LAT);
  const [clock, setClock] = useState("00:00:00");
  const [subbed, setSubbed] = useState(false);

  useEffect(() => {
    const update = () => setClock(new Date().toISOString().slice(11, 19));
    update();
    const t = setInterval(() => {
      setTick((x) => x + 1);
      setLat((l) => [...l.slice(1), Math.max(22, Math.min(48, l[l.length - 1] + (Math.random() - 0.5) * 8))]);
      update();
    }, 1500);
    return () => clearInterval(t);
  }, []);

  const n = lat.length;
  const X = (i: number) => (i / (n - 1)) * 480;
  const Y = (v: number) => 130 - ((v - 18) / 34) * 120;
  const pts = lat.map((v, i) => `${X(i).toFixed(1)},${Y(v).toFixed(1)}`).join(" ");
  const last = LAST[tick % LAST.length];

  return (
    <>
      <section
        data-screen-label="Status hero"
        style={{ ...wrap, padding: "clamp(48px,7vw,96px) clamp(20px,4vw,48px) clamp(48px,6vw,80px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "clamp(32px,5vw,72px)", alignItems: "center" }}
      >
        <div>
          <div style={{ display: "flex", gap: 8, ...mono, fontSize: 13, color: "#6E6C8A" }}>
            <Link href="/" style={{ color: "#6E6C8A" }}>
              Home
            </Link>
            <span>/</span>
            <span>Resources</span>
            <span>/</span>
            <span style={{ color: "#3B2ED3" }}>System status</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 28 }}>
            <span style={{ position: "relative", width: 22, height: 22, flex: "none" }}>
              <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#3B2ED3", animation: "epRing 1.8s ease-out infinite" }} />
              <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#3B2ED3" }} />
            </span>
            <span style={{ ...mono, fontSize: 13, letterSpacing: ".14em", color: "#3B2ED3" }}>ALL SYSTEMS NORMAL</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(34px, 2.2vw + 26px, 58px)", lineHeight: 0.95, letterSpacing: "-0.045em", fontWeight: 700, margin: "20px 0 0", maxWidth: "12ch" }}>
            Every rail is running
            <span aria-hidden="true" style={{ display: "inline-block", width: ".2em", height: ".2em", marginLeft: ".06em", background: "#FFB224" }} />
          </h1>
          <p style={{ fontSize: "clamp(17px,1.4vw,19px)", lineHeight: 1.55, color: "#4C4A66", margin: "24px 0 0", maxWidth: "46ch" }}>
            We check every mobile money network, bank rail, stablecoin settlement route and API endpoint once a minute. This page updates live.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 28, padding: "14px 16px", borderRadius: 16, background: "#F6F4EF", width: "fit-content", maxWidth: "100%" }}>
            <Image src={flag(last[0])} alt="" width={28} height={20} style={{ width: 28, height: 20, borderRadius: 4, objectFit: "cover", flex: "none" }} />
            <span style={{ fontSize: 15 }}>
              Last payout settled <b style={{ fontWeight: 600 }}>{2 + ((tick * 3) % 9)}s ago</b> · {last[1]} · {last[2]}
            </span>
          </div>
        </div>
        <div style={{ borderRadius: 28, background: "#131126", color: "#F6F4EF", padding: "clamp(20px,3vw,32px)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
            <span style={{ ...mono, fontSize: 12, letterSpacing: ".14em", color: "#B4B1D0" }}>NETWORK HEARTBEAT · MEDIAN SETTLEMENT</span>
            <span style={{ ...mono, fontSize: 12, color: "#B4B1D0" }}>{clock} UTC</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 18 }}>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(36px,4.26vw,54px)", lineHeight: 1, fontWeight: 700, letterSpacing: "-0.04em" }}>{Math.round(lat[n - 1])}</span>
            <span style={{ fontSize: 18, color: "#B4B1D0" }}>seconds</span>
          </div>
          <svg viewBox="0 0 480 140" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 140, marginTop: 16 }}>
            <path d={`M0,140 L${pts.split(" ").join(" L")} L480,140 Z`} fill="rgba(180,177,208,.14)" />
            <polyline points={pts} fill="none" stroke="#B4B1D0" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
            <circle cx="480" cy={Y(lat[n - 1]).toFixed(1)} r="5" fill="#fff" />
          </svg>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginTop: 16 }}>
            {[
              ["Payouts / min", (1180 + ((tick * 47) % 160)).toLocaleString("en-US")],
              ["API p95", `${180 + ((tick * 11) % 40)} ms`],
              ["Webhooks", "99.99%"],
            ].map(([k, v]) => (
              <div key={k} style={{ padding: 14, borderRadius: 14, background: "rgba(255,255,255,.08)" }}>
                <div style={{ fontSize: 12, color: "#B4B1D0" }}>{k}</div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 700 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: "#F6F4EF" }}>
        <section data-screen-label="Regions" style={{ ...wrap, padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={h2}>By region.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: 10, marginTop: 32 }}>
            {REGIONS.map(([name, flags, base], i) => (
              <div key={name} style={{ padding: 22, borderRadius: 22, background: "#fff", display: "grid", gap: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 600, fontSize: 16 }}>{name}</span>
                  <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#3B2ED3", animation: "epPulse 2s infinite" }} />
                </div>
                <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                  {flags.map((f) => (
                    <Image key={f} src={flag(f)} alt="" width={24} height={17} style={{ width: 24, height: 17, borderRadius: 3, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em" }}>{base + (((tick + i) * 5) % 5) - 2}s</span>
                  <span style={{ ...mono, fontSize: 12, color: "#6E6C8A" }}>median</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section data-screen-label="Rails" style={{ ...wrap, padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <h2 style={h2}>Every rail, last 90 days.</h2>
            <div style={{ display: "flex", gap: 16, fontSize: 13, color: "#4C4A66", alignItems: "center" }}>
              <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ width: 10, height: 10, borderRadius: 2, background: "#3B2ED3" }} />
                Operational
              </span>
              <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ width: 10, height: 10, borderRadius: 2, background: "#A79EFF" }} />
                Degraded
              </span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,360px),1fr))", gap: 10, marginTop: 32 }}>
            {RAILS.map(([name, kind, flags], i) => {
              const base = kind === "Stablecoin" ? 12 : kind === "Platform" ? 0 : kind === "Bank" ? 40 : 28;
              const jit = Math.round(((tick * 13 + i * 7) % 9) - 4);
              const tag = kind === "Stablecoin" ? { background: "#131126", color: "#fff" } : { background: "#F6F4EF", color: "#4C4A66" };
              return (
                <div key={name} style={{ padding: 22, borderRadius: 22, background: "#fff", display: "grid", gap: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontWeight: 600, fontSize: 17 }}>{name}</span>
                        <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 8px", borderRadius: 999, ...tag }}>{kind}</span>
                      </div>
                      <div style={{ display: "flex", gap: 3, marginTop: 8, flexWrap: "wrap" }}>
                        {flags.map((f) => (
                          <Image key={f} src={flag(f)} alt="" width={20} height={14} style={{ width: 20, height: 14, borderRadius: 2, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
                        ))}
                      </div>
                    </div>
                    <div style={{ textAlign: "right", flex: "none" }}>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>{kind === "Platform" ? `${180 + jit * 6} ms` : `${base + jit}s`}</div>
                      <div style={{ ...mono, fontSize: 11, color: "#6E6C8A" }}>{RAIL_CELLS[i].up}</div>
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(13,1fr)", gridTemplateRows: "repeat(7,1fr)", gridAutoFlow: "column", gap: 3, aspectRatio: "13/7" }}>
                    {RAIL_CELLS[i].cells.map((c, j) => (
                      <span key={j} style={c} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section
          data-screen-label="Incidents"
          style={{ ...wrap, padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(24px,4vw,56px)", alignItems: "start" }}
        >
          <div>
            <h2 style={h2}>Incident log.</h2>
            <p style={{ fontSize: 16, lineHeight: "25px", color: "#4C4A66", margin: "20px 0 0", maxWidth: "38ch" }}>When a partner network slows down, we reroute where we can and post an update here.</p>
            {subbed ? (
              <div style={{ marginTop: 24, padding: "16px 18px", borderRadius: 16, background: "#fff", fontWeight: 500 }}>Subscribed. You&apos;ll get an email when anything changes.</div>
            ) : (
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", padding: 6, borderRadius: 16, background: "#fff", marginTop: 24, maxWidth: 420 }}>
                <input
                  type="email"
                  placeholder="Email for status updates"
                  aria-label="Email for status updates"
                  style={{ flex: 1, minWidth: 160, height: 46, padding: "0 14px", border: 0, outline: "none", background: "transparent", font: "15px var(--font-body)", color: "#131126" }}
                />
                <button
                  type="button"
                  onClick={() => setSubbed(true)}
                  className={hover("background:#2A1FB0")}
                  style={{ height: 46, padding: "0 18px", border: 0, borderRadius: 12, background: "#3B2ED3", color: "#fff", font: "500 15px var(--font-body)", cursor: "pointer" }}
                >
                  Subscribe
                </button>
              </div>
            )}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 0, gridColumn: "span 2", minWidth: 0 }}>
            {INCIDENTS.map(([date, f, t, d, dur]) => (
              <div key={date} style={{ display: "grid", gridTemplateColumns: "110px 20px minmax(0,1fr)", gap: 14, alignItems: "start" }}>
                <span style={{ ...mono, fontSize: 13, color: "#6E6C8A", paddingTop: 20 }}>{date}</span>
                <span style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
                  <span style={{ width: 2, height: 22, background: "#E2DED4" }} />
                  <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#fff", boxShadow: "inset 0 0 0 3px #3B2ED3", flex: "none" }} />
                  <span style={{ width: 2, flex: 1, background: "#E2DED4" }} />
                </span>
                <div style={{ margin: "10px 0", padding: "18px 20px", borderRadius: 18, background: "#fff" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                    <Image src={flag(f)} alt="" width={22} height={16} style={{ width: 22, height: 16, borderRadius: 3, objectFit: "cover" }} />
                    <span style={{ fontWeight: 600, fontSize: 16 }}>{t}</span>
                  </div>
                  <div style={{ fontSize: 14, lineHeight: "21px", color: "#4C4A66", marginTop: 8 }}>{d}</div>
                  <div style={{ display: "flex", gap: 8, marginTop: 12, ...mono, fontSize: 12 }}>
                    <span style={{ padding: "4px 8px", borderRadius: 6, background: "#EEEDFB", color: "#3B2ED3" }}>Resolved</span>
                    <span style={{ padding: "4px 8px", borderRadius: 6, background: "#F6F4EF", color: "#4C4A66" }}>{dur}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {children}
      </div>
    </>
  );
}
