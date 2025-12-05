
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useSiteSettings } from '@/hooks/useSanityContent';
import { urlFor } from '@/sanity/image';

const staticSolutionsLinks = [
  { title: 'Contact Center', href: '/solutions/contact-center' },
  { title: 'Auto Dialer', href: '/solutions/auto-dialer' },
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
    <footer className="bg-background border-t">
      {/* CTA Section */}
      <div className="text-foreground py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business Communications?</h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          Get started with a free consultation and discover how our solutions can drive your business forward.
        </p>
        <Button asChild size="lg" variant={'outline'}>
          <Link to="/solutions">Explore Solutions</Link>
        </Button>
      </div>

      <div className="container-custom border-t py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center md:text-left">
          {/* Company Info & Contact */}
          <div className="md:col-span-3 lg:col-span-2">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              {logoImg ? (
                <img src={logoImg} alt={siteName} className="h-8 w-8 object-contain" />
              ) : (
                <Phone className="h-8 w-8 text-primary" />
              )}
              <span className="font-poppins font-bold text-xl">{siteName}</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed mx-auto md:mx-0">
              {description}
            </p>
            <ul className="space-y-3 text-muted-foreground inline-block text-left">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3" />
                <span>{phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3" />
                <span>{email}</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-3" />
                <span>{address}</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-3">
              {solutionsLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-4">Features</h3>
            <ul className="space-y-3">
              {featuresLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="container-custom border-t py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p className='text-center md:text-left'>&copy; {currentYear} {siteName}. All rights reserved.</p>
            <div className="flex flex-wrap justify-center space-x-4">
                {legalLinks.map(link => (
                    <Link key={link.href} to={link.href} className="hover:text-primary transition-colors">{link.title}</Link>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
