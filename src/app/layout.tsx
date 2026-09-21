import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/data/profile";
import NetworkCanvas from "@/components/NetworkCanvas";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://redoyrowshon.vercel.app"),
  title: { default: `${profile.displayName} — ${profile.title}`, template: `%s | ${profile.displayName}` },
  description: profile.tagline,
  keywords: ["penetration tester", "web application security", "cybersecurity", "ethical hacker", "Kali Linux", "Python security", "WiFi security", "M. Redoy Rowshon"],
  authors: [{ name: profile.displayName, url: "https://github.com/redoyrowshon-dotcom" }],
  creator: profile.displayName,
  publisher: profile.displayName,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "profile",
    title: `${profile.displayName} — ${profile.title}`,
    description: profile.tagline,
    url: "https://redoyrowshon.vercel.app",
    siteName: `${profile.displayName} Portfolio`,
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${profile.displayName} — Penetration Tester` }],
  },
  twitter: { card: "summary_large_image", title: `${profile.displayName} — ${profile.title}`, description: profile.tagline, images: ["/og-image.png"] },
  alternates: { canonical: "https://redoyrowshon.vercel.app" },
  formatDetection: { telephone: false },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    title: "Redoy",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-navy-950 text-text-primary antialiased noise-overlay">
        <ThemeProvider>
          <NetworkCanvas />
          <div className="relative min-h-screen z-[2]">
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-20 dark:opacity-15 blur-3xl pointer-events-none z-0" style={{ background: "radial-gradient(ellipse, var(--color-electric-500), transparent 70%)" }} aria-hidden="true" />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
