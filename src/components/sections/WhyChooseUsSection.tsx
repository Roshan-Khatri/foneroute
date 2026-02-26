import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WhyChooseUsSection as WhyChooseUsSectionType } from '@/types/sanity';
import { TrendingUp, DollarSign, Shield } from 'lucide-react';

interface WhyChooseUsSectionProps {
  section: WhyChooseUsSectionType;
}

const iconMap = {
  trendingUp: TrendingUp,
  dollarSign: DollarSign,
  shield: Shield
};

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ section }) => {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container-custom text-center">
        <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-4">Why Choose Us?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12">Discover the advantages of partnering with us for your communication needs.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {section.cards.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || TrendingUp;
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

export default WhyChooseUsSection;
