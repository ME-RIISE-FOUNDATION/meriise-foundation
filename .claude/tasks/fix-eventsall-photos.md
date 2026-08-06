# Fix event-wise photos in eventsall.html

## Problem found
`eventsall.html` (new, untracked) is a year-grouped JS gallery. Each event card has an
`images: ['/assets/eventsXX/…']` array. Three defects:

1. **Wrong location** — folders `events18`–`events26` were placed at the repo ROOT, but the
   HTML points to `/assets/eventsXX/`. There is no `assets/events*` on disk → all 337 event
   images fail to load.
2. **Absolute paths** — HTML uses `/assets/…` (leading slash). Every committed page uses
   relative `assets/…` (66 refs). Leading slash breaks on the cPanel subfolder deploy
   (`public_html/merise`). Also affects the header logo `"/assets/meriise_new_logo.png`.
3. **15 filename mismatches in events23**:
   - typos with an existing file: `ciie2.jpg`→disk `ciie2'.jpg`, `iisc1.jpg`→`iisc.jpg`, `msme1.jpg`→`msme.jpg`
   - 12 with no file anywhere: aspire1, bionest, coc1, dk1, earth1, edu1, inaug1, ins1, pes1, rb1, startup1, vic1

## Decisions (user-approved)
- Move folders into `assets/` + switch to relative `assets/…` paths. Fix the 3 typos.
- Keep the 12 missing-photo cards; user will add the photos into eventsall.html later.

## Steps
1. Move `events18`–`events26` → `assets/`.
2. Rename `assets/events23/ciie2'.jpg` → `ciie2.jpg`.
3. Copy `meriise_new_logo.png` → `assets/` (so the relative logo ref resolves).
4. Edit `eventsall.html`: `/assets/` → `assets/` (all 372); `msme1.jpg`→`msme.jpg`; `iisc1.jpg`→`iisc.jpg`.
5. Verify: re-run broken-ref check against `assets/eventsXX/`; expect only the 12 known-missing.

## Progress — DONE
- Moved `events18`–`events26` into `assets/` (folders no longer at repo root).
- Renamed `assets/events23/ciie2'.jpg` → `ciie2.jpg`; HTML `iisc1.jpg`→`iisc.jpg`, `msme1.jpg`→`msme.jpg`.
- Replaced all 372 `/assets/` → `assets/` (0 leading-slash refs remain); logo copied to `assets/`.
- Verified: only the 12 no-file-anywhere images still broken (user to add photos):
  aspire1, bionest, coc1, dk1, earth1, edu1, inaug1, ins1, pes1, rb1, startup1, vic1 (all in events23).
- Not committed (untracked files; commit only on request).
