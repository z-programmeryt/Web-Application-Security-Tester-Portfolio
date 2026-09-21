"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { Github, Linkedin } from "@/components/icons/BrandIcons";
import { profile } from "@/data/profile";
import { siteNavigation } from "@/data/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import SafeImage from "@/components/SafeImage";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const activeId = (item: { href: string }) => {
    if (item.href === "/") return pathname === "/";
    return pathname?.startsWith(item.href) ?? false;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg-elevated/90 backdrop-blur-2xl shadow-lg shadow-black/5"
            : "bg-bg-elevated/95"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="Home" onClick={() => setMobileOpen(false)}>
              <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-electric-500/20 group-hover:border-electric-500/50 transition-all duration-300 shadow-md shadow-electric-500/10">
                <SafeImage src="/logo.png" fallbackSrc="/favicon.svg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-base text-text-primary group-hover:text-electric-300 transition-colors">{profile.nickname}</span>
              <span className="text-electric-400">.</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-0.5 glass-card !rounded-full !border-transparent px-1 py-1" aria-label="Main navigation">
              {siteNavigation.map((item) => {
                const isActive = activeId(item);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive ? "text-white" : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-electric-500/15 border border-electric-500/20 rounded-lg shadow-sm shadow-electric-500/10" />
                    )}
                    <span className="relative">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              {[
                { href: "https://github.com/redoyrowshon-dotcom", Icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/m-redoy-rowshon-2a0406424/", Icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="p-2.5 text-text-muted hover:text-text-primary glass-card !rounded-lg hover:scale-110 transition-all duration-300" aria-label={label}>
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
              <a
                href="https://wa.me/8801865342789"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn ml-1 inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-[18px] h-[18px]" /> WhatsApp
              </a>
              <Link href="/contact" className="magnetic-btn ml-1 px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-electric-500 to-electric-400 text-white rounded-xl shadow-lg shadow-electric-500/20 hover:shadow-electric-500/35 hover:scale-105 transition-all duration-300">
                <span className="relative z-10">Hire Me</span>
              </Link>
            </div>

            {/* Mobile actions */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2.5 text-text-secondary hover:text-text-primary glass-card !rounded-lg transition-all active:scale-95" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-bg-elevated/98 backdrop-blur-2xl md:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="flex flex-col items-center justify-center h-full gap-5 px-6">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border border-electric-500/20 mb-3 animate-scale-in shadow-lg shadow-electric-500/10">
              <SafeImage src="/logo.png" fallbackSrc="/favicon.svg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            {siteNavigation.map((item, i) => {
              const isActive = activeId(item);
              return (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={`text-2xl font-semibold transition-all duration-500 animate-slide-up ${isActive ? "text-electric-400" : "text-text-secondary"}`} style={{ animationDelay: `${i * 80 + 80}ms` }}>
                  {item.label}
                </Link>
              );
            })}
            <div className="flex items-center gap-3 mt-6 animate-fade-in" style={{ animationDelay: "500ms" }}>
              <a href="https://github.com/redoyrowshon-dotcom" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 text-text-muted hover:text-text-primary glass-card !rounded-xl"><Github className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/m-redoy-rowshon-2a0406424/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 text-text-muted hover:text-text-primary glass-card !rounded-xl"><Linkedin className="w-5 h-5" /></a>
              <a href="https://wa.me/8801865342789" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-3 text-emerald-400 hover:text-emerald-300 glass-card !rounded-xl"><MessageCircle className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}