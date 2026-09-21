"use client";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { reviews, featuredReview } from "@/data/reviews";
import { Star, Quote, BadgeCheck } from "lucide-react";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

const quoteStrip = reviews.map(
  (r) => `"${r.quote.split(".")[0]}." — ${r.name}`,
);

export default function ReviewsSection() {
  return (
    <section id="reviews" className="section-padding relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-electric-500/6 blur-3xl pointer-events-none" aria-hidden />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          eyebrow="Client Reviews"
          title={
            <>
              Trusted by founders, <span className="text-gradient">developers & teams</span>
            </>
          }
          subtitle="Feedback from real engagements — web security audits, penetration testing, and security mentoring."
        />

        <div className="mb-8">
          <Marquee
            items={quoteStrip}
            className="py-3 border-y border-border-subtle"
            reverse
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          <Reveal className="lg:col-span-1" y={28}>
            <div className="glass-card gradient-border p-7 h-full flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-electric-500/30 mb-5" />
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-12 w-12 rounded-full bg-gradient-to-br from-electric-500 to-cyan-accent font-bold text-white items-center justify-center text-lg">
                    {featuredReview.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-text-primary">{featuredReview.name}</p>
                    <p className="text-xs text-text-muted">{featuredReview.role}</p>
                  </div>
                </div>
                <Stars count={featuredReview.rating} />
                <blockquote className="mt-4 text-[15px] text-text-secondary leading-relaxed">
                  “{featuredReview.quote}”
                </blockquote>
                <div className="mt-5 pt-5 border-t border-border-subtle flex items-center gap-2 text-xs text-text-muted">
                  <BadgeCheck className="w-4 h-4 text-electric-400" />
                  {featuredReview.service} · {featuredReview.project}
                </div>
              </div>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold text-gradient">5.0</p>
                  <p className="text-xs text-text-muted">average client rating</p>
                </div>
                <p className="text-xs text-text-muted max-w-[120px] text-right">
                  Every engagement leaves a documented, verifiable deliverable.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {reviews.slice(1).map((r, i) => (
              <Reveal key={r.id} delay={(i % 2) * 100} y={28}>
                <div className="glass-card glow-hover p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <Stars count={r.rating} />
                    <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider text-right">
                      {r.context}
                    </span>
                  </div>
                  <blockquote className="text-[13px] text-text-secondary leading-relaxed flex-1">
                    “{r.quote}”
                  </blockquote>
                  <div className="mt-5 pt-4 border-t border-border-subtle flex items-center gap-3">
                    <span className={`flex h-9 w-9 rounded-full ${r.accent} font-semibold text-white text-xs items-center justify-center`}>
                      {r.initials}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-text-primary truncate">{r.name}</p>
                      <p className="text-[11px] text-text-muted truncate">{r.role}</p>
                    </div>
                    <span className="text-[10px] text-text-muted font-mono shrink-0">{r.service}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}