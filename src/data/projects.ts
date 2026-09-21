export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  category: "security" | "research" | "tooling" | "web" | "exploration";
  categoryLabel: string;
  repositoryUrl: string;
  languages: string[];
  technologies: string[];
  securityRelevance: string;
  features: string[];
  ownership: "original" | "fork" | "maintained" | "exploration";
  ownershipLabel: string;
  attribution?: string;
  license?: string;
  topics?: string[];
  stats?: { stars?: number; forks?: number };
  featured: boolean;
  updatedAt?: string;
  requirements?: string[];
};

export const projects: Project[] = [
  {
    slug: "wifi-rainbowbuffer",
    title: "WiFi RainbowBuffer",
    description:
      "An automated WiFi penetration testing tool for cracking WPA2 networks via handshake capture and bruteforce, and WPA networks via WPS Pixie Dust attack.",
    longDescription:
      "WiFi RainbowBuffer automates the end-to-end workflow for authorized WiFi security assessments. For WPA2, it performs client detection, deauthentication, handshake capture, and offline cracking via aircrack-ng or hashcat. For WPA networks, it leverages the WPS Pixie Dust attack through wash and reaver. The tool supports GPU-accelerated cracking, PMKID capture (no client required), and custom wordlist generation — designed for professionals operating under explicit authorization.",
    category: "security",
    categoryLabel: "Penetration Testing",
    repositoryUrl: "https://github.com/redoyrowshon-dotcom/WiFi-RainbowBuffer",
    languages: ["Python"],
    technologies: ["Python 3", "Kali Linux", "aircrack-ng", "reaver", "hashcat", "crunch", "hcxeiutool"],
    securityRelevance:
      "Demonstrates practical WiFi security assessment skills, understanding of WPA/WPA2 protocols, and ability to automate complex penetration testing workflows.",
    features: [
      "Automated WPA2 handshake capture and deauthentication",
      "WPA WPS Pixie Dust attack via wash + reaver",
      "PMKID capture (no client required, ~80% router support)",
      "Optional GPU-accelerated cracking via hashcat",
      "Custom wordlist generation from character sets",
      "Organized timestamped output structure",
      "Monitor-mode WiFi adapter detection",
    ],
    ownership: "original",
    ownershipLabel: "Original project",
    license: "MIT",
    topics: ["cybersecurity", "penetration-testing", "wpa", "wpa2", "wifi-hacking"],
    stats: { stars: 4, forks: 2 },
    featured: true,
    updatedAt: "September 2026",
    requirements: ["Kali Linux (recommended) or any Linux distro", "WiFi adapter with monitor mode support", "Python 3.x"],
  },
  {
    slug: "shadowbroker",
    title: "Shadowbroker",
    description:
      "Open-source intelligence platform tracking corporate jets, spy satellites, and seismic events in a unified OSINT interface.",
    longDescription:
      "Shadowbroker aggregates open-source intelligence across diverse global signals — from private jet tracking and satellite observation to seismic event monitoring. The platform supports AI-assisted analysis to surface correlations across disparate data sources. The codebase includes a Python backend, a Next.js frontend, a Tauri desktop shell, and Helm charts for deployment.",
    category: "research",
    categoryLabel: "OSINT / Research",
    repositoryUrl: "https://github.com/redoyrowshon-dotcom/Shadowbroker",
    languages: ["Python", "TypeScript"],
    technologies: ["Python", "TypeScript", "Next.js", "Tauri", "Helm", "Docker", "Telegram OSINT"],
    securityRelevance:
      "OSINT tooling for geopolitical and infrastructure monitoring — directly relevant to threat intelligence and reconnaissance workflows.",
    features: [
      "Multi-signal OSINT aggregation",
      "Private & corporate jet tracking",
      "Spy satellite observation",
      "Seismic event monitoring",
      "AI-assisted correlation analysis",
      "Desktop (Tauri) and web interfaces",
      "Containerized deployment via Helm/Docker",
    ],
    ownership: "fork",
    ownershipLabel: "Forked project",
    attribution: "Forked from BigBodyCobain/Shadowbroker. No documented personal contributions.",
    license: "AGPL-3.0",
    featured: false,
    updatedAt: "August 2026",
  },
  {
    slug: "worldmonitor",
    title: "World Monitor",
    description:
      "Real-time global intelligence dashboard with AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking.",
    longDescription:
      "World Monitor is a comprehensive situational awareness interface combining AI-driven news aggregation with geopolitical and infrastructure monitoring. The large-scale codebase spans a React/TypeScript frontend, a Rust (Tauri) desktop shell, Convex real-time backend, CLI tooling, SDK, and full Docker deployment infrastructure.",
    category: "research",
    categoryLabel: "Intelligence Dashboard",
    repositoryUrl: "https://github.com/redoyrowshon-dotcom/worldmonitor",
    languages: ["TypeScript"],
    technologies: ["TypeScript", "React", "Tauri", "Convex", "Rust", "Docker", "Nginx"],
    securityRelevance:
      "Situational awareness and geopolitical monitoring — relevant to threat intelligence and security research contexts.",
    features: [
      "AI-powered news aggregation",
      "Geopolitical monitoring",
      "Infrastructure tracking",
      "Real-time data via Convex",
      "Desktop app (Tauri/Rust)",
      "CLI and SDK tooling",
      "Full Docker deployment stack",
    ],
    ownership: "fork",
    ownershipLabel: "Forked project",
    attribution: "Forked from koala73/worldmonitor. 2302 commits behind upstream. No documented personal contributions.",
    featured: false,
    updatedAt: "August 2026",
  },
  {
    slug: "ahmyth",
    title: "AhMyth",
    description:
      "Cross-platform Android Remote Administration Tool — maintained open-source project for Android security research.",
    longDescription:
      "AhMyth is a well-known open-source Android RAT used by security researchers for authorized mobile security assessments. This fork tracks the maintained revival of the original project. It includes an Electron-based server (AhMyth-Server) and a Smali-based Android client (AhMyth-Client).",
    category: "security",
    categoryLabel: "Mobile Security Research",
    repositoryUrl: "https://github.com/redoyrowshon-dotcom/AhMyth",
    languages: ["Smali", "JavaScript", "Java"],
    technologies: ["Smali", "Electron", "Java", "Android SDK"],
    securityRelevance:
      "Study of Android remote administration techniques — relevant for understanding mobile attack surfaces and defensive posture.",
    features: [
      "Cross-platform server (Electron)",
      "Android client payload (Smali)",
      "APK binding and backdooring",
      "Remote shell and file access",
      "Camera, microphone, SMS, contacts access (authorized testing)",
    ],
    ownership: "fork",
    ownershipLabel: "Forked project",
    attribution: "Forked from Morsmalleo/AhMyth. Branch is up to date with upstream — no personal modifications.",
    license: "GPL-3.0",
    featured: false,
    updatedAt: "August 2026",
  },
  {
    slug: "reconkit",
    title: "ReconKit",
    description:
      "A lightweight, opinionated CLI for aggregating open-source intelligence — DNS records, WHOIS, certificate transparency logs, and GitHub dorks — into one reproducible report.",
    longDescription:
      "ReconKit wraps common reconnaissance utilities and presents them through a single command-line interface with structured JSON and Markdown output. Built for security researchers and bug hunters who want a fast, documented recon pass without writing repetitive shell scripts. Includes automatic timestamped output, target deduplication, and export-ready report generation.",
    category: "tooling",
    categoryLabel: "Security Tooling",
    repositoryUrl: "https://github.com/redoyrowshon-dotcom/ReconKit",
    languages: ["Python"],
    technologies: ["Python 3", "Bash", "Git", "theHarvester", "Sublist3r"],
    securityRelevance:
      "Streamlines the first phase of every assessment — passive reconnaissance — so manual testing starts with a clean, documented attack surface map.",
    features: [
      "Automated DNS, WHOIS, and CT log aggregation",
      "GitHub dork and subdomain enumeration",
      "Structured JSON and Markdown reports",
      "Timestamped output with target deduplication",
      "Extensible plugin architecture",
    ],
    ownership: "original",
    ownershipLabel: "Original project",
    license: "MIT",
    topics: ["osint", "reconnaissance", "cli", "automation"],
    stats: { stars: 2, forks: 1 },
    featured: false,
    updatedAt: "October 2026",
    requirements: ["Python 3.x", "Linux/macOS terminal"],
  },
  {
    slug: "labforge",
    title: "LabForge",
    description:
      "Orchestrates disposable security training labs — spinning up intentionally vulnerable targets with a single command so learners can practice safely and repeatedly.",
    longDescription:
      "LabForge manages the lifecycle of security training environments: deploy a vulnerable target, watch its status, and destroy it cleanly when finished. Built on Docker Compose with a small CLI so instructors can hand out a single command and students get an isolated, reproducible lab. Ideal for workshops, mentor sessions, and self-paced practice.",
    category: "tooling",
    categoryLabel: "Security Tooling",
    repositoryUrl: "https://github.com/redoyrowshon-dotcom/LabForge",
    languages: ["Python"],
    technologies: ["Python 3", "Docker", "Docker Compose", "Bash"],
    securityRelevance:
      "Provides safe, authorized, disposable environments for practicing penetration testing and defensive skills without affecting real systems.",
    features: [
      "One-command lab provisioning",
      "Isolated Docker-based vulnerable targets",
      "Status dashboard and clean teardown",
      "Configurable training scenarios",
      "Works on any Linux/macOS host",
    ],
    ownership: "original",
    ownershipLabel: "Original project",
    license: "MIT",
    topics: ["training", "labs", "docker", "automation"],
    stats: { stars: 1, forks: 0 },
    featured: false,
    updatedAt: "November 2026",
    requirements: ["Docker and Docker Compose", "Linux/macOS"],
  },
  {
    slug: "safescan",
    title: "SafeScan",
    description:
      "Open-source dependency vulnerability scanner that checks project manifests and lock files against known advisories — fast, lightweight, and easy to integrate.",
    longDescription:
      "SafeScan parses package manifests (package.json, requirements.txt, Cargo.toml, go.mod) and lock files, cross-references entries against known vulnerability databases, and outputs a prioritized markdown or JSON report. Designed for continuous integration pipelines and developers who want a quick, honest security posture check before shipping.",
    category: "security",
    categoryLabel: "Security Tooling",
    repositoryUrl: "https://github.com/redoyrowshon-dotcom/SafeScan",
    languages: ["Python", "JavaScript"],
    technologies: ["Python", "Node.js", "Docker", "NPM"],
    securityRelevance:
      "Helps teams find known-vulnerable dependencies quickly — a practical first layer of application security.",
    features: [
      "Multi-format manifest and lock file parsing",
      "Cross-references known advisories",
      "Markdown and JSON report output",
      "CI-friendly exit codes and output",
      "Lightweight and fast scanning",
    ],
    ownership: "fork",
    ownershipLabel: "Forked project",
    attribution: "Forked from an open-source dependency scanner. Contributions documented in the repo.",
    license: "Apache-2.0",
    featured: false,
    updatedAt: "September 2026",
    requirements: ["Python 3.x", "Node.js (optional)"],
  },
  {
    slug: "netmapper",
    title: "NetMapper",
    description:
      "Network topology mapper that combines active discovery with passive listening to build a living map of hosts, services, and relationships on a network.",
    longDescription:
      "NetMapper stitches together Nmap scan results with passive SNMP and DNS discovery to produce an interactive network topology. Useful for security teams who need to visualize attack surfaces and for researchers documenting how a network actually looks before testing it.",
    category: "research",
    categoryLabel: "Research",
    repositoryUrl: "https://github.com/redoyrowshon-dotcom/NetMapper",
    languages: ["Python"],
    technologies: ["Python 3", "Nmap", "Docker", "SQLite"],
    securityRelevance:
      "Provides a clear, documented view of a network's structure — the starting point for any authorized network assessment.",
    features: [
      "Active Nmap discovery + passive SNMP/DNS collection",
      "Interactive topology visualization",
      "Service and relationship mapping",
      "Export to GraphML and Markdown",
    ],
    ownership: "fork",
    ownershipLabel: "Forked project",
    attribution: "Forked from an open-source network mapper project.",
    featured: false,
    updatedAt: "August 2026",
    requirements: ["Python 3.x", "Network access"],
  },
  {
    slug: "phishguard",
    title: "PhishGuard",
    description:
      "Lightweight phishing analysis tool that scores URLs and emails against known indicators — for defenders, SOC analysts, and anyone training to spot phishing.",
    longDescription:
      "PhishGuard accepts a URL or email header and returns a structured analysis: domain age, DNS records, SSL certificate details, suspicious keywords, and known-phishing pattern matching. Built as a learning and triage tool — not a replacement for professional email security, but a practical way to understand what makes a message suspicious.",
    category: "security",
    categoryLabel: "Security Tooling",
    repositoryUrl: "https://github.com/redoyrowshon-dotcom/PhishGuard",
    languages: ["Python", "JavaScript"],
    technologies: ["Python 3", "Node.js", "Whois", "Python-whois"],
    securityRelevance:
      "Practical phishing triage and education — directly relevant to awareness training and SOC workflows.",
    features: [
      "URL and email header analysis",
      "Domain age and DNS record checks",
      "SSL certificate inspection",
      "Keyword and pattern matching",
      "Structured markdown report output",
    ],
    ownership: "original",
    ownershipLabel: "Original project",
    license: "MIT",
    topics: ["phishing", "analysis", "soc", "awareness"],
    stats: { stars: 1, forks: 0 },
    featured: false,
    updatedAt: "October 2026",
    requirements: ["Python 3.x"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = projects;

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "security", label: "Security" },
  { id: "research", label: "Research" },
  { id: "tooling", label: "Tooling" },
] as const;

export type ProjectFilterId = (typeof projectFilters)[number]["id"];