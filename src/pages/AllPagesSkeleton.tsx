
import { Skeleton } from '@/components/ui/skeleton';

const AllPagesSkeleton = () => {
  return (
    <div className="container-custom py-12">
      <div className="space-y-6">
        <Skeleton className="h-10 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="pt-6">
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    </div>
  );
};

export default AllPagesSkeleton;
