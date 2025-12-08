
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, Minus } from "lucide-react";

import { Button } from "@/components/ui/button";
import PageHeader from "@/components/layout/PageHeader";

const tiers = [
  {
    name: 'Solo',
    href: '/contact?plan=solo',
    priceMonthly: 23,
    description: 'For individuals and small teams just getting started.',
    buttonText: 'Choose Solo',
  },
  {
    name: 'Pro',
    href: '/contact?plan=pro',
    priceMonthly: 45,
    description: 'For growing businesses that need more power and support.',
    buttonText: 'Choose Pro',
  },
  {
    name: 'Enterprise',
    href: '/contact?plan=enterprise',
    priceMonthly: 75,
    description: 'For large organizations with advanced needs.',
    buttonText: 'Choose Enterprise',
  },
];

const features = [
  { name: 'Call Recording', solo: true, pro: true, enterprise: true },
  { name: 'CRM Integration', solo: false, pro: true, enterprise: true },
  { name: 'Predictive Dialing', solo: false, pro: true, enterprise: true },
  { name: 'Advanced Analytics', solo: false, pro: false, enterprise: true },
  { name: 'Priority Support', solo: false, pro: false, enterprise: true },
  { name: 'Custom Onboarding', solo: false, pro: false, enterprise: true },
];

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing Plans</title>
        <meta
          name="description"
          content="Find the perfect plan that fits the scale and needs of your business."
        />
      </Helmet>
      <main>
        <PageHeader
          title="Flexible pricing for teams of all sizes"
          description="Find the perfect plan that fits the scale and needs of your business. All plans include a 14-day free trial."
        />

        {/* Pricing Tiers Section */}
        <section className="py-16 sm:py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier) => (
                <div key={tier.name} className="border rounded-lg p-8 flex flex-col card-hover-animation">
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                  <p className="mt-4 text-muted-foreground">{tier.description}</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold">${tier.priceMonthly}</span>
                    <span className="text-base font-medium text-muted-foreground">/month</span>
                  </div>
                  <Button asChild className="mt-8 w-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    <Link to={tier.href}>{tier.buttonText}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison Section */}
        <section className="pb-16 sm:pb-20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-10">Feature Comparison</h2>
            <div className="max-w-7xl mx-auto">
              <div className="border rounded-lg overflow-x-auto">
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
