
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featureSections = [
  {
    title: 'Calling Features',
    description: 'Explore our comprehensive set of calling features designed to enhance your business communication, including crystal-clear voice quality and advanced call handling.',
    link: '/features/calling'
  },
  {
    title: 'Call Management',
    description: 'Intelligent call handling and routing for every business. Automate call distribution, manage queues, and create a seamless caller experience.',
    link: '/features/call-management'
  },
  {
    title: 'Call Reporting',
    description: 'Gain deep insights into call performance with detailed reporting and analytics. Track key metrics to optimize your team\'s productivity and customer service.',
    link: '/features/call-reporting'
  }
];

const ContactCenterFeatures = () => {
  return (
    <div>
      <PageHeader
        title="Contact Center Features"
        subtitle="Our Contact Center solution is a suite of powerful tools. Explore the categories below to learn more about each feature set."
        breadcrumb="Home / Features / Contact Center"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureSections.map((feature, index) => (
              <Link to={feature.link} key={index} className="card-hover-parent">
                <Card className="h-full card-professional card-hover">
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
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
    </div>
  );
};

export default ContactCenterFeatures;
