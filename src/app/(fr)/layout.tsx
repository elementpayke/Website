import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { fontVariables } from "@/lib/fonts";
import "../globals.css";
import "../design-pseudo.css";

// Separate root layout so the French pages are served with <html lang="fr">.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  robots: { index: true, follow: true },
};

export default function FrenchRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
