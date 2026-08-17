# Task: Guruprasad popup on homepage

## Goal
Show an on-load popup on `index.html` with the poster
`popup_assets/guruprasad.jpeg` (Bridging Generations 2.0 — Guruprasad S,
22 Aug 2026, 5–6 PM IST, online live). Clicking the poster navigates to
`bridging-generations/index.html`.

## Current state (verified)

- `index.html:3766-3810` — the `#promo-overlay` block (Arogya Manthan `#am-card`
  + Bridging Generations `#bg2-card` with `popup_assets/chandrashekar.png`) is
  **entirely commented out**. So no popup shows today.
- `index.html:3812-4181` — the CSS for `.promo-overlay`, `.am-popup__*` and
  `.bg2-popup__*` is live (not commented). Reusable as-is.
- `index.html:4184-4207` — the popup script is live. It has two latent bugs
  while the markup is commented out:
  - `hideCard()` reads `document.getElementById('am-card')` unconditionally.
  - line 4202 calls `.addEventListener` on `getElementById('promo-overlay')`,
    which is currently `null` → **throws a TypeError on every page load today**.

## Plan (MVP — 3 edits, all in `index.html`)

1. **Leave the existing commented block untouched** (repo convention: old
   popups stay commented rather than deleted).

2. **Add a live, single-card overlay** immediately after it (~line 3811):
   - `<div id="promo-overlay" class="promo-overlay">` containing only
     `<div id="bg2-card" class="bg2-popup__card">`.
   - Title: `Bridging Generations 2.0`.
   - Poster `<a href="bridging-generations/index.html">` wrapping
     `<img src="popup_assets/guruprasad.jpeg" alt="Bridging Generations 2.0 — Guruprasad S poster">`.
   - One CTA button: **Know More** → `bridging-generations/index.html`, plus the
     existing close `×`.
   - No "Watch Live" button — I don't have a Teams link for this session. Say
     the word and I'll add one.
   - Reuses the existing `.bg2-popup__*` classes, so **no new CSS needed**.
     The overlay is `flex-direction: row` for two cards; with a single card it
     still centres correctly.

3. **Make the script null-safe** (`index.html:4185-4206`): guard the `am-card`
   lookup in `hideCard()` and wrap the line-4202 `addEventListener` in a null
   check. This also fixes the console error that exists on the site right now.

## Out of scope
- Other pages (popup is homepage-only, matching current behaviour).
- Any change to `bridging-generations/index.html`.

## Verification
Open `index.html` via Live Server (port 5501): popup appears on load, poster and
"Know More" both navigate to the Bridging Generations page, `×` and backdrop
click dismiss it, no console errors.

## Changes made

All in `index.html`. Implemented 2026-08-17.

1. **New live overlay** inserted right after the old commented block
   (`index.html:3812-3825`). Single `#promo-overlay` > `#bg2-card` using the
   existing `.bg2-popup__*` classes:
   - title "Bridging Generations 2.0"
   - poster `popup_assets/guruprasad.jpeg` wrapped in
     `<a href="bridging-generations/index.html">`
   - one CTA "Know More" → `bridging-generations/index.html`
   - close `×` → `closeBg2Popup()`
   - No "Watch Live" button (no Teams link for the 22 Aug session yet). To add
     one later, drop an `<a class="bg2-popup__cta bg2-popup__cta--primary">`
     before the Know More link — the CSS for it already exists.
   The old Arogya Manthan + chandrashekar block above it is left commented,
   per repo convention.

2. **`.bg2-popup__card` got `max-height: 92vh; overflow-y: auto`**
   (`index.html:3891-3892`), matching `.am-popup__card`. The guruprasad poster
   is portrait (892×1275), so at the card's 320px width it renders ~450px tall;
   without the cap the card overflowed short laptop viewports.

3. **Popup script made null-safe** (`index.html:4200-4230`):
   - `hideCard()` now guards the `am-card` / `bg2-card` / `promo-overlay`
     lookups, so a card that isn't in the DOM counts as already hidden and the
     single-card overlay closes correctly.
   - the backdrop-click `addEventListener` is wrapped in an existence check.
   This also removes the TypeError that was firing on every homepage load while
   the markup was commented out.

### To swap in the next speaker
Edit the `<img src>` and its `alt` in the live `#bg2-card` block, and comment the
whole `#promo-overlay` div out when the session is over — that restores the
"no popup" state, and the script now tolerates it without erroring.
