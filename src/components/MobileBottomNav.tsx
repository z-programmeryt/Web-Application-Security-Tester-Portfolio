"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, FolderOpen, Newspaper, Mail } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home, href: "/" },
  { id: "about", label: "About", icon: User, href: "/about" },
  { id: "projects", label: "Projects", icon: FolderOpen, href: "/projects" },
  { id: "blog", label: "Blog", icon: Newspaper, href: "/blog" },
  { id: "contact", label: "Contact", icon: Mail, href: "/contact" },
];

export default function MobileBottomNav() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href) ?? false);

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-all duration-400 pb-[env(safe-area-inset-bottom)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      role="navigation"
      aria-label="Mobile navigation"
    >
      <div className="bg-navy-950/90 backdrop-blur-2xl shadow-2xl shadow-black/20 mx-3 mb-2 rounded-2xl overflow-hidden">
        <div className="flex items-center justify-around px-1 py-1.5">
          {navItems.map(({ id, label, icon: Icon, href }) => {
            const active = isActive(href);
            return (
              <Link
                key={id}
                href={href}
                className={`relative flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-all duration-300 min-w-[52px] active:scale-90 ${
                  active ? "text-electric-400" : "text-text-muted"
                }`}
                aria-label={label}
                aria-current={active ? "page" : undefined}
              >
                {active && <span className="absolute inset-0 bg-electric-500/8 rounded-xl border border-electric-500/10" />}
                <Icon className={`w-[18px] h-[18px] relative transition-transform duration-300 ${active ? "scale-110" : ""}`} />
                <span className={`relative text-[10px] font-medium leading-tight ${active ? "text-electric-400" : ""}`}>{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}