import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ourValuesSection',
  title: 'Our Values Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Section Heading', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'values',
      title: 'Values',
      type: 'array',
      of: [{type: 'valueCard'}],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})
