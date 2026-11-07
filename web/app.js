// The sheet: Today (daily and weekly check-offs, timed to server resets) and
// Plan (one-off progression steps). Content lives in data.js; this file only
// renders it. Check-offs are stored locally and synced through /api/sync.

import { GEAR, PLAN, SEASON, TODAY } from "./data.js";
import { merge } from "./merge.js";
import { countdown, nextReset, periodKey } from "./time.js";

const STORE = "challenger.state";
const SYNC_KEY = "challenger.sync";
const TAB_KEY = "challenger.tab";
const app = document.getElementById("app");
const clock = document.getElementById("clock");

// ---------- state ----------

function load(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v === null ? fallback : JSON.parse(v);
  } catch {
    return fallback;
  }
}
function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

let state = merge(load(STORE, undefined), undefined);
let syncId = load(SYNC_KEY, null);
let tab = load(TAB_KEY, "today");

// #sync=<id> joins another device's sync.
const joined = /#sync=([a-z2-7]{26})/.exec(location.hash);
if (joined) {
  syncId = joined[1];
  save(SYNC_KEY, syncId);
  history.replaceState(null, "", location.pathname);
}
if (!syncId) {
  // 26 base32 characters, 130 random bits; the Worker accepts nothing else.
  const abc = "abcdefghijklmnopqrstuvwxyz234567";
  syncId = Array.from(crypto.getRandomValues(new Uint8Array(26)), (b) => abc[b & 31]).join("");
  save(SYNC_KEY, syncId);
}

function itemKey(item, now = Date.now()) {
  return `${item.id}@${periodKey(item.cadence, now)}`;
}
function isDone(item, now) {
  return state.checks[itemKey(item, now)]?.done === true;
}
function setDone(item, done) {
  state.checks[itemKey(item)] = { done, at: Date.now() };
  commit();
}
function level() {
  return state.settings.level;
}
function setLevel(v) {
  state.settings = { level: v, at: Date.now() };
  commit();
}

function commit() {
  save(STORE, state);
  render();
  push();
}

// ---------- sync ----------

let syncStatus = "";
let pushTimer;
function push() {
  clearTimeout(pushTimer);
  pushTimer = setTimeout(() => exchange("PUT"), 400);
}
async function exchange(method) {
  try {
    const res = await fetch(`/api/sync/${syncId}`, {
      method,
      headers: method === "PUT" ? { "content-type": "application/json" } : {},
      body: method === "PUT" ? JSON.stringify(state) : undefined,
    });
    if (!res.ok) throw new Error(String(res.status));
    const remote = await res.json();
    const next = merge(state, remote);
    const changed = JSON.stringify(next) !== JSON.stringify(state);
    state = next;
    save(STORE, state);
    syncStatus = "synced";
    if (changed) render();
    if (method === "GET" && changed) exchange("PUT");
  } catch {
    syncStatus = "offline: saved on this device";
  }
  renderSync();
}

// ---------- helpers ----------

function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === false || v == null) continue;
    if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
    else if (k === "class") el.className = v;
    else el.setAttribute(k, v === true ? "" : v);
  }
  for (const c of children.flat()) if (c != null && c !== false) el.append(c.nodeType ? c : String(c));
  return el;
}

const localFmt = new Intl.DateTimeFormat(undefined, { weekday: "short", hour: "numeric", minute: "2-digit" });
const localDate = new Intl.DateTimeFormat(undefined, { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });

/** Whether an item applies now: level gate and its date window. */
function available(item, now) {
  if (item.from && now < Date.parse(item.from)) return false;
  if (item.until && now >= Date.parse(item.until)) return false;
  return true;
}
function unlocked(item) {
  const lv = level();
  // With no level set, show everything rather than an empty sheet.
  return !item.minLevel || lv == null || lv >= item.minLevel;
}
/** Past an item's level window (e.g. Hyper Blink after 259): hidden. */
function outgrown(item) {
  const lv = level();
  return item.maxLevel != null && lv != null && lv > item.maxLevel;
}

// ---------- Today ----------

const RESETS = [
  { cadence: "daily", label: "Daily reset" },
  { cadence: "weekly-wed", label: "Challenger weekly" },
  { cadence: "weekly-thu", label: "Weekly bosses" },
  { cadence: "weekly-mon", label: "Weekly quests" },
];

function resetStrip(now) {
  const start = Date.parse(SEASON.start), end = Date.parse(SEASON.end);
  const season = now < start
    ? h("div", { class: "reset season" }, h("span", {}, "Launch day"), h("b", { "data-at": start }, countdown(start - now)), h("small", {}, "Nov 11 UTC, opens after maintenance"))
    : now < end
      ? h("div", { class: "reset season" }, h("span", {}, "Season ends"), h("b", { "data-at": end }, countdown(end - now)), h("small", {}, localDate.format(end)))
      : h("div", { class: "reset season" }, h("span", {}, "Season over"));
  return h("div", { class: "resets" },
    season,
    RESETS.map(({ cadence, label }) => {
      const at = nextReset(cadence, now);
      return h("div", { class: "reset" }, h("span", {}, label), h("b", { "data-at": at }, countdown(at - now)), h("small", {}, localFmt.format(at)));
    }));
}

function checkRow(item, now) {
  const done = isDone(item, now);
  return h("li", { class: done ? "row done" : "row" },
    h("label", {},
      h("input", { type: "checkbox", checked: done, onchange: (e) => setDone(item, e.target.checked) }),
      h("span", { class: "what" },
        h("span", { class: "label" }, item.label),
        item.note && h("span", { class: "note" }, item.note))));
}

function checklist(section, now) {
  const items = section.items.filter((i) => available(i, now) && !outgrown(i));
  const open = items.filter(unlocked);
  const later = items.filter((i) => !unlocked(i));
  const done = open.filter((i) => isDone(i, now)).length;
  return h("section", { class: "card" },
    h("header", {}, h("h2", {}, section.title), h("span", { class: done === open.length && open.length ? "count all" : "count" }, `${done}/${open.length}`)),
    section.hint && h("p", { class: "hint" }, section.hint),
    h("ul", { class: "rows" }, open.map((i) => checkRow(i, now))),
    later.length > 0 && h("p", { class: "later" }, "Unlocks later: ",
      later.map((i) => `${i.label} (${i.minLevel})`).join(" · ")));
}

function today(now) {
  return [
    resetStrip(now),
    level() == null && h("p", { class: "hint" }, "Set your level (top right) to hide what you haven't unlocked."),
    ...TODAY.map((s) => checklist(s, now)),
  ];
}

// ---------- Plan ----------

// What kind of goal a plan step is. Shown as a chip so a band reads as
// "level up, fill symbols, test, clear" at a glance.
const KIND = { level: "Level", force: "Symbols", test: "Test", clear: "Clear", rank: "Rank", gear: "Gear", build: "Build", setup: "Setup" };

function stepRow(step) {
  const item = { ...step, cadence: "once" };
  const done = isDone(item);
  return h("li", { class: done ? "row done" : "row" },
    h("label", {},
      h("input", { type: "checkbox", checked: done, onchange: (e) => setDone(item, e.target.checked) }),
      h("span", { class: "what" },
        h("span", { class: "label" }, step.kind && h("span", { class: `kind kind-${step.kind}` }, KIND[step.kind]), step.label),
        step.unlocks && h("span", { class: "unlocks" }, `Full damage: ${step.unlocks}`),
        step.when && h("span", { class: "unlocks" }, `Switch when: ${step.when}`),
        step.note && h("span", { class: "note" }, step.note))));
}

function planSection(section) {
  const lv = level();
  const current = section.levels && lv != null && lv >= section.levels[0] && lv < section.levels[1];
  const done = section.steps.filter((s) => isDone({ ...s, cadence: "once" })).length;
  const body = [
    section.intro && h("p", { class: "hint" }, section.intro),
    h(section.ordered ? "ol" : "ul", { class: "rows" }, section.steps.map(stepRow)),
    section.later && h("details", { class: "more" }, h("summary", {}, section.later.title), h("ul", { class: "rows" }, section.later.steps.map(stepRow))),
  ];
  const header = h("header", {}, h("h2", {}, section.title, current && h("span", { class: "tag now" }, "you are here")),
    h("span", { class: done === section.steps.length ? "count all" : "count" }, `${done}/${section.steps.length}`));
  // Keep the page on what matters now: bands you're not in, and finished
  // sections, fold to their header.
  const elsewhere = section.levels && lv != null && !current;
  if (elsewhere || done === section.steps.length) {
    return h("section", { class: "card" }, h("details", { class: "fold" }, h("summary", {}, header), body));
  }
  return h("section", { class: current ? "card current" : "card" }, header, body);
}

function plan() {
  return PLAN.map(planSection);
}

function gear() {
  return GEAR.map(planSection);
}

// ---------- page ----------

function levelInput() {
  return h("label", { class: "level" }, "Lv",
    h("input", {
      type: "number", min: 1, max: 300, inputmode: "numeric", value: level() ?? "", placeholder: "—",
      onchange: (e) => {
        const v = parseInt(e.target.value, 10);
        setLevel(Number.isInteger(v) && v >= 1 && v <= 300 ? v : null);
      },
    }));
}

function tabs() {
  return h("nav", { class: "tabs" },
    [["today", "Today"], ["plan", "Plan"], ["gear", "Gear"]].map(([id, label]) =>
      h("button", { class: tab === id ? "on" : "", "aria-pressed": tab === id, onclick: () => { tab = id; save(TAB_KEY, tab); render(); } }, label)),
    levelInput());
}

function syncFooter() {
  const link = `${location.origin}${location.pathname}#sync=${syncId}`;
  return h("footer", { class: "foot" },
    h("span", { id: "sync" }, syncStatus),
    h("button", { class: "linkish", onclick: async () => {
      try { await navigator.clipboard.writeText(link); syncStatus = "link copied: open it on your other device"; } catch { prompt("Open this on your other device", link); }
      renderSync();
    } }, "Copy sync link"),
    h("span", {}, SEASON.source));
}

function renderSync() {
  const el = document.getElementById("sync");
  if (el) el.textContent = syncStatus;
}

function render() {
  const now = Date.now();
  const page = tab === "plan" ? plan() : tab === "gear" ? gear() : today(now);
  app.replaceChildren(tabs(), ...page, syncFooter());
}

function tick() {
  const now = Date.now();
  clock.textContent = `Server ${new Date(now).toISOString().slice(11, 16)} UTC`;
  // Re-render on a period change so checks clear at reset; otherwise only the timers move.
  const key = RESETS.map((r) => periodKey(r.cadence, now)).join();
  if (key !== tick.key) {
    tick.key = key;
    render();
    return;
  }
  for (const el of document.querySelectorAll("[data-at]")) el.textContent = countdown(Number(el.dataset.at) - now);
}

render();
tick();
setInterval(tick, 1000);
exchange("GET");
document.addEventListener("visibilitychange", () => document.visibilityState === "visible" && exchange("GET"));
