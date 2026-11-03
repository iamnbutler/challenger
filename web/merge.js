// Sync state and its merge, shared by the page and the Worker.
//
// State is { checks: { "<item>@<period>": { done, at } }, settings: { level, at } }.
// A check-off is keyed by the reset period it was made in, so a new period
// starts unchecked without anyone clearing anything. Merging keeps, per key,
// the entry with the later `at`; it is commutative, so devices converge.

const KEEP_MS = 45 * 86_400_000;

/** @typedef {{ checks: Record<string, { done: boolean, at: number }>, settings: { level: number | null, at: number } }} State */

/** @param {State | undefined} a @param {State | undefined} b @returns {State} */
export function merge(a, b, now = Date.now()) {
  const checks = {};
  for (const src of [a?.checks, b?.checks]) {
    if (!src || typeof src !== "object") continue;
    for (const [key, v] of Object.entries(src)) {
      if (!v || typeof v.at !== "number" || typeof v.done !== "boolean" || key.length > 120) continue;
      // One-off plan steps never expire; periodic check-offs fall away after KEEP_MS.
      if (!key.endsWith("@once") && now - v.at > KEEP_MS) continue;
      if (!checks[key] || v.at > checks[key].at) checks[key] = { done: v.done, at: v.at };
    }
  }
  let settings = { level: null, at: 0 };
  for (const s of [a?.settings, b?.settings]) {
    if (s && typeof s.at === "number" && s.at > settings.at) {
      const level = Number.isInteger(s.level) && s.level >= 1 && s.level <= 300 ? s.level : null;
      settings = { level, at: s.at };
    }
  }
  return { checks, settings };
}
