import { createClient } from "@sanity/client";

export function getSanityClient() {
  const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || "00t6xfuz";
  const dataset = import.meta.env.VITE_SANITY_DATASET || "production";

  if (!projectId || !dataset) {
    console.error("Sanity project ID or dataset missing");
  }

  return createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-01",
    useCdn: true, // fast for production
  });
}