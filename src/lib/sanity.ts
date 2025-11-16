import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})

export async function sanityFetch<T>(query: string, params?: Record<string, any>): Promise<T | null> {
  try {
    const result = await sanityClient.fetch<T>(query, params || {});
    return result;
  } catch (error) {
    console.error('Sanity fetch failed:', error);
    return null;
  }
}
