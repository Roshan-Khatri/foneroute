
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const IndustriesSkeleton = () => (
  <div>
    {/* Page Header Skeleton */}
    <div className="bg-background shadow-md">
      <div className="container-custom py-6">
        <Skeleton className="h-8 w-1/4 mb-3" />
        <Skeleton className="h-6 w-1/2" />
      </div>
    </div>

    {/* Industries Grid Skeleton */}
    <section className="py-12">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <Card key={index} className="card-professional">
            <CardContent className="p-4 flex flex-col items-center">
              <Skeleton className="h-10 w-10 rounded-full mb-3" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-3" />
              <div className="w-full space-y-2">
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
                <Skeleton className="h-4 w-5/6" />
              </div>
              <Skeleton className="h-10 w-1/2 mt-4" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    {/* Common Challenges Skeleton */}
    <section className="py-12 bg-background">
      <div className="container-custom max-w-3xl mx-auto">
        <Skeleton className="h-8 w-1/2 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} className="h-12 w-full rounded-lg" />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default IndustriesSkeleton;
