import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'industriesSection',
  title: 'Industries Section',
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
      name: 'industries',
      title: 'Industries',
      type: 'array',
      of: [
        defineType({
          name: 'industryItem',
          title: 'Industry Item',
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
