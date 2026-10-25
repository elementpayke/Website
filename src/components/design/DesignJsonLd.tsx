import { designHead } from "@/lib/design/pages";

/** The JSON-LD blocks the design defines for a page, rendered verbatim. */
export default function DesignJsonLd({ url }: { url: string }) {
  return (
    <>
      {designHead(url).jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
    </>
  );
}
