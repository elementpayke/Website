import type { Metadata } from "next";
import { getMarketingPage } from "@/lib/marketing/pagesData";
import MarketingPage from "@/components/marketing/MarketingPage";

const page = getMarketingPage("/glossary")!;

export const metadata: Metadata = {
  title: page.seo.title,
  description: page.seo.description,
  alternates: { canonical: page.path },
  openGraph: {
    title: `${page.seo.title} | ElementPay`,
    description: page.seo.description,
    url: page.path,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${page.seo.title} | ElementPay`,
    description: page.seo.description,
  },
};

export default function Page() {
  return <MarketingPage page={page} />;
}
