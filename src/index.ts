export default {
  async fetch(request: Request, env: any): Promise<Response> {
    const url = new URL(request.url);

    // Static files check (js, css, images)
    if (url.pathname.startsWith("/assets") || url.pathname.includes(".")) {
      return env.ASSETS.fetch(request);
    }

    try {
      // Try original request
      let response = await env.ASSETS.fetch(request);

      // If found → return
      if (response.status !== 404) {
        return response;
      }

      // 🔥 SPA fallback (MAIN FIX)
      return await env.ASSETS.fetch(
        new Request(new URL("/index.html", request.url), request)
      );

    } catch (e) {
      return await env.ASSETS.fetch(
        new Request(new URL("/index.html", request.url), request)
      );
    }
  },
};