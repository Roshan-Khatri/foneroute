import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'statsSection',
  title: 'Stats Section',
  type: 'object',
  fields: [
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
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
        },
      ],
    }),
  ],
})
