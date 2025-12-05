
import { Link, useLocation } from 'react-router-dom';
import {
  Cloud,
  Users,
  MessageCircle,
  BarChart,
  Smartphone,
  Shield,
  HeartPulse,
  Landmark,
  BookOpen,
  Cpu,
  Store,
  Factory,
  ConciergeBell,
  Gauge,
  Lock,
  PieChart,
  Server,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageHeader from '@/components/layout/PageHeader';
import AnimatedSection from '@/components/layout/AnimatedSection';
import { useEffect } from 'react';

const tailoredSolutions = [
  {
    icon: <Cloud className="w-8 h-8 text-primary mb-4" />,
    title: 'Cloud Communications',
    description:
      'Leverage our robust, scalable cloud infrastructure to ensure seamless communication and collaboration across your organization, anytime, anywhere.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary mb-4" />,
    title: 'Customer Engagement Platforms',
    description:
      'Build stronger relationships with your customers through our integrated engagement platforms, featuring CRM, live chat, and automated workflows.',
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-primary mb-4" />,
    title: 'Unified Messaging',
    description:
      'Consolidate all your communication channels—voice, video, and text—into a single, intuitive interface to streamline interactions.',
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary mb-4" />,
    title: 'AI-Powered Analytics',
    description:
      'Gain deep insights into your communication data with our advanced analytics tools. Track performance, identify trends, and make data-driven decisions.',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary mb-4" />,
    title: 'Mobile Workforce Solutions',
    description:
      'Empower your remote and mobile teams with secure, reliable communication tools that keep them connected and productive on the go.',
  },
  {
    icon: <Shield className="w-8 h-8 text-primary mb-4" />,
    title: 'Network Security & Compliance',
    description:
      'Protect your sensitive data with our multi-layered security protocols and ensure you meet industry-specific compliance standards like HIPAA and GDPR.',
  },
];

const industries = [
  {
    icon: <HeartPulse className="w-10 h-10 text-primary" />,
    title: 'Healthcare',
    description: 'Secure, compliant communication solutions for modern healthcare providers.',
    links: [
      { title: 'HIPAA-Compliant Messaging', href: '#' },
      { title: 'Telehealth Platforms', href: '#' },
      { title: 'Patient Engagement', href: '#' },
    ],
  },
  {
    icon: <Landmark className="w-10 h-10 text-primary" />,
    title: 'Finance',
    description: 'Reliable and secure financial communications to build client trust.',
    links: [
      { title: 'Encrypted Communications', href: '#' },
      { title: 'Compliance Recording', href: '#' },
      { title: 'Trading Floor Systems', href: '#' },
    ],
  },
  {
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    title: 'Education',
    description: 'Connecting campuses and enabling remote learning with unified tools.',
    links: [
      { title: 'Campus-Wide Alerts', href: '#' },
      { title: 'Virtual Classrooms', href: '#' },
      { title: 'Remote Administration', href: '#' },
    ],
  },
  {
    icon: <Cpu className="w-10 h-10 text-primary" />,
    title: 'Technology',
    description: 'Scalable solutions for fast-growing tech companies and startups.',
    links: [
      { title: 'Agile Development Support', href: '#' },
      { title: 'Global Team Collaboration', href: '#' },
      { title: 'Integrated DevOps Tools', href: '#' },
    ],
  },
  {
    icon: <Store className="w-10 h-10 text-primary" />,
    title: 'Retail',
    description: 'Enhance customer experience from the storefront to the back office.',
    links: [
      { title: 'In-Store Communications', href: '#' },
      { title: 'Supply Chain Coordination', href: '#' },
      { title: 'Omnichannel Support', href: '#' },
    ],
  },
  {
    icon: <Factory className="w-10 h-10 text-primary" />,
    title: 'Manufacturing',
    description: 'Streamline operations from the factory floor to the supply chain.',
    links: [
      { title: 'Factory Floor Comms', href: '#' },
      { title: 'Logistics Tracking', href: '#' },
      { title: 'Worker Safety Alerts', href: '#' },
    ],
  },
  {
    icon: <ConciergeBell className="w-10 h-10 text-primary" />,
    title: 'Hospitality',
    description: 'Deliver exceptional guest experiences with integrated solutions.',
    links: [
        { title: 'Guest Services', href: '#' },
        { title: 'Staff Coordination', href: '#' },
        { title: 'Event Management', href: '#' },
    ],
  },
];

const whyChooseUsFeatures = [
  {
    icon: <Gauge className="w-10 h-10 text-primary" />,
    title: 'Blazing Fast Performance',
    description: 'Our infrastructure is optimized for speed, ensuring your communications are instant and reliable, every time.',
  },
  {
    icon: <Lock className="w-10 h-10 text-primary" />,
    title: 'Rock-Solid Security',
    description: 'With end-to-end encryption and proactive threat monitoring, your data is always protected.',
  },
  {
    icon: <PieChart className="w-10 h-10 text-primary" />,
    title: 'Actionable Analytics',
    description: 'Turn data into decisions with our intuitive analytics dashboard and customizable reports.',
  },
  {
    icon: <Server className="w-10 h-10 text-primary" />,
    title: 'Scalable Infrastructure',
    description: 'From startups to enterprise-level corporations, our solutions scale with your business needs.',
  },
];

const Solutions = () => {
  const lastIndustry = industries[industries.length - 1];
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);


  return (
    <div className="bg-background text-foreground">
      <AnimatedSection>
        <PageHeader title="Our Solutions" subtitle="" />
      </AnimatedSection>

      {/* Tailored Solutions Section */}
      <AnimatedSection>
        <section className="py-16 sm:py-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tailored Solutions for Your Business</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                We offer a comprehensive portfolio of solutions designed to optimize your operations, enhance customer engagement, and drive growth. Find the perfect fit for your specific business requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {tailoredSolutions.map((solution) => (
                <Card key={solution.title} className="text-center card-hover-animation">
                  <CardHeader>
                    <div className="flex justify-center">{solution.icon}</div>
                    <CardTitle>{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Solutions by Industry Section */}
      <AnimatedSection>
        <section id="industries" className="py-16 sm:py-20 bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Solutions by Industry</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We provide industry-specific solutions to meet your unique challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {industries.slice(0, -1).map((industry) => (
                <Card key={industry.title} className="flex flex-col card-hover-animation">
                  <CardHeader className="items-center text-center">
                    {industry.icon}
                    <CardTitle className="mt-4">{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-muted-foreground text-center mb-4">{industry.description}</p>
                    <div className="space-y-2">
                      {industry.links.map((link) => (
                        <Link to={link.href} key={link.title} className="block text-sm font-medium text-primary hover:underline">
                          {link.title}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-auto pt-4 text-center">
                      <Button asChild size="sm">
                        <Link to="/solutions">Explore Solutions</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
                <div className="w-full lg:w-1/3 sm:w-1/2">
                    <Card key={lastIndustry.title} className="flex flex-col h-full card-hover-animation">
                        <CardHeader className="items-center text-center">
                            {lastIndustry.icon}
                            <CardTitle className="mt-4">{lastIndustry.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col">
                            <p className="text-muted-foreground text-center mb-4">{lastIndustry.description}</p>
                            <div className="space-y-2">
                                {lastIndustry.links.map((link) => (
                                <Link to={link.href} key={link.title} className="block text-sm font-medium text-primary hover:underline">
                                    {link.title}
                                </Link>
                                ))}
                            </div>
                            <div className="mt-auto pt-4 text-center">
                                <Button asChild size="sm">
                                <Link to="/solutions">Explore Solutions</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      {/* Why Choose Us Section */}
      <AnimatedSection>
        <section className="py-16 sm:py-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us?</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {whyChooseUsFeatures.map((feature) => (
                <div key={feature.title} className="text-center card-hover-animation">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Solutions;
