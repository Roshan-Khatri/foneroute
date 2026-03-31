import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featuresSection',
  title: 'Features Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Section Heading', type: 'string'}),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'featureCard'}],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})
