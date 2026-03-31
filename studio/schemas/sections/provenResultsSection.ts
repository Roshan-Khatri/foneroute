import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'provenResultsSection',
  title: 'Proven Results Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'bulletPoints',
      title: 'Highlight Bullet Points',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [{type: 'stat'}],
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'cta',
    }),
  ],
})
