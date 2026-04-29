import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityFetch } from "@/lib/sanity";
import { FEATURES_MAIN_PAGE_QUERY } from "@/sanity/queries";
import { Helmet } from "react-helmet-async";

const FeaturesPage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    sanityFetch({ query: FEATURES_MAIN_PAGE_QUERY })
      .then((res) => {
        console.log("🔥 SANITY RESPONSE:", res);
        setData(res);
      })
      .catch((err) => {
        console.error("❌ ERROR:", err);
      });
  }, []);

  // ✅ LOADING
  if (!data) {
    return <div className="text-center py-20">Loading...</div>;
  }

  // ✅ NO DATA
  if (!data?.featuresSection?.features?.length) {
    return <div className="text-center py-20">No features found ❌</div>;
  }

  return (
    <div className="bg-background text-foreground">

      {/* ✅ SEO */}
      <Helmet>
        <title>{data?.seo?.metaTitle || "Features"}</title>
        <meta
          name="description"
          content={data?.seo?.metaDescription || ""}
        />
      </Helmet>

      {/* ✅ HERO */}
      <section className="py-20 text-center border-b">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">
            {data?.heroSection?.heading || "Features"}
          </h1>
          <p className="text-xl mt-4 text-muted-foreground">
            {data?.heroSection?.subtitle}
          </p>
        </div>
      </section>

      {/* ✅ FEATURES GRID */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {data.featuresSection.features.map((feature: any, i: number) => {

              // 🔥 FINAL LINK FIX (IMPORTANT)
              const featureLink =
                feature.button?.link ||   // ✅ FIRST PRIORITY
                feature.link ||           // ✅ SECOND PRIORITY
                (feature.slug?.current
                  ? `/features/${feature.slug.current}`
                  : "#");                 // ✅ SAFE FALLBACK

              // ✅ DEBUG (REMOVE LATER)
              console.log("Feature:", feature);
              console.log("Final Link:", featureLink);

              return (
                <Link
                  to={featureLink}
                  key={i}
                  className="block p-6 border rounded-lg hover:shadow-md transition"
                >
                  <h2 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h2>

                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </Link>
              );
            })}

          </div>
        </div>
      </section>

      {/* ✅ FAQ */}
      {data?.faqSection?.faqs?.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto">

            <h2 className="text-3xl font-bold text-center mb-10">
              {data.faqSection.heading}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {data.faqSection.faqs.map((faq: any, i: number) => (
                <div key={i} className="p-6 border rounded-lg bg-white">
                  <h3 className="font-semibold mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

    </div>
  );
};

export default FeaturesPage;