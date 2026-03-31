
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const RingGroupsPage: FC = () => {
  const benefits = [
    {
      title: 'Improved Call Handling',
      description: 'Distribute incoming calls to multiple people, so the first available person can answer.',
    },
    {
      title: 'Reduced Wait Times',
      description: 'With more people available to answer, callers spend less time waiting on the line.',
    },
    {
      title: 'Increased Team Efficiency',
      description: 'Share the load of incoming calls across your team, preventing any single person from being a bottleneck.',
    },
    {
      title: 'Enhanced Customer Satisfaction',
      description: 'Faster response times and efficient call routing lead to happier customers.',
    },
    {
      title: 'Flexible Call Distribution',
      description: 'Choose from different ringing strategies, like simultaneous or sequential ringing, to fit your team\'s workflow.',
    },
    {
        title: 'No Unanswered Calls',
        description: 'Ensure that every call is answered by routing it to a group of people, reducing the chance of missed opportunities.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Ring Groups</title>
      </Helmet>
      <div className="bg-white dark:bg-[#191919] pt-32 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Ring Groups</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6 dark:text-gray-400">
              Route calls to multiple extensions simultaneously, ensuring that no call goes unanswered. Ring groups are an essential feature for teams that share responsibility for answering incoming calls, such as sales or support departments.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-[#191919] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Benefits of Ring Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RingGroupsPage;
