
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '@/sanity/client';
import { featureBySlugQuery } from '@/sanity/queries';
import PageHeader from '@/components/layout/PageHeader';

const FeatureDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [feature, setFeature] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeature = async () => {
      const data = await client.fetch(featureBySlugQuery, { slug });
      setFeature(data);
      setIsLoading(false);
    };

    fetchFeature();
  }, [slug]);

  if (isLoading) {
    return <div>Loading...</div>; // Replace with a proper skeleton loader if you have one
  }

  if (!feature) {
    return <div>Feature not found.</div>;
  }

  return (
    <div>
      <PageHeader
        title={feature.title}
        description={feature.description}
      />
      <div className="container-custom py-16">
        {/* Add more detailed content about the feature here */}
      </div>
    </div>
  );
};

export default FeatureDetailPage;
