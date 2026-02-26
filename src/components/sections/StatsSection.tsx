import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { StatsSection as StatsSectionType } from '@/types/sanity';

interface StatsSectionProps {
  section: StatsSectionType;
}

const StatsSection: React.FC<StatsSectionProps> = ({ section }) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container-custom flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
        <div className='text-center lg:text-left'>
          <h2 className="text-2xl sm:text-3xl font-poppins font-bold">Proven Results That Drive Success</h2>
          <p className="text-muted-foreground mt-4 mb-6">Our platform is designed to deliver measurable improvements to your key business metrics.</p>
          <ul className="space-y-4 inline-block text-left max-w-md">
            <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /> Increased agent productivity by up to 300%</li>
            <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /> Reduced operational costs with cloud infrastructure</li>
            <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /> 99.9% uptime SLA for reliable service</li>
          </ul>
          <div className="mt-8">
            <Button asChild variant="default" size="lg" className="h-12 text-base"><Link to="/case-studies">View Case Studies</Link></Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">
          {section.stats.map((result, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
              <Card className="bg-background shadow-lg h-full card-hover-animation">
                <CardContent className="pt-6">
                  <p className="text-4xl font-bold text-primary statistic-number">{result.value}</p>
                  <p className="text-muted-foreground mt-2">{result.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
