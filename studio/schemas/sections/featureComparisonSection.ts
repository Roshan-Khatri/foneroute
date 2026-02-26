import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featureComparisonSection',
  title: 'Feature Comparison Section',
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
      name: 'columns',
      title: 'Columns',
      type: 'array',
      description: 'Define the columns for your comparison table (e.g., plan names).',
      of: [
        {
          type: 'object',
          name: 'comparisonColumn',
          title: 'Column',
          fields: [
            defineField({
              name: 'label',
              title: 'Column Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'isHighlighted',
              title: 'Highlight this Column?',
              type: 'boolean',
              description: 'Set to true to visually distinguish this column.',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: 'label',
              isHighlighted: 'isHighlighted',
            },
            prepare({title, isHighlighted}) {
              return {
                title: `${title}${isHighlighted ? ' (Highlighted)' : ''}`,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',
      description: 'Define the features to compare in each row.',
      of: [
        {
          type: 'object',
          name: 'comparisonRow',
          title: 'Row',
          fields: [
            defineField({
              name: 'featureName',
              title: 'Feature Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'values',
              title: 'Values',
              type: 'array',
              description: 'Set values for each column in the same order as defined above.',
              of: [
                {
                  type: 'object',
                  name: 'featureValue',
                  title: 'Feature Value',
                  fields: [
                    defineField({
                      name: 'textValue',
                      title: 'Text Value',
                      type: 'string',
                      description: 'Optional: Overrides status display (e.g., \'10 users\').',
                    }),
                    defineField({
                      name: 'status',
                      title: 'Status',
                      type: 'string',
                      options: {
                        list: ['Yes', 'No', 'Partial'],
                        layout: 'radio',
                      },
                      description: 'Select feature availability for the corresponding column.',
                      initialValue: 'No',
                    }),
                  ],
                  preview: {
                    select: {
                      text: 'textValue',
                      status: 'status',
                    },
                    prepare({text, status}) {
                      return {
                        title: text || status || 'Not set',
                      }
                    },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: 'featureName',
              values: 'values',
            },
            prepare({title, values}) {
              return {
                title: title,
                subtitle: `${values ? values.length : 0} value(s)`,
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
        title: title || 'Feature Comparison Section',
      }
    },
  },
})
