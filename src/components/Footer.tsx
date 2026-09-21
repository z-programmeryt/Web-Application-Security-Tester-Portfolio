import Link from "next/link";
import { Github, Linkedin } from "@/components/icons/BrandIcons";
import { Mail, Terminal, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { siteNavigation } from "@/data/navigation";
import { featuredProjects } from "@/data/projects";
import SafeImage from "@/components/SafeImage";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-bg-elevated border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-electric-500/20">
                <SafeImage src="/logo.png" fallbackSrc="/favicon.svg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-bold text-base text-text-primary">{profile.nickname}</span>
                <span className="text-electric-400">.</span>
              </div>
            </div>
            <p className="text-sm text-text-muted max-w-xs leading-relaxed mb-4">
              {profile.title}. Author of open-source security tooling and an authorized penetration tester focused on clear, evidence-backed results.
            </p>
            <div className="flex items-center gap-2.5 mb-5">
              {[
                { href: "https://github.com/redoyrowshon-dotcom", Icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/m-redoy-rowshon-2a0406424/", Icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
                { href: "https://wa.me/8801991642605", Icon: MessageCircle, label: "WhatsApp", external: true },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target={Icon === Mail ? undefined : "_blank"} rel={Icon === Mail ? undefined : "noopener noreferrer"} className="p-2.5 text-text-muted hover:text-text-primary glass-card !rounded-lg hover:scale-110 transition-all duration-300" aria-label={label}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft" /> Available for authorized work
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[10px] font-mono text-electric-400 mb-4 uppercase tracking-[0.2em]">Explore</h4>
            <ul className="space-y-2">
              {siteNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-text-muted hover:text-electric-300 transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
            <ul className="mt-5 space-y-2">
              <li><Link href="/blog" className="text-sm text-text-muted hover:text-electric-300 transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-sm text-text-muted hover:text-electric-300 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-mono text-electric-400 mb-4 uppercase tracking-[0.2em]">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-text-muted hover:text-electric-300 transition-colors">Web Security Audit</Link></li>
              <li><Link href="/services" className="text-sm text-text-muted hover:text-electric-300 transition-colors">Penetration Testing</Link></li>
              <li><Link href="/services" className="text-sm text-text-muted hover:text-electric-300 transition-colors">WiFi Security</Link></li>
              <li><Link href="/services" className="text-sm text-text-muted hover:text-electric-300 transition-colors">Training & Mentoring</Link></li>
              <li><Link href="/services" className="text-sm text-text-muted hover:text-electric-300 transition-colors">Incident Response</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-[10px] font-mono text-electric-400 mb-4 uppercase tracking-[0.2em]">Featured Work</h4>
            <ul className="space-y-2">
              {featuredProjects.map((project) => (
                <li key={project.slug}>
                  <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted hover:text-electric-300 transition-colors flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-electric-400/70" /> {project.title}
                  </a>
                </li>
              ))}
              <li><Link href="/projects" className="text-sm text-text-muted hover:text-electric-300 transition-colors">All projects</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border-subtle">
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <p>© {year} {profile.displayName}. All rights reserved.</p>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Made by Mr. Manab</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-text-muted hover:text-electric-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-text-muted hover:text-electric-300 transition-colors">Terms</Link>
            <a href="https://wa.me/8801991642605" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 transition-colors">
              <MessageCircle className="w-3 h-3" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}