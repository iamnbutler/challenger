// Reset timing. GMS runs on UTC server time: dailies reset at 00:00 UTC, weekly
// bosses on Thursday 00:00 UTC, weekly quests on Monday 00:00 UTC, Challenger
// World's weekly mission on Wednesday 00:00 UTC (v.272 notes), and monthly
// content on the 1st at 00:00 UTC. Everything here is in UTC milliseconds so a
// check-off is tied to the reset period it was made in, not to the clock it
// was made on.

const DAY = 86_400_000;
// Date#getUTCDay: Sunday 0 … Saturday 6.
const WEEK_START = { "weekly-thu": 4, "weekly-wed": 3, "weekly-mon": 1 };

/** Start of the reset period containing `now` for a cadence, in UTC ms. */
export function periodStart(cadence, now) {
  const midnight = Math.floor(now / DAY) * DAY;
  if (cadence === "daily") return midnight;
  if (cadence in WEEK_START) {
    const back = (new Date(midnight).getUTCDay() - WEEK_START[cadence] + 7) % 7;
    return midnight - back * DAY;
  }
  if (cadence === "monthly") {
    const d = new Date(now);
    return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1);
  }
  if (cadence === "once") return 0;
  throw new Error(`unknown cadence ${cadence}`);
}

/** Start of the next reset period, in UTC ms (Infinity for one-off items). */
export function nextReset(cadence, now) {
  const start = periodStart(cadence, now);
  if (cadence === "daily") return start + DAY;
  if (cadence in WEEK_START) return start + 7 * DAY;
  if (cadence === "monthly") {
    const d = new Date(start);
    return Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 1);
  }
  return Infinity;
}

/** A stable key for the period containing `now`, e.g. "daily:2026-11-11". */
export function periodKey(cadence, now) {
  if (cadence === "once") return "once";
  return `${cadence}:${new Date(periodStart(cadence, now)).toISOString().slice(0, 10)}`;
}

/** "3d 4h", "4h 12m", "12m 5s". */
export function countdown(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600), m = Math.floor((s % 3600) / 60);
  if (d) return `${d}d ${h}h`;
  if (h) return `${h}h ${m}m`;
  return `${m}m ${s % 60}s`;
}
