import React from 'react';
import { FileText, User, Shield, AlertTriangle, Mail } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">Terms of Service</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div className="md:col-span-2">
            <div className="space-y-12">
              {/* Acceptance of Terms */}
              <div className="flex items-start">
                <FileText className="h-6 w-6 mr-4 mt-1 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Acceptance of Terms</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    By accessing and using our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
                  </p>
                </div>
              </div>

              {/* User Conduct */}
              <div className="flex items-start">
                <User className="h-6 w-6 mr-4 mt-1 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">User Conduct</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    You agree to use our services only for lawful purposes. You are prohibited from posting or transmitting any material that is threatening, defamatory, obscene, or otherwise objectionable.
                  </p>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="flex items-start">
                <Shield className="h-6 w-6 mr-4 mt-1 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Intellectual Property</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    All content on our site, including text, graphics, logos, and software, is the property of our company and is protected by copyright and other intellectual property laws.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 mr-4 mt-1 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Limitation of Liability</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    We are not liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services.
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
                If you have any questions about these Terms of Service, please contact us at:<br />
                <a href="mailto:terms@example.com" className="text-blue-600 hover:underline dark:text-blue-400">
                  terms@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
