import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Contact Page',
      }
    },
  },
  fields: [
    // Basic Fields
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

    // Hero Section
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        defineField({name: 'subtitle', title: 'Subtitle', type: 'text'}),
      ],
    }),

    // Contact Form Section
    defineField({
      name: 'contactFormSection',
      title: 'Contact Form Section',
      type: 'object',
      fields: [
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
        defineField({
          name: 'solutions',
          title: 'Solutions for Dropdown',
          type: 'array',
          of: [{type: 'string'}],
        }),
        defineField({name: 'submitButtonText', title: 'Submit Button Text', type: 'string'}),
      ],
    }),

    // Get In Touch Section
    defineField({
      name: 'getInTouchSection',
      title: 'Get In Touch Section',
      type: 'object',
      fields: [
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        defineField({
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'touchItem',
              title: 'Touch Item',
              fields: [
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'text'}),
                defineField({name: 'value', title: 'Value (Email or Phone)', type: 'string'}),
              ],
            },
          ],
        }),
      ],
    }),

    // Locations Section
    defineField({
      name: 'locationsSection',
      title: 'Locations Section',
      type: 'object',
      fields: [
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        defineField({name: 'subtitle', title: 'Subtitle', type: 'text'}),
        defineField({
          name: 'locations',
          title: 'Locations',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'locationItem',
              title: 'Location Item',
              fields: [
                defineField({name: 'city', title: 'City', type: 'string'}),
                defineField({name: 'address', title: 'Address', type: 'text'}),
                defineField({name: 'phone', title: 'Phone', type: 'string'}),
                defineField({name: 'workingHours', title: 'Working Hours', type: 'string'}),
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
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        defineField({name: 'subtitle', title: 'Subtitle', type: 'text'}),
        defineField({
          name: 'faqs',
          title: 'FAQs',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'faqItem',
              title: 'FAQ Item',
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
})
