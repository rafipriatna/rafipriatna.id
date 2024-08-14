import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "RafiPriatna.ID",
  DESCRIPTION: "Rafi Priatna's Personal Website!",
  TAGLINE: "Lifelong Learner ✨",
  USER_EMAIL: "me",
  DOMAIN: "rafipriatna.id",
  NUM_NOTES_ON_HOMEPAGE: 5,
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_WRITEUPS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Rafi Priatna's Personal Website.",
};

export const BLOG: Metadata = {
  TITLE: "Artikel",
  DESCRIPTION: "Panduan, referensi, tutorial programming dan cyber security.",
};

export const WRITEUPS: Metadata = {
  TITLE: "Writeups",
  DESCRIPTION:
    "Bagaimana cara saya memecahkan solusi Cyber Security, biasanya dari Lab atau kasus nyata.",
};

export const NOTES: Metadata = {
  TITLE: "Notes",
  DESCRIPTION:
    "Catatan pribadi saya mengenai tempat, makanan, year in review, makanan, dan sebagainya.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X",
    HREF: "https://twitter.com/rafipriatna",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/rafipriatna",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/rafipriatna",
  },
];
