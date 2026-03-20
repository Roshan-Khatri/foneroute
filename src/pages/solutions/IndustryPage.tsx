import { useEffect, useState } from "react";
import { getSanityClient } from "@/sanity/client";
import { FEATURES_PAGE_QUERY } from "@/sanity/queries";

const Features = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const client = getSanityClient();

    client.fetch(FEATURES_PAGE_QUERY).then((res) => {
      console.log("FEATURES DATA 👉", res);
      setData(res);
    });
  }, []);

  if (!data) return <div className="p-10">Loading...</div>;

  return (
    <main className="flex-1">

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-20 bg-secondary text-center">
        <div className="container-custom">
          <h1 className="text-4xl font-bold">
            {data.heroSection?.heading}
          </h1>
          <p className="text-muted-foreground mt-2">
            {data.heroSection?.subtitle}
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-16">
        <div className="container-custom grid md:grid-cols-3 gap-8">

          {data.featuresSection?.features?.map((feature: string, i: number) => (
            <div key={i} className="border p-6 rounded-lg">
              <h3 className="font-semibold text-lg">{feature}</h3>
            </div>
          ))}

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">
              {data.faqSection?.heading}
            </h2>
            <p className="text-muted-foreground mt-2">
              {data.faqSection?.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.faqSection?.faqs?.map((faq: any, i: number) => (
              <div key={i} className="border p-6 rounded-lg">
                <h4 className="font-semibold">{faq.question}</h4>
                <p className="text-muted-foreground mt-2">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
};

export default Features;