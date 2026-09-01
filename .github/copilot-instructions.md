# Copilot instructions for this repository

Purpose: help AI coding agents get productive quickly in this Astro static-site repo.

- Project type: Astro v4 personal blog (Medium-like light theme) using TypeScript + Tailwind.
- Key folders:
  - `src/content/` — content collections: `blog/`, `notes/`, `writeups/` (markdown/mdx + frontmatter).
  - `src/pages/` — page entrypoints and dynamic routes (see `[...slug].astro`).
  - `src/components/` — UI components: `PostCard.astro` (list item), `Article.astro` (post template), `Callout.astro` (used inside MDX), `Head.astro`.
  - `src/layouts/Base.astro` — the single site layout (header nav, footer, copy-code script).
  - `src/consts.ts` + `src/types.ts` — site metadata, socials, and the data behind `/me`.

Quick architecture notes (what to read first):
- Blog posts render at the ROOT (`/<slug>`) via `src/pages/[...slug].astro` — legacy URLs, do not move them under `/blog/`. `/blog` is the list page; `/blog/<tag>` filters by tag.
- Notes/writeups render under `/notes/<slug>` and `/writeups/<slug>`.
- Blog frontmatter uses `tags` (optional string array) — surfaced as pills and tag pages.
- Pages load collections via `getCollection("x")`, filter `draft`, sort by `date.valueOf()` descending.

Developer workflows (exact commands from `package.json`):
- Run dev server: `npm run dev` (port 1337).
- Build: `npm run build` (runs `astro check` then `astro build`).
- Preview a built site: `npm run preview`.

Project-specific conventions:
- Path aliases: `@*` → `./src/*` (e.g. `@layouts/Base.astro`, `@consts`).
- Design tokens live as CSS variables in `src/styles/global.css`; article typography is the `article` rule there (serif reading column, `max-w-[680px]` pages).
- Shiki themes configured in `astro.config.mjs` (default light: `github-light`).

Small gotchas:
- Some posts override `slug` in frontmatter (different from folder name) — always use `entry.slug`, never derive from path.
- MDX files import `Callout` via `@/components/Callout.astro` — keep that path working.
