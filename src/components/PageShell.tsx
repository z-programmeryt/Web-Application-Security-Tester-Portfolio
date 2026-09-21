import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import BackToTop from "@/components/BackToTop";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <MobileBottomNav />
      <BackToTop />
      <main>{children}</main>
      <Footer />
    </>
  );
}