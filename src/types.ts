export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  TAGLINE: string;
  USER_EMAIL: string;
  DOMAIN: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_WRITEUPS_ON_HOMEPAGE: number;
  NUM_NOTES_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export type WorkExperience = {
  role: string;
  company: string;
  period: string;
  description?: string;
}[];
