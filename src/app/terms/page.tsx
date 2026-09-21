import type { Metadata } from "next";
import type { ReactNode } from "react";
import PageShell from "@/components/PageShell";
import { profile } from "@/data/profile";

const SITE = "https://redoyrowshon.vercel.app";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for this portfolio website.",
  alternates: { canonical: `${SITE}/terms` },
  robots: { index: false, follow: false },
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold text-text-primary mb-2">{title}</h2>
      <div className="text-text-secondary text-sm leading-relaxed space-y-2">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <PageShell>
      <div className="section-padding pt-32 md:pt-40 relative">
        <div className="max-w-2xl mx-auto">
          <span className="text-electric-400 font-mono text-xs tracking-[0.3em] uppercase">Legal</span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-black mb-8">Terms of Use</h1>

          <Section title="Content & purpose">
            <p>
              This site showcases {profile.displayName}&apos;s portfolio: background, projects, and educational articles on security topics. Content is provided for informational and educational purposes only.
            </p>
          </Section>

          <Section title="Ethics & responsibility">
            <p>
              Articles and project descriptions reference security techniques for educational and authorized testing contexts. You are responsible for ensuring any technique is applied only to systems you own or have explicit written authorization to test. Misuse is outside the intent of this site.
            </p>
          </Section>

          <Section title="Intellectual property">
            <p>
              Unless otherwise stated (e.g., project licenses), code, writing, and design on this site are the author&apos;s original work and may not be reproduced commercially without permission. Open-source projects carry their own licenses as noted on each repository.
            </p>
          </Section>

          <Section title="No warranty">
            <p>
              Content is provided &quot;as is&quot; without warranties of any kind. The author is not liable for any damages arising from use of the site or referenced techniques.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about these terms? Email{" "}
              <a href={`mailto:${profile.email}`} className="text-electric-400 hover:underline">
                {profile.email}
              </a>
              .
            </p>
          </Section>

          <p className="text-xs text-text-muted mt-10">Last updated: September 2026</p>
        </div>
      </div>
    </PageShell>
  );
}