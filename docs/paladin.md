# Paladin guide notes

Source: [The Comprehensive Guide to Paladin](https://docs.google.com/document/d/1aAQV9QGR4UywDGhQq1O3X7blXADPGDMvgDIAKfCmrH8/edit),
by the Paladin Discord mod team, last updated 2025-09-21 (marked WIP). Read
2026-11-10. It is written for regular and Reboot servers, not Challenger World.

The doc blocks download and copy. Its `/mobilebasic` view still serves the whole
text as HTML, which is how it was read.

What the sheet takes from it (`PALADIN` in `web/data.js`, plus rows flagged
`paladin: true` in Plan):

- Weapon: two-handed blunt. High Paladin gives +5% crit damage and +10% IED
  with a blunt; two-handed weapons have the 1.34x multiplier (one-handed 1.24x).
- Attack Speed 10 matters most for Blast and Sacred Bastion's Light of Judgment
  (500 ms proc vs a 510 ms Blast). Two-handed needs Inner Ability +1 Attack
  Speed, Decent Speed Infusion and an Extreme Green Potion. 8→9 AS is about 11%
  final damage, 9→10 about 5.9%.
- Inner Ability: Attack Speed +1 (line 1), Boss 10% or 20%, Damage to Abnormal
  Status 8% (Noble Demand keeps bosses debuffed); Buff Duration or ATT third.
  Crit Rate is no longer needed with Legion Artifact.
- Legion Artifact crystals 1–4: Damage/Boss/Crit Rate, Boss/Damage/Crit Rate,
  Crit Damage/IED/flex, IED/Crit Damage/flex (flex: All Stat, ATT, Buff Duration).
- Hyper passives (bossing): Blast Extra Strike, Blast Reinforce, Heaven's Hammer
  Cooldown Cutter, Extra Strike, Reinforce. (Mobbing swaps the Blast two for
  Divine Charge.) This replaces docs/guides.md's Divine Charge Extra Strike.
- V-Matrix: one core trinode set, Blast / Divine Judgment / Divine Charge, made
  twice with different leading skills. Optional second set: Heaven's Hammer /
  Final Attack / Smite Shield. Divine Echo is the first job node to level
  (solo vs duo gap is ~10–12% FD at max HEXA).
- HEXA: Origin Sacred Bastion; Masteries 1 Blast + Divine Judgment, 2 Divine
  Charge + Mark + Falling Justice, 3 Heaven's Hammer (passive boosts Blast and
  Judgment), 4 Final Attack + Rising Justice; boosts Divine Echo, Hammers of the
  Righteous, Grand Guardian, Mighty Mjolnir. Order: G Ral's calculator
  (<https://docs.google.com/spreadsheets/d/1UXdvFBgog9C5pauyjYNhTcKuZ9LVOA98tHB-C9GD4UU/>).
- DPM share (6-min rotation): Blast + Judgment ~51%, Grand Guardian ~16%,
  Hammers ~12%, Mjolnir ~7%, Sacred Bastion ~5%.
- IED target: 93–95% on screen. Noble Demand adds 50% off screen, Blast/Judgment
  nodes at Lv 40 add 20%, Grand Guardian ignores 100%.
- Cooldown hat: optional; -4s fits two Falling Justice per Divine Echo.

Not taken: culvert rotation (outdated in the doc), Reboot meso costs, abnormal
status resistance math.
