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
      "Full security audit of web applications and APIs — mapping the attack surface, testing OWASP Top 10 risks, validating findings against real-world exploitability, and producing a prioritized report you can actually act on.",
    deliverables: [
      "Attack surface mapping & threat modeling",
      "Complete OWASP Top 10 coverage (injection, XSS, broken auth, SSRF, etc.)",
      "API endpoint and business-logic testing",
      "Prioritized findings with reproducible proof-of-concepts",
      "Executive summary for stakeholders",
      "Remediation roadmap with step-by-step guidance",
    ],
    tools: ["Burp Suite", "OWASP ZAP", "Kali Linux", "Custom Python scripts"],
    icon: "shield",
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing",
    description:
      "Structured, authorized penetration tests across web, network, and wireless surfaces — from reconnaissance and OSINT to exploitation and a clean, prioritized final report your team can work with.",
    deliverables: [
      "Full reconnaissance, OSINT & fingerprinting",
      "Vulnerability identification and chain-of-exploitation validation",
      "Proof-of-concept demonstrations and risk scoring",
      "Executive summary plus detailed technical annex",
      "Remediation roadmap with prioritized fixes",
      "Post-engagement retest to confirm closure",
    ],
    tools: ["Metasploit", "Nmap", "Burp Suite", "Custom tooling"],
    icon: "target",
  },
  {
    id: "wireless-security",
    title: "WiFi & Wireless Security Testing",
    description:
      "Assessment of wireless LAN and device security — handshake capture and analysis, WPA/WPA2 configuration review, rogue access-point detection, and WPS deployment testing, always inside an authorized scope.",
    deliverables: [
      "Wireless network reconnaissance and site survey",
      "WPA/WPA2 handshake and PMKID analysis",
      "WPS configuration assessment and attack simulation",
      "Detection and reporting of weak wireless configurations",
      "Hardening recommendations with remediation steps",
    ],
    tools: ["aircrack-ng", "hashcat", "reaver", "WiFi RainbowBuffer"],
    icon: "wifi",
  },
  {
    id: "vulnerability-assessment",
    title: "Vulnerability Assessment & Scanning",
    description:
      "Continuous-style security scanning plus configuration review for applications and Linux systems — finding exposed services, known CVEs, and hardening gaps before an attacker does.",
    deliverables: [
      "Automated and manual scanning strategy",
      "Configuration and hardening review across systems",
      "Prioritized CVE and misconfiguration report",
      "Remediation guidance mapped to business risk",
      "Re-test to confirm each finding is closed",
    ],
    tools: ["Kali Linux", "Nmap", "Nuclei", "Lynis"],
    icon: "scan",
  },
  {
    id: "security-tooling",
    title: "Security Tooling & Automation",
    description:
      "Custom automation for security research and testing teams — Python-based scanners, wordlist generators, workflow scripts, and CI-friendly security utilities that make daily work repeatable and documented.",
    deliverables: [
      "Custom scanning, parsing, and automation scripts",
      "Workflow automation tailored to the team",
      "Complete tool documentation and installation guides",
      "Maintainable, documented, and version-controlled code",
    ],
    tools: ["Python", "C", "Bash", "GitHub Actions"],
    icon: "braces",
  },
  {
    id: "training",
    title: "Security Training & Mentoring",
    description:
      "Practical, lab-driven training on ethical hacking, penetration testing fundamentals, and Kali Linux — built from real tooling experience and designed for developers who want real skill, not just theory.",
    deliverables: [
      "Penetration testing fundamentals and methodology",
      "Kali Linux and command-line fluency",
      "Hands-on labs with authorized targets",
      "Career guidance into offensive security",
    ],
    tools: ["Kali Linux", "TryHackMe-style labs", "Custom walkthroughs"],
    icon: "graduation",
  },
  {
    id: "incident-response",
    title: "Incident Response & Forensics",
    description:
      "When something breaks — logs, network traces, filesystem artifacts. Quick triage, root-cause analysis, and a clear post-incident report with containment and hardening steps.",
    deliverables: [
      "Incident triage and timeline reconstruction",
      "Log, network, and filesystem artifact analysis",
      "Containment and eradication guidance",
      "Post-incident report and hardening roadmap",
      "Retest to confirm the incident is fully resolved",
    ],
    tools: ["Linux", "Wireshark", "Nmap", "Custom tooling"],
    icon: "scan",
  },
  {
    id: "compliance-audit",
    title: "Compliance Security Audit",
    description:
      "Security readiness checks against common frameworks — mapping controls, testing gaps, and producing the evidence and remediation plan needed for audits like SOC 2, ISO 27001, and PCI-DSS.",
    deliverables: [
      "Framework control mapping and gap analysis",
      "Technical evidence collection and documentation",
      "Security control testing and validation",
      "Remediation plan aligned to audit criteria",
      "Ready-to-share compliance evidence package",
    ],
    tools: ["Nmap", "Kali Linux", "Custom scripts", "Audit frameworks"],
    icon: "shield",
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
      "Authorized targets, boundaries, testing windows, and reporting formats are agreed before anything runs. No engagement starts without explicit written permission — full stop.",
  },
  {
    number: "02",
    title: "Reconnaissance & Mapping",
    description:
      "Open-source intelligence, fingerprinting, and attack surface discovery to understand the environment, prioritize high-value entry points, and plan efficient testing.",
  },
  {
    number: "03",
    title: "Assessment & Exploitation",
    description:
      "Careful, manual-driven testing with automated support. Every automated signal is verified by hand and findings are chained to prove real impact — never just a scan dump.",
  },
  {
    number: "04",
    title: "Reporting & Remediation",
    description:
      "Clear, prioritized findings with reproducible evidence, business impact, and step-by-step remediation guidance — plus an executive summary for stakeholders who don't need the technical raw output.",
  },
  {
    number: "05",
    title: "Retest & Closure",
    description:
      "A focused retest confirms each finding is fixed and nothing new was introduced. Final closure report so you have documented proof the risk is resolved.",
  },
] as const;

export const ethicsNote =
  "Every engagement is performed strictly under authorization. Security testing is conducted only against systems you own or have written permission to test, following responsible-disclosure principles.";

export const engagementOptions = [
  {
    name: "Single Audit",
    target: "Best for pre-launch checks and investor-ready software",
    points: [
      "Focused web app, API, or infrastructure review",
      "OWASP Top 10 coverage with validated findings",
      "Prioritized report with reproducible proof-of-concepts",
      "One remediation roadmap and one retest window",
    ],
    timeline: "1–2 weeks",
  },
  {
    name: "Full Penetration Test",
    target: "Best for production apps and compliance-driven teams",
    points: [
      "Web + API + network + optional wireless scope",
      "Manual-driven exploitation — not scan dumps",
      "Chained attacks validated to real business impact",
      "Executive summary plus technical annex and retest",
    ],
    timeline: "2–4 weeks",
  },
  {
    name: "Retainer & Team Support",
    target: "Best for teams that keep shipping",
    points: [
      "Continuous scanning and change-validation",
      "Retesting on every release cycle",
      "Custom security tooling and automation",
      "Security training and mentoring for the team",
    ],
    timeline: "Ongoing",
  },
] as const;