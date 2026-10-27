import type { ReactNode } from "react";
import { COLOR, TYPE, fullStopSquare } from "@/lib/brand";
import type { LegalBlock, LegalDoc } from "@/lib/legal/types";
import LegalToc, { type TocEntry } from "./LegalToc";

function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul style={{ margin: "0 0 20px", padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
      {items.map((item, i) => (
        <li key={i} style={{ position: "relative", paddingLeft: 22 }}>
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              top: "0.6em",
              width: 6,
              height: 6,
              borderRadius: 1,
              background: COLOR.indigo,
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Clauses({ items }: { items: { n: string; children: ReactNode }[] }) {
  return (
    <div style={{ display: "grid", gap: 16, margin: "0 0 20px" }}>
      {items.map((c, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "3.2rem minmax(0,1fr)", columnGap: 4 }}>
          <span
            style={{
              fontFamily: "var(--font-label)",
              fontWeight: 500,
              fontSize: 14,
              color: COLOR.indigoPress,
              paddingTop: 1,
            }}
          >
            {c.n}
          </span>
          <span style={{ minWidth: 0, overflowWrap: "anywhere" }}>{c.children}</span>
        </div>
      ))}
    </div>
  );
}

function DocTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div style={{ overflowX: "auto", margin: "0 0 20px", borderRadius: 14, boxShadow: `0 0 0 1px ${COLOR.hairline}` }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14.5 }}>
        <thead>
          <tr>
            {head.map((h, i) => (
              <th
                key={i}
                style={{
                  textAlign: "left",
                  padding: "12px 16px",
                  background: COLOR.cream,
                  color: COLOR.ink,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  borderBottom: `1px solid ${COLOR.hairline}`,
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  style={{
                    padding: "12px 16px",
                    verticalAlign: "top",
                    color: COLOR.slate,
                    borderBottom: ri === rows.length - 1 ? "none" : `1px solid ${COLOR.hairline}`,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderBlock(block: LegalBlock, i: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={i} style={{ ...TYPE.articleBody, color: COLOR.slate, margin: "0 0 20px", maxWidth: "64ch" }}>
          {block.children}
        </p>
      );
    case "ul":
      return <Bullets key={i} items={block.items} />;
    case "clauses":
      return <Clauses key={i} items={block.items} />;
    case "table":
      return <DocTable key={i} head={block.head} rows={block.rows} />;
    default:
      return null;
  }
}

export default function LegalDocLayout({ doc, updated }: { doc: LegalDoc; updated: string }) {
  const toc: TocEntry[] = doc.sections.map((s, i) => ({ id: `clause-${i + 1}`, label: s.heading }));

  return (
    <article data-screen-label="Legal document">
      <header style={{ maxWidth: 760, margin: "0 auto", padding: "clamp(40px,6vw,80px) clamp(20px,4vw,48px) 0", textAlign: "center" }}>
        <p
          style={{
            ...TYPE.eyebrow,
            color: COLOR.indigoPress,
            margin: 0,
          }}
        >
          {doc.eyebrow}
        </p>
        <h1 style={{ ...TYPE.h1Article, margin: "14px auto 0", maxWidth: "20ch" }}>
          {doc.title}
          <span aria-hidden="true" style={fullStopSquare} />
        </h1>
        <p style={{ ...TYPE.lede, margin: "18px auto 0", maxWidth: "48ch" }}>{doc.lede}</p>
      </header>

      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "clamp(40px,6vw,64px) clamp(20px,4vw,48px) clamp(64px,8vw,96px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,230px),1fr))",
          gap: "clamp(24px,4vw,56px)",
          alignItems: "start",
        }}
      >
        <LegalToc toc={toc} />

        <div style={{ gridColumn: "span 2", minWidth: 0, maxWidth: 680 }}>
          {doc.intro && (
            <p style={{ ...TYPE.articleBody, color: COLOR.slate, margin: "0 0 20px", maxWidth: "64ch" }}>{doc.intro}</p>
          )}
          {doc.sections.map((section, i) => (
            <section key={i} id={`clause-${i + 1}`} style={{ scrollMarginTop: 96 }}>
              <h2 style={{ ...TYPE.h3Feature, fontSize: "clamp(20px,1.1vw + 17px,26px)", margin: i === 0 ? "0 0 16px" : "44px 0 16px" }}>
                {section.heading}
              </h2>
              {section.blocks.map((b, bi) => renderBlock(b, bi))}
            </section>
          ))}

          <p style={{ marginTop: 40, paddingTop: 24, borderTop: `1px solid ${COLOR.hairline}`, fontSize: 13.5, color: COLOR.muted }}>
            {updated}
          </p>
        </div>
      </div>
    </article>
  );
}
