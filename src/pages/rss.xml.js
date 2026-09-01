import rss from "@astrojs/rss";
import { SITE } from "@consts";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = (await getCollection("blog")).filter((post) => !post.data.draft);

  const writeups = (await getCollection("writeups")).filter(
    (writeup) => !writeup.data.draft,
  );

  const items = [...blog, ...writeups].sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      // blog posts live at the root (legacy URLs), others under their collection
      link: item.collection === "blog" ? `/${item.slug}` : `/${item.collection}/${item.slug}`,
    })),
  });
}
