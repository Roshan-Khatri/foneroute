import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [

    defineField({
      name: 'title',
      title: 'Menu Title',
      type: 'string',
    }),

    defineField({
      name: 'items',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'menuItem',
          fields: [

            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),

            defineField({
              name: 'columns',
              title: 'Columns',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'column',
                  fields: [

                    defineField({
                      name: 'title',
                      title: 'Column Title',
                      type: 'string',
                    }),

                    defineField({
                      name: 'items',
                      title: 'Links',
                      type: 'array',
                      of: [
                        {
                          type: 'object',
                          name: 'linkItem',
                          fields: [

                            defineField({
                              name: 'title',
                              title: 'Title',
                              type: 'string',
                            }),

                            defineField({
                              name: 'description',
                              title: 'Description',
                              type: 'string',
                            }),

                            defineField({
                              name: 'slug',
                              title: 'Slug',
                              type: 'slug',
                              options: {
                                source: 'title',
                                maxLength: 96,
                              },
                            }),

                          ],
                        },
                      ],
                    }),

                  ],
                },
              ],
            }),

          ],
        },
      ],
    }),

  ],
})