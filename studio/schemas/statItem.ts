import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'statItem',
  title: 'Stat Item',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
  ],
})
