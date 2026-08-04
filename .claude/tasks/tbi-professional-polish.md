# Task: Make tbi.html look more professional ("Refined corporate")

Follow-up to `tbi-animations.md` (animations already shipped). This pass is about visual
polish, not motion. Chosen direction: **Refined corporate** + **replace emoji with SVG icons**.
Stays in the single self-contained `tbi.html` (no build step).

## 1. Typography (biggest lever)
- Add Google Fonts: **Plus Jakarta Sans** (display / headings) + **Inter** (body), with a
  full system-font fallback stack so it still looks right if the fonts fail to load.
  `<link rel="preconnect">` + one stylesheet link in `<head>`.
- Body → Inter; `.headline`, `.brand`, section `h3/h4` → Plus Jakarta Sans.
- Tighten heading letter-spacing slightly; set body weight 400, headings 700–800.

## 2. Refined color, shadows, spacing (restrained)
- Keep the blue (#2563eb) / cyan (#06b6d4) brand, but calm it down:
  - Softer, layered **neutral** shadows (slate, low opacity) instead of heavy blue glows.
  - Consistent hairline borders (`rgba(15,23,42,.06–.08)`).
  - Refined muted text tokens; slightly larger, more consistent border-radius scale.
- Add subtle section separation (very light top border / background tint) so sections read
  as distinct without heavy color blocks.
- Refine navbar: cleaner brand lockup, tighter blur.

## 3. Replace emoji with crisp monoline SVG icons
Consistent 24×24, stroke-based (currentColor → inherits the white on gradient chips).
- About: 🎯→target, 👁→eye, big 💡→lightbulb.
- Programs: 💡→lightbulb, 🚀→rocket, 👥→users, ₹→wallet, 🏢→building, 🛠→wrench/tool.
- Events: 📅→calendar, 🤝→network, 🧪→beaker; Achievements: 🏆→trophy, 👥→grad-cap, 🥇→medal.
- Contact: 📍→map-pin, ✉→mail, ☎→phone.
- Keep text marks that already look professional: brand "TBI", roadmap numbers 1–5,
  portfolio/team initials.
- Add `.icon-wrap svg { width:28px;height:28px } .contact-item .icon svg { width:22px }`.

## Scope / safety
- `tbi.html` only. No content/copy changes. Animations from the previous pass stay intact.
- All new hover/shadow transitions already respect `prefers-reduced-motion` (existing block).

## Status
- [x] Direction confirmed (Refined corporate + SVG icons)
- [ ] Fonts wired in
- [ ] Color/shadow/spacing refinement
- [ ] Emoji → SVG icon swap
- [ ] Verify (tag balance + render)
