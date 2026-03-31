import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'Supports internal links like /contact or external links like https://example.com'
    }),
    defineField({
      name: 'isExternal',
      title: 'External Link',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
