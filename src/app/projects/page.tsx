import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import ProjectGallery from "@/components/ProjectGallery";

const SITE = "https://redoyrowshon.vercel.app";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Security tooling and research projects — WiFi penetration testing tools, OSINT platforms, and mobile security research.",
  alternates: { canonical: `${SITE}/projects` },
  openGraph: {
    title: "Projects",
    description: "Security tooling and research projects built by Redoy.",
    url: `${SITE}/projects`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHeader
        crumb="Projects"
        eyebrow="Selected work"
        title={
          <>
            Tools & <span className="text-gradient">research</span>
          </>
        }
        description="Open-source projects spanning penetration testing, OSINT, and security research — each one a practical exercise in understanding how systems work and where they break."
      />
      <ProjectGallery />
    </PageShell>
  );
}