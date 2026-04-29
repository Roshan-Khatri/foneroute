import { defineField, defineType } from "sanity";

export default defineType({
  name: "featuresPage",
  title: "Features Page",
  type: "document",
  fields: [

    // ✅ TITLE
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    // ✅ SLUG
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),

    // ✅ SEO
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "object",
      fields: [
        defineField({
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
        }),
        defineField({
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
        }),
        defineField({
          name: "keywords",
          title: "Keywords",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),

    // ✅ HERO
    defineField({
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "subtitle", type: "text" }),
      ],
    }),

    // ✅ FEATURES SECTION
    defineField({
      name: "featuresSection",
      title: "Features Section",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),

        defineField({
          name: "features",
          title: "Features",
          type: "array",
          of: [
            {
              type: "object",
              fields: [

                // TITLE
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                }),

                // DESCRIPTION
                defineField({
                  name: "description",
                  title: "Description",
                  type: "text",
                }),

                // SLUG
                

                // ✅ BUTTON (FIX FOR YELLOW WARNING)
                defineField({
                  name: "button",
                  title: "Button",
                  type: "object",
                  fields: [
                    defineField({
                      name: "link",
                      title: "Button Link",
                      type: "string",
                    }),
                  ],
                }),

              ],
            },
          ],
        }),
      ],
    }),

    // ✅ FAQ
    defineField({
      name: "faqSection",
      title: "FAQ Section",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          type: "string",
        }),

        defineField({
          name: "faqs",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "question", type: "string" }),
                defineField({ name: "answer", type: "text" }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
});