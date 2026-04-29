import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/layout/PageHeader";


import { sanityFetch } from "@/lib/sanity";
import { OUTBOUND_CALL_QUERY } from "@/sanity/queries";

const OutboundPage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    sanityFetch({ query: OUTBOUND_CALL_QUERY })
      .then((res) => {
        console.log("OUTBOUND DATA:", res);
        setData(res);
      })
      .catch((err) => console.error("SANITY ERROR:", err));
  }, []);

  return (
    <main className="pt-16">
      {/* HEADER */}
      <PageHeader
        title={data?.heroSection?.heading || "Outbound Call Solutions"}
        breadcrumb={{
          links: [
            { name: "Home", url: "/" },
            { name: "Solutions", url: "/solutions" },
            { name: "Contact Center", url: "/solutions/contact-center" },
            { name: "Outbound", url: "/solutions/contact-center/outbound" },
          ],
        }}
        description={data?.heroSection?.subtitle}
      />

      {/* FEATURES */}
      <section className="py-16 sm:py-20">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          
          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold">
              {data?.keyFeaturesSection?.heading}
            </h2>

            <ul className="mt-8 list-disc list-inside text-lg text-gray-600">
              {data?.keyFeaturesSection?.features?.map((item: any, i: number) => (
                <li key={i}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </div>

          {/* IMAGE */}
          <div>
            {data?.keyFeaturesSection?.image?.asset?.url && (
              <img
                src={data.keyFeaturesSection.image.asset.url}
                alt="Outbound features"
                className="rounded-lg shadow-lg"
              />
            )}
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-[#191919]">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div>
            {data?.benefitsSection?.image?.asset?.url && (
              <img
                src={data.benefitsSection.image.asset.url}
                alt="Outbound benefits"
                className="rounded-lg shadow-lg"
              />
            )}
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold">
              {data?.benefitsSection?.heading}
            </h2>

            <ul className="mt-8 list-disc list-inside text-lg text-gray-600">
              {data?.benefitsSection?.benefits?.map((item: any, i: number) => (
                <li key={i}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 dark:bg-[#191919] py-16 sm:py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold">
            {data?.ctaSection?.heading}
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            {data?.ctaSection?.subtitle}
          </p>

          <div className="mt-8 space-x-4">
            <Button asChild>
              <Link to={data?.ctaSection?.primaryButtonLink || "/contact"}>
                {data?.ctaSection?.primaryButtonText || "Book a Demo"}
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link to={data?.ctaSection?.secondaryButtonLink || "/pricing"}>
                {data?.ctaSection?.secondaryButtonText || "Explore Pricing"}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OutboundPage;