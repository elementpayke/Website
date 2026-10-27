import type { Metadata } from "next";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import LegalDocLayout from "@/components/legal/LegalDocLayout";
import { SERVICE_AGREEMENT } from "@/lib/legal/serviceAgreement";

const title = "ElementPay Service Agreement";
const description =
  "The terms that govern use of the ElementPay API, Mboka, Mboka Checkout and local-currency accounts.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/service-agreement" },
  openGraph: { title: `${title} | ElementPay`, description, url: "/service-agreement", type: "website" },
  twitter: { card: "summary_large_image", title: `${title} | ElementPay`, description },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <>
      <div style={{ position: "sticky", top: 0, zIndex: 30 }}>
        <EPNav active="Company" />
      </div>
      <LegalDocLayout doc={SERVICE_AGREEMENT} updated="Last updated 15th October, 2026." />
      <EPFooter />
    </>
  );
}
