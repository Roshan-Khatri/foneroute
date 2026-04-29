
// ================= HOME PAGE =================
export const HOME_PAGE_QUERY = `*[_type == "homePage"][0]{
  title,
  "slug": slug.current,

  sections[]{
    ...,

    _type == "heroSection" => {
      ...,
      slides[]{
        heading,
        description,
        "image": image.asset->url,
        primaryButton{ text, link },
        secondaryButton{ text, link }
      }
    },

    _type == "featuresSection" => {
      ...,
      features[]{
        title,
        description,
        "icon": icon.asset->url
      }
    },

    _type == "faqSection" => {
      ...,
      faqList[]{
        question,
        answer
      }
    }
  }
}`;


// ================= ABOUT =================
export const ABOUT_PAGE_QUERY = `*[_type == "aboutPage"][0]{
  title,
  "slug": slug.current,

  seo{
    metaTitle,
    metaDescription,
    keywords
  },

  heroSection{
    heading,
    subtitle
  },

  missionVisionSection{
    heading,
    description,
    points[],
    "image": image.asset->url
  },

  coreValuesSection{
    heading,
    description,
    values[]{
      title,
      description
    }
  },

  commitmentSection{
    heading,
    description,
    items[]{
      title,
      description
    }
  },

  teamSection{
    heading,
    description,
    members[]{
      name,
      role
    }
  }
}`;


// ================= CONTACT =================
export const CONTACT_PAGE_QUERY = `*[_type == "contactPage"][0]{
  heroSection{
    heading,
    subtitle
  },

  contactFormSection{
    heading,
    description,
    solutions,
    submitButtonText
  },

  getInTouchSection{
    heading,
    items[]{
      title,
      value,
      description
    }
  },

  faqSection{
    heading,
    faqs[]{
      question,
      answer
    }
  }
}`;


// ================= SUPPORT =================
export const SUPPORT_PAGE_QUERY = `*[_type == "supportPage"][0]{
  title,

  pageHeader{
    title,
    subtitle
  },

  faqSection{
    heading,
    faqs[]{
      question,
      answer
    }
  },

  getInTouchSection{
    heading,
    cards[]{
      title,
      description,
      buttonText,
      buttonLink
    }
  }
}`;


// ================= BLOG =================
export const BLOG_PAGE_QUERY = `*[_type == "blogPage"][0]{
  heroSection{
    heading,
    subtitle
  },

  techSpotlightSection{
    heading,
    posts[]{
      title,
      description
    }
  },

  caseStudiesSection{
    heading,
    studies[]{
      title,
      description
    }
  },

  testimonialsSection{
    heading,
    testimonials[]{
      name,
      role,
      quote
    }
  },

  recentPostsSection{
    heading,
    posts[]{
      title,
      description
    }
  }
}`;


// ================= PRICING (🔥 NEW) =================
export const PRICING_PAGE_QUERY = `*[_type == "pricingPage"][0]{
  heroSection{
    heading,
    subtitle
  },

  plans[]{
    name,
    description,
    price,
    buttonText
  },

  featureComparison{
    heading,
    features[]{
      feature,
      solo,
      pro,
      enterprise
    }
  },

  faqSection{
    heading,
    faqs[]{
      question,
      answer
    }
  }
}`;


// ================= SITE SETTINGS =================
export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  ...,
  "logo": logo.asset->url,
  "favicon": favicon.asset->url
}`;


// ================= INDUSTRIES =================
export const allIndustriesQuery = `*[_type == "industry"]{
  title,
  "slug": slug.current,
  overview,
  "mainImage": mainImage.asset->url,
  seo{
    metaTitle,
    metaDescription
  }
}`;


// ================= SOLUTIONS =================
export const allSolutionsQuery = `*[_type == "solution"]{
  title,
  "slug": slug.current,
  overview,
  "mainImage": mainImage.asset->url,
  seo{
    metaTitle,
    metaDescription
  }
}`;


// ================= POSTS =================
export const allPostsQuery = `*[_type == "post"]{
  title,
  "slug": slug.current,
  overview,
  "mainImage": mainImage.asset->url,
  publishedAt,
  author->{name, "picture": image.asset->url}
}`;


// ================= FEATURE BY SLUG =================
export const featureBySlugQuery = `
*[_type == "featuresPage" && slug.current == $slug][0]{
  title,
  "slug": slug.current,

  seo{
    metaTitle,
    metaDescription,
    keywords
  },

  hero{
    heading,
    subtitle
  },

  overview,

  capabilities[]{
    title,
    description
  },

  benefits[],

  useCases[]{
    title,
    description
  }
}
`;

// ================= SOLUTION BY SLUG =================
export const solutionBySlugQuery = `*[
  _type == "powerDialerPage" &&
  slug.current == $slug
][0]{
  title,
  "slug": slug.current,
  overview,

  heroSection{
    heading,
    subtitle
  },

  whyChooseSection{
    heading,
    subtitle,
    cards[]{ title }
  },

  keyFeaturesSection{
    heading,
    description,
    features[]{
      title,
      description
    }
  }
}`;


// ================= PAGE BY SLUG =================
export const pageBySlugQuery = `*[
  _type in ["homePage", "aboutPage", "contactPage", "supportPage", "pricingPage"]
  && slug.current == $slug
][0]{
  title,
  "slug": slug.current
}`;


// ================= POST BY SLUG =================
export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  overview,
  "mainImage": mainImage.asset->url,
  publishedAt,
  author->{name, "picture": image.asset->url},
  body
}`;


// ================= FEATURED =================
export const featuredFeaturesQuery = `*[_type == "solution" && featured == true]{
  title,
  "slug": slug.current,
  overview,
  "mainImage": mainImage.asset->url
}`;

export const featuredSolutionsQuery = `*[_type == "solution" && featured == true]{
  title,
  "slug": slug.current,
  overview,
  "mainImage": mainImage.asset->url
}`;


// ================= SOLUTIONS PAGE =================
export const SOLUTIONS_PAGE_QUERY = `*[_type == "solutionsPage"][0]{
  title,
  "slug": slug.current,

  heroSection{
    heading,
    subtitle
  },

  coreSolutionsSection{
    heading,
    solutions[]{
      title,
      description,
      buttonLink,
      buttonText
    }
  },

  industrySection{
    heading,
    subtitle,
    industries[]{
      title,
      description
    }
  },

  featuresSection{
    heading,
    subtitle,
    features[]
  }
}`;


// ================= FEATURES PAGE =================
export const FEATURES_PAGE_QUERY = `*[_type == "featuresPage"][0]{
  title,
  "slug": slug.current,

  heroSection{
    heading,
    subtitle
  },

  featuresSection{
    features[]
  },

  faqSection{
    heading,
    subtitle,
    faqs[]{
      question,
      answer
    }
  }
}`;


// ================= NAVIGATION =================
export const NAVIGATION_QUERY = `*[_type == "navigation"][0]{
  title,
  items[]{
    title,
    columns[]{
      title,
      items[]{
        title,
        description,
        "slug": slug.current
      }
    }
  }
}`;
export const AUTO_DIALER_QUERY = 
`*[
    slug.current == "auto-dialer"]
    [0]{
  title,
  "slug": slug.current,

  heroSection{
    heading,
    subtitle
  },

  introSection{
    heading,
    description
  },

  benefitsSection{
    heading,
    benefits[]{
      title,
      description   // ✅ IMPORTANT
    }
  },

  keyFeaturesSection{
    heading,
    features[]{
      title,
      description   // ✅ IMPORTANT
    }
  },

  ctaSection{
    heading,
    description,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink
  }
}`;
export const POWER_DIALER_QUERY = `
*[
  slug.current == "power-dialer"
][0]{
  title,

  heroSection{
    heading,
    subtitle
  },

  benefitsSection{
    heading,
    benefits[]{
      title,
      description   // ✅ ADD THIS
    }
  },

  keyFeaturesSection{
    heading,
    features[]{
      title,
      description   // ✅ ADD THIS (optional but recommended)
    }
  },

  ctaSection{
    heading,
    description,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink
  }
}
`;
export const PREDICTIVE_DIALER_QUERY = `*[
  slug.current == "predictive-dialer"
][0]{
  title,
  "slug": slug.current,

  heroSection{
    heading,
    subtitle
  },

  introSection{
    heading,
    description
  },

  benefitsSection{
    heading,
    benefits[]{
      title,
      description
    }
  },

  keyFeaturesSection{
    heading,
    features[]{
      title,
      description
    }
  },

  ctaSection{
    heading,
    description,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink
  }
}`;
export const PROGRESSIVE_DIALER_QUERY = `*[
  slug.current == "progressive-dialer"
][0]{
  title,
  "slug": slug.current,

  heroSection{
    heading,
    subtitle
  },

  introSection{
    heading,
    description
  },

  benefitsSection{
    heading,
    benefits[]{
      title,
      description
    }
  },

  keyFeaturesSection{
    heading,
    features[]{
      title,
      description
    }
  },

  ctaSection{
    heading,
    description,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink
  }
}`;
export const INBOUND_CALL_QUERY = `*[
  slug.current == "inbound-call-solutions"
][0]{
  title,
  "slug": slug.current,

  heroSection{
    heading,
    subtitle
  },

  keyFeaturesSection{
    heading,
    image{
      asset->{
        url
      }
    },
    features[]
  },

  benefitsSection{
    heading,
    image{
      asset->{
        url
      }
    },
    benefits[]
  },

  ctaSection{
    heading,
    subtitle,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink
  }
}`;
export const OUTBOUND_CALL_QUERY = `*[
  slug.current == "outbound-call-center"
][0]{
  title,
  "slug": slug.current,

  heroSection{
    heading,
    subtitle
  },

  keyFeaturesSection{
    heading,
    image{
      asset->{url}
    },
    features[]{
      title,
      description
    }
  },

  benefitsSection{
    heading,
    image{
      asset->{url}
    },
    benefits[]{
      title,
      description
    }
  },

  ctaSection{
    heading,
    subtitle,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink
  }
}`;
export const TOLL_FREE_QUERY = `*[
  slug.current == "toll-free"
][0]{
  title,
  "slug": slug.current,

  heroSection{
    heading,
    subtitle
  },

  whyChooseSection{
    heading,
    subtitle,
    cards[]{
      title,
      description
    }
  },

  keyFeaturesSection{
    heading,
    description,
    features[]{
      title,
      description
    }
  },

  ctaSection{
    heading,
    subtitle,
    buttonText,
    buttonLink
  }
}`;
export const LOCAL_QUERY = `*[
  _type == "localNumbersPage" &&
  slug.current == "local"
][0]{
  title,
  "slug": slug.current,

  seo{
    metaTitle,
    metaDescription,
    keywords
  },

  heroSection{
    heading,
    subtitle
  },

  whyChooseSection{
    heading,
    subtitle,
    cards[]{
      title,
      description
    }
  },

  featuresSection{
    heading,
    subtitle,
    features[]{
      title,
      description
    }
  },

  ctaSection{
    heading,
    subtitle,
    buttonText,
    buttonLink
  }
}`;
export const CLOUD_PBX_QUERY = `*[
  _type == "cloudPbxPage" &&
  slug.current == "cloud-pbx"
][0]{
  title,
  "slug": slug.current,

  seo{
    metaTitle,
    metaDescription,
    keywords
  },

  heroSection{
    heading,
    subtitle
  },

  whyChooseSection{
    heading,
    subtitle,
    cards[]{
      title,
      description
    }
  },

  keyFeaturesSection{
    heading,
    description,
    features[]{
      title,
      description
    }
  },

  ctaSection{
    heading,
    subtitle,
    buttonText,
    buttonLink
  }
}`;
// ================= UNIFIED COMMUNICATIONS =================
export const UNIFIED_COMMUNICATIONS_QUERY = `*[
  _type == "unifiedCommunicationsPage" &&
  slug.current == "unified-communications"
][0]{
  title,
  "slug": slug.current,

  seo{
    metaTitle,
    metaDescription,
    keywords
  },

  heroSection{
    heading,
    subtitle
  },

  whyChooseSection{
    heading,
    subtitle,
    cards[]{
      title,
      description
    }
  },

  featuresSection{
    heading,
    subtitle,
    features[]{
      title,
      description
    }
  },

  ctaSection{
    heading,
    subtitle,
    buttonText,
    buttonLink
  }
}`;
export const CLICK_TO_CALL_QUERY = `*[_type == "clickToCallPage"][0]{
  title,

  heroSection{
    heading,
    subtitle
  },

  whySection{
    heading,
    cards[]{
      title,
      description
    }
  },

  howItWorksSection{
    heading,
    steps[]{
      title,
      description
    }
  },

  keyFeaturesSection{
    heading,
    features[]
  },

  ctaSection{
    heading,
    subtitle,
    buttonText,
    buttonLink
  }
}`;
export const SMS_MMS_API_QUERY = `*[_type == "smsMmsApiPage" && slug.current == "sms-mms-api"][0]{
  seo{
    metaTitle,
    metaDescription
  },

  heroSection{
    heading,
    subtitle
  },

  whyChooseSection{
    heading,
    cards[]{
      title,
      description
    }
  },

  useCaseSection{
    heading,
    items[]{
      title,
      description
    }
  },

  stepsSection{
    heading,
    steps[]{
      title,
      description
    }
  },

  ctaSection{
    heading,
    subtitle,
    buttonText,
    buttonLink
  }
}`;
export const NUMBER_MASKING_QUERY = `*[
  _type == "numberMaskingPage" &&
  slug.current == "number-masking"
][0]{
  seo{
    metaTitle,
    metaDescription,
    keywords
  },

  heroSection{
    heading,
    subtitle
  },

  benefitsSection{
    heading,
    cards[]{
      title,
      description
    }
  },

  howItWorksSection{
    heading,
    steps[]{
      title,
      description
    }
  },

  platformSection{
    heading,
    cards[]{
      title,
      description
    }
  },

  ctaSection{
    heading,
    subtitle,
    buttonText,
    buttonLink
  }
}`;

export const FEATURES_MAIN_PAGE_QUERY = `
*[_type == "featuresPage"][0]{
  title,
  "slug": slug.current,

  seo{
    metaTitle,
    metaDescription,
    keywords
  },

  heroSection{
    heading,
    subtitle
  },

  featuresSection{
    heading,
    features[]{
      title,
      description,

      "slug": slug.current,

      link,              // ✅ ADD THIS

      button{            // ✅ ADD THIS (VERY IMPORTANT)
        link
      }
    }
  },

  faqSection{
    heading,
    faqs[]{
      question,
      answer
    }
  }
}
`;
export const FEATURE_DETAIL_QUERY = `
*[_type == "featuresMainPage"]{
  title,
  "slug": slug.current,
  heroSection,
  overviewSection,
  capabilitiesSection,
  benefitsSection,
  useCasesSection
}
`;

// ================= INDUSTRY BY SLUG =================
// src/sanity/queries.ts

const query = `
*[_type == "industryPage" && slug.current == $slug][0]{
  title,

  seo,

  heroSection{
    heading,
    subtitle
  },

  overviewSection{
    heading,
    description
  },

  benefitsSection{
    heading,
    benefits
  },

  challengesSection{
    heading,
    challenges[]{
      text
    }
  },

  ourTailoredSolutionsSection{
    heading,
    solutions[]{
      title
    }
  },

  realWorldUseCasesSection{
    heading,
    useCases[]{
      title
    }
  }
}
`;