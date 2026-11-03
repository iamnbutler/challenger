# challenger

A daily sheet and progression plan for MapleStory's Challenger World
(Nov 11, 2026 – Feb 9, 2027), set up for a Paladin on Heroic.

- **Today:** daily, weekly and monthly check-offs, each tied to the server reset
  it belongs to, so they clear by themselves.
  - Daily: 00:00 UTC
  - Challenger weekly mission: Wednesday
  - Weekly bosses: Thursday
  - Weekly quests: Monday
  - Monthly: the 1st

  The page shows countdowns and the local time of each reset. Set your level
  and rows you haven't unlocked move to a one-line "unlocks later" list.
- **Plan:** one-off steps by level band, plus gear priority and commonly
  forgotten items. The band you're in is highlighted.

Content is in `web/data.js`, with sources in `docs/v272.md` (patch notes) and
`docs/guides.md` (community guidance). Fix the data, not the code, when the
live notes differ.

Check-offs save on the device and sync through the Worker: "Copy sync link"
gives a link that joins another device. The link is the only key, so don't
post it.

```sh
bun install
bun test                  # reset timing and sync merge
bun scripts/serve.ts      # local preview on :8799 (no wrangler needed)
bunx wrangler deploy
```
