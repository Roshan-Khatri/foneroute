import { defineField, defineType } from "sanity";

export default defineType({
  name: "featureComparisonSection",
  title: "Feature Comparison Section",
  type: "object",

  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),

    defineField({
      name: "columns",
      title: "Plans",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Plan Name",
              type: "string",
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "rows",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "feature",
              title: "Feature Name",
              type: "string",
            }),

            defineField({
              name: "values",
              title: "Plan Availability",
              type: "array",
              of: [
                {
                  type: "string",
                  options: {
                    list: [
                      { title: "Yes", value: "yes" },
                      { title: "No", value: "no" },
                    ],
                  },
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
});