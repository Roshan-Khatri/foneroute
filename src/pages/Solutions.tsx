import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Zap,
  BarChart2,
  Users,
  Phone,
  MessageSquare,
  Cog,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import SolutionsByIndustry from "@/components/SolutionsByIndustry";
import { getSanityClient } from "@/sanity/client";
import { SOLUTIONS_PAGE_QUERY } from "@/sanity/queries";
import { SolutionsSkeleton } from "@/pages/AllPagesSkeleton";

const iconList = [
  Zap,
  BarChart2,
  Users,
  Phone,
  MessageSquare,
  Cog,
  LineChart,
  ShieldCheck,
];

const Solutions = () => {
  const location = useLocation();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const client = getSanityClient();
    client.fetch(SOLUTIONS_PAGE_QUERY).then((res) => {
      console.log("SOLUTIONS DATA 👉", res);
      setData(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <SolutionsSkeleton />;
  }

  if (!data) {
    return <div className="p-10 text-center">No data available.</div>;
  }

  return (
    <main className="flex-1 bg-white dark:bg-[#0d0d0d]">

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-20 bg-white dark:bg-[#0d0d0d]">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-poppins font-bold mb-4 text-gray-900 dark:text-white">
            {data?.heroSection?.heading || "Our Solutions"}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            {data?.heroSection?.subtitle || "Explore our solutions"}
          </p>
        </div>
      </section>

      {/* ================= CORE SOLUTIONS ================= */}
      <section className="py-16 bg-white dark:bg-[#0d0d0d]">
        <div className="container-custom">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white">
              {data?.coreSolutionsSection?.heading || "Core Solutions"}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data?.coreSolutionsSection?.solutions?.map((solution: any, i: number) => {
              const Icon = iconList[i % iconList.length];

              return (
                <Card
                  key={solution?._key || i}
                  className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full text-center flex flex-col p-8"
                >
                  <CardHeader className="p-0">
                    <div className="bg-gray-100 dark:bg-[#1a1a1a] rounded-full p-3 mx-auto mb-4">
                      {Icon && <Icon className="h-8 w-8 text-gray-700 dark:text-gray-300" />}
                    </div>
                    <CardTitle className="font-poppins text-xl font-bold text-gray-900 dark:text-white">
                      {solution?.title || "Solution"}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-grow p-0 mt-4">
                    <p className="text-gray-600 dark:text-gray-400">
                      {solution?.description || "No description available"}
                    </p>
                  </CardContent>

                  <div className="mt-auto pt-6">
                    <Button variant="outline" asChild>
                      <Link to={solution?.buttonLink || "#"}>
                        {solution?.buttonText || "Learn More"}
                      </Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= INDUSTRY ================= */}
      <SolutionsByIndustry />

      {/* ================= FEATURES ================= */}
      <section className="py-20 bg-white dark:bg-[#0d0d0d]">
        <div className="container-custom">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-poppins font-bold text-gray-900 dark:text-white">
              {data?.featuresSection?.heading || "Features"}
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
              {data?.featuresSection?.subtitle || ""}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.featuresSection?.features?.map((feature: any, i: number) => {
              const Icon = iconList[i % iconList.length];

              const title =
                typeof feature === "string"
                  ? feature
                  : feature?.title || "Feature";

              const description =
                typeof feature === "object"
                  ? feature?.description
                  : null;

              return (
                <Card
                  key={i}
                  className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full text-left"
                >
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 rounded-full p-3">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>

                    <CardTitle className="font-poppins text-lg text-gray-900 dark:text-white">
                      {title}
                    </CardTitle>
                  </CardHeader>

                  {description && (
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400">
                        {description}
                      </p>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
};

export default Solutions;
