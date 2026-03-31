import { IndustriesSection as IndustriesSectionType } from '@/types/sanity';
import SolutionsByIndustry from '@/components/SolutionsByIndustry';

interface IndustriesSectionProps {
  section: IndustriesSectionType;
}

const IndustriesSection: React.FC<IndustriesSectionProps> = ({ section }) => {
  // The SolutionsByIndustry component seems to fetch its own data.
  // We will pass the title from the section to it.
  // The limit prop is not part of the schema, so we will remove it.
  return <SolutionsByIndustry title={section.title} />;
};

export default IndustriesSection;
