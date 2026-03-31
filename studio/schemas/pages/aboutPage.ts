import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'About Page',
      }
    },
  },
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
    // Mission & Vision Section
    defineField({
      name: 'missionVisionSection',
      title: 'Mission & Vision Section',
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
          name: 'points',
          title: 'Points',
          type: 'array',
          of: [{type: 'string'}],
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    // Core Values Section
    defineField({
      name: 'coreValuesSection',
      title: 'Core Values Section',
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
          name: 'values',
          title: 'Values',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'value',
              title: 'Value',
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
    // Commitment Section
    defineField({
      name: 'commitmentSection',
      title: 'Commitment Section',
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
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'item',
              title: 'Item',
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
    // Team Section
    defineField({
      name: 'teamSection',
      title: 'Team Section',
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
          name: 'members',
          title: 'Members',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'teamMember',
              title: 'Team Member',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                }),
                defineField({
                  name: 'designation',
                  title: 'Designation',
                  type: 'string',
                }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
})
