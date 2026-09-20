"use client";

import { useInView } from "@/hooks/useScrollSpy";
import { Zap, Shield, Code, Crosshair, Globe } from "lucide-react";

const timelineItems = [
  { icon: Code, title: "Programming Foundation", period: "Early Development", desc: "Built core skills in C and Python, understanding systems-level concepts and scripting.", tags: ["C", "Python", "Linux"] },
  { icon: Globe, title: "Web Technologies", period: "Web Security Foundation", desc: "HTML, CSS, JavaScript, and SQL — building blocks for understanding web attack surfaces.", tags: ["HTML", "CSS", "JavaScript", "SQL"] },
  { icon: Shield, title: "Security Specialization", period: "Penetration Testing Focus", desc: "Kali Linux, ethical hacking methodology, Metasploit, and Burp Suite.", tags: ["Kali Linux", "Burp Suite", "Metasploit"] },
  { icon: Crosshair, title: "WiFi Security Research", period: "July 2026", desc: "Built WiFi RainbowBuffer — automated WPA/WPA2 penetration testing tool.", tags: ["Python", "aircrack-ng", "WiFi"] },
  { icon: Zap, title: "OSINT & Advanced Research", period: "Ongoing", desc: "Exploring OSINT platforms, Android security, and red teaming techniques.", tags: ["OSINT", "Android", "Red Teaming"] },
];

export default function SecurityJourney() {
  const { setRef, inView } = useInView(0.05);

  return (
    <section className="section-padding relative" ref={setRef}>
      <div className="max-w-7xl mx-auto">
        <div className={`max-w-2xl mb-14 ${inView ? "animate-slide-up" : "opacity-0"}`}>
          <span className="text-electric-400 font-mono text-xs tracking-widest uppercase mb-3 block">Journey</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Security <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-text-secondary text-lg">Skill development path in cybersecurity.</p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-accent rounded-full mt-5" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-electric-500/30 via-electric-500/15 to-transparent" aria-hidden="true" />

          <div className="space-y-6">
            {timelineItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className={`relative pl-14 md:pl-20 ${inView ? "animate-slide-left" : "opacity-0"}`} style={{ animationDelay: `${i * 120}ms` }}>
                  {/* Dot */}
                  <div className="absolute left-3.5 md:left-6 top-5 w-3 h-3 -translate-x-1/2 bg-electric-500 rounded-full ring-4 ring-navy-950 z-10">
                    <div className="absolute inset-0 bg-electric-400 rounded-full animate-ping opacity-25" />
                  </div>

                  <div className="glass-card spotlight p-5 sm:p-6 group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-electric-500/10 border border-electric-500/15 rounded-lg group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4 text-electric-400" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-text-primary">{item.title}</h3>
                        <p className="text-xs text-electric-400 font-mono">{item.period}</p>
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-3">{item.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-[10px] font-mono bg-navy-800/50 border border-border-subtle rounded text-text-muted">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
