
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { Check, Phone, Users, TrendingUp, DollarSign } from 'lucide-react';

const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Ultimate Flexibility",
      description: "Manage your business phone system from anywhere with an internet connection. Perfect for remote teams and businesses on the go.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Cost Savings",
      description: "Eliminate the high costs of traditional hardware and maintenance. Enjoy predictable monthly billing with a feature-rich system.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Scalability on Demand",
      description: "Easily add or remove users and features as your business grows or changes, without the need for expensive hardware upgrades.",
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Enhanced Productivity",
      description: "Empower your team with advanced features like auto-attendants, call queues, and detailed analytics to work smarter.",
    },
];

const features = [
    {
      name: "Auto-Attendant & IVR",
      description: "Create a professional image with a virtual receptionist that directs callers to the right department or employee.",
    },
    {
      name: "Voicemail to Email",
      description: "Receive voicemail messages as audio files directly in your email inbox, so you never miss an important message.",
    },
    {
      name: "Call Forwarding",
      description: "Forward calls to any device, including mobile phones, to stay connected wherever you are.",
    },
    {
      name: "Conference Calling",
      description: "Host multi-participant conference calls with ease, connecting teams and clients from different locations.",
    },
    {
      name: "Detailed Call Analytics",
      description: "Gain insights into your call patterns, team performance, and customer interactions with our comprehensive analytics dashboard.",
    },
    {
      name: "CRM Integration",
      description: "Seamlessly integrate with popular CRM platforms to streamline your sales and support workflows.",
    },
];

const CloudPBXPage = () => {
  return (
    <main>
      <PageHeader
        title="Cloud PBX System"
        description="A flexible, scalable, and feature-rich cloud phone system for modern businesses."
        breadcrumb={{ 
            links: [
                { name: 'Home', url: '/' }, 
                { name: 'Solutions', url: '/solutions' }, 
                { name: 'Cloud PBX', url: '/solutions/cloud-pbx' }
            ]
        }}
      />

      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-transparent">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Our Cloud PBX?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Discover the advantages of a cloud-based phone system for your business.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-lg border bg-card p-6 shadow-sm card-hover-animation dark:bg-[#252525]">
                <div className="mb-4">{benefit.icon}</div>
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
                Everything you need to manage your business communications effectively.
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
            Get Started with Cloud PBX Today
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our team is ready to help you transition to a modern, flexible phone system.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CloudPBXPage;
