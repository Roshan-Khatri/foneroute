import { defineField, defineType } from "sanity";

export default defineType({
  name: "pricingPage",
  title: "Pricing Page",
  type: "document",

  fields: [

    // ✅ BASIC INFO
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // ✅ SEO
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
        },
        {
          name: "keywords",
          title: "Keywords",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    }),

    // ✅ HERO
    defineField({
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
        { name: "heading", type: "string" },
        { name: "subtitle", type: "text" },
      ],
    }),

    // ✅ PLANS (🔥 UPDATED WITH BUTTON LINK)
    defineField({
      name: "plans",
      title: "Pricing Plans",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string" },
            { name: "description", type: "text" },
            { name: "price", type: "number" },
            { name: "buttonText", type: "string" },

            // ✅ NEW FIELD (IMPORTANT)
            {
              name: "buttonLink",
              title: "Button Link",
              type: "string",
              description: "Example: /contact or /signup",
            },
          ],
        },
      ],
    }),

    // ✅ FEATURE COMPARISON
    defineField({
      name: "featureComparison",
      title: "Feature Comparison",
      type: "object",
      fields: [
        { name: "heading", type: "string" },
        {
          name: "features",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "feature", type: "string" },
                { name: "solo", type: "boolean" },
                { name: "pro", type: "boolean" },
                { name: "enterprise", type: "boolean" },
              ],
            },
          ],
        },
      ],
    }),

    // ✅ FAQ
    defineField({
      name: "faqSection",
      title: "FAQ Section",
      type: "object",
      fields: [
        { name: "heading", type: "string" },
        {
          name: "faqs",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "question", type: "string" },
                { name: "answer", type: "text" },
              ],
            },
          ],
        },
      ],
    }),

  ],
});