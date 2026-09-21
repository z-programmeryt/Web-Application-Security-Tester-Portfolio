"use client";

import { useInView } from "@/hooks/useScrollSpy";
import { useSpotlight } from "@/hooks/useSpotlight";
import { Target, Bug, Wifi, Globe, Key, Network } from "lucide-react";

const focusAreas = [
  { icon: Target, title: "Penetration Testing", desc: "Structured, authorized penetration tests across web, network, and wireless surfaces — methodical from scoping through clean reporting.", accent: "#ef4444", bg: "bg-red-500/8" },
  { icon: Bug, title: "Vulnerability Research", desc: "Identifying security weaknesses and validating their real-world impact — not just scan dumps, but proofs an attacker could chain.", accent: "#f59e0b", bg: "bg-amber-500/8" },
  { icon: Wifi, title: "WiFi Security", desc: "Wireless network assessment including WPA/WPA2 analysis, rogue access-point detection, and WPS configuration testing.", accent: "#22c55e", bg: "bg-emerald-500/8" },
  { icon: Globe, title: "Web App Security", desc: "HTTP analysis, injection testing, and full OWASP Top 10 coverage applied to modern applications and APIs.", accent: "#3b82f6", bg: "bg-blue-500/8" },
  { icon: Key, title: "OSINT & Recon", desc: "Open-source intelligence gathering and attack surface mapping — DNS, certificates, GitHub, and public registries.", accent: "#a855f7", bg: "bg-purple-500/8" },
  { icon: Network, title: "Security Automation", desc: "Python and C tools that automate repeatable security work — scanners, wordlists, and CI-friendly utilities.", accent: "#22d3ee", bg: "bg-cyan-500/8" },
];

function FocusCard({ area, index, inView }: { area: typeof focusAreas[0]; index: number; inView: boolean }) {
  const { ref, handleMouseMove } = useSpotlight();
  const Icon = area.icon;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`glass-card spotlight p-6 group hover:scale-[1.03] transition-all duration-400 ${inView ? "animate-slide-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className={`p-3 ${area.bg} rounded-xl inline-flex mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-5 h-5" style={{ color: area.accent }} />
      </div>
      <h3 className="text-sm font-bold text-text-primary mb-2 group-hover:text-white transition-colors">{area.title}</h3>
      <p className="text-xs text-text-muted leading-relaxed">{area.desc}</p>
      <div className="mt-4 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-700" style={{ backgroundColor: area.accent }} />
    </div>
  );
}

export default function SecurityFocus() {
  const { setRef, inView } = useInView(0.05);

  return (
    <section className="section-padding relative" ref={setRef}>
      <div className="max-w-7xl mx-auto">
        <div className={`max-w-2xl mb-14 ${inView ? "animate-slide-up" : "opacity-0"}`}>
          <span className="text-electric-400 font-mono text-xs tracking-widest uppercase mb-3 block">Focus</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Security <span className="text-gradient">Focus Areas</span>
          </h2>
          <p className="text-text-secondary text-lg">Active research and specialization domains.</p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-accent rounded-full mt-5" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {focusAreas.map((area, i) => (
            <FocusCard key={area.title} area={area} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
