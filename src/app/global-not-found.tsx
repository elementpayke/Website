import type { Metadata } from "next";
import Link from "next/link";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import { fontVariables } from "@/lib/fonts";
import { COLOR, TYPE, fullStopSquare } from "@/lib/brand";
import "./globals.css";
import "./design-pseudo.css";

export const metadata: Metadata = {
  title: "Page not found | ElementPay",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <div style={{ position: "sticky", top: 0, zIndex: 30 }}>
          <EPNav />
        </div>
        <main style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,9vw,128px) clamp(20px,4vw,48px)" }}>
          <p style={{ ...TYPE.eyebrow, color: COLOR.indigo, margin: 0 }}>404</p>
          <h1 style={{ ...TYPE.h1Hero, margin: "16px 0 0", color: COLOR.ink }}>
            This page isn’t on the rails
            <span style={fullStopSquare} />
          </h1>
          <p style={{ ...TYPE.lede, maxWidth: 520, marginTop: 20 }}>
            The link may be old or mistyped. Start from the homepage or see where we pay out.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
            <Link href="/" style={{ padding: "14px 24px", borderRadius: 999, background: COLOR.indigo, color: "#fff", fontWeight: 500 }}>
              Go to the homepage
            </Link>
            <Link href="/coverage" style={{ padding: "14px 24px", borderRadius: 999, background: COLOR.cream, color: COLOR.ink, fontWeight: 500 }}>
              See coverage
            </Link>
          </div>
        </main>
        <EPFooter />
      </body>
    </html>
  );
}
