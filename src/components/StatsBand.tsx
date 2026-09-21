"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  { value: 5, suffix: "", label: "Public Repositories", hint: "GitHub" },
  { value: 4, suffix: "", label: "Stars earned", hint: "WiFi-RainbowBuffer" },
  { value: 2, suffix: "", label: "Forks & forks", hint: "Across projects" },
  { value: 4, suffix: "+", label: "Security Projects", hint: "Tooling & research" },
];

export default function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 mb-6">
      <div className="glass-card gradient-border grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-gradient">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
            </div>
            <p className="mt-1 text-xs font-medium text-text-primary">{stat.label}</p>
            <p className="text-[10px] text-text-muted font-mono mt-0.5">{stat.hint}</p>
          </div>
        ))}
      </div>
    </div>
  );
}