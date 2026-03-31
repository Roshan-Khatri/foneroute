import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'whyChooseUsCard',
  title: 'Why Choose Us Card',
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
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
  ],
})
