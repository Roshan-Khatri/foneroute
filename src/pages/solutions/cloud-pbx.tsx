
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const CloudPBXPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud PBX</title>
      </Helmet>
      <div className="bg-white pt-32 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Cloud PBX</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Our Cloud PBX solution offers a flexible, scalable, and cost-effective alternative to traditional on-premise phone systems. By hosting your PBX in the cloud, you can enjoy advanced features, simplified management, and the ability to connect your team from anywhere.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Full-featured business phone system in the cloud</li>
              <li>HD voice quality and reliable service</li>
              <li>Easy-to-use web portal for administration</li>
              <li>Voicemail-to-email, auto-attendant, and call forwarding</li>
              <li>Supports a wide range of IP phones and devices</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudPBXPage;
