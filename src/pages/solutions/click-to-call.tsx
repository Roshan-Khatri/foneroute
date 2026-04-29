import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

import { sanityFetch } from "@/lib/sanity";
import { CLICK_TO_CALL_QUERY } from "@/sanity/queries";

const ClickToCallPage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    sanityFetch({ query: CLICK_TO_CALL_QUERY })
      .then((res) => {
        console.log("FINAL DATA:", res); // ✅ DEBUG
        setData(res);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!data) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <main className="pt-16">

      {/* ================= HERO ================= */}
      <PageHeader
        title={data?.heroSection?.heading}
        description={data?.heroSection?.subtitle}
      />

      {/* ================= WHY SECTION ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            {data?.whySection?.heading}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {data?.whySection?.cards?.map((card: any, i: number) => (
              <div key={i} className="p-6 border rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-16 text-center bg-gray-50 dark:bg-[#18181B]">
        <h2 className="text-3xl font-bold mb-12">
          {data?.howItWorksSection?.heading}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data?.howItWorksSection?.steps?.map((step: any, i: number) => (
            <div key={i}>
              {/* ✅ FIXED numbering */}
              <h3 className="font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          {data?.keyFeaturesSection?.heading}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {data?.keyFeaturesSection?.features?.map((feature: any, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle size={20} className="mt-1" />

              {/* ✅ Handles both string & object */}
              <p>
                {typeof feature === "string"
                  ? feature
                  : feature?.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 text-center bg-gray-100 dark:bg-[#18181B]">
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

    </main>
  );
};

export default ClickToCallPage;
