
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const UnifiedCommunicationsPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Unified Communications</title>
      </Helmet>
      <div className="bg-white py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Unified Communications</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Our Unified Communications (UC) solutions are designed to streamline your business communication by integrating various communication tools into a single, intuitive platform. From voice and video to messaging and team collaboration, our UC solutions enhance productivity and foster a more connected workforce.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Seamless integration of voice, video, and messaging</li>
              <li>Enhanced team collaboration with file sharing and screen sharing</li>
              <li>Mobile-first design for communication on the go</li>
              <li>Scalable solutions that grow with your business</li>
              <li>Robust security and reliability</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnifiedCommunicationsPage;
