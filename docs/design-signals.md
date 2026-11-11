# Challenger sheet signals

How Nate wants the sheet to look and read, from November 2026 on. Quotes are verbatim. Update this as new feedback arrives.

## Positive

## Negative

- **A class tab of guide content is a dump, not a design.** "I wanted you to do a bit more than just dump a paladin tab into the app - we should integrate things into the appropriate sections." (lane `paladin-toggle`, 2026-11-10.) The Paladin tab was removed; its content went into Plan (nodes, HEXA order, training, links), Bosses (burst, defenses, per-boss notes) and Gear (weapon, rings).
- **Over-explaining.** The Today tab had "a lot of over explaining" (2026-11-07). Rows stay short; a note only when it changes what to do.

## Scope signals

- **Icons wherever they help, not only where asked.** "Hexa should get a reccomended order with icons, Icons should be used anywhere they are helpful. link skills for example." Skill and link icons go on any row that names skills.
- **Rotation is a picture.** "Rotation should be more visual and have icons, etc..." The burst is drawn as a sequence of skill keys, not a numbered list.
- **Stale game systems go, without asking.** "trinodes are gone. anything about leveling skills before 5th job can go." Check docs/v272.md and docs/guides.md for what Challenger World turns off (Legion, Legion Artifacts, link transfer) before carrying advice over from a regular-server guide.

- **Leveling systems get a canonical order.** "events like thse \"Etherion Relics\" events I never know the best order to level it in either. so under an events tab give me a canonical order" (2026-11-11). The Events tab gives each levelable system a checkable order.
- **Track every source of a reward and plan its use.** "we should log all the sources of event rings, and designate them for starter gear -> transition into drop gear." Event rings get their own card: source, timing, and where each goes.

- **One HEXA order, tappable.** "I just want one canonical hexa order. As long as it's moderately efficient, that's all I care about. I want this sort of UI where I can just click them to mark where I am so far." (2026-11-11, with a screenshot of a tile-grid priority chart.) The calculator link is gone; the order is a grid of icon tiles, tap to mark progress.
- **Build lives in one tab.** "Hexa being in plan doesn't make sense. Maybe you want a character tab... You can link out to it at various spots in the plan, but working through over time should be kind of all in one tab." and "The character tab can also have reference, for example, what should my sequence and buff sequences look like." Character holds HEXA, burst, buffs, training, 5th job, stats and defenses; Plan has link rows at the right levels.

## No verdict yet

- The Paladin checkbox in the header (shows Paladin rows; on by default).
- Icon sizes: 32px skill icons at 2x, pixelated.

## Working agreements

- Every change in a lane; PR and squash-merge (AGENTS.md).
- Design and structure guidance comes from the prompts library (`~/code/prompts`, `visual/method/`).
