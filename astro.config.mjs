import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { transformerNotationHighlight, transformerNotationFocus, transformerNotationDiff } from "@shikijs/transformers";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-micro.vercel.app",
  integrations: [tailwind(), sitemap(), mdx(), pagefind()],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
      defaultColor: 'dark', // inline = dark; setiap token dapat --shiki-light untuk light mode
      transformers: [transformerNotationHighlight(), transformerNotationFocus(), transformerNotationDiff()],
      wrap: true
    },
  },
  server: {
    port: 1337
  }
});
