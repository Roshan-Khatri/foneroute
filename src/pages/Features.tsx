import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageHeader from "@/components/layout/PageHeader";
import { Link } from "react-router-dom";
import { getSanityClient } from "@/sanity/client";
import { FEATURES_PAGE_QUERY } from "@/sanity/queries";

const FeaturesPage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const client = getSanityClient();

    client.fetch(FEATURES_PAGE_QUERY).then((res) => {
      console.log("FEATURES DATA 👉", res);
      setData(res);
    });
  }, []);

  // ✅ Loading state
  if (!data) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  return (
    <main>

      {/* ================= HEADER ================= */}
      <PageHeader 
        title={data.heroSection?.heading || "Features"}
        description={data.heroSection?.subtitle || ""}
        breadcrumb={{
          links: [
            { name: "Home", url: "/" },
            { name: "Features", url: "/features" }
          ]
        }}
      />

      {/* ================= FEATURES ================= */}
      <section className="py-16 sm:py-24 bg-[#fafafa] dark:bg-[#0d0d0d]">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {data.featuresSection?.features?.map((feature: any, i: number) => {

              // ✅ Handle object OR string safely
              const title =
                typeof feature === "string" ? feature : feature?.title;

              const slug =
                title?.toLowerCase().replace(/\s+/g, "-");

              return (
                <Link to={`/features/${slug}`} key={i}>
                  <Card className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm p-8 flex flex-col justify-start h-full transition-transform transform hover:scale-105 hover:shadow-lg">
                    
                    <CardHeader className="p-0">
                      <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-0">
                      <p className="text-gray-500 dark:text-gray-400">
                        Powerful feature to enhance your communication system.
                      </p>
                    </CardContent>

                  </Card>
                </Link>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#0d0d0d]">
        <div className="container-custom">

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              {data.faqSection?.heading || "Frequently Asked Questions"}
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              {data.faqSection?.subtitle || ""}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.faqSection?.faqs?.map((item: any, index: number) => (
              <div
                key={index}
                className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-lg p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                  {item.question}
                </h3>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
};

export default FeaturesPage;