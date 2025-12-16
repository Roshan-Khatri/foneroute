
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { industries } from '@/content/industries';

interface SolutionsByIndustryProps {
  limit?: number;
}

// Helper to truncate text
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, text.lastIndexOf(' ', maxLength)) + '...';
};

const SolutionsByIndustry = ({ limit }: SolutionsByIndustryProps) => {
  const industriesToDisplay = limit ? industries.slice(0, limit) : industries;

  return (
    <section id="solutions-by-industry" className="py-24 bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Tailored Solutions for Your Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our communication platform can be adapted to meet the unique challenges and compliance requirements of your specific field.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesToDisplay.map((industry) => {
            const Icon = industry.icon;
            const features = industry.ourSolutions || industry.features || [];

            return (
              <HoverCard key={industry.slug}>
                <HoverCardTrigger asChild>
                    <Card className="bg-background transform transition-transform duration-300 hover:scale-105 hover:shadow-xl text-center flex flex-col h-full">
                      <CardHeader className="items-center p-8">
                        <div className="p-4 bg-primary/10 rounded-full mb-4">
                          <Icon className="w-10 h-10 text-primary" />
                        </div>
                        <CardTitle className="text-2xl font-semibold">
                          {industry.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow p-6 pt-0">
                        <p className="text-muted-foreground">
                          {truncateText(industry.overview, 150)} 
                        </p>
                      </CardContent>
                      <CardFooter className="justify-center p-6 pt-0">
                         <Link to={`/solutions/${industry.slug}`} className="w-full">
                           <Button variant="default" className="w-full font-bold">Explore {industry.title}</Button>
                         </Link>
                      </CardFooter>
                    </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <h3 className="text-lg font-semibold">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {industry.hero.subtitle}
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold">Key Solutions:</h4>
                    <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground">
                      {features.slice(0, 3).map((feature) => (
                        <li key={feature.title}>{feature.title}</li>
                      ))}
                    </ul>
                  </div>
                  <Link to={`/solutions/${industry.slug}`} className='w-full'>
                    <Button variant="link" className="mt-4 pl-0">Learn more &rarr;</Button>
                  </Link>
                </HoverCardContent>
              </HoverCard>
            );
          })}
        </div>
        {limit && (
          <div className="text-center mt-16">
            <Button asChild size="lg" className="font-bold">
              <Link to="/solutions">View All Industries</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SolutionsByIndustry;
