
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useSiteSettings } from '@/hooks/useSanityContent';
import { urlFor } from '@/sanity/image';

const staticSolutionsLinks = [
  { title: 'Contact Center', href: '/solutions/contact-center' },
  { title: 'Auto Dialer', href: '/solutions/contact-center/auto-dialer' },
  { title: 'Cloud PBX', href: '/solutions/cloud-pbx' },
  { title: 'Unified Communications', href: '/solutions/unified-communications' },
];
const staticFeaturesLinks = [
  { title: 'Call Management', href: '/features/call-management' },
  { title: 'Call Reporting', href: '/features/call-reporting' },
  { title: 'Call Tracking', href: '/features/call-tracking' },
  { title: 'International Numbers', href: '/features/international-numbers' },
];
const staticCompanyLinks = [
  { title: 'About Us', href: '/about' },
  { title: 'Contact', href: '/contact' },
  { title: 'Blog', href: '/blog' },
  { title: 'Support', href: '/support' },
];
const staticLegalLinks = [
  { title: 'Privacy Policy', href: '/privacy' },
  { title: 'Terms of Service', href: '/terms' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { data: siteSettings } = useSiteSettings();

  const solutionsLinks = siteSettings?.footerSolutionsLinks || staticSolutionsLinks;
  const featuresLinks = siteSettings?.footerFeaturesLinks || staticFeaturesLinks;
  const companyLinks = siteSettings?.footerCompanyLinks || staticCompanyLinks;
  const legalLinks = siteSettings?.footerLegalLinks || staticLegalLinks;

  const siteName = siteSettings?.siteName || 'FoneRoute';
  const logoImg = siteSettings?.logoImage ? urlFor(siteSettings.logoImage).url() : null;
  const description = siteSettings?.footerDescription || 'Empowering businesses with cutting-edge telecommunications solutions. From contact centers to unified communications, we deliver reliable, scalable technology that drives success.';
  
  const primaryOffice = siteSettings?.officeLocations?.find(o => o.primary) || siteSettings?.officeLocations?.[0];
  const phone = siteSettings?.primaryPhone || primaryOffice?.phone || '+1 (555) 123-4567';
  const email = siteSettings?.primaryEmail || 'rkhatri10@hotmail.com';
  const address = primaryOffice?.address || '123 Business Ave, Tech City, TC 12345';

  return (
    <footer className="bg-background border-t border-border">
      {/* CTA Section */}
      <div className="text-foreground py-16 sm:py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business Communications?</h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          Get started with a free consultation and discover how our solutions can drive your business forward.
        </p>
        <Button asChild size="lg" variant={'outline'} className="h-12 text-base px-8">
          <a href="/solutions">Explore Solutions</a>
        </Button>
      </div>

      <div className="container-custom border-t border-border py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 text-center sm:text-left">
          {/* Company Info & Contact */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
              {logoImg ? (
                <img src={logoImg} alt={siteName} className="h-8 w-8 object-contain" />
              ) : (
                <Phone className="h-8 w-8 text-primary" />
              )}
              <span className="font-poppins font-bold text-xl text-foreground">{siteName}</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed mx-auto sm:mx-0">
              {description}
            </p>
            <ul className="space-y-4 text-muted-foreground inline-block text-left mx-auto sm:mx-0">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>{phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>{email}</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>{address}</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="sm:col-start-1 lg:col-start-auto">
            <h3 className="font-poppins font-semibold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-3">
              {solutionsLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-4">Features</h3>
            <ul className="space-y-3">
              {featuresLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="container-custom border-t border-border py-6">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p className='text-center sm:text-left'>&copy; {currentYear} {siteName}. All rights reserved.</p>
            <div className="flex flex-wrap justify-center space-x-4">
                {legalLinks.map(link => (
                    <a key={link.href} href={link.href} className="hover:text-foreground transition-colors">{link.title}</a>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
