import SolutionPage from "@/components/solutions/SolutionPage";
import { designHead, designMetadata } from "@/lib/design/pages";
import { SOLUTIONS } from "@/lib/solutions/solutionsData";

const solution = SOLUTIONS.platforms;

export const metadata = designMetadata(designHead(solution.path));

export default function Page() {
  return <SolutionPage solution={solution} />;
}
