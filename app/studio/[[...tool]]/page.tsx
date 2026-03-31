import { client } from "@/sanity/client";
import { solutionBySlugQuery } from "@/sanity/queries";

export default async function SolutionPage({ params }) {

  const data = await client.fetch(solutionBySlugQuery, {
    slug: params.slug,
  });

  if (!data) {
    return <div>Solution not found</div>;
  }

  return (
    <div className="container mx-auto py-20">

      <h1 className="text-4xl font-bold">
        {data.title}
      </h1>

      <p className="mt-6 text-gray-600">
        {data.overview}
      </p>

    </div>
  );
}