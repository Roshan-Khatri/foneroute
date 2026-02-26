
import { useSiteSettings } from '../../context/SiteSettingsContext';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail } from 'lucide-react';

const Footer = () => {
  const { siteSettings, isLoading } = useSiteSettings();

  if (isLoading) {
    return null;
  }

  const {
    siteName,
    footerDescription,
    copyrightText,
    footerSolutionsLinks = [],
    footerFeaturesLinks = [],
    footerCompanyLinks = [],
    legalLinks,
  } = siteSettings || {};

  return (
    <footer className="bg-gray-50 dark:bg-zinc-950 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 dark:border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16">

            {/* Column 1: Brand and Description */}
            <div className="md:col-span-12 lg:col-span-5">
                <div className="flex items-center space-x-2">
                    <PhoneCall className="h-6 w-6 text-gray-800 dark:text-white" />
                    <span className="text-xl font-bold text-gray-800 dark:text-white">{siteName || 'FoneRoute'}</span>
                </div>
                <p className="mt-4 text-base text-gray-500 dark:text-gray-400 lg:pr-8">
                    {footerDescription || 'Empowering businesses with cutting-edge telecommunications solutions. From contact centers to unified communications, we deliver reliable, scalable technology that drives success.'}
                </p>
                <div className="mt-4 space-y-2">
                    <div className="flex items-center space-x-2">
                        <PhoneCall className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <a href="tel:+15551234567" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">+1 (555) 123-4567</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <a href="mailto:info@foneroute.com" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">info@foneroute.com</a>
                    </div>
                </div>
            </div>

            {/* Spacer Column */}
            <div className="hidden lg:block lg:col-span-1"></div>

            {/* Column 2: Solutions */}
            <div className="md:col-span-4 lg:col-span-2">
              <h4 className="font-bold text-gray-900 dark:text-white">Solutions</h4>
              <ul className="mt-4 space-y-4">
                {footerSolutionsLinks?.length > 0 ? footerSolutionsLinks.map((item, index) => (
                  item?.label && item.link && (
                    <li key={`solution-${index}`}>
                      <Link to={item.link} className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                        {item.label}
                      </Link>
                    </li>
                  )
                )) : (
                    <>
                        <li><Link to="/solutions/contact-center" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Contact Center</Link></li>
                        <li><Link to="/solutions/auto-dialer" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Auto Dialer</Link></li>
                        <li><Link to="/solutions/cloud-pbx" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Cloud PBX</Link></li>
                        <li><Link to="/solutions/unified-communications" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Unified Communications</Link></li>
                    </>
                )}
              </ul>
            </div>

            {/* Column 3: Features */}
            <div className="md:col-span-4 lg:col-span-2">
              <h4 className="font-bold text-gray-900 dark:text-white">Features</h4>
              <ul className="mt-4 space-y-4">
                {footerFeaturesLinks?.length > 0 ? footerFeaturesLinks.map((item, index) => (
                  item?.label && item.link && (
                    <li key={`feature-${index}`}>
                      <Link to={item.link} className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                        {item.label}
                      </Link>
                    </li>
                  )
                )) : (
                    <>
                        <li><Link to="/features/call-management" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Call Management</Link></li>
                        <li><Link to="/features/call-reporting" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Call Reporting</Link></li>
                        <li><Link to="/features/call-tracking" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Call Tracking</Link></li>
                        <li><Link to="/features/international-numbers" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">International Numbers</Link></li>
                    </>
                )}
              </ul>
            </div>

            {/* Column 4: Company */}
            <div className="md:col-span-4 lg:col-span-2">
              <h4 className="font-bold text-gray-900 dark:text-white">Company</h4>
              <ul className="mt-4 space-y-4">
                {footerCompanyLinks?.length > 0 ? footerCompanyLinks.map((item, index) => (
                  item?.label && item.link && (
                    <li key={`company-${index}`}>
                      <Link to={item.link} className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                        {item.label}
                      </Link>
                    </li>
                  )
                )) : (
                    <>
                        <li><Link to="/about" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">About Us</Link></li>
                        <li><Link to="/contact" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Contact</Link></li>
                        <li><Link to="/blog" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Blog</Link></li>
                        <li><Link to="/support" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Support</Link></li>
                    </>
                )}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 dark:border-zinc-800 py-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-500 order-2 sm:order-1 mt-4 sm:mt-0">
                {copyrightText || `© 2026 FoneRoute. All rights reserved.`}
            </p>
            <div className="flex space-x-6 text-sm order-1 sm:order-2">
                {legalLinks?.privacyPolicy ? (
                    <Link to={legalLinks.privacyPolicy} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Privacy Policy</Link>
                ) : <Link to="/privacy" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Privacy Policy</Link>}
                {legalLinks?.termsOfService ? (
                    <Link to={legalLinks.termsOfService} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Terms of Service</Link>
                ) : <Link to="/terms" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Terms of Service</Link>}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
