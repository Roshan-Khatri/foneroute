import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'finalCtaSection',
  title: 'Final CTA Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'actionButton',
      title: 'Action Button',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Button Label',
          type: 'string',
        }),
        defineField({
          name: 'link',
          title: 'Button Link',
          type: 'string',
          description:
            'Enter a relative path for internal pages (e.g., /contact) or a full URL for external sites.',
        }),
      ],
    }),
  ],
})
