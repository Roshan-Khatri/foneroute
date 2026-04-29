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

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, text.lastIndexOf(' ', maxLength)) + '...';
};

const SolutionsByIndustry = ({ limit }: SolutionsByIndustryProps) => {
  const industriesToDisplay = limit ? industries.slice(0, limit) : industries;

  return (
    <section id="solutions-by-industry" className="py-20 bg-white dark:bg-[#0d0d0d]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
            Tailored Solutions for Your Industry
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
                  <Card className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 text-center flex flex-col h-full">

                    <CardHeader className="items-center p-8">
                      <div className="p-3 bg-gray-100 dark:bg-[#1a1a1a] rounded-full mb-4">
                        <Icon className="w-10 h-10 text-gray-700 dark:text-gray-300" />
                      </div>

                      <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                        {industry.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-grow p-6 pt-0">
                      <p className="text-gray-600 dark:text-gray-400">
                        {truncateText(industry.overview, 150)}
                      </p>
                    </CardContent>

                    {/* ✅ FIXED BUTTON */}
                    <CardFooter className="justify-center p-6 pt-0">
                      <Link to={`/industry/${industry.slug}`} className="w-full">
                        <Button className="w-full font-bold bg-white text-black border border-gray-300 hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-gray-900 rounded-md">
                          Explore {industry.title}
                        </Button>
                      </Link>
                    </CardFooter>

                  </Card>
                </HoverCardTrigger>

                <HoverCardContent className="w-80 bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {industry.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {industry.hero.subtitle}
                  </p>

                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Key Solutions:
                    </h4>

                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {features.slice(0, 3).map((feature) => (
                        <li key={feature.title}>{feature.title}</li>
                      ))}
                    </ul>
                  </div>

                  {/* ✅ FIXED LINK */}
                  <Link to={`/industry/${industry.slug}`} className="w-full">
                    <Button variant="link" className="mt-4 pl-0 text-black dark:text-white">
                      Learn more →
                    </Button>
                  </Link>
                </HoverCardContent>

              </HoverCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsByIndustry;