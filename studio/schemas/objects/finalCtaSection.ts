import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'finalCtaSection',
  title: 'Final CTA Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Section Heading', type: 'string'}),
    defineField({name: 'cta', title: 'CTA', type: 'cta'}),
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})
