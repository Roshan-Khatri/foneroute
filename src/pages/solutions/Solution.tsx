
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '@/sanity/client';
import { solutionBySlugQuery } from '@/sanity/queries';
import PageHeader from '@/components/layout/PageHeader';
import { PortableText } from '@/pages/PortableText';

const Solution = () => {
  const { slug } = useParams<{ slug: string }>();
  const [solution, setSolution] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSolution = async () => {
      const data = await client.fetch(solutionBySlugQuery, { slug });
      setSolution(data);
      setIsLoading(false);
    };

    fetchSolution();
  }, [slug]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!solution) {
    return <div>Solution not found.</div>;
  }

  return (
    <div>
      <PageHeader
        title={solution.title}
        description={solution.description}
      />
      <div className="container-custom py-16">
        <PortableText value={solution.content} />
      </div>
    </div>
  );
};

export default Solution;
