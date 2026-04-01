import { Skeleton } from '@/components/ui/skeleton'
import { PageHeader } from '@/components/layout/PageHeader'

const SolutionCardSkeleton = () => (
  <div className="rounded-lg border-2 border-border bg-background p-4">
    <div className="flex items-center gap-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
    <div className="mt-4 space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  </div>
)

export const SolutionsSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <PageHeader
        title="Loading Solutions..."
        description="Please wait while we fetch our innovative solutions."
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <SolutionCardSkeleton />
        <SolutionCardSkeleton />
        <SolutionCardSkeleton />
      </div>
    </div>
  )
}
