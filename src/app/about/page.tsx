import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Mail, Shield, Terminal, Cpu, FolderGit2, ArrowRight, Sparkles } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import SafeImage from "@/components/SafeImage";
import { profile, socialLinks } from "@/data/profile";
import { expertiseAreas } from "@/data/skills";
import { timeline } from "@/data/timeline";

const SITE = "https://redoyrowshon.vercel.app";

export const metadata: Metadata = {
  title: "About Me",
  description: `About ${profile.displayName} — ${profile.shortTitle}. Journey, skills, security focus areas, and the story behind the tools.`,
  alternates: { canonical: `${SITE}/about` },
  openGraph: {
    title: `About ${profile.displayName}`,
    description: `About ${profile.displayName} — ${profile.shortTitle}.`,
    url: `${SITE}/about`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const quickFacts = [
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Mail, label: "Email", value: profile.email },
  { icon: Shield, label: "Role", value: profile.title },
  { icon: Cpu, label: "Primary OS", value: "Kali Linux / Linux" },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        crumb="About"
        eyebrow="Who I am"
        title={
          <>
            Security researcher & <span className="text-gradient">tooling builder</span>
          </>
        }
        description={`${profile.displayName}, better known as ${profile.nickname} — a security-focused technologist working across penetration testing, web application security, and programming.`}
      />

      {/* Bio + portrait */}
      <section className="section-padding pt-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <Reveal x={-28} y={0}>
              <div className="relative group perspective-1200">
                <div className="absolute inset-0 rounded-[2rem] blur-3xl scale-110 opacity-40 dark:opacity-25" style={{ background: "conic-gradient(from 180deg, var(--color-electric-500), var(--color-cyan-accent), var(--color-electric-500))" }} aria-hidden />
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-[2rem] overflow-hidden border border-border-subtle shadow-2xl shadow-electric-500/10 group-hover:scale-[1.02] transition-transform duration-700">
                  <SafeImage src={profile.avatarUrl} fallbackSrc="/fallback-avatar.png" alt={`${profile.displayName}`} className="w-full h-full object-cover scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 glass-card !rounded-xl px-3 py-2">
                    <p className="text-xs font-mono text-text-secondary">{profile.nickname} <span className="text-electric-400">@</span> security</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal y={24}>
              <span className="text-electric-400 font-mono text-xs tracking-[0.25em] uppercase">$ whoami</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold mb-5">
                A developer who loves to <span className="text-gradient">break things — responsibly</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                {profile.tagline} My work lives at the intersection of offensive security and engineering: I write tools that make authorized testing faster, study how systems fail, and turn every lesson into something that can protect the next application.
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                I&apos;m fluent in the command line, comfortable digging into protocol internals, and happiest when a carefully crafted script turns a tedious task into a one-liner — all within clearly authorized scope, and always with ethics first.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {quickFacts.map((f) => (
                  <div key={f.label} className="glass-card !rounded-xl p-4 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-electric-500/10 border border-electric-500/15 flex-shrink-0">
                      <f.icon className="w-4 h-4 text-electric-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-text-muted">{f.label}</p>
                      <p className="text-sm font-medium text-text-primary truncate">{f.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric-500 to-electric-400 text-white text-sm font-semibold rounded-xl shadow-lg shadow-electric-500/20 hover:scale-[1.03] transition-all duration-300">
                  <Sparkles className="w-4 h-4 relative z-10" /> <span className="relative z-10">Work with me</span>
                </Link>
                <a href={socialLinks[1].url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-border-medium hover:border-electric-500/40 text-sm font-medium rounded-xl transition-all hover:bg-electric-500/5">
                  LinkedIn Profile <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="section-padding pt-2">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Expertise"
            title={<>What I <span className="text-gradient">do best</span></>}
            subtitle="Core disciplines I focus on every day — from the command line to the application layer."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {expertiseAreas.map((area, i) => (
              <Reveal key={area.id} delay={i * 0.08}>
                <div className="glass-card spotlight p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-electric-500/15 to-cyan-accent/10 border border-electric-500/15 flex items-center justify-center mb-4">
                    <Terminal className="w-5 h-5 text-electric-400" />
                  </div>
                  <h3 className="font-bold text-text-primary mb-2">{area.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">{area.description}</p>
                  <ul className="space-y-1.5">
                    {area.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-xs text-text-secondary">
                        <span className="text-electric-400 mt-0.5">▹</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="section-padding pt-2">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Journey"
            title={<>The <span className="text-gradient">road so far</span></>}
            subtitle="A rough timeline of how this security journey shaped up."
          />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-electric-500/60 via-border-medium to-transparent" aria-hidden />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.06} y={26}>
                  <div className={`relative flex gap-6 md:gap-10 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1 w-2 h-2 rounded-full bg-electric-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]" aria-hidden />
                    <div className="hidden md:block md:w-1/2" />
                    <div className="ml-10 md:ml-0 flex-1 glass-card !rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 text-[10px] font-mono bg-electric-500/10 text-electric-300 border border-electric-500/15 rounded-full">{item.phase}</span>
                        <span className="text-[10px] text-text-muted uppercase tracking-wider">{item.period}</span>
                      </div>
                      <h3 className="font-bold text-text-primary mb-1.5 flex items-center gap-1.5">
                        <FolderGit2 className="w-4 h-4 text-electric-400 flex-shrink-0" /> {item.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed mb-3">{item.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((t) => (
                          <span key={t} className="px-2 py-0.5 text-[10px] font-mono bg-navy-800/50 border border-border-subtle rounded text-text-muted">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Marquee
        items={["Penetration Testing", "Web App Security", "OSINT", "Linux", "Python", "C", "WiFi Security", "Burp Suite", "Kali Linux", "Ethical Hacking"]}
        className="py-5 border-y border-border-subtle"
      />
    </PageShell>
  );
}