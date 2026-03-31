import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'industrySolutions',
  title: 'Industry Solutions',
  type: 'object',
  fields: [
    defineField({
      name: 'industries',
      title: 'Industries',
      type: 'array',
      of: [
        defineType({
          name: 'industry',
          title: 'Industry',
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({name: 'link', title: 'Link', type: 'url'}),
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
