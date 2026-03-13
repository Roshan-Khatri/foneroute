import { createClient } from "@sanity/client";

export function getSanityClient() {
return createClient({
projectId: "00t6xfuz",
dataset: "production",
apiVersion: "2024-01-01",
useCdn: true
});
}