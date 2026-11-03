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
      { id: "gollux", cadence: "daily", minLevel: 180, label: "Gollux: never skip", note: "One run a day: Hard pays 15–20 coins, Hell 25–30. Each Superior piece is 700 coins (1 a week), so save for Superior instead of buying lower tiers. Skip the story in the prerequisite quest." },
      { id: "exp-coupon", cadence: "daily", label: "Claim 3x EXP coupons", note: "Operation Ultima gives 3 a day." },
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
      { id: "events", kind: "setup", label: "Burn to 200 and start every event on the Paladin", note: "Challenger Pass at 101; at 200 after \"A Greater Power\": Item Burning Plus, Arcane Seal, then Beyond Burning at 260. Each is once per account." },
      { id: "ib-list", kind: "setup", label: "Read the Item Burning Plus stage list in game", note: "This season has 8 stages, but the notes don't list them. The boss steps below use Season 3's list; Kai and probably Mayrin are in this season's." },
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
      { id: "pass", kind: "setup", label: "Lv 101: join the Challenger Pass on the Paladin", note: "Once per account and can't be changed. Missions done before you join don't count." },
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
      { id: "ib-1", kind: "clear", label: "Chaos Zakum", note: "Item Burning stage (Season 3 list)." },
      { id: "c-lotus-damien", kind: "clear", label: "Hard Lotus and Hard Damien", note: "Boss Lv 210, no force requirement. About 1.8T damage per minute each. Drops: Berserked (face), Magic Eyepatch (eye). Hard: 1,500 points each." },
      { id: "ib-2", kind: "clear", label: "Chaos Vellum", note: "Item Burning stage (Season 3 list)." },
      { id: "f-arc360", kind: "force", label: "ARC 360", unlocks: "Lucid", note: "For example four symbols at Lv 6–7. Use Hyper Burning selectors once each region's story is done." },
      { id: "ib-3", kind: "clear", label: "Normal Lotus", note: "Item Burning stage (Season 3 list)." },
      { id: "c-lucid-n", kind: "clear", label: "Normal Lucid", note: "Boss Lv 230, 1,000 points." },
      { id: "l-235", kind: "level", label: "Lv 235", unlocks: "Lucid at +5, the cap (×1.20). Also unlocks Kai and Esfera." },
      { id: "c-kai", kind: "clear", label: "Kai (Normal)", note: "1,000 points. Solo, 30 minutes, 10 deaths. Counts only toward Challenger and Item Burning missions." },
      { id: "f-arc760", kind: "force", label: "ARC 760", unlocks: "Will. Also clears Gloom's 730." },
      { id: "ib-4", kind: "clear", label: "Easy Lucid", note: "Item Burning stage (Season 3 list). Early stages give Challenger Keys; see the Gear tab." },
      { id: "c-will-n", kind: "clear", label: "Normal Will", note: "Boss Lv 250, 1,000 points." },
      { id: "l-255", kind: "level", label: "Lv 255", unlocks: "Will, Verus Hilla and Chaos Slime at +5 (×1.20). At level for Gloom." },
    ],
  },
  {
    id: "grandis",
    title: "Lv 260–280 · 6th job, Sol Janus, Hard bosses",
    levels: [260, 280],
    ordered: true,
    steps: [
      { id: "beyond-burning", kind: "level", label: "Turn on Beyond Burning (260–280)", note: "+1 level per level. Once per account." },
      { id: "hexa-unlock", kind: "build", label: "HEXA: Mastery 1 → 2 → 3 → 4 to Lv 1, then Grand Guardian, Hammers, Mjolnir and Divine Echo boosts to 1", note: "Unlock everything first. Mastery 1 to 1 is the biggest single gain (+4.7%)." },
      { id: "sol-janus", kind: "build", label: "Sol Janus Skill Support on the Paladin", note: "Sol Janus jumps to Lv 30 for the season, so farming gets much faster. Spend no fragments on Janus. The choice is permanent." },
      { id: "farm-setup", kind: "gear", label: "Farming setup: drop/meso familiars and drop gear", note: "Do this now that Sol Janus makes farming realistic. See Farming on the Gear tab." },
      { id: "c-hard-lucid-test", kind: "test", label: "Hard Lucid: Practice at 6.5T a minute", note: `${BA}. Phase 3 wasn't cut, so check that your burst takes a big chunk of it.` },
      { id: "c-hard-lucid", kind: "clear", label: "Hard Lucid", note: "2,000 points. Dreamy Belt." },
      { id: "c-gloom-test", kind: "test", label: "Chaos Gloom: Practice from 50% HP in under 7.5 min", note: "About 6.6T a minute." },
      { id: "c-gloom", kind: "clear", label: "Chaos Gloom", note: "2,500 points. Endless Terror (ring)." },
      { id: "c-will-test", kind: "test", label: "Hard Will: Practice phase 2 in under 3¾ min", note: "Phase 2 is a quarter of the HP; that time leaves 25% slack under the 20-minute limit. About 6.5T a minute overall." },
      { id: "c-hard-will", kind: "clear", label: "Hard Will", note: "2,500 points. Cursed Spellbook (pocket)." },
      { id: "hexa-m1", kind: "build", label: "HEXA: Mastery 1 to 9, Mastery 3 to 10, Mastery 1 to 20", note: "Divine Judgment is about half your damage, and Mastery 3 feeds it." },
      { id: "f-sac150", kind: "force", label: "SAC 150", unlocks: "Seren phase 1" },
      { id: "c-kalos-path", kind: "clear", label: "Hard Verus Hilla", note: "Needs ARC 900, boss Lv 250. 3,000 points. Source of Suffering (pendant). Test: one of the 4 bars in under 3¾ min (about 9.4T a minute). Later Item Burning stages also need Challenge Crests." },
      { id: "c-darknell-test", kind: "test", label: "Hard Darknell: Practice from 50% HP in under 7.5 min", note: "ARC 850, boss Lv 265. About 8.3T a minute." },
      { id: "c-darknell", kind: "clear", label: "Hard Darknell", note: "3,000 points. Commanding Force Earring." },
      { id: "l-270", kind: "level", label: "Lv 270", unlocks: "Darknell at +5. At level for Normal Seren, Easy Kalos and Easy First Adversary. Unlocks Mayrin and Odium." },
      { id: "c-mayrin-n", kind: "clear", label: "Mayrin (Normal)", note: "5,000 points, once per account per week. In Korea, Normal Mayrin was the last Item Burning stage and gated Master tier. Claim the Beyond Burning title at 270: +30 ATT, 20% Boss, 20% IED." },
      { id: "f-sac200", kind: "force", label: "SAC 200", unlocks: "Seren phase 2 and Easy Kalos" },
      { id: "c-seren-test", kind: "test", label: "Normal Seren: Practice phase 1 in under 3¾ min", note: "About 10.9T a minute." },
      { id: "ib-6", kind: "clear", label: "Normal Seren", note: "6,000 points." },
      { id: "c-bm-test", kind: "test", label: "Hard Black Mage: Practice phase 1 in under 2 min", note: "ARC 1320, which is every symbol maxed. HP is down 65% this patch. About 12.8T a minute." },
      { id: "c-bm", kind: "clear", label: "Hard Black Mage", note: "6,000 points, monthly. Genesis Badge." },
      { id: "l-275", kind: "level", label: "Lv 275", unlocks: "Easy Kalos, Normal Seren and Easy First Adversary at +5. At level for Hard Seren and Easy Kaling." },
      { id: "ib-7", kind: "clear", label: "Easy Kalos", note: "7,000 points. Test: phase 1 in under 4 min (about 18.3T a minute)." },
    ],
  },
  {
    id: "endgame",
    title: "Lv 280+ · Hard Mayrin and the Grandis bosses",
    levels: [280, 301],
    ordered: true,
    steps: [
      { id: "c-mayrin-h", kind: "clear", label: "Mayrin (Hard)", note: "9,000 points. Gated the Challenger tier in Korea. Entry is 280; 285 is the suggested level." },
      { id: "f-sac220", kind: "force", label: "SAC 220", unlocks: "Easy First Adversary" },
      { id: "ib-8", kind: "clear", label: "Easy First Adversary", note: "9,000 points. About 29.7T a minute." },
      { id: "f-sac230", kind: "force", label: "SAC 230", unlocks: "Easy Kaling" },
      { id: "c-kaling-e", kind: "clear", label: "Easy Kaling", note: "9,000 points. About 34.3T a minute." },
      { id: "c-hard-seren", kind: "clear", label: "Hard Seren", note: "7,000 points. Mitra's Rage (emblem). About 25.2T a minute." },
    ],
  },
  {
    id: "forgotten",
    title: "Commonly forgotten",
    intro: "Legion, Monster Collection and link transfer are off in Challenger World. Don't plan around them.",
    steps: [
      { id: "f-emblem", label: "Free Gold Emblem from the Lv 100 quest" },
      { id: "f-totems", label: "Totems (3)" },
      { id: "f-medal", label: "Medal: Chaos Vellum or the Monster Park medal" },
      { id: "f-charm", label: "Use the trait potion from Hyper Burning rewards on Charm" },
      { id: "f-hyperstat", label: "Hyper Stats: reallocate as you level", note: "Crit Rate only up to what you need, then Damage, Boss, IED, Crit Damage. Aim for 93–95% IED on screen." },
      { id: "f-hexastat", label: "HEXA Stat: ATT main, Crit Damage and Boss extras", note: "Also a 300-coin mission." },
      { id: "f-ability", label: "Legendary Ability", note: "Coin missions: 300 for Legendary, 500 for a Boss/ATT/+1 passive line." },
      { id: "f-doping", label: "Bossing buffs: Guild Blessing, VIP and MVP buffs" },
      { id: "f-claim", label: "Claim tier rewards before Feb 9", note: "Bronze to Platinum rewards can only be claimed inside Challenger World." },
    ],
    later: {
      title: "Later, if there's time",
      steps: [
        { id: "l-links", label: "Tera Burning alts for links: Angelic Buster, Demon Slayer, Demon Avenger, Ark", note: "Links can't be transferred in, so the only links you get are characters you level in this world." },
        { id: "l-genesis", label: "Genesis weapon", note: "The Genesis Pass (3x Traces, parties of up to 6) runs Nov 12 to Feb 8." },
      ],
    },
  },
];

// Gear runs: starting gear → Item Burning's Challenger set → getting out of it.
// Item Burning gear outlasts the season (Korea's expired about two months after
// it ended), but every replacement below is permanent and survives a World Leap.
export const GEAR = [
  {
    id: "start",
    title: "Start: what you equip on day 1",
    intro: "Most of this comes from Hyper Burning level rewards. Equip it as it arrives; don't spend mesos on any of it.",
    steps: [
      { id: "gs-acc", label: "Burning Boss Accessory Box (Lv 200)", note: "A full boss accessory set, and permanent." },
      { id: "gs-pendant", label: "Selector: pick the Dominator Pendant, not the AbsoLab weapon", note: "Item Burning gives you a weapon. The pendant stays useful much longer." },
      { id: "gs-rings", label: "Rings: Abyss Hunter Ring, event rings, Eternal Flame Ring" },
      { id: "gs-title", label: "Title: Eternal Flame; save it until you need it", note: "Title stats run on a 60-day timer." },
      { id: "gs-ib", label: "Item Burning Plus: equip the Challenger set at 200", note: "Weapon and armor. Their stars and potential come from the stage missions, so don't spend on them." },
      { id: "gs-secondary", label: "Frozen Secondary", note: "A Hyper Burning reward, and 100 coins in Season 3's shop. A rosary or shield; both work with Shield Mastery." },
    ],
  },
  {
    id: "ib",
    title: "Item Burning: what it gives",
    intro: "Season 3 (8 stages): armor reached 22★ at the last stage, but the weapon stopped at 18★. This season also has 8 stages, but the notes don't list them.",
    steps: [
      { id: "gi-keys", label: "Use your Challenger Keys", note: "Early stages give 2 keys each. A key adds the Ignitia set to any armor or weapon piece outside the Challenger and Eternal sets: ATT, plus Boss 10% at 2/4/6/8 pieces and IED 10% at 1/3/5. People forget them." },
      { id: "gi-crests", label: "Bank Challenge Crests for the later stages", note: "Season 3's last four stages needed 600, 800, 1,000 and 1,500. Korea's Season 4 needed 6,500 for the final stage, from weekly hunting and first boss clears." },
      { id: "gi-hat", label: "Cooldown hat?", note: "In Korea's Season 4 you could switch the Challenger hat to a cooldown hat and back. Check whether Paladin wants one; it fits 2 Falling Justice casts in one Divine Echo window." },
    ],
  },
  {
    id: "exit",
    title: "Getting out of Item Burning, slot by slot",
    intro: "Ranked by when the switch usually comes. Replace a Challenger piece only when the new one beats it at its current stars.",
    ordered: true,
    steps: [
      { id: "gx-emblem", label: "Emblem: Gold Emblem → Legendary → Mitra's Rage", when: "Legendary right away (a 1,500-coin Heroic mission). Mitra's Rage comes from Hard Seren.", note: "Lines: ATT%, Boss and IED." },
      { id: "gx-secondary", label: "Secondary: Frozen → Legendary", when: "Right away: another 1,500-coin Heroic mission. Keep it." },
      { id: "gx-acc", label: "Accessories: boss box → Superior Gollux → pitched pieces", when: "Each Superior piece (700 coins, 1 a week) or boss drop as it comes. Full Superior takes about 100 days of Hell, so Hell drops of the earrings or belt decide it.", note: "Drops: Dreamy Belt (Hard Lucid), Commanding Force Earring (Hard Darknell), Source of Suffering (Hard Verus Hilla), Berserked (Hard Lotus), Magic Eyepatch (Hard Damien)." },
      { id: "gx-rings", label: "Rings: event and Abyss Hunter rings → Superior Gollux ring, Guardian Angel Ring, Endless Terror", when: "On Gollux and drops (Guardian Angel Slime, Chaos Gloom). In Season 3, Silver tier gave a Lv 4 special skill ring (Restraint or Weapon Jump), so don't buy one." },
      { id: "gx-pocket-badge", label: "Pocket and badge: Pink Holy Cup → Cursed Spellbook; Crystal Ventus → Genesis Badge", when: "Spellbook from Hard Will, Genesis Badge from Hard Black Mage. Don't spend Pitched Whisper Crystals before then." },
      { id: "gx-heart", label: "Heart: Fairy Heart → Plasma", when: "Tier rewards. In Korea's Season 4, Gold gave a Fairy Heart and Diamond a Plasma module." },
      { id: "gx-armor", label: "Hat, top, bottom, shoulder: Challenger 22★ → Eternal 18★", when: "When Eternal pieces drop (Kai and Mayrin boxes) or a tier gives 18★ scrolls. Finish before the Item Burning gear expires, about two months after the season." },
      { id: "gx-glove", label: "Gloves, shoes, cape: keep Challenger 22★", when: "Only for an Arcane piece at 22★, one at a time. Put a Challenger Key on it so you keep the Ignitia set bonus." },
      { id: "gx-weapon", label: "Weapon: Challenger 18★ → Genesis (two-handed blunt)", when: "When you liberate at Black Mage. The Genesis Pass (Nov 12 to Feb 8) triples Traces and allows parties of 6. A two-handed blunt weapon gets High Paladin's +10% IED." },
    ],
  },
  {
    id: "farming",
    title: "Farming: familiars and drop gear",
    intro: "Heroic mesos come from drops (×6 on Heroic). Caps: Mesos Obtained +100% from gear and familiars together, Item Drop +200% from gear. About 67% item drop means every kill drops a meso bag.",
    ordered: true,
    steps: [
      { id: "fam-keep", label: "Keep every familiar card from the start", note: "Cards drop in Maple World, Arcane River from Morass on, and Grandis. Fuse duplicates to rank up (Unique at most); extract the rest for points." },
      { id: "fam-badges", label: "Familiar badges: 1 for a second slot, 10 for a third" },
      { id: "fam-drop", label: "A drop familiar and a meso familiar", note: "Epic lines are +60/100% Boost, Unique +110%. Drop lines don't stack across familiars. Heroic can't buy Red Familiar Cards, so you rank up by fusing." },
      { id: "drop-ia", label: "Inner Ability preset with a +20% meso or drop line", note: "Swap to it for farming. Your bossing preset keeps Attack Speed and Boss." },
      { id: "drop-gear", label: "Roll drop gear: meso lines first, then drop lines", note: "Legendary lines are +20% Meso or +20% Drop, on earrings, pendants, rings, face and eye. Five meso lines reach the +100% cap. Keep it as a separate preset from your bossing accessories." },
      { id: "wap", label: "Wealth Acquisition Potion for long sessions", note: "×1.2 mesos outside the cap, and +20% drop." },
    ],
  },
];
