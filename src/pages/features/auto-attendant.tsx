
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const AutoAttendantPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Auto Attendant</title>
      </Helmet>
      <div className="bg-white dark:bg-[#191919] pt-32 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Auto Attendant</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              An auto attendant, or virtual receptionist, greets callers and directs them to the right department or employee. This feature provides a professional image for your business and ensures that calls are handled efficiently.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutoAttendantPage;
