import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/layout/PageHeader";

import {
  User,
  TrendingUp,
  Smile,
  CheckCircle,
  Eye,
  Zap,
  SlidersHorizontal,
} from "lucide-react";

import { sanityFetch } from "@/lib/sanity";
import { PROGRESSIVE_DIALER_QUERY } from "@/sanity/queries";

const ProgressiveDialerPage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    sanityFetch({
      query: PROGRESSIVE_DIALER_QUERY,
    })
      .then((res) => {
        console.log("PROGRESSIVE DATA:", res);
        setData(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="pt-16">
      {/* HEADER */}
      <PageHeader
        title={data?.heroSection?.heading || "Progressive Dialer"}
        breadcrumb={{
          links: [
            { name: "Home", url: "/" },
            { name: "Solutions", url: "/solutions" },
            { name: "Contact Center Solution", url: "/solutions/contact-center" },
            { name: "Progressive Dialer", url: "/solutions/contact-center/progressive-dialer" },
          ],
        }}
        description={data?.heroSection?.subtitle}
      />

      {/* INTRO */}
      <section className="py-16 sm:py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold">
            {data?.introSection?.heading}
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {data?.introSection?.description}
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <h3 className="text-2xl font-bold text-center mb-8">
            {data?.benefitsSection?.heading}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data?.benefitsSection?.benefits?.map((item: any, i: number) => (
              <div
                key={i}
                className="p-6 rounded-lg bg-gray-100 dark:bg-[#252525] shadow-md text-center"
              >
                {i === 0 && <User className="h-12 w-12 mx-auto mb-4" />}
                {i === 1 && <TrendingUp className="h-12 w-12 mx-auto mb-4" />}
                {i === 2 && <Smile className="h-12 w-12 mx-auto mb-4" />}
                {i === 3 && <CheckCircle className="h-12 w-12 mx-auto mb-4" />}

                <h4 className="text-xl font-bold">{item.title}</h4>

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-[#191919]">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center">
            {data?.keyFeaturesSection?.heading}
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.keyFeaturesSection?.features?.map(
              (feature: any, i: number) => (
                <div
                  key={i}
                  className="p-6 rounded-lg bg-white dark:bg-[#252525] shadow-md"
                >
                  {i === 0 && <Eye className="h-10 w-10 mb-4" />}
                  {i === 1 && <Zap className="h-10 w-10 mb-4" />}
                  {i === 2 && <SlidersHorizontal className="h-10 w-10 mb-4" />}

                  <h3 className="text-xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold">
            {data?.ctaSection?.heading}
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            {data?.ctaSection?.description}
          </p>

          <div className="mt-8 space-x-4">
            <Button asChild size="lg">
              <Link to={data?.ctaSection?.primaryButtonLink || "/contact"}>
                {data?.ctaSection?.primaryButtonText}
              </Link>
            </Button>

            <Button variant="outline" asChild size="lg">
              <Link to={data?.ctaSection?.secondaryButtonLink || "/pricing"}>
                {data?.ctaSection?.secondaryButtonText}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProgressiveDialerPage;