# rafipriatna.id

Blog pribadi Rafi Priatna — dibangun dengan [Astro](https://astro.build) + Tailwind CSS.

## Struktur

- `src/content/blog/` — artikel (dirender di root: `/<slug>`)
- `src/content/notes/` — catatan pribadi (`/notes/<slug>`)
- `src/content/writeups/` — writeup security (`/writeups/<slug>`)
- `src/layouts/Base.astro` — layout utama
- `src/consts.ts` — metadata situs & data halaman `/me`

## Pengembangan

```sh
npm install
npm run dev      # dev server di port 1337
npm run build    # astro check + build
npm run preview
```

Menulis artikel baru: buat folder `src/content/blog/<tahun>/<slug>/index.md` dengan frontmatter `title`, `description`, `date`, dan opsional `tags` + `draft`.
