import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { blogPosts, getPostBySlug } from "@/data/blog";

const SITE = "https://redoyrowshon.vercel.app";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getPostBySlug(slug);
    if (!post) return { title: "Article not found" };
    return {
      title: post.title,
      description: post.description,
      alternates: { canonical: `${SITE}/blog/${post.slug}` },
      openGraph: {
        title: post.title,
        description: post.description,
        url: `${SITE}/blog/${post.slug}`,
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
      },
    };
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const index = blogPosts.findIndex((p) => p.slug === slug);
  const next = blogPosts[index + 1];
  const prev = blogPosts[index - 1];

  const sections = [
    { kind: "heading" as const, text: post.title },
    { kind: "paragraph" as const, text: post.description },
    ...(post.longDescription ? [{ kind: "heading" as const, text: "What you will learn" }, { kind: "paragraph" as const, text: post.longDescription }] : []),
    { kind: "list" as const, text: "", items: post.tags },
  ];

  function Block({ block }: { block: { kind: string; text: string; items?: string[] } }) {
    switch (block.kind) {
      case "heading":
        return <h2 className="text-xl sm:text-2xl font-bold text-text-primary mt-10 mb-4">{block.text}</h2>;
      case "paragraph":
        return <p className="text-text-secondary leading-relaxed mb-4">{block.text}</p>;
      case "list":
        return (
          <ul className="space-y-2 mb-4">
            {(block.items ?? []).map((item) => (
              <li key={item} className="flex items-start gap-2 text-text-secondary">
                <span className="text-electric-400 mt-0.5">▹</span>{item}
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  }

  return (
    <PageShell>
      <article className="section-padding pt-32 md:pt-40 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[360px] w-[720px] rounded-full blur-[120px] opacity-25 dark:opacity-20" style={{ background: "radial-gradient(ellipse, var(--color-electric-500), transparent 70%)" }} />

        <div className="max-w-3xl mx-auto relative">
          <Reveal y={16}>
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-electric-400 transition-colors mb-8">
              <ArrowLeft className="w-3.5 h-3.5" /> All articles
            </Link>
          </Reveal>

          <Reveal y={20}>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 text-[10px] font-mono bg-electric-500/10 text-electric-300 border border-electric-500/15 rounded-full">#{t}</span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-5">{post.title}</h1>
            <div className="flex items-center gap-4 text-xs font-mono text-text-muted mb-8">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readingTime} read</span>
            </div>
            <p className="text-lg text-text-secondary leading-relaxed mb-10 border-l-2 border-electric-500/40 pl-4">{post.description}</p>
          </Reveal>

          <Reveal y={24}>
            {sections.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </Reveal>

          <div className="mt-12 pt-8 border-t border-border-subtle">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {prev ? (
                <Link href={`/blog/${prev.slug}`} className="group glass-card !rounded-xl p-4 flex-1">
                  <span className="text-[10px] text-text-muted flex items-center gap-1 mb-1"><ArrowLeft className="w-3 h-3" /> Previous</span>
                  <span className="text-sm font-medium text-text-primary group-hover:text-electric-300 transition-colors line-clamp-2">{prev.title}</span>
                </Link>
              ) : <div className="flex-1" />}
              {next ? (
                <Link href={`/blog/${next.slug}`} className="group glass-card !rounded-xl p-4 flex-1 text-right">
                  <span className="text-[10px] text-text-muted flex items-center gap-1 justify-end mb-1">Next <ArrowRight className="w-3 h-3" /></span>
                  <span className="text-sm font-medium text-text-primary group-hover:text-electric-300 transition-colors line-clamp-2">{next.title}</span>
                </Link>
              ) : <div className="flex-1" />}
            </div>
          </div>
        </div>
      </article>
    </PageShell>
  );
}