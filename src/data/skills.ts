export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: { name: string; slug: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Languages I write security tools, automation, and analysis scripts in.",
    skills: [
      { name: "Python", slug: "python" },
      { name: "C", slug: "c" },
      { name: "JavaScript", slug: "javascript" },
      { name: "SQL", slug: "sql" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3" },
      { name: "Bash", slug: "bash" },
    ],
  },
  {
    id: "security",
    title: "Security & Operating Systems",
    description: "Security-focused environments and the tools that run inside them.",
    skills: [
      { name: "Kali Linux", slug: "kali-linux" },
      { name: "Linux", slug: "linux" },
      { name: "Burp Suite", slug: "burp-suite" },
      { name: "Metasploit", slug: "metasploit" },
      { name: "Nmap", slug: "nmap" },
      { name: "Wireshark", slug: "wireshark" },
    ],
  },
  {
    id: "security-domains",
    title: "Security Domains",
    description: "Areas of active research, testing, and real-world practice.",
    skills: [
      { name: "Penetration Testing", slug: "pentesting" },
      { name: "Web App Security", slug: "webappsec" },
      { name: "Network Security", slug: "netsec" },
      { name: "OSINT", slug: "osint" },
      { name: "WiFi Security", slug: "wifi" },
      { name: "Ethical Hacking", slug: "ethicalhacking" },
      { name: "Cloud Security", slug: "cloud" },
      { name: "Incident Response", slug: "incident-response" },
    ],
  },
] as const;

export const expertiseAreas = [
  {
    id: "web-security",
    title: "Web Application Security",
    description: "Full-cycle security testing of web applications, APIs, and HTTP-based services — from first reconnaissance through exploitation and remediation.",
    capabilities: [
      "Application security testing across OWASP Top 10",
      "Deep web vulnerability research and PoC development",
      "HTTP/HTTPS protocol and header analysis",
      "API endpoint and business-logic testing",
      "Burp Suite professional workflow",
      "Report writing with reproducible evidence",
    ],
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing",
    description: "Structured, authorized penetration tests across web, network, and wireless surfaces — methodical from scoping through clean reporting.",
    capabilities: [
      "Reconnaissance and open-source intelligence",
      "Attack surface mapping and threat modeling",
      "Vulnerability identification and real-world exploitation",
      "WiFi and wireless protocol assessment",
      "Report-driven methodology with executive summaries",
      "Retesting and remediation validation",
    ],
  },
  {
    id: "security-tooling",
    title: "Security Tooling & Automation",
    description: "Building automation and custom tooling so repeatable security work becomes fast, documented, and repeatable for real teams.",
    capabilities: [
      "Python automation scripts for security workflows",
      "Low-level tooling with C",
      "Terminal-native Linux workflows",
      "aircrack-ng ecosystem and hashcat cracking",
      "CI-friendly security utilities",
      "Tool documentation and maintenance guides",
    ],
  },
  {
    id: "linux-security",
    title: "Linux & System Security",
    description: "Terminal-native operations on Linux and hardened environments — Kali as the daily driver for assessments and analysis.",
    capabilities: [
      "Kali Linux power-user administration",
      "Command-line fluency across distributions",
      "System hardening and configuration review",
      "Network interface and service management",
      "Process and log analysis for investigations",
    ],
  },
  {
    id: "incident-response",
    title: "Incident Response",
    description: "Quick triage and root-cause analysis when something goes wrong — logs, network traces, and filesystem artifacts under pressure.",
    capabilities: [
      "Incident triage and timeline reconstruction",
      "Log and filesystem artifact analysis",
      "Network forensics support",
      "Containment and eradication guidance",
      "Post-incident reporting and hardening",
    ],
  },
] as const;

export type ExpertiseArea = (typeof expertiseAreas)[number];