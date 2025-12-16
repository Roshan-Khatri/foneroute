
import { useParams, Navigate } from 'react-router-dom';
import { industries } from '@/content/industries';
import { MainLayout } from '@/components/layout/MainLayout';
import { PageHeader } from '@/components/layout/PageHeader';
import { CallToAction } from '@/components/layout/CallToAction';
import { Check } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SEO } from '@/components/layout/SEO';

export default function IndustryPage() {
  const { slug } = useParams();
  const industry = industries.find((ind) => ind.slug === slug);

  if (!industry) {
    return <Navigate to="/404" />;
  }

  const { title, hero, overview, features, benefits } = industry;

  return (
    <MainLayout>
      <SEO 
        title={`${hero.title} | FoneRoute`}
        description={hero.subtitle}
        keywords={[title, 'business communications', ...benefits]}
      />
      <PageHeader
        title={hero.title}
        subtitle={hero.subtitle}
        className="bg-gradient-to-r from-background to-secondary"
      />

      <section className="py-16 md:py-24">
        <div className="container-custom">
          {/* Overview Section */}
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-center mb-16 md:mb-24">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">A Communication Platform Built for {title}</h2>
              <p className="text-muted-foreground text-lg">{overview}</p>
            </div>
            <div className="bg-secondary/50 p-8 rounded-lg">
              <h3 className="text-xl font-bold font-poppins mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins">Core Features for Your Industry</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-left card-hover-animation">
                <CardHeader>
                  <CardTitle className='font-poppins text-xl'>{feature.title}</CardTitle>
                  <CardDescription className="pt-2">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Get Started?"
        subtitle={`Learn how FoneRoute can transform communication in the ${title} sector.`}
      />
    </MainLayout>
  );
}
