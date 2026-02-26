import { TopSolutionsSection as TopSolutionsSectionType } from '@/types/sanity';
import TopSolutions from '@/components/TopSolutions';

interface TopSolutionsSectionProps {
  section: TopSolutionsSectionType;
}

const TopSolutionsSection: React.FC<TopSolutionsSectionProps> = ({ section }) => {
  // The TopSolutions component seems to fetch its own data.
  // We will pass the title from the section to it.
  return <TopSolutions title={section.title} />;
};

export default TopSolutionsSection;
