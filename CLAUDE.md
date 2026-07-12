## Plan & Review
### Before starting work
-   Always in plan mode to make a plan
-   After get the plan, make sure you Write the plan to .claude/tasks/TASK_NAME.md.
-   The plan should be a detailed implementation plan and the reasoning behind them, as well as tasks broken down.
-   If the task require external knowledge or certain package, also research to get latest knowledge (Use Task tool for research)
-  Don't over plan it, always think MVP.
-   Once you write the plan, firstly ask me to review it. Do not continue until I approve the plan.
### While implementing
- You should update the plan as you work.
- After you complete tasks in the plan, you should update and append detailed descriptions of the changes you made, so following tasks can be easily hand over to other engineers.

# claude.md
This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static, multi-page website for the **ME-RIISE Foundation** (MCE Hassan innovation/incubation center). It is plain hand-authored HTML/CSS/JS — no build step, no framework, no bundler. `package.json` does not exist; `package-lock.json` is an empty stub. Pages are served directly as files.

## Running locally

There is no build or test command. Open the `.html` files directly, or serve the folder with a static server. The repo is configured for VS Code Live Server on port 5501 (`.vscode/settings.json`). PHP endpoints only run under a PHP-capable server (the production cPanel host), not Live Server.

## Deployment

Deployed via cPanel Git Version Control. On push, `.cpanel.yml` copies the repo's top-level files to `/home/example/public_html/merise` (`- /bin/cp * $DEPLOYPATH`). Note this copies top-level files only; subdirectory apps like `courses/` are not covered by that single `cp *` line and are managed separately on the host. `.well-known/pki-validation/` holds SSL domain-validation tokens — do not delete.

## Architecture

### Root site (static)
- Each feature/event is its own standalone `.html` file at the repo root (e.g. `index.html`, `events.html`, `team.html`, `iic.html`, `newsletter.html`). There is no shared templating — the nav/header markup is **copy-pasted into every page**, so a nav or footer change must be applied to each file that needs it.
- Shared behavior lives in `js/script.js` (mobile nav `openNav`/`closeNav`, dropdown toggles, and the image slideshow). Shared styles are split across `css/style.css`, `css/styles.css`, and `css/pragyatha.css` plus a root `Style.css` — page-specific styles are also frequently inlined in `<style>` blocks within each HTML file.
- `index.html` is large (~190KB) and contains most interactive widgets inline: the homepage rolling slider, the newsletter section, and the on-load popup (`#bg2-popup` etc., wired via `onclick` handlers to files in `popup_assets/`). Popups are enabled/disabled by editing that inline markup — old popups are left in the file commented out rather than removed.
- Media/images live in `assets/`, `images/`, `img/`, `team_imgs/`, `ourAchivementsImages/`, and large `.mp4`/`.pdf` files sit at the repo root. Many `*hide.html` / `*Upcoming.html` / `comingsoon` files are intentionally-unlinked drafts.

### PHP endpoints
- `submit_form.php` (root): Contact form handler. Appends submissions to `contact_messages.json` and attempts `mail()` to `ceomeriise@mcehassan.ac.in`. Returns JSON.
- `courses/`: A separate, self-contained PHP application (Micro-Engineering Certification Program) with its own `index.html`, admin panel (`courses/admin/`), MySQL layer (`courses/config/db_connect.php`), Razorpay payment integration (`courses/config/razor_pay_config.php`, `courses/razorpay-php/`, `courses/registration/`), and email (`courses/send_email.php`). It loads Bootstrap/Swiper/AOS/FontAwesome from CDNs. Treat this as its own project rather than part of the static site.

### Sub-projects
- `bridging-generations/` is a self-contained mini-site with its own `index.html`, `script.js`, `style.css`, and its own `claude.md` describing a plan-first workflow for that folder.

## Conventions

- Match the existing page you are editing: reuse its inline `<style>` conventions and its copied nav markup rather than introducing a shared include or a build tool.
- When adding a page, wire it into the nav/dropdown markup in the pages that should link to it (there is no central route table).
- Filenames are inconsistent (mixed case, spaces, `.JPG`/`.jpg`/`.jfif`/`.HEIC`); reference assets by their exact on-disk name.

## Security note

`courses/config/db_connect.php` and `courses/config/razor_pay_config.php` currently contain **hardcoded production MySQL credentials and live Razorpay API keys** committed to the repo. Do not add more secrets to tracked files, and flag these to the maintainer if working in that area — live keys in git history should be rotated.
