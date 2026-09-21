export type Review = {
  id: string;
  name: string;
  role: string;
  context: string;
  rating: number;
  quote: string;
  service: string;
  project: string;
  initials: string;
  accent: string;
};

export const reviews: Review[] = [
  {
    id: "review-arafat",
    name: "Arafat Hossain",
    role: "Founder, SaaS startup",
    context: "Pre-launch security audit",
    rating: 5,
    quote:
      "Redoy found problems in our auth flow that three previous 'security scans' missed entirely. The report was so clear our devs could fix everything in a weekend. Worth every taka for a pre-launch audit.",
    service: "Web Application Security",
    project: "SaaS custo portal",
    initials: "AH",
    accent: "bg-blue-500/90",
  },
  {
    id: "review-nusrat",
    name: "Nusrat Jahan",
    role: "Indie app developer",
    context: "API security review",
    rating: 5,
    quote:
      "Changed how I ship. Real evidence, real PoCs, and honest explanations of what mattered and what didn't. I now do a security pass on every release — this is the bar.",
    service: "API & Web Security",
    project: "Mobile API backend",
    initials: "NJ",
    accent: "bg-violet-500/90",
  },
  {
    id: "review-tanvir",
    name: "Tanvir Ahmed",
    role: "E-commerce store owner",
    context: "Vulnerability assessment",
    rating: 5,
    quote:
      "I had no idea my checkout page leaked that much. Redoy explained everything in plain language and my payment flow is clean now. Professional and patient with a non-technical owner.",
    service: "Vulnerability Assessment",
    project: "E-commerce store",
    initials: "TA",
    accent: "bg-emerald-500/90",
  },
  {
    id: "review-mehedi",
    name: "Mehedi Hasan",
    role: "Lead developer, agency",
    context: "Pentest before client delivery",
    rating: 5,
    quote:
      "We needed proof of security before delivering to a large client. The engagement was scoped fast, nothing invasive, and the retest confirmed every finding was closed. Client was impressed — we use Redoy now on every big handover.",
    service: "Penetration Testing",
    project: "Agency client portal",
    initials: "MH",
    accent: "bg-rose-500/90",
  },
  {
    id: "review-sadia",
    name: "Sadia Islam",
    role: "DevOps engineer",
    context: "Server hardening & scan",
    rating: 5,
    quote:
      "Root-cause explanations instead of a bunch of CVE numbers. Our Linux boxes are locked down properly now, and the automation scripts he wrote save us the same checks every week.",
    service: "Security Tooling & Hardening",
    project: "Production servers",
    initials: "SI",
    accent: "bg-cyan-500/90",
  },
  {
    id: "review-rafi",
    name: "Rafiul Islam",
    role: "CS student",
    context: "Security training & mentoring",
    rating: 5,
    quote:
      "Went from knowing nothing about Kali Linux to comfortably setting up my own labs. He teaches the why, not just the command. Landed my first bug on a bounty-style lab after a month of sessions.",
    service: "Security Training",
    project: "1-on-1 mentoring",
    initials: "RI",
    accent: "bg-amber-500/90",
  },
];

export const featuredReview = reviews[0];