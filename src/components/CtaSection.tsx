"use client";

import Reveal from "@/components/Reveal";
import { profile, socialLinks } from "@/data/profile";
import { Github } from "@/components/icons/BrandIcons";
import { Mail, ShieldCheck, BadgeCheck, Zap } from "lucide-react";

const assurances = [
  { icon: ShieldCheck, label: "Authorization-first, always" },
  { icon: BadgeCheck, label: "Clear, documented reporting" },
  { icon: Zap, label: "Fast turnaround on scope" },
];

export default function CtaSection() {
  const github = socialLinks.find((s) => s.platform === "GitHub");

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal y={30}>
          <div className="relative rounded-3xl overflow-hidden gradient-border">
            <div className="absolute inset-0 bg-gradient-to-br from-bg-elevated via-surface to-bg-elevated" aria-hidden />
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-electric-500/10 blur-3xl animate-aurora pointer-events-none" aria-hidden />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-cyan-accent/10 blur-3xl animate-aurora pointer-events-none" style={{ animationDelay: "-7s" }} aria-hidden />

            <div className="relative p-10 sm:p-14 lg:p-20 text-center">
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-electric-400 mb-4">
                Have a system worth protecting?
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold leading-tight max-w-3xl mx-auto">
                Get an honest security <span className="text-gradient">assessment</span> before someone else finds it
              </h2>
              <p className="mt-5 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
                Authorized, evidence-backed testing with a clear remediation path. Start with a free scoping
                call — no commitment, no pressure.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${profile.email}?subject=Security%20Assessment%20Request`}
                  className="magnetic-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-electric-500 to-cyan-accent text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
                >
                  <Mail className="w-4 h-4" /> Book a free scoping call
                </a>
                {github && (
                  <a
                    href={github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-electric-500/30 text-electric-300 text-sm font-semibold hover:bg-electric-500/10 transition-colors"
                  >
                    <Github className="w-4 h-4" /> Browse the research
                  </a>
                )}
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {assurances.map((a) => (
                  <div key={a.label} className="flex items-center gap-2 text-sm text-text-secondary">
                    <a.icon className="w-4 h-4 text-electric-400" />
                    {a.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}