
import { Skeleton } from '@/components/ui/skeleton';

const AllSolutionsSkeleton = () => {
  return (
    <div>
      {/* Page Header Skeleton */}
      <div className="container-custom py-12">
        <Skeleton className="h-10 w-1/3 mb-4" />
        <Skeleton className="h-6 w-2/3" />
      </div>

      {/* Section Skeleton */}
      <div className="section-padding bg-background">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <Skeleton className="h-8 w-1/2 mx-auto mb-4" />
          <Skeleton className="h-5 w-full mb-2" />
          <Skeleton className="h-5 w-full" />
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="section-padding bg-surface">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4 border p-6 rounded-lg">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <div className="flex items-center pt-4">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-4 w-4 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Skeleton */}
      <div className="section-padding bg-background">
        <div className="container-custom">
            <div className="text-center mb-12">
                <Skeleton className="h-8 w-1/3 mx-auto mb-4" />
                <Skeleton className="h-5 w-2/3 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="space-y-4">
                        <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
                        <Skeleton className="h-6 w-3/4 mx-auto" />
                        <Skeleton className="h-4 w-full mx-auto" />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default AllSolutionsSkeleton;
