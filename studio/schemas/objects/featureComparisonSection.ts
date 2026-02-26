import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featureComparisonSection',
  title: 'Feature Comparison Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Section Heading', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
        name: 'plans',
        title: 'Plans',
        type: 'array',
        of: [{type: 'string'}],
    }),
    defineField({
        name: 'features',
        title: 'Features',
        type: 'array',
        of: [{
            type: 'object',
            name: 'feature',
            title: 'Feature',
            fields: [
                defineField({name: 'name', title: 'Feature Name', type: 'string'}),
                defineField({
                    name: 'availability',
                    title: 'Availability',
                    type: 'array',
                    of: [{type: 'boolean'}]
                })
            ]
        }]
    })
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})
