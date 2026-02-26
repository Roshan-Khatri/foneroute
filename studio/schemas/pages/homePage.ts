
import {defineField, defineType} from 'sanity'

const linkValidation = (Rule) =>
  Rule.required().custom((value) => {
    if (typeof value !== 'string') {
      return 'URL must be a string.'
    }
    if (value.startsWith('/') || value.startsWith('http://') || value.startsWith('https://')) {
      return true
    }
    return 'URL must be a valid internal path (e.g., /contact) or external URL (e.g., https://example.com).'
  })

export default defineType({
  name: 'homePage',
  title: 'Home Page',
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
          validation: (Rule) => Rule.required().max(60),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          validation: (Rule) => Rule.required().max(160),
        }),
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
        }),
      ],
    }),

    // Hero Slider
    defineField({
      name: 'heroSlider',
      title: 'Hero Slider',
      type: 'array',
      of: [
        {
          title: 'Slide',
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({
              name: 'primaryButton',
              title: 'Primary Button',
              type: 'object',
              fields: [
                defineField({name: 'text', title: 'Text', type: 'string'}),
                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'string',
                  validation: linkValidation,
                }),
              ],
            }),
            defineField({
              name: 'secondaryButton',
              title: 'Secondary Button',
              type: 'object',
              fields: [
                defineField({name: 'text', title: 'Text', type: 'string'}),
                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'string',
                  validation: linkValidation,
                }),
              ],
            }),
          ],
        },
      ],
    }),

    // Features Section
    defineField({
      name: 'featuresSection',
      title: 'Features Section',
      type: 'object',
      fields: [
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
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
                defineField({name: 'icon', title: 'Icon', type: 'string'}),
              ],
            },
          ],
        }),
      ],
    }),

    // Why Choose Us Section
    defineField({
      name: 'whyChooseUsSection',
      title: 'Why Choose Us Section',
      type: 'object',
      fields: [
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
        defineField({
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              title: 'Item',
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'text'}),
                defineField({name: 'icon', title: 'Icon', type: 'string'}),
              ],
            },
          ],
        }),
      ],
    }),

    // Proven Results Section
    defineField({
      name: 'provenResultsSection',
      title: 'Proven Results Section',
      type: 'object',
      fields: [
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
        defineField({
          name: 'bulletPoints',
          title: 'Bullet Points',
          type: 'array',
          of: [{type: 'string'}],
        }),
        defineField({
          name: 'stats',
          title: 'Stats',
          type: 'array',
          of: [
            {
              title: 'Stat',
              type: 'object',
              fields: [
                defineField({name: 'value', title: 'Value', type: 'string'}),
                defineField({name: 'label', title: 'Label', type: 'string'}),
              ],
            },
          ],
        }),
        defineField({
          name: 'button',
          title: 'Section Button',
          type: 'object',
          fields: [
            defineField({name: 'text', title: 'Text', type: 'string'}),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
              validation: linkValidation,
            }),
          ],
        }),
      ],
    }),

    // Our Values Section
    defineField({
      name: 'ourValuesSection',
      title: 'Our Values Section',
      type: 'object',
      fields: [
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
        defineField({
          name: 'values',
          title: 'Values',
          type: 'array',
          of: [
            {
              title: 'Value',
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'text'}),
                defineField({name: 'icon', title: 'Icon', type: 'string'}),
              ],
            },
          ],
        }),
      ],
    }),

    // Industries Section
    defineField({
      name: 'industriesSection',
      title: 'Industries Section',
      type: 'object',
      fields: [
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
        defineField({
          name: 'industries',
          title: 'Industries',
          type: 'array',
          of: [
            {
              title: 'Industry',
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'text'}),
                defineField({
                  name: 'button',
                  title: 'Button',
                  type: 'object',
                  fields: [
                    defineField({name: 'text', title: 'Text', type: 'string'}),
                    defineField({
                      name: 'link',
                      title: 'Link',
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

    // Top Solutions Section
    defineField({
      name: 'topSolutionsSection',
      title: 'Top Solutions Section',
      type: 'object',
      fields: [
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
        defineField({
          name: 'solutions',
          title: 'Solutions',
          type: 'array',
          of: [
            {
              title: 'Solution',
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'text'}),
                defineField({
                  name: 'button',
                  title: 'Button',
                  type: 'object',
                  fields: [
                    defineField({name: 'text', title: 'Text', type: 'string'}),
                    defineField({
                      name: 'link',
                      title: 'Link',
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

    // Testimonial Section Header
    defineField({
      name: 'testimonialSectionHeader',
      title: 'Testimonial Section Header',
      type: 'object',
      fields: [
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
      ],
    }),

    // Testimonials Section
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'array',
      of: [
        {
          title: 'Testimonial',
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'designation', title: 'Designation', type: 'string'}),
            defineField({name: 'review', title: 'Review', type: 'text', validation: (Rule) => Rule.required()}),
            defineField({
              name: 'rating',
              title: 'Rating',
              type: 'number',
              validation: (Rule) => Rule.required().min(1).max(5).integer(),
            }),
          ],
        },
      ],
    }),

    // Feature Comparison Section
    defineField({
      name: 'featureComparisonSection',
      title: 'Feature Comparison Section',
      type: 'object',
      fields: [
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
        defineField({
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [
            {
              title: 'Feature',
              type: 'object',
              fields: [
                defineField({name: 'featureName', title: 'Feature Name', type: 'string'}),
                defineField({name: 'basic', title: 'Basic', type: 'boolean'}),
                defineField({name: 'pro', title: 'Pro', type: 'boolean'}),
                defineField({name: 'enterprise', title: 'Enterprise', type: 'boolean'}),
              ],
            },
          ],
        }),
      ],
    }),

    // FAQ Header
    defineField({
      name: 'faqHeader',
      title: 'FAQ Header',
      type: 'object',
      fields: [
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
      ],
    }),

    // FAQ Section
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'array',
      of: [
        {
          title: 'FAQ Item',
          type: 'object',
          fields: [
            defineField({name: 'question', title: 'Question', type: 'string'}),
            defineField({name: 'answer', title: 'Answer', type: 'text'}),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Home Page',
      }
    },
  },
})
