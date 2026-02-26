import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { TestimonialsSection as TestimonialsSectionType } from '@/types/sanity';
import { Star } from 'lucide-react';

interface TestimonialsSectionProps {
  section: TestimonialsSectionType;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ section }) => {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container-custom text-center">
        <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-4">What Our Customers Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12">Real feedback from satisfied clients who trust our platform.</p>
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {section.testimonials.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Card className="bg-background shadow-lg h-full text-left card-hover-animation">
                <CardHeader>
                  <div className="flex text-primary">
                    {[...Array(item.rating)].map((_, j) => <Star key={j} className="h-5 w-5 fill-current" />)}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">"{item.quote}"</p>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
