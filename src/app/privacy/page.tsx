import type { Metadata } from "next";
import type { ReactNode } from "react";
import PageShell from "@/components/PageShell";
import { profile } from "@/data/profile";

const SITE = "https://redoyrowshon.vercel.app";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for this portfolio website.",
  alternates: { canonical: `${SITE}/privacy` },
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

export default function PrivacyPage() {
  return (
    <PageShell>
      <div className="section-padding pt-32 md:pt-40 relative">
        <div className="max-w-2xl mx-auto">
          <span className="text-electric-400 font-mono text-xs tracking-[0.3em] uppercase">Legal</span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-black mb-8">Privacy Policy</h1>

          <Section title="Overview">
            <p>
              This privacy policy explains what happens with data when you visit {profile.nickname}&apos;s portfolio at {SITE}. This is a static portfolio — it does not collect personal data beyond what is described below.
            </p>
          </Section>

          <Section title="What we collect">
            <ul className="space-y-1.5">
              <li>• None via forms — there are no login or data-entry forms on this site.</li>
              <li>• The email link uses your own mail client; no data passes through this site.</li>
              <li>• Standard server logs may record IP address and user agent, as with any web host (Vercel).</li>
            </ul>
          </Section>

          <Section title="Third-party services">
            <p>
              The portfolio is hosted on Vercel, which processes standard access data. External links (GitHub, LinkedIn) open on their own platforms — their privacy policies apply there.
            </p>
          </Section>

          <Section title="Cookies & storage">
            <p>
              The site stores your theme preference (light/dark) locally in your browser to respect your choice. No tracking or advertising cookies are used.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              If you have questions about this policy, email{" "}
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