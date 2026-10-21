"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const INK = "#131126";
const PURPLE = "#3B2ED3";
const MUTED = "#4C4A66";

function footerHref(href: string): string {
  if (href.startsWith("http")) return href;
  return "/" + href.replace(/\.dc\.html$|\.html$/i, "").toLowerCase();
}

const COLUMNS: Array<[string, Array<[string, string]>]> = [
  [
    "Platform",
    [
      ["Mboka", "https://mboka.finance"],
      ["Merchant dashboard", "merchant-dashboard.dc.html"],
      ["ElementPay API", "payments-api.dc.html"],
      ["ElementPay dApp", "elementpay-dapp.dc.html"],
    ],
  ],
  [
    "Products",
    [
      ["Payments", "payments.dc.html"],
      ["Settlement & FX", "settlement-and-fx.dc.html"],
      ["Accounts", "business-accounts.dc.html"],
      ["OTC desk", "otc-desk.dc.html"],
      ["Mobile money API", "mobile-money-api.dc.html"],
      ["Payout API", "payout-api.dc.html"],
      ["Bulk payouts", "bulk-payouts-africa.dc.html"],
      ["Collect payments", "collect-payments-in-africa.dc.html"],
      ["Cross-border payments", "cross-border-payments-africa.dc.html"],
      ["Payment gateway", "payment-gateway-africa.dc.html"],
      ["Card payment gateway", "card-payment-gateway.dc.html"],
    ],
  ],
  [
    "Stablecoins",
    [
      ["Stablecoin payments in Africa", "stablecoin-payments-africa.dc.html"],
      ["B2B stablecoin payments", "b2b-stablecoin-payments.dc.html"],
      ["Stablecoin payment gateway", "stablecoin-payment-gateway.dc.html"],
      ["Stablecoin payments API", "stablecoin-payments-api.dc.html"],
      ["Stablecoin payroll", "stablecoin-payroll.dc.html"],
      ["USDC and USDT ramps", "stablecoins.dc.html"],
      ["Off-ramp API", "stablecoin-off-ramp-api.dc.html"],
      ["On-ramp API", "stablecoin-on-ramp-api.dc.html"],
      ["Buyer's guide", "best-stablecoin-payment-api-africa.dc.html"],
    ],
  ],
  [
    "Resources",
    [
      ["Coverage", "Coverage.html"],
      ["Exchange rates", "exchange-rates.dc.html"],
      ["Glossary", "glossary.dc.html"],
      ["Blog", "Blog.dc.html"],
      ["Help centre", "help.dc.html"],
      ["Status", "Status.dc.html"],
      ["Docs", "https://docs.elementpay.net/"],
    ],
  ],
  [
    "Company",
    [
      ["About", "about.dc.html"],
      ["At a glance", "elementpay-facts.dc.html"],
      ["Why ElementPay", "why-elementpay.dc.html"],
      ["Pricing", "pricing.dc.html"],
      ["Security", "security-and-compliance.dc.html"],
      ["Careers", "careers.dc.html"],
      ["Press", "Press.dc.html"],
      ["Contact", "contact.dc.html"],
      ["Privacy", "https://www.elementpay.net/privacy-policy"],
    ],
  ],
];

const SOCIALS: Array<[string, string]> = [
  ["LinkedIn", "https://www.linkedin.com/company/elementpay"],
  ["X", "https://x.com/elementpay"],
  ["Telegram", "https://t.me/elementpay"],
  ["YouTube", "https://www.youtube.com/@elementpay"],
  ["Instagram", "https://www.instagram.com/elementpay"],
];

export default function EPFooter() {
  const [nlEmail, setNlEmail] = useState("");
  const [nlDone, setNlDone] = useState(false);

  return (
    <footer
      style={{
        maxWidth: 1240,
        margin: "0 auto",
        padding: "clamp(56px,7vw,96px) clamp(20px,4vw,48px) 48px",
        fontFamily: "var(--font-body)",
        color: INK,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
          gap: 24,
          alignItems: "center",
          padding: "clamp(24px,4vw,40px)",
          borderRadius: 28,
          background: "#fff",
          marginBottom: 56,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(24px,2.25vw,28px)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              fontWeight: 700,
            }}
          >
            The ElementPay briefing
          </div>
          <p style={{ fontSize: 15, lineHeight: "23px", color: MUTED, margin: "8px 0 0", maxWidth: "46ch" }}>
            A monthly note for finance and payments teams: new corridors, rail updates and regulation across
            emerging markets.
          </p>
        </div>
        {nlDone ? (
          <div style={{ padding: "16px 18px", borderRadius: 16, background: "#F6F4EF", fontWeight: 500 }}>
            You&apos;re subscribed. Look out for the next briefing.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setNlDone(true);
            }}
            style={{ display: "flex", gap: 8, flexWrap: "wrap", padding: 6, borderRadius: 18, background: "#F6F4EF" }}
          >
            <input
              type="email"
              required
              value={nlEmail}
              onChange={(e) => setNlEmail(e.target.value)}
              placeholder="Work email"
              aria-label="Work email for newsletter"
              style={{
                flex: 1,
                minWidth: 180,
                height: 50,
                padding: "0 14px",
                border: 0,
                outline: "none",
                background: "transparent",
                color: INK,
                font: "16px var(--font-body)",
              }}
            />
            <button
              type="submit"
              style={{
                height: 50,
                padding: "0 22px",
                border: 0,
                borderRadius: 14,
                background: PURPLE,
                color: "#fff",
                font: "500 15px var(--font-body)",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </form>
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,160px),1fr))", gap: 40 }}>
        <div style={{ gridColumn: "span 2", minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: PURPLE,
                display: "grid",
                placeItems: "center",
              }}
            >
              <span style={{ width: 12, height: 12, borderRadius: 3, background: "#fff" }} />
            </span>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 19,
                letterSpacing: "-0.02em",
              }}
            >
              ElementPay
            </span>
          </div>
          <p style={{ fontSize: 15, lineHeight: "23px", color: MUTED, margin: "14px 0 0", maxWidth: "34ch" }}>
            Cross-border payment infrastructure for businesses. Mobile money, banks and stablecoins through one
            API.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20 }}>
            {SOCIALS.map(([name, href]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener"
                aria-label={`ElementPay on ${name}`}
                style={{
                  height: 40,
                  padding: "0 14px",
                  borderRadius: 999,
                  background: "#fff",
                  color: INK,
                  fontSize: 14,
                  fontWeight: 500,
                  display: "inline-flex",
                  alignItems: "center",
                  boxShadow: "0 0 0 1px rgba(19,17,38,.08)",
                  textDecoration: "none",
                }}
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        {COLUMNS.map(([heading, links]) => (
          <div key={heading} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 2, alignContent: "start", fontSize: 15 }}>
            <span style={{ fontWeight: 600 }}>{heading}</span>
            {links.map(([label, href]) => (
              <Link
                key={label}
                href={footerHref(href)}
                style={{ color: MUTED, padding: "6px 0", display: "inline-block", textDecoration: "none" }}
              >
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 48,
          paddingTop: 28,
          borderTop: "1px solid rgba(19,17,38,.08)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))",
          gap: 24,
        }}
      >
        <address style={{ fontStyle: "normal", display: "flex", flexDirection: "column", gap: 4, fontSize: 14, lineHeight: 1.55, color: MUTED }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600, color: INK }}>
            <Image
              src="/flags/ke.svg"
              alt=""
              width={20}
              height={14}
              style={{ borderRadius: 2, objectFit: "cover", boxShadow: "0 0 0 1px rgba(0,0,0,.08)" }}
            />
            Nairobi, Kenya
          </span>
          <span>One Africa Place, 5th floor</span>
          <span>Waiyaki Way, Nairobi</span>
        </address>
        <address style={{ fontStyle: "normal", display: "flex", flexDirection: "column", gap: 4, fontSize: 14, lineHeight: 1.55, color: MUTED }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600, color: INK }}>
            <Image
              src="/flags/us.svg"
              alt=""
              width={20}
              height={14}
              style={{ borderRadius: 2, objectFit: "cover", boxShadow: "0 0 0 1px rgba(0,0,0,.08)" }}
            />
            Wilmington, DE, USA
          </span>
          <span>Elementpay Inc.</span>
          <span>1007 N Orange St, 4th Floor, Ste 1382</span>
          <span>Wilmington, DE 19801</span>
        </address>
      </div>

      <div style={{ marginTop: 32, display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap", fontSize: 13, lineHeight: "20px", color: "#6E6C8A" }}>
        <p style={{ margin: 0, maxWidth: "72ch" }}>
          ElementPay is a financial technology company, not a bank. Banking services are provided by licensed
          partner institutions. Digital asset services are subject to local regulation. Rates shown are indicative.
        </p>
        <span>© 2026 ElementPay</span>
      </div>
    </footer>
  );
}
