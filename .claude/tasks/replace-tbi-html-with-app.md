# Task: Replace tbi.html with the tbi/ React app (as a single static file)

## Request
User: "i just want to replace tbi.html to tbi" — i.e. the live meriise.org/tbi.html
should show the `tbi/` Figma/React landing page, not the current broken placeholder.

## Constraints / findings
- `tbi/` is a Vite 6 + React 18 + Tailwind v4 app. `node_modules` is present.
  App = 11 sections (Navbar, Hero, About, Programs, Statistics, Startups, Events,
  Team, CTA, Contact, Footer). Self-contained; navbar uses in-page anchors
  (`#home`, `#about`, ...). Not tracked in git (source-only project).
- Deploy = `.cpanel.yml` runs `/bin/cp * $DEPLOYPATH` — TOP-LEVEL FILES ONLY,
  non-recursive. A normal Vite build (index.html + assets/ folder) would NOT
  deploy the assets subfolder. => The output must be ONE self-contained file.
- Current `tbi.html` (git-tracked, 272 lines) is a hand-written placeholder whose
  3 feature images point to `assets/placeholder.jpg` (missing) => broken images.
  The 25 nav dropdown items I added all link to `tbi.html`, so replacing its
  contents automatically upgrades what they open. Old version stays in git history.

## Approach: single-file build (no new runtime deps, offline-safe)
1. Add a build-only Vite config `tbi/vite.config.singlefile.ts` that reuses the
   existing plugins (react, tailwind, figma-asset resolver) and adds:
   - `build.assetsInlineLimit: <very high>`  (inline images/fonts as data URIs)
   - `build.cssCodeSplit: false`             (one CSS file)
   - `output.inlineDynamicImports: true`     (one JS file)
   - `base: './'`
   (Do NOT edit the existing vite.config.ts — keep their Make project intact.)
2. Set a real page `<title>` (Technology Business Incubator (TBI) — ME-RIISE
   Foundation) instead of the default "Website Builder".
3. `npx vite build --config vite.config.singlefile.ts` -> `tbi/dist/index.html`
   + one JS + one CSS.
4. Inline the JS (`<script type=module>`) and CSS (`<style>`) into the HTML so the
   result is a single standalone file. (Try `vite-plugin-singlefile` if installable;
   otherwise a tiny post-process script that swaps the `<script src>`/`<link href>`
   tags for inline contents.)
5. Write the standalone HTML to repo-root `tbi.html` (replacing the placeholder).
6. Verify: open the produced `tbi.html` locally / grep that it has no external
   `./assets/...` refs left, sensible file size, title correct. Confirm nav links
   from index.html still resolve to it.

## Consequences to note
- New `tbi.html` becomes a standalone SPA-style page with ITS OWN nav/footer,
  visually different from the rest of the static site (that's the app's design).
- One larger HTML file (est. a few hundred KB). Acceptable for `cp *` deploy.
- Any remote images the app references (if any) load at runtime; missing ones show
  the app's built-in fallback icon.

## Out of scope
- Committing/pushing (will ask). Building/deploying the tbi/ source folder itself.
- Restyling the app or wiring its nav to the main site.

## Status
- [ ] Awaiting approval
- [ ] Create singlefile config + title
- [ ] Build + inline into standalone tbi.html
- [ ] Verify
