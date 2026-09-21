export type ToolCategory = {
  id: string;
  label: string;
  blurb: string;
  tools: string[];
};

export const toolCategories: ToolCategory[] = [
  {
    id: "platform",
    label: "Platforms & OS",
    blurb: "The environments where most assessments run.",
    tools: ["Kali Linux", "Parrot OS", "Ubuntu Server", "Windows", "Termux"],
  },
  {
    id: "web",
    label: "Web Application Testing",
    blurb: "Intercepting, scanning, and validating web application flaws.",
    tools: ["Burp Suite", "OWASP ZAP", "sqlmap", "ffuf", "Nuclei", "Nikto", "Param Miner"],
  },
  {
    id: "network",
    label: "Network & Wireless",
    blurb: "Mapping networks and wireless attack surfaces.",
    tools: ["Nmap", "Wireshark", "aircrack-ng", "hashcat", "reaver", "hcxtools", "Bettercap"],
  },
  {
    id: "exploit",
    label: "Exploitation & Cracking",
    blurb: "Validating real-world impact of identified weaknesses.",
    tools: ["Metasploit", "Hydra", "John the Ripper", "BeEF", "Netcat", "Impacket"],
  },
  {
    id: "recon",
    label: "OSINT & Reconnaissance",
    blurb: "Passive intelligence and attack surface discovery.",
    tools: ["theHarvester", "SpiderFoot", "Shodan", "Google Dorking", "crt.sh", "Amass"],
  },
  {
    id: "code",
    label: "Development & Automation",
    blurb: "Custom tooling that turns repeatable work into scripts.",
    tools: ["Python", "C", "Bash", "Git", "Docker", "GitHub Actions"],
  },
  {
    id: "cloud",
    label: "Cloud Security",
    blurb: "Cloud infrastructure and configuration assessment.",
    tools: ["AWS CLI", "Azure CLI", "ScoutSuite", "CloudSploit", "Pacu"],
  },
  {
    id: "mobile",
    label: "Mobile Security",
    blurb: "Android and iOS application assessment.",
    tools: ["Frida", "Objection", "MobSF", "jadx", "adb"],
  },
  {
    id: "analysis",
    label: "Reporting & Analysis",
    blurb: "Turning findings into clear, documented reports.",
    tools: ["Notion", "Markdown", "Jupyter", "LaTeX"],
  },
];

export const toolCategoryDescriptions: Record<string, string> = {
  platform: "The operating systems and environments where most assessments run. Kali and Parrot are the daily drivers; Termux keeps a Linux-like terminal on mobile.",
  web: "Intercepting, scanning, and validating web application flaws — from request tampering and injection testing to automated vulnerability scanning and API checks.",
  network: "Mapping networks and wireless attack surfaces: host discovery, service enumeration, packet analysis, and wireless protocol assessment.",
  exploit: "Validating real-world impact of identified weaknesses through exploitation frameworks, brute-force tooling, and custom payloads.",
  recon: "Passive intelligence and attack surface discovery — DNS records, certificate transparency logs, subdomains, GitHub exposure, and public registry data.",
  code: "Custom tooling that turns repeatable security work into documented, maintainable scripts and automated pipelines.",
  cloud: "Cloud infrastructure and configuration assessment — checking misconfigured buckets, over-privileged roles, and insecure storage across providers.",
  mobile: "Android and iOS application assessment — static and dynamic analysis, runtime hooking, and reverse engineering of mobile clients.",
  analysis: "Turning raw findings into clear, documented reports that stakeholders can act on — structured markdown, executive summaries, and reproducible evidence.",
};