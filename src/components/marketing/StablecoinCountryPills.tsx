import Link from "next/link";
import { COLOR, TYPE } from "@/lib/brand";

export default function StablecoinCountryPills({
  heading,
  links,
}: {
  heading: string;
  links: ReadonlyArray<readonly [string, string]>;
}) {
  return (
    <section data-screen-label="Coverage" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
      <h2 style={{ ...TYPE.h2Section, fontSize: "clamp(30px, 1.9vw + 23px, 52px)", margin: 0 }}>{heading}</h2>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 28 }}>
        {links.map(([label, href]) => (
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
              boxShadow: `0 0 0 1px ${COLOR.hairline}`,
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}
