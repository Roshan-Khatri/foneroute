import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { sanityFetch } from "@/lib/sanity";
import { NUMBER_MASKING_QUERY } from "@/sanity/queries";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NumberMaskingPage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    sanityFetch({ query: NUMBER_MASKING_QUERY })
      .then((res) => {
        console.log("NUMBER MASKING DATA:", res); // DEBUG
        setData(res);
      })
      .catch(console.error);
  }, []);

  if (!data) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>{data?.seo?.metaTitle}</title>
        <meta name="description" content={data?.seo?.metaDescription} />
      </Helmet>

      <main className="bg-background text-foreground pt-16">

        {/* ================= HERO ================= */}
        <section className="py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {data?.heroSection?.heading}
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {data?.heroSection?.subtitle}
          </p>
        </section>

        {/* ================= BENEFITS ================= */}
        {data?.benefitsSection?.cards?.length > 0 && (
          <section className="py-16 bg-gray-50 dark:bg-[#18181B]">
            <h2 className="text-3xl font-bold text-center mb-12">
              {data?.benefitsSection?.heading}
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {data.benefitsSection.cards.map((card: any, i: number) => (
                <div key={i} className="p-6 border rounded-lg text-center">
                  <h3 className="font-semibold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= HOW IT WORKS ================= */}
        {data?.howItWorksSection?.steps?.length > 0 && (
          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-12">
              {data?.howItWorksSection?.heading}
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {data.howItWorksSection.steps.map((step: any, i: number) => (
                <div key={i}>
                  <h3 className="font-semibold mb-2">
                    {i + 1}. {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= PLATFORM ================= */}
        {data?.platformSection?.cards?.length > 0 && (
          <section className="py-16 bg-gray-50 dark:bg-[#18181B] text-center">
            <h2 className="text-3xl font-bold mb-12">
              {data?.platformSection?.heading}
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {data.platformSection.cards.map((card: any, i: number) => (
                <div key={i} className="p-6 border rounded-lg">
                  <h3 className="font-semibold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= CTA ================= */}
        {data?.ctaSection && (
          <section className="py-16 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {data?.ctaSection?.heading}
            </h2>

            <p className="text-gray-600 mb-6">
              {data?.ctaSection?.subtitle}
            </p>

            <Link to={data?.ctaSection?.buttonLink || "/contact"}>
              <Button>
                {data?.ctaSection?.buttonText}
              </Button>
            </Link>
          </section>
        )}

      </main>
    </>
  );
};

export default NumberMaskingPage;