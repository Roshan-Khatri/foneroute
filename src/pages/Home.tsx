
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Phone, Zap, Shield, Users, BarChart3, Globe, ArrowRight, CheckCircle, Heart, Building, Scale, MessageSquare, Star, XCircle, TrendingUp, DollarSign, LifeBuoy } from 'lucide-react';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import AnimatedSection from '@/components/layout/AnimatedSection';
import { useFeaturedFeatures, useFeaturedSolutions } from '@/hooks/useSanityContent';
import { fallbackData } from '@/content/solutions';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useScrollSpy } from '@/context/ScrollSpyContext';
import HomeSkeleton from './HomeSkeleton';

const staticFeatures = [
  {
    icon: Phone,
    title: 'Contact Center Solutions',
    description: 'Advanced inbound and outbound contact center technology with intelligent routing and real-time analytics.'
  },
  // ...other features...
];

const allFeatures = [
  'User Management', 'Storage Solutions', 'Customer Support', 'Analytics & Reporting', 'Third-Party Integrations',
  'Security & Compliance', 'Automated Backups', 'API Access', 'Custom Branding',
];

const planFeatures: { [key: string]: string[] } = {
  Basic: ['User Management', 'Storage Solutions', 'Customer Support'],
  Pro: ['User Management', 'Storage Solutions', 'Customer Support', 'Analytics & Reporting', 'Third-Party Integrations'],
  Enterprise: allFeatures,
};

const trustedBy = [
    'TechCorp',
    'Innovate Inc.',
    'QuantumLeap',
    'Stellar Solutions',
    'Apex Enterprises',
];

function Home() {
  const { data: cmsFeatures, isLoading: featuresLoading, isError: featuresError } = useFeaturedFeatures();
  const { data: cmsSolutions, isLoading: solutionsLoading } = useFeaturedSolutions();
  const { setSections } = useScrollSpy();
  
  const isLoading = featuresLoading || solutionsLoading;

  useEffect(() => {
    const homeSections = [
      { id: 'introduction', label: 'Introduction' },
      { id: 'core-solutions', label: 'Core Solutions' },
      { id: 'features', label: 'Features' },
      { id: 'why-choose-us', label: 'Why Choose Us?' },
      { id: 'proven-results', label: 'Proven Results' },
      { id: 'our-values', label: 'Our Values' },
      { id: 'industry-solutions', label: 'Industry Solutions' },
      { id: 'testimonials', label: 'Testimonials' },
      { id: 'feature-comparison', label: 'Feature Comparison' },
      { id: 'faq', label: 'FAQ' },
    ];
    setSections(homeSections);
  }, [setSections]);

  const staticSolutions = [
    {
      title: 'Contact Center',
      description: 'Complete contact center solution with omnichannel support',
      href: '/solutions/contact-center'
    },
    {
      title: 'Auto Dialer',
      description: 'Automated dialing to maximize agent productivity',
      href: '/solutions/auto-dialer'
    },
    {
      title: 'Cloud PBX',
      description: 'Enterprise phone system in the cloud',
      href: '/solutions/cloud-pbx'
    },
    {
      title: 'Unified Communications',
      description: 'All-in-one communication and collaboration platform',
      href: '/solutions/unified-communications'
    }
  ];

  const iconFor = (label: string) => {
    const key = label.toLowerCase();
    if (key.includes('contact')) return Phone;
    if (key.includes('dialer')) return Zap;
    if (key.includes('pbx') || key.includes('cloud')) return Shield;
    if (key.includes('unified') || key.includes('collab')) return Users;
    if (key.includes('analytics') || key.includes('report')) return BarChart3;
    if (key.includes('global') || key.includes('international')) return Globe;
    return Phone;
  };

  if (featuresError) {
    console.warn('Failed to load features from CMS', featuresError);
  }

  const features = (cmsFeatures && cmsFeatures.length > 0)
    ? cmsFeatures.slice(0, 6).map(f => ({
        icon: iconFor(f.title),
        title: f.title,
        description: f.description ?? '',
      }))
    : staticFeatures;

  const solutions = (cmsSolutions && cmsSolutions.length > 0)
    ? cmsSolutions.slice(0, 4).map(s => ({
        title: s.title,
        description: s.description ?? '',
        href: s.slug?.current ? `/solutions/${s.slug.current}` : '#',
      }))
    : staticSolutions;

  const benefits = [
    'Increase productivity by up to 300%',
    'Reduce operational costs by 40%',
    '99.9% uptime guarantee',
    '24/7 expert support',
    'Enterprise-grade security',
    'Seamless integrations'
  ];

  const whyChooseUs = [
    { icon: TrendingUp, title: 'Increase Productivity', description: 'Boost your team’s efficiency by up to 300% with our streamlined communication tools.' },
    { icon: DollarSign, title: 'Reduce Costs', description: 'Save up to 40% on operational costs with our scalable and efficient solutions.' },
    { icon: LifeBuoy, title: 'Expert Support', description: 'Our dedicated team is available 24/7 to help you with any issues.' },
  ];

  const values = [
    { icon: Heart, title: 'Customer First', description: 'Our customers are at the heart of everything we do.' },
    { icon: Zap, title: 'Innovation', description: 'We constantly innovate to provide cutting-edge solutions.' },
    { icon: Shield, title: 'Integrity', description: 'We operate with transparency and honesty.' },
  ];

  const industries = [
    { icon: Building, title: 'Real Estate', description: 'Streamline communication with clients and agents.' },
    { icon: Heart, title: 'Healthcare', description: 'Secure and reliable communication for patient care.' },
    { icon: Scale, title: 'Legal', description: 'Maintain client confidentiality with secure lines.' },
  ];

  const testimonials = Object.values(fallbackData).flatMap(solution => solution.testimonials || []);

  const faqs = [
    { question: 'What is your uptime guarantee?', answer: 'We guarantee 99.9% uptime for all our services.' },
    { question: 'Can I integrate with my existing CRM?', answer: 'Yes, our solutions integrate with most major CRMs.' },
    { question: 'Do you offer 24/7 support?', answer: 'Yes, our expert support team is available 24/7.' },
  ];

  const plans = [
    { name: 'Basic', price: 29, features: ['5 Users', '10GB Storage', 'Basic Support'] },
    { name: 'Pro', price: 99, features: ['20 Users', '50GB Storage', 'Priority Support', 'Advanced Analytics'] },
    { name: 'Enterprise', price: 299, features: ['Unlimited Users', '200GB Storage', '24/7 Support', 'Custom Integrations'] },
  ];

  const coreSolutions = [
    fallbackData['contact-center'],
    fallbackData['predictive-dialer'],
    fallbackData['cloud-pbx'],
  ];

  if (isLoading) {
    return <HomeSkeleton />;
  }
  
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section id="introduction" className="relative pt-20 pb-10 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-background">
        <AnimatedBackground />
        <div className="relative z-10 container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <AnimatedSection animation="fade-in-up">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-poppins font-extrabold leading-tight mb-6 text-foreground">
                  Future-Ready Business Communications
                </h1>
              </AnimatedSection>
              <AnimatedSection animation="fade-in-up" delay="200ms">
                <p className="text-base md:text-lg leading-relaxed mb-8 text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Streamline your business with our unified suite of communication tools. Elevate productivity, enhance customer experiences, and scale with confidence. Our platform provides reliability, security, and advanced features for the modern enterprise.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="zoom-in" delay="400ms">
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Button asChild size="lg">
                    <Link to="/contact">Request a Demo</Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/features">Explore Features</Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
            <div className="block hero-image-container">
              <AnimatedSection animation="slide-in-from-right" delay="300ms">
                <img src="/hero-image.png" alt="Business Communications Platform" />
              </AnimatedSection>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="animate-fade-in-up animation-delay-600">
              <p className="text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-4">Trusted by industry leaders</p>
            </div>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              {trustedBy.map((company, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${700 + index * 100}ms` }}>
                  <span className="text-lg font-medium text-muted-foreground">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <AnimatedSection id="core-solutions" animation="fade-in-up" className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-foreground mb-4">
              Our Core Solutions
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our key solutions designed to elevate your business communications.
            </p>
          </div>
          <Tabs defaultValue={coreSolutions[0]?.title || ''} className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-12 sm:gap-x-2 bg-background rounded-lg p-2">
              {coreSolutions.map((solution) => (
                <TabsTrigger key={solution?.title} value={solution?.title || ''} className="whitespace-normal h-auto py-2 sm:h-10 text-base font-semibold">{solution?.title}</TabsTrigger>
              ))}
            </TabsList>
            {coreSolutions.map((solution) => (
              <TabsContent key={solution?.title} value={solution?.title || ''}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-12">
                  <div>
                    <h3 className="text-3xl font-poppins font-bold text-foreground mb-4">{solution?.title}</h3>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{solution?.description}</p>
                    <div className="space-y-4 mb-8">
                      {solution?.features?.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                          <span className="text-foreground font-medium text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={`/solutions/${fallbackData[solution?.title?.toLowerCase().replace(/ /g, '-') as keyof typeof fallbackData]?.slug?.current}`}>
                      <Button variant="outline" size="lg">Learn More <ArrowRight className="ml-2 h-5 w-5" /></Button>
                    </Link>
                  </div>
                  <div className="block">
                    <img 
                      src={solution?.title === 'Contact Center Solution' 
                        ? '/contact-center-solution-image.png' 
                        : solution?.title === 'Predictive Dialer Solution'
                        ? '/predictive-dialer-solution-image.png'
                        : `/${solution?.title?.toLowerCase().replace(/ /g, '-')}-image.png`}
                      alt={`${solution?.title} illustration`}
                      className="rounded-xl shadow-2xl core-solution-image" 
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </AnimatedSection>

      {/* Features Highlight */}
      <AnimatedSection id="features" animation="zoom-in" className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuresLoading ? (
              [...Array(3)].map((_, i) => (
                <Card key={i} className="card-professional">
                  <CardContent className="p-8">
                    <Skeleton className="h-12 w-12 mb-4" />
                    <Skeleton className="h-6 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6 mt-2" />
                  </CardContent>
                </Card>
              ))
            ) : (
              features.map((feature, index) => (
                <Card key={index} className="card-professional card-hover">
                  <CardContent className="p-8">
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection id="why-choose-us" animation="flip-down" className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the benefits of partnering with a leader in business communications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="card-professional text-center">
                <CardContent className="p-8">
                  <item.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Proven Results Section */}
      <AnimatedSection id="proven-results" animation="slide-in-from-left" className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-6">
                Proven Results That Drive Success
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join thousands of businesses that have transformed their operations with our telecommunications solutions. See measurable improvements in productivity, cost savings, and customer satisfaction.
              </p>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button size="lg" className="btn-hero">
                  Start Your Transformation
                </Button>
              </Link>
            </div>
            <div className="space-y-6">
              <Card className="card-professional p-8 text-center">
                <h3 className="text-4xl font-poppins font-bold text-primary mb-2">300%</h3>
                <p className="text-muted-foreground">Increase in Productivity</p>
              </Card>
              <div className="grid grid-cols-2 gap-6">
                <Card className="card-professional p-6 text-center">
                  <h3 className="text-2xl font-poppins font-bold text-accent mb-2">99.9%</h3>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                </Card>
                <Card className="card-professional p-6 text-center">
                  <h3 className="text-2xl font-poppins font-bold text-accent mb-2">40%</h3>
                  <p className="text-sm text-muted-foreground">Cost Reduction</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Values Section */}
      <AnimatedSection id="our-values" animation="zoom-in" className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our business and our relationships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-professional">
                <CardContent className="p-8 text-center">
                  <value.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Industry Solutions Section */}
      <AnimatedSection id="industry-solutions" animation="slide-in-from-left" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Solutions for Your Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored telecommunications solutions for various sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="card-professional card-hover">
                <CardContent className="p-8 text-center">
                  <industry.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection id="testimonials" animation="flip-down" className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world success stories from businesses like yours.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index} className="card-professional">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-accent fill-current" />)}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{testimonial}</p>
                  <p className="font-semibold">- Satisfied Customer</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Feature Comparison Section */}
      <AnimatedSection id="feature-comparison" animation="fade-in-up" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Feature Comparison
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A detailed look at what each plan offers to help you decide.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="p-4 border-b border-border text-lg font-semibold">Features</th>
                  {plans.map(plan => <th key={plan.name} className="p-4 border-b border-border text-center text-lg font-semibold">{plan.name}</th>)}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map(feature => (
                  <tr key={feature}>
                    <td className="p-4 border-b border-border font-medium">{feature}</td>
                    {plans.map(plan => (
                      <td key={plan.name} className="p-4 border-b border-border text-center">
                        {(planFeatures[plan.name as keyof typeof planFeatures] || []).includes(feature) ? 
                          <CheckCircle className="h-6 w-6 text-accent mx-auto" /> : 
                          <XCircle className="h-6 w-6 text-muted-foreground/50 mx-auto" />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  {plans.map(plan => (
                    <td key={plan.name} className="p-4 text-center">
                       <Button asChild className="w-full mt-4">
                        <Link to="/contact">Choose Plan</Link>
                      </Button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection id="faq" animation="fade-in-up" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Answers to common questions about our services.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default Home;
