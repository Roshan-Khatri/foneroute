// --- SANITY CMS INTEGRATION HOOKS ---

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import {
  allPostsQuery,
  allSolutionsQuery,
  featuredFeaturesQuery,
  featuredSolutionsQuery,
  featureBySlugQuery,
  pageBySlugQuery,
  postBySlugQuery,
  siteSettingsQuery,
  solutionBySlugQuery,
  allIndustriesQuery,
  FEATURES_PAGE_QUERY, // ✅ NEW
} from '@/sanity/queries';

import { getSanityClient } from '@/sanity/client';
import { getSanityStatus } from '@/sanity/env';

import type {
  Feature,
  Solution,
  Page,
  Post,
  SiteSettings,
  Industry,
} from '@/sanity/types';

import { sanityFetch } from '@/lib/sanity';


// --- Generic Content Fetcher ---
export function useSanityContent<T>(docType: string): UseQueryResult<T, Error> {
  const { isConfigured } = getSanityStatus();
  let query: string;

  switch (docType) {
    case 'industry':
      query = allIndustriesQuery;
      break;

    case 'feature':
      query = FEATURES_PAGE_QUERY; // ✅ FIXED
      break;

    case 'solution':
      query = allSolutionsQuery;
      break;

    case 'post':
      query = allPostsQuery;
      break;

    default:
      throw new Error(`Unsupported document type: ${docType}`);
  }

  return useQuery<T>({
    queryKey: ['sanity', docType],
    queryFn: () => sanityFetch<T>({ query }),
    staleTime: 1000 * 60 * 5,
    retry: isConfigured ? 1 : false,
    enabled: isConfigured,
  });
}


// --- Sanity Status ---
export function useSanityStatus(): UseQueryResult<boolean, Error> {
  const { isConfigured } = getSanityStatus();

  return useQuery<boolean>({
    queryKey: ['sanity', 'status'],
    queryFn: async () => {
      try {
        const client = getSanityClient();
        await client.fetch('1');
        return true;
      } catch (error) {
        console.error('Sanity connection failed:', error);
        return false;
      }
    },
    enabled: isConfigured,
    staleTime: 1000 * 60 * 2,
    retry: isConfigured ? 2 : false,
    initialData: isConfigured ? undefined : false,
  });
}


// --- Site Settings ---
export function useSiteSettings(): UseQueryResult<SiteSettings | null, Error> {
  const { isConfigured } = getSanityStatus();

  return useQuery<SiteSettings | null>({
    queryKey: ['sanity', 'siteSettings'],
    queryFn: () => sanityFetch<SiteSettings | null>({ query: siteSettingsQuery }),
    staleTime: 1000 * 60 * 5,
    retry: isConfigured ? 1 : false,
    enabled: isConfigured,
    initialData: isConfigured ? undefined : null,
  });
}


// --- Featured Features ---
export function useFeaturedFeatures(): UseQueryResult<Feature[], Error> {
  const { isConfigured } = getSanityStatus();

  return useQuery<Feature[]>({
    queryKey: ['sanity', 'featuredFeatures'],
    queryFn: () => sanityFetch<Feature[]>({ query: featuredFeaturesQuery }),
    staleTime: 1000 * 60 * 5,
    retry: isConfigured ? 1 : false,
    enabled: isConfigured,
    initialData: isConfigured ? undefined : [],
  });
}


// --- Featured Solutions ---
export function useFeaturedSolutions(): UseQueryResult<Solution[], Error> {
  const { isConfigured } = getSanityStatus();

  return useQuery<Solution[]>({
    queryKey: ['sanity', 'featuredSolutions'],
    queryFn: () => sanityFetch<Solution[]>({ query: featuredSolutionsQuery }),
    staleTime: 1000 * 60 * 5,
    retry: isConfigured ? 1 : false,
    enabled: isConfigured,
    initialData: isConfigured ? undefined : [],
  });
}


// --- ✅ FEATURES PAGE (UPDATED) ---
export function useFeaturesPage(): UseQueryResult<any, Error> {
  const { isConfigured } = getSanityStatus();

  return useQuery<any>({
    queryKey: ['sanity', 'featuresPage'],
    queryFn: () => sanityFetch<any>({ query: FEATURES_PAGE_QUERY }),
    staleTime: 1000 * 60 * 5,
    retry: isConfigured ? 1 : false,
    enabled: isConfigured,
  });
}


// --- All Solutions ---
export function useSolutions(): UseQueryResult<Solution[], Error> {
  const { isConfigured } = getSanityStatus();

  return useQuery<Solution[]>({
    queryKey: ['sanity', 'solutions'],
    queryFn: () => sanityFetch<Solution[]>({ query: allSolutionsQuery }),
    staleTime: 1000 * 60 * 5,
    retry: isConfigured ? 1 : false,
    enabled: isConfigured,
    initialData: isConfigured ? undefined : [],
  });
}


// --- Pages ---
export function usePageBySlug(slug: string): UseQueryResult<Page | null, Error> {
  const { isConfigured } = getSanityStatus();

  return useQuery<Page | null>({
    queryKey: ['sanity', 'page', slug],
    queryFn: () => sanityFetch<Page | null>({ query: pageBySlugQuery, params: { slug } }),
    enabled: isConfigured && !!slug,
    staleTime: 1000 * 60 * 5,
    retry: isConfigured ? 1 : false,
    initialData: isConfigured ? undefined : null,
  });
}


// --- Feature by Slug ---
export function useFeatureBySlug(slug: string): UseQueryResult<Feature | null, Error> {
  const { isConfigured } = getSanityStatus();

  return useQuery<Feature | null>({
    queryKey: ['sanity', 'feature', slug],
    queryFn: () => sanityFetch<Feature | null>({ query: featureBySlugQuery, params: { slug } }),
    enabled: isConfigured && !!slug,
    staleTime: 1000 * 60 * 5,
    retry: isConfigured ? 1 : false,
    initialData: isConfigured ? undefined : null,
  });
}


// --- Solution by Slug ---
export function useSolutionBySlug(slug: string): UseQueryResult<Solution | null, Error> {
  const { isConfigured } = getSanityStatus();

  return useQuery<Solution | null>({
    queryKey: ['sanity', 'solution', slug],
    queryFn: () => sanityFetch<Solution | null>({ query: solutionBySlugQuery, params: { slug } }),
    enabled: isConfigured && !!slug,
    staleTime: 1000 * 60 * 5,
    retry: isConfigured ? 1 : false,
    initialData: isConfigured ? undefined : null,
  });
}


// --- Posts ---
export function usePosts(): UseQueryResult<Post[], Error> {
  const { isConfigured } = getSanityStatus();

  return useQuery<Post[]>({
    queryKey: ['sanity', 'posts'],
    queryFn: () => sanityFetch<Post[]>({ query: allPostsQuery }),
    staleTime: 1000 * 60 * 5,
    retry: isConfigured ? 1 : false,
    enabled: isConfigured,
    initialData: isConfigured ? undefined : [],
  });
}


export function usePostBySlug(slug: string): UseQueryResult<Post | null, Error> {
  const { isConfigured } = getSanityStatus();

  return useQuery<Post | null>({
    queryKey: ['sanity', 'post', slug],
    queryFn: () => sanityFetch<Post | null>({ query: postBySlugQuery, params: { slug } }),
    enabled: isConfigured && !!slug,
    staleTime: 1000 * 60 * 5,
    retry: isConfigured ? 1 : false,
    initialData: isConfigured ? undefined : null,
  });
}