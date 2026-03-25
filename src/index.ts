export default {
  async fetch(request: Request, env: any): Promise<Response> {
    try {
      // Serve static assets
      return await env.ASSETS.fetch(request);
    } catch (e) {
      // SPA fallback (important for React/Vite routing)
      const url = new URL(request.url);

      // Ignore API routes (optional)
      if (url.pathname.startsWith('/api/')) {
        return new Response('Not Found', { status: 404 });
      }

      // Fallback to index.html
      return await env.ASSETS.fetch(
        new Request(new URL('/index.html', request.url), request)
      );
    }
  },
};