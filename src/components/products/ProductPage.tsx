import type { ProductData } from "@/lib/products/productsData";
import DesignJsonLd from "@/components/design/DesignJsonLd";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import ProductHero from "./ProductHero";
import ProductDemoSection from "./ProductDemoSection";
import ProductFeatures from "./ProductFeatures";
import ProductRelated from "./ProductRelated";
import ProductCta from "./ProductCta";

export default function ProductPage({ product }: { product: ProductData }) {
  return (
    <>
      <DesignJsonLd url={product.path} />
      <EPNav active={product.group} />
      <ProductHero product={product} />
      <ProductDemoSection product={product} />
      <ProductFeatures product={product} />
      <ProductRelated product={product} />
      <ProductCta />
      <EPFooter />
    </>
  );
}
