import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'industryCard',
  title: 'Industry Card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
  ],
})
