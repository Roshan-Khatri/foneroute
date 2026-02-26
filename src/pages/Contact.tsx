
import { Suspense, lazy } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import PageHeader from '@/components/layout/PageHeader';
import {
  Phone,
  Mail,
  MessageSquare,
} from 'lucide-react';
import { useSiteSettings } from '@/context/SiteSettingsContext';
import { motion } from 'framer-motion';
import { SEO } from '@/components/layout/SEO';

const ContactForm = lazy(() => import('@/components/ContactForm').then(module => ({ default: module.ContactForm })));
const ContactInfo = lazy(() => import('@/components/ContactInfo').then(module => ({ default: module.ContactInfo })));

const Contact = () => {
  const { siteSettings } = useSiteSettings();

  const offices = siteSettings?.officeLocations?.length
    ? [...siteSettings.officeLocations]
        .sort((a, b) => {
          if (a.primary && !b.primary) return -1;
          if (!a.primary && b.primary) return 1;
          return 0;
        })
        .map((office) => ({
          city: office.city || '',
          address: office.address || '',
          phone: office.phone || '',
          hours: office.hours || '',
        }))
    : [
        {
          city: 'New York',
          address: '123 Business Ave, Suite 100',
          phone: '+1 (555) 123-4567',
          hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
        },
        {
          city: 'San Francisco',
          address: '456 Tech Street, Floor 15',
          phone: '+1 (555) 987-6543',
          hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST',
        },
        {
          city: 'London',
          address: '789 Communication Blvd',
          phone: '+44 20 1234 5678',
          hours: 'Mon-Fri: 9:00 AM - 5:00 PM GMT',
        },
      ];

  const primaryOffice = offices[0];

  const contactInfo = [
    {
      icon: Mail,
      title: 'General Inquiries',
      details: siteSettings?.primaryEmail || 'info@foneroute.com',
      description: 'For all general questions and information.',
    },
    {
      icon: Phone,
      title: 'Sales Inquiries',
      details: siteSettings?.primaryPhone || primaryOffice?.phone || '+1 (555) 123-4567',
      description: 'Speak with our sales team about our solutions.',
    },
    {
      icon: MessageSquare,
      title: 'Support',
      details: siteSettings?.supportPhone || siteSettings?.supportEmail || '+1 (555) 123-4568',
      description: 'Get help from our technical support team.',
    },
  ];

  return (
    <>
      <SEO
        title="Contact FoneRoute | Get in Touch with Our Experts"
        description="Contact FoneRoute for sales, support, or general inquiries. Our team is ready to help you find the perfect communication solution for your business. Reach out today!"
      />
      <PageHeader
        title="Contact Our Team"
        description="Ready to transform your business communications? Get in touch with our experts to discuss your needs and discover the right solution for your organization."
      />

      {/* Contact Form Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            <Suspense fallback={<div>Loading form...</div>}>
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <ContactForm />
              </motion.div>
            </Suspense>
            <Suspense fallback={<div>Loading contact info...</div>}>
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <ContactInfo 
                  contactInfo={contactInfo} 
                />
              </motion.div>
            </Suspense>
          </div>
        </div>
      </section>

      {/* Our Locations Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-4">
              Our Locations
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Find our offices around the world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <Card className="card-professional card-hover-animation h-full">
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-semibold text-foreground mb-3 text-base md:text-lg">
                      {office.city}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {office.address}<br />
                      {office.phone}<br />
                      {office.hours}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Quick answers to common questions about our services and getting started
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "How quickly can we get started?",
                answer: "Most implementations can begin within 24-48 hours of contract signing, with full deployment typically completed within 1-2 weeks."
              },
              {
                question: "Do you offer 24/7 support?",
                answer: "Yes, we provide round-the-clock technical support and customer service to ensure your communications never go down."
              },
              {
                question: "Can you integrate with our existing systems?",
                answer: "Absolutely. Our solutions integrate with most CRM, helpdesk, and business applications through APIs and pre-built connectors."
              },
              {
                question: "What's included in the setup?",
                answer: "We provide complete setup, configuration, training, and ongoing support. No hidden fees or additional charges for standard implementation."
              }
            ].map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <Card className="card-professional card-hover-animation h-full">
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-semibold text-foreground mb-3 text-base md:text-lg">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
