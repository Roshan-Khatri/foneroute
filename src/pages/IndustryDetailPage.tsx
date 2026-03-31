
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client } from '@/sanity/client';
import { industryBySlugQuery } from '@/sanity/queries';
import PageHeader from '@/components/layout/PageHeader';
import { PortableText } from '@/pages/PortableText';

const IndustryDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [industry, setIndustry] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchIndustry = async () => {
      const data = await client.fetch(industryBySlugQuery, { slug });
      setIndustry(data);
      setIsLoading(false);
    };

    fetchIndustry();
  }, [slug]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!industry) {
    return <div>Industry not found.</div>;
  }

  return (
    <div>
      <PageHeader
        title={industry.title}
        description={industry.description}
      />
      <div className="container-custom py-16">
        <PortableText value={industry.content} />
      </div>
    </div>
  );
};

export default IndustryDetailPage;
