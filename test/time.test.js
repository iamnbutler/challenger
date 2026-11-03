import { expect, test } from "bun:test";
import { nextReset, periodKey, periodStart } from "../web/time.js";

const t = (iso) => Date.parse(iso);

test("daily resets at 00:00 UTC", () => {
  expect(periodKey("daily", t("2026-11-11T23:59:59Z"))).toBe("daily:2026-11-11");
  expect(periodKey("daily", t("2026-11-12T00:00:00Z"))).toBe("daily:2026-11-12");
  expect(nextReset("daily", t("2026-11-11T15:00:00Z"))).toBe(t("2026-11-12T00:00:00Z"));
});

test("weekly bosses reset Thursday 00:00 UTC", () => {
  // 2026-11-11 is a Wednesday; 2026-11-12 is a Thursday.
  expect(periodKey("weekly-thu", t("2026-11-11T23:59:59Z"))).toBe("weekly-thu:2026-11-05");
  expect(periodKey("weekly-thu", t("2026-11-12T00:00:00Z"))).toBe("weekly-thu:2026-11-12");
  expect(nextReset("weekly-thu", t("2026-11-12T00:00:00Z"))).toBe(t("2026-11-19T00:00:00Z"));
});

test("weekly quests reset Monday 00:00 UTC", () => {
  // 2026-11-15 is a Sunday; 2026-11-16 is a Monday.
  expect(periodKey("weekly-mon", t("2026-11-15T23:00:00Z"))).toBe("weekly-mon:2026-11-09");
  expect(periodKey("weekly-mon", t("2026-11-16T00:00:01Z"))).toBe("weekly-mon:2026-11-16");
  expect(nextReset("weekly-mon", t("2026-11-15T23:00:00Z"))).toBe(t("2026-11-16T00:00:00Z"));
});

test("monthly resets on the 1st, including across a year", () => {
  expect(periodStart("monthly", t("2026-12-31T23:59:59Z"))).toBe(t("2026-12-01T00:00:00Z"));
  expect(nextReset("monthly", t("2026-12-31T23:59:59Z"))).toBe(t("2027-01-01T00:00:00Z"));
});

test("a US evening is still the previous UTC day's reset window only before 00:00 UTC", () => {
  // 7:30 PM EST on Nov 11 is 00:30 UTC Nov 12: a new daily period.
  expect(periodKey("daily", t("2026-11-11T19:30:00-05:00"))).toBe("daily:2026-11-12");
});

test("Challenger weekly mission resets Wednesday 00:00 UTC", () => {
  // Launch day, Wednesday 2026-11-11, is the first period.
  expect(periodKey("weekly-wed", t("2026-11-11T12:00:00Z"))).toBe("weekly-wed:2026-11-11");
  expect(periodKey("weekly-wed", t("2026-11-17T23:59:59Z"))).toBe("weekly-wed:2026-11-11");
  expect(nextReset("weekly-wed", t("2026-11-11T12:00:00Z"))).toBe(t("2026-11-18T00:00:00Z"));
});
