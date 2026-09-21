"use client";

import Reveal from "@/components/Reveal";
import { ShieldCheck, FileLock2, ClipboardCheck, RotateCcw } from "lucide-react";

const signals = [
  {
    icon: ShieldCheck,
    title: "Authorization-first",
    desc: "Every test starts with a signed, scoped agreement.",
  },
  {
    icon: FileLock2,
    title: "100% confidential",
    desc: "NDA-backed work. Your data never leaves the engagement.",
  },
  {
    icon: ClipboardCheck,
    title: "Evidence-backed reports",
    desc: "Every finding reproduced with a real proof-of-concept.",
  },
  {
    icon: RotateCcw,
    title: "Retesting support",
    desc: "We confirm fixes are closed — and stay closed.",
  },
];

export default function TrustSignals() {
  return (
    <section className="relative z-10 -mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle rounded-2xl border border-border-subtle overflow-hidden">
          {signals.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} y={18} className="bg-surface">
              <div className="h-full p-5 flex items-start gap-3 group hover:bg-surface-raised transition-colors">
                <div className="p-2.5 rounded-lg bg-electric-500/8 text-electric-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <s.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{s.title}</p>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}