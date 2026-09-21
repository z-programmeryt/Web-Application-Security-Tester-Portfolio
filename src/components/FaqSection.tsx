"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import type { Faq } from "@/data/faq";

type FaqSectionProps = {
  items: Faq[];
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
};

export default function FaqSection({
  items,
  eyebrow = "FAQ",
  title = (
    <>
      Frequently asked <span className="text-gradient">questions</span>
    </>
  ),
  subtitle = "Straight answers about scope, process, deliverables, and confidentiality — before you commit to anything.",
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading align="left" eyebrow={eyebrow} title={title} subtitle={subtitle} />
          <Reveal delay={0.1} y={20}>
            <LinkCTA />
          </Reveal>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.question} delay={Math.min(i * 60, 240)} y={20}>
                <div
                  className={`glass-card overflow-hidden transition-colors ${
                    isOpen ? "border-electric-500/25" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-electric-400 shrink-0" />
                      <span className="text-[15px] font-semibold text-text-primary">{item.question}</span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 flex items-center justify-center w-7 h-7 rounded-lg bg-electric-500/10 text-electric-300"
                    >
                      <Plus className="w-4 h-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="px-5 pb-5 pl-[3.25rem] text-sm text-text-secondary leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LinkCTA() {
  return (
    <div className="glass-card p-5 flex items-center gap-4">
      <div className="flex-1">
        <p className="text-sm font-semibold text-text-primary">Still have a question?</p>
        <p className="text-xs text-text-muted mt-1">Ask directly — you&apos;ll get a straight answer.</p>
      </div>
      <a
        href="mailto:redoyc17@gmail.com"
        className="shrink-0 inline-flex items-center px-4 py-2 rounded-lg bg-electric-500/10 text-electric-300 text-xs font-semibold hover:bg-electric-500/20 transition-colors"
      >
        Ask now
      </a>
    </div>
  );
}