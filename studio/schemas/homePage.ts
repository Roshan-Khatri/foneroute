import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'description', title: 'Description', type: 'text'},
        {name: 'image', title: 'Image', type: 'image'},
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'heroSection'},
        {type: 'statsSection'},
        {type: 'featuresSection'},
        {type: 'topSolutionsSection'},
        {type: 'whyChooseUsSection'},
        {type: 'testimonialsSection'},
        {type: 'industrySolutionsSection'},
        {type: 'ourValuesSection'},
        {type: 'provenResultsSection'},
        {type: 'featureComparisonSection'},
        {type: 'faqSection'},
        {type: 'comprehensiveFeaturesSection'},
        {type: 'featuresGridSection'},
        {type: 'ctaSection'},
        {type: 'finalCtaSection'},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
