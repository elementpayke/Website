import type { MarketingPageData } from "@/lib/marketing/types";
import { breadcrumbSchema, faqSchema, jsonLdGraph, serviceSchema } from "@/lib/schema";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import ProductCta from "@/components/products/ProductCta";
import MarketingHero from "./MarketingHero";
import MarketingFeatures from "./MarketingFeatures";
import MarketingSteps from "./MarketingSteps";
import MarketingFaq from "./MarketingFaq";
import MarketingRelated from "./MarketingRelated";

export default function MarketingPage({ page }: { page: MarketingPageData }) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: page.group, path: page.path },
    { name: page.seo.title, path: page.path },
  ];

  const nodes = [
    breadcrumbSchema(crumbs),
    serviceSchema({ name: page.seo.title, description: page.seo.description, path: page.path }),
    ...(page.faqs.length ? [faqSchema(page.faqs)] : []),
  ];
  const jsonLd = jsonLdGraph(...nodes);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EPNav active={page.group === "Products" ? "Products" : page.group === "Solutions" ? "Solutions" : page.group === "Resources" ? "Resources" : "Company"} />
      <MarketingHero page={page} />
      <MarketingFeatures page={page} />
      <MarketingSteps page={page} />
      <MarketingFaq page={page} />
      <MarketingRelated page={page} />
      <ProductCta />
      <EPFooter />
    </>
  );
}
