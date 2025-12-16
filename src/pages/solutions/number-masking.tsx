
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const NumberMaskingPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Number Masking</title>
      </Helmet>
      <div className="bg-white py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Number Masking</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Protect the privacy of your users with our Number Masking solution. By creating temporary, anonymous phone numbers for your customers and service providers, you can facilitate secure communication while safeguarding personal information.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Anonymize phone numbers to protect user privacy</li>
              <li>Enable secure communication for deliveries, ride-sharing, and more</li>
              <li>Set up temporary phone numbers that expire after a set time</li>
              <li>Track and record all masked conversations</li>
              <li>Simple integration with your existing platform</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NumberMaskingPage;
