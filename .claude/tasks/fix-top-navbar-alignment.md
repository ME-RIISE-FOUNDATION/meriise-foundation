# Task: Fix top navbar alignment & side edges

## Problem (from user screenshot)
The desktop top nav ("Home … Contact Us") is shifted to the right:
- Large empty white gap on the **left** before "Home".
- "Contact Us" is **clipped/cut off** on the **right** edge.
- Overall the bar looks off-center / untidy at the side edges.

## Root cause
In `assets/NavbarCode/assets/css/styles.css`, inside the desktop media query
`@media screen and (min-width: 1118px)`:

- `.nav` (line ~301): `justify-content: space-around;` **and** `margin-left: 50px;`
  push the menu rightward.
- `.nav__data` (the hamburger toggle, hidden on desktop) is still the first flex
  child of `.nav`, so `space-around` reserves space for it on the left.
- Combined, the menu is right-shifted and the last item overflows past the
  container's right edge.

This CSS file is shared by the copy-pasted nav across the site, so the fix is
applied once and corrects every page that links it.

## Fix (minimal, reversible)
Append one clearly-commented override block at the **end** of
`assets/NavbarCode/assets/css/styles.css` so it wins on source order (no fighting
specificity, easy to revert):

```css
/* === NAV ALIGNMENT FIX: center menu, symmetric side gutters, no cut-off === */
.containerofNavbar {
  padding-inline: 1.5rem;      /* neat, even gutters at the side edges */
}
@media screen and (min-width: 1118px) {
  .nav {
    margin-left: 0;            /* remove the 50px right-shift */
    justify-content: center;   /* was space-around */
  }
  .nav__menu {
    flex: 1;                   /* let the menu use the full row */
    justify-content: center;   /* center the links within it */
  }
  .nav__list {
    flex-wrap: nowrap;         /* keep links on one line */
    justify-content: center;
    column-gap: clamp(1.25rem, 2.2vw, 2.5rem);  /* fits all 8 items in 1200px */
    gap: clamp(1.25rem, 2.2vw, 2.5rem);
  }
}
```

### Why this is safe
- Only touches desktop nav layout (>=1118px) plus a symmetric side padding.
- Does not change nav markup, colors, mobile hamburger behavior, or dropdowns.
- Appended at end of the file → overrides earlier conflicting `.nav__list` gap
  rules without editing/removing them (fully reversible by deleting the block).

## Verification
- Open `index.html` (VS Code Live Server / port 5501) at desktop width (>1118px):
  - Menu is horizontally centered; equal gutters on left and right.
  - "Contact Us" is fully visible (no clipping).
- Narrow the window below 1118px: hamburger menu still works unchanged.
- Spot-check one other page that links the same CSS (e.g. `team.html`).

## Status
- [x] Implemented: appended the NAV ALIGNMENT FIX block to the end of
  `assets/NavbarCode/assets/css/styles.css`.
- [x] Correction: first pass over-corrected (menu `flex:1` + wide link padding
  pushed "Home" off the left edge). Fixed by dropping `flex:1`, tightening the
  link padding to `0.5rem 0.75rem`, and reducing the item gap to
  `clamp(0.75rem, 1.4vw, 1.25rem)` so all 8 items fit on one centered line inside
  the 1200px container with symmetric gutters — nothing clipped on either side.
- [x] Final centering fix: the appended `.nav { margin-left: 0 }` was overriding
  the container's `margin: 0 auto`, pinning the whole nav box to the LEFT (menu
  then centered inside a left-pinned box → looked off-center). Changed to
  `margin-inline: auto`. Verified with a headless Edge render against a center
  ruler: the menu is now symmetric about the true page center. Also re-added
  `.nav__data { display: none }` on desktop so the empty hamburger wrapper can't
  offset the row.
