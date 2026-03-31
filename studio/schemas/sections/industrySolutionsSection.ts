import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'industrySolutionsSection',
  title: 'Industry Solutions Section',
  type: 'object',
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
      name: 'industryCards',
      title: 'Industry Cards',
      type: 'array',
      of: [
        {
          title: 'Industry Card',
          name: 'industryCard',
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'button',
              title: 'Button',
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                }),
                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'string',
                  description: 'Use a relative path for internal links (e.g., /solutions/healthcare).',
                }),
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: title || 'Industry Solutions Section',
      }
    },
  },
})
