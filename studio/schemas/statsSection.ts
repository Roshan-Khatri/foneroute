import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'statsSection',
  title: 'Stats Section',
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
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [{ type: 'statItem' }],
    }),
  ],
});