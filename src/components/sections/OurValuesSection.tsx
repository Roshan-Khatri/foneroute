import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { OurValuesSection as OurValuesSectionType } from '@/types/sanity';
import { Heart, Bolt, Shield } from 'lucide-react';

interface OurValuesSectionProps {
  section: OurValuesSectionType;
}

const iconMap = {
  heart: Heart,
  bolt: Bolt,
  shield: Shield
};

const OurValuesSection: React.FC<OurValuesSectionProps> = ({ section }) => {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container-custom text-center">
        <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-4">Our Values</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12">The principles that guide our mission and define our character.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {section.values.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Heart;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Card className="bg-background shadow-lg text-center card-hover-animation">
                  <CardHeader>
                    <div className="mx-auto text-primary w-fit mb-4"><Icon className="h-10 w-10" /></div>
                    <CardTitle className="font-poppins text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-muted-foreground">{item.description}</p></CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;
