// Local preview without wrangler: serves web/ and an in-memory /api/sync.
// `bun scripts/serve.ts [port]`
import { merge } from "../web/merge.js";

const root = new URL("../web/", import.meta.url).pathname;
const store = new Map<string, unknown>();
const port = Number(process.argv[2] ?? 8799);

Bun.serve({
  port,
  async fetch(req) {
    const url = new URL(req.url);
    const m = /^\/api\/sync\/([a-z2-7]{26})$/.exec(url.pathname);
    if (m) {
      if (req.method === "PUT") store.set(m[1], merge(store.get(m[1]) as any, await req.json()));
      return Response.json(store.get(m[1]) ?? merge(undefined, undefined));
    }
    const file = Bun.file(root + (url.pathname === "/" ? "index.html" : url.pathname.slice(1)));
    return (await file.exists()) ? new Response(file) : new Response(Bun.file(root + "index.html"));
  },
});
console.log(`http://localhost:${port}`);
