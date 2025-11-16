
import { useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import {
  Phone, Mail, MapPin, MessageSquare
} from 'lucide-react';
import { useSolutions, useSiteSettings } from '@/hooks/useSanityContent';
import type { Solution } from '@/sanity/types';
import PortableText from '@/components/PortableText';
import { ContactForm } from '@/components/ContactForm';
import { ContactInfo } from '@/components/ContactInfo';
import { solutionSlugs, fallbackData, labelMap } from '@/content/solutions';
import SolutionsSkeleton from './solutions/SolutionsSkeleton';
import AnimatedSection from '@/components/layout/AnimatedSection';
import ScrollSpySidebar from '@/components/layout/ScrollSpySidebar';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useIsMobile } from '@/hooks/use-mobile';

function Solutions() {
  const { data: allSolutions, isLoading: solutionsLoading, isError: solutionsError } = useSolutions();
  const { data: siteSettings, isLoading: settingsLoading, isError: settingsError } = useSiteSettings();
  const location = useLocation();
  const isMobile = useIsMobile();

  const availableSolutions = useMemo(() => {
    return solutionSlugs.filter(slug =>
      (allSolutions?.some(s => s.slug?.current === slug)) || fallbackData[slug]
    );
  }, [allSolutions]);

  const sectionIds = useMemo(() => availableSolutions, [availableSolutions]);
  const { activeId, setActiveId } = useScrollSpy(sectionIds, { rootMargin: '0px 0px -40% 0px' });

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && sectionIds.includes(hash)) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveId(hash);
      }
    }
  }, [location.hash, sectionIds, setActiveId]);

  if (solutionsError) console.warn('Failed to load solutions from CMS', solutionsError);
  if (settingsError) console.warn('Failed to load site settings from CMS', settingsError);

  const getSolutionData = (slug: string): Partial<Solution> | null => {
    const solutionFromCMS = allSolutions?.find(s => s.slug?.current === slug);
    if (solutionFromCMS) return solutionFromCMS;
    if (fallbackData[slug]) return fallbackData[slug];
    return null;
  };

  const offices = useMemo(() => {
    if (!siteSettings?.officeLocations?.length) {
      return [
        { city: 'New York', address: '123 Business Ave, Suite 100', phone: '+1 (555) 123-4567', hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST' },
        { city: 'San Francisco', address: '456 Tech Street, Floor 15', phone: '+1 (555) 987-6543', hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST' },
        { city: 'London', address: '789 Communication Blvd', phone: '+44 20 1234 5678', hours: 'Mon-Fri: 9:00 AM - 5:00 PM GMT' }
      ];
    }
    return siteSettings.officeLocations.map(office => ({
      city: office.city || '',
      address: office.address || '',
      phone: office.phone || '',
      hours: office.hours || '',
    }));
  }, [siteSettings]);

  const primaryOffice = offices[0];

  const contactInfo = useMemo(() => [
    { icon: Phone, title: 'Sales', details: siteSettings?.primaryPhone || primaryOffice?.phone || '+1 (555) 123-4567', description: 'Speak with our sales team' },
    { icon: MessageSquare, title: siteSettings?.supportPhone ? 'Support' : 'Support Email', details: siteSettings?.supportPhone || siteSettings?.supportEmail || '+1 (555) 123-4568', description: siteSettings?.supportPhone ? '24/7 technical support' : 'Contact our support team by email' },
    { icon: Mail, title: 'Email', details: siteSettings?.primaryEmail || 'info@foneroute.com', description: 'General inquiries' },
    { icon: MapPin, title: 'Address', details: primaryOffice?.address || '123 Business Ave, Tech City, TC 12345', description: 'Visit our headquarters' },
  ], [siteSettings, primaryOffice]);
  
  const faqs = useMemo(() => [
    { question: "How quickly can we get started?", answer: "Most implementations can begin within 24-48 hours of contract signing, with full deployment typically completed within 1-2 weeks." },
    { question: "Do you offer 24/7 support?", answer: "Yes, we provide round-the-clock technical support and customer service to ensure your communications never go down." },
    { question: "Can you integrate with our existing systems?", answer: "Absolutely. Our solutions integrate with most CRM, helpdesk, and business applications through APIs and pre-built connectors." },
    { question: "What's included in the setup?", answer: "We provide complete setup, configuration, training, and ongoing support. No hidden fees or additional charges for standard implementation." }
  ], []);

  const sidebarNavItems = availableSolutions.map(slug => ({
    to: slug,
    label: getSolutionData(slug)?.title || labelMap[slug] || 'Unknown Solution'
  }));

  if (solutionsLoading || settingsLoading) {
    return <SolutionsSkeleton />;
  }

  return (
    <div>
      <PageHeader
        title="Our Solutions"
        subtitle="Comprehensive telecommunications solutions designed to transform your business communications and drive growth"
      />
      <div className="container-custom grid grid-cols-1 lg:grid-cols-4 gap-8 py-8">
        <aside className={`lg:col-span-1 lg:sticky self-start ${isMobile ? 'top-[60px]' : 'top-24'}`}>
          <ScrollSpySidebar items={sidebarNavItems} activeId={activeId} />
        </aside>

        <main className="lg:col-span-3 space-y-16">
          {availableSolutions.map((slug, index) => {
            const s = getSolutionData(slug);
            if (!s) return null;

            return (
              <AnimatedSection key={slug} id={slug} animation="fade-in-up" delay={`${index * 100}ms`}>
                <div className="max-w-4xl mx-auto mb-12">
                  <h2 className="text-3xl font-bold mb-4">{s.title}</h2>
                  <PortableText value={s.longDescription ?? []} className="prose prose-lg max-w-none" />
                </div>

                <div className="section-padding bg-surface rounded-lg">
                  <div className="container-custom">
                    <h3 className="text-3xl font-bold text-center mb-8">Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {(s.features ?? []).map((f, i) => (
                        <Card key={i} className="card-professional card-hover">
                          <CardContent className="p-6 font-semibold text-foreground">{f}</CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="section-padding">
                  <div className="container-custom max-w-3xl">
                    <h3 className="text-2xl font-bold mb-4">Business Benefits</h3>
                    <ul className="list-disc pl-6 text-lg space-y-2">
                      {(s.benefits ?? []).map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                </div>
                
                {s.relatedSolutions && s.relatedSolutions.length > 0 && (
                  <div className="section-padding bg-background">
                    <div className="container-custom">
                      <h3 className="text-2xl font-bold mb-4">Related Solutions</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {s.relatedSolutions
                          .filter(rel => rel.slug && availableSolutions.includes(rel.slug.current))
                          .map((rel, i) => (
                            <a key={i} href={`#${rel.slug.current}`} className="block">
                              <Card className="card-professional card-hover">
                                <CardContent className="p-4 font-semibold text-primary">{rel.title}</CardContent>
                              </Card>
                            </a>
                          ))}
                      </div>
                    </div>
                  </div>
                )}
              </AnimatedSection>
            );
          })}
          
          <AnimatedSection id="contact" animation="fade-in-up">
            <div className="section-padding bg-surface rounded-lg">
              <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <ContactForm solution="general" />
                  <ContactInfo contactInfo={contactInfo} businessHours={[]} supportHours={""} holidayMessage={""} />
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection id="faq" animation="fade-in-up">
            <div className="section-padding">
              <div className="container-custom">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="card-professional">
                      <CardContent className="p-6">
                        <h3 className="font-poppins font-semibold text-foreground mb-3">{faq.question}</h3>
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection id="industries" animation="fade-in-up">
            <div className="section-padding bg-background">
              <div className="container-custom">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
                    Solutions by Industry
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                    Our telecommunications solutions are tailored to meet the unique requirements of different industries
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {['Startups', 'Small Business', 'Enterprise', 'Healthcare', 'Finance', 'Education'].map((industry) => (
                    <Link key={industry} to={`/industries/${industry.toLowerCase().replace(' ', '-')}`}>
                      <Card className="card-professional card-hover text-center py-6">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-foreground">{industry}</h4>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Link to="/industries">
                    <Button variant="outline" size="lg" className="btn-secondary">
                      View All Industries
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </main>
      </div>
    </div>
  );
}

export default Solutions;
