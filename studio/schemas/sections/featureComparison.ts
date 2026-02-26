import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featureComparison',
  title: 'Feature Comparison',
  type: 'object',
  fields: [
    defineField({
      name: 'rows',
      title: 'Comparison Rows',
      type: 'array',
      of: [
        defineType({
          name: 'comparisonRow',
          title: 'Comparison Row',
          type: 'object',
          fields: [
            defineField({name: 'feature', title: 'Feature', type: 'string'}),
            defineField({name: 'basic', title: 'Basic Plan', type: 'string'}),
            defineField({name: 'pro', title: 'Pro Plan', type: 'string'}),
            defineField({name: 'enterprise', title: 'Enterprise Plan', type: 'string'}),
          ],
          preview: {
            select: {
              title: 'feature',
            },
          },
        }),
      ],
    }),
  ],
})
