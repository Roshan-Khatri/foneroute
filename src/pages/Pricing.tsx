import { Link } from "react-router-dom";
import { Check, Minus } from "lucide-react";

import { Button } from "@/components/ui/button";
import PageHeader from "@/components/layout/PageHeader";
import { SEO } from "@/components/layout/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tiers = [
  {
    name: "Solo",
    href: "/contact?plan=solo",
    priceMonthly: 23,
    description: "For individuals and small teams just getting started.",
    buttonText: "Choose Solo",
  },
  {
    name: "Pro",
    href: "/contact?plan=pro",
    priceMonthly: 45,
    description: "For growing businesses that need more power and support.",
    buttonText: "Choose Pro",
  },
  {
    name: "Enterprise",
    href: "/contact?plan=enterprise",
    priceMonthly: 75,
    description: "For large organizations with advanced needs.",
    buttonText: "Choose Enterprise",
  },
];

const features = [
  { name: "Call Recording", solo: true, pro: true, enterprise: true },
  { name: "CRM Integration", solo: false, pro: true, enterprise: true },
  { name: "Predictive Dialing", solo: false, pro: true, enterprise: true },
  { name: "Advanced Analytics", solo: false, pro: false, enterprise: true },
  { name: "Priority Support", solo: false, pro: false, enterprise: true },
  { name: "Custom Onboarding", solo: false, pro: false, enterprise: true },
];

const faqs = [
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time to match your business needs.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, Mastercard, and American Express. Enterprise plans also support bank transfers.",
  },
  {
    question: "Do you offer discounts for non-profits?",
    answer:
      "Yes, we offer special discounts for non-profit organizations. Please contact our sales team.",
  },
];

export default function Pricing() {
  return (
    <>
      <SEO
        title="FoneRoute Pricing | Plans for Every Business Size"
        description="Explore FoneRoute's flexible pricing plans."
        keywords={[
          "pricing plans",
          "business communication pricing",
          "contact center cost",
          "cloud pbx pricing",
        ]}
      />

      <main>
        <PageHeader
          title="Pricing"
          description="Find the perfect plan that fits the scale and needs of your business."
        />

        {/* Pricing Cards */}
        <section className="py-16 sm:py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="border rounded-lg p-8 flex flex-col bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800"
                >
                  <h3 className="text-2xl font-bold">{tier.name}</h3>

                  <p className="mt-4 text-muted-foreground">
                    {tier.description}
                  </p>

                  <div className="mt-6">
                    <span className="text-4xl font-bold">
                      ${tier.priceMonthly}
                    </span>
                    <span className="text-base font-medium text-muted-foreground">
                      /month
                    </span>
                  </div>

                  <Button
                    asChild
                    className="mt-8 w-full"
                  >
                    <Link to={tier.href}>{tier.buttonText}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="pb-16 sm:pb-20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-10">
              Feature Comparison
            </h2>

            <div className="max-w-7xl mx-auto">
              <div className="border rounded-lg overflow-x-auto bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800">

                <table className="w-full table-fixed bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-200">

                  <thead>
                    <tr className="bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white">
                      <th className="p-4 text-left font-bold text-lg w-[34%]">
                        Feature
                      </th>
                      <th className="p-4 text-center font-bold text-lg w-[22%]">
                        Solo
                      </th>
                      <th className="p-4 text-center font-bold text-lg w-[22%]">
                        Pro
                      </th>
                      <th className="p-4 text-center font-bold text-lg w-[22%]">
                        Enterprise
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {features.map((feature, index) => (
                      <tr
                        key={index}
                        className="border-t border-gray-200 dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-800"
                      >
                        <td className="p-4 font-medium">{feature.name}</td>

                        <td className="p-4 text-center">
                          {feature.solo ? (
                            <Check className="h-6 w-6 text-primary mx-auto" />
                          ) : (
                            <Minus className="h-6 w-6 text-muted-foreground mx-auto" />
                          )}
                        </td>

                        <td className="p-4 text-center">
                          {feature.pro ? (
                            <Check className="h-6 w-6 text-primary mx-auto" />
                          ) : (
                            <Minus className="h-6 w-6 text-muted-foreground mx-auto" />
                          )}
                        </td>

                        <td className="p-4 text-center">
                          {feature.enterprise ? (
                            <Check className="h-6 w-6 text-primary mx-auto" />
                          ) : (
                            <Minus className="h-6 w-6 text-muted-foreground mx-auto" />
                          )}
                        </td>

                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20 bg-gray-50 dark:bg-zinc-950">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
