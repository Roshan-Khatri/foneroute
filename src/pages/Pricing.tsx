import { useEffect, useState } from "react";
import { getSanityClient } from "@/sanity/client";
import { PRICING_PAGE_QUERY } from "@/sanity/queries";
import PageHeader from "@/components/layout/PageHeader";

const Pricing = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const client = getSanityClient();

    client.fetch(PRICING_PAGE_QUERY).then((res) => {
      console.log("PRICING 👉", res);
      setData(res);
    });
  }, []);

  if (!data) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div>

      {/* ✅ HERO */}
      <PageHeader
        title={data.heroSection?.heading}
        description={data.heroSection?.subtitle}
      />

      {/* ✅ PRICING CARDS */}
      <section className="py-16">
        <div className="container-custom grid md:grid-cols-3 gap-8">

          {data.plans?.map((plan: any, i: number) => (
            <div
              key={i}
              className="border p-8 rounded-lg text-center hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {plan.name}
              </h3>

              <p className="text-sm text-muted-foreground mb-6">
                {plan.description}
              </p>

              <p className="text-4xl font-bold mb-6">
                ${plan.price}
                <span className="text-sm font-normal text-muted-foreground">
                  /month
                </span>
              </p>

              <a href={plan.buttonLink || "#"}>
                <button className="w-full bg-black text-white py-3 rounded hover:opacity-90 transition">
                  {plan.buttonText}
                </button>
              </a>
            </div>
          ))}

        </div>
      </section>

      {/* ✅ FEATURE COMPARISON */}
      <section className="py-16">
        <h2 className="text-center text-2xl font-bold mb-10">
          {data.featureComparison?.heading}
        </h2>

        <div className="container-custom overflow-x-auto">
          <table className="w-full border rounded-lg overflow-hidden">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-center">Solo</th>
                <th className="p-4 text-center">Pro</th>
                <th className="p-4 text-center">Enterprise</th>
              </tr>
            </thead>

            <tbody>
              {data.featureComparison?.features?.map((f: any, i: number) => (
                <tr key={i} className="border-t text-center">
                  <td className="p-4 text-left">{f.feature}</td>
                  <td>{f.solo ? "✓" : "-"}</td>
                  <td>{f.pro ? "✓" : "-"}</td>
                  <td>{f.enterprise ? "✓" : "-"}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </section>

      {/* ✅ FAQ */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-center text-2xl font-bold mb-10">
          {data.faqSection?.heading}
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {data.faqSection?.faqs?.map((faq: any, i: number) => (
            <div
              key={i}
              className="border p-5 rounded-lg bg-white"
            >
              <h3 className="font-semibold mb-1">
                {faq.question}
              </h3>

              <p className="text-muted-foreground text-sm">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Pricing;