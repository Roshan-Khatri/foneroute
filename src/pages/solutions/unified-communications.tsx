import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { Check } from 'lucide-react';

// ✅ SAME as working file
import { sanityFetch } from '@/lib/sanity';
import { UNIFIED_COMMUNICATIONS_QUERY } from '@/sanity/queries';

const UnifiedCommunicationsPage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    sanityFetch({ query: UNIFIED_COMMUNICATIONS_QUERY })
      .then((res) => {
        console.log("UNIFIED DATA:", res);
        setData(res);
      })
      .catch((err) => console.error("SANITY ERROR:", err));
  }, []);

  if (!data) return <div className="text-center py-20">Loading...</div>;

  return (
    <main>
      <PageHeader
        title={data?.heroSection?.heading}
        description={data?.heroSection?.subtitle}
        breadcrumb={{
          links: [
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
            { name: 'Unified Communications', url: '/solutions/unified-communications' }
          ]
        }}
      />

      {/* WHY CHOOSE */}
      <section className="py-16 bg-gray-50 dark:bg-[#18181B]">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold">
            {data?.whyChooseSection?.heading}
          </h2>

          <p className="mt-4 text-muted-foreground dark:text-gray-300">
            {data?.whyChooseSection?.subtitle}
          </p>

          <div className="grid mt-10 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data?.whyChooseSection?.cards?.map((item: any, i: number) => (
              <div key={i} className="p-6 border rounded-lg">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold">
            {data?.featuresSection?.heading}
          </h2>

          <p className="mt-4 text-muted-foreground dark:text-gray-300">
            {data?.featuresSection?.subtitle}
          </p>

          <div className="grid mt-10 gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
            {data?.featuresSection?.features?.map((f: any, i: number) => (
              <div key={i} className="flex gap-3">
                <Check className="text-primary" />
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-gray-300">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5 dark:bg-[#18181B] text-center">
        <h2 className="text-3xl font-bold">
          {data?.ctaSection?.heading}
        </h2>

        <p className="mt-4 text-muted-foreground dark:text-gray-300">
          {data?.ctaSection?.subtitle}
        </p>

        <div className="mt-6">
          <Button asChild>
            <Link to={data?.ctaSection?.buttonLink || "/contact"}>
              {data?.ctaSection?.buttonText}
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default UnifiedCommunicationsPage;