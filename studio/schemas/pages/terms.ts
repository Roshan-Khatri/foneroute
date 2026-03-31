import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'terms',
  title: 'Terms of Service Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
        }),
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
        }),
      ],
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
    }),
    defineField({
      name: 'termsSections',
      title: 'Terms Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'termsSection',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{type: 'block'}],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'contactBox',
      title: 'Contact Box',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),
      ],
    }),
  ],
})
