import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pricingComparisonSection',
  title: 'Pricing Comparison Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'table',
      title: 'Pricing Table',
      type: 'table',
    }),
  ],
})