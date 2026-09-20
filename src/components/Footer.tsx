import { Github, Linkedin } from "@/components/icons/BrandIcons";
import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import SafeImage from "@/components/SafeImage";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pb-20 md:pb-0">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 items-start">
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
            <p className="text-sm text-text-muted max-w-xs leading-relaxed">{profile.title}</p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[10px] font-mono text-electric-400 mb-4 uppercase tracking-[0.2em]">Navigate</h4>
            <ul className="space-y-2">
              {["Home", "About", "Expertise", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-text-muted hover:text-electric-300 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[10px] font-mono text-electric-400 mb-4 uppercase tracking-[0.2em]">Connect</h4>
            <div className="flex items-center gap-2.5 mb-4">
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
            <p className="text-xs text-text-muted font-mono">{profile.email}</p>
          </div>
        </div>

        <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted">© {year} {profile.displayName}. All rights reserved.</p>
          <p className="text-xs text-text-muted">Built with Next.js • Secured by design</p>
        </div>
      </div>
    </footer>
  );
}
