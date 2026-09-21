"use client";

import type { ComponentType } from "react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { toolCategories } from "@/data/tools";
import {
  PythonIcon,
  CIcon,
  KaliIcon,
  LinuxIcon,
  BurpIcon,
  MetaIcon,
} from "@/components/icons/TechIcons";
import { TerminalSquare } from "lucide-react";

const knownIcons: Record<string, ComponentType<{ className?: string; size?: number }>> = {
  python: PythonIcon,
  c: CIcon,
  "kali linux": KaliIcon,
  "parrot os": LinuxIcon,
  "ubuntu server": LinuxIcon,
  "burp suite": BurpIcon,
  metasploit: MetaIcon,
};

const DefaultIcon = TerminalSquare;

function ToolChip({ name }: { name: string }) {
  const Icon = knownIcons[name.toLowerCase()] ?? DefaultIcon;
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-raised border border-border-subtle text-xs text-text-secondary font-mono hover:border-electric-500/30 hover:text-electric-300 hover:-translate-y-0.5 transition-all duration-300">
      <Icon className="h-3.5 w-3.5" />
      {name}
    </span>
  );
}

export default function ToolkitSection() {
  return (
    <section id="toolkit" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none" aria-hidden />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          eyebrow="Toolkit"
          title={
            <>
              The arsenal behind <span className="text-gradient">every engagement</span>
            </>
          }
          subtitle="The platforms, tools, and languages I use daily for authorized security testing — validated in labs, projects, and real assessments."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {toolCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={(i % 3) * 90} y={26}>
              <div className="glass-card p-6 h-full group">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-sm font-bold text-text-primary group-hover:text-electric-300 transition-colors">
                    {cat.label}
                  </h3>
                  <span className="text-[11px] font-mono text-text-muted">{cat.tools.length} tools</span>
                </div>
                <p className="text-xs text-text-muted mb-4">{cat.blurb}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((t) => (
                    <ToolChip key={t} name={t} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} y={16}>
          <p className="mt-8 text-center text-xs text-text-muted max-w-xl mx-auto">
            Authorization is the only context these tools are ever used in. No tool substitutes for a signed
            scope — and none of them run without one.
          </p>
        </Reveal>
      </div>
    </section>
  );
}