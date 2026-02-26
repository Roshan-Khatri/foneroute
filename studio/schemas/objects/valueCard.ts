import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'valueCard',
  title: 'Value Card',
  type: 'object',
  fields: [
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
})
