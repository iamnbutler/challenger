// challenger on Cloudflare: the static sheet from web/, plus check-off sync.
//
// A device makes a random sync id and keeps it; opening the sheet with
// #sync=<id> on another device joins it. Each id is one Durable Object holding
// one JSON state. There are no accounts: the id is the secret, so it must stay
// long and random (SYNC_ID).

import { DurableObject } from "cloudflare:workers";
import { merge, type State } from "../../web/merge.js";

interface Env {
  ASSETS: Fetcher;
  SYNC: DurableObjectNamespace<Sync>;
}

const SYNC_ROUTE = /^\/api\/sync\/([a-z2-7]{26})$/;
const MAX_BODY = 256 * 1024;

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);
    const m = SYNC_ROUTE.exec(url.pathname);
    if (!m) {
      if (url.pathname.startsWith("/api/")) return json({ error: "not found" }, 404);
      return env.ASSETS.fetch(request);
    }
    const sync = env.SYNC.getByName(m[1]);
    if (request.method === "GET") return json(await sync.get());
    if (request.method === "PUT") {
      const text = await request.text();
      if (text.length > MAX_BODY) return json({ error: "too large" }, 413);
      let incoming: State;
      try {
        incoming = JSON.parse(text);
      } catch {
        return json({ error: "body must be JSON" }, 400);
      }
      return json(await sync.put(incoming));
    }
    return json({ error: "method not allowed" }, 405);
  },
} satisfies ExportedHandler<Env>;

function json(body: unknown, status = 200): Response {
  return Response.json(body, { status, headers: { "cache-control": "no-store" } });
}

export class Sync extends DurableObject<Env> {
  async get(): Promise<State> {
    return (await this.ctx.storage.get<State>("state")) ?? merge(undefined, undefined);
  }

  /** Merges `incoming` into the stored state and returns the result. */
  async put(incoming: State): Promise<State> {
    const next = merge(await this.get(), incoming);
    await this.ctx.storage.put("state", next);
    return next;
  }
}
