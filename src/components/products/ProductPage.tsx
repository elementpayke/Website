import type { ProductData } from "@/lib/products/productsData";
import { breadcrumbSchema, jsonLdGraph, serviceSchema } from "@/lib/schema";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import ProductHero from "./ProductHero";
import ProductDemoSection from "./ProductDemoSection";
import ProductFeatures from "./ProductFeatures";
import ProductRelated from "./ProductRelated";
import ProductCta from "./ProductCta";

export default function ProductPage({ product }: { product: ProductData }) {
  const jsonLd = jsonLdGraph(
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: product.group, path: `/${product.group.toLowerCase()}` },
      { name: product.seo.title, path: product.path },
    ]),
    serviceSchema({ name: product.seo.title, description: product.seo.description, path: product.path })
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
