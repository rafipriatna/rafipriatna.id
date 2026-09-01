export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  TAGLINE: string;
  USER_EMAIL: string;
  DOMAIN: string;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export type WorkExperienceEntry = {
  role: string;
  company: string;
  period: string;
  description?: string;
  highlights?: string[];
};

export type WorkExperience = WorkExperienceEntry[];

export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  description?: string;
};

export type Education = EducationEntry[];

export type SkillsGroup = {
  title: string;
  items: string[];
};

export type Skills = SkillsGroup[];

export type CertificationEntry = {
  name: string;
  fullName: string;
  issuer: string;
  year: string;
  url?: string;
};

export type Certifications = CertificationEntry[];
