export const HOME_PAGE_QUERY = `*[_type == "home"][0]{
  sections[]{
    _type,
    heading,
    description,

    slides[]{
      heading,
      description,
      "image": image.asset->url,
      primaryButton{link},
      secondaryButton{link}
    },

    features[]{
      title,
      description,
      icon
    },

    reasons[]{
      title,
      description,
      icon
    },

    industries[]{
      title,
      description,
      "image": image.asset->url
    },

    solutions[]{
      title,
      description,
      link
    },

    values[]{
      title,
      description,
      icon
    },

    results[]{
      stat,
      description
    },

    testimonials[]{
      name,
      company,
      quote,
      rating
    },

    featureComparison[]{
      feature,
      solo,
      pro,
      enterprise
    },

    faqs[]{
      question,
      answer
    }
  }
}`;