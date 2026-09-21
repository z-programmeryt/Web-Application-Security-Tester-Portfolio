"use client";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { processSteps } from "@/data/services";
import { ArrowRight } from "lucide-react";

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none" aria-hidden />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          eyebrow="Process"
          title={
            <>
              How every engagement <span className="text-gradient">actually runs</span>
            </>
          }
          subtitle="A disciplined, transparent methodology — so you always know what's happening and why."
        />

        <div className="relative">
          <div
            className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-electric-500/0 via-electric-500/40 to-cyan-accent/0"
            aria-hidden
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 110} y={30}>
                <div className="relative glass-card p-6 h-full group hover:-translate-y-1.5 transition-transform duration-300">
                  <div className="relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-electric-500/15 to-cyan-accent/10 border border-electric-500/20 text-electric-300 font-mono text-lg font-bold mb-5 group-hover:from-electric-500/25 transition-colors">
                    {step.number}
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2.5 group-hover:text-electric-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} y={18}>
          <div className="mt-12 text-center">
            <p className="text-sm text-text-muted mb-4">
              Prefer to talk it through first? The rules of engagement and scope are settled before any testing begins.
            </p>
            <Link
              href="/contact"
              className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-electric-500/30 text-electric-300 text-sm font-semibold hover:bg-electric-500/10 transition-colors"
            >
              Start with a free scoping call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}