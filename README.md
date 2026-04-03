# My Portfolio (MacOS-inspired)

This is my interactive portfolio built with React + Vite and styled to feel like a mini desktop OS.

Instead of a typical one-page scroll site, everything opens like apps/windows:

- a boot screen before the desktop loads
- a top navbar with live clock
- a dock with hover physics + tooltips
- draggable windows with close / minimize / maximize
- Finder-style project explorer
- Photos, Projects, Tech Stack, Contact panels
- a genie minimize/unminimize animation into the dock

The whole idea was to make the portfolio feel playful while still keeping content easy to find.

## Stack

- React 19
- Vite 7
- Tailwind CSS v4
- Zustand + Immer (window and location state)
- GSAP + @gsap/react + Draggable
- Lucide React (icons)
- dayjs (live time)
- react-tooltip

## Quick Start

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

### Other scripts

```bash
npm run build
npm run preview
npm run lint
```

## How the app is structured

### 1) Desktop shell

- `src/App.jsx` mounts the desktop scene and all window components.
- `src/components/Boot.jsx` runs an initial boot progress sequence and fades out.
- `src/components/Welcome.jsx` renders the center intro headline with interactive variable-font hover behavior.

### 2) Window system

- `src/store/window.js` manages open/minimize/maximize/z-index state for each window.
- `src/hoc/WindowWrapper.jsx` wraps every app window with shared behavior:
	- open animation
	- drag-to-move
	- maximize/restore geometry handling
	- z-index focus management
	- genie-in animation when restoring from dock
- `src/components/WindowControls.jsx` handles close/minimize/maximize actions.

### 3) Dock behavior

- `src/components/Dock.jsx` renders app icons from constants.
- Hover uses distance-based GSAP scaling and lift.
- Clicking an icon toggles that window:
	- closed -> open
	- open -> close
	- minimized -> unminimize

### 4) Finder and content model

- `src/constants/index.js` is the main content source (projects, social links, gallery, Finder tree).
- `locations` defines folder/file-style data used by Finder.
- `src/store/location.js` tracks the currently selected Finder location.
- `src/windows/Finder.jsx` opens folder/file items:
	- folder -> navigate in Finder
	- `url` file -> opens external link in new tab
	- `txt` / `img` file -> opens dedicated content window

### 5) Window apps

- `src/windows/Projects.jsx` recent work cards
- `src/windows/Terminal.jsx` tech stack panel
- `src/windows/Photos.jsx` gallery + image preview opener + SIDEBAR DOESN'T WORK (YET)
- `src/windows/Contact.jsx` social/contact links
- `src/windows/Text.jsx` text content viewer
- `src/windows/Image.jsx` image preview viewer

## Where to edit portfolio content

Most content updates happen in one place:

- `src/constants/index.js`

Edit these collections to customize quickly:

- `recentWorks` -> project cards in Projects window
- `techStack` -> categories + technologies in Terminal window
- `socials` -> Contact links
- `gallery` -> Photos window grid
- `locations` -> Finder folder/file structure and file payloads

## Styling notes

- Global UI/theme/layout lives in `src/index.css`.
- Tailwind v4 utilities are mixed with custom component selectors.
- The desktop wallpaper and app icons are loaded from `public/images` and `public/icons`.
- Custom keyframes `genie-out` and `genie-in` drive the dock minimize effect.

## Current UX constraints

- This portfolio is intentionally desktop/tablet-first.
- Mobile users are shown a small notice in the welcome section.

## Local development tips

- If you add a new dock app, also add matching window state in `WINDOW_CONFIG`.
- Keep `id` values in constants stable to avoid React key mismatches.
- If drag feels off after layout changes, check absolute positioning styles in `src/index.css` and the maximize/restore logic in `WindowWrapper`.

## Why this repo exists

I wanted a portfolio that feels like an experience, not just a resume page.

If you're exploring this code, feel free to remix the window system for your own projects.
