// Everything the sheet lists. Source of truth: docs/s4-guide.md (the Season 4
// progression guide). Older sources fill gaps it doesn't cover: docs/v272.md
// (v.272 PTS notes) and docs/guides.md (Season 3 guidance, Paladin). Keep lists short: a row
// that isn't worth doing on a busy day goes under `later`, or nowhere.
//
// Today items: { id, label, note?, cadence, minLevel?, maxLevel?, from?, until? }
//   cadence: daily | weekly-wed | weekly-thu | weekly-mon | monthly
//   from/until: UTC instants; outside them the row is hidden.
// Plan sections: { id, title, intro?, levels?: [min, max), ordered?, steps, later? }
//   A step is { id, label, note? }, checked once and never reset.
// Class: `paladin: true` shows a row or section only with the Paladin toggle on,
//   `paladin: false` only with it off. `pal` is a note line shown only for Paladin.
// Icons: `icons: ["blast", ...]` names files in web/icons/ (from maplestorywiki.net).
// Sections may set `view`: "rotation" (a burst drawn as keys), or `ref: true`
//   (reading, not check-offs). A section `link` is { label, href } at its foot.

export const SEASON = {
  start: "2026-11-11T00:00:00Z", // the live server opens after maintenance that day
  end: "2027-02-09T23:59:00Z",
  source: "Times are UTC server time. Content per the Season 4 progression guide and the v.272 notes.",
};

const MAYRIN_FROM = "2026-11-12T00:00:00Z";

export const TODAY = [
  {
    title: "Daily",
    hint: "Resets 00:00 UTC.",
    items: [
      { id: "gollux", cadence: "daily", minLevel: 180, label: "Gollux", note: "Save coins for Superior pieces." },
      { id: "exp-coupon", cadence: "daily", minLevel: 101, label: "Log in for Ultima supplies", note: "5 days a week count. Claim the 3x coupons when you need them." },
      { id: "arcane-dailies", cadence: "daily", minLevel: 200, label: "Arcane River symbol dailies" },
      { id: "grandis-dailies", cadence: "daily", minLevel: 260, label: "Grandis symbol dailies" },
      { id: "monster-park", cadence: "daily", label: "Monster Park" },
      { id: "ursus", cadence: "daily", minLevel: 120, label: "Ursus (1 run, any time)" },
      { id: "daily-bosses", cadence: "daily", minLevel: 140, label: "Daily bosses: Hard Hilla, Chaos Pink Bean, Normal Cygnus" },
      { id: "arcane-seal", cadence: "daily", minLevel: 200, label: "Arcane Seal: hold Sealing Wands", note: "Open at 20 wands or when shop wands expire; odds rise with tier. Spend freely from Diamond." },
      { id: "star-specks", cadence: "daily", minLevel: 260, label: "Star Speck Boxes (optional)" },
    ],
  },
  {
    title: "Weekly · Challenger",
    hint: "Resets Wednesday 00:00 UTC.",
    items: [
      { id: "cw-weekly", cadence: "weekly-wed", label: "Challenger weekly mission (6 Monster Park runs)" },
      { id: "etherion-weekly", cadence: "weekly-wed", minLevel: 101, label: "Etherion Relics: 10,000 kills, then Collect", note: "The same kills fill the Training Report and Crests." },
      { id: "bounty", cadence: "weekly-wed", minLevel: 101, label: "Shadow Bounty: solo your best-paying boss" },
      { id: "specter-blast", cadence: "weekly-wed", minLevel: 260, until: "2026-12-16T00:00:00Z", label: "Specter Blast (2 players)" },
    ],
  },
  {
    title: "Weekly · Bosses",
    hint: "Resets Thursday 00:00 UTC.",
    items: [
      { id: "rental", cadence: "weekly-thu", minLevel: 200, until: "2027-02-10T00:00:00Z", label: "Arthur's rental, then boss", note: "First rental of each piece costs mesos, repeats cost MP. Lasts 2 days." },
      { id: "crest-hunt", cadence: "weekly-thu", minLevel: 200, until: "2027-02-10T00:00:00Z", label: "Hunt 10,000 monsters for Crests" },
      { id: "cw-pass-weekly", cadence: "weekly-thu", minLevel: 260, label: "Challenger Pass: 500 points", note: "Log in 5 days, 1 Epic Dungeon, 7 Monster Park runs or 6 weekly bosses." },
      { id: "bounty-shop", cadence: "weekly-thu", minLevel: 101, label: "Bounty Coin Shop: 4x coupons, symbol selectors, Bright Cubes" },
      { id: "seal-shop", cadence: "weekly-thu", minLevel: 200, label: "Sealing Wand Coupons (optional)" },
      { id: "wb-prearcane", cadence: "weekly-thu", minLevel: 180, label: "Chaos Zakum · Hard Magnus · Chaos Papulatus · Chaos Root Abyss" },
      { id: "wb-lotus-damien", cadence: "weekly-thu", minLevel: 190, label: "Lotus · Damien" },
      { id: "wb-slime-lucid-will", cadence: "weekly-thu", minLevel: 210, label: "Guardian Angel Slime · Lucid · Will" },
      { id: "wb-gloom-vh-darknell", cadence: "weekly-thu", minLevel: 245, label: "Gloom · Verus Hilla · Darknell" },
      { id: "wb-grandis", cadence: "weekly-thu", minLevel: 260, label: "Seren · Kalos · First Adversary · Kaling" },
      { id: "wb-mayrin", cadence: "weekly-thu", minLevel: 270, from: MAYRIN_FROM, label: "Mayrin", note: "Once per account." },
    ],
  },
  {
    title: "Weekly · Quests",
    hint: "Resets Monday 00:00 UTC.",
    items: [
      { id: "arcane-weekly", cadence: "weekly-mon", minLevel: 200, label: "Arcane River weeklies" },
      { id: "extreme-parker", cadence: "weekly-mon", minLevel: 260, label: "Extreme Monster Parker: 5 Monster Park clears" },
      { id: "epic-dungeon", cadence: "weekly-mon", minLevel: 260, label: "Epic Dungeon" },
    ],
  },
  {
    title: "Monthly",
    hint: "Resets on the 1st, 00:00 UTC.",
    items: [
      { id: "black-mage", cadence: "monthly", minLevel: 255, label: "Hard Black Mage" },
    ],
  },
];

export const PLAN = [
  {
    id: "day1",
    title: "Day 1 · Nov 11, after maintenance",
    ordered: true,
    steps: [
      { id: "pick-heroic", kind: "setup", label: "Make the character in Challenger-Heroic" },
      { id: "hyper-burning", kind: "setup", label: "Hyper Burning MAX; not a Quanah leap character", note: "A leap character can't do Item Burning Plus." },
      { id: "guild", kind: "setup", label: "Join an active guild", note: "They fill in the first hours." },
      { id: "creation-gift", kind: "setup", label: "Claim the creation gift" },
      { id: "events", kind: "setup", label: "Start every event on this character", note: "Pass, Item Burning, Mystic Seal and Beyond Burning are once per account." },
      { id: "day0-weeklies", kind: "clear", label: "Weekly bosses before Thursday 00:00 UTC", note: "Launch day gets a free round before the first reset." },
    ],
  },
  {
    id: "burn",
    title: "Lv 10–200 · Hyper Burning",
    levels: [1, 200],
    ordered: true,
    steps: [
      { id: "burn-rewards", kind: "setup", label: "Claim Hyper Burning rewards", note: "Hold symbol selectors until each region's story is done." },
      { id: "go-ia", paladin: true, goto: "character", label: "Inner Ability" },
    ],
  },
  {
    id: "arcane",
    title: "Lv 200–260 · Hyper Blink, Arcane River",
    levels: [200, 260],
    ordered: true,
    steps: [
      { id: "hyper-blink", kind: "level", label: "Hyper Blink to 260", note: "Pop a 3x coupon first." },
      { id: "greater-power", kind: "setup", label: "5th job and \"A Greater Power\"" },
      { id: "go-5th", goto: "character", label: "5th job nodes" },
      { id: "tier1", kind: "clear", label: "Free bosses through Normal Lotus and Damien" },
      { id: "f-arc360", kind: "force", label: "ARC 360", unlocks: "Lucid" },
      { id: "s4-ib2", kind: "clear", label: "Easy Lucid" },
      { id: "c-lucid-n", kind: "clear", label: "Normal Lucid" },
      { id: "l-235", kind: "level", label: "Lv 235", unlocks: "Lucid" },
      { id: "f-arc760", kind: "force", label: "ARC 760", unlocks: "Will, Gloom" },
      { id: "s4-ib3", kind: "clear", label: "Easy Will, Normal Slime" },
      { id: "c-will-n", kind: "clear", label: "Normal Will, Normal Gloom" },
      { id: "l-255", kind: "level", label: "Lv 255", unlocks: "Will, Verus Hilla, Chaos Slime" },
    ],
  },
  {
    id: "grandis",
    title: "Lv 260–280 · 6th job, Sol Janus, Hard bosses",
    levels: [260, 280],
    ordered: true,
    steps: [
      { id: "beyond-burning", kind: "level", label: "Turn on Beyond Burning", note: "At 260, before 261." },
      { id: "pass", kind: "setup", label: "Join the Challenger Pass", note: "At 260, before any weekly boss; earlier kills don't count." },
      { id: "sol-janus", kind: "build", icons: ["sol-janus-dawn"], label: "Sol Janus Support on this character", note: "Use Dawn. No fragments on Janus." },
      { id: "go-hexa", goto: "character", label: "Start the HEXA order" },
      { id: "go-train", paladin: true, goto: "character", label: "Training rotation" },
      { id: "rank-bronze", kind: "rank", label: "Bronze, Silver", note: "Take Continuous from the Bronze ring voucher." },
      { id: "c-kai", kind: "clear", label: "Kai" },
      { id: "farm-setup", kind: "gear", label: "Farming setup (Gear tab)" },
      { id: "c-darknell-n", kind: "clear", label: "Normal Darknell" },
      { id: "c-lotus-damien", kind: "clear", label: "Hard Lotus, Hard Damien" },
      { id: "c-vh-n", kind: "clear", label: "Normal Verus Hilla" },
      { id: "rental-push", kind: "gear", label: "Rent Arthur's full set for Tier 5" },
      { id: "c-hard-lucid-test", kind: "test", label: "Hard Lucid: Practice at 6.5T a minute", note: "Check burst on phase 3; it wasn't cut." },
      { id: "c-hard-lucid", kind: "clear", label: "Hard Lucid" },
      { id: "c-will-test", kind: "test", label: "Hard Will: phase 2 in under 3¾ min" },
      { id: "c-hard-will", kind: "clear", label: "Hard Will" },
      { id: "c-slime-chaos", kind: "clear", label: "Chaos Slime" },
      { id: "c-gloom-test", kind: "test", label: "Chaos Gloom: from 50% in under 7.5 min" },
      { id: "c-gloom", kind: "clear", label: "Chaos Gloom" },
      { id: "c-kalos-path", kind: "clear", label: "Hard Verus Hilla" },
      { id: "c-darknell-test", kind: "test", label: "Hard Darknell: from 50% in under 7.5 min" },
      { id: "c-darknell", kind: "clear", label: "Hard Darknell" },
      { id: "l-270", kind: "level", label: "Lv 270", unlocks: "Darknell, Seren, Easy Kalos, Easy Adversary" },
      { id: "c-mayrin-n", kind: "clear", label: "Normal Mayrin" },
      { id: "rank-emerald", kind: "rank", label: "Emerald, Sapphire", note: "Reroll IED lines; the passive covers it." },
      { id: "f-sac200", kind: "force", label: "SAC 200", unlocks: "Seren, Easy Kalos" },
      { id: "c-seren-test", kind: "test", label: "Normal Seren: phase 1 in under 3¾ min" },
      { id: "ib-6", kind: "clear", label: "Normal Seren" },
      { id: "c-bm-test", kind: "test", label: "Hard Black Mage: phase 1 in under 2 min" },
      { id: "c-bm", kind: "clear", label: "Hard Black Mage", note: "Before December, to liberate on time." },
      { id: "l-275", kind: "level", label: "Lv 275", unlocks: "Easy Kalos, Seren, Easy Adversary" },
      { id: "ib-7", kind: "clear", label: "Easy Kalos" },
      { id: "f-sac220", kind: "force", label: "SAC 220", unlocks: "Easy Adversary" },
      { id: "ib-8", kind: "clear", label: "Easy First Adversary" },
    ],
  },
  {
    id: "endgame",
    title: "Lv 280+ · Hard Seren, Hard Mayrin",
    levels: [280, 301],
    ordered: true,
    steps: [
      { id: "ib-11", kind: "clear", label: "Item Burning stage 11" },
      { id: "c-hard-seren", kind: "clear", label: "Hard Seren", note: "7,000 points of margin: Easy Adversary is only 7,000." },
      { id: "c-mayrin-h", kind: "clear", label: "Hard Mayrin" },
      { id: "rank-challenger", kind: "rank", label: "Challenger" },
    ],
    later: {
      title: "Optional: party for Eternals",
      steps: [
        { id: "f-sac230", kind: "force", label: "SAC 230", unlocks: "Easy Kaling" },
        { id: "c-kaling-e", kind: "clear", label: "Easy Kaling" },
        { id: "c-eternal-party", kind: "clear", label: "Normal Kalos, Normal Adversary in a party" },
      ],
    },
  },
  {
    id: "forgotten",
    title: "Commonly forgotten",
    steps: [
      { id: "f-emblem", label: "Gold Emblem from the Lv 100 quest" },
      { id: "f-totems", label: "Totems (3)" },
      { id: "f-medal", label: "Medal" },
      { id: "f-charm", label: "Trait potion on Charm" },
      { id: "f-title", label: "King of Root Abyss title", note: "Clear each Chaos Root Abyss boss once." },
      { id: "f-whisper", label: "Save Whisper Crystals for the Genesis Badge" },
      { id: "f-doping", label: "Bossing buffs: Guild Blessing, VIP, MVP" },
      { id: "f-claim", label: "Claim tier rewards before Feb 9" },
      { id: "go-stats", goto: "character", label: "Hyper Stats, HEXA Stat, Ability" },
    ],
    later: {
      title: "Later, if there's time",
      steps: [
        { id: "l-genesis", label: "Genesis Pass", note: "NX only. Skip PLUS on Heroic." },
        { id: "l-masteria", label: "Sovereign Summoner title (Chaos Vellum solo on a Lethe)", note: "Tradable within the world." },
      ],
    },
  },
];

// Gear runs: starting gear → Item Burning's Challenger set → permanent pieces.
// Item Burning, Ignitia keys and rentals all end Feb 10, 2027.
export const GEAR = [
  {
    id: "start",
    title: "Start",
    steps: [
      { id: "gs-acc", label: "Burning Boss Accessory Box (Lv 200)" },
      { id: "gs-pendant", label: "Selector: Dominator Pendant, not the weapon" },
      { id: "gs-rings", label: "Skill rings: Continuous (Bronze), Restraint (Silver)", pal: "Stand still in Restraint for Grand Guardian." },
      { id: "gs-title", label: "Wear the Eternal Flame Title", note: "Its stats last 60 days; then a real title." },
      { id: "gs-ib", label: "Equip the Item Burning set at 200" },
      { id: "gs-17", label: "17★ scrolls: Dominator, Dea Sidus, Golden Clover Belt, Condensed Power Crystal, Aquatic Eye", note: "Five: three from the Challenger Shop, Ultima Lv 20 and 55. By hand; Auto-Enhancement can't use them." },
      { id: "gs-secondary", label: "Cube the Frozen Secondary: Boss% + ATT%", note: "Don't wait for Pitched." },
      { id: "gs-rental", label: "Rent face, eye, belt, earrings, one pendant for push days", note: "2 days a rental. Spend on rings, pocket, second pendant, secondary, emblem, badge." },
    ],
  },
  {
    id: "ib",
    title: "Item Burning: 11 stages",
    intro: "Crests: 500 a week from hunting, plus one-time first solo clears.",
    ordered: true,
    steps: [
      { id: "ib-s1", label: "Lv 225 · Normal Lotus", note: "18★, Unique armor." },
      { id: "ib-s2", label: "Lv 250 · Easy Lucid", note: "Potential up on armor and weapon." },
      { id: "ib-s3", label: "Lv 255 · Easy Will · 250 Crests", note: "Legendary weapon." },
      { id: "ib-s4", label: "Lv 260 · Kai · 750 Crests", note: "Legendary hat: cooldown and main stat, changeable once a day." },
      { id: "ib-s5", label: "Lv 265 · Normal Lucid · 1,500 Crests", note: "Shoes, cape, gloves 19★." },
      { id: "ib-s6", label: "Lv 265 · Normal Darknell · 2,250 Crests", note: "Hat, top, bottom, shoulder 19★." },
      { id: "ib-s7", label: "Lv 270 · Hard Damien · 3,000 Crests", note: "Shoes, cape, gloves 20★." },
      { id: "ib-s8", label: "Lv 270 · Normal Verus Hilla · 3,750 Crests", note: "Hat, top, bottom, shoulder 20★." },
      { id: "ib-s9", label: "Lv 275 · Chaos Slime · 4,500 Crests", note: "Shoes, cape, gloves 21★." },
      { id: "ib-s10", label: "Lv 275 · Chaos Gloom · 5,500 Crests", note: "Hat, top, bottom, shoulder 21★." },
      { id: "ib-s11", label: "Lv 280 · Normal Mayrin · 6,500 Crests", note: "Armor 22★." },
    ],
    later: {
      title: "Ignitia Keys",
      steps: [
        { id: "gi-keys", label: "Ignitia Keys: one per Challenger piece you replace", note: "Armor or weapon, not Eternal. Re-equip after every stage." },
      ],
    },
  },
  {
    id: "exit",
    title: "Permanent pieces by Feb 10",
    ordered: true,
    steps: [
      { id: "gx-emblem", label: "Emblem: Legendary → Mitra's Rage", note: "ATT% lines; drop IED by Platinum." },
      { id: "gx-secondary", label: "Secondary: Legendary" },
      { id: "gx-rings", label: "Rings: Superior Gollux, Slime Ring, Endless Terror" },
      { id: "gx-acc", label: "Belt, earrings, pendant: Superior Gollux", note: "Star a Golden Clover belt or Dea Sidus earrings to 18★ meanwhile." },
      { id: "gx-face-eye", label: "Face, eye: Twilight Mark or Berserked; Magic Eyepatch or Papulatus Mark" },
      { id: "gx-pocket-badge", label: "Pocket: Cursed Spellbook. Badge: Genesis" },
      { id: "gx-heart", label: "Heart: Fairy (Gold) → Plasma (Diamond)" },
      { id: "gx-glove", label: "Shoes, gloves, cape: Arcane with Master's 18★ scrolls", note: "Or Eternal from Mayrin's box; the Lv 200 scrolls don't fit Eternal." },
      { id: "gx-armor", label: "Hat, top, bottom, shoulder: Eternal 18★" },
      { id: "gx-weapon", label: "Weapon: Genesis", pal: "Two-handed blunt.", note: "Leave the Challenger weapon until then." },
    ],
  },
  {
    id: "farming",
    title: "Farming",
    ordered: true,
    steps: [
      { id: "drop-gear", label: "Farming accessories", note: "Silver Blossom, Treasure Hunter John, 2 event rings, Mechinator, Spirit Pendant, Dea Sidus, Condensed Power Crystal, Aquatic Letter Eye." },
      { id: "drop-meso", label: "One meso line each to +100%, then drop" },
      { id: "drop-boss", label: "Drop set for bossing (180%)" },
      { id: "fam-keep", label: "Keep every familiar card" },
      { id: "fam-badges", label: "Familiar badges: 1 for slot 2, 10 for slot 3" },
      { id: "fam-drop", label: "A drop familiar and a meso familiar" },
      { id: "drop-ia", label: "Inner Ability preset with meso or drop" },
      { id: "wap", label: "Wealth Acquisition Potion for long sessions" },
    ],
  },
];

// Boss reference, by the guide's tiers (docs/s4-guide.md). A check means a solo
// clear. Meta is data only: boss level, force, Challenger points, one-time
// Crests, Item Burning stage, drop. Numbers we don't have are left out.
const b = (id, label, ...meta) => ({ id, label, note: meta.join(" · ") || undefined });
export const BOSSES = [
  {
    id: "tier1",
    title: "Tier 1 · Free",
    steps: [
      b("b-prearcane", "Cygnus, Hilla, Pink Bean, Zakum, Root Abyss, Magnus, Vellum, Papulatus", "Chaos Zakum 100 pts", "Chaos Root Abyss: title"),
      b("b-lotus-n", "Normal Lotus", "400 pts", "50 Crests", "IB 1"),
      b("b-damien-n", "Normal Damien", "400 pts", "50 Crests"),
    ],
  },
  {
    id: "tier2",
    title: "Tier 2",
    steps: [
      b("b-slime-n", "Normal Slime", "500 pts", "50 Crests"),
      b("b-lucid-e", "Easy Lucid", "ARC 360", "500 pts", "50 Crests", "IB 2"),
      b("b-will-e", "Easy Will", "ARC 760", "500 pts", "50 Crests", "IB 3"),
    ],
  },
  {
    id: "tier3",
    title: "Tier 3",
    steps: [
      b("b-kai", "Kai", "1,000 pts", "50 Crests", "IB 4", "Once", "20 min, 10 deaths"),
      b("b-lucid-n", "Normal Lucid", "Lv 230", "ARC 360", "1,000 pts", "100 Crests", "IB 5"),
      b("b-will-n", "Normal Will", "Lv 250", "ARC 760", "1,000 pts", "100 Crests"),
      b("b-gloom-n", "Normal Gloom", "ARC 730", "1,000 pts", "150 Crests"),
      b("b-darknell-n", "Normal Darknell", "ARC 850", "1,000 pts", "150 Crests", "IB 6"),
    ],
  },
  {
    id: "tier4",
    title: "Tier 4 · 10–15M CP",
    steps: [
      b("b-lotus-h", "Hard Lotus", "Lv 210", "1,500 pts", "150 Crests", "Berserked"),
      b("b-damien-h", "Hard Damien", "Lv 210", "1,500 pts", "150 Crests", "IB 7", "Magic Eyepatch"),
      b("b-vh-n", "Normal Verus Hilla", "2,000 pts", "175 Crests", "IB 8"),
    ],
  },
  {
    id: "tier5",
    title: "Tier 5 · 20–30M CP",
    steps: [
      b("b-slime-c", "Chaos Slime", "Lv 250", "2,500 pts", "175 Crests", "IB 9"),
      b("b-lucid-h", "Hard Lucid", "Lv 230", "ARC 360", "2,000 pts", "175 Crests", "Dreamy Belt"),
      b("b-will-h", "Hard Will", "Lv 250", "ARC 760", "2,500 pts", "175 Crests", "Cursed Spellbook"),
      b("b-gloom-c", "Chaos Gloom", "Lv 255", "ARC 730", "2,500 pts", "200 Crests", "IB 10", "Endless Terror"),
      b("b-vh-h", "Hard Verus Hilla", "Lv 250", "ARC 900", "3,000 pts", "200 Crests", "Source of Suffering"),
      b("b-darknell-h", "Hard Darknell", "Lv 265", "ARC 850", "3,000 pts", "200 Crests", "Commanding Force Earring"),
      b("b-mayrin-n", "Normal Mayrin", "Entry 270", "5,000 pts", "200 Crests", "IB 11"),
    ],
  },
  {
    id: "tier6",
    title: "Tier 6 · 45–65M CP",
    steps: [
      b("b-bm-h", "Hard Black Mage", "45M CP", "ARC 1320", "6,000 pts", "Monthly", "Genesis Badge"),
      b("b-seren-n", "Normal Seren", "45M CP", "Lv 270", "SAC 200", "6,000 pts"),
      b("b-kalos-e", "Easy Kalos", "55M CP", "Lv 270", "SAC 200", "7,000 pts"),
      b("b-adversary-e", "Easy First Adversary", "65M CP", "Lv 270", "SAC 220", "7,000 pts"),
    ],
  },
  {
    id: "tier7",
    title: "Tier 7 · 85–120M CP",
    steps: [
      b("b-seren-h", "Hard Seren", "85M CP", "Lv 275", "SAC 200", "7,000 pts", "Mitra's Rage"),
      b("b-mayrin-h", "Hard Mayrin", "120M CP", "Entry 280", "9,000 pts", "Eternal pieces"),
    ],
    later: {
      title: "Not needed for rank",
      steps: [
        b("b-kaling-e", "Easy Kaling", "Lv 275", "SAC 230", "9,000 pts", "Half Eternals"),
      ],
    },
  },
];


// Paladin notes on boss rows, from the Paladin guide's mechanics sections.
const PAL_BOSS = {
  "b-lotus-h": "Heaven's Hammer through the push. Divine Shield takes the phase 3 purple balls.",
  "b-damien-h": "Heaven's Hammer through the push; it doesn't stop the brand.",
  "b-lucid-h": "Divine Shield takes the bombs.",
  "b-will-h": "Divine Shield takes the phase 1 tests. Comeback II for phase 3.",
  "b-gloom-c": "Sacred Bastion binds it.",
  "b-darknell-h": "Blitz Shield for Ultimate Sword Technique. Heaven's Hammer through the swipe.",
  "b-bm-h": "Will of Erda before curses. Sacred Bastion binds it. Comeback II.",
  "b-seren-n": "Comeback II.",
  "b-seren-h": "Comeback II.",
  "b-kalos-e": "Comeback II.",
  "b-kaling-e": "Sacred Bastion binds it.",
};
for (const section of BOSSES) {
  for (const step of [...(section.steps ?? []), ...(section.later?.steps ?? [])]) {
    if (PAL_BOSS[step.id]) step.pal = PAL_BOSS[step.id];
  }
}

// Events tab, from the live v.272 notes (docs/v272.md). Heroic only.
// TIMELINE is the season's dated breakpoints, UTC. Event sections are plan
// sections; a step's `use` says where its reward goes.
export const TIMELINE = [
  { at: "2026-11-11", label: "Season opens", note: "Ultima, Pass, burning, rentals, Arcane Seal" },
  { at: "2026-11-12", label: "Mayrin and Kai open", note: "Genesis Pass on sale" },
  { at: "2026-11-15", label: "Sunny Sunday: EXP", note: "Monster Park +250%, 2x Sol Erda from hunting", kind: "sunday" },
  { at: "2026-11-22", label: "Sunny Sunday: Star Force 30% off", note: "Ability 50% off", kind: "star" },
  { at: "2026-11-24", label: "Winter Countdown's last check-in", note: "Its gifts expire Nov 25 02:00", kind: "deadline" },
  { at: "2026-11-29", label: "Sunny Sunday: Ability 50% off", note: "HEXA Main Stat +20%, 5x Magnificent Soul", kind: "sunday" },
  { at: "2026-12-06", label: "Sunny Sunday: Star Force 30% off", note: "2x Sol Erda from hunting", kind: "star" },
  { at: "2026-12-13", label: "Sunny Sunday: EXP", note: "Monster Park +250%, 2x Sol Erda from hunting", kind: "sunday" },
  { at: "2026-12-15", label: "Specter Blast and Shadow Supplies end", kind: "deadline" },
  { at: "2026-12-16", label: "First World Leap opens" },
  { at: "2026-12-17", label: "Genesis Pass Plus missions start", note: "Seren, then Kalos, Adversary, Kaling, Bellona weekly to Jan 14" },
  { at: "2027-02-08", label: "Genesis Pass sales end", kind: "deadline" },
  { at: "2027-02-09", label: "Season ends 23:59", note: "Claim tier rewards; Item Burning gear stops", kind: "deadline" },
  { at: "2027-02-10", label: "Event items expire 02:00", note: "End-of-season leap to Feb 23", kind: "deadline" },
];

export const EVENTS = [
  {
    id: "ev-rings",
    title: "Event rings",
    intro: "Farming first: two event rings go in the drop set, then the next ones are damage rings until Superior Gollux.",
    ordered: true,
    steps: [
      { id: "er-flame", label: "Eternal Flame Ring", note: "Hyper Burning creation gift.", use: "Damage ring now." },
      { id: "er-hb210", label: "Hyper Burning Lv 210: ring selector, 40 cubes", use: "Drop set ring 1: cube for meso or drop." },
      { id: "er-ultima5", label: "Ultima Supply Report Lv 5: ring selector", note: "About day 5.", use: "Drop set ring 2." },
      { id: "er-winter", label: "Winter Countdown 11–13: selector, Legendary scroll, 100 cubes", note: "By Nov 21. Cubes expire Nov 25 02:00.", use: "Scroll a drop ring to Legendary, spend all 100 cubes before Nov 25." },
      { id: "er-abyss", label: "Hyper Burning Lv 230: Abyss Hunter Ring", use: "Damage ring." },
      { id: "er-nr250", label: "New Recruit Lv 250: selector, Legendary scroll, 50 cubes", use: "Damage ring until Superior Gollux; ATT% lines." },
      { id: "er-alliance", label: "Alliance Credit Shop: selector 3,000, Legendary scroll 4,000, cube 150", note: "Up to 3 each.", use: "Only if a slot is still short; Sol Erda comes first." },
      { id: "er-winter2", label: "Winter event, second half", note: "Not in the v.272 notes; add when announced." },
    ],
  },
  {
    id: "ev-etherion",
    title: "Etherion Relics",
    intro: "Weekly: 10,000 kills, then Collect. A core pick at completions 1, 2, 4, 6, 8, 10 is permanent. Upgrades: Lv 3→4 is 20%, 4→5 is 15%, 5→6 is 5%; a fail keeps the level.",
    ordered: true,
    steps: [
      { id: "et-pick1", kind: "setup", target: "Week 1", label: "Arcane River, Grandis daily EXP", note: "Biggest EXP while climbing to rank levels." },
      { id: "et-pick2", kind: "setup", target: "Week 2", label: "Sol Erda from Hunting" },
      { id: "et-pick3", kind: "setup", target: "Week 4", label: "Sol Erda from Bosses", note: "Lotus Hard or above, kill the reward monster alive." },
      { id: "et-pick4", kind: "setup", target: "Week 6", label: "Monster Park EXP", note: "Also boosts Extreme Monster Parker." },
      { id: "et-pick5", kind: "setup", target: "Week 8", label: "Epic Dungeon EXP" },
      { id: "et-pick6", kind: "setup", target: "Week 10", label: "Treasure Hunter EXP" },
      { id: "et-lv3", kind: "build", label: "Every core you own to Lv 3", note: "Cheap: 10 at 90%, 30 at 50%." },
      { id: "et-daily5", kind: "build", label: "Daily EXP core to Lv 5", note: "Lv 4 is the jump: 3% to 10%." },
      { id: "et-erda5", kind: "build", label: "Both Sol Erda cores to Lv 5" },
      { id: "et-rest5", kind: "build", label: "The other three to Lv 5", note: "Six at Lv 5 is 30 combined: a Medal." },
      { id: "et-final", kind: "build", label: "Week 12's 300 Etherion: finish whatever is short of Lv 5", note: "Skip Lv 6 at 5%." },
    ],
  },
  {
    id: "ev-tiers",
    title: "Challenger tiers",
    intro: "Points from levels (3,000 at 260, then 300–2,000 a level) and first solo clears. Emerald and up can be claimed after a leap.",
    steps: [
      { id: "tr-bronze", label: "Bronze · 5,000", note: "Lv 3 skill ring selector.", use: "Continuous." },
      { id: "tr-silver", label: "Silver · 10,000", note: "Lv 4 skill ring selector.", use: "Ring of Restraint." },
      { id: "tr-gold", label: "Gold · 15,000", note: "Fairy Heart.", use: "Heart." },
      { id: "tr-plat", label: "Platinum · 20,000", note: "300 fragments, 5 Sol Erda.", use: "HEXA." },
      { id: "tr-emerald", label: "Emerald · 30,000", note: "Legendary Potential Scroll, 30 Bright Cubes.", use: "Scroll the Arcane gloves; cubes on emblem, then secondary." },
      { id: "tr-sapphire", label: "Sapphire · 40,000", note: "Legendary Potential Scroll, 30 Bright Cubes.", use: "Scroll a keeper accessory; cubes as above." },
      { id: "tr-diamond", label: "Diamond · 50,000", note: "Plasma Heart module, 30 Bright Cubes.", use: "Fairy to Plasma." },
      { id: "tr-master", label: "Master · 70,000 + Normal Mayrin", note: "Three 18★ armor scrolls (Lv 200), 30 cubes, 5 Sol Erda selectors.", use: "Arcane shoes, gloves, cape, unless Mayrin gave Eternal." },
      { id: "tr-challenger", label: "Challenger · 90,000 + Hard Mayrin", note: "Sol Janus Enhancer (Lv 20).", use: "Hold it until after the leap." },
    ],
  },
  {
    id: "ev-ultima",
    title: "Ultima Supply Report",
    intro: "Log in 5 days a week; 60 levels, per account. Missed days cost 3,000 MP each.",
    steps: [
      { id: "us-5", label: "Lv 5: event ring selector", use: "See Event rings." },
      { id: "us-9", label: "Lv 9 and 35: Karma Unique Potential Scrolls", use: "Dominator Pendant, then Golden Clover Belt." },
      { id: "us-15", label: "Lv 15: Fairy Heart", use: "Heart until Gold's, then a spare." },
      { id: "us-20", label: "Lv 20 and 55: Karma 17★ scrolls (Lv 160)", note: "Around early Dec and late Jan. Auto-Enhancement can't use them.", use: "See Gear: one per keeper accessory." },
      { id: "us-flames", label: "Lv 19, 29, 39, 58: 300 Karma Black Flames", use: "Dominator, Golden Clover Belt, Dea Sidus." },
      { id: "us-cubes", label: "Lv 54 and 59: 20 Bright Cubes each", use: "Emblem, then secondary." },
      { id: "us-60", label: "Lv 60: Growth Potion 200–279", use: "Pop it at 278 or 279." },
    ],
  },
  {
    id: "ev-shops",
    title: "Coin shops",
    ref: true,
    steps: [
      { id: "sh-bounty", label: "Bounty, Basic (3,000 a week)", note: "4x EXP Coupons (500, 2 a week), then Symbol Selectors (100)." },
      { id: "sh-bounty-mid", label: "Bounty, Intermediate", note: "Bright Cubes (120, 3 a week), then Black Flames (20)." },
      { id: "sh-bounty-adv", label: "Bounty, Advanced", note: "Bright Cubes (2, 7 a week), Sol Erda (10)." },
      { id: "sh-alliance", label: "Alliance Credit (4,000 a week)", note: "Black Flames 10, Sol Erda 8,000, Unique Potential Scrolls 3,000, Legendary Circulators 2,000." },
      { id: "sh-challenger", label: "Challenger Shop", note: "Frozen Secondary, the three 17★ scrolls (3,000), a Soul Enchanter, weekly 3x coupons while leveling, then fragments." },
    ],
  },
  {
    id: "ev-sundays",
    title: "What to save for which Sunday",
    ref: true,
    steps: [
      { id: "su-star", label: "Nov 22, Dec 6: Star Force 30% off", note: "Golden Clover Belt, Dea Sidus, Condensed Power Crystal, Aquatic Eye, Dominator, Arcane gloves, shoes, cape. Not Challenger or rented gear." },
      { id: "su-ability", label: "Nov 22, Nov 29: Ability 50% off", note: "Roll Legendary Ability." },
      { id: "su-hexa", label: "Nov 29: HEXA Main Stat +20%", note: "Hold HEXA Stat rolls if Main Stat is Lv 5+." },
      { id: "su-exp", label: "Nov 15, Dec 13: EXP", note: "4x coupons, Monster Park and Sauna coupons, ideally at 260+." },
    ],
  },
];

// Character: the build you work through over time, and how to play it.
// HEXA order: one fixed path; click a tile to mark everything up to it.
// Weighted to Mastery 1 and 3 (Blast and Divine Judgment are about half the
// damage, and Mastery 3's passive raises both), boosts and Origin at their
// Lv 10/20/30 jumps. Not calculator-exact.
const HEXA_SKILLS = {
  origin: { short: "Origin", icon: "sacred-bastion", name: "Sacred Bastion" },
  m1: { short: "M1", icon: "hexa-blast", name: "Mastery 1: Blast, Divine Judgment" },
  m2: { short: "M2", icon: "hexa-divine-charge", name: "Mastery 2: Divine Charge, Mark, Falling Justice" },
  m3: { short: "M3", icon: "hexa-heavens-hammer", name: "Mastery 3: Heaven's Hammer" },
  m4: { short: "M4", icon: "hexa-final-attack", name: "Mastery 4: Final Attack, Rising Justice" },
  echo: { short: "Echo", icon: "divine-echo", name: "Divine Echo boost" },
  hammers: { short: "Hammers", icon: "hammers", name: "Hammers of the Righteous boost" },
  gg: { short: "GG", icon: "grand-guardian", name: "Grand Guardian boost" },
  mjolnir: { short: "Mjolnir", icon: "mjolnir", name: "Mighty Mjolnir boost" },
};
const HEXA_PATH = `
  origin 1, m1 1, m2 1, m3 1, m4 1, echo 1, hammers 1, gg 1, mjolnir 1,
  m1 3, m3 3, m1 6, m3 6, m1 9, m3 9, m1 10, m3 10,
  gg 10, origin 10, echo 10, hammers 10,
  m1 15, m3 15, m1 19, m3 19, m1 20, m3 20,
  gg 20, origin 20, mjolnir 10, m2 10, m4 10, echo 20, hammers 20,
  m1 25, m3 25, m1 29, m3 29, m1 30, m3 30,
  gg 30, origin 30, echo 30, hammers 30,
  mjolnir 20, m2 20, m4 20, mjolnir 30, m2 30, m4 30`
  .split(",").map((s) => s.trim().split(" ")).map(([skill, lv]) => ({ id: `hx-${skill}-${lv}`, skill, lv: Number(lv), ...HEXA_SKILLS[skill] }));

export const CHARACTER = [
  {
    id: "hexa-order",
    title: "HEXA order",
    paladin: true,
    view: "path",
    intro: "Mastery N needs Boost Node N at Lv 40. Tap the last one you've done.",
    skills: HEXA_SKILLS,
    steps: HEXA_PATH,
  },
  {
    id: "burst",
    title: "Burst · every 2 min",
    paladin: true,
    view: "rotation",
    phases: [
      { label: "Stack", keys: [{ icon: "vessel", name: "Blast to 5 Vessel of Light" }] },
      { label: "Buff", keys: [{ icon: "weapon-aura", name: "Weapon Aura" }, { icon: "goddess", name: "Goddess's Blessing" }, { icon: "epic-adventure", name: "Epic Adventure" }] },
      { label: "Echo", keys: [{ icon: "divine-echo", name: "Divine Echo" }, { icon: "divine-blessing", name: "Divine Blessing" }] },
      { label: "Open", keys: [{ icon: "mjolnir", name: "Mjolnir", tag: "×3" }, { name: "Skill ring", text: "Ring" }] },
      { label: "Burst", keys: [{ icon: "sacred-bastion", name: "Sacred Bastion", tag: "6 min" }, { icon: "grand-guardian", name: "Grand Guardian", tag: "hold" }] },
      { label: "Then", keys: [{ icon: "blast", name: "Blast until Echo ends" }] },
    ],
    aside: [
      { icon: "hammers", name: "Hammers of the Righteous", note: "off cooldown, outside the burst" },
      { icon: "heavens-hammer", name: "Heaven's Hammer", note: "off cooldown" },
      { icon: "smite-shield", name: "Smite Shield", note: "bind after Grand Guardian; before it on Lotus, Damien, Darknell" },
    ],
  },
  {
    id: "buffs",
    title: "Buffs",
    paladin: true,
    view: "rotation",
    flow: false,
    phases: [
      { label: "Pet auto-buff", keys: [{ icon: "decent-holy-symbol", name: "Decent Holy Symbol" }, { icon: "decent-sharp-eyes", name: "Decent Sharp Eyes" }, { icon: "decent-speed-infusion", name: "Decent Speed Infusion" }, { icon: "decent-advanced-blessing", name: "Decent Advanced Blessing" }, { icon: "combat-orders", name: "Combat Orders" }, { icon: "maple-warrior", name: "Maple Warrior" }] },
      { label: "On the boss", keys: [{ icon: "noble-demand", name: "Noble Demand", tag: "80s" }, { name: "Extreme Green Potion", text: "AS10" }] },
    ],
    aside: [
      { icon: "noble-demand", name: "Noble Demand", note: "no cooldown; recast before 80s runs out" },
      { icon: "divine-blessing", name: "Divine Blessing", note: "recast after each Divine Echo" },
    ],
  },
  {
    id: "training",
    title: "Training",
    paladin: true,
    view: "rotation",
    flow: false,
    phases: [
      { label: "Hammers up", keys: [{ icon: "hammers", name: "Hammers of the Righteous" }, { icon: "divine-charge", name: "Divine Charge" }] },
      { label: "Hammers down", keys: [{ icon: "mjolnir", name: "Mjolnir", tag: "×3" }, { icon: "divine-charge", name: "Divine Charge" }] },
      { label: "Off cooldown", keys: [{ icon: "heavens-hammer", name: "Heaven's Hammer" }, { icon: "sol-janus-dawn", name: "Sol Janus: Dawn" }] },
    ],
  },
  {
    id: "fifth",
    title: "5th job",
    ordered: true,
    steps: [
      { id: "v-node1", paladin: true, icons: ["blast", "divine-judgment"], label: "Boost Node 1 to Lv 40", note: "Blast and Divine Judgment. Lv 40 unlocks HEXA Mastery 1." },
      { id: "v-nodes24", paladin: true, icons: ["divine-charge", "heavens-hammer", "final-attack"], label: "Boost Nodes 2–4 to Lv 40", note: "Each unlocks its HEXA Mastery." },
      { id: "v-jobnodes", paladin: true, icons: ["divine-echo", "grand-guardian", "hammers", "mjolnir"], label: "Job nodes to Lv 25, Divine Echo first" },
      { id: "v-decents", icons: ["decent-holy-symbol", "decent-speed-infusion", "decent-sharp-eyes"], label: "Decent Holy Symbol, Speed Infusion, Sharp Eyes", note: "Lv 1 is enough." },
      { id: "v-utility", icons: ["blink", "rope-lift", "erda-will"], label: "Blink, Rope Lift, Will of Erda at Lv 1" },
    ],
  },
  {
    id: "stats",
    title: "Stats",
    steps: [
      { id: "inner-ability", paladin: true, label: "Inner Ability: Attack Speed +1, Boss 10%, Abnormal Status 8%", note: "Roll lines 2–3 first, lock them, then line 1." },
      { id: "as10", paladin: true, icons: ["decent-speed-infusion"], label: "Attack Speed 10", note: "Inner Ability +1, Decent Speed Infusion and an Extreme Green Potion." },
      { id: "hexa-unlock", paladin: false, label: "HEXA: unlock all Masteries and boosts to Lv 1" },
      { id: "f-hyperstat", label: "Hyper Stats: reallocate as you level", note: "Skip IED; the passive covers it." },
      { id: "f-hexastat", label: "HEXA Stat: ATT, Crit Damage, Boss" },
      { id: "f-ability", label: "Legendary Ability" },
    ],
  },
  {
    id: "kit",
    title: "Staying alive",
    paladin: true,
    lead: true,
    ref: true,
    steps: [
      { id: "k-sacro", icons: ["sacrosanctity"], label: "Sacrosanctity: 30s invincible", note: "Recast to end it early; each 5s left takes 45s off the 5 min cooldown." },
      { id: "k-gg", icons: ["grand-guardian"], label: "Grand Guardian held: half damage, no stun or knockback" },
      { id: "k-kb", icons: ["heavens-hammer", "rush", "impenetrable-skin"], label: "Heaven's Hammer, Rush, Impenetrable Skin: no super knockback" },
      { id: "k-shield", icons: ["divine-shield"], label: "Divine Shield: blocks the next 10 hits" },
      { id: "k-blitz", icons: ["blitz-shield"], label: "Blitz Shield: a 20% HP barrier for one big hit" },
      { id: "k-will", icons: ["erda-will", "heros-will"], label: "Will of Erda, Hero's Will: clear a status" },
      { id: "k-comeback", label: "Comeback II node for long fights", note: "Dying takes 30% off cooldowns, Sacrosanctity too." },
    ],
  },
];
