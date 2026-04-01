export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    try {
      // Try to serve static file first
      return await env.ASSETS.fetch(request);
    } catch (e) {
      // If file not found → fallback to index.html
      return env.ASSETS.fetch(new Request(url.origin + "/index.html"));
    }
  },
};