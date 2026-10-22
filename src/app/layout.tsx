import type { Metadata } from "next";
import { DM_Mono, DM_Sans, Space_Grotesk } from "next/font/google";
import { siteConfig } from "@/lib/site";
import { jsonLdGraph, organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-label",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const orgJsonLd = jsonLdGraph(organizationSchema(), websiteSchema());

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
