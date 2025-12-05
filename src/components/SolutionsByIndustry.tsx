
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Heart, Scale, Building, Zap, MessageSquare, Globe, Home, Gavel } from 'lucide-react';
import type { Industry } from '@/sanity/types';

const iconMap: { [key: string]: any } = {
  Healthcare: Heart,
  Finance: Scale,
  Education: Building,
  Technology: Zap,
  Retail: MessageSquare,
  Manufacturing: Globe,
  Hospitality: Users,
  'Real Estate': Home,
  Legal: Gavel,
};

interface SolutionsByIndustryProps {
  industries: Industry[];
}

const SolutionsByIndustry = ({ industries }: SolutionsByIndustryProps) => {
  return (
    <section id="solutions-by-industry" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Solutions by Industry</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover tailored communication solutions designed to meet the unique challenges and goals of your industry.
        </p>
      </div>
      {industries && industries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            if (!industry?.slug?.current) {
              return null;
            }
            const Icon = iconMap[industry.title] || Users;
            return (
              <Card key={industry.title} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg text-center flex flex-col">
                <CardHeader className="items-center p-8">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-semibold">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-8 pt-0">
                  <p className="text-muted-foreground mb-6">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.solutions?.slice(0, 3).map((solution) => {
                      if (!solution?.slug?.current) {
                        return null;
                      }
                      return (
                        <Link
                          key={solution.slug.current}
                          to={`/solutions/${solution.slug.current}`}
                          className="block text-primary font-medium hover:underline"
                        >
                          {solution.title}
                        </Link>
                      );
                    })}
                  </div>
                </CardContent>
                <CardFooter className="justify-center p-8 pt-0">
                  <Button asChild variant="default">
                    <Link to={`/industries/${industry.slug.current}`}>Explore Solution</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg text-muted-foreground">Content not available at the moment.</p>
        </div>
      )}
    </section>
  );
};

export default SolutionsByIndustry;
