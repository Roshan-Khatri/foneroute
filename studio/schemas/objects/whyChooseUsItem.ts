import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'whyChooseUsItem',
  title: 'Why Choose Us Item',
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
  ],
})
