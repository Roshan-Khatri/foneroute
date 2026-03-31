import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'industrySolutionCard',
  title: 'Industry Solution Card',
  type: 'object',
  fields: [
    defineField({name: 'icon', title: 'Icon', type: 'image', options: {hotspot: true}}),
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({
      name: 'bulletPoints',
      title: 'Bullet Points',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({name: 'cta', title: 'CTA Button', type: 'cta'}),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
  },
})
