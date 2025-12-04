
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSanityContent } from "@/hooks/useSanityContent";
import { PricingPlan } from "@/sanity/types";

import PricingSkeleton from "./PricingSkeleton";
import { PageHeader } from "@/components/layout/PageHeader";

export default function Pricing() {
  const { data: plans, isLoading, error } = useSanityContent<PricingPlan[]>("*[_type == 'pricingPlan']");

  if (isLoading) return <PricingSkeleton />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Helmet>
        <title>Pricing Plans</title>
        <meta
          name="description"
          content="Choose the best plan for your business needs."
        />
      </Helmet>
      <main>
        <PageHeader
          title="Pricing Plans"
          description="Choose the best plan for your business needs."
        />

        {/* Pricing Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {plans?.map((plan, index) => (
                  <div
                    key={index}
                    className="card-professional flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out"
                  >
                    <div className="p-8">
                      <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">
                        {plan.name}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {plan.description}
                      </p>
                      <div className="flex items-baseline mb-6">
                        <span className="text-4xl font-extrabold font-poppins text-foreground">
                          ${plan.price}
                        </span>
                        <span className="ml-2 text-lg text-muted-foreground">
                          / {plan.priceUnit}
                        </span>
                      </div>
                      <ul className="space-y-4">
                        {plan.features?.map((feature, fIndex) => (
                          <li
                            key={fIndex}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-8 pt-0 mt-auto">
                      <Button asChild className="w-full text-lg bg-black text-white hover:bg-gray-800">
                        <Link to="/contact">Get Started</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
