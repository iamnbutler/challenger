import { expect, test } from "bun:test";
import { merge } from "../web/merge.js";

const now = Date.parse("2026-11-20T00:00:00Z");

test("the later check-off wins, either way round", () => {
  const a = { checks: { "ursus@daily:2026-11-19": { done: true, at: now - 10 } }, settings: { level: 210, at: 5 } };
  const b = { checks: { "ursus@daily:2026-11-19": { done: false, at: now - 5 } }, settings: { level: 205, at: 9 } };
  expect(merge(a, b, now)).toEqual(merge(b, a, now));
  expect(merge(a, b, now).checks["ursus@daily:2026-11-19"].done).toBe(false);
  expect(merge(a, b, now).settings.level).toBe(205);
});

test("old periodic checks drop, plan steps stay", () => {
  const old = now - 60 * 86_400_000;
  const s = merge({ checks: { "mp@daily:2026-09-01": { done: true, at: old }, "emblem@once": { done: true, at: old } } }, undefined, now);
  expect(Object.keys(s.checks)).toEqual(["emblem@once"]);
});

test("junk is dropped, not stored", () => {
  const s = merge({ checks: { x: { done: "yes", at: now }, y: null }, settings: { level: 9999, at: 1 } }, undefined, now);
  expect(s.checks).toEqual({});
  expect(s.settings.level).toBe(null);
});
