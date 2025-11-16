
import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PortableText } from '@portabletext/react';

import { SEO } from '@/components/layout/SEO';
import PageHeader from '@/components/layout/PageHeader';
import SolutionsSkeleton from './SolutionsSkeleton';

import { sanityFetch } from '@/lib/sanity';
import { solutionQuery } from '@/sanity/queries';
import { Solution } from '@/sanity/types';
import { urlFor } from '@/sanity/image';
import { useScrollSpy } from '@/context/ScrollSpyContext';

export default function SolutionPage() {
  const [solution, setSolution] = useState<Solution | null>(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams<{ slug: string }>();
  const { setSections } = useScrollSpy();

  useEffect(() => {
    if (!slug) return;

    const fetchSolution = async () => {
      try {
        setLoading(true);
        const result = await sanityFetch<Solution>({
          query: solutionQuery,
          params: { slug },
        });
        setSolution(result);
      } catch (error) {
        console.error('Failed to fetch solution:', error);
        setSolution(null); 
      } finally {
        setLoading(false);
      }
    };

    fetchSolution();
  }, [slug]);

  const pageSections = [
    { id: 'overview', title: 'Overview' },
    { id: 'features', title: 'Features' },
    { id: 'benefits', title: 'Benefits' },
    { id: 'use-cases', title: 'Use Cases' },
    { id: 'integrations', title: 'Integrations' },
    { id: 'pricing', title: 'Pricing' },
    { id: 'faq', title: 'FAQ' },
    { id: 'cta', title: 'Get Started' },
  ];

  useEffect(() => {
    if (solution) {
      setSections(pageSections);
    }
    return () => setSections([]);
  }, [solution, setSections]);

  if (loading) {
    return <SolutionsSkeleton />;
  }

  if (!solution) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <>
      <SEO
        title={solution.metaTitle || solution.title}
        description={solution.metaDescription || solution.excerpt}
        imageUrl={solution.mainImage ? urlFor(solution.mainImage).width(1200).height(630).url() : undefined}
      />
      <div className="relative">
        <PageHeader title={solution.title} subtitle={solution.excerpt} />
        <main className="container mx-auto px-4 py-12">
          <section id="overview" style={{ scrollSnapAlign: 'start' }} className="section-padding prose prose-lg max-w-none">
            <PortableText value={solution.content} />
          </section>

          {solution.features && (
            <section id="features" style={{ scrollSnapAlign: 'start' }} className="section-padding">
              <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
              {/* Render features */}
            </section>
          )}

          <section id="benefits" style={{ scrollSnapAlign: 'start' }} className="section-padding bg-surface">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefits</h2>
            {/* Benefits content here */}
          </section>

          <section id="use-cases" style={{ scrollSnapAlign: 'start' }} className="section-padding">
            <h2 className="text-3xl font-bold mb-8 text-center">Use Cases</h2>
            {/* Use Cases content here */}
          </section>

          <section id="integrations" style={{ scrollSnapAlign: 'start' }} className="section-padding bg-surface">
            <h2 className="text-3xl font-bold mb-8 text-center">Integrations</h2>
            {/* Integrations content here */}
          </section>

          <section id="pricing" style={{ scrollSnapAlign: 'start' }} className="section-padding">
            <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
            {/* Pricing content here */}
          </section>

          <section id="faq" style={{ scrollSnapAlign: 'start' }} className="section-padding bg-surface">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            {/* FAQ content here */}
          </section>

          <section id="cta" style={{ scrollSnapAlign: 'start' }} className="section-padding">
            <h2 className="text-3xl font-bold mb-8 text-center">Get Started</h2>
            {/* CTA content here */}
          </section>
        </main>
      </div>
    </>
  );
}
