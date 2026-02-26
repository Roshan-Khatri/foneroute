
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './studio/schemas'
import {structure} from './studio/structure'

export default defineConfig({
  name: 'default',
  title: 'Sanity Studio',
  projectId: '00t6xfuz',
  dataset: 'production',
  plugins: [deskTool({structure}), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
