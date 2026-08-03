# Task: Premium `sih.html` — Internal Smart India Hackathon 2026 landing page

## Goal
Build a single-file, premium, highly-animated landing page (`sih.html`) promoting the
**Internal Smart India Hackathon 2026** by ME-RIISE Foundation, Malnad College of
Engineering (MCE), Hassan. Not the official SIH site — an internal premium portal.

Look/feel target: Apple keynote × Stripe × Linear × Vercel × Framer × GitHub.

## Constraints (from the brief)
- **One file only**: `sih.html`. Everything inline (styles + JS).
- **Allowed tech**: HTML5, Tailwature CSS (CDN), Vanilla JS. Libs: GSAP + ScrollTrigger,
  AOS, Typed.js, Lenis smooth scroll, Lottie, Vanilla Tilt, Font Awesome, Lucide, Swiper.
- **Forbidden**: React, Vue, Angular, Bootstrap, jQuery.
- Production-ready, responsive (desktop→mobile), accessible, SEO meta, no lag.

## Key finding — content sources
- `sihbackup.html` is actually a **Newsletter** page (misnamed); no SIH content to mine.
- Real, reusable foundation data (from the repo):
  - Org: **ME-RIISE Foundation**, Malnad College of Engineering, Hassan, Karnataka 573201
  - Address: 24F3+69J, Rangoli Halla, Malnad College of Engg., Hassan, Karnataka 573201
  - CEO: **Dr Geetha Kiran A**
  - Emails: `ceomeriise@mcehassan.ac.in`, `meriisehsn@gmail.com`
  - Socials: Instagram `me_riise`, Facebook `mce.startup.club`, LinkedIn (org), Twitter
  - Logos (on disk, exact names):
    - `assets/MERIISE FOUNDATION logo 2.0.png`
    - `assets/IIC-logo-removebg-preview.png`
    - `assets/malnad_college_of_engineering_logo (1).jpg`
    - Favicon: `images/meriise-favicon.png`

## Content that is NOT in the repo (event specifics)
Dates, venue, registration link, prize pool, problem-statement count, coordinators.
These will be placed in **editable JS config objects at the top of the script** (same
pattern the existing newsletter page uses: `FEATURED`, `MONTHS_2026`). Defaults will be
realistic and clearly marked so the maintainer edits one place. The page will look
complete (no visible "TBD"/lorem). Countdown + Register wiring depend on these — see
questions below.

## CDN libraries (pinned, with graceful degradation)
- Tailwind Play CDN `https://cdn.tailwindcss.com` (+ inline `tailwind.config` for brand colors/fonts)
- Google Fonts: Poppins (display) + Inter (body)
- GSAP 3 + ScrollTrigger (hero timeline, parallax, counters, timeline draw)
- Lenis (smooth scroll; disabled under `prefers-reduced-motion`)
- Typed.js (hero headline typing)
- AOS (simple section/card scroll reveals)
- Swiper (themes carousel + gallery/news slider)
- Vanilla Tilt (feature glass cards)
- Font Awesome 6 (primary icons) + Lucide (accent icons)
- Lottie player web component (one lightweight loader animation; fallback = CSS spinner)
- Custom **canvas particle system** (floating dots + circuit lines) — no extra lib
> All animation JS guards for missing globals so a blocked CDN never breaks the page.

## Brand tokens
- Primary `#FF6A00` (orange) · Secondary `#0B1F45` (deep navy) · Accent `#00C2FF` (cyan)
  · Green `#00D084`. Backgrounds: white / light gray / soft orange & blue glows / gradients.

## Page structure (sections)
1. **Preloader** — Lottie/CSS loader, fades out on load.
2. **Custom cursor glow + noise overlay + fixed gradient blobs + particle canvas** (global).
3. **Navbar** — glass, sticky, shrink-on-scroll; logo (MERIISE) + MCE/IIC lockup; links
   (About, Themes, Timeline, Gallery, Register CTA); mobile slide-in menu (vanilla JS).
   Links back to real site pages (`index.html`, etc.) where relevant.
4. **Hero** — full-vh animated gradient, light beams, floating AI/circuit/binary elements,
   mouse parallax, animated India-map SVG outline, floating logo. Typed headline
   "INTERNAL SMART INDIA HACKATHON 2026", subtitle "Innovate • Build • Transform",
   buttons (Register / Explore / Latest Updates), **countdown timer**, scroll indicator.
5. **About** — two-column, illustration/stat card, scroll reveal, mini timeline intro.
6. **Features** — 6 glass tilt cards w/ glow border + animated icons: Problem Statements,
   Mentorship, Innovation, Prototype, Evaluation, National-Level Opportunity.
7. **Timeline** — vertical animated line that "draws"/lights up on scroll (GSAP ScrollTrigger).
8. **Statistics** — animated counters: Students, Mentors, Ideas, Teams, Hackathons.
9. **Themes** — interactive cards / Swiper: Healthcare, AI, Agriculture, IoT, Cyber
   Security, Education, FinTech, Smart Cities, Hardware, Software.
10. **Latest News** — premium cards, image hover zoom, animated buttons.
11. **Gallery** — masonry grid, hover zoom, lightbox (vanilla JS).
12. **CTA** — huge gradient section, animated glowing Register button.
13. **Footer** — quick links, contact (real data), socials, copyright.
14. **Back-to-top** button.

## Animations to implement
Fade-up, slide L/R, scale-in, floating, mouse parallax, typing, counters, gradient shift,
button ripple, hover glow, image zoom, card tilt, background blobs, animated SVG waves,
glass reflections, Lottie loader, scroll-driven timeline. All gated by
`prefers-reduced-motion` for accessibility/perf.

## Performance / SEO / a11y
- `defer`/async scripts; `loading="lazy"` on images; single rAF loop for cursor+particles;
  ScrollTrigger for reveal instead of scroll listeners.
- Meta: title, description, keywords, canonical, Open Graph + Twitter card, theme-color.
- Semantic landmarks, `aria-*` on nav/menu/lightbox, focus-visible styles, alt text.

## Build approach
- Author the full file top-to-bottom in `sih.html` in logical chunks (head/meta →
  global effects → nav → hero → sections → footer → scripts/config).
- Config block (`SIH` object) at top of `<script>` for all event specifics + stats +
  themes + news + gallery + countdown target, so content edits live in one place.
- Manual verification: open in browser (Live Server / file), check responsive breakpoints,
  confirm no console errors when a CDN is blocked (degradation), check reduced-motion.

## Open questions for maintainer (defaults if unanswered)
1. **Event dates + countdown target** — real dates? (default: a placeholder date in the
   editable config, e.g. "March 2026", countdown to it).
2. **Register button** — external Google Form/registration URL? (default: scrolls to a
   Register/contact section wired to `ceomeriise@mcehassan.ac.in`).
3. **Nav style** — fully self-contained premium nav (recommended, matches the brief) vs.
   the site's standard shared navbar. (default: self-contained, links to real pages.)

## Decisions (approved)
- Countdown: editable placeholder date in config (`SIH.eventDate`).
- Register: smooth-scroll to `#register` section with contact/email.
- Nav: self-contained premium glass nav, links back to real site pages.
- Lottie: reliable CSS/SVG loader + illustration; lottie-player script included with a
  commented slot for a maintainer to drop a real Lottie URL (avoids a broken external asset).

## Status
- [x] Plan approved
- [x] Build head + global effects + nav
- [x] Hero + countdown + typed
- [x] About / Features / Timeline / Stats
- [x] Themes / News / Gallery / CTA / Footer
- [x] Scripts, config, a11y, responsive pass
- [x] Manual verification (headless Chrome renders)

## Implementation summary (handover notes)
Single file delivered: `sih.html` (~1000 lines, all inline). Built exactly to the
approved decisions. Key points for the next engineer:

**Structure** — preloader → global effects (cursor glow, noise, particle canvas) →
glass sticky nav (+ mobile slide-in) → hero → about → features → timeline → stats →
themes → news (Swiper) → gallery (masonry + lightbox) → register/CTA → footer → back-to-top.

**Libraries (all CDN, all guarded with `typeof … !== 'undefined'`):** Tailwind Play CDN
(+ inline `tailwind.config` brand tokens), GSAP+ScrollTrigger, Lenis, Typed.js, AOS,
Swiper, Vanilla-Tilt, Font Awesome 6. Custom canvas particle/constellation system (no lib).

**Editable content** — top of the `<script>` there is a `SIH` config object:
`eventDate` (countdown target; currently placeholder `2026-09-26T09:00:00` — MUST stay a
future date or the countdown shows "Registrations Open") and `contactEmail`. Stats/themes/
news/gallery/timeline copy are in the markup and easy to edit. Gallery/news currently reuse
existing repo photos (`img/*`, `images/*`) — swap for hackathon-specific images when available.

**Decisions taken during build (flag to maintainer):**
- Removed **Lucide** (was loaded but unused — Font Awesome covers every icon) and the
  **lottie-player** script (only a commented slot remained). A CSS/SVG loader is used
  instead of Lottie for reliability; the preloader has a commented snippet showing how to
  re-enable a real Lottie loader. This keeps the page lean/fast.
- Moved all CDNs off `unpkg` to `jsdelivr`/`cdnjs` (more reliable; unpkg `@latest` was slow).
- **Hero entrance is CSS-keyframe based (`.hi`/`.hi-zoom`), not AOS** — above-the-fold
  content must never depend on a scroll library to become visible. AOS is used only for
  below-the-fold scroll reveals, with a `revealAll()` fallback if the AOS script is blocked.

**Robustness/perf/a11y** — preloader auto-hides on load + 1.2s fallback; all animations
gated by `prefers-reduced-motion`; particles/cursor disabled on touch/reduced-motion;
`loading="lazy"` on gallery/news images; SEO + OG/Twitter meta; semantic landmarks + aria.

**Verification done** — HTML tags balanced; both inline `<script>` blocks pass `node --check`;
every local asset path confirmed to exist with exact on-disk casing (safe for the
case-sensitive Linux host); headless-Chrome screenshots confirm hero + all sections render
and images load when served from the project root.

**Not wired (needs real data from organisers):** exact event date, a registration form URL
(Register currently opens a mailto to `ceomeriise@mcehassan.ac.in`), real problem-statement
counts / prize details, and final stat numbers.

## Performance pass (after "slow loading" feedback)
Removed ~278 KB of JS/CSS and 4 requests, no visual change:
- Removed **GSAP + ScrollTrigger** — were completely unused (only an inert `ScrollTrigger.update`
  sync line; there were no GSAP animations).
- Replaced **Swiper** (bundle ≈145 KB JS + 18 KB CSS) with a **native CSS scroll-snap**
  news carousel (`.news-track` + `#newsTrack`); prev/next wired with a tiny vanilla `scrollBy`.
- Added `preconnect`/`dns-prefetch` for the CDN origins (Tailwind, jsdelivr, cdnjs).
- Trimmed Google Fonts: Poppins now loads only 600/700/800 (was 400–900).

Remaining libs (all guarded): Tailwind Play CDN, Lenis, Typed.js, AOS, Vanilla-Tilt, Font Awesome.
**Main remaining load cost = the Tailwind Play CDN JS**, which compiles CSS at runtime. The
brief mandates "Tailwind CDN, no build step", so it stays; the only way to remove it is a
build step that ships a precompiled stylesheet (out of scope per the brief).
