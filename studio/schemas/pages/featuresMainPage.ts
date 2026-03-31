import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featuresMainPage',
  title: 'Features Main Page',
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
      title: 'SEO Settings',
      type: 'object',
      options: {collapsible: true, collapsed: true},
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'The title that appears in browser tabs and search engine results.',
          validation: (Rule) => [
            Rule.required(),
            Rule.max(60).warning('Meta titles should ideally be 60 characters or less.'),
          ],
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          description: 'A brief summary of the page content for search engines.',
          validation: (Rule) => [
            Rule.required(),
            Rule.max(160).warning('Meta descriptions should ideally be 160 characters or less.'),
          ],
        }),
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Add relevant keywords for the page to improve searchability.',
        }),
      ],
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'overviewSection',
      title: 'Overview Section',
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
      ],
    }),
    defineField({
      name: 'keyCapabilities',
      title: 'Key Capabilities',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'benefitsSection',
      title: 'Benefits Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'benefits',
          title: 'Benefits',
          type: 'array',
          of: [{type: 'string'}],
        }),
      ],
    }),
    defineField({
      name: 'useCasesSection',
      title: 'Use Cases Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'cases',
          title: 'Cases',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
})
