import React, { useEffect, useState } from 'react';
import Solution from './Solution';
import { Solution as SolutionType } from '@/types/solution';
import { getSanityClient } from '@/sanity/client';
import { solutionBySlugQuery } from '@/sanity/queries';

const PowerDialer = () => {
  const [solution, setSolution] = useState<SolutionType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = getSanityClient();

        const data = await client.fetch(solutionBySlugQuery, {
          slug: 'power-dialer',
        });

        console.log("SANITY DATA:", data);

        if (!data) return;

        // 🔥 MAP SANITY → UI STRUCTURE
        const formattedData: SolutionType = {
          title: data.title,
          slug: { current: data.slug },

          hero: {
            title: data.sections?.find((s: any) => s._type === 'heroSection')?.heading,
            subtitle: data.sections?.find((s: any) => s._type === 'heroSection')?.subtitle,
          },

          overview: data.overview,

          features:
            data.sections
              ?.find((s: any) => s._type === 'keyFeaturesSection')
              ?.features?.map((f: any) => ({
                title: f.title,
                description: f.description,
              })) || [],

          benefits:
            data.sections
              ?.find((s: any) => s._type === 'benefitsSection')
              ?.benefits?.map((b: any) => ({
                title: typeof b === 'string' ? b : b.title,
                description: '',
              })) || [],

          useCases: [], // optional if not in sanity
          relatedSolutions: [], // optional
        };

        setSolution(formattedData);
      } catch (err) {
        console.error("ERROR:", err);
      }
    };

    fetchData();
  }, []);

  // ✅ Loading state
  if (!solution) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return <Solution solution={solution} />;
};

export default PowerDialer;