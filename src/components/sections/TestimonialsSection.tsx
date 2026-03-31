import { Star } from "lucide-react";

const TestimonialsSection = ({ section }) => {
  const { heading, description, testimonials } = section || {};

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

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials?.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-8 shadow-sm hover:shadow-md transition"
            >

              {/* Stars */}
              <div className="flex mb-4">
                {Array.from({ length: item.rating || 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-black text-black mr-1" />
                ))}
              </div>

              {/* Review */}
              <p className="text-muted-foreground mb-6">
                "{item.reviewText}"
              </p>

              {/* Company */}
              <p className="font-semibold">
                {item.companyName}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;