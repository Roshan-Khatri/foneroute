import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { PortableTextBlock } from "@/sanity/types";

export const sanityClient = createClient({
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || "2024-03-11",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "00t6xfuz",
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

/* ------------------------------------------ */
/* SANITY FETCH HELPER */
/* ------------------------------------------ */

export async function sanityFetch<T>({
  query,
  params = {},
}: {
  query: string;
  params?: Record<string, any>;
}): Promise<T> {
  return sanityClient.fetch(query, params);
}

/* ------------------------------------------ */
/* SAFE TEXT HELPER */
/* ------------------------------------------ */

export const sanityText = (value: any): string => {
  if (!value) return "";

  if (typeof value === "string") {
    return value;
  }

  if (
    value &&
    typeof value === "object" &&
    "textValue" in value &&
    typeof value.textValue === "string"
  ) {
    return value.textValue;
  }

  if (Array.isArray(value)) {
    return value
      .filter(
        (block): block is PortableTextBlock =>
          block && block._type === "block" && Array.isArray(block.children)
      )
      .map((block) =>
        block.children!.map((span) => span.text || "").join("")
      )
      .join(" ");
  }

  return "";
};