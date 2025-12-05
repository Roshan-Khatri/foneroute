
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, Minus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";

const features = [
  { name: 'Call Recording', solo: true, pro: true, enterprise: true },
  { name: 'CRM Integration', solo: false, pro: true, enterprise: true },
  { name: 'Predictive Dialing', solo: false, pro: true, enterprise: true },
  { name: 'Advanced Analytics', solo: false, pro: false, enterprise: true },
];

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Feature Comparison</title>
        <meta
          name="description"
          content="Find the perfect plan that fits the scale and needs of your business."
        />
      </Helmet>
      <main>
        <PageHeader
          title="Feature Comparison"
          description="Find the perfect plan that fits the scale and needs of your business."
        />

        {/* Pricing Table Section */}
        <section className="py-16 sm:py-20">
          <div className="container-custom">
            <div className="max-w-7xl mx-auto">
              <div className="border rounded-lg overflow-x-auto card-hover-animation">
                <table className="w-full table-fixed">
                  <thead>
                    <tr className="bg-white dark:bg-background">
                      <th className="p-4 text-left font-bold text-lg w-[34%]">Feature</th>
                      <th className="p-4 text-center font-bold text-lg w-[22%]">Solo</th>
                      <th className="p-4 text-center font-bold text-lg w-[22%]">Pro</th>
                      <th className="p-4 text-center font-bold text-lg w-[22%]">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-4 font-medium">{feature.name}</td>
                        <td className="p-4 text-center">
                          {feature.solo ? <Check className="h-6 w-6 text-primary mx-auto" /> : <Minus className="h-6 w-6 text-muted-foreground mx-auto" />}
                        </td>
                        <td className="p-4 text-center">
                          {feature.pro ? <Check className="h-6 w-6 text-primary mx-auto" /> : <Minus className="h-6 w-6 text-muted-foreground mx-auto" />} 
                        </td>
                        <td className="p-4 text-center">
                          {feature.enterprise ? <Check className="h-6 w-6 text-primary mx-auto" /> : <Minus className="h-6 w-6 text-muted-foreground mx-auto" />}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t">
                        <td className="p-4"></td>
                        <td className="p-4 text-center">
                            <Button asChild className="w-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                                <Link to="/contact?plan=solo">Choose Solo</Link>
                            </Button>
                        </td>
                        <td className="p-4 text-center">
                            <Button asChild className="w-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                                <Link to="/contact?plan=pro">Choose Pro</Link>
                            </Button>
                        </td>
                        <td className="p-4 text-center">
                            <Button asChild className="w-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                                <Link to="/contact?plan=enterprise">Choose Enterprise</Link>
                            </Button>
                        </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
