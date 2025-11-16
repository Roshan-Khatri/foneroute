
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

const HomeSkeleton = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section Skeleton */}
      <section className="relative pt-20 pb-10 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-background">
        <div className="relative z-10 container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Skeleton className="h-12 w-3/4 mb-6 mx-auto lg:mx-0" />
              <Skeleton className="h-6 w-full mb-8 mx-auto lg:mx-0" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Skeleton className="h-12 w-36" />
                <Skeleton className="h-12 w-36" />
              </div>
            </div>
            <div className="hidden lg:block">
              <Skeleton className="h-96 w-full rounded-lg" />
            </div>
          </div>
          <div className="mt-16 text-center">
            <Skeleton className="h-4 w-48 mb-4 mx-auto" />
            <div className="flex justify-center items-center gap-12 flex-wrap">
              {[...Array(5)].map((_, index) => (
                <Skeleton key={index} className="h-6 w-24" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Section Skeleton */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-20">
            <Skeleton className="h-10 w-1/2 mx-auto mb-4" />
            <Skeleton className="h-5 w-3/4 mx-auto" />
          </div>
          <div className="w-full">
            <div className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-12 sm:gap-x-2 bg-background rounded-lg p-2">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-10 w-full" />
              ))}
            </div>
            <div className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <Skeleton className="h-8 w-1/2 mb-4" />
                  <Skeleton className="h-5 w-full mb-8" />
                  <div className="space-y-4 mb-8">
                    {[...Array(4)].map((_, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <Skeleton className="h-6 w-6 rounded-full" />
                        <Skeleton className="h-5 w-3/4" />
                      </div>
                    ))}
                  </div>
                  <Skeleton className="h-12 w-40" />
                </div>
                <Skeleton className="h-80 w-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight Skeleton */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="card-professional">
                <CardContent className="p-8">
                  <Skeleton className="h-12 w-12 mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6 mt-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section Skeleton */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Skeleton className="h-10 w-1/3 mx-auto mb-4" />
            <Skeleton className="h-5 w-1/2 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <Card key={index} className="card-professional text-center">
                <CardContent className="p-8">
                  <Skeleton className="h-12 w-12 mb-4 mx-auto rounded-full" />
                  <Skeleton className="h-6 w-1/2 mb-3 mx-auto" />
                  <Skeleton className="h-4 w-3/4 mx-auto" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeSkeleton
