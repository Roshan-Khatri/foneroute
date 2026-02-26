import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ourValuesSection',
  title: 'Our Values Section',
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
      name: 'values',
      title: 'Values',
      type: 'array',
      of: [{type: 'valueCard'}],
    }),
  ],
})
