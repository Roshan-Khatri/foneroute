import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { sanityFetch } from "@/lib/sanity";
import { SMS_MMS_API_QUERY } from "@/sanity/queries";

const SmsMmsApiPage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    sanityFetch({ query: SMS_MMS_API_QUERY })
      .then((res) => {
        console.log("FINAL DATA:", res); // DEBUG
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

      <main className="pt-16">

        {/* ================= HERO ================= */}
        <section className="py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {data?.heroSection?.heading}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {data?.heroSection?.subtitle}
          </p>
        </section>

        {/* ================= WHY CHOOSE ================= */}
        {data?.whyChooseSection?.cards?.length > 0 && (
          <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-10">
              {data?.whyChooseSection?.heading}
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {data.whyChooseSection.cards.map((card: any, i: number) => (
                <div key={i} className="p-6 border rounded-lg text-center shadow-sm">
                  <h3 className="font-semibold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= USE CASE ================= */}
        {data?.useCaseSection?.items?.length > 0 && (
          <section className="py-16 bg-gray-50 dark:bg-[#18181B] text-center">
            <h2 className="text-3xl font-bold mb-10">
              {data?.useCaseSection?.heading}
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {data.useCaseSection.items.map((item: any, i: number) => (
                <div key={i}>
                  <h3 className="font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= STEPS ================= */}
        {data?.stepsSection?.steps?.length > 0 && (
          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-10">
              {data?.stepsSection?.heading}
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {data.stepsSection.steps.map((step: any, i: number) => (
                <div key={i}>
                  <h3 className="font-semibold mb-2">
                    {i + 1}. {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= CTA ================= */}
        {data?.ctaSection && (
          <section className="py-16 bg-gray-100 dark:bg-[#18181B] text-center">
            <h2 className="text-2xl font-bold mb-4">
              {data?.ctaSection?.heading}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {data?.ctaSection?.subtitle}
            </p>

            <a
              href={data?.ctaSection?.buttonLink}
              className="bg-black text-white px-6 py-3 rounded"
            >
              {data?.ctaSection?.buttonText}
            </a>
          </section>
        )}

      </main>
    </>
  );
};

export default SmsMmsApiPage;