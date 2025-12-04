
import { FC, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { sanityFetch } from '@/lib/sanity';
import { featureBySlugQuery } from '@/sanity/queries';
import { features as featureFallbackData } from '@/content/features';
import AllFeaturesSkeleton from '../AllFeaturesSkeleton';
import NotFoundPage from '@/pages/NotFound';

interface FeatureData {
  title: string;
  description: string;
  benefits: string[];
  relatedFeatures: Array<{ title: string; slug: { current: string } }>;
}

export const getFeatureData = async (slug: string): Promise<FeatureData | null> => {
  try {
    const data = await sanityFetch<FeatureData | null>({ query: featureBySlugQuery, params: { slug } });
    if (data) return data;
    return featureFallbackData.find(feature => feature.slug.current === slug) as unknown as FeatureData || null;
  } catch (error) {
    console.error('Error fetching feature data:', error);
    return featureFallbackData.find(feature => feature.slug.current === slug) as unknown as FeatureData || null;
  }
};

const Feature: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [feature, setFeature] = useState<FeatureData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const data = await getFeatureData(slug);
        setFeature(data);
      } catch (err) {
        console.error('Failed to fetch feature data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <AllFeaturesSkeleton />;
  }

  if (!feature) {
    return <NotFoundPage />;
  }

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>{`${feature.title} | FoneRoute`}</title>
        <meta name="description" content={feature.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding bg-background mt-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-poppins tracking-tight mb-4">
            {feature.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {feature.description}
          </p>
          <Button asChild size="lg" className="mt-8 btn-hero">
            <Link to="/contact">Request a Demo <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      {feature.benefits && feature.benefits.length > 0 && (
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-8">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {feature.benefits.map((benefit, index) => (
                <Card key={index} className="card-professional">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                    <p className="text-lg font-semibold">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Features */}
      {feature.relatedFeatures && feature.relatedFeatures.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-8">Related Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {feature.relatedFeatures.map((related, index) => (
                <Card key={index} className="card-professional hover:border-primary transition-all">
                  <CardHeader>
                    <CardTitle>{related.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/features/${related.slug.current}`} className="text-primary font-semibold hover:underline">
                      Learn More <ArrowRight className="inline ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Feature;
