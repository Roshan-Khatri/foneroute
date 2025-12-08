
import React from 'react';
import { useParams } from 'react-router-dom';

const FeatureDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="container-custom py-16">
      <h1 className="text-3xl font-poppins font-bold text-center">Feature: {slug}</h1>
      <p className="text-muted-foreground text-center mt-2">
        Details about the {slug} feature will be displayed here.
      </p>
    </div>
  );
};

export default FeatureDetailPage;
