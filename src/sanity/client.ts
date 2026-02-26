
import { createClient, type SanityClient } from "@sanity/client";
import { getSanityConfig } from "./env";

let client: SanityClient | null = null;

export function getSanityClient(): SanityClient {
  if (client) {
    return client;
  }

  const config = getSanityConfig();

  if (!config) {
    throw new Error("Sanity project ID and dataset must be configured.");
  }

  client = createClient(config);

  return client;
}
