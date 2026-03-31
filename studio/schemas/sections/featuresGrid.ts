import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featuresGrid',
  title: 'Features Grid',
  type: 'object',
  fields: [
    defineField({name: 'sectionTitle', title: 'Section Title', type: 'string'}),
    defineField({name: 'sectionDescription', title: 'Section Description', type: 'text'}),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        defineType({
          name: 'feature',
          title: 'Feature',
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
