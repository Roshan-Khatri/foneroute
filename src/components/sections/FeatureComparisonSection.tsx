import { Check } from "lucide-react";

interface FeatureComparisonProps {
  section: {
    title?: string;
    description?: string;
    productA_name?: string;
    productB_name?: string;
    productC_name?: string;
    comparisons?: {
      feature: string;
      productA: string;
      productB: string;
      productC: string;
    }[];
  };
}

export default function FeatureComparisonSection({ section }: FeatureComparisonProps) {

  const rows = section?.comparisons ?? [];
  const columns = [
     section?.productA_name ?? "",
      section?.productB_name ?? "",
      section?.productC_name ?? "",
    ];

  return (
    <section className="py-16">
      <div className="container">

        <h2 className="text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
          {section?.title}
        </h2>

        <p className="text-center text-muted-foreground mb-10">
          {section?.description}
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-zinc-700">

            <thead>
              <tr className="border-b bg-gray-100 dark:bg-zinc-800">

                <th className="text-left px-6 py-4 text-gray-900 dark:text-white">
                  Feature
                </th>

                {columns.map((col, i) => (
                  <th key={i} className="text-center px-6 py-4 text-gray-900 dark:text-white">
                    {col}
                  </th>
                ))}

              </tr>
            </thead>

            <tbody className="bg-white dark:bg-zinc-900">

              {rows.map((row, i) => (
                <tr key={i} className="border-b border-gray-200 dark:border-zinc-700">

                  <td className="px-6 py-4 text-gray-900 dark:text-white">
                    {row.feature}
                  </td>

                  <td className="text-center px-6 py-4">
                    {row.productA === "yes" ? (
                      <Check className="mx-auto h-5 w-5 text-black dark:text-white" />
                    ) : "-"}
                  </td>

                  <td className="text-center px-6 py-4">
                    {row.productB === "yes" ? (
                      <Check className="mx-auto h-5 w-5 text-black dark:text-white" />
                    ) : "-"}
                  </td>

                  <td className="text-center px-6 py-4">
                    {row.productC === "yes" ? (
                      <Check className="mx-auto h-5 w-5 text-black dark:text-white" />
                    ) : "-"}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
}