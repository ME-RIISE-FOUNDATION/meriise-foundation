# Plan: Make Bridging Generations page mobile-responsive (TED.com reference)

## Goal
Make `index.html` work well on mobile phones, modeled on ted.com's mobile UX —
most importantly a working hamburger menu (currently nav links vanish on mobile).
Keep it MVP: no redesign, just responsive fixes + the mobile nav.

## Findings (current state)
- Some responsive CSS exists (breakpoints 900 / 700 / 479px) but is incomplete.
- **No mobile nav**: `.ted-nav__menu` is `display:none` at <=900px (style.css:742),
  so Watch/Speakers/Upcoming/About/Home are unreachable on phones. ← main gap.
- Header row `min-height:96px` + 72px logo is heavy on small screens.
- Featured buttons / CTA not optimized for thumb tapping.
- Bug: duplicate `id="latest-video-cover"` (index.html:78 & :108). Script binds only
  one, so the featured video play-cover does nothing. Will fix as part of cleanup.

## TED.com mobile pattern we'll mirror (MVP subset)
- Logo left, hamburger button right.
- DECISION: Tapping hamburger opens a **full-screen overlay** (closest to TED's
  real mobile menu) with large stacked nav links + the "Ask Questions" CTA.
- DECISION: **Search is dropped on mobile** (currently non-functional). Hamburger
  replaces it in `.ted-nav__actions` on small screens.
- Large tap targets, single-column content, generous spacing.
- Close on link tap, close-button tap, Escape; lock body scroll while open.

## Tasks

### 1. HTML (index.html)
- Add a hamburger toggle button inside `.ted-nav__actions` (shown only on mobile),
  with `aria-label`, `aria-expanded`, `aria-controls="primary-nav"`.
- Give the existing `<nav class="ted-nav__menu">` id `primary-nav` and add a close
  (X) button + the "Ask Questions" CTA inside it (CTA shown only in mobile overlay).
- No search inside the overlay (decision: dropped on mobile).
- Fix duplicate id: rename featured cover to `featured-video-cover` and give its
  iframe an id, so JS can wire it up too.

### 2. CSS (style.css)
- Replace the `display:none` mobile-nav rule with a full-screen overlay:
  - Default (desktop >=901px): current inline horizontal nav, hamburger + overlay
    bits hidden, CTA/close-button inside nav hidden.
  - <=900px: hide horizontal inline layout, show hamburger; nav becomes a
    fixed full-screen overlay (opacity/visibility or translateY), centered large
    stacked links + CTA + close button; `.is-open` reveals it.
- Reduce header height/logo on small screens (min-height ~64px, logo ~52-60px).
- Make `.featured__buttons .btn` full-width (or 100% min) on <=479px.
- Tighten `.container` padding on small screens (1rem).
- Keep prefers-color-scheme dark support in the drawer (use existing vars).

### 3. JS (script.js)
- Add hamburger open/close: toggle `.is-open` on drawer + body scroll lock,
  update `aria-expanded`, close on Escape / backdrop / link click.
- Reuse existing focus-trap style approach if low-effort; otherwise basic toggle.
- Wire the featured video cover (new id) to the same play behavior.

## Out of scope
- No visual redesign, no new sections, no framework. The Tailwind-looking classes
  in the logo img are inert (no Tailwind loaded) — leave them, CSS controls sizing.

## Verification
- Resize to 375px / 414px widths: nav reachable via hamburger, no horizontal
  scroll, buttons tappable, videos play, footer stacks cleanly.

## Implementation notes (done)
### index.html
- Added hamburger `<button data-nav-toggle>` (3-line icon) in `.ted-nav__actions`
  with `aria-expanded`/`aria-controls="primary-nav"`. Shown only <=900px via CSS.
- Gave nav `id="primary-nav"`; added a close (X) `<button data-nav-close>` and a
  drawer-only CTA `.ted-nav__cta--drawer` inside it. Nav links got `data-nav-close`
  so tapping a link closes the overlay.
- Fixed duplicate id: featured cover -> `featured-video-cover`, featured iframe ->
  `featured-video-iframe`.

### style.css
- New base styles: `.ted-nav__toggle`, `.ted-nav__close`, `.ted-nav__cta--drawer`
  all `display:none` by default (desktop unchanged).
- `@media (max-width:900px)`: slim header (min-height 64px, logo 52px), hide desktop
  CTA + search, show hamburger; `.ted-nav__menu` becomes a fixed full-screen overlay
  (opacity/visibility/translateY, `.is-open` reveals); links stack & enlarge; close
  button + drawer CTA shown.
- `@media (max-width:700px)`: removed old CTA padding tweak (CTA hidden now).
- `@media (max-width:479px)`: container padding 1rem, smaller lead text, featured
  buttons go full-width column.

### script.js
- Added mobile nav: openNav/closeNav toggle `.is-open`, lock body scroll, manage
  `aria-expanded`, focus first item on open; close on `[data-nav-close]` click and
  Escape, restoring focus to the toggle.
- Refactored video-cover logic into `setupVideoCover(coverId, iframeId)` and called
  it for both `latest-*` and the newly-wired `featured-*` pair.

Status: COMPLETE — ready for visual QA in browser.
