import { TYPE } from "@/lib/brand";
import type { MarketingPageData } from "@/lib/marketing/types";
import FaqAccordion from "@/components/shared/FaqAccordion";

export default function MarketingFaq({ page }: { page: MarketingPageData }) {
  if (!page.faqs.length) return null;

  return (
    <section data-screen-label="FAQ" style={{ maxWidth: 840, margin: "0 auto", padding: "clamp(48px,7vw,96px) clamp(20px,4vw,48px) 0" }}>
      <h2 style={{ ...TYPE.h2Section, margin: "0 0 28px" }}>Questions.</h2>
      <FaqAccordion faqs={page.faqs} />
    </section>
  );
}
