import Link from "next/link";
import { Github, Linkedin } from "@/components/icons/BrandIcons";
import { Mail, ShieldCheck, Terminal } from "lucide-react";
import { profile } from "@/data/profile";
import { siteNavigation } from "@/data/navigation";
import { featuredProjects } from "@/data/projects";
import SafeImage from "@/components/SafeImage";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-electric-500/20">
                <SafeImage src="/logo.png" fallbackSrc="/favicon.svg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-bold text-base text-text-primary">{profile.nickname}</span>
                <span className="text-electric-400">.</span>
              </div>
            </div>
            <p className="text-sm text-text-muted max-w-xs leading-relaxed mb-4">{profile.title}</p>
            <div className="flex items-center gap-2.5">
              {[
                { href: "https://github.com/redoyrowshon-dotcom", Icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/m-redoy-rowshon-2a0406424/", Icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="p-2.5 text-text-muted hover:text-text-primary glass-card !rounded-lg hover:scale-110 transition-all duration-300" aria-label={label}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
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
              {featuredProjects.length === 0 && (
                <li>
                  <Link href="/projects" className="text-sm text-text-muted hover:text-electric-300 transition-colors">All projects</Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-mono text-electric-400 mb-4 uppercase tracking-[0.2em]">Contact</h4>
            <p className="text-xs text-text-muted font-mono mb-3 break-all">{profile.email}</p>
            <p className="text-xs text-text-muted mb-4">{profile.location} · Working remotely</p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm text-electric-400 hover:text-electric-300 transition-colors">
              <ShieldCheck className="w-4 h-4" /> Start a conversation
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border-subtle">
          <p className="text-xs text-text-muted">© {year} {profile.displayName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-text-muted hover:text-electric-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-text-muted hover:text-electric-300 transition-colors">Terms</Link>
            <span className="text-xs text-text-muted">Built with Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}