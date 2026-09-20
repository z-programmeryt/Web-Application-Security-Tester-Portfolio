export const profile = {
  name: "M. Ahsan Ullah",
  nickname: "Redoy",
  displayName: "M. Redoy Rowshon",
  title: "Penetration Tester | Web Application Security Tester",
  shortTitle: "Penetration Tester & Security Researcher",
  tagline: "Security-focused technologist working across penetration testing, web application security, programming, and security research.",
  email: "redoyc17@gmail.com",
  avatarUrl: "https://avatars.githubusercontent.com/u/246006863?v=4",
  githubUsername: "redoyrowshon-dotcom",
  location: "Bangladesh",
  identities: [
    "Cybersecurity Researcher",
    "Ethical Hacker",
    "Security Tooling Developer",
    "Web Security Researcher",
  ],
  focus: [
    "Advanced Penetration Testing & Red Teaming",
    "Linux system security and terminal operations",
    "Automated security tooling with Python and C",
    "Web application security analysis",
  ],
} as const;

export const socialLinks = [
  {
    platform: "GitHub",
    url: "https://github.com/redoyrowshon-dotcom",
    icon: "github",
    label: "GitHub Profile",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/m-redoy-rowshon-2a0406424/",
    icon: "linkedin",
    label: "LinkedIn Profile",
  },
  {
    platform: "Email",
    url: "mailto:redoyc17@gmail.com",
    icon: "mail",
    label: "Email Redoy",
  },
] as const;

export const navigation = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Expertise", href: "#expertise", id: "expertise" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

export type Profile = typeof profile;
export type SocialLink = (typeof socialLinks)[number];
export type NavItem = (typeof navigation)[number];
