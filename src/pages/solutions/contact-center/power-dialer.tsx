import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/layout/PageHeader";

import {
  CheckCircle,
  Phone,
  Voicemail,
  BarChart,
  TrendingUp,
  UserCheck,
} from "lucide-react";

import { sanityFetch } from "@/lib/sanity";
import { POWER_DIALER_QUERY } from "@/sanity/queries";

const PowerDialerPage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    sanityFetch({
      query: POWER_DIALER_QUERY,
    })
      .then((res) => {
        console.log("POWER DATA:", res);
        setData(res);
      })
      .catch((err) => console.error("SANITY ERROR:", err));
  }, []);

  return (
    <main className="pt-16">
      {/* HEADER */}
      <PageHeader
        title={data?.heroSection?.heading || "Power Dialer"}
        breadcrumb={{
          links: [
            { name: "Home", url: "/" },
            { name: "Solutions", url: "/solutions" },
            { name: "Contact Center Solution", url: "/solutions/contact-center" },
            { name: "Power Dialer", url: "/solutions/contact-center/power-dialer" },
          ],
        }}
        description={data?.heroSection?.subtitle}
      />

      {/* BENEFITS */}
      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center">
            {data?.benefitsSection?.heading || "Benefits of Power Dialer"}
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data?.benefitsSection?.benefits?.length > 0 ? (
              data.benefitsSection.benefits.map((item: any, i: number) => (
                <div
                  key={i}
                  className="p-6 rounded-lg bg-gray-100 dark:bg-[#252525] shadow-md text-center"
                >
                  {i === 0 && <TrendingUp className="h-12 w-12 mx-auto mb-4" />}
                  {i === 1 && <UserCheck className="h-12 w-12 mx-auto mb-4" />}
                  {i === 2 && <CheckCircle className="h-12 w-12 mx-auto mb-4" />}
                  {i === 3 && <BarChart className="h-12 w-12 mx-auto mb-4" />}

                  <h4 className="text-xl font-bold">{item.title}</h4>

                  {/* ✅ FIXED DESCRIPTION */}
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center col-span-4">No benefits found</p>
            )}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-[#191919]">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center">
            {data?.keyFeaturesSection?.heading || "Key Features"}
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.keyFeaturesSection?.features?.length > 0 ? (
              data.keyFeaturesSection.features.map(
                (feature: any, i: number) => (
                  <div
                    key={i}
                    className="p-6 rounded-lg bg-white dark:bg-[#252525] shadow-md"
                  >
                    {i === 0 && <Phone className="h-10 w-10 mb-4" />}
                    {i === 1 && <Voicemail className="h-10 w-10 mb-4" />}
                    {i === 2 && <BarChart className="h-10 w-10 mb-4" />}

                    <h3 className="text-xl font-bold">
                      {feature.title}
                    </h3>

                    {/* ✅ IMPORTANT FIX (THIS WAS MISSING) */}
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                )
              )
            ) : (
              <p className="text-center col-span-3">No features found</p>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold">
            {data?.ctaSection?.heading || "Ready to Boost Your Sales?"}
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            {data?.ctaSection?.description}
          </p>

          <div className="mt-8 space-x-4">
            <Button asChild size="lg">
              <Link to={data?.ctaSection?.primaryButtonLink || "/contact"}>
                {data?.ctaSection?.primaryButtonText || "Book a Demo"}
              </Link>
            </Button>

            <Button variant="outline" asChild size="lg">
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

export default PowerDialerPage;