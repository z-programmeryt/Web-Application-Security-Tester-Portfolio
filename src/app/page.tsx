import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
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
      "@id": "https://redoyrowshon.com/#person",
      name: profile.displayName,
      alternateName: profile.nickname,
      jobTitle: profile.title,
      description: profile.tagline,
      email: profile.email,
      url: "https://redoyrowshon.com",
      sameAs: ["https://github.com/redoyrowshon-dotcom", "https://www.linkedin.com/in/m-redoy-rowshon-2a0406424/"],
      knowsAbout: ["Penetration Testing", "Web Application Security", "Python", "C Programming", "Kali Linux", "Ethical Hacking", "WiFi Security", "OSINT"],
    },
    {
      "@type": "WebSite",
      "@id": "https://redoyrowshon.com/#website",
      url: "https://redoyrowshon.com",
      name: `${profile.displayName} Portfolio`,
      publisher: { "@id": "https://redoyrowshon.com/#person" },
    },
    { "@type": "ProfilePage", "@id": "https://redoyrowshon.com/#profilepage", mainEntity: { "@id": "https://redoyrowshon.com/#person" }, url: "https://redoyrowshon.com" },
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
