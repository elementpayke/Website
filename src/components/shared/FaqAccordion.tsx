import { COLOR } from "@/lib/brand";

export default function FaqAccordion({ faqs }: { faqs: ReadonlyArray<{ q: string; a: string }> }) {
  return (
    <div style={{ display: "grid", gap: 8 }}>
      {faqs.map((faq, i) => (
        <details key={faq.q} open={i === 0} style={{ borderRadius: 20, background: COLOR.white }}>
          <summary
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              padding: "22px 24px",
              listStyle: "none",
            }}
          >
            <h3 style={{ margin: 0, fontSize: 17, fontWeight: 500, lineHeight: "24px" }}>{faq.q}</h3>
            <span
              aria-hidden="true"
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: COLOR.cream,
                display: "grid",
                placeItems: "center",
                color: COLOR.indigo,
                flex: "none",
                fontSize: 18,
              }}
            >
              +
            </span>
          </summary>
          <p style={{ margin: 0, padding: "0 24px 22px", fontSize: 16, lineHeight: "25px", color: COLOR.slate }}>{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
