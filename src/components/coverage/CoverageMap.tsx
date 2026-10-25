"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { geoMercator, geoNaturalEarth1, geoPath, type GeoProjection } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import {
  ACCOUNT_BY_ID,
  ACCOUNT_CURRENCIES,
  CORRIDORS,
  HUBS,
  PAYOUT_BY_ID,
  PAYOUT_COUNTRIES,
} from "@/lib/geo/coverageData";

// Design: Coverage.html, "Map" section.
type Mode = "payouts" | "accounts" | "corridors";
type Country = Feature<Geometry, { name: string }> & { id: string };

const W = 900;
const H = 620;
const AFRICA = { type: "Feature" as const, properties: {}, geometry: { type: "MultiPoint" as const, coordinates: [[-18, -35], [52, 37.5]] } };
const flag = (c: string) => `/flags/${c}.svg`;

const CSS = `
.cov-seg{padding:10px 16px;border:0;border-radius:10px;cursor:pointer;font:500 14px var(--font-body),sans-serif;background:transparent;color:#B4B1D0}
.cov-seg:hover{color:#fff}.cov-seg.on{background:#fff;color:#131126}
.cov-country{fill:rgba(255,255,255,.07);stroke:#131126;stroke-width:.6;transition:fill .2s}
.cov-country.on{fill:#8E8BAB;cursor:pointer}.cov-country.on:hover{fill:#B4B1D0}.cov-country.sel{fill:#fff}
.cov-country:focus{outline:none}.cov-country:focus-visible{stroke:#FFB224;stroke-width:1.5}
.cov-arc{fill:none;stroke:#B4B1D0;stroke-width:1.3;stroke-dasharray:4 6;animation:epDash 1.2s linear infinite;opacity:.85}
.cov-flag{width:22px;height:16px;border-radius:3px;object-fit:cover;box-shadow:0 0 0 1px rgba(19,17,38,.08);flex:none;display:block}
.cov-rail{padding:6px 10px;border-radius:8px;background:#F6F4EF;font-size:13px}
`;

const mono = { fontFamily: "var(--font-label)", fontSize: 11, color: "#6E6C8A" } as const;
const heading = { fontFamily: "var(--font-heading)", fontWeight: 600, lineHeight: 0.95, margin: 0 } as const;

/* eslint-disable @next/next/no-img-element -- small inline flags inside tooltips and the panel, as in the design */
function Flag({ c }: { c: string }) {
  return <img className="cov-flag" src={flag(c)} alt="" loading="lazy" />;
}

function BigFlag({ c }: { c: string }) {
  return <img loading="lazy" decoding="async" src={flag(c)} alt="" style={{ width: 56, height: 40, borderRadius: 6, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />;
}
/* eslint-enable @next/next/no-img-element */

const Rail = ({ children, coin }: { children: React.ReactNode; coin?: boolean }) => (
  <span className="cov-rail" style={coin ? { background: "#EEEDFB", color: "#3B2ED3" } : undefined}>
    {children}
  </span>
);

function Panel({ mode, sel, feats }: { mode: Mode; sel: string; feats: Country[] }) {
  if (mode === "payouts") {
    const p = PAYOUT_BY_ID[sel] ?? PAYOUT_COUNTRIES[0];
    return (
      <>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <BigFlag c={p.iso} />
          <div>
            <div style={{ ...heading, fontSize: 32, letterSpacing: "-0.03em" }}>{p.name}</div>
            <div style={{ fontSize: 13, color: "#6E6C8A", marginTop: 4 }}>{p.region}</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {[
            ["CURRENCY", p.currency],
            ["DELIVERY", "Depends on the rail"],
          ].map(([k, v]) => (
            <div key={k} style={{ padding: 14, borderRadius: 14, background: "#F6F4EF" }}>
              <div style={mono}>{k}</div>
              <div style={{ fontWeight: 600, marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>
        <div>
          <div style={{ ...mono, marginBottom: 8 }}>PAYOUT RAILS</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {p.rails.map((r) => (
              <Rail key={r}>{r}</Rail>
            ))}
          </div>
        </div>
        <div>
          <div style={{ ...mono, marginBottom: 8 }}>FUND WITH</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {["USD", "EUR", "GBP"].map((r) => (
              <Rail key={r}>{r}</Rail>
            ))}
            <Rail coin>USDC</Rail>
            <Rail coin>USDT</Rail>
          </div>
        </div>
        <Link href={p.href} style={{ marginTop: "auto", fontWeight: 600 }}>
          Send money to {p.name} →
        </Link>
      </>
    );
  }
  if (mode === "accounts") {
    const a = ACCOUNT_BY_ID[sel] ?? ACCOUNT_CURRENCIES[0];
    const shared = feats.filter((f) => ACCOUNT_BY_ID[f.id]?.[0] === a[0]).map((f) => f.properties.name);
    return (
      <>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <BigFlag c={a[2]} />
          <div>
            <div style={{ ...heading, fontSize: 40, letterSpacing: "-0.03em" }}>{a[0]}</div>
            <div style={{ fontSize: 14, color: "#4C4A66", marginTop: 2 }}>{a[1]}</div>
          </div>
        </div>
        <p style={{ margin: 0, fontSize: 15, lineHeight: "23px", color: "#4C4A66" }}>
          A dedicated {a[0]} account with its own details, so customers and partners pay you like a local.
        </p>
        {shared.length > 1 && (
          <div>
            <div style={{ ...mono, marginBottom: 8 }}>USED IN</div>
            <div style={{ fontSize: 14, lineHeight: "21px" }}>{shared.join(", ")}</div>
          </div>
        )}
        <div>
          <div style={{ ...mono, marginBottom: 8 }}>CONVERTS TO</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <Rail>29 other currencies</Rail>
            <Rail coin>USDC</Rail>
            <Rail coin>USDT</Rail>
          </div>
        </div>
        <Link href="/business-accounts" style={{ marginTop: "auto", fontWeight: 600 }}>
          Open a {a[0]} account →
        </Link>
      </>
    );
  }
  return (
    <>
      <div style={{ fontFamily: "var(--font-label)", fontSize: 12, color: "#3B2ED3" }}>STABLECOIN CORRIDORS</div>
      <div style={{ ...heading, fontSize: 32, letterSpacing: "-0.03em", lineHeight: 1.05 }}>Fund in digital dollars. Deliver in local currency.</div>
      <p style={{ margin: 0, fontSize: 15, lineHeight: "23px", color: "#4C4A66" }}>
        Send USDC or USDT from anywhere, at any hour. ElementPay converts and pays out on mobile money or bank rails in the destination country.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 6 }}>
        {CORRIDORS.slice(0, 6).map(([hub, city, , f]) => (
          <div key={city} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 12, background: "#F6F4EF", fontSize: 14 }}>
            <span style={{ fontFamily: "var(--font-label)", fontSize: 12, color: "#6E6C8A", width: 72 }}>{hub}</span>
            <span style={{ color: "#3B2ED3" }}>→</span>
            <Flag c={f} />
            <span style={{ fontWeight: 600 }}>{city}</span>
          </div>
        ))}
      </div>
      <Link href="/stablecoins" style={{ marginTop: "auto", fontWeight: 600 }}>
        Explore stablecoin rails →
      </Link>
    </>
  );
}

export default function CoverageMap() {
  const [mode, setMode] = useState<Mode>("payouts");
  const [sel, setSel] = useState("404");
  const [feats, setFeats] = useState<Country[]>([]);
  const [loadFailed, setLoadFailed] = useState(false);
  const [loadAttempt, setLoadAttempt] = useState(0);
  const [tip, setTip] = useState<{ x: number; y: number; flag: string; text: string } | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // The map data loads after first paint, as in the design.
  useEffect(() => {
    let live = true;
    import("world-atlas/countries-110m.json").then((m) => {
      const topo = m.default as unknown as Topology<{ countries: GeometryCollection<{ name: string }> }>;
      const fc = feature(topo, topo.objects.countries) as FeatureCollection<Geometry, { name: string }>;
      if (live) setFeats(fc.features.filter((f) => f.id !== "010") as Country[]);
    }).catch(() => {
      if (live) setLoadFailed(true);
    });
    return () => {
      live = false;
    };
  }, [loadAttempt]);

  const retryLoad = () => {
    setLoadFailed(false);
    setLoadAttempt((n) => n + 1);
  };

  const proj: GeoProjection = useMemo(
    () =>
      mode === "payouts"
        ? geoMercator().fitExtent([[30, 20], [W - 30, H - 20]], AFRICA)
        : geoNaturalEarth1().fitExtent([[10, 10], [W - 10, H - 10]], { type: "Sphere" }),
    [mode],
  );
  const path = useMemo(() => geoPath(proj), [proj]);

  const isOn = (id: string) => (mode === "accounts" ? !!ACCOUNT_BY_ID[id] : !!PAYOUT_BY_ID[id]);
  const isSel = (id: string) =>
    mode !== "corridors" && (mode === "accounts" ? !!ACCOUNT_BY_ID[id] && ACCOUNT_BY_ID[id][0] === ACCOUNT_BY_ID[sel]?.[0] : id === sel);

  const switchMode = (m: Mode) => {
    setMode(m);
    if (m === "accounts" && !ACCOUNT_BY_ID[sel]) setSel("840");
    if (m === "payouts" && !PAYOUT_BY_ID[sel]) setSel("404");
  };

  const onMove = (e: React.MouseEvent, f: Country) => {
    const hit = mode === "accounts" ? ACCOUNT_BY_ID[f.id] : PAYOUT_BY_ID[f.id];
    if (!hit || mode === "corridors" || !svgRef.current) return setTip(null);
    const r = svgRef.current.getBoundingClientRect();
    const [flagCode, text] = Array.isArray(hit) ? [hit[2], `${hit[0]} · ${hit[1]}`] : [hit.iso, `${hit.name} · ${hit.currency}`];
    setTip({ x: e.clientX - r.left + 14, y: e.clientY - r.top + 14, flag: flagCode, text });
  };

  return (
    <section data-screen-label="Map" style={{ background: "#131126", color: "#F6F4EF" }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="wrap" style={{ paddingTop: "clamp(40px,5vw,64px)", paddingBottom: "clamp(40px,5vw,64px)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap", padding: 6, borderRadius: 14, background: "rgba(255,255,255,.08)" }}>
            {(
              [
                ["payouts", "Payouts · Africa"],
                ["accounts", "Bank accounts · World"],
                ["corridors", "Stablecoin corridors"],
              ] as Array<[Mode, string]>
            ).map(([m, label]) => (
              <button key={m} type="button" className={`cov-seg${mode === m ? " on" : ""}`} aria-pressed={mode === m} onClick={() => switchMode(m)}>
                {label}
              </button>
            ))}
          </div>
          <span style={{ fontFamily: "var(--font-label)", fontSize: 12, color: "#B4B1D0", display: "flex", alignItems: "center", gap: 8 }}>
            {mode === "corridors" ? (
              <>
                <span style={{ width: 18, borderTop: "1.5px dashed #B4B1D0" }} />
                Funded in USDC / USDT, paid out locally
              </>
            ) : (
              <>
                <span style={{ width: 12, height: 12, borderRadius: 3, background: "#8E8BAB" }} />
                {mode === "payouts" ? "Payout country · click to explore" : "Account currency issued"}
              </>
            )}
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: 12, marginTop: 20, alignItems: "stretch" }}>
          <div style={{ gridColumn: "span 2", minWidth: 0, position: "relative", borderRadius: 24, background: "rgba(255,255,255,.04)", overflow: "hidden" }}>
            <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} style={{ display: "block", width: "100%", height: "auto" }} role="group" aria-label="Map of ElementPay coverage">
              <g>
                {feats.map((f, i) => {
                  const pick = mode !== "corridors" && isOn(f.id);
                  const hit = mode === "accounts" ? ACCOUNT_BY_ID[f.id] : PAYOUT_BY_ID[f.id];
                  return (
                    <path
                      // A few territories in world-atlas have no ISO id.
                      key={f.id ?? `shape-${i}`}
                      data-id={f.id}
                      d={path(f) ?? undefined}
                      className={`cov-country${pick ? " on" : ""}${isSel(f.id) ? " sel" : ""}`}
                      style={mode === "corridors" && PAYOUT_BY_ID[f.id] ? { fill: "rgba(142,139,171,.55)" } : undefined}
                      onMouseMove={(e) => onMove(e, f)}
                      onMouseLeave={() => setTip(null)}
                      onClick={() => pick && setSel(f.id)}
                      {...(pick && {
                        tabIndex: 0,
                        role: "button",
                        "aria-label": Array.isArray(hit) ? `${f.properties.name}, ${hit[0]} account` : `${f.properties.name}, payouts in ${hit?.currency}`,
                        "aria-pressed": isSel(f.id),
                        onKeyDown: (e: React.KeyboardEvent) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setSel(f.id);
                          }
                        },
                      })}
                    />
                  );
                })}
              </g>
              <g>
                {mode === "corridors" &&
                  CORRIDORS.map(([hub, city, coords], i) => (
                    <path key={city} className="cov-arc" d={path({ type: "LineString", coordinates: [HUBS[hub], coords] }) ?? undefined} style={{ animationDelay: `${i * 0.12}s` }} />
                  ))}
              </g>
              <g pointerEvents="none">
                {mode === "payouts" &&
                  feats.length > 0 &&
                  PAYOUT_COUNTRIES.map((p) => {
                    const f = feats.find((x) => x.id === p.id);
                    if (!f) return null;
                    const [x, y] = path.centroid(f);
                    return (
                      <g key={p.id}>
                        {p.id === sel && <circle cx={x} cy={y} r={3} fill="none" stroke="#fff" style={{ animation: "epRing 1.6s ease-out infinite" }} />}
                        <circle cx={x} cy={y} r={3} fill={p.id === sel ? "#3B2ED3" : "#fff"} />
                      </g>
                    );
                  })}
                {mode === "corridors" && (
                  <>
                    {CORRIDORS.map(([, city, coords]) => {
                      const [x, y] = proj(coords) ?? [0, 0];
                      return <circle key={city} cx={x} cy={y} r={3.5} fill="#fff" />;
                    })}
                    {Object.entries(HUBS).map(([name, coords]) => {
                      const [x, y] = proj(coords) ?? [0, 0];
                      return (
                        <g key={name}>
                          <circle cx={x} cy={y} r={4} fill="#131126" stroke="#fff" strokeWidth={1.5} />
                          <text x={x + 8} y={y - 6} fill="#B4B1D0" fontSize={11} fontFamily="var(--font-label), monospace">
                            {name}
                          </text>
                        </g>
                      );
                    })}
                  </>
                )}
              </g>
            </svg>
            {tip && (
              <div
                style={{ position: "absolute", left: tip.x, top: tip.y, pointerEvents: "none", display: "flex", padding: "8px 12px", borderRadius: 10, background: "#fff", color: "#131126", fontSize: 13, fontWeight: 500, boxShadow: "0 10px 30px -10px rgba(0,0,0,.5)", whiteSpace: "nowrap", alignItems: "center", gap: 8 }}
              >
                <Flag c={tip.flag} />
                {tip.text}
              </div>
            )}
            {feats.length === 0 && (
              <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", fontFamily: "var(--font-label)", fontSize: 13, color: "#8E8BAB" }}>
                {loadFailed ? (
                  <button type="button" className="cov-seg" onClick={retryLoad}>
                    Map didn&apos;t load · retry
                  </button>
                ) : (
                  "Loading map…"
                )}
              </div>
            )}
          </div>
          <aside style={{ borderRadius: 24, background: "#fff", color: "#131126", padding: 28, display: "flex", flexDirection: "column", gap: 18, minHeight: 360 }}>
            <Panel mode={mode} sel={sel} feats={feats} />
          </aside>
        </div>
      </div>
    </section>
  );
}
