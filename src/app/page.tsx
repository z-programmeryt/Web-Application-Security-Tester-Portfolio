import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Skills from "@/components/Skills";
import SecurityFocus from "@/components/SecurityFocus";
import SecurityJourney from "@/components/SecurityJourney";
import Projects from "@/components/Projects";
import GitHubActivity from "@/components/GitHubActivity";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import BackToTop from "@/components/BackToTop";
import OfflineIndicator from "@/components/OfflineIndicator";
import ServiceWorkerRegistrar from "@/components/ServiceWorkerRegistrar";
import Script from "next/script";
import { profile } from "@/data/profile";

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
          className="py-5 border-y border-border-subtle mb-4"
        />
        <Divider />
        <About />
        <Divider />
        <Expertise />
        <Divider />
        <Skills />
        <Divider />
        <SecurityFocus />
        <Divider />
        <SecurityJourney />
        <Divider />
        <Projects />
        <Divider />
        <GitHubActivity />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
