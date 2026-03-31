
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { Check } from 'lucide-react';

const benefits = [
    {
      title: "Establish a Local Presence",
      description: "Connect with customers in specific regions by using local numbers, making your business feel more accessible and familiar.",
    },
    {
      title: "Increase Trust and Credibility",
      description: "Customers are more likely to answer calls from local numbers, which can significantly boost your connection rates.",
    },
    {
      title: "Cost-Effective Solution",
      description: "Offer a local point of contact without the expense of a physical office, making it an affordable way to expand.",
    },
    {
      title: "Enhance Local Marketing",
      description: "Use local numbers in your targeted marketing campaigns to improve engagement and attract area-specific customers.",
    },
];

const features = [
    {
      name: "Wide Selection of Numbers",
      description: "Choose from a vast inventory of local numbers in cities and countries worldwide to find the perfect fit for your business.",
    },
    {
      name: "Call Forwarding",
      description: "Direct calls from your local numbers to any device, ensuring you can manage communications from anywhere.",
    },
    {
      name: "Voicemail to Email",
      description: "Receive voicemail transcriptions directly in your inbox, so you can stay on top of messages without interruption.",
    },
    {
      name: "Advanced Call Routing",
      description: "Customize how incoming calls are handled with options for time-based routing, simultaneous ringing, and more.",
    },
    {
      name: "Real-Time Analytics",
      description: "Monitor call activity and track performance with detailed analytics to make informed business decisions.",
    },
    {
      name: "No-Fuss Setup",
      description: "Get your local numbers up and running in minutes with our simple and intuitive setup process.",
    },
];

const LocalNumbersPage = () => {
  return (
    <main className="pt-16">
      <PageHeader
        title="Local Numbers"
        breadcrumb={{
          links: [
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
            { name: 'International Numbers', url: '/features/international-numbers' },
            { name: 'Local Numbers', url: '/solutions/international-numbers/local-numbers' }
          ]
        }}
        description="Connect with customers on a local level, no matter where you are. Our local numbers help you build a trusted, familiar presence in any market, boosting engagement and sales."
      />

      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800/20">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Use Local Numbers?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Build trust and connect with communities by providing a familiar, local point of contact.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-lg border bg-background p-6 shadow-sm card-hover-animation">
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Packed with Powerful Features</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to manage your calls and present a professional image.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{feature.name}</h3>
                  <p className="mt-1 text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-primary/5 dark:bg-primary/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Find Your Local Number Today
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our team is ready to help you choose the perfect number and set up your service.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LocalNumbersPage;
