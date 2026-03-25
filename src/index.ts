import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(
    request: Request,
    env: {
      __STATIC_CONTENT: Fetcher;
    },
    ctx: ExecutionContext
  ): Promise<Response> {
    try {
      // This will serve static assets from the KV namespace
      return await getAssetFromKV(
        { // @ts-ignore
          request,
          waitUntil: (promise) => ctx.waitUntil(promise),
        },
        {
          // @ts-ignore
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: __STATIC_CONTENT_MANIFEST,
        }
      );
    } catch (e) {
      // For SPA, fall back to index.html for any requests that are not found
      if (e instanceof NotFoundError) {
        const url = new URL(request.url);
        if (url.pathname.startsWith('/api/')) {
          // If it's an API call, return a 404
          return new Response('Not Found', { status: 404 });
        }

        // For all other paths, serve the main entry point
        const spaRequest = new Request(new URL('/index.html', request.url), request);
        return await getAssetFromKV(
          { // @ts-ignore
            request: spaRequest,
            waitUntil: (promise) => ctx.waitUntil(promise),
          },
          {
            // @ts-ignore
            ASSET_NAMESPACE: env.__STATIC_CONTENT,
            ASSET_MANIFEST: __STATIC_CONTENT_MANIFEST,
          }
        );
      }

      // For other errors, return a 500
      return new Response('Internal Server Error', { status: 500 });
    }
  },
};
