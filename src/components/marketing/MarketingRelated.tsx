import Link from "next/link";
import { COLOR, TYPE } from "@/lib/brand";
import type { MarketingPageData } from "@/lib/marketing/types";

export default function MarketingRelated({ page }: { page: MarketingPageData }) {
  if (!page.related.length) return null;

  return (
    <section data-screen-label="Explore" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(48px,7vw,96px) clamp(20px,4vw,48px) 0" }}>
      <h2 style={{ ...TYPE.h2Section, margin: 0 }}>Explore more.</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: 12, marginTop: 28 }}>
        {page.related.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            style={{
              display: "block",
              padding: "22px 24px",
              borderRadius: 20,
              background: COLOR.cream,
              color: COLOR.ink,
              fontWeight: 500,
              fontSize: 16,
            }}
          >
            {label} →
          </Link>
        ))}
      </div>
    </section>
  );
}
