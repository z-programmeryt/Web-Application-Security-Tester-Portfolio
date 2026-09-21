import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Clock, MessageSquare, ArrowUpRight, CalendarCheck, FileSignature, BadgeCheck, ShieldCheck } from "lucide-react";
import { Github, Linkedin } from "@/components/icons/BrandIcons";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { profile, socialLinks } from "@/data/profile";
import { faqs } from "@/data/faq";

const SITE = "https://redoyrowshon.vercel.app";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.displayName} — security assessments, tooling work, training, or just a good security conversation.`,
  alternates: { canonical: `${SITE}/contact` },
  openGraph: {
    title: "Contact",
    description: "Get in touch — security work, training, or collaboration.",
    url: `${SITE}/contact`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const prepChecklist = [
  "A short description of the product or system",
  "Target list (domains, IPs, repos) — if you have one",
  "Timeline or deadline you're working toward",
];

const guarantees = [
  { icon: CalendarCheck, label: "Free scoping call" },
  { icon: FileSignature, label: "Written rules of engagement" },
  { icon: BadgeCheck, label: "NDA on request" },
  { icon: ShieldCheck, label: "Authorized testing only" },
];

const topFaqs = [faqs[2], faqs[4], faqs[6]];

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}?subject=Hello%20Redoy%20%E2%80%94%20from%20your%20portfolio`,
    hint: "Best for project inquiries",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "M. Redoy Rowshon",
    href: socialLinks[1].url,
    hint: "Professional network",
  },
  {
    icon: Github,
    label: "GitHub",
    value: profile.githubUsername,
    href: socialLinks[0].url,
    hint: "Code & open source",
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: "#",
    hint: "Working remotely",
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        crumb="Contact"
        eyebrow="Get in touch"
        title={
          <>
            Let&apos;s talk <span className="text-gradient">security</span>
          </>
        }
        description="Whether it's an engagement, a collaboration, or just a good conversation about penetration testing — my inbox is open."
      >
        <div className="flex items-center gap-2.5 glass-card !rounded-full px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-xs font-medium text-text-secondary">Available for security work & training</span>
        </div>
      </PageHeader>

      <section className="section-padding pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {contactCards.map((card, i) => {
              const isCard = card.href !== "#";
              const Inner = (
                <>
                  <div className="w-11 h-11 rounded-xl bg-electric-500/10 border border-electric-500/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <card.icon className="w-5 h-5 text-electric-400" />
                  </div>
                  <p className="text-[10px] uppercase tracking-wider text-text-muted mb-1">{card.label}</p>
                  <p className="text-sm font-semibold text-text-primary truncate mb-1 flex items-center gap-1">
                    {card.value}
                    {isCard && <ArrowUpRight className="w-3.5 h-3.5 text-text-muted" />}
                  </p>
                  <p className="text-xs text-text-muted">{card.hint}</p>
                </>
              );
              const cls = "group glass-card gradient-border p-5 flex flex-col";
              return (
                <Reveal key={card.label} delay={i * 0.08}>
                  {isCard ? (
                    <a href={card.href} target="_blank" rel="noopener noreferrer" className={cls}>
                      {Inner}
                    </a>
                  ) : (
                    <div className={cls}>{Inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          {/* Direct email CTA */}
          <Reveal>
            <div className="glass-card !rounded-3xl p-8 sm:p-12 relative overflow-hidden">
              <div aria-hidden className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-[100px] opacity-30" style={{ background: "radial-gradient(circle, var(--color-cyan-accent), transparent 70%)" }} />
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-electric-500 to-cyan-accent flex items-center justify-center shadow-xl shadow-electric-500/20 shrink-0">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">Prefer email? Just send one.</h3>
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                    Tell me about your project, the scope you have in mind, or the topic you want training on. I typically reply within a day or two.
                  </p>
                </div>
                <a
                  href={`mailto:${profile.email}?subject=Hello%20Redoy%20%E2%80%94%20from%20your%20portfolio`}
                  className="magnetic-btn inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-electric-500 to-electric-400 text-white font-semibold rounded-xl shadow-lg shadow-electric-500/20 hover:scale-[1.03] transition-all duration-300 shrink-0"
                >
                  <span className="relative z-10">Send an email</span>
                </a>
              </div>
              <div className="relative mt-6 flex items-center gap-2 text-xs font-mono text-text-muted">
                <Clock className="w-3.5 h-3.5" /> Response time: usually 24–48 hours
              </div>
            </div>
          </Reveal>

          {/* Guarantees */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle rounded-2xl border border-border-subtle overflow-hidden mt-12">
            {guarantees.map((g) => (
              <div key={g.label} className="bg-surface p-5 flex items-center gap-3">
                <g.icon className="w-5 h-5 text-electric-400 shrink-0" />
                <span className="text-sm text-text-secondary">{g.label}</span>
              </div>
            ))}
          </div>

          {/* Prep + quick FAQ */}
          <div className="grid lg:grid-cols-2 gap-5 mt-12">
            <Reveal y={24}>
              <div className="glass-card gradient-border h-full p-7">
                <span className="text-electric-400 font-mono text-xs tracking-[0.25em] uppercase">Before you write</span>
                <h3 className="mt-2 text-xl font-bold text-text-primary mb-5">Make the first message count</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  You don&apos;t need a technical document — a few lines about your project and what you want to
                  protect is enough to start. These help most:
                </p>
                <ul className="space-y-3.5">
                  {prepChecklist.map((item, i) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-lg bg-electric-500/10 text-electric-300 font-mono text-[11px] font-bold shrink-0">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1} y={24}>
              <div className="glass-card gradient-border h-full p-7 flex flex-col">
                <span className="text-electric-400 font-mono text-xs tracking-[0.25em] uppercase">Quick answers</span>
                <h3 className="mt-2 text-xl font-bold text-text-primary mb-5">What clients ask first</h3>
                <div className="space-y-5 flex-1">
                  {topFaqs.map((f) => (
                    <div key={f.question}>
                      <p className="text-sm font-semibold text-text-primary mb-1.5 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-electric-400 shrink-0" />
                        {f.question}
                      </p>
                      <p className="text-[13px] text-text-muted leading-relaxed pl-3.5">{f.answer}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/services#faq"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-400 hover:text-electric-300 transition-colors"
                >
                  See the full FAQ on the services page <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}