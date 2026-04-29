import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'localNumbersPage',
  title: 'Local Numbers Page',
  type: 'document',

  fields: [
    // =========================
    // BASIC
    // =========================
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
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    // =========================
    // SEO
    // =========================
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
          rows: 3,
          validation: (Rule) =>
            Rule.required().max(160).warning('Keep under 160 characters'),
        }),

        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags',
          },
        }),
      ],
    }),

    // =========================
    // HERO SECTION
    // =========================
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
          rows: 3,
        }),
      ],
    }),

    // =========================
    // WHY CHOOSE SECTION
    // =========================
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
          rows: 2,
        }),

        defineField({
          name: 'cards',
          title: 'Cards',
          type: 'array',
          validation: (Rule) =>
            Rule.min(4).warning('Add at least 4 cards'),
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

              preview: {
                select: { title: 'title' },
              },
            },
          ],
        }),
      ],
    }),

    // =========================
    // FEATURES SECTION
    // =========================
    defineField({
      name: 'featuresSection',
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
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
          rows: 2,
        }),

        defineField({
          name: 'features',
          title: 'Features',
          type: 'array',
          validation: (Rule) =>
            Rule.min(6).warning('Add at least 6 features'),
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

              preview: {
                select: { title: 'title' },
              },
            },
          ],
        }),
      ],
    }),

    // =========================
    // CTA SECTION
    // =========================
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
          rows: 2,
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
          type: 'string', // ✅ supports /contact
          description: 'Use internal routes like /contact or /pricing',
          validation: (Rule) => Rule.required(),
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