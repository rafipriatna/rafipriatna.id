import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { transformerNotationHighlight, transformerNotationFocus, transformerNotationDiff } from "@shikijs/transformers";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://rafipriatna.id",
  integrations: [tailwind(), sitemap(), mdx()],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
      defaultColor: 'dark',
      transformers: [transformerNotationHighlight(), transformerNotationFocus(), transformerNotationDiff()],
      wrap: true
    },
  },
  server: {
    port: 1337
  }
});
