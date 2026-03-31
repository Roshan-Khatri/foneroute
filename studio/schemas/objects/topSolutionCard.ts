import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'topSolutionCard',
  title: 'Top Solution Card',
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
    defineField({
      name: 'button',
      title: 'Button',
      type: 'cta',
    }),
  ],
})
