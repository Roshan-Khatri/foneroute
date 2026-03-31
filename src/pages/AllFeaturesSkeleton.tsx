
import { Skeleton } from '@/components/ui/skeleton';

const AllFeaturesSkeleton = () => {
  return (
    <div className="container-custom py-12">
      <div className="space-y-6">
        <Skeleton className="h-10 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFeaturesSkeleton;
