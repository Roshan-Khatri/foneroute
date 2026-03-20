import { client } from "@/sanity/client";
import { solutionBySlugQuery } from "@/sanity/queries";

export const dynamic = "force-dynamic";

export default async function SolutionPage({ params }: { params: { slug: string } }) {

  console.log("✅ SOLUTION PAGE HIT:", params.slug);

  const data = await client.fetch(
    solutionBySlugQuery,
    { slug: params.slug },
    { cache: "no-store" }
  );

  if (!data) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-2xl font-semibold">❌ Solution not found (THIS PAGE)</h1>
        <p className="text-gray-500 mt-2">{params.slug}</p>
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground">

      {/* HERO */}
      <section className="py-24 text-center">
        <h1 className="text-5xl font-bold">
          {data.heroSection?.heading}
        </h1>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          {data.heroSection?.subtitle}
        </p>
      </section>

      {/* INTRO */}
      <section className="py-16 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">
          {data.introSection?.heading}
        </h2>
        <p className="mt-4 text-gray-600">
          {data.introSection?.description}
        </p>
      </section>

      {/* BENEFITS */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center">
          {data.benefitsSection?.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 container mx-auto">
          {data.benefitsSection?.benefits?.map((item: string, i: number) => (
            <div key={i} className="p-6 border rounded-lg text-center shadow-sm">
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center">
          {data.keyFeaturesSection?.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 container mx-auto">
          {data.keyFeaturesSection?.features?.map((item: string, i: number) => (
            <div key={i} className="p-6 border rounded-lg text-center shadow-sm">
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">
          {data.ctaSection?.heading}
        </h2>
        <p className="mt-4 text-gray-600">
          {data.ctaSection?.description}
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <a
            href={data.ctaSection?.primaryButtonLink}
            className="px-6 py-3 bg-black text-white rounded"
          >
            {data.ctaSection?.primaryButtonText}
          </a>

          <a
            href={data.ctaSection?.secondaryButtonLink}
            className="px-6 py-3 border rounded"
          >
            {data.ctaSection?.secondaryButtonText}
          </a>
        </div>
      </section>

    </div>
  );
}