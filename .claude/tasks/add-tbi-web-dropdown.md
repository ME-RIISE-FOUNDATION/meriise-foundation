# Task: Add "TBI Web" item to the TBI-MCE dropdown

## Request
In the `TBI-MCE` nav dropdown (which currently shows a single item, **About TBI**),
add a new item labelled **TBI Web**, on all pages that carry the nav.

## Clarified requirements (from user)
- **Link target:** `https://www.meriise.org/tbi.html` (the existing TBI page).
- **Scope:** all nav pages (~25 HTML files).

## Findings
- The nav is copy-pasted into 25 files. The "About TBI" dropdown item exists in each:
  `aboutmeriise, callforincubationhide, Certificates, EdutechSphere, collab,
  infrastructure, Krishimanthan, index, iic, nain1, iic-cal, nain, uba,
  ourAchivements, openPositionhide, notifications, newsletter, nain2_O_comingsoon,
  nain2_0, nain2projects, nain2, startups, sihbackup, rgep, team`.
- Two files use a **single-line** `<li>` form (`Krishimanthan.html:938`,
  `notifications.html:187`); the rest use a **multi-line** `<li>` block. Indentation
  differs between files.
- The existing item uses a **relative** href: `href="tbi.html"`.
- NOTE: There is an untracked, unbuilt Figma/Vite React app in `tbi/`. It is NOT
  used here (it cannot be linked without a build/deploy step).

## Open point to confirm
"TBI Web" -> `tbi.html` is the **same page** the existing "About TBI" already links
to. I'll implement it as requested, using the **relative** path `tbi.html` (matches
the sibling item; works in local dev, staging, and prod). If you instead want it to
point somewhere else (e.g. the new React app once it's hosted), tell me the URL.

## Plan (MVP)
1. For each of the 25 files, insert a new `<li>` for **TBI Web** immediately AFTER
   the existing "About TBI" `<li>`, matching that file's indentation and its
   single-line vs multi-line style.
   New item markup (multi-line files):
   ```html
   <li>
       <a href="tbi.html" class="dropdown__link">
           <i class="ri-pie-chart-line"></i> TBI Web
       </a>
   </li>
   ```
2. Do it with one anchored script pass (regex on the About-TBI `<li>`), so every
   file is handled uniformly and indentation is preserved.
3. Verify: grep that exactly 25 "TBI Web" dropdown links now exist, and spot-check
   `index.html`, `Krishimanthan.html` (single-line), and one multi-line page.

## Out of scope
- Building/deploying the `tbi/` React app.
- Changing the "About TBI" item or any other nav entry.

## Status
- [x] Plan approved (user: link -> https://www.meriise.org/tbi.html, final)
- [x] Implemented insertion across 25 files
- [x] Verify counts + spot-check

## Implementation notes (done)
- Added a new `<li>` "TBI Web" immediately after the "About TBI" item in the
  TBI-MCE dropdown of all 25 nav files.
- Used the **absolute** href the user confirmed: `https://www.meriise.org/tbi.html`.
- Inserted via a single perl slurp-mode pass anchored on the About-TBI `<li>`,
  capturing each file's leading indent so the new item aligns. CRLF preserved
  (verified 0 lone-LF; the two single-line files Krishimanthan/notifications got a
  correctly-indented multi-line `<li>`).
- Verification: each file has exactly one new item (25/25); `git diff --stat` shows
  25 files changed, 125 insertions(+), 0 deletions.
- The static-site deploy (`.cpanel.yml`) copies top-level files, so all 25 edited
  root files are covered on push.
