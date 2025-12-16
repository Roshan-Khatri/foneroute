
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200 dark:border-gray-700">
          <button
            className="w-full flex justify-between items-center py-4 px-6 text-left font-semibold text-lg text-gray-800 dark:text-white"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                activeIndex === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          {activeIndex === index && (
            <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
