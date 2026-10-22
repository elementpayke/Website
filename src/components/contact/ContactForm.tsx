"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { COLOR } from "@/lib/brand";

const NEEDS = [
  "Payouts across Africa",
  "Business accounts",
  "OTC / large FX",
  "Stablecoin ramps",
  "Agentic payments",
  "API integration",
  "Something else",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  height: 52,
  padding: "0 18px",
  borderRadius: 14,
  border: `1px solid ${COLOR.hairlineInput}`,
  outline: "none",
  background: "#fff",
  color: COLOR.ink,
  font: "16px var(--font-body)",
};

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState(searchParams.get("email") ?? "");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [need, setNeed] = useState(NEEDS[0]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div style={{ borderRadius: 24, background: "#fff", padding: "clamp(32px,5vw,48px)", textAlign: "center" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: COLOR.indigo, color: "#fff", display: "grid", placeItems: "center", fontSize: 24, margin: "0 auto" }}>
          ✓
        </div>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 700, margin: "20px 0 0" }}>
          Thanks, {name || "there"}.
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.55, color: COLOR.slate, margin: "10px 0 0", maxWidth: "48ch", marginInline: "auto" }}>
          We have your details for {company || "your business"}. Someone from the ElementPay team will follow up at{" "}
          {email} shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      style={{ borderRadius: 24, background: "#fff", padding: "clamp(24px,4vw,40px)", display: "grid", gap: 14 }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: 14 }}>
        <label style={{ display: "grid", gap: 6, fontSize: 13, fontWeight: 600, color: COLOR.slate }}>
          Full name
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Mwangi"
            style={inputStyle}
          />
        </label>
        <label style={{ display: "grid", gap: 6, fontSize: 13, fontWeight: 600, color: COLOR.slate }}>
          Work email
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@company.com"
            style={inputStyle}
          />
        </label>
      </div>
      <label style={{ display: "grid", gap: 6, fontSize: 13, fontWeight: 600, color: COLOR.slate }}>
        Company
        <input
          required
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Your business name"
          style={inputStyle}
        />
      </label>
      <label style={{ display: "grid", gap: 6, fontSize: 13, fontWeight: 600, color: COLOR.slate }}>
        What do you need?
        <select value={need} onChange={(e) => setNeed(e.target.value)} style={{ ...inputStyle, appearance: "auto" }}>
          {NEEDS.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </label>
      <label style={{ display: "grid", gap: 6, fontSize: 13, fontWeight: 600, color: COLOR.slate }}>
        Anything else we should know?
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Markets, volumes, timelines — whatever helps us prep for the call."
          rows={4}
          style={{ ...inputStyle, height: "auto", padding: "14px 18px", resize: "vertical", fontFamily: "var(--font-body)" }}
        />
      </label>
      <button
        type="submit"
        style={{
          height: 52,
          marginTop: 6,
          border: 0,
          borderRadius: 14,
          background: COLOR.indigo,
          color: "#fff",
          font: "600 16px var(--font-body)",
          cursor: "pointer",
        }}
      >
        Send to the team
      </button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div style={{ borderRadius: 24, background: "#fff", padding: "clamp(24px,4vw,40px)", minHeight: 420 }} />}>
      <ContactFormInner />
    </Suspense>
  );
}
