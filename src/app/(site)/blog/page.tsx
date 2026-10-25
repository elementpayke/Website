import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ARTICLES } from "@/lib/blog/articles";
import BlogGrid from "@/components/blog/BlogGrid";
import { TYPE, fullStopSquare } from "@/lib/brand";
import DesignJsonLd from "@/components/design/DesignJsonLd";
import { designHead, designMetadata } from "@/lib/design/pages";

export const metadata: Metadata = designMetadata(designHead("/blog"));

const INK = "#131126";
const PURPLE = "#3B2ED3";
const MUTED = "#4C4A66";

export default function BlogIndexPage() {
  const [feat, ...rest] = ARTICLES;

  return (
    <>
      <DesignJsonLd url="/blog" />
      <section
        data-screen-label="Blog hero"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "clamp(48px,7vw,96px) clamp(20px,4vw,48px) clamp(40px,5vw,64px)",
        }}
      >
        <div style={{ display: "flex", gap: 8, fontFamily: "var(--font-label)", fontSize: 13, color: "#6E6C8A" }}>
          <Link href="/" style={{ color: "#6E6C8A", textDecoration: "none" }}>
            Home
          </Link>
          <span>/</span>
          <span>Resources</span>
          <span>/</span>
          <span style={{ color: PURPLE }}>Blog</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap", marginTop: 24 }}>
          <h1
            style={{
              ...TYPE.h1Hero,
              margin: 0,
              maxWidth: "13ch",
            }}
          >
            Field notes on moving money
            <span aria-hidden="true" style={fullStopSquare} />
          </h1>
          <p style={{ fontSize: 17, lineHeight: "26px", color: MUTED, margin: 0, maxWidth: "40ch" }}>
            Guides on mobile money, stablecoins, FX and cross-border payments across emerging markets, from the
            ElementPay team.
          </p>
        </div>
        <Link
          href={`/blog/${feat.slug}`}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))",
            gap: 0,
            marginTop: 48,
            borderRadius: 28,
            overflow: "hidden",
            background: INK,
            color: "#F6F4EF",
            textDecoration: "none",
          }}
        >
          <div style={{ position: "relative", minHeight: 320, background: PURPLE, overflow: "hidden" }}>
            <Image
              src={`/flags/${feat.flag}.svg`}
              alt=""
              fill
              sizes="380px"
              style={{ objectFit: "cover", filter: "grayscale(1) contrast(1.2)", mixBlendMode: "screen", opacity: 0.4 }}
            />
            <span
              style={{
                position: "absolute",
                left: 24,
                top: 24,
                padding: "6px 12px",
                borderRadius: 999,
                background: "#fff",
                color: INK,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              Featured
            </span>
          </div>
          <div style={{ padding: "clamp(24px,4vw,48px)", display: "flex", flexDirection: "column", gap: 16, justifyContent: "flex-end" }}>
            <span style={{ display: "flex", gap: 12, fontFamily: "var(--font-label)", fontSize: 12, color: "#B4B1D0" }}>
              <span>{feat.cat}</span>
              <span>·</span>
              <span>{feat.date}</span>
              <span>·</span>
              <span>{feat.read}</span>
            </span>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px,2.51vw,34px)", lineHeight: 1.02, letterSpacing: "-0.03em", fontWeight: 700 }}>
              {feat.title}
            </span>
            <span style={{ fontSize: 16, lineHeight: "25px", color: "#B4B1D0" }}>{feat.desc}</span>
            <span style={{ fontWeight: 600 }}>Read the guide →</span>
          </div>
        </Link>
      </section>

      <div style={{ background: "#F6F4EF" }}>
        <section
          data-screen-label="Articles"
          style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(56px,7vw,96px) clamp(20px,4vw,48px) 0" }}
        >
          <BlogGrid articles={rest} />
        </section>
      </div>
    </>
  );
}
