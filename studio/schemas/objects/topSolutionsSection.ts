import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'topSolutionsSection',
  title: 'Top Solutions Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Section Heading', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'solutionCards',
      title: 'Solution Cards',
      type: 'array',
      of: [{type: 'topSolutionCard'}],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})
