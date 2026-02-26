
// HomePage Query
export const HOME_PAGE_QUERY = `*[_type == "homePage"][0] {
  title,
  "slug": slug.current,
  seo {
    metaTitle,
    metaDescription,
    keywords
  },
  "sections": sections[] {
    ...,
    _type == "heroSection" => {
      ...,
      "slides": slides[] {
        ...,
        "image": image.asset->url
      }
    },
    _type == "featuresSection" => {
      ...,
      "features": features[] {
        ...,
        "icon": icon.asset->url
      }
    },
    _type == "statsSection" => {
      ...,
      "stats": stats[] {
        ...
      }
    },
    _type == "testimonialsSection" => {
      ...,
      "testimonials": testimonials[] {
        ...
      }
    },
    _type == "ctaSection" => {
      ...
    }
  }
}`;

// AboutPage Query
export const ABOUT_PAGE_QUERY = `*[_type == "aboutPage"][0] {
  title,
  "slug": slug.current,
  seo {
    metaTitle,
    metaDescription,
    keywords
  },
  "sections": sections[] {
    ...,
    _type == "ourValuesSection" => {
      ...,
      "values": values[] {
        ...
      }
    }
  }
}`;

// ContactPage Query
export const CONTACT_PAGE_QUERY = `*[_type == "contactPage"][0] {
  title,
  "slug": slug.current,
  seo {
    metaTitle,
    metaDescription,
    keywords
  },
  "sections": sections[] {
    ...
  }
}`;

// PrivacyPolicy Page Query
export const PRIVACY_POLICY_PAGE_QUERY = `*[_type == "privacyPolicy"][0] {
  title,
  "slug": slug.current,
  seo {
    metaTitle,
    metaDescription,
    keywords
  },
  body
}`;

// Terms Page Query
export const TERMS_PAGE_QUERY = `*[_type == "terms"][0] {
  title,
  "slug": slug.current,
  seo {
    metaTitle,
    metaDescription,
    keywords
  },
  body
}`;

// Support Page Query
export const SUPPORT_PAGE_QUERY = `*[_type == "supportPage"][0] {
  title,
  "slug": slug.current,
  seo {
    metaTitle,
    metaDescription,
    keywords
  },
  "sections": sections[] {
    ...,
    _type == "faqSection" => {
      ...,
      "faqs": faqs[] {
        ...
      }
    }
  }
}`;


// All Features Query
export const allFeaturesQuery = `*[_type == "solution"]{
  title,
  "slug": slug.current,
  overview,
  "mainImage": mainImage.asset->url,
  seo {
    metaTitle,
    metaDescription,
    keywords
  }
}`;

// All Industries Query
export const allIndustriesQuery = `*[_type == "industry"]{
  title,
  "slug": slug.current,
  overview,
  "mainImage": mainImage.asset->url,
  seo {
    metaTitle,
    metaDescription,
    keywords
  }
}`;

// All Posts Query
export const allPostsQuery = `*[_type == "post"]{
  title,
  "slug": slug.current,
  overview,
  "mainImage": mainImage.asset->url,
  publishedAt,
  author->{name, "picture": image.asset->url},
  seo {
    metaTitle,
    metaDescription,
    keywords
  }
}`;

// All Solutions Query
export const allSolutionsQuery = `*[_type == "solution"]{
  title,
  "slug": slug.current,
  overview,
  "mainImage": mainImage.asset->url,
  seo {
    metaTitle,
    metaDescription,
    keywords
  }
}`;

// Feature by Slug Query
export const featureBySlugQuery = `*[_type == "solution" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  overview,
  "mainImage": mainImage.asset->url,
  seo {
    metaTitle,
    metaDescription,
    keywords
  },
  "sections": sections[] {
    ...,
    _type == 'featureComparisonSection' => {
      ...,
      "features": features[] {
        ...,
        "icon": icon.asset->url
      }
    },
    _type == 'ctaSection' => {
      ...
    }
  }
}`;

// Featured Features Query
export const featuredFeaturesQuery = `*[_type == "solution" && featured == true]{
  title,
  "slug": slug.current,
  overview,
  "mainImage": mainImage.asset->url,
  seo {
    metaTitle,
    metaDescription,
    keywords
  }
}`;

// Featured Solutions Query
export const featuredSolutionsQuery = `*[_type == "solution" && featured == true]{
  title,
  "slug": slug.current,
  overview,
  "mainImage": mainImage.asset->url,
  seo {
    metaTitle,
    metaDescription,
    keywords
  }
}`;

// Page by Slug Query
export const pageBySlugQuery = `*[_type in ["homePage", "aboutPage", "contactPage", "privacyPolicy", "terms", "supportPage"] && slug.current == $slug][0]{
  _type,
  title,
  "slug": slug.current,
  seo,
  body,
  "sections": sections[] {
    ...,
    _type == "heroSection" => {
      ...,
      "slides": slides[] {
        ...,
        "image": image.asset->url
      }
    },
    _type == "featuresSection" => {
      ...,
      "features": features[] {
        ...,
        "icon": icon.asset->url
      }
    },
    _type == "statsSection" => {
      ...,
      "stats": stats[] {
        ...
      }
    },
    _type == "testimonialsSection" => {
      ...,
      "testimonials": testimonials[] {
        ...
      }
    },
    _type == "ctaSection" => {
      ...
    },
    _type == "ourValuesSection" => {
      ...,
      "values": values[] {
        ...
      }
    },
    _type == "faqSection" => {
      ...,
      "faqs": faqs[] {
        ...
      }
    }
  }
}`;

// Post by Slug Query
export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  overview,
  "mainImage": mainImage.asset->url,
  publishedAt,
  author->{name, "picture": image.asset->url},
  seo {
    metaTitle,
    metaDescription,
    keywords
  },
  body
}`;

// Site Settings Query
export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  ...,
  "logo": logo.asset->url,
  "favicon": favicon.asset->url
}`;

// Solution by Slug Query
export const solutionBySlugQuery = `*[_type == "solution" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  overview,
  "mainImage": mainImage.asset->url,
  seo {
    metaTitle,
    metaDescription,
    keywords
  },
  "sections": sections[] {
    ...,
    _type == 'featureComparisonSection' => {
      ...,
      "features": features[] {
        ...,
        "icon": icon.asset->url
      }
    },
    _type == 'ctaSection' => {
      ...
    }
  }
}`;

// Industry by Slug Query
export const industryBySlugQuery = `*[_type == "industry" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  overview,
  "mainImage": mainImage.asset->url,
  seo,
  "sections": sections[] {
    ...,
    _type == 'ctaSection' => {
      ...
    }
  }
}`;
