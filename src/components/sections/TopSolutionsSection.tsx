import { TopSolutionsSection as TopSolutionsSectionType } from "@/types/sanity";
import TopSolutions from "@/components/TopSolutions";

interface TopSolutionsSectionProps {
  section: TopSolutionsSectionType;
}

const TopSolutionsSection: React.FC<TopSolutionsSectionProps> = ({ section }) => {

  const title = section?.heading || "Top Solutions";

  return <TopSolutions title={title} />;

};

export default TopSolutionsSection;