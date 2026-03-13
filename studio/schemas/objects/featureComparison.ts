import { defineType, defineField } from "sanity";

export default defineType({
  name: "featureComparison",
  title: "Feature Comparison",
  type: "object",

  fields: [
    defineField({
      name: "feature",
      title: "Feature",
      type: "string",
    }),

    defineField({
      name: "productA",
      title: "Product A",
      type: "string",
    }),

    defineField({
      name: "productB",
      title: "Product B",
      type: "string",
    }),

    defineField({
      name: "productC",
      title: "Product C",
      type: "string",
    }),
  ],
});