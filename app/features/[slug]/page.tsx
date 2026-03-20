import { client } from "@/sanity/client";
import { featureBySlugQuery } from "@/sanity/queries";

export default async function FeaturePage({ params }: { params: { slug: string } }) {
  const data = await client.fetch(featureBySlugQuery, {
    slug: params.slug,
  });

  if (!data) {
    return <div>Feature not found</div>;
  }

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <p className="mt-6 text-gray-600">{data.overview}</p>
    </div>
  );
}
