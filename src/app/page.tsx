import type { Metadata } from "next";
import EPNav from "@/components/nav/EPNav";
import TopBar from "@/components/home/TopBar";
import Hero from "@/components/home/Hero";
import RailsMarquee from "@/components/home/RailsMarquee";
import PlatformSection from "@/components/home/PlatformSection";
import ProductsGrid from "@/components/home/ProductsGrid";
import SolutionsSection from "@/components/home/SolutionsSection";
import WhySection from "@/components/home/WhySection";
import CoverageSection from "@/components/home/CoverageSection";
import BlogPreview from "@/components/home/BlogPreview";
import FaqSection from "@/components/home/FaqSection";
import ContactCapture from "@/components/home/ContactCapture";
import HomeFooter from "@/components/home/HomeFooter";
import { SITE_URL } from "@/lib/site";

const TITLE = "ElementPay (Element Pay): stablecoin and cross-border payments API for businesses in Africa";
const DESCRIPTION =
  "Payment infrastructure for businesses. Collect, pay out, convert and hold money across mobile money, banks and USDC or USDT through one platform.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "ElementPay: cross-border payment infrastructure for businesses",
    description: "Payouts in 20 African countries, accounts in 30 currencies, USDC and USDT ramps. One platform.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ElementPay: cross-border payment infrastructure for businesses",
    description: "Payouts in 20 African countries, accounts in 30 currencies, USDC and USDT ramps. One platform.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "ElementPay",
      alternateName: ["Element Pay", "ElementPay Payments"],
      url: SITE_URL,
      sameAs: ["https://mboka.finance", "https://docs.elementpay.net/"],
      description: "Cross-border payment infrastructure for businesses in emerging markets.",
      knowsAbout: [
        "Cross-border payments", "Mobile money API", "M-Pesa", "Stablecoin payments", "USDC", "USDT",
        "Stablecoin on-ramp", "Stablecoin off-ramp", "Bulk payouts", "Payment gateway", "Foreign exchange",
        "Business bank accounts",
      ],
      brand: [{ "@type": "Brand", name: "Mboka", url: "https://mboka.finance" }],
    },
    { "@type": "WebSite", name: "ElementPay", url: SITE_URL },
  ],
};

export default function HomePage() {
  return (
    <div style={{ background: "#F6F4EF" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TopBar />
      <div style={{ position: "sticky", top: 0, zIndex: 30, background: "#F6F4EF", boxShadow: "0 1px 0 rgba(19,17,38,.08)" }}>
        <EPNav />
      </div>
      <Hero />
      <RailsMarquee />
      <PlatformSection />
      <ProductsGrid />
      <SolutionsSection />
      <WhySection />
      <CoverageSection />
      <BlogPreview />
      <FaqSection />
      <ContactCapture />
      <HomeFooter />
    </div>
  );
}
