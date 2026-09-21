import Link from "next/link";
import { Terminal, Home, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-6">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[130px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-electric-500), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative glass-card spotlight max-w-lg w-full p-10 sm:p-14 text-center animate-scale-in">
        <div className="w-14 h-14 mx-auto mb-6 p-3 bg-electric-500/10 border border-electric-500/15 rounded-2xl">
          <Terminal className="w-7 h-7 text-electric-400" />
        </div>

        <p className="font-mono text-electric-400 text-xs tracking-[0.3em] uppercase mb-3">Error 404</p>
        <h1 className="text-6xl sm:text-7xl font-black tracking-tight mb-4">
          <span className="text-gradient">404</span>
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-2">
          This endpoint does not exist.
        </p>
        <p className="text-text-muted text-sm mb-8">
          The page you are looking for was moved, removed, or never deployed. No payload found.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric-500 to-electric-400 text-white text-sm font-semibold rounded-xl shadow-lg shadow-electric-500/20 hover:scale-[1.03] transition-all duration-300"
          >
            <Home className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Back to Home</span>
          </Link>
          <a
            href={`mailto:${profile.email}?subject=Broken%20link%20on%20portfolio`}
            className="inline-flex items-center gap-2 px-6 py-3 border border-border-medium hover:border-electric-500/40 text-sm font-medium rounded-xl transition-all hover:bg-electric-500/5"
          >
            <Mail className="w-4 h-4" />
            Report Broken Link
          </a>
        </div>
      </div>
    </main>
  );
}