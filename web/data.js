// Everything the sheet lists. Sources: docs/v272.md (v.272 PTS notes) and
// docs/guides.md (community guidance, Season 3 rules). Keep lists short: a row
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
  source: "Times are UTC server time. Content per v.272 PTS notes (Nov 3); recheck against the live notes.",
};

const MAYRIN_FROM = "2026-11-12T00:00:00Z";

export const TODAY = [
  {
    title: "Daily",
    hint: "Resets 00:00 UTC.",
    items: [
      { id: "exp-coupon", cadence: "daily", label: "Claim and use 3x EXP coupons", note: "Operation Ultima gives 3 a day. Pop one before you grind or run Blink." },
      { id: "hyper-blink", cadence: "daily", minLevel: 200, maxLevel: 259, label: "Hyper Blink (40 min)", note: "+5,000% EXP from 200 to 259. Your biggest EXP of the day. Check in game whether it's once a day." },
      { id: "arcane-dailies", cadence: "daily", minLevel: 200, label: "Arcane River symbol dailies", note: "Every unlocked region. Now 100 kills each, and each one counts toward the Wednesday mission." },
      { id: "grandis-dailies", cadence: "daily", minLevel: 260, label: "Grandis symbol dailies", note: "Every unlocked region, 100 kills each." },
      { id: "monster-park", cadence: "daily", label: "Monster Park (Sweep)", note: "Sweep your runs. 6 a week clears the Challenger weekly mission." },
      { id: "ursus", cadence: "daily", minLevel: 120, label: "Ursus (1 run)", note: "Down to 1 run a day with 3x mesos, and Golden Time is always on." },
      { id: "daily-bosses", cadence: "daily", minLevel: 140, label: "Daily bosses for mesos", note: "Hard Hilla, Chaos Pink Bean and Normal Cygnus are dailies now. Pink Bean drops the Pink Holy Cup pocket." },
      { id: "arcane-seal", cadence: "daily", minLevel: 200, label: "Arcane Seal: spend wands", note: "+3 wands a day, capped at 20. Don't sit at the cap; barrier quality rises with your tier." },
    ],
  },
  {
    title: "Weekly · Challenger",
    hint: "Resets Wednesday 00:00 UTC.",
    items: [
      { id: "cw-weekly", cadence: "weekly-wed", label: "Challenger weekly mission: 1,500 coins", note: "Do one: 6 Monster Park runs (easiest), 12 symbol dailies, or 5,000 kills near your level. Missing a week costs 10,000 Maple Points to buy back." },
    ],
  },
  {
    title: "Weekly · Bosses",
    hint: "Resets Thursday 00:00 UTC. Solo first clears give Challenger points, Practice Mode counts, and a harder mode counts for the easier one. Crystals are your mesos. Boss HP is down about a third this patch.",
    items: [
      { id: "wb-prearcane", cadence: "weekly-thu", minLevel: 180, label: "Chaos Zakum · Hard Magnus · Chaos Papulatus · Chaos Root Abyss", note: "Hard Magnus drops Crystal Ventus (badge); Chaos Vellum is Item Burning stage 2." },
      { id: "wb-lotus-damien", cadence: "weekly-thu", minLevel: 190, label: "Lotus · Damien", note: "Normal Lotus is Item Burning stage 3. Hard: 1,500 points each." },
      { id: "wb-slime-lucid-will", cadence: "weekly-thu", minLevel: 210, label: "Guardian Angel Slime · Lucid · Will", note: "Easy Lucid is Item Burning stage 4." },
      { id: "wb-kai", cadence: "weekly-thu", minLevel: 235, label: "Kai (Normal)", note: "Solo, 10 deaths allowed. Gives mission credit only and doesn't use a crystal slot." },
      { id: "wb-gloom-vh-darknell", cadence: "weekly-thu", minLevel: 245, label: "Gloom · Verus Hilla · Darknell", note: "Hard Verus Hilla is Item Burning stage 5." },
      { id: "wb-grandis", cadence: "weekly-thu", minLevel: 260, label: "Seren · Kalos · First Adversary · Kaling", note: "Normal Seren, Easy Kalos and Easy First Adversary are Item Burning stages 6–8." },
      { id: "wb-mayrin", cadence: "weekly-thu", minLevel: 270, from: MAYRIN_FROM, label: "Mayrin", note: "New Challenger boss, once per account, solo. Normal from 270 (5,000 points), Hard from 280 (9,000)." },
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
      { id: "black-mage", cadence: "monthly", minLevel: 255, label: "Hard Black Mage", note: "6,000 points. HP is down about 65% this patch." },
    ],
  },
];

export const PLAN = [
  {
    id: "before",
    title: "Before Nov 11",
    intro: "Some choices are once per account and can't be undone. Make them all for the Paladin.",
    steps: [
      { id: "pick-heroic", label: "Make your first Challenger character in Challenger-Heroic", note: "Your first character locks the account to Heroic or Interactive." },
      { id: "hyper-burning", label: "Make the Paladin a Hyper Burning MAX character", note: "+4 levels per level up to 260. A Hyper Burning character can't claim the Tera Burning gift." },
      { id: "no-quanah", label: "Don't designate the Paladin as a Quanah leap character", note: "A Quanah leap character can't take Beyond Burning (260–280). Only designate it if you plan to move to Quanah." },
      { id: "live-notes", label: "Read the live v.272 notes and the Challenger event page", note: "Tier thresholds, tier rewards and the coin shop aren't published yet." },
    ],
  },
  {
    id: "burn",
    title: "Lv 1–200 · Hyper Burning",
    levels: [1, 200],
    ordered: true,
    steps: [
      { id: "creation-gift", label: "Claim the creation gift", note: "Pearl Maple set, 1,000 Power Elixirs, 64-slot inventories." },
      { id: "burn-rewards", label: "Claim Hyper Burning level rewards as they unlock", note: "They're better in Challenger World. Hold symbol selectors until you've done each region's story." },
      { id: "pass", label: "Lv 101: join the Challenger Pass on the Paladin", note: "Once per account and can't be changed. Missions done before you join don't count." },
      { id: "hypers", label: "Lv 140: Hyper Skills and Hyper Stats", note: "Hyper Skills: Blast Extra Strike, Blast Reinforce, Heaven's Hammer Cooldown Cutter, Heaven's Hammer Extra Strike, Divine Charge Extra Strike. Put stat points in again as you level." },
      { id: "inner-ability", label: "Inner Ability: Attack Speed +1, then Boss 10%" },
    ],
  },
  {
    id: "arcane",
    title: "Lv 200–260 · 5th job, Hyper Blink, Item Burning",
    levels: [200, 260],
    ordered: true,
    steps: [
      { id: "greater-power", label: "Do 5th job and \"A Greater Power\"", note: "This unlocks Item Burning Plus and Arcane Seal." },
      { id: "item-burning", label: "Start Item Burning Plus on the Paladin", note: "Once per account. The Challenger set is your armor, and its stars come from the stage missions, so don't spend on it." },
      { id: "arcane-seal-start", label: "Start Arcane Seal on the Paladin", note: "Switching characters resets its progress." },
      { id: "nodes", label: "V Matrix: boost nodes and trinodes", note: "Boosts: Divine Echo, Grand Guardian, Hammers of the Righteous, Mighty Mjolnir. Coin missions: 3 job nodes at Lv 30 and 2 boost nodes at Lv 60." },
      { id: "ib-1", label: "Item Burning 1: Chaos Zakum" },
      { id: "ib-2", label: "Item Burning 2: Chaos Vellum (210)" },
      { id: "emblem-secondary", label: "Legendary Emblem and Legendary Secondary", note: "Heroic coin missions worth 1,500 each. Lines: ATT%, Boss and IED." },
      { id: "weapon-220", label: "Lv 220: AbsoLab weapon box", note: "Two-handed blunt for High Paladin's IED bonus; check the skill text in game. Secondary: rosary or shield." },
      { id: "ib-3", label: "Item Burning 3: Normal Lotus (225)" },
      { id: "ib-4", label: "Item Burning 4: Easy Lucid (250)", note: "Stages 1–4 each give 2 Challenger Keys. Use them on your non-Challenger pieces." },
    ],
  },
  {
    id: "grandis",
    title: "Lv 260–280 · 6th job, Beyond Burning",
    levels: [260, 280],
    ordered: true,
    steps: [
      { id: "beyond-burning", label: "Turn on Beyond Burning for the Paladin", note: "+1 level per level from 260 to 280. Once per account." },
      { id: "hexa-start", label: "6th job: Sacred Bastion (Origin) to 1, then Blast/Divine Judgment Mastery", note: "Then boost nodes to 1, Origin to 10, and HEXA Stat I (a coin mission). Free HEXA reset scroll until Dec 16." },
      { id: "sol-janus", label: "Sol Janus Skill Support on the Paladin", note: "Sol Janus goes to Lv 30 for the season. The choice is permanent." },
      { id: "ib-5", label: "Item Burning 5: Hard Verus Hilla (265)", note: "Stages 5–8 also need Challenge Crests from weekly bosses (Thursday reset)." },
      { id: "ib-6", label: "Item Burning 6: Normal Seren (270), then Mayrin Normal" },
      { id: "beyond-title", label: "Lv 270: claim the Beyond Burning title", note: "+30 ATT, 20% Boss, 20% IED." },
      { id: "ib-7", label: "Item Burning 7: Easy Kalos (275)" },
      { id: "ib-8", label: "Item Burning 8: Easy First Adversary (280), then Mayrin Hard" },
    ],
  },
  {
    id: "gear",
    title: "Gear priority",
    intro: "In order: spend mesos and coins from the top down.",
    ordered: true,
    steps: [
      { id: "g-weapon", label: "Weapon: AbsoLab, then Arcane, at 17★ then 22★", note: "Your weapon is the only piece worth 22★ early. Lines: ATT%, Boss and IED, no %Damage." },
      { id: "g-wse", label: "Secondary and emblem to Legendary", note: "Same lines as the weapon, and 3,000 coins from the two missions." },
      { id: "g-armor", label: "Armor: Challenger set from Item Burning", note: "Stars come from the stages. Spend on potential only: aim for 3 lines of STR%." },
      { id: "g-acc", label: "Accessories: Burning Boss Accessory Box, then Superior Gollux", note: "Pitched Boss pieces come later, from Kai and Mayrin boxes." },
      { id: "g-17", label: "Coin shop: 17★ enhancements before mesos-starring", note: "Season 3's shop sold 3 at 3,000 coins each. Check this season's shop." },
      { id: "g-flames", label: "Flames: STR, ATT, all stat %", note: "Black and Abyssal flames from the coin shop and pass." },
    ],
  },
  {
    id: "forgotten",
    title: "Commonly forgotten",
    intro: "Legion, Monster Collection and link transfer are off in Challenger World. Don't plan around them.",
    steps: [
      { id: "f-pocket", label: "Pocket: Pink Holy Cup", note: "From Chaos Pink Bean, now a daily boss." },
      { id: "f-badge", label: "Badge: Crystal Ventus", note: "From Hard Magnus." },
      { id: "f-medal", label: "Medal", note: "Challenger tier medal, or the Chaos Vellum medal." },
      { id: "f-title", label: "Title: Eternal Flame, then Beyond Burning at 270" },
      { id: "f-emblem", label: "Free Gold Emblem from the Lv 100 quest", note: "Your emblem won't be Legendary if you never pick it up." },
      { id: "f-totems", label: "Totems (3)" },
      { id: "f-hyperstat", label: "Hyper Stats spent after every few levels" },
      { id: "f-ability", label: "Legendary Ability", note: "Coin mission: 300 for Legendary, 500 for a Boss/ATT/+1 passive line." },
      { id: "f-doping", label: "Bossing buffs: guild skills, Guild Blessing, VIP and MVP buffs" },
      { id: "f-claim", label: "Claim tier rewards before Feb 9", note: "Bronze to Platinum rewards can only be claimed inside Challenger World." },
    ],
    later: {
      title: "Later, if there's time",
      steps: [
        { id: "l-links", label: "Tera Burning alts to 210 for link skills", note: "Links can't be transferred in, so the only links you get are characters you level in this world." },
        { id: "l-android", label: "Android and heart" },
        { id: "l-genesis", label: "Genesis weapon", note: "The Genesis Pass (3x Traces, parties of up to 6) runs Nov 12 to Feb 8." },
        { id: "l-pitched", label: "Pitched Boss accessories and Eternal armor from Kai and Mayrin boxes" },
      ],
    },
  },
];
