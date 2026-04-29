import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/layout/PageHeader";
import { Check } from "lucide-react";

import { sanityFetch } from "@/lib/sanity";
import { LOCAL_QUERY } from "@/sanity/queries";

const LocalPage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    sanityFetch({ query: LOCAL_QUERY })
      .then((res) => {
        console.log("LOCAL DATA:", res);
        setData(res);
      })
      .catch((err) => console.error("SANITY ERROR:", err));
  }, []);

  if (!data) return <div className="text-center py-20">Loading...</div>;

  return (
    <main>

      {/* ✅ HERO */}
      <PageHeader
        title={data?.heroSection?.heading}
        breadcrumb={{
          links: [
            { name: "Home", url: "/" },
            { name: "Solutions", url: "/solutions" },
            { name: "International Numbers", url: "/features/international-numbers" },
            { name: "Local", url: "/solutions/international-numbers/local" },
          ],
        }}
        description={data?.heroSection?.subtitle}
      />

      {/* ✅ WHY CHOOSE */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-transparent">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {data?.whyChooseSection?.heading}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {data?.whyChooseSection?.subtitle}
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {data?.whyChooseSection?.cards?.map((card: any) => (
              <div
                key={card.title}
                className="rounded-lg border bg-card p-6 shadow-sm dark:bg-[#252525]"
              >
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ FEATURES */}
      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {data?.featuresSection?.heading}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {data?.featuresSection?.subtitle}
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data?.featuresSection?.features?.map((feature: any) => (
              <div key={feature.title} className="flex items-start space-x-4">
                <Check className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CTA */}
      <section className="py-16 sm:py-20 bg-primary/5 dark:bg-primary/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {data?.ctaSection?.heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {data?.ctaSection?.subtitle}
          </p>

          <div className="mt-8">
            <Button asChild size="lg">
              <Link to={data?.ctaSection?.buttonLink || "/contact"}>
                {data?.ctaSection?.buttonText || "Contact Sales"}
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default LocalPage;