"use client";

import type { TocEntry } from "@/lib/blog/toc";

const MUTED = "#4C4A66";
const SOFT = "#6E6C8A";
const CREAM = "#F6F4EF";

type Props = {
  toc: TocEntry[];
  tags: readonly string[];
};

export default function ArticleToc({ toc, tags }: Props) {
  const goTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside style={{ position: "sticky", top: 100, display: "grid", gap: 4 }}>
      <span style={{ fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".12em", color: SOFT, marginBottom: 8 }}>
        ON THIS PAGE
      </span>
      {toc.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => goTo(t.id)}
          style={{
            all: "unset",
            cursor: "pointer",
            padding: "8px 12px",
            borderRadius: 10,
            fontSize: 14,
            lineHeight: "20px",
            color: MUTED,
          }}
        >
          {t.label}
        </button>
      ))}
      {tags.length > 0 && (
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 16 }}>
          {tags.map((tag) => (
            <span key={tag} style={{ padding: "4px 9px", borderRadius: 7, background: CREAM, fontSize: 12, color: MUTED }}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </aside>
  );
}
