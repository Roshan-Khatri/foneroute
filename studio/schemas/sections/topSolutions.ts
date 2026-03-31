import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'topSolutions',
  title: 'Top Solutions',
  type: 'object',
  fields: [
    defineField({
      name: 'solutions',
      title: 'Solutions',
      type: 'array',
      of: [
        defineType({
          name: 'solution',
          title: 'Solution',
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
