"use client";

const MUTED = "#4C4A66";
const SOFT = "#6E6C8A";
const TINT = "#EEEDFB";
const INDIGO = "#3B2ED3";

export type TocEntry = { id: string; label: string };

export default function LegalToc({ toc }: { toc: TocEntry[] }) {
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside
      style={{
        position: "sticky",
        top: 100,
        maxHeight: "calc(100vh - 140px)",
        overflowY: "auto",
        display: "grid",
        gap: 2,
        padding: "20px 16px",
        borderRadius: 18,
        background: TINT,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-label)",
          fontSize: 12,
          letterSpacing: ".1em",
          textTransform: "uppercase",
          color: SOFT,
          marginBottom: 10,
        }}
      >
        Contents
      </span>
      {toc.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => goTo(t.id)}
          style={{
            all: "unset",
            cursor: "pointer",
            padding: "7px 10px",
            borderRadius: 9,
            fontSize: 13.5,
            lineHeight: 1.4,
            color: MUTED,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.color = INDIGO;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = MUTED;
          }}
        >
          {t.label}
        </button>
      ))}
    </aside>
  );
}
