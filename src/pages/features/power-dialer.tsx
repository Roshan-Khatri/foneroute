
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const PowerDialerPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Power Dialer</title>
      </Helmet>
      <div className="bg-white dark:bg-[#191919] pt-32 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Power Dialer</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 dark:text-gray-400">
              A high-performance outbound calling system designed to maximize agent productivity. The power dialer automatically dials numbers from a pre-loaded list, connecting agents only to live calls.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PowerDialerPage;
