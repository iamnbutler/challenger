# Paladin guide notes

Source: [The Comprehensive Guide to Paladin](https://docs.google.com/document/d/1aAQV9QGR4UywDGhQq1O3X7blXADPGDMvgDIAKfCmrH8/edit),
by the Paladin Discord mod team, last updated 2025-09-21 (marked WIP). Read
2026-11-10. It is written for regular and Reboot servers, not Challenger World.

The doc blocks download and copy. Its `/mobilebasic` view still serves the whole
text as HTML, which is how it was read.

Current skill data (Boost Node contents, HEXA lineup, cooldowns) is from the
wiki's Paladin/Skills page (<https://maplestorywiki.net/w/Paladin/Skills>),
which is newer than the guide. Icons in `web/icons/` come from the same wiki
(`https://media.maplestorywiki.net/yetidb/<File>.png`).

Where it lands in the sheet (rows flagged `paladin: true`, notes in `pal`):

- Plan, Lv 200–260: Boost Node 1 to 40, job nodes with Divine Echo first,
  Decents, Attack Speed 10. Lv 260+: training, and the HEXA order section.
- Bosses: the burst (drawn as keys), Staying alive, and per-boss notes.
- Gear: two-handed blunt Genesis; Restraint with Grand Guardian.

Challenger World changes what carries over (docs/v272.md): Legion and Legion
Artifacts are off, so the guide's Artifact and Legion advice is dropped, and
links can't be transferred, so link alts must be made in the world.

Since v.269 there are six fixed Boost Nodes instead of trinodes (wiki):
1 Blast + Divine Judgment, 2 Divine Charge + Divine Mark, 3 Heaven's Hammer,
4 Final Attack + Smite Shield, 5 Leap Attack + Rush, 6 Divine Swing + Close
Combat. Node N at Lv 40 unlocks HEXA Mastery N. Sacred Bastion's cooldown is
360s, so it lands on every third 2-minute burst. The Ascent skill is Dominus
Oblivion; its unlock rule isn't in our sources, so the HEXA order stops at the
calculator.

From the guide:

- Weapon: two-handed blunt. High Paladin gives +5% crit damage and +10% IED
  with a blunt; two-handed weapons have the 1.34x multiplier (one-handed 1.24x).
- Attack Speed 10 matters most for Blast and Sacred Bastion's Light of Judgment
  (500 ms proc vs a 510 ms Blast). Two-handed needs Inner Ability +1 Attack
  Speed, Decent Speed Infusion and an Extreme Green Potion. 8→9 AS is about 11%
  final damage, 9→10 about 5.9%.
- Inner Ability: Attack Speed +1 (line 1), Boss 10% or 20%, Damage to Abnormal
  Status 8% (Noble Demand keeps bosses debuffed); Buff Duration or ATT third.
  Skip Crit Rate (the guide leans on Legion Artifact; here the world passive
  gives 30%).
- V-Matrix: Divine Echo is the first job node to level (solo vs duo gap is
  ~10–12% FD at max HEXA). Trinodes and pre-5th-job skill points are left out:
  trinodes are gone from the game.
- HEXA: Origin Sacred Bastion; Masteries 1 Blast + Divine Judgment, 2 Divine
  Charge + Mark + Falling Justice, 3 Heaven's Hammer (passive boosts Blast and
  Judgment), 4 Final Attack + Rising Justice; boosts Divine Echo, Hammers of the
  Righteous, Grand Guardian, Mighty Mjolnir. Order: G Ral's calculator
  (<https://docs.google.com/spreadsheets/d/1UXdvFBgog9C5pauyjYNhTcKuZ9LVOA98tHB-C9GD4UU/>).
- DPM share (6-min rotation): Blast + Judgment ~51%, Grand Guardian ~16%,
  Hammers ~12%, Mjolnir ~7%, Sacred Bastion ~5%.
- Cooldown hat: optional; -4s fits two Falling Justice per Divine Echo.

Not taken: Legion Artifact layouts (off in Challenger World), the IED target
as a goal (the world passive's 70% covers it), culvert rotation (outdated in the doc), Reboot meso costs, abnormal
status resistance math.
