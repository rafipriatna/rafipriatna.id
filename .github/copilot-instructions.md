# Copilot instructions for this repository

Purpose: help AI coding agents get productive quickly in this Astro static-site repo.

- Project type: Astro v4 static site using TypeScript + Tailwind + PageFind search.
- Key folders:
  - `src/content/` — content collections: `blog/`, `notes/`, `writeups/` (markdown + frontmatter).
  - `src/pages/` — page entrypoints and dynamic routes (see `[...slug].astro`).
  - `src/components/` — UI components (.astro). Example: `ArrowCard.astro` is used to render lists on the homepage.
  - `src/layouts/` — page layouts (Layout.astro).
  - `src/lib/` — helpers (e.g. `utils.ts`).
  - `pagefind/` — prebuilt PageFind assets for client search.

Quick architecture notes (what to read first):
- `src/pages/index.astro` shows how the site loads collections via `getCollection("blog")`, filters `draft`, sorts by `date`, and slices results for homepage lists.
- Content entries are consumed via Astro Content Collections (`astro:content`) and expected frontmatter keys include `date` and `draft`. Some pages append path prefixes to `slug` at render time (see homepage where `note.slug` and `writeup.slug` are prefixed).
- Routing: dynamic route at `src/pages/[...slug].astro` maps content slugs to pages — follow that file to understand URL -> content mapping.

Developer workflows (exact commands from `package.json`):
- Run dev server: `npm run dev` (or `npm start`).
- Build: `npm run build` (runs `astro check` then `astro build`).
- Preview a built site: `npm run preview`.

Project-specific conventions and patterns:
- Components are `.astro` files and often receive a content `entry` prop (see `ArrowCard.astro`). Inspect `src/components` to see the prop shapes used.
- Content collections are organized under `src/content/<collection>/`. New items are plain markdown files with frontmatter. Use `getCollection("<name>")` to load them.
- The repo uses path aliases when importing layouts/components (e.g. `@layouts/Layout.astro`). Check `tsconfig.json`/Astro config for alias mapping when changing imports.
- Prebuilt PageFind assets live in `pagefind/` — search UI (`PageFind.astro`) references these files directly. If you regenerate search, update the `pagefind/` folder and verify `src/components/PageFind.astro` still matches expected filenames.

Integration points and notable dependencies:
- Astro Content Collections (`astro:content`) — content → pages data flow.
- PageFind (`pagefind`) — client-side search; static assets under `pagefind/`.
- Tailwind via `@astrojs/tailwind` + `tailwind.config.mjs` and `styles/global.css` control styling.

Small gotchas discovered by reading code:
- Some code mutates collection entry objects (for example, `notes` and `writeups` in `src/pages/index.astro` are modified via `note.slug = "notes/" + note.slug`). Prefer creating derived variables instead of mutating entries if you change consumption logic.
- Date comparisons use `.valueOf()` on `data.date` (see `index.astro` sorting). Keep this in mind when adding new date fields or alternative date types.

When making changes:
- Start with `npm run dev` and edit `src/pages` / `src/components` — hot reload works via `astro dev`.
- If updating search, regenerate PageFind output and replace files under `pagefind/`.

Files to open first when exploring:
- `src/pages/index.astro` — homepage data flows and patterns.
- `src/pages/[...slug].astro` — content routing / page templates.
- `src/components/ArrowCard.astro` and `src/components/PageFind.astro` — common component patterns.

If anything is unclear or you want more examples (e.g., how frontmatter is shaped for a specific collection), tell me which collection and I'll add a short, concrete example to this file.
