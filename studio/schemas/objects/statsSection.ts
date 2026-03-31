import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'statsSection',
  title: 'Stats Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Section Heading', type: 'string'}),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [{type: 'statItem'}],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})
