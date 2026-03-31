import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ourValues',
  title: 'Our Values',
  type: 'object',
  fields: [
    defineField({
      name: 'values',
      title: 'Values',
      type: 'array',
      of: [
        defineType({
          name: 'value',
          title: 'Value',
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({name: 'icon', title: 'Icon', type: 'string'}),
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        }),
      ],
    }),
  ],
})
