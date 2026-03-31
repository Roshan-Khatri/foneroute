import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'slide',
          title: 'Slide',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({
              name: 'primaryButton',
              title: 'Primary Button',
              type: 'object',
              fields: [
                defineField({name: 'label', title: 'Label', type: 'string'}),
                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'string',
                  description: 'Use a relative path for internal links (e.g., /about) or a full URL.',
                }),
              ],
            }),
            defineField({
              name: 'secondaryButton',
              title: 'Secondary Button',
              type: 'object',
              fields: [
                defineField({name: 'label', title: 'Label', type: 'string'}),
                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'string',
                  description: 'Use a relative path for internal links (e.g., /contact) or a full URL.',
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'heading',
              media: 'image',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'slides[0].heading',
    },
    prepare({title}) {
      return {
        title: title || 'Hero Section',
      }
    },
  },
})
