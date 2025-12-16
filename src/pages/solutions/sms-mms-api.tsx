
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const SmsMmsApiPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>SMS/MMS API</title>
      </Helmet>
      <div className="bg-white py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">SMS/MMS API</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Integrate powerful messaging capabilities into your applications with our SMS/MMS API. Our reliable and scalable API allows you to send and receive text and multimedia messages, enabling you to build engaging and interactive communication experiences.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>High-throughput SMS and MMS sending</li>
              <li>Simple and well-documented REST API</li>
              <li>Real-time delivery receipts and status tracking</li>
              <li>Support for long messages, international sending, and shortcodes</li>
              <li>Secure and compliant messaging solution</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmsMmsApiPage;
