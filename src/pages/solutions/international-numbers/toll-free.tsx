import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/layout/PageHeader";
import { Check } from "lucide-react";

import { sanityFetch } from "@/lib/sanity";
import { TOLL_FREE_QUERY } from "@/sanity/queries";

const TollFreePage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    sanityFetch({ query: TOLL_FREE_QUERY })
      .then((res) => {
        console.log("TOLL FREE DATA:", res);
        setData(res);
      })
      .catch((err) => console.error("SANITY ERROR:", err));
  }, []);

  return (
    <main className="pt-16">
      
      {/* ================= HEADER ================= */}
      <PageHeader
        title={data?.heroSection?.heading || "Toll-Free Numbers"}
        breadcrumb={{
          links: [
            { name: "Home", url: "/" },
            { name: "Solutions", url: "/solutions" },
            { name: "Toll-Free", url: "/solutions/toll-free" },
          ],
        }}
        description={data?.heroSection?.subtitle}
      />

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-16 sm:py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold">
            {data?.whyChooseSection?.heading || "Why Choose Us"}
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {data?.whyChooseSection?.subtitle}
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data?.whyChooseSection?.cards?.length > 0 ? (
              data.whyChooseSection.cards.map((item: any, i: number) => (
                <div
                  key={i}
                  className="p-6 bg-gray-100 dark:bg-[#252525] rounded-lg shadow text-left"
                >
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))
            ) : (
              <p>No cards found</p>
            )}
          </div>
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-[#191919]">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold">
            {data?.keyFeaturesSection?.heading || "Key Features"}
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {data?.keyFeaturesSection?.description}
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {data?.keyFeaturesSection?.features?.length > 0 ? (
              data.keyFeaturesSection.features.map(
                (feature: any, i: number) => (
                  <div key={i} className="flex gap-3">
                    <Check className="mt-1 h-5 w-5 text-green-500" />
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              )
            ) : (
              <p>No features found</p>
            )}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 sm:py-20">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold">
            {data?.ctaSection?.heading}
          </h2>

          <p className="mt-4 text-gray-600">
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

export default TollFreePage;