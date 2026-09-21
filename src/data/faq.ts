export type FaqCategory = "process" | "deliverables" | "trust" | "engagement";

export type Faq = {
  question: string;
  answer: string;
  category: FaqCategory;
};

export const faqCategoryLabel: Record<FaqCategory, string> = {
  process: "Process",
  deliverables: "Deliverables",
  trust: "Trust & Privacy",
  engagement: "Engagement",
};

export const faqs: Faq[] = [
  {
    category: "trust",
    question: "Do you only test with authorization?",
    answer:
      "Yes — every engagement starts with a signed scope and rules-of-engagement agreement. Testing is performed only against systems you own or have written permission to assess, always following responsible-disclosure principles.",
  },
  {
    category: "process",
    question: "How do engagements normally start?",
    answer:
      "With a short discovery call. We agree on scope — the assets, testing windows, and permitted techniques — sign the rules of engagement, then I begin reconnaissance. You get a checkpoint before anything invasive runs.",
  },
  {
    category: "deliverables",
    question: "What exactly will I receive in the report?",
    answer:
      "A clear, prioritized report: each finding includes the affected asset, a reproducible proof-of-concept (PoC), a business-risk score, and step-by-step remediation guidance. You also receive an executive summary for stakeholders who don't read raw technical output.",
  },
  {
    category: "engagement",
    question: "Which tools and methodologies do you use?",
    answer:
      "Burp Suite, OWASP ZAP, Nmap, Metasploit, aircrack-ng, and custom Python tooling, driven by manual testing — not scan output dumps. Findings are measured against OWASP Top 10 and validated for real-world exploitability.",
  },
  {
    category: "engagement",
    question: "How long does an assessment take?",
    answer:
      "It depends on the attack surface. A focused web application audit typically takes 1–2 weeks, a full penetration test 2–4 weeks. You receive an exact timeline in the proposal before anything starts.",
  },
  {
    category: "deliverables",
    question: "Do you offer retesting after fixes?",
    answer:
      "Yes. Most engagements include a retest window so we can confirm each finding is remediated and verify the fix doesn't introduce new issues — and I provide a remediation roadmap along the way.",
  },
  {
    category: "trust",
    question: "Who owns my data and my findings?",
    answer:
      "You do — completely. All work is covered by a confidentiality agreement. Findings and access data are never shared, published, or used without your explicit written consent.",
  },
  {
    category: "engagement",
    question: "Can you test a production application?",
    answer:
      "Yes. Testing is scheduled inside agreed windows, uses low-impact techniques where possible, and is coordinated with your team so business operations are never disturbed.",
  },
  {
    category: "engagement",
    question: "Do you work with startups and solo founders?",
    answer:
      "Absolutely — a large part of my work is with solo developers, founders, and small teams who need an honest security check before launching or before a client asks for proof of security.",
  },
];

export const homeFaqs: Faq[] = [
  faqs[0],
  faqs[1],
  faqs[2],
  faqs[3],
  faqs[4],
  faqs[5],
  faqs[8],
  faqs[6],
];