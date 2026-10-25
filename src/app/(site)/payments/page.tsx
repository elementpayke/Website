import { PRODUCTS } from "@/lib/products/productsData";
import ProductPage from "@/components/products/ProductPage";
import { designHead, designMetadata } from "@/lib/design/pages";

const product = PRODUCTS.payments;

export const metadata = designMetadata(designHead(product.path));

export default function Page() {
  return <ProductPage product={product} />;
}
