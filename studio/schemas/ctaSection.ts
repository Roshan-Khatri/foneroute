import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'ctaSection',
  title: 'CTA Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
    }),
    defineField({
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string',
        }),
        defineField({
          name: 'url',
          title: 'Button URL',
          type: 'string',
          description:
            'Use a relative path for internal links (e.g., /about) or a full URL for external links (e.g., https://google.com).',
        }),
      ],
    }),
    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string',
        }),
        defineField({
          name: 'url',
          title: 'Button URL',
          type: 'string',
          description:
            'Use a relative path for internal links (e.g., /about) or a full URL for external links (e.g., https://google.com).',
        }),
      ],
    }),
  ],
});