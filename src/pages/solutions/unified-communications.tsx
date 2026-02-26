
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { Check, Users, Shield, Zap, TrendingUp } from 'lucide-react';

const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Boost Productivity & Collaboration",
      description: "With all communication tools in one place, your team can collaborate more effectively and make faster decisions.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Simplify IT Management",
      description: "A single, cloud-based platform is easier to manage, maintain, and scale than multiple disparate systems.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Reduce Communication Costs",
      description: "Consolidate your communication expenses into a single, predictable monthly subscription and reduce reliance on multiple vendors.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Enhance the Employee Experience",
      description: "Empower your employees with the flexibility to communicate and collaborate from anywhere, on any device, improving job satisfaction and retention.",
    },
];

const features = [
    {
      name: "HD Voice & Video Calling",
      description: "Make and receive high-definition voice and video calls from your desk phone, computer, or mobile device.",
    },
    {
      name: "Team Chat & Instant Messaging",
      description: "Create private or public channels for team discussions, share files, and get instant feedback with real-time messaging.",
    },
    {
      name: "Video Conferencing & Webinars",
      description: "Host online meetings with screen sharing, virtual backgrounds, and recording capabilities to connect with your team and customers.",
    },
    {
      name: "Presence Status",
      description: "See the real-time availability of your colleagues—whether they are on a call, in a meeting, or available—to reduce interruptions.",
    },
    {
      name: "One Unified Application",
      description: "Access all your communication tools—voice, video, and chat—from a single, easy-to-use application on any device.",
    },
    {
      name: "Seamless Integration with Business Apps",
      description: "Integrate with popular tools like Google Workspace, Microsoft 365, and your CRM to streamline workflows and boost productivity.",
    },
];

const UnifiedCommunicationsPage = () => {
  return (
    <main>
      <PageHeader
        title="Unify Your Business Communications"
        description="Integrate voice, video, messaging, and collaboration tools into one seamless experience to boost productivity and simplify communication."
        breadcrumb={{ 
            links: [
                { name: 'Home', url: '/' }, 
                { name: 'Solutions', url: '/solutions' }, 
                { name: 'Unified Communications', url: '/solutions/unified-communications' }
            ]
        }}
      />

      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-transparent">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Unified Communications?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Bring your team together with a single, powerful platform.
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
                All the tools you need to communicate and collaborate effectively.
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
            Ready to Unify Your Communications?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let us show you how a unified platform can transform your business.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UnifiedCommunicationsPage;
