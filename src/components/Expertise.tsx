"use client";

import { expertiseAreas } from "@/data/skills";
import { Shield, Crosshair, Wrench, Server } from "lucide-react";
import { useInView } from "@/hooks/useScrollSpy";
import { useSpotlight } from "@/hooks/useSpotlight";

const iconMap = {
  "web-security": Shield,
  "penetration-testing": Crosshair,
  "security-tooling": Wrench,
  "linux-security": Server,
} as const;

const accents = [
  { bg: "bg-blue-500/8", border: "hover:border-blue-500/30", icon: "text-blue-400", dot: "bg-blue-400" },
  { bg: "bg-red-500/8", border: "hover:border-red-500/30", icon: "text-red-400", dot: "bg-red-400" },
  { bg: "bg-emerald-500/8", border: "hover:border-emerald-500/30", icon: "text-emerald-400", dot: "bg-emerald-400" },
  { bg: "bg-violet-500/8", border: "hover:border-violet-500/30", icon: "text-violet-400", dot: "bg-violet-400" },
];

function ExpertiseCard({ area, index, inView }: { area: (typeof expertiseAreas)[number]; index: number; inView: boolean }) {
  const Icon = iconMap[area.id as keyof typeof iconMap] || Shield;
  const accent = accents[index % accents.length];
  const { ref, handleMouseMove } = useSpotlight();

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`glass-card spotlight p-6 sm:p-7 group ${accent.border} ${inView ? "animate-slide-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`w-1.5 h-1.5 rounded-full ${accent.dot} mb-4 opacity-60`} />
      <div className={`p-3 ${accent.bg} rounded-xl inline-flex mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-5 h-5 ${accent.icon}`} />
      </div>
      <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-electric-300 transition-colors">
        {area.title}
      </h3>
      <p className="text-sm text-text-muted mb-5 leading-relaxed">{area.description}</p>
      <ul className="space-y-2">
        {area.capabilities.map((cap) => (
          <li key={cap} className="flex items-center gap-2 text-sm text-text-secondary">
            <span className={`w-1 h-1 rounded-full ${accent.dot} opacity-50`} />
            {cap}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Expertise() {
  const { setRef, inView } = useInView(0.08);

  return (
    <section id="expertise" className="section-padding relative" ref={setRef}>
      <div className="max-w-7xl mx-auto">
        <div className={`max-w-2xl mb-14 ${inView ? "animate-slide-up" : "opacity-0"}`}>
          <span className="text-electric-400 font-mono text-xs tracking-widest uppercase mb-3 block">Expertise</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Security <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-text-secondary text-lg">Core competencies from hands-on security research and testing.</p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-accent rounded-full mt-5" />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {expertiseAreas.map((area, i) => (
            <ExpertiseCard key={area.id} area={area} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
