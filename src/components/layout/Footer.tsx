import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Twitter, Linkedin, Facebook, Youtube, Instagram } from 'lucide-react';
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
  { title: 'Contact', href: '/solutions/contact-center' },
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

  const siteName = siteSettings?.siteName || 'FoneRoute';
  const logoImg = siteSettings?.logoImage ? urlFor(siteSettings.logoImage).url() : null;
  const description = siteSettings?.footerDescription || 'Empowering businesses with cutting-edge telecommunications solutions. From contact centers to unified communications, we deliver reliable, scalable technology that drives success.';
  const tagline = siteSettings?.companyTagline;
  const primaryOffice = siteSettings?.officeLocations?.find(o => o.primary) || siteSettings?.officeLocations?.[0];
  const phone = siteSettings?.primaryPhone || primaryOffice?.phone || '+1 (555) 123-4567';
  const email = siteSettings?.primaryEmail || 'info@foneroute.com';
  const address = primaryOffice?.address || '123 Business Ave, Tech City, TC 12345';
  const social = siteSettings?.socialLinks || {};

  return (
    <footer className="bg-gray-100 dark:bg-background border-t border-gray-200 dark:border-border">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                {logoImg ? (
                  <img src={logoImg} alt={siteName} className="h-8 w-8 object-contain" />
                ) : (
                  <Phone className="h-8 w-8 text-primary" />
                )}
                <span className="font-poppins font-bold text-xl text-gray-800 dark:text-gray-200">
                  {siteName}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
                {description}
                {tagline && <span className="block mt-2 font-semibold text-primary">{tagline}</span>}
              </p>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-poppins font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Solutions
              </h3>
              <ul className="space-y-3">
                {solutionsLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-poppins font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Features
              </h3>
              <ul className="space-y-3">
                {featuresLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-poppins font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;