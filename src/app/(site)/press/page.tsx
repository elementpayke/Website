import { Newsroom } from "@/components/press/PressPages";
import { designHead, designMetadata } from "@/lib/design/pages";

export const metadata = designMetadata(designHead("/press"));

export default function PressPage() {
  return <Newsroom />;
}
