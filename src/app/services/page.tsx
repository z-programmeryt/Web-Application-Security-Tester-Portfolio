import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Shield, Target, Wifi, ScanSearch, Braces, GraduationCap, Check, ShieldCheck, ArrowRight, Rocket, Crosshair, Users, Zap, type LucideIcon } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import FaqSection from "@/components/FaqSection";
import { services, processSteps, ethicsNote } from "@/data/services";
import { faqs } from "@/data/faq";

const SITE = "https://redoyrowshon.vercel.app";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Penetration testing, web application security audits, WiFi security assessment, vulnerability scanning, security tooling, and training — always within authorized scope.",
  alternates: { canonical: `${SITE}/services` },
  openGraph: {
    title: "Security Services",
    description: "Penetration testing, web application security, WiFi assessment, and security tooling.",
    url: `${SITE}/services`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  target: Target,
  wifi: Wifi,
  scan: ScanSearch,
  braces: Braces,
  graduation: GraduationCap,
};

const engagementOptions = [
  {
    icon: Rocket,
    name: "Single Audit",
    target: "Best for pre-launch checks and investor-ready software",
    points: [
      "Focused web app / API / infrastructure review",
      "OWASP Top 10 coverage with validated findings",
      "Prioritized report + reproducible PoCs",
      "One remediation roadmap + retest window",
    ],
    timeline: "1–2 weeks",
    featured: false,
  },
  {
    icon: Crosshair,
    name: "Full Penetration Test",
    target: "Best for production apps and compliance-driven teams",
    points: [
      "Web + API + network + optional wireless scope",
      "Manual-driven exploitation, not scan dumps",
      "Chained attacks validated to real business impact",
      "Executive summary + technical annex + retest",
    ],
    timeline: "2–4 weeks",
    featured: true,
  },
  {
    icon: Users,
    name: "Retainer & Team Support",
    target: "Best for teams that keep shipping",
    points: [
      "Continuous scanning and change-validation",
      "Retesting on every release cycle",
      "Custom security tooling and automation",
      "Security training and mentoring for the team",
    ],
    timeline: "Ongoing",
    featured: false,
  },
];

const faqStructured = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function ServicesPage() {
  return (
    <PageShell>
      <Script id="services-faq-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructured) }} />
      <PageHeader
        crumb="Services"
        eyebrow="What I can do for you"
        title={
          <>
            Security work, done <span className="text-gradient">responsibly</span>
          </>
        }
        description="Focused, authorized security services — from application audits to WiFi assessment and custom tooling. Every engagement follows a clean scope, a careful methodology, and honest reporting."
      >
        <div className="inline-flex items-center gap-2.5 glass-card !rounded-full px-4 py-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="text-xs text-text-secondary">Authorized testing only · Responsible disclosure</span>
        </div>
      </PageHeader>

      {/* Services grid */}
      <section className="section-padding pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Shield;
              return (
                <Reveal key={service.id} delay={(i % 3) * 0.1}>
                  <article className="group glass-card gradient-border h-full p-6 flex flex-col spotlight">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500/15 to-cyan-accent/10 border border-electric-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-[-4deg] transition-transform duration-300">
                        <Icon className="w-5 h-5 text-electric-400" />
                      </div>
                      <span className="font-mono text-[10px] text-text-muted">0{i + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-electric-300 transition-colors">{service.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-5 flex-1">{service.description}</p>
                    <ul className="space-y-2 mb-5">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-xs text-text-secondary">
                          <Check className="w-3.5 h-3.5 text-electric-400 mt-0.5 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border-subtle">
                      {service.tools.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-[10px] font-mono bg-navy-800/50 border border-border-subtle rounded text-text-muted">{t}</span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding pt-2">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="How it works"
            title={<>A clean, methodical <span className="text-gradient">process</span></>}
            subtitle="The same disciplined workflow on every engagement."
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className="glass-card p-6 relative overflow-hidden h-full">
                  <span className="absolute -top-3 -right-2 text-[64px] font-black text-electric-500/8 select-none" aria-hidden>
                    {step.number}
                  </span>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-9 h-9 rounded-lg bg-electric-500/10 border border-electric-500/15 flex items-center justify-center font-mono text-xs font-bold text-electric-400">
                      {step.number}
                    </span>
                    <h3 className="font-bold text-text-primary">{step.title}</h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement options */}
      <section className="section-padding pt-2">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Engagement options"
            title={<>Ways to <span className="text-gradient">work together</span></>}
            subtitle="Three common starting points — every engagement is scoped to your actual attack surface."
          />
          <div className="grid md:grid-cols-3 gap-5 items-stretch">
            {engagementOptions.map((opt, i) => (
              <Reveal key={opt.name} delay={i * 0.1} className={opt.featured ? "md:-mt-4 md:-mb-4 relative z-10" : undefined}>
                <div className={`glass-card gradient-border glow-hover h-full p-7 flex flex-col ${opt.featured ? "border-electric-500/25" : ""}`}>
                  {opt.featured && (
                    <span className="absolute -top-3 left-6 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-electric-500 to-cyan-accent text-[10px] font-bold text-white uppercase tracking-wider">
                      Most thorough
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500/15 to-cyan-accent/10 border border-electric-500/20 flex items-center justify-center mb-5">
                    <opt.icon className="w-5 h-5 text-electric-400" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-1">{opt.name}</h3>
                  <p className="text-xs text-text-muted mb-4">{opt.target}</p>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {opt.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-[13px] text-text-secondary">
                        <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted">
                      <Zap className="w-3.5 h-3.5 text-electric-400" /> {opt.timeline}
                    </span>
                    <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-400 hover:text-electric-300 transition-colors">
                      Get a quote <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics */}
      <section className="section-padding pt-2">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="glass-card !rounded-2xl p-8 text-center border-emerald-500/15">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Ethics first, always</h3>
              <p className="text-sm text-text-secondary leading-relaxed max-w-2xl mx-auto">{ethicsNote}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding pt-2">
        <div className="max-w-7xl mx-auto">
          <FaqSection
            items={faqs}
            eyebrow="FAQ"
            title={<>Answers before you <span className="text-gradient">commit</span></>}
            subtitle="The questions clients ask most — scope, process, deliverables, and confidentiality."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pt-2">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Have an engagement in mind?
            </h3>
            <p className="text-text-secondary mb-6 max-w-xl mx-auto">
              Send a message and I&apos;ll get back to you with next steps — no obligation.
            </p>
            <Link href="/contact" className="magnetic-btn inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-electric-500 to-electric-400 text-white font-semibold rounded-xl shadow-lg shadow-electric-500/20 hover:scale-[1.03] transition-all duration-300">
              <span className="relative z-10">Get in touch</span> <ArrowRight className="w-4 h-4 relative z-10" />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}