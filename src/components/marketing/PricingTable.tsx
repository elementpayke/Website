import { COLOR } from "@/lib/brand";

const ROWS: Array<[string, string, string]> = [
  ["Payouts", "Per-payout fee by country and rail", "Before you confirm"],
  ["FX and stablecoins", "Rate with a margin over mid-market", "In the quote, locked before you approve"],
  ["Collections", "Per-transaction fee by method", "In your agreement"],
  ["Business accounts", "Tailored to currencies and volume", "In your agreement"],
  ["OTC desk", "Firm quote from a trader", "Held for 60 seconds"],
];

const th: React.CSSProperties = { padding: "18px 24px", fontWeight: 500 };
const td: React.CSSProperties = { padding: "18px 24px" };

export default function PricingTable() {
  return (
    <div style={{ marginTop: 32, borderRadius: 24, background: "#fff", overflowX: "auto" }}>
      <table style={{ width: "100%", minWidth: 600, borderCollapse: "collapse", fontSize: 15 }}>
        <thead>
          <tr style={{ fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".08em", color: COLOR.muted, textAlign: "left" }}>
            <th style={th} />
            <th style={th}>HOW IT IS PRICED</th>
            <th style={{ ...th, color: COLOR.indigo }}>WHEN YOU SEE IT</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map(([name, how, when]) => (
            <tr key={name} style={{ borderTop: "1px solid #EEEDE8" }}>
              <td style={{ ...td, fontWeight: 600 }}>{name}</td>
              <td style={{ ...td, color: COLOR.muted }}>{how}</td>
              <td style={{ ...td, fontWeight: 600, color: COLOR.ink }}>{when}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
