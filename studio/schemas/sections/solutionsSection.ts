import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'solutionsSection',
  title: 'Solutions Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'solutions',
      title: 'Solutions',
      type: 'array',
      of: [
        defineType({
          name: 'solutionItem',
          title: 'Solution Item',
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
              type: 'button',
            }),
          ],
        }),
      ],
    }),
  ],
})
