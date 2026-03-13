export interface SanitySlug {
  current: string;
}

export interface SanityImage {
  asset: {
    url: string;
  };
}

export interface SanityReference {
  _ref: string;
  _type: string;
}

export interface HeroSlide {
  heading: string
  description: string
  image?: {
    asset?: {
      url?: string
    }
  }
  primaryButton?: {
    text?: string
    link?: string
  }
  secondaryButton?: {
    text?: string
    link?: string
  }
}

export interface HeroSection {
  _type: "heroSection"
  slides?: HeroSlide[]
}

export interface Feature {
  _type: 'feature';
  icon: SanityImage;
  title: string;
  description: string;
}

export interface FeaturesSection {
  _type: 'featuresSection';
  title: string;
  features: Feature[];
}

export interface WhyChooseUsCard {
  _type: 'whyChooseUsCard';
  title: string;
  description: string;
}

export interface WhyChooseUsSection {
  _type: 'whyChooseUsSection';
  cards: WhyChooseUsCard[];
}

export interface Stat {
  _type: 'stat';
  value: string;
  label: string;
}

export interface StatsSection {
  _type: 'statsSection';
  stats: Stat[];
}

export interface OurValue {
  _type: 'ourValue';
  title: string;
  description: string;
}

export interface OurValuesSection {
  _type: 'ourValuesSection';
  values: OurValue[];
}

export interface Industry {
  _id: string;
  title: string;
  slug: SanitySlug;
}

export interface IndustriesSection {
  _type: 'industriesSection';
  title: string;
  industries: Industry[];
}

export interface Solution {
  _id: string;
  title: string;
  slug: SanitySlug;
}

export interface TopSolutionsSection {
  _type: 'topSolutionsSection';
  title: string;
  solutions: Solution[];
}

export interface Testimonial {
  _type: 'testimonial';
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface TestimonialsSection {
  _type: 'testimonialsSection';
  testimonials: Testimonial[];
}

export interface PricingComparisonSection {
  _type: 'pricingComparisonSection';
  title: string;
  table: any; // Define a proper type for the table
}

export interface FaqItem {
  _id: string;
  question: string;
  answer: string;
}

export interface FaqSection {
  _type: 'faqSection';
  title: string;
  faqs: FaqItem[];
}

export interface CtaSection {
  _type: 'ctaSection';
  heading: string;
  button: {
    label: string;
    link: string;
  };
}

export type PageSection = HeroSection | FeaturesSection | WhyChooseUsSection | StatsSection | OurValuesSection | IndustriesSection | TopSolutionsSection | TestimonialsSection | PricingComparisonSection | FaqSection | CtaSection;

export interface Page {
  _id: string;
  title: string;
  slug: SanitySlug;
  sections: PageSection[];
}
