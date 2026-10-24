import type { Metadata } from "next";
import { getMarketingPage } from "@/lib/marketing/pagesData";
import { breadcrumbSchema, faqSchema, jsonLdGraph, serviceSchema } from "@/lib/schema";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import ProductCta from "@/components/products/ProductCta";
import MarketingHero from "@/components/marketing/MarketingHero";
import MarketingFeatures from "@/components/marketing/MarketingFeatures";
import MarketingFaq from "@/components/marketing/MarketingFaq";
import MarketingRelated from "@/components/marketing/MarketingRelated";
import CoverageDirectory from "@/components/marketing/CoverageDirectory";

const page = getMarketingPage("/coverage")!;

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
  const jsonLd = jsonLdGraph(
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/coverage" },
      { name: page.seo.title, path: page.path },
    ]),
    serviceSchema({ name: page.seo.title, description: page.seo.description, path: page.path }),
    ...(page.faqs.length ? [faqSchema(page.faqs)] : [])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EPNav active="Resources" />
      <MarketingHero page={page} />
      <CoverageDirectory />
      <MarketingFeatures page={page} />
      <MarketingFaq page={page} />
      <MarketingRelated page={page} />
      <ProductCta />
      <EPFooter />
    </>
  );
}
