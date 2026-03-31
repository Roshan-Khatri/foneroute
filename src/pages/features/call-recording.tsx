
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const CallRecordingPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Call Recording</title>
      </Helmet>
      <div className="bg-white dark:bg-[#191919] pt-32 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Call Recording</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Record inbound and outbound calls for quality assurance, training, and compliance purposes. Access and review call recordings through a secure web portal.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallRecordingPage;
