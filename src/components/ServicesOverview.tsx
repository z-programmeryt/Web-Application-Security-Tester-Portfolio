"use client";

import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";
import { Shield, Target, Wifi, ScanSearch, Braces, GraduationCap, ArrowRight, Check } from "lucide-react";

const iconMap = {
  shield: Shield,
  target: Target,
  wifi: Wifi,
  scan: ScanSearch,
  braces: Braces,
  graduation: GraduationCap,
} as const;

export default function ServicesOverview() {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Security services that <span className="text-gradient">protect your product</span>
            </>
          }
          subtitle="Focused, evidence-backed assessments for startups, founders, and teams who care about shipping secure software."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap] || Shield;
            return (
              <Reveal key={s.id} delay={(i % 3) * 100} y={30}>
                <Link
                  href={`/services#${s.id}`}
                  className="glass-card group glow-hover p-6 h-full flex flex-col gradient-border"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-electric-500/8 text-electric-400 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider group-hover:text-electric-400 transition-colors">
                      {s.deliverables.length} deliverables
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-text-primary mb-2.5 group-hover:text-electric-300 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">{s.description}</p>

                  <ul className="space-y-2 mb-5">
                    {s.deliverables.slice(0, 3).map((d) => (
                      <li key={d} className="flex items-start gap-2 text-[13px] text-text-muted">
                        <Check className="w-3.5 h-3.5 mt-0.5 text-emerald-400 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {s.tools.slice(0, 3).map((t) => (
                      <span key={t} className="text-[11px] font-mono px-2 py-1 rounded-md bg-navy-800/60 text-text-muted border border-border-subtle">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 mt-6 text-sm font-medium text-electric-400 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300">
                    Explore service <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} y={20}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-electric-500 to-cyan-accent text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
            >
              View full services & methodology <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}