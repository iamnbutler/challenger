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
      { id: "v-node1", paladin: true, kind: "build", icons: ["blast", "divine-judgment"], label: "Boost Node 1 to Lv 40", note: "Blast and Divine Judgment. Lv 40 unlocks HEXA Mastery 1." },
      { id: "v-jobnodes", paladin: true, kind: "build", icons: ["divine-echo", "grand-guardian", "hammers", "mjolnir"], label: "Job nodes to Lv 25, Divine Echo first" },
      { id: "v-decents", kind: "build", icons: ["decent-holy-symbol", "decent-speed-infusion", "decent-sharp-eyes"], label: "Decent Holy Symbol, Speed Infusion, Sharp Eyes", note: "Lv 1 is enough." },
      { id: "v-utility", kind: "build", icons: ["blink", "rope-lift", "erda-will"], label: "Blink, Rope Lift, Will of Erda at Lv 1" },
      { id: "as10", paladin: true, kind: "build", icons: ["decent-speed-infusion"], label: "Attack Speed 10", note: "Inner Ability +1, Decent Speed Infusion and an Extreme Green Potion." },
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
      { id: "sol-janus", kind: "build", icons: ["sol-janus-dawn"], label: "Sol Janus Support on this character", note: "Use Dawn. No fragments on Janus." },
      { id: "pal-training", paladin: true, kind: "setup", icons: ["divine-charge", "hammers", "mjolnir", "heavens-hammer"], label: "Train with Hammers up, Mjolnir while they're down", note: "Divine Charge between; Heaven's Hammer and Erda Fountain off cooldown." },
      { id: "rank-bronze", kind: "rank", label: "Bronze, Silver", note: "Take Continuous from the Bronze ring voucher." },
      { id: "hexa-unlock", paladin: false, kind: "build", label: "HEXA: unlock all Masteries and boosts to Lv 1" },
      { id: "hexa-path", paladin: true, kind: "build", icons: ["sacred-bastion"], label: "HEXA: follow the order below" },
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
    id: "hexa",
    title: "HEXA order",
    paladin: true,
    lead: true,
    levels: [260, 301],
    ordered: true,
    steps: [
      { id: "hx-origin", icons: ["sacred-bastion"], label: "Sacred Bastion", target: "Lv 1", note: "Comes with 6th job." },
      { id: "hx-m1", icons: ["hexa-blast"], label: "Mastery 1: Blast, Divine Judgment", target: "Lv 1" },
      { id: "hx-m2", icons: ["hexa-divine-charge"], label: "Mastery 2: Divine Charge, Divine Mark, Falling Justice", target: "Lv 1", note: "Needs Boost Node 2 at Lv 40." },
      { id: "hx-m3", icons: ["hexa-heavens-hammer"], label: "Mastery 3: Heaven's Hammer", target: "Lv 1", note: "Needs Boost Node 3 at Lv 40. Cast it off cooldown from now on." },
      { id: "hx-m4", icons: ["hexa-final-attack"], label: "Mastery 4: Final Attack, Rising Justice", target: "Lv 1", note: "Needs Boost Node 4 at Lv 40." },
      { id: "hx-boosts", icons: ["divine-echo", "hammers", "grand-guardian", "mjolnir"], label: "Boosts: Divine Echo, Hammers, Grand Guardian, Mjolnir", target: "Lv 1", note: "Each needs its 5th job skill at Lv 25." },
      { id: "hx-m1-9", icons: ["hexa-blast"], label: "Mastery 1", target: "Lv 9" },
      { id: "hx-m3-10", icons: ["hexa-heavens-hammer"], label: "Mastery 3", target: "Lv 10" },
      { id: "hx-m1-20", icons: ["hexa-blast"], label: "Mastery 1", target: "Lv 20" },
    ],
    link: { label: "Then the Paladin HEXA calculator", href: "https://docs.google.com/spreadsheets/d/1UXdvFBgog9C5pauyjYNhTcKuZ9LVOA98tHB-C9GD4UU/" },
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
      { id: "l-links", label: "Link alts", note: "Links can't come from other worlds. Evan's comes with the world passive.", chips: [
        { icon: "link-ds", label: "Demon Slayer", note: "Boss" },
        { icon: "link-da", label: "Demon Avenger", note: "Damage" },
        { icon: "link-ark", label: "Ark", note: "Damage" },
        { icon: "link-ab", label: "Angelic Buster", note: "Burst damage" },
      ] },
    ],
    later: {
      title: "Later, if there's time",
      steps: [
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
      { id: "gs-rings", label: "Skill rings: Continuous (Bronze), Restraint (Silver)", pal: "Stand still in Restraint for Grand Guardian." },
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
    id: "burst",
    title: "Burst · every 2 min",
    paladin: true,
    view: "rotation",
    phases: [
      { label: "Stack", keys: [{ icon: "vessel", name: "Blast to 5 Vessel of Light" }] },
      { label: "Buff", keys: [{ icon: "weapon-aura", name: "Weapon Aura" }, { icon: "goddess", name: "Goddess's Blessing" }, { icon: "epic-adventure", name: "Epic Adventure" }] },
      { label: "Echo", keys: [{ icon: "divine-echo", name: "Divine Echo" }, { icon: "divine-blessing", name: "Divine Blessing" }] },
      { label: "Open", keys: [{ icon: "mjolnir", name: "Mjolnir", tag: "×3" }, { name: "Skill ring", text: "Ring" }, { icon: "link-ab", name: "Terms and Conditions" }] },
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
