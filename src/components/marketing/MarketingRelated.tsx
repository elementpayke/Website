import Link from "next/link";
import { COLOR, TYPE } from "@/lib/brand";
import type { MarketingPageData } from "@/lib/marketing/types";

export default function MarketingRelated({ page }: { page: MarketingPageData }) {
  if (!page.related.length) return null;

  return (
    <section data-screen-label="Explore" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(48px,7vw,96px) clamp(20px,4vw,48px) 0" }}>
      <h2 style={{ ...TYPE.h2Section, margin: 0 }}>{page.relatedHeading ?? "Explore more."}</h2>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 28 }}>
        {page.related.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              minHeight: 44,
              padding: "0 18px",
              borderRadius: 999,
              background: "#fff",
              color: COLOR.ink,
              fontWeight: 500,
              fontSize: 15,
              boxShadow: `inset 0 0 0 1px ${COLOR.hairline}`,
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}
