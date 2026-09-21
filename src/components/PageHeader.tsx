"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  crumb: string;
  children?: ReactNode;
};

export default function PageHeader({ eyebrow, title, description, crumb, children }: PageHeaderProps) {
  return (
    <section className="relative section-padding pt-32 md:pt-40 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full blur-[120px] opacity-25 dark:opacity-20" style={{ background: "radial-gradient(ellipse, var(--color-electric-500), transparent 70%)" }} />
      <div aria-hidden className="pointer-events-none absolute inset-0 cyber-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative">
        <motion.nav
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-1.5 text-xs font-mono text-text-muted mb-6"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="inline-flex items-center gap-1 hover:text-electric-400 transition-colors">
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-electric-400">{crumb}</span>
        </motion.nav>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="text-electric-400 font-mono text-xs tracking-[0.3em] uppercase"
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}