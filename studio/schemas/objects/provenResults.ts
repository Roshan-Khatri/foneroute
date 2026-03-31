import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'provenResults',
  title: 'Proven Results',
  type: 'object',
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        defineField({
          name: 'stat',
          title: 'Stat',
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Value', type: 'string'}),
            defineField({name: 'label', title: 'Label', type: 'string'}),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'value',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'link',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Proven Results',
      }
    },
  },
})
