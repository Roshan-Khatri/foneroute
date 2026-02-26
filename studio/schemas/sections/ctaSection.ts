import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ctaSection',
  title: 'CTA Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Heading', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'object',
      fields: [
        defineField({name: 'text', title: 'Button Text', type: 'string'}),
        defineField({
          name: 'href',
          title: 'Button Link',
          type: 'string',
          description:
            'Use a relative path for internal links (e.g., /case-studies) or a full URL for external links (e.g., https://example.com).',
        }),
      ],
    }),
  ],
})
