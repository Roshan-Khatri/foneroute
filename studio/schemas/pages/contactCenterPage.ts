import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactCenterPage',
  title: 'Contact Center Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        { type: 'heroSection' },
        { type: 'featuresSection' },
        { type: 'statsSection' },
        { type: 'testimonialsSection' },
        { type: 'featureComparisonSection' },
        { type: 'ctaSection' },
        { type: 'faqSection' },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return { ...selection }
    },
  },
})
