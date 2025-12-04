
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowRight, Zap, Shield, BarChart, Heart, Scale, Building, Globe, MessageSquare, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SolutionsByIndustry from '@/components/SolutionsByIndustry';
import { useSanityContent } from '@/hooks/useSanityContent';
import type { Industry } from '@/sanity/types';
import MainLayout from '@/components/layout/MainLayout';
import SolutionsSkeleton from './solutions/SolutionsSkeleton';

const tailoredSolutions = [
    { title: 'Cloud Communications', description: 'Flexible and scalable cloud telephony for modern businesses.' },
    { title: 'Customer Engagement Platforms', description: 'Deliver exceptional customer service with our integrated contact center solutions.' },
    { title: 'Unified Messaging', description: 'Combine communication with integrated voice, video, and text functionality.' },
    { title: 'AI-Powered Analytics', description: 'Gain actionable insights from your communication data to improve performance.' },
    { title: 'Mobile Workforce Solutions', description: 'Keep your team connected and productive, no matter where they are.' },
    { title: 'Network Security & Compliance', description: 'Ensure secure communications and meet regulatory requirements with ease.' },
];

const whyChooseUsItems = [
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: 'Blazing Fast Performance',
    description: 'Our infrastructure is optimized for speed, ensuring a seamless experience for your users.',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Rock-Solid Security',
    description: 'We take security seriously. Your data is protected with the latest encryption and security protocols.',
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: 'Actionable Analytics',
    description: 'Gain valuable insights into your operations with our comprehensive analytics and reporting tools.',
  },
];

const Solutions = () => {
  const { data: industries, isLoading, isError } = useSanityContent<Industry[]>('industry');

  if (isLoading) {
    return <SolutionsSkeleton />;
  }

  if (isError) {
    return <div>Error loading page.</div>;
  }

  return (
    <MainLayout>
      <div className="container-custom py-16">
        <div className="text-left mb-16">
          <h1 className="text-5xl font-bold tracking-tight">Our Solutions</h1>
        </div>

        <section id="tailored-solutions" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Tailored Solutions for Your Business</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive portfolio of solutions designed to optimize your operations, enhance customer engagement, and drive growth. Find the perfect fit for your specific business requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tailoredSolutions.map((solution, index) => (
              <Card key={index} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col justify-center items-center text-center p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <SolutionsByIndustry industries={industries || []} />

        <section id="why-choose-us" className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Why Choose Us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform is more than just a collection of features. It's a commitment to your success. Here's what sets us apart.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {whyChooseUsItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="cta" className="text-center py-24 bg-surface rounded-lg">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Ready to Transform Your Business Communications?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Get started with a free consultation and discover how our solutions can drive your business forward.
          </p>
          <Button asChild size="lg" variant="default">
            <Link to="/contact">Explore Solutions</Link>
          </Button>
        </section>
      </div>
    </MainLayout>
  );
};

export default Solutions;
