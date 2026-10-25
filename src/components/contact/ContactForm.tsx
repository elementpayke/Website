"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { focus, hover } from "@/lib/design/pseudo";

// Design: contact.dc.html ("Talk to sales").
const HQS = ["United Kingdom", "United States", "United Arab Emirates", "European Union", "China", "Kenya", "Nigeria", "Ghana", "South Africa", "Uganda", "Rwanda", "Tanzania", "Other"];
const TYPES = ["Financial institution", "Payment service provider", "Marketplace or platform", "Global merchant", "SME", "Remittance company", "Crypto or Web3 company", "NGO", "Other"];
const NEEDS = ["Payouts", "Collections", "FX and settlement", "Multi-currency accounts", "OTC desk", "Stablecoin on/off-ramp", "Payroll", "API integration", "Agentic payments"];
const WHENS = ["This month", "1–3 months", "3–6 months", "Exploring"];

const field: React.CSSProperties = {
  height: 48,
  padding: "0 14px",
  border: "1px solid #E2DED4",
  borderRadius: 12,
  background: "#FBFAF7",
  color: "#131126",
  font: "16px var(--font-body)",
  outline: "none",
  boxSizing: "border-box",
  width: "100%",
};
const fieldFocus = focus("border-color:#3B2ED3;background:#fff");
const label: React.CSSProperties = { display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 6, fontSize: 14, color: "#4C4A66" };
const legend: React.CSSProperties = { fontWeight: 600, fontSize: 17, padding: 0, marginBottom: 14 };
const fieldset: React.CSSProperties = { border: 0, padding: 0, margin: 0, display: "grid", gap: 14 };
const grid2: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: 12 };
const chip = (on: boolean): React.CSSProperties => ({
  height: 44,
  padding: "0 16px",
  borderRadius: 999,
  border: on ? "1px solid #3B2ED3" : "1px solid #E2DED4",
  background: on ? "#3B2ED3" : "#fff",
  color: on ? "#fff" : "#131126",
  font: "500 14px var(--font-body)",
  cursor: "pointer",
});

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function ContactFormInner() {
  const params = useSearchParams();
  const [f, setF] = useState({ first: "", last: "", email: params.get("email") ?? "", role: "", company: "", site: "", hq: "", type: "", msg: "" });
  const [needs, setNeeds] = useState<string[]>([]);
  const [when, setWhen] = useState(-1);
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // ?need= preselects a need, as in the design.
  useEffect(() => {
    const need = params.get("need");
    if (need) setNeeds([need]);
  }, [params]);

  const on = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setF((s) => ({ ...s, [k]: e.target.value }));
    setErr("");
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!f.first || !f.last || !f.company) return setErr("Please add your name and company.");
    if (!EMAIL_RE.test(f.email)) return setErr("Please enter a valid work email.");
    if (!needs.length) return setErr("Pick at least one thing you need.");
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${f.first} ${f.last}`,
          email: f.email,
          company: f.company,
          need: needs.join(", "),
          message: f.msg,
          role: f.role,
          website: f.site,
          headquarters: f.hq,
          businessType: f.type,
          goLive: when >= 0 ? WHENS[when] : "",
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Failed to send your message. Please try again.");
      }
      setSent(true);
      setErr("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setErr(error instanceof Error ? error.message : "Failed to send your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div style={{ padding: "24px 0" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#3B2ED3", color: "#fff", display: "grid", placeItems: "center", fontSize: 24 }}>✓</div>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 1.5vw + 22px, 44px)", lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 700, margin: "24px 0 0" }}>Thanks, {f.first}.</h2>
        <p style={{ fontSize: 17, lineHeight: 1.55, color: "#4C4A66", margin: "12px 0 0", maxWidth: "44ch" }}>
          We&apos;ve received your request for {f.company}. Someone from our team will email {f.email} within one business day.
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setF((s) => ({ ...s, msg: "" }));
            setNeeds([]);
            setWhen(-1);
          }}
          className={hover("background:#ECEAE4")}
          style={{ marginTop: 28, height: 48, padding: "0 20px", border: 0, borderRadius: 12, background: "#F6F4EF", color: "#131126", font: "500 15px var(--font-body)", cursor: "pointer" }}
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 28 }}>
      <fieldset style={fieldset}>
        <legend style={legend}>About you</legend>
        <div style={grid2}>
          <label style={label}>
            First name *
            <input value={f.first} onChange={on("first")} required autoComplete="given-name" className={fieldFocus} style={field} />
          </label>
          <label style={label}>
            Last name *
            <input value={f.last} onChange={on("last")} required autoComplete="family-name" className={fieldFocus} style={field} />
          </label>
          <label style={label}>
            Work email *
            <input type="email" value={f.email} onChange={on("email")} required autoComplete="email" placeholder="name@company.com" className={fieldFocus} style={field} />
          </label>
          <label style={label}>
            Job title
            <input value={f.role} onChange={on("role")} autoComplete="organization-title" placeholder="e.g. Head of Finance" className={fieldFocus} style={field} />
          </label>
        </div>
      </fieldset>
      <fieldset style={fieldset}>
        <legend style={legend}>Your company</legend>
        <div style={grid2}>
          <label style={label}>
            Company name *
            <input value={f.company} onChange={on("company")} required autoComplete="organization" className={fieldFocus} style={field} />
          </label>
          <label style={label}>
            Website
            <input value={f.site} onChange={on("site")} placeholder="company.com" className={fieldFocus} style={field} />
          </label>
          <label style={label}>
            Headquarters
            <select value={f.hq} onChange={on("hq")} className={fieldFocus} style={field}>
              <option value="">Select country</option>
              {HQS.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
          </label>
          <label style={label}>
            Business type
            <select value={f.type} onChange={on("type")} className={fieldFocus} style={field}>
              <option value="">Select type</option>
              {TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
        </div>
      </fieldset>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 12 }}>
        <span style={{ fontWeight: 600, fontSize: 17 }}>What do you need?</span>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {NEEDS.map((n) => {
            const o = needs.includes(n);
            return (
              <button key={n} type="button" aria-pressed={o} onClick={() => setNeeds((s) => (o ? s.filter((x) => x !== n) : [...s, n]))} style={chip(o)}>
                {n}
              </button>
            );
          })}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 12 }}>
        <span style={{ fontWeight: 600, fontSize: 17 }}>When do you want to go live?</span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", gap: 8 }}>
          {WHENS.map((n, i) => (
            <button key={n} type="button" aria-pressed={when === i} onClick={() => setWhen(i)} style={{ ...chip(when === i), borderRadius: 12 }}>
              {n}
            </button>
          ))}
        </div>
      </div>
      <label style={label}>
        <span style={{ fontWeight: 600, fontSize: 17, color: "#131126" }}>Anything else?</span>
        <textarea
          value={f.msg}
          onChange={on("msg")}
          rows={4}
          placeholder="Current provider, use case, integration questions"
          className={fieldFocus}
          style={{ ...field, height: undefined, padding: "12px 14px", resize: "vertical" }}
        />
      </label>
      {err && (
        <div role="alert" style={{ padding: "14px 16px", borderRadius: 12, background: "#FBEAEA", color: "#8A1F1F", fontSize: 15 }}>
          {err}
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <p style={{ margin: 0, fontSize: 13, lineHeight: "19px", color: "#6E6C8A", maxWidth: "44ch" }}>
          By submitting, you agree to be contacted about ElementPay. See our <a href="https://www.elementpay.net/privacy-policy">privacy policy</a>.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className={hover("background:#2A1FB0")}
          style={{ height: 54, padding: "0 28px", border: 0, borderRadius: 14, background: "#3B2ED3", color: "#fff", font: "500 16px var(--font-body)", cursor: submitting ? "default" : "pointer", opacity: submitting ? 0.7 : 1 }}
        >
          {submitting ? "Sending…" : "Send to sales"}
        </button>
      </div>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={null}>
      <ContactFormInner />
    </Suspense>
  );
}
