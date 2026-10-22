import type { ComponentType } from "react";
import { TYPE } from "@/lib/brand";
import type { ProductData, ProductSlug } from "@/lib/products/productsData";
import PaymentsDemo from "./demos/PaymentsDemo";
import FxDemo from "./demos/FxDemo";
import AccountsDemo from "./demos/AccountsDemo";
import OtcDemo from "./demos/OtcDemo";
import AgenticDemo from "./demos/AgenticDemo";
import StablecoinRampDemo from "./demos/StablecoinRampDemo";
import DashboardDemo from "./demos/DashboardDemo";
import ApiDemo from "./demos/ApiDemo";
import DappDemo from "./demos/DappDemo";

const DEMOS: Record<ProductSlug, ComponentType> = {
  payments: PaymentsDemo,
  fx: FxDemo,
  accounts: AccountsDemo,
  otc: OtcDemo,
  agentic: AgenticDemo,
  assets: StablecoinRampDemo,
  dashboard: DashboardDemo,
  api: ApiDemo,
  dapp: DappDemo,
};

export default function ProductDemoSection({ product }: { product: ProductData }) {
  const Demo = DEMOS[product.slug];
  return (
    <div style={{ background: "#F6F4EF" }}>
      <section data-screen-label="Demo" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(56px,7vw,96px) clamp(20px,4vw,48px) 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap", marginBottom: 28 }}>
          <h2 style={{ ...TYPE.h2Cta, fontSize: "clamp(29px,3.16vw,44px)", lineHeight: 0.95, margin: 0, maxWidth: "14ch" }}>{product.demoTitle}</h2>
          <p style={{ fontSize: 16, lineHeight: "25px", color: "#4C4A66", margin: 0, maxWidth: "40ch" }}>{product.demoSub}</p>
        </div>
        <Demo />
      </section>
    </div>
  );
}
