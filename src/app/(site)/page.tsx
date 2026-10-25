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
import DesignJsonLd from "@/components/design/DesignJsonLd";
import LegacyHashRedirect from "@/components/home/LegacyHashRedirect";
import { designHead, designMetadata } from "@/lib/design/pages";

// Design: ElementPay v2.dc.html (title, Open Graph and Organization JSON-LD).
export const metadata: Metadata = designMetadata(designHead("/"));

export default function HomePage() {
  return (
    <div style={{ background: "#F6F4EF" }}>
      <DesignJsonLd url="/" />
      <LegacyHashRedirect />
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
