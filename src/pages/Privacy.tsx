import React from 'react';
import { FileText, Info, HelpCircle, Lock, Mail } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">Privacy Policy</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div className="md:col-span-2">
            <div className="space-y-12">
              {/* Introduction */}
              <div className="flex items-start">
                <FileText className="h-6 w-6 mr-4 mt-1 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Introduction</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Welcome to our Privacy Policy. This policy outlines how we collect, use, and protect your personal information.<br />
                    Your privacy is important to us, and we are committed to safeguarding your data.
                  </p>
                </div>
              </div>

              {/* Information We Collect */}
              <div className="flex items-start">
                <Info className="h-6 w-6 mr-4 mt-1 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Information We Collect</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    We may collect various types of information, including personal identification details (name, email, phone number), technical data (IP address, browser type), and usage data (pages visited, time spent on site). This information is collected through forms, cookies, and other tracking technologies.
                  </p>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 mr-4 mt-1 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">How We Use Your Information</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your information is used to provide and improve our services, personalize your experience, and communicate with you. We may also use it for security purposes, to comply with legal obligations, and for marketing, where permitted.
                  </p>
                </div>
              </div>

              {/* Data Security */}
              <div className="flex items-start">
                <Lock className="h-6 w-6 mr-4 mt-1 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Data Security</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure. These measures include encryption, access controls, and regular security audits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us Card */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 dark:bg-zinc-900 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 mr-3 text-gray-500 dark:text-gray-400" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Contact Us</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                If you have any questions about this Privacy Policy, please contact us at:<br />
                <a href="mailto:privacy@example.com" className="text-blue-600 hover:underline dark:text-blue-400">
                  privacy@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
