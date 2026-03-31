import { defineType, defineField } from "sanity";

export default defineType({
  name: "solutionsPage",
  title: "Solutions Page",
  type: "document",

  fields: [
    // Basic
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),

    // SEO
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({
          name: "metaTitle",
          type: "string",
          validation: (Rule) => Rule.required().max(60),
        }),
        defineField({
          name: "metaDescription",
          type: "text",
          validation: (Rule) => Rule.required().max(160),
        }),
        defineField({
          name: "keywords",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),

    // Hero
    defineField({
      name: "heroSection",
      type: "object",
      fields: [
        { name: "heading", type: "string" },
        { name: "subtitle", type: "text" },
      ],
    }),

    // Core Solutions
    defineField({
      name: "coreSolutionsSection",
      type: "object",
      fields: [
        { name: "heading", type: "string" },
        { name: "subtitle", type: "text" },
        {
          name: "solutions",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", type: "string" },
                { name: "description", type: "text" },
                { name: "buttonText", type: "string" },
                { name: "buttonLink", type: "string" },
              ],
            },
          ],
        },
      ],
    }),

    // Industry Section
    defineField({
      name: "industrySection",
      type: "object",
      fields: [
        { name: "heading", type: "string" },
        { name: "subtitle", type: "text" },
        {
          name: "industries",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", type: "string" },
                { name: "description", type: "text" },
                { name: "buttonText", type: "string" },
                { name: "buttonLink", type: "string" },
              ],
            },
          ],
        },
      ],
    }),

    // Features Section
    defineField({
      name: "featuresSection",
      type: "object",
      fields: [
        { name: "heading", type: "string" },
        { name: "subtitle", type: "text" },
        {
          name: "features",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", type: "string" },
                { name: "description", type: "text" },
              ],
            },
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});