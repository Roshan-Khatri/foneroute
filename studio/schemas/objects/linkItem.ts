import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'linkItem',
  title: 'Link Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Href',
      type: 'string',
      description:
        'Use a relative path for internal links (e.g., /about) or a full URL for external links (e.g., https://google.com).',
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (typeof value === 'undefined') {
            return true // Allow empty value, required() will handle it
          }

          const isRelative = value.startsWith('/') && !value.startsWith('//')
          const isAbsolute = /^(https?:\/\/|mailto:|tel:)/.test(value)

          if (!isRelative && !isAbsolute) {
            return 'Must be a relative path starting with `/` or a full external URL starting with `http`, `mailto`, or `tel`.'
          }

          if (isRelative) {
            if (/[^a-zA-Z0-9\\/\\-_]/.test(value)) {
              return 'Relative path contains invalid characters. Only letters, numbers, hyphens, underscores, and slashes are allowed.'
            }
          }

          return true
        }),
    }),
  ],
})
