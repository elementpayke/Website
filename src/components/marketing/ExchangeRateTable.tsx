import Image from "next/image";
import Link from "next/link";
import { COLOR } from "@/lib/brand";
import { COUNTRIES } from "@/lib/geo/coverage";
import { RATE, fmt } from "@/lib/products/fx";

const th: React.CSSProperties = { padding: "18px 24px", fontWeight: 500 };
const td: React.CSSProperties = { padding: "16px 24px" };
const rate: React.CSSProperties = { padding: "16px 24px", fontFamily: "var(--font-label)" };

function decimalsFor(code: string): number {
  return RATE[code] < 100 ? 2 : 0;
}

export default function ExchangeRateTable() {
  const rows = COUNTRIES.map((c) => ({
    country: c,
    usd: RATE[c.currencyCode],
    eur: RATE[c.currencyCode] / RATE.EUR,
    gbp: RATE[c.currencyCode] / RATE.GBP,
    usdc: RATE[c.currencyCode],
  })).filter((r) => r.usd != null);

  return (
    <div style={{ marginTop: 32, borderRadius: 24, background: "#fff", overflowX: "auto" }}>
      <table style={{ width: "100%", minWidth: 720, borderCollapse: "collapse", fontSize: 15 }}>
        <thead>
          <tr style={{ fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".08em", color: COLOR.muted, textAlign: "left" }}>
            <th style={th}>CURRENCY</th>
            <th style={th}>1 USD =</th>
            <th style={th}>1 EUR =</th>
            <th style={th}>1 GBP =</th>
            <th style={th}>1 USDC =</th>
            <th style={th} />
          </tr>
        </thead>
        <tbody>
          {rows.map(({ country: c, usd, eur, gbp, usdc }) => {
            const d = decimalsFor(c.currencyCode);
            return (
              <tr key={c.slug} style={{ borderTop: `1px solid #EEEDE8` }}>
                <td style={td}>
                  <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <Image
                      src={`/flags/${c.iso}.svg`}
                      alt=""
                      width={28}
                      height={19}
                      style={{ width: 28, height: 19, borderRadius: 3, objectFit: "cover", flex: "none", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }}
                    />
                    <span>
                      <b style={{ display: "block", fontWeight: 600 }}>{c.currencyCode}</b>
                      <span style={{ fontSize: 13, color: COLOR.muted }}>{c.name}</span>
                    </span>
                  </span>
                </td>
                <td style={rate}>{fmt(usd, d)}</td>
                <td style={rate}>{fmt(eur, d)}</td>
                <td style={rate}>{fmt(gbp, d)}</td>
                <td style={rate}>{fmt(usdc, d)}</td>
                <td style={td}>
                  <Link href={`/send-money-to-${c.slug}`} style={{ fontWeight: 600, fontSize: 14, whiteSpace: "nowrap" }}>
                    Pay {c.name} →
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
