import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TestimonialsSection as TestimonialsSectionType } from "@/types/sanity";
import { Star } from "lucide-react";
import { sanityText } from "@/lib/sanity";

interface TestimonialsSectionProps {
  section: TestimonialsSectionType;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ section }) => {

  const testimonials = section?.testimonials || [];
  console.log("Testimonials data:", testimonials);
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container-custom">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-12">

          <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-4">
            {sanityText(section?.heading || section?.title || "")}
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            {sanityText(section?.description || "")}
          </p>

        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">

        {testimonials.map((item: any, index: number) => {

console.log("Single testimonial:", item);
const rating = Number(item?.rating ?? 5)
const quote = item?.reviewText ?? ""
const name = item?.name ?? ""
const company = item?.companyName ?? ""

return (
              <motion.div
                key={item?._key || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >

                <Card className="bg-background shadow-lg h-full text-left card-hover-animation">

                  <CardHeader>

                    <div className="flex text-primary">
                      {Array.from({ length: rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>

                  </CardHeader>
                  <CardContent>

          <p className="text-muted-foreground mb-4">
                "{quote}"
          </p>

          <p className="font-semibold">
  {name}
</p>

<p className="text-sm text-muted-foreground">
  {company}
</p>

</CardContent>

                </Card>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;