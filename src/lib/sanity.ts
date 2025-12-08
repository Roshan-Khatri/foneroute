
import { getSanityClient } from '@/sanity/client';

export async function sanityFetch<T>({
  query,
  params = {},
  // By default, we use the live client, but allow overriding for previews
  client = getSanityClient(),
}: {
  query: string;
  params?: Record<string, unknown>;
  client?: ReturnType<typeof getSanityClient>;
}): Promise<T> {
  try {
    return await client.fetch<T>(query, params);
  } catch (error) {
    console.error('Sanity fetch failed:', error);
    // It's often better to throw the error to let the caller handle it,
    // as they might want to show a specific error message or retry.
    throw error;
  }
}
