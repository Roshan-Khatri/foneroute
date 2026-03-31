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
    footer
  } = siteSettings || {};

  return (
    <footer className="bg-gray-50 dark:bg-zinc-950 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 dark:border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16">

            <div className="md:col-span-12 lg:col-span-5">
              <div className="flex items-center space-x-2">
                <PhoneCall className="h-6 w-6 text-gray-800 dark:text-white" />
                <span className="text-xl font-bold text-gray-800 dark:text-white">
                  {siteName || 'FoneRoute'}
                </span>
              </div>

              <p className="mt-4 text-base text-gray-500 dark:text-gray-400 lg:pr-8">
                {footerDescription}
              </p>

              <div className="mt-4 space-y-2">

                <div className="flex items-center space-x-2">
                  <PhoneCall className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <a
                    href={`tel:${footer?.phoneNumber}`}
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    {footer?.phoneNumber}
                  </a>
                </div>

                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <a
                    href={`mailto:${footer?.email}`}
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    {footer?.email}
                  </a>
                </div>

              </div>
            </div>

            <div className="hidden lg:block lg:col-span-1"></div>

            <div className="md:col-span-4 lg:col-span-2">
              <h4 className="font-bold text-gray-900 dark:text-white">Solutions</h4>
              <ul className="mt-4 space-y-4">
                {footerSolutionsLinks.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link} className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 lg:col-span-2">
              <h4 className="font-bold text-gray-900 dark:text-white">Features</h4>
              <ul className="mt-4 space-y-4">
                {footerFeaturesLinks.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link} className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 lg:col-span-2">
              <h4 className="font-bold text-gray-900 dark:text-white">Company</h4>
              <ul className="mt-4 space-y-4">
                {footerCompanyLinks.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link} className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-200 dark:border-zinc-800 py-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {copyrightText}
            </p>

            <div className="flex space-x-6 text-sm">
              <Link to={legalLinks?.privacyPolicy || "/privacy"} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                Privacy Policy
              </Link>

              <Link to={legalLinks?.termsOfService || "/terms"} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;