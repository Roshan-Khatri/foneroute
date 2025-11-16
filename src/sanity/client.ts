
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


export function getSanityClient(): ReturnType<typeof createClient> {
  const config = getSanityConfig();
  if (!config) {
    // Return a new mock client each time to avoid caching issues during development
    return createMockClient();
  }
  // Return a new real client each time
  return createClient(config);
}

export const isSanityConfigured = isConfigured;

// This proxy is still useful for convenience in other parts of the app
const client = new Proxy({} as ReturnType<typeof createClient>, {
  get(_t, prop, receiver) {
    const inst = getSanityClient();
    return Reflect.get(inst, prop, receiver);
  },
});

export default client;
