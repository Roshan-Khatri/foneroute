
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'whyChooseUsSection',
  title: 'Why Choose Us Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Section Heading', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      validation: (Rule) => Rule.max(3),
      of: [{type: 'valueCard'}],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})
