import React from 'react';
import { Button } from '@/components/ui/button';

const CtaSection = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <section className="py-12 md:py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        {data.title && (
          <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
        )}
        {data.description && (
          <p className="max-w-2xl mx-auto mb-8">{data.description}</p>
        )}
        {data.button && (
          <Button asChild>
            <a href={data.button.url}>{data.button.text}</a>
          </Button>
        )}
      </div>
    </section>
  );
};

export default CtaSection;
