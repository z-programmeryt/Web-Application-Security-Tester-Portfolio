export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    slug: string;
  }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages used for security tooling and development",
    skills: [
      { name: "Python", slug: "python" },
      { name: "C", slug: "c" },
      { name: "JavaScript", slug: "javascript" },
      { name: "SQL", slug: "sql" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3" },
    ],
  },
  {
    id: "security",
    title: "Security & Operating Systems",
    description: "Security-focused tools and environments",
    skills: [
      { name: "Kali Linux", slug: "kali-linux" },
      { name: "Linux", slug: "linux" },
      { name: "Burp Suite", slug: "burp-suite" },
      { name: "Metasploit", slug: "metasploit" },
    ],
  },
  {
    id: "security-domains",
    title: "Security Domains",
    description: "Areas of active security research and practice",
    skills: [
      { name: "Penetration Testing", slug: "pentesting" },
      { name: "Web App Security", slug: "webappsec" },
      { name: "Network Security", slug: "netsec" },
      { name: "OSINT", slug: "osint" },
      { name: "WiFi Security", slug: "wifi" },
      { name: "Ethical Hacking", slug: "ethicalhacking" },
    ],
  },
];

export const expertiseAreas = [
  {
    id: "web-security",
    title: "Web Application Security",
    description: "Security testing and vulnerability research across web applications, APIs, and HTTP-based technologies.",
    capabilities: [
      "Application security testing",
      "Web vulnerability research",
      "HTTP/HTTPS protocol analysis",
      "OWASP Top 10 awareness",
      "Burp Suite workflow",
    ],
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing",
    description: "Structured security assessments with focus on authorized testing methodology.",
    capabilities: [
      "Reconnaissance & OSINT",
      "Attack surface analysis",
      "Authorized security testing",
      "WiFi security assessment",
      "Report-driven methodology",
    ],
  },
  {
    id: "security-tooling",
    title: "Security Tooling & Automation",
    description: "Building and using automated tools for security research and testing workflows.",
    capabilities: [
      "Python automation scripts",
      "C for low-level tooling",
      "Linux CLI workflows",
      "Aircrack-ng ecosystem",
      "Custom security automation",
    ],
  },
  {
    id: "linux-security",
    title: "Linux & System Security",
    description: "Terminal-native operations on Linux environments, with Kali Linux as the primary platform.",
    capabilities: [
      "Kali Linux power user",
      "Terminal operations",
      "System hardening awareness",
      "Network interface management",
      "Process & service analysis",
    ],
  },
] as const;

export type ExpertiseArea = (typeof expertiseAreas)[number];
