"use client";

import { useEffect, useRef } from "react";

export default function AnimatedCounter({
  target,
  suffix = "",
  duration = 1500,
  inView = false,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  inView?: boolean;
}) {
  const elRef = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current || !elRef.current) return;
    started.current = true;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      elRef.current.textContent = `${target}${suffix}`;
      return;
    }

    const el = elRef.current;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = `${Math.round(eased * target)}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration, suffix]);

  return <span ref={elRef}>0{suffix}</span>;
}
