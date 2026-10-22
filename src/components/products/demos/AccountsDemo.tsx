"use client";

import { useState } from "react";
import Image from "next/image";
import { COLOR } from "@/lib/brand";
import { RATE, fmt } from "@/lib/products/fx";

const ACCOUNTS: Array<[string, string, string]> = [
  ["USD", "US dollar", "us"], ["EUR", "Euro", "eu"], ["GBP", "British pound", "gb"], ["ZAR", "South African rand", "za"],
  ["CAD", "Canadian dollar", "ca"], ["AED", "UAE dirham", "ae"], ["NGN", "Nigerian naira", "ng"], ["GHS", "Ghanaian cedi", "gh"],
  ["KES", "Kenyan shilling", "ke"], ["TZS", "Tanzanian shilling", "tz"], ["AUD", "Australian dollar", "au"], ["NZD", "New Zealand dollar", "nz"],
  ["JPY", "Japanese yen", "jp"], ["CNY", "Chinese yuan", "cn"], ["HKD", "Hong Kong dollar", "hk"], ["ILS", "Israeli shekel", "il"],
  ["MXN", "Mexican peso", "mx"], ["SEK", "Swedish krona", "se"], ["CHF", "Swiss franc", "ch"], ["NOK", "Norwegian krone", "no"],
  ["DKK", "Danish krone", "dk"], ["SGD", "Singapore dollar", "sg"], ["KRW", "South Korean won", "kr"], ["THB", "Thai baht", "th"],
  ["HUF", "Hungarian forint", "hu"], ["PLN", "Polish złoty", "pl"], ["RON", "Romanian leu", "ro"], ["CZK", "Czech koruna", "cz"],
  ["XOF", "West African CFA franc", "sn"], ["XAF", "Central African CFA franc", "cm"], ["USDC", "USD Coin", "us"], ["USDT", "Tether USD", "us"],
];

function rowsFor(code: string, idx: number): Array<[string, string]> {
  if (code === "USD") return [["Account number", "•••• •••• 4821"], ["ACH routing", "0260 •••• 3"], ["SWIFT", "ELPY US 33"]];
  if (code === "EUR") return [["IBAN", "DE89 •••• •••• 4821 00"], ["BIC", "ELPYDEFF"], ["Rail", "SEPA and SEPA Instant"]];
  if (code === "GBP") return [["Account number", "•••• 4821"], ["Sort code", "04-••-29"], ["Rail", "Faster Payments"]];
  if (code.startsWith("USD")) return [["Deposit address", "0x8f3e…c21a"], ["Converts to", "30 currencies"], ["Off-ramp", "Mobile money and bank"]];
  return [["Account number", `•••• •••• ${4800 + idx}`], ["Bank code", `0${110 + idx * 7}`], ["Account name", "Your Company Ltd"]];
}

export default function AccountsDemo() {
  const [code, setCode] = useState("USD");
  const idx = ACCOUNTS.findIndex((a) => a[0] === code);
  const [, name, flag] = ACCOUNTS[idx];
  const rows = rowsFor(code, idx);
  const balance = (12400 + idx * 3791) * (RATE[code] ?? 1);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: 12 }}>
      <div style={{ borderRadius: 28, background: "#fff", padding: "clamp(16px,2vw,24px)", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(88px,1fr))", gap: 6, alignContent: "start" }}>
        {ACCOUNTS.map(([c, , f], i) => (
          <button
            key={c + i}
            type="button"
            onClick={() => setCode(c)}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 6px", border: 0, borderRadius: 10, cursor: "pointer", font: "500 13px var(--font-body)", background: c === code ? COLOR.ink : "#F6F4EF", color: c === code ? "#fff" : COLOR.ink }}
          >
            <Image src={`/flags/${f}.svg`} alt="" width={26} height={18} style={{ width: 26, height: 18, borderRadius: 3, objectFit: "cover" }} />
            {c}
          </button>
        ))}
      </div>
      <div style={{ borderRadius: 28, background: COLOR.ink, color: "#F6F4EF", padding: "clamp(24px,3vw,36px)", display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Image src={`/flags/${flag}.svg`} alt="" width={52} height={36} style={{ width: 52, height: 36, borderRadius: 6, objectFit: "cover" }} />
          <div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em" }}>{code} account</div>
            <div style={{ fontSize: 14, color: COLOR.onDark }}>{name}</div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 13, color: COLOR.onDark }}>Available balance</div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em" }}>{code} {fmt(balance, 2)}</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 6 }}>
          {rows.map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "12px 14px", borderRadius: 12, background: "rgba(255,255,255,.08)", fontSize: 14 }}>
              <span style={{ color: COLOR.onDark }}>{k}</span>
              <span style={{ fontFamily: "var(--font-label)" }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: "auto" }}>
          <span style={{ padding: 14, borderRadius: 12, background: "#fff", color: COLOR.ink, textAlign: "center", fontWeight: 500 }}>Share details</span>
          <span style={{ padding: 14, borderRadius: 12, background: "rgba(255,255,255,.1)", textAlign: "center", fontWeight: 500 }}>Convert</span>
        </div>
      </div>
    </div>
  );
}
