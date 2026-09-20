"use client";

import { Mail, Shield, ExternalLink, Copy, Check, MapPin } from "lucide-react";
import { Github, Linkedin } from "@/components/icons/BrandIcons";
import { profile } from "@/data/profile";
import { useInView } from "@/hooks/useScrollSpy";
import { useState } from "react";

export default function Contact() {
  const { setRef, inView } = useInView(0.15);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = profile.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding relative" ref={setRef}>
      {/* Gradient mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, var(--color-electric-500), transparent 70%)" }} aria-hidden="true" />

      <div className="max-w-4xl mx-auto relative">
        <div className={`text-center mb-14 ${inView ? "animate-slide-up" : "opacity-0"}`}>
          <span className="text-electric-400 font-mono text-xs tracking-widest uppercase mb-3 block">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Let&apos;s Talk <span className="text-gradient">Security</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">Open to security collaborations, pen testing engagements, and web app security conversations.</p>
        </div>

        <div className={`max-w-lg mx-auto ${inView ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: "120ms" }}>
          <div className="glass-card spotlight p-7 sm:p-9">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-electric-500/10 border border-electric-500/15 rounded-2xl animate-glow">
                <Shield className="w-6 h-6 text-electric-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary">{profile.displayName}</h3>
                <p className="text-sm text-electric-400 font-medium">{profile.shortTitle}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3 h-3 text-text-muted" />
                  <span className="text-xs text-text-muted">{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-2.5">
              {[
                { icon: Mail, label: profile.email, href: `mailto:${profile.email}`, isEmail: true },
                { icon: Github, label: "github.com/redoyrowshon-dotcom", href: "https://github.com/redoyrowshon-dotcom", external: true },
                { icon: Linkedin, label: "M. Redoy Rowshon", href: "https://www.linkedin.com/in/m-redoy-rowshon-2a0406424/", external: true },
              ].map(({ icon: Icon, label, href, isEmail, external }) => (
                <div key={label} className="group flex items-center gap-3 p-3.5 glass-card !rounded-xl hover:scale-[1.02] transition-all duration-300">
                  <div className="p-2 bg-electric-500/10 rounded-lg flex-shrink-0">
                    <Icon className="w-4 h-4 text-electric-400" />
                  </div>
                  <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="flex-1 text-sm text-text-primary hover:text-electric-300 transition-colors font-mono truncate">
                    {label}
                  </a>
                  {isEmail && (
                    <button onClick={handleCopyEmail} className="p-1.5 text-text-muted hover:text-text-primary transition-all hover:scale-110" aria-label="Copy email">
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  )}
                  {external && <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href={`mailto:${profile.email}?subject=Security%20Engagement%20Inquiry`}
                className="magnetic-btn block w-full text-center px-6 py-4 bg-gradient-to-r from-electric-500 to-electric-400 hover:from-electric-400 hover:to-cyan-accent text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-electric-500/20 hover:shadow-electric-500/35 hover:scale-[1.02]"
              >
                <span className="relative z-10">Send a Security Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
