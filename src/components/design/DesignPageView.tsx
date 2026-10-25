import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import type { DesignPage } from "@/lib/design/pages";

/**
 * Renders a page imported from the design export: the shared nav, the
 * design's own markup (trusted, generated at build time by
 * scripts/import-design.mjs) and the shared footer.
 */
export default function DesignPageView({ page }: { page: DesignPage }) {
  return (
    <>
      {page.jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
      {page.css ? <style dangerouslySetInnerHTML={{ __html: page.css }} /> : null}
      <div style={{ background: page.background ?? "#fff" }}>
        <div style={{ position: "sticky", top: 0, zIndex: 30 }}>
          <EPNav active={page.nav ?? undefined} />
        </div>
        <main dangerouslySetInnerHTML={{ __html: page.html }} />
        <div style={{ background: page.footerBackground ?? undefined }}>
          <EPFooter />
        </div>
      </div>
    </>
  );
}
