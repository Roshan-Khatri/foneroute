import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
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
        isUnique: async (value, context) => {
          const {document, getClient} = context
          const client = getClient({apiVersion: '2023-07-15'})
          const id = document._id.replace(/^drafts\./, '')
          const params = {
            draft: `drafts.${id}`,
            published: id,
            slug: value,
          }
          const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`
          const result = await client.fetch(query, params)
          return result
        },
      },
      validation: (Rule) => Rule.required(),
    }),
    {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
    },
    {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'text',
    },
    {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [{ type: 'block' }],
        validation: Rule => Rule.required(),
    },
        {
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt text',
                    type: 'string',
                    validation: Rule => Rule.required(),
                },
            ],
        },
    {
        name: 'metaTitle',
        title: 'Meta Title',
        type: 'string',
    },
    {
        name: 'metaDescription',
        title: 'Meta Description',
        type: 'text',
    },
    {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{ type: 'string' }],
    },
    {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
    },
    {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
            list: [
                { title: 'Draft', value: 'draft' },
                { title: 'Published', value: 'published' },
            ],
        },
        initialValue: 'draft',
    },
  ],
  preview: {
    select: {
        title: 'title',
        media: 'featuredImage',
    },
  },
  orderings: [
    {
        title: 'Published date, newest first',
        name: 'publishedAtDesc',
        by: [
            { field: 'publishedAt', direction: 'desc' },
        ],
    },
  ],
})