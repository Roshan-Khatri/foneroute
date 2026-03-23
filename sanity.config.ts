import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './studio/schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity Studio',
  projectId: '00t6xfuz',
  dataset: 'production',

  plugins: [
    deskTool(), // ❌ structure remove kar diya
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})