
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowRight, Zap, Shield, BarChart } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import AllSolutionsSkeleton from './AllSolutionsSkeleton';

const solutionsItems = [
    { title: 'Contact Center Solution', href: '/solutions/contact-center', description: 'Omnichannel platform for customer engagement.' },
    { title: 'Auto Dialer', href: '/solutions/auto-dialer', description: 'Automated dialing for maximum productivity.' },
    { title: 'Power Dialer', href: '/solutions/power-dialer', description: 'High-speed dialing for sales teams.' },
    { title: 'Predictive Dialer', href: '/solutions/predictive-dialer', description: 'AI-powered dialing for maximum efficiency.' },
    { title: 'Cloud PBX', href: '/solutions/cloud-pbx', description: 'Flexible, scalable business phone system.' },
    { title: 'Unified Communications', href: '/solutions/unified-communications', description: 'All-in-one platform for collaboration.' },
  ];

const highlightItems = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
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

const AllSolutions = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <AllSolutionsSkeleton />;
  }

  return (
    <div>
      <PageHeader
        title="Our Solutions"
        description="Explore our comprehensive suite of business communication solutions."
      />

      <section className="section-padding bg-background" style={{ scrollSnapAlign: 'start' }}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Foundation for Your Success</h2>
            <p className="text-muted-foreground text-lg">
              We provide a comprehensive suite of features designed to empower your business. From seamless communication to powerful analytics, our platform is built to help you thrive in a competitive landscape.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-surface" style={{ scrollSnapAlign: 'start' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsItems.map((solution, index) => (
              <Link to={solution.href} key={index} className="card-hover-parent">
                <Card className="h-full card-professional card-hover">
                  <CardHeader>
                    <CardTitle>{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{solution.description}</p>
                    <div className="flex items-center text-primary font-medium">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background" style={{ scrollSnapAlign: 'start' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our platform is more than just a collection of features. It's a commitment to your success. Here's what sets us apart.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {highlightItems.map((item, index) => (
              <div key={index}>
                <div className="inline-block bg-primary-light p-4 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AllSolutions;
