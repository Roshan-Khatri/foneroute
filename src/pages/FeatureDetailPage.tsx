import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSanityClient } from "@/sanity/client";
import { FEATURE_DETAIL_QUERY } from "@/sanity/queries";
import PageHeader from "@/components/layout/PageHeader";

const FeatureDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const [feature, setFeature] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Universal text extractor
  const getText = (block: any): string => {
    if (!block) return "";

    if (typeof block === "string") return block;

    if (Array.isArray(block)) {
      return block
        .map((b) =>
          b?.children?.map((child: any) => child.text).join("") || ""
        )
        .join(" ");
    }

    if (block?.text) return getText(block.text);
    if (block?.title) return block.title;

    return "";
  };

  useEffect(() => {
    if (!slug) return;

    const client = getSanityClient();

    const fetchFeature = async () => {
      try {
        const data = await client.fetch(FEATURE_DETAIL_QUERY);

        const matched = data?.find(
          (item: any) => item?.slug === slug
        );

        setFeature(matched || null);
      } catch (err) {
        console.error("❌ ERROR:", err);
        setFeature(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeature();
  }, [slug]);

  // 🔄 Loading
  if (isLoading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  // ❌ Not found
  if (!feature) {
    return (
      <div className="text-center py-20 text-red-500">
        Feature not found ❌
      </div>
    );
  }

  return (
    <div>
      {/* HERO */}
      <PageHeader
        title={feature?.heroSection?.heading || feature?.title}
        description={getText(feature?.heroSection?.description)}
      />

      {/* OVERVIEW */}
      {feature?.overviewSection && (
        <section className="container-custom py-12">
          <h2 className="text-2xl font-semibold mb-4">
            {feature.overviewSection.heading}
          </h2>
          <p className="text-gray-600">
            {getText(feature.overviewSection.description)}
          </p>
        </section>
      )}

      {/* CAPABILITIES */}
      {feature?.capabilitiesSection?.items?.length > 0 && (
        <section className="container-custom py-12">
          <h2 className="text-2xl font-semibold mb-6">
            {feature.capabilitiesSection.heading}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {feature.capabilitiesSection.items.map(
              (item: any, index: number) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {getText(item.description)}
                  </p>
                </div>
              )
            )}
          </div>
        </section>
      )}

      {/* BENEFITS */}
      {feature?.benefitsSection?.items?.length > 0 && (
        <section className="container-custom py-12">
          <h2 className="text-2xl font-semibold mb-6">
            {feature.benefitsSection.heading}
          </h2>

          <ul className="space-y-3">
            {feature.benefitsSection.items.map(
              (item: any, index: number) => (
                <li key={index} className="text-gray-600">
                  • {getText(item)}
                </li>
              )
            )}
          </ul>
        </section>
      )}

      {/* USE CASES ✅ FINAL FIX */}
      {feature?.useCasesSection?.items?.length > 0 && (
        <section className="container-custom py-12">
          <h2 className="text-2xl font-semibold mb-6">
            {feature.useCasesSection.heading}
          </h2>

          <div className="space-y-4">
            {feature.useCasesSection.items.map(
              (item: any, index: number) => (
                <div key={index}>
                  {/* Title */}
                  <h3 className="font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm">
                    {getText(item.description)}
                  </p>
                </div>
              )
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default FeatureDetailPage;