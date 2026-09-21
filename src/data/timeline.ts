export type TimelineItem = {
  period: string;
  phase: string;
  title: string;
  description: string;
  tags: string[];
};

export const timeline: TimelineItem[] = [
  {
    period: "Foundation",
    phase: "2019 — 2022",
    title: "Falling into cybersecurity",
    description:
      "Discovered ethical hacking, Linux, and the terminal. Started small — labs, walkthroughs, and a growing obsession with how systems break.",
    tags: ["Linux", "Ethical Hacking", "Networking"],
  },
  {
    period: "Tooling",
    phase: "2022 — 2023",
    title: "Learning to build",
    description:
      "Picked up C and Python to go beyond using tools — to write them. Focused on low-level systems programming and automation for security workflows.",
    tags: ["C", "Python", "Automation"],
  },
  {
    period: "Research",
    phase: "2023 — 2025",
    title: "Wireless security deep-dive",
    description:
      "Built WiFi-RainbowBuffer — an automated WPA2/WPS assessment tool — turning months of aircrack-ng, hashcat, and protocol study into reusable software.",
    tags: ["WPA2", "WPS Pixie Dust", "aircrack-ng", "hashcat"],
  },
  {
    period: "Expansion",
    phase: "2025 — 2026",
    title: "OSINT & threat intelligence",
    description:
      "Expanded into OSINT platforms and global monitoring tooling, learning how open-source signals feed threat intelligence and reconnaissance workflows.",
    tags: ["OSINT", "Threat Intelligence", "Research"],
  },
  {
    period: "Present",
    phase: "2026 — Today",
    title: "Web application security focus",
    description:
      "Sharpening web application security testing: OWASP methodologies, Burp Suite workflows, API testing, and building tooling around every lesson learned.",
    tags: ["Web App Security", "OWASP", "Burp Suite", "APIs"],
  },
] as const;

export type TimelinePhase = (typeof timeline)[number];