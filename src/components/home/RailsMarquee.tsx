import { RAILS_A, RAILS_B, RAIL_COUNT, type RailChip } from "./homeData";

function Chip({ r }: { r: RailChip }) {
  return (
    <>
      {r.label && (
        <span style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 10px 0 22px", fontFamily: "var(--font-label)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#4C4A66", whiteSpace: "nowrap", flex: "none" }}>
          <span style={r.sq} />
          {r.label}
        </span>
      )}
      <span style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 14px 7px 8px", borderRadius: 999, background: "#fff", border: "1px solid rgba(19,17,38,.08)", fontSize: 13, fontWeight: 700, whiteSpace: "nowrap", flex: "none" }}>
        <span aria-hidden style={r.logoStyle}>{r.ini}</span>
        {r.n}
      </span>
    </>
  );
}

export default function RailsMarquee() {
  return (
    <section
      aria-label="Supported payment rails"
      style={{
        borderTop: "1px solid rgba(19,17,38,.08)",
        borderBottom: "1px solid rgba(19,17,38,.08)",
        padding: "20px 0",
        background: "rgba(19,17,38,.045)",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr)",
        gap: 10,
      }}
    >
      <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto 4px", padding: "0 clamp(16px,4vw,24px)", boxSizing: "border-box", display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", fontSize: 13, color: "#4C4A66" }}>
        <b style={{ color: "#131126", fontFamily: "var(--font-heading)" }}>{RAIL_COUNT} rails and networks, one connection</b>
        <span>Mobile money · bank rails · stablecoins and chains</span>
      </div>
      <div style={{ display: "flex", gap: 10, width: "max-content", animation: "epMarquee 70s linear infinite" }}>
        {RAILS_A.map((r, i) => <Chip key={i} r={r} />)}
      </div>
      <div style={{ display: "flex", gap: 10, width: "max-content", animation: "epMarquee 80s linear infinite reverse" }}>
        {RAILS_B.map((r, i) => <Chip key={i} r={r} />)}
      </div>
    </section>
  );
}
