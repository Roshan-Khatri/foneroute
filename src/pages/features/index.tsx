
import { useEffect, useState } from "react";
import { sanityFetch } from "@/lib/sanity";
import { FEATURES_MAIN_PAGE_QUERY } from "@/sanity/queries";
import { Link } from "react-router-dom";

const FeaturesPage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    sanityFetch({ query: FEATURES_MAIN_PAGE_QUERY })
      .then((res) => {
        console.log("FEATURES PAGE DATA:", res); // DEBUG
        setData(res);
      })
      .catch(console.error);
  }, []);

  if (!data) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <main className="bg-background text-foreground pt-16">
      {/* ================= HERO ================= */}
      <section className="py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {data[0]?.heroSection?.heading}
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          {data[0]?.heroSection?.subtitle}
        </p>
      </section>

      {/* ================= FEATURES ================= */}
      {data[0]?.features?.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {data[0].features.map((feature: any) => (
              <Link key={feature.slug} to={`/features/${feature.slug}`}>
                <div className="p-6 border rounded-lg text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default FeaturesPage;
