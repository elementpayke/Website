import Link from "next/link";
import { COLOR, TYPE } from "@/lib/brand";
import { COUNTRIES, accountCurrencies } from "@/lib/geo/coverage";

export default function CoverageDirectory() {
  const regions = ["East Africa", "West Africa", "Central Africa", "Southern Africa"] as const;

  return (
    <section data-screen-label="Coverage directory" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(32px,5vw,64px) clamp(20px,4vw,48px) 0" }}>
      <h2 style={{ ...TYPE.h2Section, margin: 0 }}>Payout countries.</h2>
      <p style={{ ...TYPE.lede, margin: "16px 0 0", maxWidth: "54ch" }}>
        Open a country guide for send-money or stablecoin payments on local rails.
      </p>
      {regions.map((region) => {
        const rows = COUNTRIES.filter((c) => c.region === region);
        return (
          <div key={region} style={{ marginTop: 36 }}>
            <h3 style={{ ...TYPE.h3Card, margin: "0 0 16px" }}>{region}</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: 10 }}>
              {rows.map((c) => (
                <div key={c.slug} style={{ padding: 18, borderRadius: 18, background: COLOR.cream, display: "grid", gap: 8 }}>
                  <strong style={{ fontSize: 16 }}>{c.name}</strong>
                  <span style={{ fontSize: 14, color: COLOR.slate }}>
                    {c.currencyCode} · {c.rails.map((r) => r.name).join(", ")}
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
                    <Link href={`/send-money-to-${c.slug}`} style={{ fontSize: 14, color: COLOR.indigo, fontWeight: 500 }}>
                      Send money →
                    </Link>
                    <Link href={`/stablecoin-payments-in-${c.slug}`} style={{ fontSize: 14, color: COLOR.indigo, fontWeight: 500 }}>
                      Stablecoins →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <h2 style={{ ...TYPE.h2Section, margin: "64px 0 0" }}>Account currencies.</h2>
      <p style={{ ...TYPE.lede, margin: "16px 0 0", maxWidth: "54ch" }}>Open a business account page for each supported currency.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,140px),1fr))", gap: 10, marginTop: 24 }}>
        {accountCurrencies().map((c) => (
          <Link
            key={c.code}
            href={`/open-a-${c.code.toLowerCase()}-account`}
            style={{ padding: "16px 18px", borderRadius: 16, background: COLOR.cream, color: COLOR.ink, fontWeight: 500 }}
          >
            {c.code}
            <span style={{ display: "block", fontWeight: 400, fontSize: 13, color: COLOR.slate, marginTop: 4 }}>{c.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
