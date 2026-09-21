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
  stats?: {
    stars?: number;
    forks?: number;
  };
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
    technologies: [
      "Python 3",
      "Kali Linux",
      "aircrack-ng",
      "reaver",
      "hashcat",
      "crunch",
      "hcxeiutool",
    ],
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
    requirements: [
      "Kali Linux (recommended) or any Linux distro",
      "WiFi adapter with monitor mode support",
      "Python 3.x",
    ],
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
    technologies: [
      "Python",
      "TypeScript",
      "Next.js",
      "Tauri",
      "Helm",
      "Docker",
      "Telegram OSINT",
    ],
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
    attribution:
      "Forked from BigBodyCobain/Shadowbroker. No documented personal contributions.",
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
    technologies: [
      "TypeScript",
      "React",
      "Tauri",
      "Convex",
      "Rust",
      "Docker",
      "Nginx",
    ],
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
    attribution:
      "Forked from koala73/worldmonitor. 2302 commits behind upstream. No documented personal contributions.",
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
    attribution:
      "Forked from Morsmalleo/AhMyth. Branch is up to date with upstream — no personal modifications.",
    license: "GPL-3.0",
    featured: false,
    updatedAt: "August 2026",
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
