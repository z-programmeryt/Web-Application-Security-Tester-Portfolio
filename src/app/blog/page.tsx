import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/CtaSection";
import { blogPosts, featuredPost } from "@/data/blog";

const SITE = "https://redoyrowshon.vercel.app";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Security write-ups and practical notes on penetration testing, web application security, OSINT, and building security tooling.",
  alternates: { canonical: `${SITE}/blog` },
  openGraph: {
    title: "Blog",
    description: "Security write-ups and practical notes.",
    url: `${SITE}/blog`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const remaining = blogPosts.filter((post) => post.slug !== featuredPost.slug);

export default function BlogPage() {
  return (
    <PageShell>
      <PageHeader
        crumb="Blog"
        eyebrow="Write-ups"
        title={
          <>
            Notes from the <span className="text-gradient">lab</span>
          </>
        }
        description="Practical write-ups on penetration testing, web application security, OSINT, and the process of building security tooling."
      />

      <section className="section-padding pt-8">
        <div className="max-w-7xl mx-auto">
          {/* Featured article */}
          <Reveal className="mb-10">
            <Link href={`/blog/${featuredPost.slug}`} className="group block glass-card gradient-border overflow-hidden">
              <div className="p-7 sm:p-10 relative">
                <span className="absolute top-6 right-6 px-3 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">✦ Featured</span>
                <span className="text-[11px] font-mono text-text-muted flex items-center gap-2 mb-3">
                  <Calendar className="w-3.5 h-3.5" /> {featuredPost.date}
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {featuredPost.readingTime}</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 group-hover:text-electric-300 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-text-secondary leading-relaxed mb-5 max-w-2xl">{featuredPost.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-[10px] font-mono bg-electric-500/10 text-electric-300 border border-electric-500/15 rounded-full">#{t}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-electric-400">
                  Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {remaining.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block glass-card p-6 h-full hover:scale-[1.02] transition-all duration-300 flex flex-col">
                  <span className="text-[11px] font-mono text-text-muted flex items-center gap-2 mb-3">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readingTime}</span>
                  </span>
                  <h3 className="font-bold text-text-primary mb-2 group-hover:text-electric-300 transition-colors">{post.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed line-clamp-3 mb-4 flex-1">{post.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] font-mono bg-navy-800/50 border border-border-subtle rounded text-text-muted">#{t}</span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </PageShell>
  );
}