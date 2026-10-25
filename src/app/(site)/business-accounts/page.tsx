import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/products/productsData";
import ProductPage from "@/components/products/ProductPage";

const product = PRODUCTS.accounts;

export const metadata: Metadata = {
  title: product.seo.title,
  description: product.seo.description,
  alternates: { canonical: product.path },
  openGraph: {
    title: `${product.seo.title} | ElementPay`,
    description: product.seo.description,
    url: product.path,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${product.seo.title} | ElementPay`,
    description: product.seo.description,
  },
};

export default function Page() {
  return <ProductPage product={product} />;
}
