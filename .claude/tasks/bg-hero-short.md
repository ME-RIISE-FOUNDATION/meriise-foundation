# Task: Bridging Generations — hero video swap + meeting link

Scope: `bridging-generations/index.html`, `bridging-generations/style.css`,
`bridging-generations/script.js`.

## Decisions from you
- **Join Live button** → leave pointing at the Teams link.
- **YouTube Short** → replaces the hero video; the Google Drive video currently
  in the hero moves down into its own "Past Session" section, matching the
  existing Devananda / Nagashankar sections.

## Open item (not blocking)
You asked to *replace* the meeting link but then said to let it point at Teams,
and no replacement URL was given — so I'm **leaving
`https://teams.microsoft.com/meet/483648520330122?p=NUR1AJvmXmeWWHCb6g` exactly
as-is** at `index.html:79`. Send the new Teams URL and it's a one-line change.

## Current state (verified)
- `index.html:88` — hero iframe is a Google Drive preview
  (`1tf8XjNeriWjUTe2RDAqBXTxcdFY85YBd`), titled "…Devananda Jayaraman".
- `index.html:89` — a stray `>` on its own line renders as a literal `>` on the page.
- `style.css:401-408` — `.media-frame` is hard-locked to 16:9 (`padding-bottom: 56.25%`).
- `style.css:933-936` — `.video-cover` is `position:absolute; inset:0; z-index:10`,
  i.e. it sits **on top of** the iframe and must be JS-dismissed to play.
- `index.html:136-137` — the Nagashankar section reuses `id="latest-video-iframe"`
  / `id="latest-video-cover"`, already used by the Devananda section at 114-115.
  `setupVideoCover` (`script.js:170`) resolves by id, so it only ever wires the
  first section. **The Nagashankar cover is dead — that video can't be played.**

## Plan

### 1. Hero → YouTube Short (`index.html:84-101`)
- iframe `src` → `https://www.youtube.com/embed/s3qMDtqubRQ`, `title` updated.
- Keep `id="featured-video-iframe"` so the existing cover/autoplay wiring at
  `script.js:171` keeps working (it appends `?autoplay=1`).
- Delete the stray `>` on line 89.
- Add `media-frame--vertical` to the frame's class list.
- Drop the `12 MIN` duration badge — the source is a Short (≤60s), so the
  label would be wrong.

### 2. Vertical frame CSS (`style.css`, new rule after `.media-frame`)
```css
.media-frame--vertical {
    padding-bottom: 177.78%;   /* 9:16 */
    max-width: 360px;
    margin-inline: auto;
}
```
Without this the 9:16 Short is pillarboxed with heavy black bars inside the
16:9 frame. The `max-width` cap matters: the hero column is ~1.2fr of a
two-column grid, so an uncapped 9:16 frame would render ~800px tall and shove
the rest of the hero off-screen.

### 3. Google Drive video → new "Past Session" section
Inserted between the hero and the existing "Latest Alumni Talk" section.
- Same `section section--latest` / `section-head` / `latest__media` markup as
  its neighbours, so it inherits all existing styling — no new CSS.
- Heading "Devananda Jayaraman — Alumni Insights 2.0" (from the Drive iframe's
  own `title`). Note this makes two Devananda sections; say the word if you
  want different wording.
- **Unique** ids `drive-video-iframe` / `drive-video-cover` + a
  `setupVideoCover('drive-video-cover', 'drive-video-iframe')` call in
  `script.js`, so its play button actually works.
- Cover has no poster image (the hero's was already commented out), so it
  shows the play icon over the surface colour — same as the hero does today.

### 4. Fix the dead Nagashankar cover (`index.html:136-137`, `script.js`)
Rename its duplicate ids to `nagashankar-video-iframe` / `-cover` and add the
matching `setupVideoCover` call. One-line-each fix that makes a currently
unplayable video playable; adjacent to the section I'm adding and the same
root cause I have to avoid in step 3.

## Out of scope
- The root `index.html` popup (done in the previous task).
- Any wording change to the hero copy or the upcoming-talks cards.

## Verification
Live Server → hero shows the vertical Short and plays on click; Drive video
appears as its own past-session block and plays; Nagashankar video now plays;
Join Live still opens the Teams meeting; no console errors.

## Changes made

Implemented 2026-08-17.

### `bridging-generations/index.html`
1. **Hero** (`index.html:84-96`): iframe now
   `https://www.youtube.com/embed/s3qMDtqubRQ`, title "Bridging Generations,
   Alumni Insights 2.0", frame class `media-frame media-frame--vertical`.
   Removed the stray `>` line and the `12 MIN` duration badge. Kept
   `id="featured-video-iframe"` / `featured-video-cover` so the existing
   play-cover wiring is untouched.
2. **New Past Session section** (`index.html:100-118`), sitting between the hero
   and "Latest Alumni Talk": heading "Devananda Jayaraman - Alumni Insights 2.0",
   holding the Google Drive iframe moved out of the hero, with ids
   `drive-video-iframe` / `drive-video-cover`. Reuses
   `section section--latest` + `latest__media` + `media-frame`, so no new CSS.
3. **Nagashankar section** (`index.html:152-153`): ids renamed
   `latest-video-*` → `nagashankar-video-*`, resolving the duplicate-id clash
   with the Devananda section at 130-131.

All four video ids are now unique: `featured-`, `drive-`, `latest-`,
`nagashankar-`.

### `bridging-generations/style.css`
Added `.media-frame--vertical` just above the `.media-frame > iframe` rule
(`style.css:410-417`): `padding-bottom: 177.78%` (9:16), `max-width: 360px`,
`margin-inline: auto`. Base `.media-frame` is untouched, so every other video
on the page keeps its 16:9 box.

### `bridging-generations/script.js`
Two `setupVideoCover` calls appended (`script.js:172-173`) for
`drive-video-*` and `nagashankar-video-*`. The Nagashankar one fixes a
pre-existing bug: its cover was never wired, and since `.video-cover` is
`z-index:10` over the iframe, that video could not be played at all.

### Not changed
The Teams URL at `index.html:79` — still
`https://teams.microsoft.com/meet/483648520330122?p=NUR1AJvmXmeWWHCb6g`.
No replacement URL was supplied.

### Note for next time
`.media-frame--vertical` is reusable: add it alongside `media-frame` on any
frame holding a Short/reel. Drop it when the hero goes back to a landscape
video, or the frame will be tall and narrow.
