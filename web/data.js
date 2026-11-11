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
// `paladin: true` on a row or section shows it only with the Paladin toggle on.
// Sections with `ref: true` are reading, not check-offs; a ref row may have `href`.

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
      { id: "exp-coupon", cadence: "daily", label: "Claim 3x EXP coupons (Operation Ultima)" },
      { id: "arcane-dailies", cadence: "daily", minLevel: 200, label: "Arcane River symbol dailies" },
      { id: "grandis-dailies", cadence: "daily", minLevel: 260, label: "Grandis symbol dailies" },
      { id: "monster-park", cadence: "daily", label: "Monster Park" },
      { id: "ursus", cadence: "daily", minLevel: 120, label: "Ursus" },
      { id: "daily-bosses", cadence: "daily", minLevel: 140, label: "Daily bosses: Hard Hilla, Chaos Pink Bean, Normal Cygnus" },
      { id: "arcane-seal", cadence: "daily", minLevel: 200, label: "Mystic Seal: hold rods", note: "Open only at 20 rods or when shop rods expire; odds rise with rank. Spend freely from Master." },
      { id: "star-specks", cadence: "daily", minLevel: 260, label: "Star Speck Boxes (optional)" },
    ],
  },
  {
    title: "Weekly · Challenger",
    hint: "Resets Wednesday 00:00 UTC.",
    items: [
      { id: "cw-weekly", cadence: "weekly-wed", label: "Challenger weekly mission (6 Monster Park runs)" },
      { id: "crest-hunt", cadence: "weekly-wed", minLevel: 200, label: "Hunt 10,000 monsters for Crests" },
    ],
  },
  {
    title: "Weekly · Bosses",
    hint: "Resets Thursday 00:00 UTC.",
    items: [
      { id: "rental", cadence: "weekly-thu", minLevel: 200, until: "2027-02-10T00:00:00Z", label: "Arthur's rental, then boss", note: "Free once a week, lasts 2 days." },
      { id: "seal-shop", cadence: "weekly-thu", minLevel: 200, label: "Sealing Wand Coupons (optional)" },
      { id: "wb-prearcane", cadence: "weekly-thu", minLevel: 180, label: "Chaos Zakum · Hard Magnus · Chaos Papulatus · Chaos Root Abyss" },
      { id: "wb-lotus-damien", cadence: "weekly-thu", minLevel: 190, label: "Lotus · Damien" },
      { id: "wb-slime-lucid-will", cadence: "weekly-thu", minLevel: 210, label: "Guardian Angel Slime · Lucid · Will" },
      { id: "wb-kai", cadence: "weekly-thu", minLevel: 235, label: "Kai" },
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
      { id: "extreme-parker", cadence: "weekly-mon", minLevel: 260, label: "Monster Park Extreme quest" },
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
      { id: "hyper-burning", kind: "setup", label: "Hyper Burning MAX; not a Quanah leap character", note: "A leap character can't take Beyond Burning." },
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
      { id: "pass", kind: "setup", label: "Lv 101: join the Challenger Pass" },
      { id: "inner-ability", paladin: true, kind: "build", label: "Inner Ability: Attack Speed +1, Boss 10%, Abnormal Status 8%", note: "Roll lines 2–3 first, lock them, then line 1." },
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
      { id: "v-jobnodes", paladin: true, kind: "build", label: "Job nodes to Lv 25: Divine Echo first, then Grand Guardian, Hammers, Mjolnir" },
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
      { id: "beyond-burning", kind: "level", label: "Turn on Beyond Burning" },
      { id: "sol-janus", kind: "build", label: "Sol Janus Support on this character", note: "Use Dawn. No fragments on Janus." },
      { id: "rank-bronze", kind: "rank", label: "Bronze, Silver", note: "Take Continuous from the Bronze ring voucher." },
      { id: "hexa-unlock", kind: "build", label: "HEXA: unlock all Masteries and boosts to Lv 1" },
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
      { id: "hexa-m1", paladin: true, kind: "build", label: "HEXA: Mastery 1 to 9, Mastery 3 to 10, Mastery 1 to 20" },
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
      { id: "c-hard-seren", kind: "clear", label: "Hard Seren", note: "Not needed if you'll reach 284." },
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
      { id: "f-hyperstat", label: "Hyper Stats: reallocate as you level", note: "Skip IED; the passive covers it." },
      { id: "f-hexastat", label: "HEXA Stat: ATT, Crit Damage, Boss" },
      { id: "f-ability", label: "Legendary Ability" },
      { id: "f-title", label: "King of Root Abyss title", note: "Clear each Chaos Root Abyss boss once." },
      { id: "f-whisper", label: "Save Whisper Crystals for the Genesis Badge" },
      { id: "f-doping", label: "Bossing buffs: Guild Blessing, VIP, MVP" },
      { id: "f-claim", label: "Claim tier rewards before Feb 9" },
    ],
    later: {
      title: "Later, if there's time",
      steps: [
        { id: "l-links", label: "Link alts: Angelic Buster, Demon Slayer, Demon Avenger, Ark" },
        { id: "l-genesis", label: "Genesis Pass", note: "NX only. Skip PLUS on Heroic." },
        { id: "l-masteria", label: "Masteria's Summoner title (Chaos Vellum on Lethe)" },
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
      { id: "gs-rings", label: "Skill rings: Continuous (Bronze), Restraint (Silver)" },
      { id: "gs-title", label: "Wear a real title", note: "Event titles give no stats now." },
      { id: "gs-ib", label: "Equip the Item Burning set at 200" },
      { id: "gs-secondary", label: "Cube the Frozen Secondary: Boss% + ATT%", note: "Don't wait for Pitched." },
      { id: "gs-rental", label: "Rentals cover face, eye, belt, earrings, one pendant", note: "Spend on rings, pocket, second pendant, secondary, emblem, badge." },
    ],
  },
  {
    id: "ib",
    title: "Item Burning: 11 stages",
    intro: "Crests: 500 a week from hunting, plus one-time first solo clears.",
    ordered: true,
    steps: [
      { id: "ib-s1", label: "Lv 225 · Normal Lotus", note: "18★, Unique armor." },
      { id: "ib-s2", label: "Lv 250 · Easy Lucid", note: "Unique weapon bonus potential." },
      { id: "ib-s3", label: "Lv 255 · Easy Will · 250 Crests", note: "Legendary weapon." },
      { id: "ib-s4", label: "Lv 260 · Kai · 750 Crests", note: "Legendary hat: pick 2s cooldown + main stat." },
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
        { id: "gi-keys", label: "Put Ignitia Keys on non-Challenger pieces", note: "The first one is free: the set caps at 7 of 8." },
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
      { id: "gx-glove", label: "Shoes, gloves, cape: Arcane + Memento 18★ scrolls", note: "From Master." },
      { id: "gx-armor", label: "Hat, top, bottom, shoulder: Eternal 18★" },
      { id: "gx-weapon", label: "Weapon: Genesis", note: "Leave the Challenger weapon until then." },
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
      b("b-lotus-n", "Normal Lotus", "50 Crests", "IB 1"),
      b("b-damien-n", "Normal Damien", "50 Crests"),
    ],
  },
  {
    id: "tier2",
    title: "Tier 2",
    steps: [
      b("b-slime-n", "Normal Slime", "50 Crests"),
      b("b-lucid-e", "Easy Lucid", "ARC 360", "50 Crests", "IB 2"),
      b("b-will-e", "Easy Will", "ARC 760", "50 Crests", "IB 3"),
    ],
  },
  {
    id: "tier3",
    title: "Tier 3",
    steps: [
      b("b-kai", "Kai", "1,000 pts", "50 Crests", "IB 4", "30 min, 10 deaths"),
      b("b-lucid-n", "Normal Lucid", "Lv 230", "ARC 360", "1,000 pts", "100 Crests", "IB 5"),
      b("b-will-n", "Normal Will", "Lv 250", "ARC 760", "1,000 pts", "100 Crests"),
      b("b-gloom-n", "Normal Gloom", "ARC 730", "150 Crests"),
      b("b-darknell-n", "Normal Darknell", "ARC 850", "150 Crests", "IB 6"),
    ],
  },
  {
    id: "tier4",
    title: "Tier 4 · 10–15M CP",
    steps: [
      b("b-lotus-h", "Hard Lotus", "Lv 210", "1,500 pts", "150 Crests", "Berserked"),
      b("b-damien-h", "Hard Damien", "Lv 210", "1,500 pts", "150 Crests", "IB 7", "Magic Eyepatch"),
      b("b-vh-n", "Normal Verus Hilla", "175 Crests", "IB 8"),
    ],
  },
  {
    id: "tier5",
    title: "Tier 5 · 20–30M CP",
    steps: [
      b("b-slime-c", "Chaos Slime", "Lv 250", "175 Crests", "IB 9"),
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
      b("b-adversary-e", "Easy First Adversary", "65M CP", "Lv 270", "SAC 220", "9,000 pts"),
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

// Paladin tab, from The Comprehensive Guide to Paladin (docs/paladin.md).
// Build is checked once; the rest is reference (`ref: true`).
const p = (id, label, note) => ({ id, label, note });
export const PALADIN = [
  {
    id: "pal-build",
    title: "Build",
    ordered: true,
    steps: [
      p("pal-weapon", "Two-handed blunt weapon", "High Paladin adds 10% IED with a blunt; two-handed has the bigger multiplier."),
      p("pal-as10", "Attack Speed 10", "Two-handed needs IA Attack Speed +1, Decent Speed Infusion and an Extreme Green Potion."),
      p("pal-decents", "Decent Holy Symbol, Speed Infusion, Sharp Eyes at Lv 1", "Skip a Decent the gloves already give."),
      p("pal-utility", "One point each: Blink, Rope Lift, Erda's Will", "Erda's Will clears Black Mage curses."),
      p("pal-artifact", "Legion Artifact: Damage, Boss, Crit Rate, then IED, Crit Damage"),
      p("pal-ied", "IED 93–95% on screen", "Noble Demand adds 50% off screen. Past 95%, take Boss or ATT."),
    ],
    later: {
      title: "Later",
      steps: [
        p("pal-cdr-hat", "-4s cooldown hat", "Fits 2 Falling Justice per Echo. Not needed."),
        p("pal-decents-25", "Decent Speed Infusion and Sharp Eyes to Lv 25", "+5–6 all stat once other nodes are maxed."),
      ],
    },
  },
  {
    id: "pal-hexa",
    title: "HEXA",
    ref: true,
    steps: [
      p("ph-origin", "Origin: Sacred Bastion", "Binds unbindable bosses (Black Mage, Gloom, Kaling). Lv 10, 20, 30 add IED and Boss."),
      p("ph-m1", "Mastery 1: Blast + Divine Judgment", "About half your damage."),
      p("ph-m2", "Mastery 2: Divine Charge, Divine Mark, Falling Justice"),
      p("ph-m3", "Mastery 3: Heaven's Hammer", "Its passive boosts Blast and Judgment. Cast it off cooldown once unlocked."),
      p("ph-m4", "Mastery 4: Final Attack, Rising Justice"),
      p("ph-boosts", "Boosts: Divine Echo, Hammers of the Righteous, Grand Guardian, Mighty Mjolnir"),
      { id: "ph-calc", label: "Level order: Paladin HEXA calculator", note: "Copy it, fill in the Skill Tree tab, pick Sol Erda Fragment.", href: "https://docs.google.com/spreadsheets/d/1UXdvFBgog9C5pauyjYNhTcKuZ9LVOA98tHB-C9GD4UU/" },
    ],
  },
  {
    id: "pal-burst",
    title: "Burst",
    ref: true,
    ordered: true,
    intro: "Every 2 minutes. Most damage is Blast during Divine Echo. Cast Hammers of the Righteous whenever it's up, not in the sequence.",
    steps: [
      p("pb-vessel", "Blast to 5 Greater Vessel of Light stacks"),
      p("pb-buffs", "Weapon Aura, Maple World Goddess's Blessing, Epic Adventurer"),
      p("pb-echo", "Divine Echo, then Divine Blessing", "In a party, recast Blessing after Echo so it passes on."),
      p("pb-bind", "Smite Shield (before HEXA)"),
      p("pb-mjolnir", "Mighty Mjolnir, 3 charges"),
      p("pb-ring", "Skill ring, Terms and Conditions"),
      p("pb-bastion", "Sacred Bastion"),
      p("pb-gg", "Grand Guardian, held the full 4 seconds"),
      p("pb-bind2", "Smite Shield (after HEXA)", "Bind first on Darknell, Lotus or Damien if they'd walk out of Grand Guardian."),
      p("pb-blast", "Blast for the rest of Echo"),
    ],
  },
  {
    id: "pal-rings",
    title: "Skill rings",
    ref: true,
    intro: "120s cooldown, not cut by cooldown skip: line them up with Grand Guardian.",
    steps: [
      p("pr-restraint", "Restraint", "Stand still for Grand Guardian; it holds you against knockback."),
      p("pr-continuous", "Continuous", "Wear it 120s before it works."),
      p("pr-wj", "Weapon Jump", "Most flexible."),
      p("pr-risk", "Risk Taker", "Only under Sacrosanctity; ends when hit."),
    ],
  },
  {
    id: "pal-survive",
    title: "Staying alive",
    ref: true,
    steps: [
      p("ps-sacro", "Sacrosanctity: 30s invincible, 5 min cooldown", "Recast to end it early: each 5s left takes 45s off the cooldown."),
      p("ps-gg", "Grand Guardian held: half damage, no stun or knockback"),
      p("ps-kb", "Heaven's Hammer, Rush or Impenetrable Skin block super knockback", "Lotus and Damien pushes, Will's push, Darknell's swipe, Black Mage phase 3 push."),
      p("ps-shield", "Divine Shield eats Hard Lucid bombs, Hard Will phase 1 tests, Hard Lotus phase 3 purple balls"),
      p("ps-blitz", "Blitz Shield tanks Darknell's Ultimate Sword Technique"),
      p("ps-erda", "Erda's Will or Hero's Will before Black Mage curses"),
      p("ps-comeback", "Comeback II node for long fights", "Dying cuts 30% off cooldowns, Sacrosanctity included. Hard Will, Black Mage, Seren, Kalos."),
    ],
  },
  {
    id: "pal-train",
    title: "Training",
    ref: true,
    steps: [
      p("pt-charge", "Divine Charge is the main mobbing skill"),
      p("pt-hammers", "Hammers of the Righteous up; Mjolnir while it's down", "Let Mjolnir charges build while Hammers run."),
      p("pt-hh", "Heaven's Hammer off cooldown"),
      p("pt-fountain", "Erda Fountain on the far platforms"),
      p("pt-janus", "Sol Janus: Dawn", "Training gets much easier after 6th job."),
    ],
  },
  {
    id: "pal-links",
    title: "Link skills",
    ref: true,
    steps: [
      p("pl-boss", "Bossing", "Demon Slayer, Demon Avenger, Ark, Kinesis, Explorer Thief, Explorer Mage, Cadena, Kanna, Angelic Buster, Lynn, Mo Xuan, Sia."),
      p("pl-mob", "Training", "Mercedes, Aran, Lara, Evan, Kanna, Ark, HoYoung, Demon Avenger, Kinesis, Illium."),
      p("pl-lumi", "Luminous only if IED is short of 93%", "Noble Demand already adds 50% off screen."),
    ],
  },
  {
    id: "pal-tools",
    title: "Tools",
    ref: true,
    steps: [
      { id: "pt-scouter", label: "MapleScouter", note: "Which bosses your stats can clear.", href: "https://maplescouter.com/" },
      { id: "pt-ia", label: "Inner Ability cost calculator", href: "https://brendonmay.github.io/innerAbilityCalculator/" },
      { id: "pt-video", label: "Paladin overview video (UltimateNPC)", href: "https://www.youtube.com/watch?v=q99Xr0_RPzQ" },
      { id: "pt-discord", label: "Paladin Discord", href: "https://discord.gg/7qyGfmtRt2" },
      { id: "pt-guide", label: "The Comprehensive Guide to Paladin", href: "https://docs.google.com/document/d/1aAQV9QGR4UywDGhQq1O3X7blXADPGDMvgDIAKfCmrH8/mobilebasic" },
    ],
  },
];
