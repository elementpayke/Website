"use client";

import { useState } from "react";
import { COLOR } from "@/lib/brand";

const TEAMS = ["Engineering", "Product and design", "Payments operations", "Compliance and risk", "Sales and partnerships", "Customer success"];

const inputStyle: React.CSSProperties = {
  height: 52,
  padding: "0 16px",
  borderRadius: 12,
  border: 0,
  background: COLOR.cream,
  font: "16px var(--font-body)",
  color: COLOR.ink,
  outline: "none",
};

export default function CareersApplyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [team, setTeam] = useState<string | null>(null);
  const [link, setLink] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = () => {
    setSent(false);
    setName("");
    setEmail("");
    setTeam(null);
    setLink("");
    setNote("");
  };

  if (sent) {
    return (
      <div style={{ display: "grid", gap: 14 }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: COLOR.indigo, color: "#fff", display: "grid", placeItems: "center", fontSize: 24 }}>✓</div>
        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(24px, 0.9vw + 20px, 34px)", fontWeight: 700, letterSpacing: "-0.03em", margin: 0 }}>
          Thanks, {name || "there"}. We&rsquo;ve got your application.
        </h3>
        <button
          type="button"
          onClick={reset}
          style={{ justifySelf: "start", height: 46, padding: "0 18px", border: 0, borderRadius: 12, background: COLOR.cream, font: "500 15px var(--font-body)", cursor: "pointer", color: COLOR.ink }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);
        try {
          const res = await fetch("/api/careers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, team, link, note }),
          });
          if (!res.ok) {
            const body = await res.json().catch(() => null);
            throw new Error(body?.error || "Failed to send your application. Please try again.");
          }
          setSent(true);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Failed to send your application. Please try again.");
        } finally {
          setSubmitting(false);
        }
      }}
      style={{ display: "grid", gap: 16 }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: 14 }}>
        <label style={{ display: "grid", gap: 8, fontSize: 13, fontWeight: 600 }}>
          Full name
          <input name="name" required type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
        </label>
        <label style={{ display: "grid", gap: 8, fontSize: 13, fontWeight: 600 }}>
          Email
          <input name="email" required type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        </label>
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 10 }}>Team you&rsquo;re interested in</div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {TEAMS.map((t) => {
            const on = team === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTeam(on ? null : t)}
                aria-pressed={on}
                style={{
                  padding: "10px 16px",
                  border: 0,
                  borderRadius: 999,
                  cursor: "pointer",
                  font: "500 14px var(--font-body)",
                  background: on ? COLOR.ink : COLOR.cream,
                  color: on ? "#fff" : COLOR.ink,
                }}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>
      <label style={{ display: "grid", gap: 8, fontSize: 13, fontWeight: 600 }}>
        LinkedIn, portfolio or CV link
        <input name="link" type="url" placeholder="https://" value={link} onChange={(e) => setLink(e.target.value)} style={inputStyle} />
      </label>
      <label style={{ display: "grid", gap: 8, fontSize: 13, fontWeight: 600 }}>
        What would you work on?
        <textarea name="note" rows={4} value={note} onChange={(e) => setNote(e.target.value)} style={{ ...inputStyle, height: "auto", padding: "14px 16px", resize: "vertical", fontFamily: "var(--font-body)" }} />
      </label>
      {error && (
        <p role="alert" style={{ margin: 0, fontSize: 14, color: "#b42318" }}>
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        style={{
          justifySelf: "start",
          height: 52,
          padding: "0 28px",
          border: 0,
          borderRadius: 999,
          background: COLOR.indigo,
          color: "#fff",
          font: "600 16px var(--font-body)",
          cursor: submitting ? "default" : "pointer",
          opacity: submitting ? 0.7 : 1,
        }}
      >
        {submitting ? "Sending…" : "Send application"}
      </button>
    </form>
  );
}
