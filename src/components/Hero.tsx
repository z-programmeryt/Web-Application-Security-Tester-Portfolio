"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Shield, Terminal, MapPin, ArrowDown } from "lucide-react";
import { Github, Linkedin } from "@/components/icons/BrandIcons";
import { profile } from "@/data/profile";
import TypingText from "@/components/TypingText";
import SafeImage from "@/components/SafeImage";

const Hero3D = dynamic(() => import("@/components/three/Hero3D"), { ssr: false });

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-28 md:pt-36 overflow-hidden">
      {/* 3D scene */}
      <Hero3D />
      {/* Gradient mesh background */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 dark:opacity-20 animate-aurora" style={{ background: "radial-gradient(circle, var(--color-electric-500), transparent 70%)" }} aria-hidden="true" />
      <div className="absolute bottom-20 -right-40 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 animate-aurora" style={{ background: "radial-gradient(circle, var(--color-cyan-accent), transparent 70%)", animationDelay: "3s" }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text — spans 7 cols */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 glass-card !rounded-full mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-text-secondary tracking-wide">Available for Security Work</span>
            </div>

            {/* Name */}
            <h1 className="text-[2.75rem] sm:text-6xl lg:text-[4.5rem] font-black tracking-tight leading-[1.05] mb-5 animate-slide-up">
              <span className="text-text-primary block">Hi, I&apos;m</span>
              <span className="text-gradient block">{profile.nickname}</span>
            </h1>

            {/* Typing role */}
            <div className="flex items-center gap-3 mb-8 animate-slide-up min-h-[2.5rem]" style={{ animationDelay: "120ms" }}>
              <div className="p-2.5 rounded-xl bg-electric-500/10 border border-electric-500/15">
                <Shield className="w-5 h-5 text-electric-400" />
              </div>
              <p className="text-lg sm:text-xl font-semibold">
                <TypingText
                  texts={["Penetration Tester", "Web App Security", "Security Researcher", "Ethical Hacker", "Linux Power User"]}
                />
              </p>
            </div>

            {/* Tagline */}
            <p className="text-text-secondary text-base sm:text-lg max-w-xl mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "220ms" }}>
              {profile.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 animate-slide-up" style={{ animationDelay: "320ms" }}>
              <Link
                href="/projects"
                className="magnetic-btn group inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-electric-500 to-electric-400 text-white font-semibold rounded-xl shadow-lg shadow-electric-500/20 hover:shadow-electric-500/35 hover:scale-[1.03] transition-all duration-300"
              >
                <Terminal className="w-4 h-4 group-hover:rotate-12 transition-transform relative z-10" />
                <span className="relative z-10">View Projects</span>
              </Link>
              <Link
                href="/contact"
                className="magnetic-btn inline-flex items-center gap-2 px-7 py-3.5 border border-border-medium hover:border-electric-500/40 text-text-primary font-semibold rounded-xl transition-all duration-300 hover:scale-[1.03] hover:bg-electric-500/5"
              >
                <span className="relative z-10">Get in Touch</span>
              </Link>
              <div className="flex items-center gap-2 ml-1">
                {[
                  { href: "https://github.com/redoyrowshon-dotcom", Icon: Github, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/m-redoy-rowshon-2a0406424/", Icon: Linkedin, label: "LinkedIn" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-text-muted hover:text-text-primary glass-card !rounded-xl hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Tech pills */}
            <div className="flex flex-wrap items-center gap-2 mt-10 animate-slide-up" style={{ animationDelay: "420ms" }}>
              {["Python", "C", "Kali Linux", "Burp Suite", "JavaScript", "SQL"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-[11px] font-mono font-medium bg-navy-800/50 border border-border-subtle rounded-lg text-text-muted hover:text-electric-300 hover:border-electric-500/25 transition-all duration-300 cursor-default hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Avatar — spans 5 cols */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center animate-scale-in" style={{ animationDelay: "150ms" }}>
            <div className="relative group" style={{ perspective: "1000px" }}>
              {/* Glow */}
              <div className="absolute inset-0 rounded-[2rem] blur-3xl scale-110 opacity-40 dark:opacity-25" style={{ background: "conic-gradient(from 180deg, var(--color-electric-500), var(--color-cyan-accent), var(--color-electric-500))" }} aria-hidden="true" />

              {/* Orbital ring */}
              <div className="absolute -inset-10 animate-orbit opacity-30" aria-hidden="true">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-electric-400 rounded-full shadow-lg shadow-electric-400/40" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-accent rounded-full" />
              </div>
              <div className="absolute -inset-14 rounded-full border border-border-subtle/40" aria-hidden="true" />

              {/* Image card */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-[2rem] overflow-hidden border border-border-subtle group-hover:border-electric-500/30 shadow-2xl shadow-electric-500/10 group-hover:shadow-electric-500/20 transition-all duration-700 group-hover:scale-[1.02]">
                <SafeImage
                  src={profile.avatarUrl}
                  fallbackSrc="/fallback-avatar.png"
                  alt={`${profile.displayName} — ${profile.title}`}
                  className="w-full h-full object-cover scale-110"
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-3 -right-4 glass-card !rounded-2xl px-4 py-2.5 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-electric-400 rounded-full shadow-sm shadow-electric-400/50" />
                  <span className="text-xs font-mono text-text-secondary">{profile.githubUsername}</span>
                </div>
              </div>
              <div className="absolute -top-3 -left-4 glass-card !rounded-2xl px-4 py-2.5 shadow-xl animate-float-delayed">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-electric-400" />
                  <span className="text-xs font-mono text-text-secondary">Pen Tester</span>
                </div>
              </div>
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 glass-card !rounded-2xl px-3 py-2 shadow-xl animate-float" style={{ animationDelay: "4s" }}>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-cyan-accent" />
                  <span className="text-[10px] font-mono text-text-muted">{profile.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
          <span className="text-[10px] text-text-muted tracking-[0.2em] uppercase">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 text-text-muted animate-bounce" />
        </div>
      </div>
    </section>
  );
}
