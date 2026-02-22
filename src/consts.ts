import type { Metadata, Site, Socials, WorkExperience, Education, Skills, Certifications } from "@types";

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

export const CERTIFICATIONS: Certifications = [
  {
    name: "OSCP",
    fullName: "Offensive Security Certified Professional",
    issuer: "Offensive Security",
    year: "2024",
    url: "https://www.credly.com/badges/offensive-security-certified-professional-oscp",
  },
  {
    name: "CPSA",
    fullName: "CREST Practitioner Security Analyst",
    issuer: "CREST",
    year: "2024-2029",
  },
  {
    name: "CRT",
    fullName: "CREST Registered Tester",
    issuer: "CREST",
    year: "2024-2029",
  },
];

export const WORK_EXPERIENCE: WorkExperience = [
  {
    role: "Cyber Security Consultant I",
    company: "PT. Spentera",
    period: "2024-2026",
    description: "Fokus pada penetration testing, security assessment, dan konsultasi keamanan untuk klien enterprise.",
    highlights: [
      "Melakukan penetration testing aplikasi web, mobile, API, dan infrastruktur.",
      "Membantu tim internal dan klien dalam remediation temuan keamanan.",
      "Berpartisipasi dalam proyek red team dan security review.",
      "Mendapat sertifikasi CPSA & CRT selama periode ini.",
      "Mengembangkan skill penetration testing, security assessment, dan konsultasi keamanan.",
    ],
  },
  {
    role: "Junior Penetration Tester",
    company: "PT. Spentera",
    period: "2022–2024",
    description: "Memulai karier di bidang offensive security dengan fokus web, infrastruktur & mobile.",
    highlights: [
      "Web application, API, infrastruktur & mobile penetration testing.",
      "Dokumentasi temuan dan rekomendasi remediasi.",
      "Mendapat sertifikasi OSCP selama periode ini.",
    ],
  },
];

export const EDUCATION: Education = [
  {
    degree: "S1 Sistem Informasi",
    institution: "Universitas Gunadarma",
    period: "2018-2022",
    description: "Fokus pada pengembangan perangkat lunak dan keamanan informasi. Mengikuti berbagai kegiatan dan organisasi di bidang IT dan keamanan.",
  },
];

export const SKILLS: Skills = [
  {
    title: "Security",
    items: ["Penetration Testing", "Web/Mobile/API Security", "OWASP", "Red Team"],
  },
  {
    title: "Tools & Tech",
    items: ["Linux", "Docker", "Python", "Bash", "Git", "NMAP", "Wireshark", "Metasploit", "Burp Suite", "Kali Linux"],
  },
];
