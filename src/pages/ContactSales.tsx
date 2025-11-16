import PageHeader from '@/components/layout/PageHeader';
import { Skeleton } from '@/components/ui/skeleton';
import { useSiteSettings } from '@/hooks/useSanityContent';
import { ContactForm } from '@/components/ContactForm';
import { ContactInfo } from '@/components/ContactInfo';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
} from 'lucide-react';

const ContactSalesSkeleton = () => {
  return (
    <div>
      <PageHeader 
        title="Contact Sales"
        subtitle="Get in touch with our sales team to discuss your needs and discover the right solution for your organization."
        breadcrumb="Home / Contact Sales"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form Skeleton */}
            <div className="space-y-6">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-12 w-1/3" />
            </div>

            {/* Contact Info Skeleton */}
            <div className="space-y-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


const ContactSales = () => {
  const { data: siteSettings, isLoading } = useSiteSettings();

  if (isLoading) {
    return <ContactSalesSkeleton />;
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Sales Inquiries',
      details: siteSettings?.primaryPhone || '+1 (555) 123-4567',
      description: 'Speak with our sales team about our solutions.',
    },
    {
      icon: Mail,
      title: 'General Inquiries',
      details: siteSettings?.primaryEmail || 'info@foneroute.com',
      description: 'For all general questions and information.',
    },
    {
      icon: MessageSquare,
      title: 'Support',
      details: siteSettings?.supportPhone || siteSettings?.supportEmail || '+1 (555) 123-4568',
      description: 'Get help from our technical support team.',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: siteSettings?.officeLocations?.[0]?.address || '123 Business Ave, Tech City, TC 12345',
      description: 'Visit our headquarters',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Contact Sales"
        subtitle="Get in touch with our sales team to discuss your needs and discover the right solution for your organization."
        breadcrumb="Home / Contact Sales"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <ContactForm solution="sales-inquiry" />
            </div>
            <ContactInfo 
              contactInfo={contactInfo} 
              businessHours={[]}
              supportHours={siteSettings?.supportHours || '24/7 Available'} 
              holidayMessage={siteSettings?.holidayMessage || ''} 
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactSales;
