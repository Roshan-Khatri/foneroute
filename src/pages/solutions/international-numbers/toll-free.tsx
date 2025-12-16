
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { Check } from 'lucide-react';

const benefits = [
    {
      title: "Enhance Customer Trust",
      description: "A toll-free number gives your business a professional image and builds credibility with your customers.",
    },
    {
      title: "Increase Accessibility",
      description: "Make it easy for customers to reach you from anywhere without incurring call charges, encouraging more inquiries.",
    },
    {
      title: "Boost Marketing Efforts",
      description: "Use memorable vanity numbers in your marketing campaigns to improve brand recall and increase response rates.",
    },
    {
      title: "Expand Your Reach",
      description: "Attract customers from outside your local area, creating a national or even international presence for your business.",
    },
];

const features = [
    {
      name: "Vanity Numbers",
      description: "Choose a custom, easy-to-remember number that reflects your brand (e.g., 1-800-FLOWERS).",
    },
    {
      name: "Call Forwarding",
      description: "Route incoming calls to any device or location—office, mobile, or home—so you never miss an important call.",
    },
    {
      name: "IVR & Auto-Attendant",
      description: "Set up a professional greeting and menu to direct callers to the right department or agent automatically.",
    },
    {
      name: "Call Analytics",
      description: "Track call volumes, durations, and geographic locations to gain valuable insights into your customer interactions.",
    },
    {
      name: "Global Coverage",
      description: "Get toll-free numbers for over 100 countries to provide seamless support for your international customers.",
    },
    {
      name: "CRM Integration",
      description: "Seamlessly integrate with your existing CRM to automatically log calls and manage customer data efficiently.",
    },
];


const TollFreePage = () => {
  return (
    <main className="pt-16">
      <PageHeader
        title="Toll-Free Numbers"
        breadcrumb={{
          links: [
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
            { name: 'International Numbers', url: '/features/international-numbers' },
            { name: 'Toll-Free', url: '/solutions/international-numbers/toll-free' }
          ]
        }}
        description="Establish a professional presence and make it free for customers to reach you, no matter where they are. Our toll-free numbers are packed with features to enhance your business communications."
      />

      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800/20">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Our Toll-Free Numbers?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Give your customers the convenience of calling you for free while elevating your brand's image and reach.
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Key Features</h2>
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
            Ready to Get Your Toll-Free Number?
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

export default TollFreePage;
