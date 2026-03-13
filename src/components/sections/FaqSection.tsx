import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sanityText } from "@/lib/sanity";

const FaqSection = ({ section }) => {

  const faqs = section?.faqList ?? [];
  if (!faqs.length) {
    return null;
  }

  return (
    <section className="py-12 md:py-20">

      <div className="container mx-auto px-4">

        {section?.heading && (
          <h2 className="text-3xl font-bold text-center mb-4">
            {sanityText(section.heading)}
          </h2>
        )}

        {section?.description && (
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            {sanityText(section.description)}
          </p>
        )}

        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto"
        >

          {faqs.map((faq, index) => (

            <AccordionItem
              value={`item-${index}`}
              key={faq._key || index}
            >

              <AccordionTrigger>
                {sanityText(faq.question)}
              </AccordionTrigger>

              <AccordionContent>
                {sanityText(faq.answer)}
              </AccordionContent>

            </AccordionItem>

          ))}

        </Accordion>

      </div>

    </section>
  );
};

export default FaqSection;