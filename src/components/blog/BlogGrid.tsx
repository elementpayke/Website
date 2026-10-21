"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/blog/articles";
import { CATEGORIES } from "@/lib/blog/articles";

const INK = "#131126";
const PURPLE = "#3B2ED3";
const MUTED = "#4C4A66";
const SOFT = "#6E6C8A";
const CREAM = "#F6F4EF";

type Props = {
  articles: Article[];
};

export default function BlogGrid({ articles }: Props) {
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");

  const query = q.trim().toLowerCase();
  const list = articles.filter((a) => {
    const matchesCat = cat === "All" || a.cat === cat;
    const matchesQuery =
      !query || `${a.title} ${a.desc} ${a.tags.join(" ")}`.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });
  const empty = articles.length > 0 && list.length === 0;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {CATEGORIES.map((c) => {
            const on = cat === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                style={{
                  padding: "10px 14px",
                  border: 0,
                  borderRadius: 12,
                  cursor: "pointer",
                  font: "500 14px var(--font-body)",
                  background: on ? INK : "#fff",
                  color: on ? "#fff" : INK,
                }}
              >
                {c}
              </button>
            );
          })}
        </div>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search guides"
          aria-label="Search guides"
          style={{
            height: 46,
            padding: "0 16px",
            borderRadius: 12,
            border: 0,
            background: "#fff",
            width: "min(100%,280px)",
            boxSizing: "border-box",
            font: "15px var(--font-body)",
            color: INK,
            outline: "none",
          }}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,350px),1fr))",
          gap: 12,
          marginTop: 24,
        }}
      >
        {list.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            style={{ display: "flex", flexDirection: "column", borderRadius: 24, background: "#fff", overflow: "hidden", color: INK, textDecoration: "none" }}
          >
            <div style={{ position: "relative", aspectRatio: "16/8", background: PURPLE, overflow: "hidden" }}>
              <Image
                src={`/flags/${p.flag}.svg`}
                alt=""
                fill
                sizes="350px"
                style={{ objectFit: "cover", filter: "grayscale(1) contrast(1.2)", mixBlendMode: "screen", opacity: 0.4 }}
              />
              <span
                style={{
                  position: "absolute",
                  left: 16,
                  bottom: 16,
                  padding: "5px 10px",
                  borderRadius: 999,
                  background: "#fff",
                  color: INK,
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {p.cat}
              </span>
            </div>
            <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
              <span style={{ display: "flex", gap: 10, fontFamily: "var(--font-label)", fontSize: 12, color: SOFT }}>
                <span>{p.date}</span>
                <span>·</span>
                <span>{p.read}</span>
              </span>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: 24, lineHeight: 1.08, letterSpacing: "-0.02em", fontWeight: 700 }}>
                {p.title}
              </span>
              <span style={{ fontSize: 15, lineHeight: "23px", color: MUTED }}>{p.desc}</span>
              <span style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: "auto", paddingTop: 6 }}>
                {p.tags.map((t) => (
                  <span key={t} style={{ padding: "4px 9px", borderRadius: 7, background: CREAM, fontSize: 12, color: MUTED }}>
                    {t}
                  </span>
                ))}
              </span>
            </div>
          </Link>
        ))}
      </div>
      {empty && <p style={{ padding: "32px 0", color: SOFT }}>No guides match &ldquo;{q}&rdquo;.</p>}
    </>
  );
}
