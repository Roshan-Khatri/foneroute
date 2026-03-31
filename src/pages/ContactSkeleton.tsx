
import { Skeleton } from '@/components/ui/skeleton';

const ContactSkeleton = () => {
  return (
    <div className="container-custom py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <Skeleton className="h-12 w-1/2 mb-4" />
          <Skeleton className="h-8 w-3/4 mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
        <div>
          <Skeleton className="h-12 w-1/2 mb-4" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSkeleton;
