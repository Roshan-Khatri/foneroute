
import {defineField, defineType} from 'sanity'

// Custom validation for internal or external links
const linkValidation = (Rule) =>
  Rule.custom((value) => {
    if (typeof value === 'undefined') {
      return true // Allow empty value
    }
    if (typeof value !== 'string') {
      return 'URL must be a string.'
    }
    if (value.startsWith('/') || value.startsWith('http://') || value.startsWith('https://')) {
      return true
    }
    return 'URL must be a valid internal path (e.g., /contact) or a full external URL.'
  })

export default defineType({
  name: 'featuresPage',
  title: 'Features Page',
  type: 'document',
  fields: [
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // Slug
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

    // SEO Section
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Title for search engine results (max 60 characters).',
          validation: (Rule) => [
            Rule.required(),
            Rule.max(60).warning('Meta titles should ideally be 60 characters or less.'),
          ],
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          description: 'A brief summary for search engines (max 160 characters).',
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
          description: 'Add relevant keywords to improve searchability.',
        }),
      ],
    }),

    // Hero Section
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

    // Features Section
    defineField({
      name: 'featuresSection',
      title: 'Features Section',
      type: 'object',
      fields: [
        defineField({
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [
            {
              title: 'Feature',
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'text'}),
                defineField({
                  name: 'button',
                  title: 'Button',
                  type: 'object',
                  fields: [
                    defineField({name: 'text', title: 'Button Text', type: 'string'}),
                    defineField({
                      name: 'link',
                      title: 'Button Link',
                      type: 'string',
                      validation: linkValidation,
                    }),
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // FAQ Section
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
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
        defineField({
          name: 'faqs',
          title: 'FAQs',
          type: 'array',
          of: [
            {
              title: 'FAQ',
              type: 'object',
              fields: [
                defineField({name: 'question', title: 'Question', type: 'string'}),
                defineField({name: 'answer', title: 'Answer', type: 'text'}),
              ],
            },
          ],
        }),
      ],
    }),
  ],

  // Preview Configuration
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled Features Page',
      }
    },
  },
})
