
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const WhatsappBusinessSolutionPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>WhatsApp Business Solution</title>
      </Helmet>
      <div className="bg-white py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">WhatsApp Business Solution</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Engage with your customers on the world's most popular messaging app. Our WhatsApp Business Solution allows you to send notifications, provide customer support, and run marketing campaigns, all through a single, powerful API.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Official WhatsApp Business API integration</li>
              <li>Send rich media messages, including images, videos, and documents</li>
              <li>Automate customer interactions with chatbots</li>
              <li>Manage conversations and contacts at scale</li>
              <li>Ensure secure and reliable message delivery</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsappBusinessSolutionPage;
