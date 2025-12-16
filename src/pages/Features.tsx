
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { useFeatures, useSiteSettings } from '@/hooks/useSanityContent';
import type { Feature } from '@/sanity/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PortableText from '@/components/PortableText';
import { ContactForm } from '@/components/ContactForm';
import { ContactInfo } from '@/components/ContactInfo';
import { PhoneCall, Headset, ShieldCheck, Users, BarChart3, Activity, Mail } from 'lucide-react';
import AllPagesSkeleton from './AllPagesSkeleton';

const featureSlugs = [
  'omnichannel-support',
  'intelligent-routing',
  'analytics-reporting',
  'crm-integrations',
  'advanced-dialers',
  'cloud-pbx-features',
];

const fallbackData: { [key: string]: Partial<Feature> } = {
  'omnichannel-support': {
    title: 'Omnichannel Support',
    longDescription: [{ _type: 'block', children: [{ _type: 'span', text: 'Engage customers across voice, email, chat, and social media from a single, unified platform. Provide a consistent and seamless experience, no matter how they choose to connect.' }] }],
    features: ['Unified Agent Desktop', 'Cross-channel History', 'Social Media Integration', 'Live Chat & Chatbots', 'Email Management'],
    benefits: ['Improve First Contact Resolution', 'Increase Customer Satisfaction', 'Enhance Agent Efficiency'],
  },
  'intelligent-routing': {
    title: 'Intelligent Routing',
    longDescription: [{ _type: 'block', children: [{ _type: 'span', text: 'Automatically route incoming interactions to the most qualified agent based on skills, availability, and customer data. Reduce wait times and improve outcomes.' }] }],
    features: ['Skills-based Routing', 'IVR & Self-service', 'ACD (Automatic Call Distribution)', 'Presence-based Routing', 'Business Hours Routing'],
    benefits: ['Reduce customer wait times', 'Improve issue resolution rates', 'Optimize agent workload distribution'],
  },
  'analytics-reporting': {
    title: 'Analytics & Reporting',
    longDescription: [{ _type: 'block', children: [{ _type: 'span', text: 'Gain deep insights into your contact center performance with real-time dashboards, historical reporting, and customizable analytics. Make data-driven decisions to optimize your operations.' }] }],
    features: ['Real-time Dashboards', 'Historical Reports', 'Customizable KPIs', 'Call Recording & Transcription', 'Sentiment Analysis'],
    benefits: ['Identify operational bottlenecks', 'Monitor agent performance', 'Track key business metrics'],
  },
  'crm-integrations': {
    title: 'CRM Integrations',
    longDescription: [{ _type: 'block', children: [{ _type: 'span', text: 'Seamlessly integrate FoneRoute with your existing CRM and business tools. Empower agents with full customer context and automate workflows for greater efficiency.' }] }],
    features: ['Salesforce Integration', 'Zendesk Integration', 'HubSpot Integration', 'Custom API Access', 'Screen Pops & Click-to-Dial'],
    benefits: ['Provide personalized customer interactions', 'Automate tedious manual tasks', 'Improve data accuracy across systems'],
  },
  'advanced-dialers': {
    title: 'Advanced Dialers',
    longDescription: [{ _type: 'block', children: [{ _type: 'span', text: 'Boost outbound campaign performance with our suite of advanced dialers. From automated to AI-powered dialing, we help you connect with more leads, faster.' }] }],
    features: ['Predictive Dialer', 'Power Dialer', 'Auto Dialer', 'TCPA Compliance Tools', 'Campaign Management'],
    benefits: ['Increase agent talk time', 'Improve lead conversion rates', 'Ensure regulatory compliance'],
  },
  'cloud-pbx-features': {
    title: 'Cloud PBX Features',
    longDescription: [{ _type: 'block', children: [{ _type: 'span', text: 'Modernize your business phone system with our powerful Cloud PBX. Get all the features of a traditional PBX, plus the flexibility and scalability of the cloud.' }] }],
    features: ['Virtual Attendant (IVR)', 'Call Forwarding & Routing', 'Voicemail-to-Email', 'HD Voice Quality', 'Mobile & Desktop Apps'],
    benefits: ['Reduce hardware and maintenance costs', 'Enable a remote and mobile workforce', 'Scale your phone system on demand'],
  },
};

const labelMap: { [key: string]: string } = {
  'omnichannel-support': 'Omnichannel Support',
  'intelligent-routing': 'Intelligent Routing',
  'analytics-reporting': 'Analytics & Reporting',
  'crm-integrations': 'CRM Integrations',
  'advanced-dialers': 'Advanced Dialers',
  'cloud-pbx-features': 'Cloud PBX',
};

function Features() {
  const { data: allFeatures, isLoading: featuresLoading, isError: featuresError } = useFeatures();
  const { data: siteSettings, isError: settingsError } = useSiteSettings();
  const [activeTab, setActiveTab] = useState(featureSlugs[0]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && featureSlugs.includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    window.location.hash = value;
  };

  if (featuresError) console.warn('Failed to load features from CMS', featuresError);
  if (settingsError) console.warn('Failed to load site settings from CMS', settingsError);

  const getFeatureData = (slug: string): Partial<Feature> => {
    const featureFromCMS = allFeatures?.find(f => f.slug?.current === slug);
    return featureFromCMS || fallbackData[slug];
  };
  
  const contactInfo = [
    { icon: PhoneCall, title: 'Sales', details: siteSettings?.primaryPhone || '+1 (555) 123-4567', description: 'Speak with our sales team' },
    { icon: Headset, title: siteSettings?.supportPhone ? 'Support' : 'Support Email', details: siteSettings?.supportPhone || siteSettings?.supportEmail || '+1 (555) 123-4568', description: siteSettings?.supportPhone ? '24/7 technical support' : 'Contact our support team by email' },
    { icon: Mail, title: 'Email', details: siteSettings?.primaryEmail || 'info@foneroute.com', description: 'General inquiries' },
  ];

  if (featuresLoading) return <AllPagesSkeleton />;

  return (
    <div>
      <PageHeader
        title="Our Features"
        subtitle="Explore the powerful features that make FoneRoute the leading communication platform"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <Tabs value={activeTab} onValueChange={handleTabChange} defaultValue={featureSlugs[0]}>
              <TabsList className="flex w-full overflow-x-auto">
                {featureSlugs.map(slug => {
                  const feature = getFeatureData(slug);
                  return (
                    <TabsTrigger key={slug} value={slug} className="flex-shrink-0">
                      {feature.title || labelMap[slug]}
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {featureSlugs.map(slug => {
                const f = getFeatureData(slug);
                return (
                  <TabsContent key={slug} value={slug} className="mt-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                      <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">{f.title}</h2>
                        <PortableText value={f.longDescription ?? []} className="prose prose-lg" />
                      </div>
                      <div className="lg:col-span-1 space-y-6 feature-card">
                        <div>
                          <h3 className="text-xl font-semibold mb-3">Key Capabilities</h3>
                          <ul className="list-disc pl-5 space-y-2">
                            {(f.features ?? []).map((capability, i) => <li key={i}>{capability}</li>)}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3">Business Benefits</h3>
                          <ul className="list-disc pl-5 space-y-2">
                            {(f.benefits ?? []).map((benefit, i) => <li key={i}>{benefit}</li>)}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                );
              })}
            </Tabs>
        </div>
      </section>
      
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team is here to help you find the perfect solution for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm solution={activeTab} />
            <ContactInfo contactInfo={contactInfo} businessHours={[]} supportHours={siteSettings?.supportHours || '24/7 Available'} />
          </div>
        </div>
      </section>

    </div>
  );
}

export default Features;
