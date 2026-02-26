
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { Check } from 'lucide-react';

const benefits = [
    {
      title: "Establish a Local Presence",
      description: "Connect with customers in specific cities and regions by using a phone number with a local area code they recognize and trust.",
    },
    {
      title: "Build Customer Trust",
      description: "A local number signals to customers that you have a presence in their community, making your business more approachable and credible.",
    },
    {
      title: "Improve Local Marketing",
      description: "Boost the effectiveness of your local advertising campaigns by using a number that resonates with your target audience.",
    },
    {
      title: "Cost-Effective for Callers",
      description: "Allow your local customers to call you at standard rates, eliminating the barrier of long-distance charges.",
    },
];

const features = [
    {
      name: "Vast Number Inventory",
      description: "Choose from a wide selection of local numbers across thousands of cities and countries worldwide.",
    },
    {
      name: "Global Call Forwarding",
      description: "Forward calls from your local number to any phone, anywhere in the world, ensuring you never miss a call.",
    },
    {
      name: "Advanced Call Routing",
      description: "Utilize IVR, time-of-day routing, and geographic routing to manage incoming calls efficiently.",
    },
    {
      name: "Voicemail to Email",
      description: "Receive voicemails directly in your email inbox, allowing you to stay organized and respond quickly.",
    },
    {
      name: "Real-Time Analytics",
      description: "Monitor call activity, track marketing campaign performance, and gain insights into your customer interactions.",
    },
    {
      name: "SMS/MMS Enabled",
      description: "Engage with your customers through text messaging for appointments, reminders, and promotions.",
    },
];

const LocalPage = () => {
  return (
    <main>
      <PageHeader
        title="Local Numbers"
        breadcrumb={{
          links: [
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
            { name: 'International Numbers', url: '/features/international-numbers' },
            { name: 'Local', url: '/solutions/international-numbers/local' }
          ]
        }}
        description="Establish a local presence in any city or country with our vast inventory of local numbers. Build trust and connect with your community, no matter where you are."
      />

      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-transparent">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Our Local Numbers?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Connect with your customers on a local level, building trust and a strong community presence.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-lg border bg-card p-6 shadow-sm card-hover-animation dark:bg-[#252525]">
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black dark:text-white">Key Features</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Powerful features to help you manage your local communications effectively.
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
            Our team is here to help you find the right local number to grow your business.
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

export default LocalPage;
