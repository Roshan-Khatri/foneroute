import { defineField, defineType } from "sanity";

export default defineType({
  name: "featuresMainPage",
  title: "Features Main Page",
  type: "document",

  fields: [
    // ================= BASIC =================
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

    // ================= SEO =================
    defineField({
      name: "seo",
      type: "object",
      fields: [
        { name: "metaTitle", type: "string" },
        { name: "metaDescription", type: "text" },
        {
          name: "keywords",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    }),

    // ================= HERO =================
    defineField({
      name: "heroSection",
      type: "object",
      fields: [
        {
          name: "heading",
          type: "string",
          title: "Heading",
        },
        {
          name: "description",
          type: "text",
          title: "Description",
        },
      ],
    }),

    // ================= OVERVIEW =================
    defineField({
      name: "overviewSection",
      type: "object",
      fields: [
        {
          name: "heading",
          type: "string",
        },
        {
          name: "description",
          type: "text",
        },
      ],
    }),

    // ================= KEY CAPABILITIES =================
    defineField({
      name: "capabilitiesSection",
      type: "object",
      fields: [
        {
          name: "heading",
          type: "string",
        },
        {
          name: "items",
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

    // ================= BENEFITS =================
    defineField({
      name: "benefitsSection",
      type: "object",
      fields: [
        {
          name: "heading",
          type: "string",
        },
        {
          name: "items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "text",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    }),

    // ================= USE CASES =================
    defineField({
      name: "useCasesSection",
      type: "object",
      fields: [
        {
          name: "heading",
          type: "string",
        },
        {
          name: "items",
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
});