
export interface Solution {
  title: string;
  slug: { current: string };
  hero: {
    title: string;
    subtitle: string;
  };
  overview: string;
  features: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  useCases: { title: string; description: string }[];
  relatedSolutions: { title: string; slug: { current: string } }[];
}
