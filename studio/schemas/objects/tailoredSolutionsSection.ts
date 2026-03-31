import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tailoredSolutionsSection',
  title: 'Tailored Solutions Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Section Heading', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', title: 'Section Description', type: 'text'}),
    defineField({
      name: 'industryCards',
      title: 'Industry Cards',
      type: 'array',
      of: [{type: 'industrySolutionCard'}],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})
