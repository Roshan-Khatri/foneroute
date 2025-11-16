
import { useSolutionBySlug } from '@/hooks/useSanityContent';
import Solution from './Solution';
import SolutionsSkeleton from './SolutionsSkeleton';
import NotFound from '../NotFound';

const ContactCenter = () => {
  const { data: solution, isLoading, isError } = useSolutionBySlug('contact-center');

  if (isLoading) {
    return <SolutionsSkeleton />;
  }

  if (isError || !solution) {
    return <NotFound />;
  }

  return <Solution solution={solution} />;
};

export default ContactCenter;
