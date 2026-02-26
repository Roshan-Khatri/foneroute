
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'supportPage',
  title: 'Support Page',
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
      name: 'pageHeader',
      title: 'Page Header',
      type: 'object',
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'The main title for the support page.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
          description: 'The subtitle displayed below the main title.',
        }),
      ],
    }),
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      options: {collapsible: true, collapsed: true},
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          description: 'The heading for the FAQ section (e.g., "Frequently Asked Questions").',
        }),
        defineField({
          name: 'faqs',
          title: 'FAQs',
          type: 'array',
          of: [
            defineField({
              name: 'faqItem',
              title: 'FAQ Item',
              type: 'object',
              fields: [
                defineField({
                  name: 'question',
                  title: 'Question',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'answer',
                  title: 'Answer',
                  type: 'array',
                  of: [{type: 'block'}],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'getInTouchSection',
      title: 'Get in Touch Section',
      type: 'object',
      options: {collapsible: true, collapsed: true},
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          description: 'The heading for the "Get in Touch" section.',
        }),
        defineField({
          name: 'cards',
          title: 'Contact Cards',
          type: 'array',
          of: [
            defineField({
              name: 'contactCard',
              title: 'Contact Card',
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
                defineField({
                  name: 'buttonText',
                  title: 'Button Text',
                  type: 'string',
                }),
                defineField({
                  name: 'buttonLink',
                  title: 'Button Link',
                  type: 'string',
                  description:
                    'Accepts internal paths (e.g., /contact) or external URLs (e.g., https://example.com)',
                  validation: (Rule) =>
                    Rule.uri({
                      allowRelative: true,
                      scheme: ['http', 'https', 'mailto', 'tel'],
                    }),
                }),
              ],
            }),
          ],
        }),
      ],
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
          type: 'string',
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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Support Page',
        subtitle: subtitle || '',
      }
    },
  },
})
