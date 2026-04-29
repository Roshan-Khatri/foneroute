import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSanityClient } from "@/sanity/client";

import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/layout/SEO";

import { Check } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const client = getSanityClient();

export default function IndustryPage() {
  const { slug } = useParams();
  const [industry, setIndustry] = useState<any>(null);

  useEffect(() => {
    const fetchIndustry = async () => {
      const data = await client.fetch(
        `*[_type == "industryPage" && slug.current == $slug][0]`,
        { slug }
      );

      console.log("✅ FINAL DATA 👉", data);
      setIndustry(data);
    };

    if (slug) fetchIndustry();
  }, [slug]);

  if (!industry) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <>
      <SEO
        title={`${industry?.seo?.metaTitle || industry?.title} | FoneRoute`}
        description={industry?.seo?.metaDescription}
        keywords={industry?.seo?.keywords || []}
      />

      {/* HERO */}
      <PageHeader
        title={industry?.heroSection?.heading}
        subtitle={industry?.heroSection?.subtitle}
      />

      <section className="py-16">
        <div className="container-custom">

          {/* OVERVIEW */}
          {industry?.overviewSection && (
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl font-bold mb-4">
                {industry.overviewSection.heading}
              </h2>
              <p className="text-muted-foreground">
                {industry.overviewSection.description}
              </p>
            </div>
          )}

          {/* CHALLENGES */}
          {industry?.challengesSection?.challenges?.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-center mb-8">
                {industry.challengesSection.heading}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {industry.challengesSection.challenges.map((c: any, i: number) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardDescription>{c?.text}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </>
          )}

          {/* SOLUTIONS */}
          {industry?.solutionsSection?.solutions?.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-center mb-8">
                {industry.solutionsSection.heading}
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-16">
                {industry.solutionsSection.solutions.map((s: any, i: number) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle>{s?.title}</CardTitle>
                      {s?.description && (
                        <CardDescription>{s.description}</CardDescription>
                      )}
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </>
          )}

          {/* USE CASES */}
          {industry?.useCasesSection?.useCases?.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-center mb-8">
                {industry.useCasesSection.heading}
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {industry.useCasesSection.useCases.map((u: any, i: number) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle>{u?.title}</CardTitle>
                      {u?.description && (
                        <CardDescription>{u.description}</CardDescription>
                      )}
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </>
          )}

          {/* BENEFITS */}
          {industry?.benefitsSection?.benefits?.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-center mb-6">
                {industry.benefitsSection.heading}
              </h2>

              <div className="flex flex-wrap justify-center gap-4">
                {industry.benefitsSection.benefits.map((b: string, i: number) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={16} />
                    {b}
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </section>
    </>
  );
}