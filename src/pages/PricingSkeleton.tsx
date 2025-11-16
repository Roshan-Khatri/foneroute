import { Skeleton } from '@/components/ui/skeleton';

const PricingSkeleton = () => {
  return (
    <div className="container-custom py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-4 border p-6 rounded-lg">
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-12 w-3/4" />
            <div className="space-y-2 pt-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
            <Skeleton className="h-10 w-full mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSkeleton;
