export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  date: string;
  readingTime: string;
  tags: string[];
  featured: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "wifi-pentesting-from-scratch",
    title: "WiFi Penetration Testing From Scratch",
    description:
      "Step-by-step notes on setting up an authorized WiFi assessment — client detection, handshake capture, and cracking with aircrack-ng and hashcat.",
    longDescription:
      "This post walks through a full, authorized WiFi penetration testing engagement: selecting the right adapter, putting it into monitor mode, detecting connected clients, performing a deauthentication to capture the WPA2 four-way handshake, and cracking it offline with aircrack-ng or hashcat. It also covers PMKID capture as a no-client alternative and shares practical tips on filtering noise and organizing output.",
    date: "September 2026",
    readingTime: "12 min read",
    tags: ["WiFi", "Penetration Testing", "aircrack-ng", "hashcat", "Practical"],
    featured: true,
  },
  {
    slug: "owasp-top-10-practical-notes",
    title: "OWASP Top 10 — Practical Notes",
    description:
      "Concrete observations on injection, XSS, broken authentication, and SSRF — with the kind of real findings that actually show up in audits.",
    longDescription:
      "A practical, findings-first look at the OWASP Top 10: how each weakness typically appears, what it looks like during testing, and what a valid proof-of-concept requires. Includes examples of injection, XSS, broken authentication, insecure deserialization, SSRF, and security misconfiguration — drawn from real engagements where the scan report alone wasn't enough to prove risk.",
    date: "August 2026",
    readingTime: "10 min read",
    tags: ["OWASP", "Web Security", "Findings", "Practical"],
    featured: true,
  },
  {
    slug: "osint-for-reconnaissance",
    title: "OSINT for Reconnaissance",
    description:
      "How open-source signals — DNS, certificates, GitHub, and public registries — build a clean attack surface map before any scanning starts.",
    longDescription:
      "Before any tool touches a target, the best pentesters already know what's visible. This post shares the OSINT workflow I use to build an attack surface map: DNS and WHOIS enumeration, certificate transparency logs, GitHub dorking, and public registry checks. The result is a prioritized list of entry points and a documented scope — so every scan that follows has direction.",
    date: "July 2026",
    readingTime: "8 min read",
    tags: ["OSINT", "Reconnaissance", "Methodology", "Practical"],
    featured: false,
  },
  {
    slug: "python-security-tooling",
    title: "Building Security Tools With Python",
    description:
      "Practical patterns for writing security automation in Python — from script structure and argument parsing to output and CI-friendly design.",
    longDescription:
      "Python is the language most security tooling is written in, and the same patterns apply whether you're writing a scanner or a wordlist generator. This post covers the practical lessons: clean argument parsing, logging instead of prints, structured JSON output, reusable modules, and designing scripts that fit naturally into a CI pipeline. Includes small, documented examples you can adapt.",
    date: "June 2026",
    readingTime: "9 min read",
    tags: ["Python", "Automation", "Tooling", "Practice"],
    featured: false,
  },
  {
    slug: "api-security-checklist",
    title: "API Security Checklist",
    description:
      "The checks I run on every API assessment — authentication, authorization, input validation, rate limiting, and common business-logic flaws.",
    longDescription:
      "APIs are the backbone of modern applications and a favorite surface for attackers. This checklist covers the checks I run on every API assessment: broken object-level authorization, excessive data exposure, broken authentication, mass assignment, security misconfiguration, and rate-limiting bypasses. Each item includes a short test case so you can reproduce findings quickly.",
    date: "May 2026",
    readingTime: "7 min read",
    tags: ["API", "Security", "Checklist", "Practical"],
    featured: false,
  },
  {
    slug: "linux-terminal-for-security",
    title: "The Linux Terminal for Security Work",
    description:
      "Essential commands, workflows, and tips for moving efficiently through Linux during assessments — the daily driver toolkit.",
    longDescription:
      "The terminal is where every assessment starts. This post collects the essential commands and workflows I reach for daily: file and process inspection, network analysis with ss and ip, service enumeration, log analysis, and quick scripting tricks that turn a tedious task into a one-liner. Practical, command-first, and focused on what actually speeds up real work.",
    date: "April 2026",
    readingTime: "8 min read",
    tags: ["Linux", "Terminal", "Workflow", "Practical"],
    featured: false,
  },
  {
    slug: "incident-response-basics",
    title: "Incident Response Basics",
    description:
      "How to triage, reconstruct timelines, and document findings when something goes wrong — a practical framework for SOC work.",
    longDescription:
      "When an alert fires, the first hours matter. This post covers the basics of incident response: triage and scope, timeline reconstruction from logs and network traces, containment steps, and how to write a post-incident report that actually helps the team harden their defenses. Drawn from research and practical forensics workflows.",
    date: "March 2026",
    readingTime: "10 min read",
    tags: ["Incident Response", "Forensics", "SOC", "Practical"],
    featured: false,
  },
  {
    slug: "getting-started-with-kali",
    title: "Getting Started With Kali Linux",
    description:
      "A no-noise introduction to Kali Linux — the desktop, the tools, and the habits that make security work repeatable and well-documented.",
    longDescription:
      "Kali Linux is the daily driver for many security professionals, and getting comfortable with it early makes every assessment smoother. This post covers the essentials: setup, desktop and terminal workflows, the core toolset, documentation habits, and how to keep a clean, reproducible environment. Practical and written for someone stepping into security work.",
    date: "February 2026",
    readingTime: "6 min read",
    tags: ["Kali Linux", "Getting Started", "Practical", "Documentation"],
    featured: false,
  },
];

export const featuredPost = blogPosts.find((p) => p.featured) ?? blogPosts[0];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}