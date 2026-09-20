"use client";

import { profile } from "@/data/profile";
import { Shield, Globe, GitFork, Star, MapPin } from "lucide-react";
import { useInView } from "@/hooks/useScrollSpy";
import TerminalSnippet from "@/components/TerminalSnippet";
import AnimatedCounter from "@/components/AnimatedCounter";
import SafeImage from "@/components/SafeImage";

export default function About() {
  const { setRef, inView } = useInView(0.1);

  return (
    <section id="about" className="section-padding relative" ref={setRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`max-w-2xl mb-14 ${inView ? "animate-slide-up" : "opacity-0"}`}>
          <span className="text-electric-400 font-mono text-xs tracking-widest uppercase mb-3 block">About</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Who is <span className="text-gradient">Redoy</span>?
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-accent rounded-full" />
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Profile picture — circle cropped */}
          <div className={`bento-span-2 glass-card spotlight p-6 flex flex-col sm:flex-row items-center gap-6 ${inView ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "60ms" }}>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 rounded-full overflow-hidden shadow-xl shadow-electric-500/10">
              <SafeImage
                src={profile.avatarUrl}
                fallbackSrc="/fallback-avatar.png"
                alt={profile.displayName}
                className="w-full h-full object-cover scale-125"
              />
              <div className="absolute inset-0 rounded-full ring-2 ring-electric-500/20" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-1">{profile.displayName}</h3>
              <p className="text-sm text-electric-400 font-medium mb-2">{profile.title}</p>
              <div className="flex items-center gap-1.5 mb-3">
                <MapPin className="w-3.5 h-3.5 text-text-muted" />
                <span className="text-xs text-text-muted">{profile.location}</span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                Security-focused technologist specializing in penetration testing, web application security, and automated security tooling on Kali Linux.
              </p>
            </div>
          </div>

          {/* Stats — 2 small cards */}
          {[
            { icon: GitFork, value: 5, label: "Public Repos", color: "text-blue-400" },
            { icon: Star, value: 4, label: "GitHub Stars", color: "text-amber-400" },
          ].map(({ icon: Icon, value, label, color }, i) => (
            <div key={label} className={`glass-card spotlight p-6 flex flex-col justify-between ${inView ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: `${140 + i * 80}ms` }}>
              <Icon className={`w-5 h-5 ${color} mb-4`} />
              <div>
                <p className="text-3xl font-bold text-text-primary mb-1">
                  <AnimatedCounter target={value} inView={inView} />
                </p>
                <p className="text-xs text-text-muted">{label}</p>
              </div>
            </div>
          ))}

          {/* Bio — wide card */}
          <div className={`bento-span-2 md:bento-span-4 glass-card spotlight p-6 sm:p-8 ${inView ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                <span className="text-text-primary font-semibold">{profile.displayName}</span> (aka <span className="text-electric-400 font-semibold">{profile.nickname}</span>)
                {" "}combines programming depth in Python and C with hands-on offensive security methodology.
                Focus spans <span className="text-text-primary font-medium">WiFi security</span>,
                <span className="text-text-primary font-medium"> web vulnerability research</span>, and
                <span className="text-text-primary font-medium"> automated tooling</span>.
              </p>
              <p>
                The approach is methodical: reconnaissance, analysis, authorized testing, and clear reporting.
                Active areas of interest include advanced penetration testing, red teaming techniques, and building
                custom automation to streamline security workflows.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.focus.map((item) => (
                <span key={item} className="px-3 py-1.5 text-xs font-medium bg-electric-500/8 rounded-lg text-electric-300">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Terminal */}
          <div className={`bento-span-2 md:bento-span-2 ${inView ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "380ms" }}>
            <TerminalSnippet />
          </div>

          {/* Highlight icons */}
          {[
            { icon: Shield, label: "Pen Testing", desc: "Authorized security assessments" },
            { icon: Globe, label: "Web Security", desc: "HTTP/web vuln research" },
          ].map(({ icon: Icon, label, desc }, i) => (
            <div key={label} className={`glass-card spotlight p-6 group ${inView ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: `${460 + i * 80}ms` }}>
              <div className="p-2.5 bg-electric-500/10 rounded-xl inline-flex mb-3 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5 text-electric-400" />
              </div>
              <p className="text-sm font-semibold text-text-primary mb-1">{label}</p>
              <p className="text-xs text-text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
