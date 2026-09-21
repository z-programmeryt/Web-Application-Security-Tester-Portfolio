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
      "Discovered ethical hacking through a simple CTF challenge and never looked back. Spent those years building a rock-solid foundation — Linux internals, networking, and the terminal until it felt like home. Every walkthrough became a lesson, and every lab turned into an obsession with understanding how systems fail.",
    tags: ["Linux", "Ethical Hacking", "Networking", "CTF"],
  },
  {
    period: "Tooling",
    phase: "2022 — 2023",
    title: "Learning to build",
    description:
      "Moved past using tools to writing them. Picked up C and Python to automate repetitive security tasks and build custom scripts that made real assessments faster and more reliable. Focused on low-level systems programming and building a habit of documenting everything — because the best tool is the one someone else can actually use.",
    tags: ["C", "Python", "Automation", "Documentation"],
  },
  {
    period: "Research",
    phase: "2023 — 2025",
    title: "Wireless security deep-dive",
    description:
      "Built WiFi-RainbowBuffer — an open-source automated WPA/WPS assessment tool — turning months of protocol study into a repeatable, documented piece of software. Learned airbase-ng, PMKID capture, WPS Pixie Dust, and GPU-accelerated cracking inside out, and published the workflow so other researchers could build on it.",
    tags: ["WPA2", "WPS Pixie Dust", "aircrack-ng", "hashcat", "Open Source"],
  },
  {
    period: "Expansion",
    phase: "2025 — 2026",
    title: "OSINT & threat intelligence",
    description:
      "Expanded into open-source intelligence platforms and global monitoring tooling. Learned how public signals — from corporate jet trackers to seismic feeds — quietly feed threat intelligence workflows. Worked on research platforms that surface correlations across disparate data sources and practiced turning noise into actionable recon.",
    tags: ["OSINT", "Threat Intelligence", "Reconnaissance", "Research"],
  },
  {
    period: "Present",
    phase: "2026 — Today",
    title: "Web application security focus",
    description:
      "Sharpening web application security testing end-to-end: OWASP methodologies, Burp Suite professional workflows, API testing, and building tooling around every lesson learned. Focused on delivering authorized assessments that produce clear, prioritized findings with real business impact and a straight remediation path.",
    tags: ["Web App Security", "OWASP", "Burp Suite", "APIs", "Reporting"],
  },
] as const;

export type TimelinePhase = (typeof timeline)[number];