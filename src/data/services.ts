export type Service = {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  tools: string[];
  icon: string;
};

export const services: Service[] = [
  {
    id: "web-application-security",
    title: "Web Application Security Audit",
    description:
      "Methodical security testing of web applications and APIs — mapping the attack surface, testing OWASP Top 10 risks, and validating findings against real-world exploitability.",
    deliverables: [
      "Attack surface mapping & threat modeling",
      "OWASP Top 10 coverage (injection, XSS, broken auth, etc.)",
      "API endpoint and business-logic testing",
      "Prioritized findings with reproducible PoCs",
    ],
    tools: ["Burp Suite", "OWASP ZAP", "Kali Linux", "Custom Python scripts"],
    icon: "shield",
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing",
    description:
      "Structured, authorized penetration tests across web, network, and wireless surfaces — from reconnaissance and OSINT to exploitation and clean reporting.",
    deliverables: [
      "Reconnaissance, OSINT & fingerprinting",
      "Vulnerability identification and exploitation",
      "Validated PoCs and business-risk scoring",
      "Executive summary + remediation roadmap",
    ],
    tools: ["Metasploit", "Nmap", "Burp Suite", "Custom tooling"],
    icon: "target",
  },
  {
    id: "wireless-security",
    title: "WiFi & Wireless Security Testing",
    description:
      "Assessment of wireless LAN security: handshake capture, WPA/WPA2 configuration review, rogue AP detection, and testing of WPS-enabled deployments — always within authorized scope.",
    deliverables: [
      "Wireless network reconnaissance",
      "WPA2 handshake & PMKID analysis",
      "WPS configuration assessment",
      "Detection and reporting of weak configurations",
    ],
    tools: ["aircrack-ng", "hashcat", "reaver", "WiFi RainbowBuffer"],
    icon: "wifi",
  },
  {
    id: "vulnerability-assessment",
    title: "Vulnerability Assessment & Scanning",
    description:
      "Continuous-style security scanning and configuration review of applications and Linux systems to identify exposed services, known CVEs, and hardening gaps.",
    deliverables: [
      "Automated + manual scanning strategy",
      "Configuration & hardening review",
      "Prioritized CVE and misconfiguration report",
      "Re-testing to confirm remediation",
    ],
    tools: ["Kali Linux", "Nmap", "Nuclei", "Lynis"],
    icon: "scan",
  },
  {
    id: "security-tooling",
    title: "Security Tooling & Automation",
    description:
      "Development of custom automation for security research teams — Python-based scanners, wordlist generators, workflow scripts, and CI-friendly security utilities.",
    deliverables: [
      "Custom scanning/parsing scripts",
      "Workflow automation for security teams",
      "Tool documentation & installation guides",
      "Maintainable, documented code",
    ],
    tools: ["Python", "C", "Bash", "GitHub Actions"],
    icon: "braces",
  },
  {
    id: "training",
    title: "Security Training & Mentoring",
    description:
      "Beginner-friendly training on ethical hacking, penetration testing fundamentals, and using Kali Linux — based on practical, lab-driven learning built from real tooling experience.",
    deliverables: [
      "Penetration testing fundamentals",
      "Kali Linux & command-line fluency",
      "Hands-on labs with authorized targets",
      "Career guidance into offensive security",
    ],
    tools: ["Kali Linux", "TryHackMe-style labs", "Custom walkthroughs"],
    icon: "graduation",
  },
] as const;

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Scope & Rules of Engagement",
    description:
      "Authorized targets, boundaries, testing windows, and reporting formats are agreed before anything runs. No engagement starts without explicit permission.",
  },
  {
    number: "02",
    title: "Reconnaissance & Mapping",
    description:
      "Open-source intelligence, fingerprinting, and attack surface discovery to understand the environment and prioritize high-value entry points.",
  },
  {
    number: "03",
    title: "Assessment & Exploitation",
    description:
      "Careful, manual-driven testing with automated support. Findings are validated and chained to prove real impact — never just a scan dump.",
  },
  {
    number: "04",
    title: "Reporting & Remediation",
    description:
      "Clear, prioritized findings with reproducible evidence, business impact, and step-by-step remediation guidance for your team.",
  },
];

export const ethicsNote =
  "Every engagement is performed strictly under authorization. Security testing is conducted only against systems you own or have written permission to test, following responsible-disclosure principles.";