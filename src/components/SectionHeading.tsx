import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
};

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-2xl mb-12 ${isCenter ? "mx-auto text-center" : ""}`}>
      <Reveal y={20}>
        <span className="text-electric-400 font-mono text-xs tracking-[0.25em] uppercase">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08} y={24}>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16} y={20}>
          <p className="mt-4 text-text-secondary text-base sm:text-lg leading-relaxed">{subtitle}</p>
        </Reveal>
      )}
      <Reveal delay={0.24} y={16}>
        <div className={`w-16 h-0.5 bg-gradient-to-r from-electric-500 to-cyan-accent rounded-full mt-6 ${isCenter ? "mx-auto" : ""}`} />
      </Reveal>
    </div>
  );
}