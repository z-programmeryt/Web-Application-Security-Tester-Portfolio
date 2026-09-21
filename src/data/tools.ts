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
    blurb: "Intercepting, scanning, and validating web app flaws.",
    tools: ["Burp Suite", "OWASP ZAP", "sqlmap", "ffuf", "Nuclei", "Nikto"],
  },
  {
    id: "network",
    label: "Network & Wireless",
    blurb: "Mapping networks and wireless attack surface.",
    tools: ["Nmap", "Wireshark", "aircrack-ng", "hashcat", "reaver", "hcxtools"],
  },
  {
    id: "exploit",
    label: "Exploitation & Cracking",
    blurb: "Validating real-world impact of identified weaknesses.",
    tools: ["Metasploit", "Hydra", "John the Ripper", "BeEF", "Netcat"],
  },
  {
    id: "recon",
    label: "OSINT & Reconnaissance",
    blurb: "Passive intelligence and attack surface discovery.",
    tools: ["theHarvester", "SpiderFoot", "Shodan", "Google Dorking", "crt.sh"],
  },
  {
    id: "code",
    label: "Development & Automation",
    blurb: "Custom tooling that turns repeatable work into scripts.",
    tools: ["Python", "C", "Bash", "Git", "Docker"],
  },
];