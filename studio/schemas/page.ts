import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the page (e.g., Home, About Us, Contact).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo', // Custom object type for SEO metadata
      description: 'SEO meta title, description, and image.',
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      description: 'Build the page by adding and ordering content sections.',
      of: [
        {type: 'heroSection'},
        {type: 'featuresSection'},
        {type: 'topSolutionsSection'},
        {type: 'industriesSection'},
        {type: 'statsSection'},
        {type: 'testimonialsSection'},
        {type: 'whyChooseUsSection'},
        {type: 'ourValuesSection'},
        {type: 'pricingComparisonSection'},
        {type: 'faqSection'},
        {type: 'ctaSection'},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled Page',
      }
    },
  },
})
