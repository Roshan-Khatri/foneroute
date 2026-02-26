import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comprehensiveFeaturesSection',
  title: 'Comprehensive Features Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subtext',
      title: 'Subtext',
      type: 'text',
    }),
    defineField({
      name: 'featureCards',
      title: 'Feature Cards',
      type: 'array',
      of: [{type: 'featureCard'}],
    }),
    defineField({
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'cta',
    }),
    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'cta',
    }),
  ],
})
