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
      { id: "gollux", cadence: "daily", minLevel: 180, label: "Gollux: never skip", note: "One run a day: Hard pays 15–20 coins, Hell 25–30. Each Superior piece is 700 coins (1 a week), so save for Superior instead of buying lower tiers. Skip the story in the prerequisite quest." },
      { id: "exp-coupon", cadence: "daily", label: "Claim 3x EXP coupons", note: "Operation Ultima gives 3 a day." },
      { id: "arcane-dailies", cadence: "daily", minLevel: 200, label: "Arcane River symbol dailies", note: "Every unlocked region. Now 100 kills each, and each one counts toward the Wednesday mission." },
      { id: "grandis-dailies", cadence: "daily", minLevel: 260, label: "Grandis symbol dailies", note: "Every unlocked region, 100 kills each." },
      { id: "monster-park", cadence: "daily", label: "Monster Park (Sweep)", note: "Sweep your runs. 6 a week clears the Challenger weekly mission." },
      { id: "ursus", cadence: "daily", minLevel: 120, label: "Ursus (1 run)", note: "Down to 1 run a day with 3x mesos, and Golden Time is always on." },
      { id: "daily-bosses", cadence: "daily", minLevel: 140, label: "Daily bosses for mesos", note: "Hard Hilla, Chaos Pink Bean and Normal Cygnus are dailies now. Pink Bean drops the Pink Holy Cup pocket." },
      { id: "arcane-seal", cadence: "daily", minLevel: 200, label: "Mystic Seal: hold your rods", note: "+3 Seal Control Rods a day, none while you hold 20. The Legendary chance rises at Gold, Emerald, Sapphire and Diamond, so only open seals when you'd hit the cap or shop rods are about to expire. Settle for Rare below Gold, Epic at Gold, Unique at Emerald/Sapphire, Legendary at Diamond. From Master, use them as they come." },
      { id: "star-specks", cadence: "daily", minLevel: 260, label: "Trace Restore: Star Speck Boxes (optional)", note: "Up to 12 a day. The points carry over to your main world, so only if you feel like it." },
    ],
  },
  {
    title: "Weekly · Challenger",
    hint: "Resets Wednesday 00:00 UTC.",
    items: [
      { id: "cw-weekly", cadence: "weekly-wed", label: "Challenger weekly mission: 1,500 coins", note: "Do one: 6 Monster Park runs (easiest), 12 symbol dailies, or 5,000 kills near your level. Missing a week costs 10,000 Maple Points to buy back." },
      { id: "crest-hunt", cadence: "weekly-wed", minLevel: 200, label: "Item Burning: hunt 10,000 monsters for 500 Crests", note: "100 Crests per 2,000 kills, capped at 500 a week. Open the Item Burning PLUS window to bank them. The full 6,500 takes at least 8 weeks, so never skip one. The reset day isn't confirmed; check it in game." },
    ],
  },
  {
    title: "Weekly · Bosses",
    hint: "Resets Thursday 00:00 UTC. Solo first clears give Challenger points and one-time Crests, all-phase Practice Mode counts, and a harder mode counts for the easier one. Crystals are your mesos. IB n = Item Burning stage n.",
    items: [
      { id: "rental", cadence: "weekly-thu", minLevel: 200, until: "2027-02-10T00:00:00Z", label: "Arthur's Equipment Rental: rent everything, then boss", note: "1 free rental a week, lasting 2 days. Rent the full set with totems (about 1.9b) near the end of the boss week and run your hardest bosses in that window. Ends Feb 10." },
      { id: "seal-shop", cadence: "weekly-thu", minLevel: 200, label: "Meso shop: Sealing Wand Coupons (optional)", note: "5m each, 50 a week. They expire 7 days after you buy them, so only buy what you'll open this week." },
      { id: "wb-prearcane", cadence: "weekly-thu", minLevel: 180, label: "Chaos Zakum · Hard Magnus · Chaos Papulatus · Chaos Root Abyss", note: "Hard Magnus drops Crystal Ventus (badge). Clear every Chaos Root Abyss boss once for the King of Root Abyss title." },
      { id: "wb-lotus-damien", cadence: "weekly-thu", minLevel: 190, label: "Lotus · Damien", note: "Normal Lotus is IB 1, Hard Damien IB 7. Hard: 1,500 points each." },
      { id: "wb-slime-lucid-will", cadence: "weekly-thu", minLevel: 210, label: "Guardian Angel Slime · Lucid · Will", note: "Easy Lucid IB 2, Easy Will IB 3, Normal Lucid IB 5, Chaos Slime IB 9." },
      { id: "wb-kai", cadence: "weekly-thu", minLevel: 235, label: "Kai (Normal)", note: "IB 4. Solo, 10 deaths allowed. Gives mission credit only and doesn't use a crystal slot." },
      { id: "wb-gloom-vh-darknell", cadence: "weekly-thu", minLevel: 245, label: "Gloom · Verus Hilla · Darknell", note: "Normal Darknell IB 6, Normal Verus Hilla IB 8, Chaos Gloom IB 10." },
      { id: "wb-grandis", cadence: "weekly-thu", minLevel: 260, label: "Seren · Kalos · First Adversary · Kaling", note: "Not Item Burning stages. Normal Kalos, Normal Adversary and Easy Kaling and up drop Eternal pieces (Easy Kaling only halves); party those." },
      { id: "wb-mayrin", cadence: "weekly-thu", minLevel: 270, from: MAYRIN_FROM, label: "Mayrin", note: "Once per account, solo. Normal from 270 (5,000 points) is IB 11 and gates Master. Hard from 280 (9,000) gates Challenger and drops Eternal pieces." },
    ],
  },
  {
    title: "Weekly · Quests",
    hint: "Resets Monday 00:00 UTC.",
    items: [
      { id: "arcane-weekly", cadence: "weekly-mon", minLevel: 200, label: "Arcane River weeklies", note: "One run per region now gives 240 symbols." },
      { id: "extreme-parker", cadence: "weekly-mon", minLevel: 260, label: "Extreme Monster Parker", note: "Replaces Monster Park Extreme: 5 Monster Park clears. The quest is new, so check in game when it resets." },
      { id: "epic-dungeon", cadence: "weekly-mon", minLevel: 260, label: "Epic Dungeon", note: "High Mountain, Angler Company or Nightmare Paradise, now 5 stages. On Heroic they pay Sol Erda and fragments." },
    ],
  },
  {
    title: "Monthly",
    hint: "Resets on the 1st, 00:00 UTC.",
    items: [
      { id: "black-mage", cadence: "monthly", minLevel: 255, label: "Hard Black Mage", note: "6,000 points. HP is down about 65% and the timer is 20 minutes, so it sits with Normal Seren (45M CP+)." },
    ],
  },
];

// Damage-per-minute targets are the computed v.272 HP over 20 minutes at 65%
// uptime (docs/bosses.md). Read yours from Battle Analysis in Practice Mode.
const BA = "Battle Analysis in Practice";

export const PLAN = [
  {
    id: "day1",
    title: "Day 1 · Nov 11, after maintenance",
    intro: "Do these in order the moment the servers open. Guild spots fill fast, and the once-per-account choices can't be undone.",
    ordered: true,
    steps: [
      { id: "pick-heroic", kind: "setup", label: "Make the Paladin in Challenger-Heroic", note: "Your first character locks the account to Heroic or Interactive." },
      { id: "hyper-burning", kind: "setup", label: "Choose Hyper Burning MAX, and don't designate it a Quanah leap character", note: "Hyper Burning MAX gives +4 levels per level up to 260. A Quanah leap character can't take Beyond Burning (260–280)." },
      { id: "guild", kind: "setup", label: "Join an active guild right away", note: "Guilds fill in the first hours. Guild skills and Guild Blessing are bossing buffs you can't get any other way here." },
      { id: "creation-gift", kind: "setup", label: "Claim the creation gift", note: "Pearl Maple set, 1,000 Power Elixirs, 64-slot inventories." },
      { id: "events", kind: "setup", label: "Burn to 200 and start every event on the Paladin", note: "Challenger Pass at 101; at 200 after \"A Greater Power\": Item Burning Plus, Mystic Seal, then Beyond Burning at 260. Each is once per account." },
      { id: "ib-list", kind: "setup", label: "Learn how Item Burning's 11 stages unlock", note: "Each stage is a solo clear at a level; from stage 3 you also need enough Crests of Challenge held. Crests come from hunting (500 a week at most) and one-time first solo clears (2,600 in all), so clear every boss you can as early as you can. The Gear tab lists the stages." },
      { id: "day0-weeklies", kind: "clear", label: "Weekly bosses before 00:00 UTC Thursday (7 PM ET Wed)", note: "Launch day is a Wednesday, so you get a round of weeklies (crystals and first-clear points) before the Thursday reset. KMS players reached 260 in 1–3 hours." },
      { id: "live-notes", kind: "setup", label: "Skim the live Challenger event page", note: "Check the tier thresholds, the coin shop and any changes from the test-server notes." },
    ],
  },
  {
    id: "burn",
    title: "Lv 10–200 · Hyper Burning",
    levels: [1, 200],
    ordered: true,
    steps: [
      { id: "burn-rewards", kind: "setup", label: "Claim Hyper Burning rewards as they unlock", note: "Hold symbol selectors until you've done each region's story; they only work there." },
      { id: "pass", kind: "setup", label: "Lv 101: join the Challenger Pass on the Paladin", note: "Once per account and can't be changed. Missions done before you join don't count. 30 levels at 5 a week, so it takes 6 weeks; it ends Feb 9. The EXP Pass (19,800 Maple Points) adds +200% normal monster damage, +20% EXP and Blueberry Farm tickets, the best EXP at 260–279." },
      { id: "hypers", kind: "build", label: "Lv 140: Hyper Skills", note: "Blast Extra Strike, Blast Reinforce, Heaven's Hammer Cooldown Cutter, Heaven's Hammer Extra Strike, Heaven's Hammer Reinforce." },
      { id: "inner-ability", kind: "build", label: "Inner Ability: Attack Speed +1, Boss 10%, +8% to abnormal status", note: "Attack Speed +1 is what gets a two-handed Paladin to attack speed 10." },
    ],
  },
  {
    id: "arcane",
    title: "Lv 200–260 · Hyper Blink, Arcane River",
    levels: [200, 260],
    ordered: true,
    steps: [
      { id: "hyper-blink", kind: "level", label: "Hyper Blink to 260", note: "+5,000% EXP from 200 to 259. Use it to level, and pop a 3x coupon first." },
      { id: "greater-power", kind: "setup", label: "5th job and \"A Greater Power\"", note: "This unlocks Item Burning Plus and Arcane Seal. Start both on the Paladin: Item Burning is once per account, and switching Arcane Seal to another character resets it." },
      { id: "v-node1", kind: "build", label: "Boost Node 1 (Blast + Divine Judgment) to Lv 40", note: "Trinodes are gone since v.269. Lv 40 adds +20% IED and later unlocks HEXA Mastery 1." },
      { id: "v-jobnodes", kind: "build", label: "Job nodes to Lv 25: Divine Echo first, then Grand Guardian, Hammers of the Righteous, Mighty Mjolnir", note: "Lv 25 is required for their HEXA boosts. Divine Echo is worth maxing first." },
      { id: "tier1", kind: "clear", label: "Free bosses: everything up to Normal Lotus and Normal Damien", note: "Cygnus, Hilla, Pink Bean, Zakum, Pierre, Von Bon, Crimson Queen, Magnus, Vellum, Papulatus, then Normal Lotus and Damien. Item Burning and the boss accessory box are enough. Normal Lotus is Item Burning stage 1 (Lv 225); each first solo of Normal Lotus and Damien gives 50 Crests. Lv 260 plus these is Bronze." },
      { id: "f-arc360", kind: "force", label: "ARC 360", unlocks: "Lucid", note: "For example four symbols at Lv 6–7. Use Hyper Burning selectors once each region's story is done." },
      { id: "s4-ib2", kind: "clear", label: "Easy Lucid", note: "Item Burning stage 2 (Lv 250). 50 Crests." },
      { id: "c-lucid-n", kind: "clear", label: "Normal Lucid", note: "Boss Lv 230, 1,000 points, 100 Crests. Item Burning stage 5 once you're 265 with 1,500 Crests." },
      { id: "l-235", kind: "level", label: "Lv 235", unlocks: "Lucid at +5, the cap (×1.20). Also unlocks Kai and Esfera." },
      { id: "f-arc760", kind: "force", label: "ARC 760", unlocks: "Will. Also clears Gloom's 730." },
      { id: "s4-ib3", kind: "clear", label: "Easy Will and Normal Slime", note: "Easy Will is Item Burning stage 3 (Lv 255, 250 Crests held). 50 Crests each." },
      { id: "c-will-n", kind: "clear", label: "Normal Will and Normal Gloom", note: "Boss Lv 250 and 255, 100 and 150 Crests. Normal Gloom is the last boss for Silver (with Lv 260)." },
      { id: "l-255", kind: "level", label: "Lv 255", unlocks: "Will, Verus Hilla and Chaos Slime at +5 (×1.20). At level for Gloom." },
    ],
  },
  {
    id: "grandis",
    title: "Lv 260–280 · 6th job, Sol Janus, Hard bosses",
    intro: "Ordered by the guide's boss tiers. Combat power targets assume a mostly maxed V Matrix and HEXA growing with it; read them as \"comfortable, with mistakes\", not as a minimum clear.",
    levels: [260, 280],
    ordered: true,
    steps: [
      { id: "beyond-burning", kind: "level", label: "Turn on Beyond Burning (260–280)", note: "+1 level per level. Once per account." },
      { id: "sol-janus", kind: "build", label: "Sol Janus Skill Support on the Paladin", note: "One Lv 260+ character per world gets Sol Janus at Lv 30 until it leaps, plus +100% EXP. Use Dawn (3 orbs). Spend no fragments on Janus. The choice is permanent." },
      { id: "rank-bronze", kind: "rank", label: "Bronze, then Silver", note: "Lv 260 with the free bosses is Bronze: take the Continuous Ring from the selective Lv 3 voucher. Normal Gloom makes Silver, which gives the Lv 4 version of the other ring (Restraint)." },
      { id: "hexa-unlock", kind: "build", label: "HEXA: Mastery 1 → 2 → 3 → 4 to Lv 1, then Grand Guardian, Hammers, Mjolnir and Divine Echo boosts to 1", note: "Unlock everything first. Mastery 1 to 1 is the biggest single gain (+4.7%)." },
      { id: "c-kai", kind: "clear", label: "Kai (Normal)", note: "Item Burning stage 4 (Lv 260, 750 Crests held). 1,000 points, 50 Crests. Solo, 30 minutes, 10 deaths. Counts only toward Challenger and Item Burning missions." },
      { id: "farm-setup", kind: "gear", label: "Farming setup: meso then drop gear, familiars", note: "The guide's top priority if you grind. See Farming on the Gear tab." },
      { id: "c-darknell-n", kind: "clear", label: "Normal Darknell", note: "Item Burning stage 6 (Lv 265, 2,250 Crests held). 150 Crests. Watch your Arcane Force; Tier 3's requirements jump." },
      { id: "c-lotus-damien", kind: "clear", label: "Hard Lotus and Hard Damien", note: "Tier 4: 10–15M CP, about Lv 266+. Boss Lv 210, about 1.8T a minute each. 1,500 points and 150 Crests each. Hard Damien is Item Burning stage 7 (Lv 270, 3,000 Crests held). Drops: Berserked (face), Magic Eyepatch (eye). Lv 262 with these is Gold: Fairy Heart." },
      { id: "c-vh-n", kind: "clear", label: "Normal Verus Hilla", note: "Tier 4. Item Burning stage 8 (Lv 270, 3,750 Crests held). 175 Crests. Lv 270 with this is Platinum." },
      { id: "rental-push", kind: "gear", label: "Rent Arthur's full set for the Tier 5 push", note: "Tier 5 wants 20–30M CP and Lv 270+, and the rentals make every boss in it doable. The guide's fastest path soloes all of Tier 5 in week 1 with rentals." },
      { id: "c-hard-lucid-test", kind: "test", label: "Hard Lucid: Practice at 6.5T a minute", note: `${BA}. Phase 3 wasn't cut, so check that your burst takes a big chunk of it.` },
      { id: "c-hard-lucid", kind: "clear", label: "Hard Lucid", note: "2,000 points, 175 Crests. Dreamy Belt." },
      { id: "c-will-test", kind: "test", label: "Hard Will: Practice phase 2 in under 3¾ min", note: "Phase 2 is a quarter of the HP; that time leaves 25% slack under the 20-minute limit. About 6.5T a minute overall." },
      { id: "c-hard-will", kind: "clear", label: "Hard Will", note: "2,500 points, 175 Crests. Cursed Spellbook (pocket)." },
      { id: "c-slime-chaos", kind: "clear", label: "Chaos Guardian Angel Slime", note: "Item Burning stage 9 (Lv 275, 4,500 Crests held). 175 Crests. Test: from 50% HP in under 7.5 min (about 4.7T a minute)." },
      { id: "c-gloom-test", kind: "test", label: "Chaos Gloom: Practice from 50% HP in under 7.5 min", note: "About 6.6T a minute." },
      { id: "c-gloom", kind: "clear", label: "Chaos Gloom", note: "Item Burning stage 10 (Lv 275, 5,500 Crests held). 2,500 points, 200 Crests. Endless Terror (ring)." },
      { id: "hexa-m1", kind: "build", label: "HEXA: Mastery 1 to 9, Mastery 3 to 10, Mastery 1 to 20", note: "Divine Judgment is about half your damage, and Mastery 3 feeds it." },
      { id: "c-kalos-path", kind: "clear", label: "Hard Verus Hilla", note: "Needs ARC 900, boss Lv 250. 3,000 points, 200 Crests. Source of Suffering (pendant). Test: one of the 4 bars in under 3¾ min (about 9.4T a minute)." },
      { id: "c-darknell-test", kind: "test", label: "Hard Darknell: Practice from 50% HP in under 7.5 min", note: "ARC 850, boss Lv 265. About 8.3T a minute." },
      { id: "c-darknell", kind: "clear", label: "Hard Darknell", note: "3,000 points, 200 Crests. Commanding Force Earring." },
      { id: "l-270", kind: "level", label: "Lv 270", unlocks: "Darknell at +5. At level for Normal Seren, Easy Kalos and Easy First Adversary. Unlocks Mayrin and Odium." },
      { id: "c-mayrin-n", kind: "clear", label: "Mayrin (Normal)", note: "Tier 5. 5,000 points, 200 Crests, once per account per week. Needed for Master. It's also Item Burning stage 11, which waits for Lv 280 and 6,500 Crests." },
      { id: "rank-emerald", kind: "rank", label: "Emerald, then Sapphire", note: "Emerald (30k): at Lv 270, all of Tier 5 but Mayrin, minus two; at 276, everything through Hard Lotus/Damien plus two of Hard Lucid, Hard Will, a Chaos Tenebris boss or Chaos Slime. Sapphire (40k): Lv 276 and all of Tier 5 but Mayrin. Emerald brings the passive to 70% IED, so drop IED lines." },
      { id: "f-sac200", kind: "force", label: "SAC 200", unlocks: "Seren phase 2 and Easy Kalos (SAC 150 covers Seren phase 1)" },
      { id: "c-seren-test", kind: "test", label: "Normal Seren: Practice phase 1 in under 3¾ min", note: "Tier 6: 45M+ CP, Lv 275+. About 10.9T a minute." },
      { id: "ib-6", kind: "clear", label: "Normal Seren", note: "6,000 points." },
      { id: "c-bm-test", kind: "test", label: "Hard Black Mage: Practice phase 1 in under 2 min", note: "Tier 6: 45M+ CP, about Normal Seren. ARC 1320, which is every symbol maxed. About 12.8T a minute." },
      { id: "c-bm", kind: "clear", label: "Hard Black Mage", note: "6,000 points, monthly. Genesis Badge. Clear it before the end of November to liberate around Dec 1 with a Genesis Pass (Jan 14 without). Lv 276 with this is Diamond: Plasma Heart module." },
      { id: "l-275", kind: "level", label: "Lv 275", unlocks: "Easy Kalos, Normal Seren and Easy First Adversary at +5. At level for Hard Seren and Easy Kaling." },
      { id: "ib-7", kind: "clear", label: "Easy Kalos", note: "Tier 6: 55M+ CP. 7,000 points. Test: phase 1 in under 4 min (about 18.3T a minute)." },
      { id: "f-sac220", kind: "force", label: "SAC 220", unlocks: "Easy First Adversary" },
      { id: "ib-8", kind: "clear", label: "Easy First Adversary", note: "Tier 6: 65M+ CP. 9,000 points. About 29.7T a minute. Lv 276 with this and Normal Mayrin is Master: 3 Memento Armor 18★ scrolls (see Gear)." },
    ],
  },
  {
    id: "endgame",
    title: "Lv 280+ · Hard Seren, Hard Mayrin",
    intro: "Tier 7. Challenger is Hard Mayrin plus everything through Hard Seren at 280, or through Easy Adversary at 284 (Hard Seren not needed). This tier may need the liberated Genesis weapon.",
    levels: [280, 301],
    ordered: true,
    steps: [
      { id: "ib-11", kind: "clear", label: "Finish Item Burning: stage 11", note: "Lv 280, 6,500 Crests held, Normal Mayrin cleared. Armor goes to 22★. Crests set the pace: at least 8 weeks in." },
      { id: "c-hard-seren", kind: "clear", label: "Hard Seren", note: "85M+ CP. 7,000 points. Mitra's Rage (emblem). About 25.2T a minute. Skip it for Challenger if you'll reach 284." },
      { id: "c-mayrin-h", kind: "clear", label: "Mayrin (Hard)", note: "120M+ CP, much harder than Hard Seren (HP just under Normal Kalos). 9,000 points. Gates Challenger. Drops Eternal pieces; for a second piece, solo her from week 4." },
      { id: "rank-challenger", kind: "rank", label: "Challenger", note: "90,000 points with Hard Mayrin. Lv 20 Sol Janus voucher." },
    ],
    later: {
      title: "Optional: party for Eternals",
      steps: [
        { id: "f-sac230", kind: "force", label: "SAC 230", unlocks: "Easy Kaling" },
        { id: "c-kaling-e", kind: "clear", label: "Easy Kaling", note: "Not needed for Challenger. 9,000 points, about 34.3T a minute. Solo Easy and you're ready for Normal Kaling, which drops whole Eternal pieces (Easy only halves)." },
        { id: "c-eternal-party", kind: "clear", label: "Normal Kalos and Normal Adversary in a party", note: "Both drop Eternal pieces. Solo Easy Kalos and a full party does Normal easily; solo Easy Adversary and you're just strong enough for Normal. Normal Kalos wants SAC 350." },
      ],
    },
  },
  {
    id: "forgotten",
    title: "Commonly forgotten",
    intro: "Legion, Monster Collection and link transfer are off in Challenger World. Don't plan around them. The world passive includes Level 2 Evan link.",
    steps: [
      { id: "f-emblem", label: "Free Gold Emblem from the Lv 100 quest" },
      { id: "f-totems", label: "Totems (3)" },
      { id: "f-medal", label: "Medal: Chaos Vellum or the Monster Park medal" },
      { id: "f-charm", label: "Use the trait potion from Hyper Burning rewards on Charm" },
      { id: "f-hyperstat", label: "Hyper Stats: reallocate as you level", note: "Crit Rate only up to what you need, then Damage, Boss and Crit Damage. The world passive reaches 70% IED at Emerald, so IED comes easily; don't chase it." },
      { id: "f-hexastat", label: "HEXA Stat: ATT main, Crit Damage and Boss extras", note: "Also a 300-coin mission." },
      { id: "f-ability", label: "Legendary Ability", note: "Coin missions: 300 for Legendary, 500 for a Boss/ATT/+1 passive line." },
      { id: "f-title", label: "Title: King of Root Abyss", note: "Clear every Chaos Root Abyss boss once: 8 all stat, 3 ATT, 5% IED, 5% Boss. Event titles no longer give stats (they're in the burning passive now), so wear a real title." },
      { id: "f-whisper", label: "Save Pitched Whisper Crystals for the Genesis Badge", note: "Then buy whatever pitched pieces didn't drop. The 480-crystal pity is a last resort." },
      { id: "f-doping", label: "Bossing buffs: Guild Blessing, VIP and MVP buffs" },
      { id: "f-claim", label: "Claim tier rewards before Feb 9", note: "Bronze to Platinum rewards can only be claimed inside Challenger World; Emerald and up on any world. Bronze also unlocks the Challenger android." },
    ],
    later: {
      title: "Later, if there's time",
      steps: [
        { id: "l-links", label: "Tera Burning alts for links: Angelic Buster, Demon Slayer, Demon Avenger, Ark", note: "Links can't be transferred in, so the only links you get are characters you level in this world." },
        { id: "l-genesis", label: "Genesis Pass", note: "30,000 NX only (no Maple Points), Nov 12 to Feb 8. 3x Traces, parties of up to 6, a guaranteed 3% ATT soul, and a buff on Trace bosses (20 ATT, 10% Boss, 10% IED). Skip the Genesis Pass PLUS premium track on Heroic." },
        { id: "l-masteria", label: "Masteria's Summoner title", note: "The best permanent title (20 all stat, 10 ATT, 10% Boss). Clear Chaos Vellum on a Lethe character; the title is a coupon you can move to any character." },
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
