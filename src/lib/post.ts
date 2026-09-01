import { getCollection } from "astro:content";
import type { ImageMetadata } from "astro";

// eager glob of all content images so covers can be resolved from markdown refs
const images = import.meta.glob("../content/**/*.{png,jpg,jpeg,gif,webp}", {
  eager: true,
}) as Record<string, { default: ImageMetadata }>;

export type CollectionName = "blog" | "notes" | "writeups";

export type FeedItem = {
  href: string;
  title: string;
  description: string;
  date: Date;
  body: string;
  source: string;
  collection: CollectionName;
  id: string;
  tags?: string[];
};

export const PAGE_SIZE = 10;

const SOURCE_LABEL: Record<CollectionName, string> = {
  blog: "Blog",
  notes: "Notes",
  writeups: "Writeups",
};

export async function feedItems(collection: CollectionName): Promise<FeedItem[]> {
  const entries = await getCollection(collection);
  return entries
    .filter((e) => !e.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map((e) => ({
      href: collection === "blog" ? `/${e.slug}` : `/${collection}/${e.slug}`,
      title: e.data.title,
      description: e.data.description,
      date: e.data.date,
      body: e.body,
      source: SOURCE_LABEL[collection],
      collection,
      id: e.id,
      tags: "tags" in e.data ? e.data.tags : undefined,
    }));
}

export function readingTime(body: string): string {
  const minutes = Math.max(1, Math.round(body.trim().split(/\s+/).length / 200));
  return `${minutes} menit baca`;
}

export function coverImage(
  collection: string,
  id: string,
  body: string,
): ImageMetadata | null {
  const match = body.match(/!\[[^\]]*\]\(\s*<?([^)\s>]+)/);
  if (!match || match[1].startsWith("http")) return null;
  const ref = match[1].replace(/^\.\//, "");
  const dir = id.split("/").slice(0, -1).join("/");
  const key = `../content/${collection}/${dir ? `${dir}/` : ""}${ref}`;
  return images[key]?.default ?? null;
}
