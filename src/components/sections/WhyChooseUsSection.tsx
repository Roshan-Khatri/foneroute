import { TrendingUp } from "lucide-react";

const WhyChooseUsSection = ({ section }) => {
  const { heading, description, items } = section || {};

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            {heading}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {items?.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-8 text-center shadow-sm hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;