"use client";

type MarqueeProps = {
  items: string[];
  reverse?: boolean;
  className?: string;
};

export default function Marquee({ items, reverse = false, className = "" }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className={`relative overflow-hidden ${className}`} role="presentation">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-950 to-transparent z-10 dark:opacity-100 opacity-90" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-950 to-transparent z-10 dark:opacity-100 opacity-90" aria-hidden />
      <div className={`flex w-max animate-marquee ${reverse ? "[animation-direction:reverse]" : ""}`}>
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="mx-6 font-mono text-sm text-text-muted flex items-center gap-3 whitespace-nowrap">
            <span className="text-electric-400">▹</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}