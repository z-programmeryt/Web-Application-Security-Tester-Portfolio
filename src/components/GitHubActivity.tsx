"use client";

import { useInView } from "@/hooks/useScrollSpy";
import { GitFork, Star, Code, Shield, Radio } from "lucide-react";
import { Github } from "@/components/icons/BrandIcons";
import AnimatedCounter from "@/components/AnimatedCounter";

const languageData = [
  { name: "Python", pct: 45, color: "#3572A5" },
  { name: "Smali", pct: 20, color: "#6B4F99" },
  { name: "TypeScript", pct: 20, color: "#3178C6" },
  { name: "JavaScript", pct: 10, color: "#F1E05A" },
  { name: "Other", pct: 5, color: "#64748b" },
];

const stats = [
  { icon: Github, label: "Public Repos", value: 5 },
  { icon: Star, label: "Stars Earned", value: 4 },
  { icon: GitFork, label: "Forks", value: 2 },
  { icon: Shield, label: "Security Projects", value: 4 },
];

export default function GitHubActivity() {
  const { setRef, inView } = useInView(0.1);

  return (
    <section className="section-padding relative" ref={setRef}>
      <div className="max-w-7xl mx-auto">
        <div className={`max-w-2xl mb-14 ${inView ? "animate-slide-up" : "opacity-0"}`}>
          <span className="text-electric-400 font-mono text-xs tracking-widest uppercase mb-3 block">GitHub</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            GitHub <span className="text-gradient">Activity</span>
          </h2>
          <p className="text-text-secondary text-lg">Public repository activity and language distribution.</p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-accent rounded-full mt-5" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Stats */}
          <div className={`grid grid-cols-2 gap-3 ${inView ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "80ms" }}>
            {stats.map(({ icon: Icon, label, value }, i) => (
              <div key={label} className="glass-card spotlight p-5 group" style={{ animationDelay: `${i * 60}ms` }}>
                <Icon className="w-5 h-5 text-electric-400 mb-3 group-hover:text-cyan-accent transition-colors" />
                <p className="text-2xl font-bold text-text-primary mb-0.5">
                  <AnimatedCounter target={value} inView={inView} />
                </p>
                <p className="text-xs text-text-muted">{label}</p>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className={`${inView ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "160ms" }}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <Code className="w-5 h-5 text-electric-400" />
                <h3 className="text-xs font-mono text-electric-400 uppercase tracking-wider">Languages</h3>
              </div>

              {/* Stacked bar */}
              <div className="flex h-3 rounded-full overflow-hidden mb-5">
                {languageData.map((lang) => (
                  <div key={lang.name} className="h-full transition-all duration-700" style={{ width: `${lang.pct}%`, backgroundColor: lang.color }} title={`${lang.name}: ${lang.pct}%`} />
                ))}
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 gap-2">
                {languageData.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: lang.color }} />
                    <span className="text-xs text-text-secondary">{lang.name}</span>
                    <span className="text-xs text-text-muted ml-auto">{lang.pct}%</span>
                  </div>
                ))}
              </div>

              {/* Activity note */}
              <div className="mt-5 pt-4 flex items-start gap-3">
                <Radio className="w-4 h-4 text-electric-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-text-muted leading-relaxed">
                  Active across security tooling, OSINT research, and mobile security. Most recent: WiFi penetration testing tool development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
