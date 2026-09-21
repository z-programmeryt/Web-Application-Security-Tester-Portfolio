import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import Marquee from "@/components/Marquee";
import TrustSignals from "@/components/TrustSignals";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import ServicesOverview from "@/components/ServicesOverview";
import ToolkitSection from "@/components/ToolkitSection";
import ProcessSection from "@/components/ProcessSection";
import SecurityFocus from "@/components/SecurityFocus";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import SecurityJourney from "@/components/SecurityJourney";
import GitHubActivity from "@/components/GitHubActivity";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import BackToTop from "@/components/BackToTop";
import OfflineIndicator from "@/components/OfflineIndicator";
import ServiceWorkerRegistrar from "@/components/ServiceWorkerRegistrar";
import Script from "next/script";
import { profile } from "@/data/profile";
import { homeFaqs } from "@/data/faq";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://redoyrowshon.vercel.app/#person",
      name: profile.displayName,
      alternateName: profile.nickname,
      jobTitle: profile.title,
      description: profile.tagline,
      email: profile.email,
      url: "https://redoyrowshon.vercel.app",
      sameAs: ["https://github.com/redoyrowshon-dotcom", "https://www.linkedin.com/in/m-redoy-rowshon-2a0406424/"],
      knowsAbout: ["Penetration Testing", "Web Application Security", "Python", "C Programming", "Kali Linux", "Ethical Hacking", "WiFi Security", "OSINT"],
    },
    {
      "@type": "WebSite",
      "@id": "https://redoyrowshon.vercel.app/#website",
      url: "https://redoyrowshon.vercel.app",
      name: `${profile.displayName} Portfolio`,
      publisher: { "@id": "https://redoyrowshon.vercel.app/#person" },
    },
    { "@type": "ProfilePage", "@id": "https://redoyrowshon.vercel.app/#profilepage", mainEntity: { "@id": "https://redoyrowshon.vercel.app/#person" }, url: "https://redoyrowshon.vercel.app" },
  ],
};

function Divider() {
  return <div className="section-divider my-2" />;
}

export default function Home() {
  return (
    <>
      <Script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ScrollProgress />
      <ServiceWorkerRegistrar />
      <OfflineIndicator />
      <Header />
      <MobileBottomNav />
      <BackToTop />
      <main>
        <Hero />
        <div className="relative z-10">
          <StatsBand />
        </div>
        <Marquee
          items={["WiFi-RainbowBuffer", "Penetration Testing", "Web App Security", "OSINT", "Python", "C", "Kali Linux", "Burp Suite", "Ethical Hacking", "Security Research"]}
          className="py-5 border-y border-border-subtle"
        />
        <TrustSignals />
        <Divider />
        <About />
        <Divider />
        <Expertise />
        <Divider />
        <ServicesOverview />
        <Divider />
        <ToolkitSection />
        <Divider />
        <ProcessSection />
        <Divider />
        <SecurityFocus />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <ReviewsSection />
        <Divider />
        <FaqSection
          items={homeFaqs}
          eyebrow="FAQ"
          title={
            <>
              Questions clients <span className="text-gradient">ask before hiring</span>
            </>
          }
          subtitle="Straight answers about scope, process, deliverables, and confidentiality — before you commit to anything."
        />
        <Divider />
        <CtaSection />
        <Divider />
        <SecurityJourney />
        <Divider />
        <GitHubActivity />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
