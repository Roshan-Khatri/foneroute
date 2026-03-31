import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'industrySolutionsSection',
  title: 'Industry Solutions Section',
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
            defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
              validation: (Rule) => Rule.uri({allowRelative: true}),
            }),
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
