
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'topSolutionsSection',
  title: 'Top Solutions Section',
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
      name: 'solutionCards',
      title: 'Solution Cards',
      type: 'array',
      of: [
        {
          title: 'Solution Card',
          name: 'solutionCard',
          type: 'object',
          fields: [
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
                  description: 'Use a relative path for internal links (e.g., /solutions/finance).',
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
        title: title || 'Top Solutions Section',
      }
    },
  },
})
