import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FeaturesSection as FeaturesSectionType } from '@/types/sanity';
import { Phone, MessageSquare, Cog, LineChart, Users, ShieldCheck } from 'lucide-react';

interface FeaturesSectionProps {
  section: FeaturesSectionType;
}

const iconMap = {
  phone: Phone,
  messageSquare: MessageSquare,
  cog: Cog,
  lineChart: LineChart,
  users: Users,
  shieldCheck: ShieldCheck
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ section }) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-poppins font-bold">{section.title}</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Our platform is packed with powerful features to enhance every aspect of your business communication.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {section.features.map((feature, i) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Phone;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Card className="bg-background shadow-lg h-full text-left card-hover-animation">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-poppins text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
