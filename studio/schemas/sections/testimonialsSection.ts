import {defineField, defineType} from 'sanity'
import React from 'react'

export default defineType({
  name: 'testimonialsSection',
  title: 'Testimonials Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'What Our Customers Say',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          title: 'Testimonial',
          name: 'testimonial',
          type: 'object',
          fields: [
            defineField({
              name: 'customerName',
              title: 'Customer Name',
              type: 'string',
            }),
            defineField({
              name: 'companyName',
              title: 'Company Name',
              type: 'string',
            }),
            defineField({
              name: 'rating',
              title: 'Rating',
              type: 'number',
              options: {
                list: [1, 2, 3, 4, 5],
              },
              validation: (Rule) => Rule.min(1).max(5),
            }),
            defineField({
              name: 'reviewText',
              title: 'Review Text',
              type: 'text',
            }),
          ],
          preview: {
            select: {
              title: 'customerName',
              subtitle: 'reviewText',
              media: 'rating',
            },
            prepare({title, subtitle, media}) {
              const star = 'â­ï¸Ž'
              return {
                title,
                subtitle,
                media: React.createElement(
                  'span',
                  {style: {fontSize: '1.5em'}},
                  media ? star.repeat(media) : ''
                ),
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: title || 'Testimonials Section',
      }
    },
  },
})
