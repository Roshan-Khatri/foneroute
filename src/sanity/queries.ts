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
export const featureBySlugQuery = `*[_type == "solution" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  overview,
  "mainImage": mainImage.asset->url,
  sections[]{...}
}`;


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