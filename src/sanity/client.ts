
import { createClient } from '@sanity/client';
import { getSanityConfig, isSanityConfigured as isConfigured } from './env';

function createMockClient(): ReturnType<typeof createClient> {
  console.warn('Sanity config is missing or invalid. Using mock client. All CMS data will be null.');
  const mock = {
    fetch: () => Promise.resolve(null),
  };
  // Return a proxy that allows chaining and returns null for any method
  return new Proxy(mock, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      return () => new Proxy(() => {}, { get: () => (() => {}) });
    },
  }) as any;
}

const config = getSanityConfig();
const client = config ? createClient(config) : createMockClient();

export function getSanityClient(): ReturnType<typeof createClient> {
  return client;
}

export const isSanityConfigured = isConfigured;

export default client;
