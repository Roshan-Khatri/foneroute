import { Skeleton } from '@/components/ui/skeleton';

const ContactCenterFeaturesSkeleton = () => {
  return (
    <div className="container-custom py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCenterFeaturesSkeleton;
