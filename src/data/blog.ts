export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; label: string; code: string }
  | { type: "callout"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  featured?: boolean;
  blocks: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "wifi-pentesting-from-scratch",
    title: "WiFi Penetration Testing, From Scratch",
    description:
      "A practical walkthrough of the authorized wireless assessment workflow — from adapter setup and handshake capture to offline cracking — inspired by building WiFi-RainbowBuffer.",
    date: "September 2026",
    readingTime: "8 min",
    tags: ["WiFi", "Penetration Testing", "Kali Linux"],
    featured: true,
    blocks: [
      {
        type: "paragraph",
        text: "Wireless networks are a favorite entry point in many assessments — invisible, always-on, and frequently misconfigured. This guide covers the honest, lab-based workflow of a wireless security check, always against equipment you own or are explicitly authorized to test.",
      },
      { type: "heading", text: "What you actually need" },
      {
        type: "list",
        items: [
          "A wireless adapter with monitor mode support",
          "Kali Linux (or any Linux distro with the aircrack-ng stack)",
          "A lab router you own — never a third party's network",
          "Patience. Cracking is a statistics game, not magic.",
        ],
      },
      { type: "heading", text: "The workflow" },
      {
        type: "paragraph",
        text: "The assessment boils down to a few steps: put the adapter in monitor mode, discover nearby access points, capture a handshake (or PMKID), and take the hash offline for cracking. Automation wires these steps together so a tester can focus on analysis instead of typing the same commands repeatedly.",
      },
      {
        type: "code",
        label: "Monitor mode on a wireless adapter",
        code: "sudo ip link set wlan0 down\nsudo iw dev wlan0 set type monitor\nsudo ip link set wlan0 up\nsudo airmon-ng check kill",
      },
      { type: "heading", text: "Defending what you learned" },
      {
        type: "paragraph",
        text: "Everything learned here flips into the defensive playbook: use WPA2/WPA3 with a strong passphrase, disable WPS where possible, and segment IoT devices. It is the same checklist I applied when building WiFi-RainbowBuffer.",
      },
      {
        type: "callout",
        text: "This article is for education and authorized testing only. Running these techniques on networks you do not own is illegal in most jurisdictions.",
      },
    ],
  },
  {
    slug: "owasp-top-10-practical-notes",
    title: "OWASP Top 10: Practical Testing Notes",
    description:
      "Hands-on notes on testing the most common web application risks — injection, broken authentication, XSS, and more — with a Burp Suite workflow.",
    date: "August 2026",
    readingTime: "6 min",
    tags: ["OWASP", "Web Security", "Burp Suite"],
    blocks: [
      {
        type: "paragraph",
        text: "The OWASP Top 10 is not the whole story of web security, but it is an excellent checklist for where to look first on any web application assessment. These are the notes I use when walking through a test.",
      },
      { type: "heading", text: "Broken Access Control" },
      {
        type: "paragraph",
        text: "The top item on the list — and the one most often found. Test every authenticated resource as an unauthenticated user, and every role against the other roles. If an ID is in the URL, try changing it.",
      },
      { type: "heading", text: "Injection" },
      {
        type: "list",
        items: [
          "Probe every input parameter, header, and cookie",
          "Look for error-based and boolean-based behaviors",
          "Check stored data for second-order injection",
          "Always confirm impact with a safe, reversible payload",
        ],
      },
      { type: "heading", text: "A minimal Burp workflow" },
      {
        type: "code",
        label: "Mental checklist",
        code: "1. Map endpoints (site map + JS analysis)\n2. Check authz on every endpoint\n3. Intercept and fuzz parameters\n4. Validate each finding manually\n5. Write PoC + business impact",
      },
      {
        type: "callout",
        text: "Scanner output is a starting point, not a verdict. Every finding should be validated by hand before it reaches a report.",
      },
    ],
  },
  {
    slug: "osint-for-reconnaissance",
    title: "OSINT for Reconnaissance: Gathering Smarter",
    description:
      "How open-source intelligence fits into the reconnaissance phase of an engagement — sources, workflow, and knowing what is legal to collect.",
    date: "July 2026",
    readingTime: "5 min",
    tags: ["OSINT", "Reconnaissance", "Research"],
    blocks: [
      {
        type: "paragraph",
        text: "Reconnaissance is where engagements are won. Open-source intelligence (OSINT) — collecting from public sources — gives you a map of the target before a single packet is sent.",
      },
      { type: "heading", text: "Where to look first" },
      {
        type: "list",
        items: [
          "Company and personal websites, including sitemaps and robots.txt",
          "Public code repositories and commit history",
          "DNS and certificate transparency logs",
          "Public datasets — from satellite signals to infrastructure leaks",
        ],
      },
      { type: "heading", text: "Staying on the right side" },
      {
        type: "paragraph",
        text: "There is a line between public information and intrusive targeting. OSINT for legitimate engagements uses sources available to anyone, respects privacy expectations, and never involves phishing or social engineering of unrelated individuals.",
      },
      {
        type: "paragraph",
        text: "The same mindset carried into Shadowbroker, where diverse public signals — aircraft, satellite, seismic activity — are aggregated into a single intelligence surface.",
      },
    ],
  },
  {
    slug: "python-security-tooling",
    title: "Building Security Tooling with Python",
    description:
      "Lessons from shipping real security automation — from argument parsing to organized output — and why the boring parts matter most.",
    date: "June 2026",
    readingTime: "7 min",
    tags: ["Python", "Tooling", "Automation"],
    blocks: [
      {
        type: "paragraph",
        text: "Eventually every security tester starts writing their own tools. Python is the fastest path from problem to working script, but good security tooling is about the unglamorous details.",
      },
      { type: "heading", text: "Design for the operator" },
      {
        type: "list",
        items: [
          "Clear CLI flags with sensible defaults",
          "Pre-flight environment checks (adapters, permissions, tools)",
          "Organized, timestamped output directories",
          "Graceful failure messages instead of tracebacks",
        ],
      },
      { type: "heading", text: "The boring parts are the product" },
      {
        type: "paragraph",
        text: "WiFi-RainbowBuffer taught me that the value was not the attack itself but the orchestration: detecting the right adapter, generating wordlists, structuring results. Operators should not have to read your source to use your tool safely.",
      },
      {
        type: "code",
        label: "Architecture sketch",
        code: "CLI parser  ->  environment checks  ->  phase runner\n    (detect tools/adapters)        (capture / crack / report)\n\nEach phase writes to ./output/<timestamp>/ and\nlogs to stdout with a consistent prefix.",
      },
    ],
  },
] as const;

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];