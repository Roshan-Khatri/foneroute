
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const RingGroupsPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Ring Groups</title>
      </Helmet>
      <div className="bg-white dark:bg-[#191919] pt-32 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Ring Groups</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 dark:text-gray-400">
              Route calls to multiple extensions simultaneously, ensuring that no call goes unanswered. Ring groups are an essential feature for teams that share responsibility for answering incoming calls, such as sales or support departments.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RingGroupsPage;
