"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { geoMercator, geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { Feature, Geometry } from "geojson";
import worldAtlas from "world-atlas/countries-110m.json";
import { COLOR, TYPE } from "@/lib/brand";
import { COUNTRIES, GLOBAL_CURRENCIES, accountCurrencies, type Country } from "@/lib/geo/coverage";

// ISO 3166-1 numeric codes, keyed by the alpha-2 flag code used across the
// site. Pure geographic fact (matches world-atlas feature ids) — not an
// ElementPay coverage claim, so this is safe to keep broader than COUNTRIES
// (e.g. every country sharing XOF/XAF) without overstating payout corridors.
const NUMERIC: Record<string, string> = {
  ke: "404", ug: "800", tz: "834", rw: "646", ng: "566", gh: "288",
  za: "710", zm: "894", mw: "454", bw: "072", ar: "032", co: "170",
  us: "840", gb: "826", ca: "124", ae: "784", cn: "156", hk: "344",
  sg: "702", jp: "392", kr: "410", th: "764", au: "036", nz: "554",
  il: "376", mx: "484", ch: "756", se: "752", no: "578", pl: "616",
  cz: "203", hu: "348", ro: "642",
};
// Eurozone has no single numeric code — this is every member state.
const EUR_NUMERIC = ["040", "056", "233", "246", "250", "276", "300", "372", "380", "428", "440", "442", "528", "620", "703", "705", "724", "191"];
const DK_NUMERIC = ["208", "304"]; // Denmark + Greenland
const XOF_NUMERIC = ["204", "854", "384", "624", "466", "562", "686", "768"]; // Benin, Burkina Faso, Côte d'Ivoire, Guinea-Bissau, Mali, Niger, Senegal, Togo
const XAF_NUMERIC = ["120", "140", "148", "178", "226", "266"]; // Cameroon, CAR, Chad, Congo, Eq. Guinea, Gabon

// [lng, lat] of each country's main city, for pins and corridor endpoints.
const COORD: Record<string, [number, number]> = {
  ke: [36.82, -1.29], ug: [32.58, 0.35], tz: [39.28, -6.8], rw: [30.06, -1.95],
  ng: [3.38, 6.52], gh: [-0.19, 5.6], za: [28.05, -26.2], zm: [28.28, -15.42],
  mw: [33.78, -13.96], bw: [25.92, -24.65], ar: [-58.38, -34.6], co: [-74.08, 4.71],
};

// The "Payouts · Africa" mode uses a tight Mercator crop around the African
// continent — Argentina and Colombia fall outside that frame, so they're
// excluded from this mode's hit-testing/selection (they're still shown in
// "Stablecoin corridors", which uses a world projection).
const AFRICA_PAYOUT_COUNTRIES = COUNTRIES.filter((c) => c.region !== "Latin America");

const HUBS: Record<string, [number, number]> = {
  London: [-0.13, 51.5], "New York": [-74, 40.7], Dubai: [55.3, 25.2],
  Shanghai: [121.5, 31.2], Frankfurt: [8.7, 50.1], Singapore: [103.8, 1.35],
};
const CORRIDORS: Array<[string, Country]> = [
  ["London", COUNTRIES.find((c) => c.iso === "ke")!],
  ["New York", COUNTRIES.find((c) => c.iso === "ng")!],
  ["Dubai", COUNTRIES.find((c) => c.iso === "gh")!],
  ["Shanghai", COUNTRIES.find((c) => c.iso === "tz")!],
  ["Singapore", COUNTRIES.find((c) => c.iso === "za")!],
  ["London", COUNTRIES.find((c) => c.iso === "ug")!],
  ["Frankfurt", COUNTRIES.find((c) => c.iso === "zm")!],
  ["Dubai", COUNTRIES.find((c) => c.iso === "bw")!],
  ["New York", COUNTRIES.find((c) => c.iso === "ar")!],
  ["Frankfurt", COUNTRIES.find((c) => c.iso === "co")!],
];

type AccountEntry = ReturnType<typeof accountCurrencies>[number];
function accountNumericIds(entry: AccountEntry): string[] {
  if (entry.code === "EUR") return EUR_NUMERIC;
  if (entry.code === "DKK") return DK_NUMERIC;
  if (entry.code === "XOF") return XOF_NUMERIC;
  if (entry.code === "XAF") return XAF_NUMERIC;
  const g = GLOBAL_CURRENCIES.find((x) => x.currencyCode === entry.code);
  const iso = g?.iso ?? entry.flagIso;
  return NUMERIC[iso] ? [NUMERIC[iso]] : [];
}

type Mode = "payouts" | "accounts" | "corridors";
type WorldFeature = Feature<Geometry, { name: string }>;

function useWorldFeatures(): WorldFeature[] {
  return useMemo(() => {
    const world = feature(
      worldAtlas as unknown as Topology,
      worldAtlas.objects.countries as unknown as GeometryCollection,
    );
    return (world.features as WorldFeature[]).filter((f) => f.id !== "010"); // drop Antarctica
  }, []);
}

const segStyle = (on: boolean): React.CSSProperties => ({
  padding: "10px 16px",
  border: 0,
  borderRadius: 10,
  cursor: "pointer",
  font: "500 14px var(--font-body)",
  background: on ? "#fff" : "transparent",
  color: on ? COLOR.ink : COLOR.onDark,
});

const railChip: React.CSSProperties = {
  padding: "6px 10px",
  borderRadius: 8,
  background: COLOR.cream,
  fontSize: 13,
};

export default function CoverageMap() {
  const [mode, setMode] = useState<Mode>("payouts");
  const [selected, setSelected] = useState<Country>(COUNTRIES[0]);
  const [selectedAccount, setSelectedAccount] = useState<AccountEntry>(accountCurrencies()[0]);
  const [hover, setHover] = useState<{ x: number; y: number; label: string } | null>(null);
  const features = useWorldFeatures();
  const accounts = useMemo(() => accountCurrencies(), []);

  const W = 900;
  const H = 620;
  const proj = useMemo(() => {
    if (mode === "payouts") {
      const africa = { type: "MultiPoint" as const, coordinates: [[-18, -35], [52, 37.5]] };
      return geoMercator().fitExtent([[30, 20], [W - 30, H - 20]], africa);
    }
    return geoNaturalEarth1().fitExtent([[10, 10], [W - 10, H - 10]], { type: "Sphere" } as never);
  }, [mode]);
  const path = useMemo(() => geoPath(proj), [proj]);

  const allPayoutById = useMemo(() => {
    const m = new Map<string, Country>();
    for (const c of COUNTRIES) {
      const id = NUMERIC[c.iso];
      if (id) m.set(id, c);
    }
    return m;
  }, []);
  // Africa-only — this is what the "Payouts · Africa" mode hit-tests against,
  // since Argentina/Colombia sit outside the Mercator crop and would otherwise
  // be invisibly clickable via their off-screen landmass bounding boxes.
  const payoutById = useMemo(() => {
    const m = new Map<string, Country>();
    for (const c of AFRICA_PAYOUT_COUNTRIES) {
      const id = NUMERIC[c.iso];
      if (id) m.set(id, c);
    }
    return m;
  }, []);
  const accountById = useMemo(() => {
    const m = new Map<string, AccountEntry>();
    for (const a of accounts) {
      for (const id of accountNumericIds(a)) m.set(id, a);
    }
    return m;
  }, [accounts]);

  const isOn = (id: string) => (mode === "accounts" ? accountById.has(id) : payoutById.has(id));
  const isSel = (id: string) => {
    if (mode === "accounts") {
      const a = accountById.get(id);
      return !!a && a.code === selectedAccount.code;
    }
    return payoutById.get(id)?.iso === selected.iso;
  };

  return (
    <section
      data-screen-label="Map"
      style={{ background: COLOR.ink, color: COLOR.cream, borderRadius: 28, overflow: "hidden" }}
    >
      <div style={{ padding: "clamp(28px,4vw,48px)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap", padding: 6, borderRadius: 14, background: "rgba(255,255,255,.08)" }}>
            <button type="button" style={segStyle(mode === "payouts")} onClick={() => setMode("payouts")}>Payouts · Africa</button>
            <button type="button" style={segStyle(mode === "accounts")} onClick={() => setMode("accounts")}>Bank accounts · World</button>
            <button type="button" style={segStyle(mode === "corridors")} onClick={() => setMode("corridors")}>Stablecoin corridors</button>
          </div>
          <span style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.onDark, display: "flex", alignItems: "center", gap: 8 }}>
            {mode === "payouts" && <><span style={{ width: 12, height: 12, borderRadius: 3, background: "#8E8BAB" }} />Payout country · click to explore</>}
            {mode === "accounts" && <><span style={{ width: 12, height: 12, borderRadius: 3, background: "#8E8BAB" }} />Account currency issued</>}
            {mode === "corridors" && <><span style={{ width: 18, borderTop: "1.5px dashed #B4B1D0" }} />Funded in USDC / USDT, paid out locally</>}
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: 12, marginTop: 20, alignItems: "stretch" }}>
          <div style={{ gridColumn: "span 2", minWidth: 0, position: "relative", borderRadius: 24, background: "rgba(255,255,255,.04)", overflow: "hidden" }}>
            <svg viewBox={`0 0 ${W} ${H}`} style={{ display: "block", width: "100%", height: "auto" }} role="img" aria-label="Map of ElementPay coverage">
              <g>
                {features.map((f, i) => {
                  const id = String(f.id);
                  const on = isOn(id) && mode !== "corridors";
                  const sel = isSel(id);
                  const corridorShaded = mode === "corridors" && allPayoutById.has(id);
                  return (
                    <path
                      key={`${id}-${i}`}
                      d={path(f) ?? undefined}
                      fill={corridorShaded ? "rgba(142,139,171,.55)" : sel ? "#fff" : on ? "#8E8BAB" : "rgba(255,255,255,.07)"}
                      stroke={COLOR.ink}
                      strokeWidth={0.6}
                      style={{ transition: "fill .2s", cursor: on ? "pointer" : "default" }}
                      onMouseMove={(e) => {
                        if (mode === "corridors") return;
                        const label = mode === "accounts" ? accountById.get(id) : payoutById.get(id);
                        if (!label) { setHover(null); return; }
                        const rect = (e.target as SVGPathElement).ownerSVGElement!.getBoundingClientRect();
                        const text = mode === "accounts" ? `${(label as AccountEntry).code} · ${(label as AccountEntry).name}` : `${(label as Country).name} · ${(label as Country).currencyCode}`;
                        setHover({ x: e.clientX - rect.left + 14, y: e.clientY - rect.top + 14, label: text });
                      }}
                      onMouseLeave={() => setHover(null)}
                      onClick={() => {
                        if (mode === "payouts" && payoutById.has(id)) setSelected(payoutById.get(id)!);
                        if (mode === "accounts" && accountById.has(id)) setSelectedAccount(accountById.get(id)!);
                      }}
                    />
                  );
                })}
              </g>

              {mode === "payouts" && (
                <g>
                  {AFRICA_PAYOUT_COUNTRIES.filter((c) => COORD[c.iso]).map((c) => {
                    const xy = proj(COORD[c.iso]);
                    if (!xy) return null;
                    const sel = c.iso === selected.iso;
                    return (
                      <g key={c.iso} style={{ pointerEvents: "none" }}>
                        {sel && <circle cx={xy[0]} cy={xy[1]} r={3} fill="none" stroke="#fff" style={{ animation: "epRing 1.6s ease-out infinite" }} />}
                        <circle cx={xy[0]} cy={xy[1]} r={3} fill={sel ? COLOR.indigo : "#fff"} />
                      </g>
                    );
                  })}
                </g>
              )}

              {mode === "corridors" && (
                <g>
                  {CORRIDORS.map(([hub, dest], i) => {
                    const coord = COORD[dest.iso];
                    if (!coord) return null;
                    const d = path({ type: "LineString", coordinates: [HUBS[hub], coord] } as never);
                    return (
                      <path
                        key={`${hub}-${dest.iso}`}
                        d={d ?? undefined}
                        fill="none"
                        stroke="#B4B1D0"
                        strokeWidth={1.3}
                        strokeDasharray="4 6"
                        opacity={0.85}
                        style={{ animation: `epDash 1.2s linear infinite`, animationDelay: `${i * 0.12}s` }}
                      />
                    );
                  })}
                  {CORRIDORS.map(([, dest]) => {
                    const xy = proj(COORD[dest.iso]);
                    if (!xy) return null;
                    return <circle key={dest.iso} cx={xy[0]} cy={xy[1]} r={3.5} fill="#fff" style={{ pointerEvents: "none" }} />;
                  })}
                  {Object.entries(HUBS).map(([name, coord]) => {
                    const xy = proj(coord);
                    if (!xy) return null;
                    return (
                      <g key={name} style={{ pointerEvents: "none" }}>
                        <circle cx={xy[0]} cy={xy[1]} r={4} fill={COLOR.ink} stroke="#fff" strokeWidth={1.5} />
                        <text x={xy[0] + 8} y={xy[1] - 6} fill="#B4B1D0" fontSize={11} fontFamily="var(--font-mono, monospace)">{name}</text>
                      </g>
                    );
                  })}
                </g>
              )}
            </svg>
            {hover && (
              <div style={{ position: "absolute", left: hover.x, top: hover.y, pointerEvents: "none", padding: "8px 12px", borderRadius: 10, background: "#fff", color: COLOR.ink, fontSize: 13, fontWeight: 500, boxShadow: "0 10px 30px -10px rgba(0,0,0,.5)", whiteSpace: "nowrap" }}>
                {hover.label}
              </div>
            )}
          </div>

          <aside style={{ borderRadius: 24, background: "#fff", color: COLOR.ink, padding: 28, display: "flex", flexDirection: "column", gap: 18, minHeight: 360 }}>
            {mode === "payouts" && (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <Image src={`/flags/${selected.iso}.svg`} alt="" width={56} height={40} style={{ width: 56, height: 40, borderRadius: 6, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
                  <div>
                    <div style={{ ...TYPE.h3Feature, fontSize: 32 }}>{selected.name}</div>
                    <div style={{ fontSize: 13, color: COLOR.muted, marginTop: 4 }}>{selected.region}</div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                  <div style={{ padding: 14, borderRadius: 14, background: COLOR.cream }}>
                    <div style={{ fontFamily: "var(--font-label)", fontSize: 11, color: COLOR.muted }}>CURRENCY</div>
                    <div style={{ fontWeight: 600, marginTop: 4 }}>{selected.currencyCode}</div>
                  </div>
                  <div style={{ padding: 14, borderRadius: 14, background: COLOR.cream }}>
                    <div style={{ fontFamily: "var(--font-label)", fontSize: 11, color: COLOR.muted }}>DELIVERY</div>
                    <div style={{ fontWeight: 600, marginTop: 4 }}>Depends on the rail</div>
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-label)", fontSize: 11, color: COLOR.muted, marginBottom: 8 }}>PAYOUT RAILS</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {selected.rails.map((r) => <span key={r.name} style={railChip}>{r.name}</span>)}
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-label)", fontSize: 11, color: COLOR.muted, marginBottom: 8 }}>FUND WITH</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {["USD", "EUR", "GBP"].map((r) => <span key={r} style={railChip}>{r}</span>)}
                    <span style={{ ...railChip, background: COLOR.tint, color: COLOR.indigo }}>USDC</span>
                    <span style={{ ...railChip, background: COLOR.tint, color: COLOR.indigo }}>USDT</span>
                  </div>
                </div>
                <a href={`/send-money-to-${selected.slug}`} style={{ marginTop: "auto", fontWeight: 600, color: COLOR.indigo }}>Send money to {selected.name} →</a>
              </>
            )}

            {mode === "accounts" && (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <Image src={`/flags/${selectedAccount.flagIso}.svg`} alt="" width={56} height={40} style={{ width: 56, height: 40, borderRadius: 6, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
                  <div>
                    <div style={{ ...TYPE.h3Feature, fontSize: 40 }}>{selectedAccount.code}</div>
                    <div style={{ fontSize: 14, color: COLOR.slate, marginTop: 2 }}>{selectedAccount.name}</div>
                  </div>
                </div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: "23px", color: COLOR.slate }}>
                  A dedicated {selectedAccount.code} account with its own details, so customers and partners pay you like a local.
                </p>
                <div>
                  <div style={{ fontFamily: "var(--font-label)", fontSize: 11, color: COLOR.muted, marginBottom: 8 }}>CONVERTS TO</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    <span style={railChip}>29 other currencies</span>
                    <span style={{ ...railChip, background: COLOR.tint, color: COLOR.indigo }}>USDC</span>
                    <span style={{ ...railChip, background: COLOR.tint, color: COLOR.indigo }}>USDT</span>
                  </div>
                </div>
                <a href="/business-accounts" style={{ marginTop: "auto", fontWeight: 600, color: COLOR.indigo }}>Open a {selectedAccount.code} account →</a>
              </>
            )}

            {mode === "corridors" && (
              <>
                <div style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.indigo }}>STABLECOIN CORRIDORS</div>
                <div style={{ ...TYPE.h3Feature, fontSize: 32, lineHeight: 1.05 }}>Fund in digital dollars. Deliver in local currency.</div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: "23px", color: COLOR.slate }}>
                  Send USDC or USDT from anywhere, at any hour. ElementPay converts and pays out on mobile money or bank rails in the destination country.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 6 }}>
                  {CORRIDORS.map(([hub, dest]) => (
                    <div key={`${hub}-${dest.iso}`} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 12, background: COLOR.cream, fontSize: 14 }}>
                      <span style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.muted, width: 72 }}>{hub}</span>
                      <span style={{ color: COLOR.indigo }}>→</span>
                      <Image src={`/flags/${dest.iso}.svg`} alt="" width={20} height={14} style={{ width: 20, height: 14, borderRadius: 2, objectFit: "cover" }} />
                      <span style={{ fontWeight: 600 }}>{dest.name}</span>
                    </div>
                  ))}
                </div>
                <a href="/stablecoins" style={{ marginTop: "auto", fontWeight: 600, color: COLOR.indigo }}>Explore stablecoin rails →</a>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
