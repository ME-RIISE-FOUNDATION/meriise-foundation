# Task: Make tbi.html more animated & professional

## Goal
Elevate the existing TBI landing page (`tbi.html`) with tasteful, performant motion and
polish — without changing content, structure, or the existing blue/cyan design system.
Everything stays in the single self-contained file (no build step, no external libs),
matching the repo convention.

## Guiding principles (MVP, not over-engineered)
- **Pure CSS + a small vanilla JS IntersectionObserver** — no libraries, no CDNs.
- **Respect `prefers-reduced-motion`** — all motion disabled for users who opt out.
- **Keep it professional**: subtle, fast (200–600ms), eased — no bouncing/gaudy effects.
- Reuse existing CSS variables, classes, and gradients.

## Planned enhancements

### 1. Scroll-reveal system (biggest impact)
- Add a `.reveal` utility (opacity 0 → 1, translateY 24px → 0) toggled by an
  IntersectionObserver when elements enter the viewport.
- Apply to section titles, cards, roadmap steps, stat cards, team/portfolio/event cards.
- **Stagger** grid children via a small `--i` index delay so cards cascade in.

### 2. Animated stat counters
- Count-up animation for the hero stats (5+, 30+, 85%, 100%) and the Impact numbers
  (₹10 Cr, 200+, etc.) — triggered once when scrolled into view. Parses the numeric part,
  preserves prefixes/suffixes (₹, +, %, Cr).

### 3. Hero polish
- Gentle floating animation on the three `.hero-orb`s (slow, offset drifts).
- Animated gradient shift on `.headline .gradient` text (slow shimmer).
- Staggered entrance for hero badge → headline → subtext → buttons → stats on load.

### 4. Navbar scroll state
- Add shadow + stronger blur/opacity once the page is scrolled (`.navbar.scrolled`).
- Thin **scroll-progress bar** across the very top of the navbar.

### 5. Micro-interactions (hover/focus)
- Card lift + shadow deepen + subtle border-glow on hover for program / portfolio /
  team / event / stat cards (transform + box-shadow transitions).
- Button hover: slight lift and shadow grow; primary button subtle sheen.
- Roadmap: connecting gradient line behind the rings + ring hover scale.
- Team avatars / icon-wraps: hover scale.

### 6. Scroll-to-top button
- Currently always visible. Make it fade/scale in only after scrolling ~400px.

## Implementation notes
- Add a new `<style>` block additions (keep existing rules; append new ones near the end
  of the existing `<style>` for clarity) plus one `@media (prefers-reduced-motion: reduce)`
  block that neutralizes transitions/animations.
- Add small JS at the bottom (`<script>`): IntersectionObserver for reveals + stagger,
  counter animation, navbar scrolled state, scroll progress bar, scroll-top visibility.
- Add `reveal` classes / `--i` inline vars to existing markup where needed.
- No content or copy changes.

## Out of scope
- No new sections, no content edits, no nav/route changes, no other files touched.

## Status
- [x] Plan approved
- [x] CSS: reveal utility + reduced-motion + hover polish + orb/gradient animation
- [x] JS: observer, counters, navbar state, progress bar, scroll-top
- [x] Markup: add reveal classes / stagger indices
- [x] Verified: tag balance clean, inline JS passes `node --check`

## Implementation notes (handover)
All changes are contained in `tbi.html` (single file, no new deps). Summary:

**CSS (appended to the existing `<style>`):**
- `.reveal` / `.reveal.in` scroll-reveal utility with per-element `--i` stagger delay.
- Hero orb float keyframes (`floatOrb`/`floatOrbAlt`/`floatOrbCenter`) + gradient-headline
  shimmer (`gradientShift`; `.headline .gradient` now uses a 3-stop 200% gradient).
- `.navbar.scrolled` (shadow/opacity) + `.scroll-progress` bar.
- Hover polish for `.program-card/.portfolio-card/.event-card/.team-card/.stat-card/.card/
  .impact-card/.cta-pill`, icon/avatar/ring scale, button lift + `::after` sheen sweep.
- `.roadmap::before` gradient connecting line (hidden < 960px).
- `.scroll-top` hidden until `.show`.
- `@media (prefers-reduced-motion: reduce)` neutralizes motion; `<noscript>` fallback makes
  `.reveal` visible if JS is off.

**Markup:**
- Added `id="navbar"` + `<div class="scroll-progress" id="scrollProgress">` to the header.
- Added `reveal` (with `--i`) to hero + CTA text elements and every `.section-title`/heading.
- Added `stagger` to grid containers (stats, roadmap, program, impact ×2, portfolio,
  event ×2, team, cta-pills, about-grid, contact-grid, footer-grid). JS auto-adds `.reveal`
  + `--i` to their children so no per-card edits were needed.
- Added the previously-missing `</body></html>`.

**JS (rewrote the bottom `<script>`):**
- Reads `prefers-reduced-motion` once.
- Auto-staggers `.stagger` children, then an IntersectionObserver toggles `.in`.
- Count-up animation on `.stat-card .number` + `.impact-card .value` (skips values with `/`
  like "24/7"; preserves ₹ / + / % / Cr prefixes+suffixes); disabled under reduced-motion.
- Scroll handler drives navbar `.scrolled`, progress-bar width, and scroll-top `.show`.

## Possible follow-ups (not done)
- Screenshot/visual QA in a real browser (Live Server :5501) — structure + JS validated,
  but pixel-level review not performed here.
