import Link from "next/link";
import { hover } from "@/lib/design/pseudo";
import { COLOR, TYPE } from "@/lib/brand";

export default function ProductCta() {
  return (
    <section style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(80px,10vw,140px) clamp(20px,4vw,48px) 0" }}>
      <div
        style={{
          borderRadius: 28,
          background: COLOR.indigo,
          color: "#fff",
          padding: "clamp(36px,6vw,80px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 32,
          flexWrap: "wrap",
        }}
      >
        <h2 style={{ ...TYPE.h2Cta, lineHeight: 0.92, margin: 0, maxWidth: "10ch" }}>Get on the rails.</h2>
        <Link href="/contact" className={hover("background:#F6F4EF;color:#131126")} style={{ padding: "16px 28px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: "#fff", color: COLOR.indigo }}>
          Talk to sales
        </Link>
      </div>
    </section>
  );
}
