
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const ClickToCallPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Click-to-Call</title>
      </Helmet>
      <div className="bg-white py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Click-to-Call</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Our Click-to-Call solution makes it effortless for your customers to connect with you. By embedding a simple button on your website or application, you can enable instant voice communication, improving customer engagement and lead generation.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Easy integration with any website or application</li>
              <li>Real-time voice calls initiated from a web browser</li>
              <li>Customizable button and call routing options</li>
              <li>Detailed call analytics and reporting</li>
              <li>Improves customer experience and conversion rates</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClickToCallPage;
