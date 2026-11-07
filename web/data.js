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
      { id: "pick-heroic", kind: "setup", label: "Make the Paladin in Challenger-Heroic" },
      { id: "hyper-burning", kind: "setup", label: "Hyper Burning MAX; not a Quanah leap character", note: "A leap character can't take Beyond Burning." },
      { id: "guild", kind: "setup", label: "Join an active guild", note: "They fill in the first hours." },
      { id: "creation-gift", kind: "setup", label: "Claim the creation gift" },
      { id: "events", kind: "setup", label: "Start every event on the Paladin", note: "Pass, Item Burning, Mystic Seal and Beyond Burning are once per account." },
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
      { id: "hypers", kind: "build", label: "Lv 140: Hyper Skills", note: "Blast Extra Strike, Blast Reinforce, Heaven's Hammer Cooldown Cutter, Extra Strike, Reinforce." },
      { id: "inner-ability", kind: "build", label: "Inner Ability: Attack Speed +1, Boss 10%" },
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
      { id: "v-node1", kind: "build", label: "Boost Node 1 (Blast + Divine Judgment) to Lv 40" },
      { id: "v-jobnodes", kind: "build", label: "Job nodes to Lv 25: Divine Echo, Grand Guardian, Hammers, Mjolnir" },
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
      { id: "sol-janus", kind: "build", label: "Sol Janus Support on the Paladin", note: "Use Dawn. No fragments on Janus." },
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
      { id: "hexa-m1", kind: "build", label: "HEXA: Mastery 1 to 9, Mastery 3 to 10, Mastery 1 to 20" },
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

// Gear runs: starting gear → Item Burning's Challenger set → getting out of it.
// Item Burning gear, its Ignitia keys and Arthur's rentals all end Feb 10,
// 2027, so every slot needs a permanent piece by then.
export const GEAR = [
  {
    id: "start",
    title: "Start: what you equip on day 1",
    intro: "Most of this comes from Hyper Burning level rewards. Equip it as it arrives; don't spend mesos on any of it.",
    steps: [
      { id: "gs-acc", label: "Burning Boss Accessory Box (Lv 200)", note: "A full boss accessory set, and permanent." },
      { id: "gs-pendant", label: "Selector: pick the Dominator Pendant, not the AbsoLab weapon", note: "Item Burning gives you a weapon. The pendant stays useful until a Superior Gollux pendant." },
      { id: "gs-rings", label: "Rings: event rings, then the free skill rings", note: "Bronze gives a selective Lv 3 skill ring (take Continuous); Silver gives the Lv 4 version of the other one (Restraint). Restraint 4 is most classes' skill ring." },
      { id: "gs-title", label: "Title: wear a real one", note: "Event titles no longer give stats; those are in the Hyper or Beyond Burning passive now. King of Root Abyss (all Chaos Root Abyss once) is the easy pick." },
      { id: "gs-ib", label: "Item Burning Plus: equip the Challenger set at 200", note: "Weapon and armor. Their stars and potential come from the stage missions, so don't spend on them." },
      { id: "gs-secondary", label: "Frozen Secondary: cube it now", note: "Aim for 2 lines of Boss% and ATT%. A Pitched secondary is only +6 stat and +4 ATT better, not worth weeks of lost lines, and an Astra secondary replaces either later." },
      { id: "gs-rental", label: "Arthur's Equipment Rental covers face, eye, one pendant, belt and earrings", note: "Until Feb 10, so don't spend on those slots for bossing. Spend on what it doesn't cover: 3 rings, pocket, second pendant, secondary, emblem, medal, badge." },
    ],
  },
  {
    id: "ib",
    title: "Item Burning: 11 stages",
    intro: "Challenger World characters only, and it stops upgrading if you leap. Each stage is a solo clear at a level, and from stage 3 a number of Crests held. Hunting gives 500 a week at most and first solo clears 2,600 in all, so week 1 can reach stage 7 and all 6,500 takes at least 8 weeks.",
    ordered: true,
    steps: [
      { id: "ib-s1", label: "Lv 225 · Normal Lotus", note: "18★, armor potential Unique." },
      { id: "ib-s2", label: "Lv 250 · Easy Lucid", note: "Better scroll values. Weapon bonus potential Unique, armor bonus potential Epic." },
      { id: "ib-s3", label: "Lv 255 · Easy Will · 250 Crests", note: "Weapon potential Legendary." },
      { id: "ib-s4", label: "Lv 260 · Normal Kai · 750 Crests", note: "Hat potential Legendary, your choice: 2 lines main stat, or 2s cooldown plus 1 line main stat. Paladin: the cooldown hat fits 2 Falling Justice casts in one Divine Echo window." },
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
        { id: "gi-keys", label: "Put Ignitia Keys on non-Challenger pieces", note: "2 keys per stage, so the first 4 stages give them all. A key on any piece that isn't Challenger, Eternal or Sengoku stands in for the Challenger set effect it replaced. The set effect stops at 7 of the 8 pieces, so your first key is a free bonus. Lasts until Feb 10." },
      ],
    },
  },
  {
    id: "exit",
    title: "Getting out of Item Burning, slot by slot",
    intro: "Ranked by when the switch usually comes. Replace a Challenger piece only when the new one beats it at its current stars, and have a permanent piece in every slot by Feb 10.",
    ordered: true,
    steps: [
      { id: "gx-emblem", label: "Emblem: Gold Emblem → Legendary → Mitra's Rage", when: "Legendary right away (a 1,500-coin Heroic mission). Mitra's Rage comes from Hard Seren.", note: "One IED line is fine early; then ATT% + IED (never 2 IED lines); from Platinum, ATT% only. 2 lines of ATT% is all you need before Mitra's Rage." },
      { id: "gx-secondary", label: "Secondary: Frozen → Legendary", when: "Right away: another 1,500-coin Heroic mission. Keep it until an Astra secondary." },
      { id: "gx-rings", label: "Rings: skill ring, event ring → Superior Gollux, Slime Ring, Endless Terror", when: "Event ring until the Superior Gollux ring; Guardian Angel Ring from Slime; Endless Terror from Chaos Gloom (or Kanna's Treasure, Meister).", note: "Daybreak Pendant with the Slime Ring gives the 2-set Dawn bonus." },
      { id: "gx-acc", label: "Accessories: rentals and boss box → Superior Gollux and pitched pieces", when: "Before rentals end Feb 10. Each Superior piece is 700 coins, 1 a week.", note: "Belt: Superior Gollux (an 18★+ Golden Clover belt transfers over meanwhile). Earrings: Superior Gollux (18★+ Dea Sidus or Reinforced meanwhile). Face: Twilight Mark or Berserked. Eye: Black Bean Mark, Papulatus Mark or Magic Eyepatch. Pendants: Dominator until a Superior pendant, Mechinator until Daybreak." },
      { id: "gx-pocket-badge", label: "Pocket and badge: Pink Holy Cup → Cursed Spellbook; Crystal Ventus → Genesis Badge", when: "Spellbook from Hard Will, Genesis Badge from Hard Black Mage, or Pitched Whisper Crystals." },
      { id: "gx-heart", label: "Heart: Fairy Heart → Plasma", when: "Fairy Heart at Gold, the Plasma module at Diamond." },
      { id: "gx-glove", label: "Shoes, gloves, cape: Arcane + Memento Armor 18★ scroll", when: "Master gives 3 Memento Armor 18★ scrolls for Lv 200-or-lower armor. Put them on Arcane shoes, gloves and cape.", note: "About 20–21★, free apart from potential, and permanent. Arcane pieces also take Ignitia Keys." },
      { id: "gx-armor", label: "Hat, top, bottom, shoulder: Challenger 22★ → Eternal 18★", when: "As Eternal pieces drop; don't use Memento scrolls here.", note: "Sources: Hard Mayrin (2 at most; solo her from week 4 for the second), Normal Kalos, Normal First Adversary, Kaling (Easy gives halves), Normal Malefic Star. Party everything except Mayrin. 18★ Eternal beats 22★ Challenger." },
      { id: "gx-weapon", label: "Weapon: Challenger → Genesis (two-handed blunt)", when: "Leave it alone until you liberate; an Arcane weapon isn't needed for anything before then, and isn't worth making with a Genesis Pass.", note: "A two-handed blunt weapon gets High Paladin's +10% IED." },
    ],
  },
  {
    id: "farming",
    title: "Farming: meso and drop gear",
    intro: "The guide's top priority if you grind. Heroic mesos come from drops (×6 on Heroic). Caps: Mesos Obtained +100% from gear and familiars together, Item Drop +200% from gear. With this season's normal monster damage, any accessories will do for farming.",
    ordered: true,
    steps: [
      { id: "drop-gear", label: "Farming accessories, one line each", note: "Silver Blossom Ring, Treasure Hunter John Ring (5 minutes of Neo Lion Castle quests), 2 event rings, Mechinator Pendant, Spirit Pendant (or Chaos Horntail Necklace; a Greed Pendant adds +20% equipment drop), Dea Sidus Earrings, Condensed Power Crystal, Aquatic Letter Eye." },
      { id: "drop-meso", label: "Roll meso lines to +100%, then drop", note: "One line on each gets about +100% meso and +60% drop with the Spirit Pendant. If you mostly boss, put drop first." },
      { id: "drop-boss", label: "A drop set for bossing: 9 × 20% = 180%", note: "Drop rate also helps you get the damage accessories you need." },
      { id: "fam-keep", label: "Keep every familiar card from the start", note: "Cards drop in Maple World, Arcane River from Morass on, and Grandis. Fuse duplicates to rank up (Unique at most); extract the rest for points." },
      { id: "fam-badges", label: "Familiar badges: 1 for a second slot, 10 for a third" },
      { id: "fam-drop", label: "A drop familiar and a meso familiar", note: "Epic lines are +60/100% Boost, Unique +110%. Drop lines don't stack across familiars. Heroic can't buy Red Familiar Cards, so you rank up by fusing." },
      { id: "drop-ia", label: "Inner Ability preset with a +20% meso or drop line", note: "Swap to it for farming. Your bossing preset keeps Attack Speed and Boss." },
      { id: "wap", label: "Wealth Acquisition Potion for long sessions", note: "×1.2 mesos outside the cap, and +20% drop." },
    ],
    later: {
      title: "Two-line items (not on a mule)",
      steps: [
        { id: "drop-2l", label: "Double meso, double drop or hybrid lines", note: "Expected Bright Cubes: any 2-line 164 (about 3.6b), double drop or hybrid 219 (4.8b), double drop only 654 (14.4b). Meso caps at 100%, so after 2 double-meso items only drop lines help. Not worth it on a character that stops near 280." },
      ],
    },
  },
];
