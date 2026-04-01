import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { sanityText } from "@/lib/sanity";

interface IndustryCard {
  _key?: string;
  title?: string;
  description?: string;
  button?: {
    label?: string;
    link?: string;
  };
}

interface IndustrySolutionsSectionProps {
  section: {
    heading?: string;
    description?: string;
    industryCards?: IndustryCard[];
  };
}

const IndustrySolutionsSection: React.FC<IndustrySolutionsSectionProps> = ({ section }) => {

  const cards = section?.industryCards ?? [];

  if (!cards.length) return null;

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">

        {section?.heading && (
          <h2 className="text-3xl font-bold text-center mb-4">
            {sanityText(section.heading)}
          </h2>
        )}

        {section?.description && (
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            {sanityText(section.description)}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {cards.map((card, index) => {

            const title = card?.title ?? "";
            const description = card?.description ?? "";

            const buttonLabel = card?.button?.label ?? "Learn More";
            let buttonLink = card?.button?.link ?? "/";

            // debug
            console.log("Industry Card:", card);
            console.log("BUTTON LINK:", buttonLink);

            // ensure link always starts with /
            if (buttonLink && !buttonLink.startsWith("/")) {
              buttonLink = `/${buttonLink}`;
            }

            return (
              <div
                key={card?._key ?? index}
                className="border p-6 rounded-lg bg-background shadow-sm flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">
                  {sanityText(title)}
                </h3>

                <p className="text-muted-foreground mb-4 flex-grow">
                  {sanityText(description)}
                </p>

                <Link to={buttonLink} className="mt-auto">
                  <Button variant="outline">
                    {sanityText(buttonLabel)}
                  </Button>
                </Link>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default IndustrySolutionsSection;