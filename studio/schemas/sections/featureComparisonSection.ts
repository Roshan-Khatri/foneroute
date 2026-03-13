import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'featureComparisonSection',
  title: 'Feature Comparison Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'productA_name',
      title: 'Product A Name',
      type: 'string',
    }),
    defineField({
      name: 'productB_name',
      title: 'Product B Name',
      type: 'string',
    }),
    defineField({
      name: 'productC_name',
      title: 'Product C Name',
      type: 'string',
    }),
    defineField({
      name: 'comparisons',
      title: 'Feature Comparisons',
      type: 'array',
      of: [{ type: 'featureComparison' }],
    }),
  ],
})
