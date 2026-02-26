import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featuresGridSection',
  title: 'Features Grid Section',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          name: 'gridFeature',
          title: 'Grid Feature',
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Name', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
          ],
        },
      ],
    }),
  ],
})
