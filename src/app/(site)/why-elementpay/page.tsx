import CompanyPage from "@/components/company/CompanyPage";
import { designHead, designMetadata } from "@/lib/design/pages";
import { COMPANY_PATH } from "@/lib/company/companyData";

export const metadata = designMetadata(designHead(COMPANY_PATH.why));

export default function Page() {
  return <CompanyPage page="why" />;
}
