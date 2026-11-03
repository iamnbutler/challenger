# Boss gates: level, force, HP and readiness tests

Gathered 2026-11-03. Pre-patch numbers come from maplestorywiki (`/w/<Boss>/Monster`,
the Damage Formula page), with mason's maple matrix (masonym.dev/bosses) as a
cross-check. The v.272 HP cut per boss comes from the PTS notes
(`g.nexonstatic.com/maplestory/cms/v1/pts-news/47293`). **The v.272 HP figures are
computed**: pre-patch HP × (1 − that boss's cut). The notes give only the
percentage, and the wiki marks its own HP figures as estimates.

## Formulas

- **Level difference** (your level − boss level → final damage): +5 or more
  ×1.20 (the cap), +1 ×1.12, 0 ×1.10, −1 ×1.058, −2 ×1.007, −3 ×0.967, −4 ×0.918,
  −5 ×0.88. Below that it loses 2.5 points per level.
  - Being at the boss's level is "full damage"; +5 is the cap.
- **Arcane Force** (your ARC as a % of the requirement): under 100% → ×0.8 or
  less; 100–109% ×1.0; 110% ×1.1; 130% ×1.3; 150% ×1.5.
- **Sacred Force**: each point short is −1% final damage (95 short leaves 5%).
  Over the requirement, +1% per 2 points, up to +25% at 50 over.
  - A maxed Sacred symbol adds +20% damage to its region's boss: Arcus →
    Kalos, Odium → First Adversary, Shangri-La → Kaling.
- **Arcane symbol**: ARC = 20 + 10 × level, max level 20 (220 ARC). Symbols per
  level = L² + 11.
  - Dailies give 20–40 a day. The weekly gives 240 per region.
  - Reaching L10 takes about 5 days, L14 about 13 days.
- **Sacred symbol**: SAC = 10 × level, max level 11. Symbols per level =
  9L² + 20L.
  - Cernium gives 30 a day on Heroic; the other regions give 15.
  - Reaching L5 takes about 16 days in Cernium and 31 days elsewhere.
  - The Challenger reward symbols speed this up.

## Gates

`DPM@65%` is the damage per minute that clears the computed v.272 HP within
the 20-minute limit while attacking 65% of the time (HP ÷ 13). Read your own
DPM from **Battle Analysis** (per-second number × 60), run in Practice Mode.

| Boss | Boss Lv | Force | v.272 HP | DPM@65% | Phase test (≤ 75% of the phase's share of 20 min) |
|---|---|---|---|---|---|
| Hard Lotus | 210 | — | 22.8T | 1.8T | — |
| Hard Damien | 210 | — | 24.7T | 1.9T | — |
| Chaos Guardian Angel Slime | 250 | — | 61.7T | 4.7T | from 50% HP in ≤ 7.5 min |
| Normal Lucid | 230 | ARC 360 | 16.4T | 1.3T | — |
| Hard Lucid | 230 | ARC 360 | 84.1T | 6.5T | phase 3 is **not** cut (12.8T): burst-check it |
| Normal Will | 250 | ARC 760 | 16.9T | 1.3T | — |
| Hard Will | 250 | ARC 760 | 84.5T | 6.5T | phase 2 (25% of HP) in ≤ 3.75 min |
| Chaos Gloom | 255 | ARC 730 | 86.0T | 6.6T | from 50% HP in ≤ 7.5 min |
| Hard Darknell | 265 | ARC 850 | 108.2T | 8.3T | from 50% HP in ≤ 7.5 min |
| Hard Verus Hilla | 250 | ARC 900 | 122.5T | 9.4T | one of 4 bars in ≤ 3.75 min |
| Hard Black Mage | 265–275 | ARC 1320 | 165.8T (−64.9%) | 12.8T | phase 1 (13%) in ≤ 2 min |
| Normal Seren | 270 | SAC 150 / 200 | 141.2T | 10.9T | phase 1 (25%) in ≤ 3.75 min |
| Hard Seren | 275 | SAC 150 / 200 | 328.0T | 25.2T | phase 1 (26%) in ≤ 3.9 min |
| Easy Kalos | 270 | SAC 200 | 238.5T | 18.3T | phase 1 (26%) in ≤ 4 min |
| Easy First Adversary | 270 | SAC 220 | 386.5T | 29.7T | — |
| Easy Kaling | 275 | SAC 230 | 446.2T | 34.3T | — |
| Kai (Normal) | 270 (Season 3) | ? | nerfed, unknown | — | 30 min, 10 deaths |
| Mayrin N / H | entry 270 / 280 | ? | unknown | — | 20 min, solo |

- **Entry CP floors** for solo Hard modes: Hard Lucid 18M, Hard Will 20M, Chaos
  Gloom 20M, Hard Darknell 22M, Hard Verus Hilla 24M, Hard Black Mage 50M, Hard
  Seren 80M.
- **Practice Mode:**
  - It can start at a phase you've already reached.
  - A single-phase practice doesn't count as a clear for missions; a full
    practice run does.
  - KMS shares 20 practice runs a day across all bosses.
- **The phase tests are mine.** I found no published standard like "Hard Will
  phase 2 in under N minutes". They come from the 20-minute limit with 25%
  margin; check them against your real clears and tune them.

## Drops worth chasing

- Hard Lotus: Berserked (face)
- Hard Damien: Magic Eyepatch (eye)
- Hard Lucid: Dreamy Belt
- Hard Will: Cursed Spellbook (pocket)
- Chaos Gloom: Endless Terror (ring)
- Hard Darknell: Commanding Force Earring
- Hard Verus Hilla: Source of Suffering (pendant)
- Hard Seren: Mitra's Rage (emblem)
- Hard Black Mage: Genesis Badge
- Chaos Pink Bean (now a daily, with a lower drop rate): Pink Holy Cup (pocket)
- Hard Magnus: Crystal Ventus (badge)
