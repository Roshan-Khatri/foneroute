
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comprehensiveFeaturesSection',
  title: 'Comprehensive Features Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'featureCards',
      title: 'Feature Cards',
      type: 'array',
      of: [
        {
          title: 'Feature Card',
          name: 'featureCard',
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: title || 'Comprehensive Features Section',
      }
    },
  },
})
