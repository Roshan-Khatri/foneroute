import { Skeleton } from '@/components/ui/skeleton';

const FeatureCallManagementSkeleton = () => {
  return (
    <div className="container-custom py-12">
      <div className="space-y-8">
        <div className="space-y-4">
          <Skeleton className="h-10 w-1/2" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
        </div>
      </div>
    </div>
  );
};

export default FeatureCallManagementSkeleton;
