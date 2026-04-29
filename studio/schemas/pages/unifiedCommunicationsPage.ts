import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'unifiedCommunicationsPage',
  title: 'Unified Communications Page',
  type: 'document',

  fields: [
    // ✅ BASIC
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

    // ✅ SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule) =>
            Rule.required().max(60).warning('Keep under 60 characters'),
        }),

        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          validation: (Rule) =>
            Rule.required().max(160).warning('Keep under 160 characters'),
        }),

        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),

    // ✅ HERO SECTION
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
        }),
      ],
    }),

    // ✅ WHY CHOOSE SECTION
    defineField({
      name: 'whyChooseSection',
      title: 'Why Choose Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
        }),

        defineField({
          name: 'cards',
          title: 'Cards',
          type: 'array',
          validation: (Rule) => Rule.min(1).error('Add at least one card'),
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
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

    // ✅ FEATURES SECTION (RENAMED for consistency)
    defineField({
      name: 'featuresSection', // 🔥 FIXED NAME (important for frontend)
      title: 'Features Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'subtitle', // 🔥 CHANGED from description → subtitle (matches UI)
          title: 'Subtitle',
          type: 'text',
        }),

        defineField({
          name: 'features',
          title: 'Features',
          type: 'array',
          validation: (Rule) => Rule.min(1),
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
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

    // ✅ CTA SECTION
    defineField({
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
        }),

        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
          validation: (Rule) =>
            Rule.required().custom((link) => {
              if (!link) return 'Required'
              if (!link.startsWith('/')) {
                return 'Must start with "/" (e.g. /contact)'
              }
              return true
            }),
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
})