"use client";

import { skillCategories } from "@/data/skills";
import { useInView } from "@/hooks/useScrollSpy";
import { PythonIcon, CIcon, JSIcon, HTMLIcon, CSSIcon, KaliIcon, LinuxIcon, BurpIcon, MetaIcon, SQLOIcon } from "@/components/icons/TechIcons";
import { Shield, Globe, Lock, Wifi, Radar, Crosshair } from "lucide-react";

const iconComponents: Record<string, React.ReactNode> = {
  python: <PythonIcon size={18} />,
  c: <CIcon size={18} />,
  javascript: <JSIcon size={18} />,
  sql: <SQLOIcon size={18} className="text-electric-400" />,
  html5: <HTMLIcon size={18} />,
  css3: <CSSIcon size={18} />,
  "kali-linux": <KaliIcon size={18} />,
  linux: <LinuxIcon size={18} />,
  "burp-suite": <BurpIcon size={18} />,
  metasploit: <MetaIcon size={18} className="text-red-400" />,
  pentesting: <Crosshair size={18} className="text-red-400" />,
  webappsec: <Globe size={18} className="text-blue-400" />,
  netsec: <Lock size={18} className="text-amber-400" />,
  osint: <Radar size={18} className="text-purple-400" />,
  wifi: <Wifi size={18} className="text-emerald-400" />,
  ethicalhacking: <Shield size={18} className="text-electric-400" />,
};

export default function Skills() {
  const { setRef, inView } = useInView(0.1);

  return (
    <section className="section-padding relative" ref={setRef}>
      <div className="max-w-7xl mx-auto">
        <div className={`max-w-2xl mb-14 ${inView ? "animate-slide-up" : "opacity-0"}`}>
          <span className="text-electric-400 font-mono text-xs tracking-widest uppercase mb-3 block">Skills</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Technical <span className="text-gradient">Snapshot</span>
          </h2>
          <p className="text-text-secondary text-lg">Technologies actively used in security research and testing.</p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-accent rounded-full mt-5" />
        </div>

        <div className="space-y-10">
          {skillCategories.map((category, catIdx) => (
            <div key={category.id} className={`${inView ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: `${catIdx * 120}ms` }}>
              <h3 className="text-[11px] font-mono text-text-muted uppercase tracking-[0.2em] mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.slug}
                    className="group glass-card spotlight !rounded-xl px-4 py-3 flex items-center gap-3 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                  >
                    <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {iconComponents[skill.slug] || <span className="w-2 h-2 bg-electric-400 rounded-full" />}
                    </span>
                    <span className="text-sm font-semibold text-text-primary group-hover:text-electric-300 transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
