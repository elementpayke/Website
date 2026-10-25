import { COLOR } from "@/lib/brand";

const FACTS: Array<[string, React.ReactNode]> = [
  ["What ElementPay is", "Cross-border and stablecoin payment infrastructure for businesses, with a focus on Africa."],
  ["Also written as", "Element Pay"],
  ["Who it serves", "Businesses only: financial institutions, PSPs, fintechs and wallets, remittance companies, global merchants, platforms and marketplaces, cross-border traders, growing businesses, NGOs and AI agent builders."],
  ["Platform", "Mboka (web app with real business bank accounts, cards and payouts), merchant dashboard, ElementPay API, and the ElementPay dApp for USDC and USDT on- and off-ramps."],
  ["Products", "Payments (collections and payouts), Settlement and FX, Accounts and treasury, OTC desk, Stablecoins, Agentic payments (early access)."],
  ["Payout coverage", "10+ countries: Kenya, Uganda, Tanzania, Rwanda, Nigeria, Ghana, South Africa, Zambia, Malawi and Botswana in Africa, plus Argentina and Colombia. More corridors are rolling out."],
  ["Account currencies", "30, one account per currency, including USD, EUR, GBP, AED, CNY, CAD, ZAR, NGN, KES, GHS, XOF and XAF."],
  ["Rails", "Mobile money (M-Pesa, MTN MoMo, Airtel Money, Orange Money and others), local bank transfer, SEPA, SWIFT, and the USDC and USDT stablecoins."],
  ["Pricing model", "Rate and fee shown before each payment is confirmed. Volume pricing through sales."],
  ["Regulatory status", "ElementPay is a financial technology company, not a bank. Banking services are provided by licensed partner institutions. Every customer goes through business verification."],
  ["Website", <a key="website" href="https://www.elementpay.net">www.elementpay.net</a>],
  ["Mboka", <a key="mboka" href="https://mboka.finance">mboka.finance</a>],
  ["Developer docs", <a key="docs" href="https://partners.elementpay.net">partners.elementpay.net</a>],
];

export default function FactsList() {
  return (
    <dl style={{ margin: "40px 0 0", borderRadius: 24, background: "#fff", boxShadow: `inset 0 0 0 1px ${COLOR.hairline}`, overflow: "hidden" }}>
      {FACTS.map(([k, v], i) => (
        <div
          key={k}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))",
            gap: "6px 24px",
            padding: "20px 24px",
            borderTop: i === 0 ? undefined : "1px solid #EEECF4",
          }}
        >
          <dt style={{ fontFamily: "var(--font-label)", fontSize: 12.5, letterSpacing: ".04em", textTransform: "uppercase", color: COLOR.slate }}>{k}</dt>
          <dd style={{ margin: 0, fontSize: 16, lineHeight: 1.55 }}>{v}</dd>
        </div>
      ))}
    </dl>
  );
}
