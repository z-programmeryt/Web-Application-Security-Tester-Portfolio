# M. Redoy Rowshon — Web Application Security Tester Portfolio

A premium, production-quality portfolio for **M. Redoy Rowshon** (aka Redoy) — Penetration Tester & Web Application Security Tester. Built as a single-page Next.js application with a glass-morphism cyber-security design system, full PWA support, and deployment on **Vercel**.

![Next.js](https://img.shields.io/badge/Next.js-16-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8) ![React](https://img.shields.io/badge/React-19-61dafb) ![Deployment](https://img.shields.io/badge/Deployment-Vercel-000) ![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red)

> 🌐 **Live**: [redoyrowshon.vercel.app](https://redoyrowshon.vercel.app) — connected to Vercel (auto-deploy on push to `main`).

---

## 🎯 Vision & Goal

The portfolio's goal is to present **Redoy's real, verifiable cybersecurity work** — not a list of inflated claims:

- Showcase **evidence-based projects** (original code, released tools, and clearly attributed forks).
- Emphasize the **core skill set**: penetration testing, web application security, Linux/Kali operations, and security tooling in Python & C.
- Build a **fast, accessible, PWA-grade site** with strong SEO and security headers.
- Stay **honest**: no fabricated certifications, clients, or statistics.

Every number on the site is cross-checked against live GitHub data.

---

## ✨ Features (এখন যা আছে — What exists today)

### Visual & UI/UX
- 🌓 **Dark / Light mode** — theme toggle with smooth transitions and persisted preference
- 🎨 **Glass morphism design system** — frosted-glass cards, spotlight hover, holographic shine
- 🌐 **Interactive network canvas** — mouse-reactive particle background (theme aware)
- ⌨️ **Typing animation** — cycles professional titles with realistic typing speed
- 📐 **3D tilt cards** — perspective tilt on project cards via mouse tracking
- 📱 **Mobile bottom nav** — app-like navigation with active state + safe-area insets
- ⏱️ **Security Journey timeline** — visual path from programming foundation to security research
- 📊 **GitHub Activity** — verified stats: language distribution, repos, stars, forks
- 🎥 **Video-ready architecture** — scroll-driven `VideoBackground` component (placeholder, ready for content)

### Engineering & Quality
- 🔐 **Offline support (PWA)** — Service Worker, offline fallback page, online/offline indicator, Web App Manifest, installable icons
- ♿ **WCAG 2.2 AA** — semantic HTML, keyboard nav, focus states, ARIA labels, reduced-motion support
- 🔍 **Full SEO** — Open Graph, Twitter Cards, Schema.org structured data, sitemap, robots
- 🛡️ **Security headers** — HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy
- ⚡ **Performance** — static prerendering, lazy-loaded imagery, eager loading for the hero (LCP), no unused framework weight
- 🛠️ **Zero secrets** — no API keys/tokens/credentials anywhere in source

### Content & Data Integrity
| Project | Type | Evidence |
|---------|------|---------|
| **WiFi RainbowBuffer** | ✅ Original | Authored by Redoy (Python), 4★ / 2 forks, live repo |
| **Shadowbroker** | ⚠️ Fork | `BigBodyCobain/Shadowbroker` — attributed |
| **World Monitor** | ⚠️ Fork | `koala73/worldmonitor` — attributed |
| **AhMyth** | ⚠️ Fork | `Morsmalleo/AhMyth` — attributed |

No fabricated experience, certifications, clients, or statistics.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 4 (CSS-first config) |
| Theme | next-themes (class strategy) |
| Icons | Lucide React + custom SVG brand icons |
| Animation | CSS keyframes + spring physics + Canvas |
| PWA | Service Worker + Web App Manifest + app icons |
| Hosting | Vercel (auto-deploy from `main`) |

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Development server (http://localhost:3000)
npm run dev

# 3. Production build
npm run build

# 4. Start production server
npm start

# 5. Quality checks
npm run typecheck
npm run lint
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css           # Theme tokens, glass system, animations
│   ├── layout.tsx            # Root layout, SEO/PWA metadata, ThemeProvider
│   ├── page.tsx              # Home page composition + JSON-LD
│   └── not-found.tsx         # Custom styled 404 page
├── components/
│   ├── icons/                # BrandIcons (GitHub/LinkedIn) + TechIcons (brand SVGs)
│   ├── Header.tsx            # Sticky glass nav + mobile menu
│   ├── Hero.tsx              # Typing text, orbital rings, glass badges
│   ├── About.tsx             # Bento bio grid + terminal snippet
│   ├── Expertise.tsx         # 4 expertise glass cards
│   ├── Skills.tsx            # Tech skills with icons
│   ├── SecurityFocus.tsx     # 6 color-coded focus cards
│   ├── SecurityJourney.tsx   # Animated timeline
│   ├── Projects.tsx          # 3D tilt cards + detail modal
│   ├── GitHubActivity.tsx    # Verified language chart + stats
│   ├── Contact.tsx           # Glass contact card (copy-email + links)
│   ├── Footer.tsx / MobileBottomNav.tsx / BackToTop.tsx / ScrollProgress.tsx
│   ├── NetworkCanvas.tsx / OfflineIndicator.tsx / VideoBackground.tsx
│   ├── TerminalSnippet.tsx / TypingText.tsx / AnimatedCounter.tsx
│   ├── ThemeProvider.tsx / ThemeToggle.tsx / SafeImage.tsx
│   └── ServiceWorkerRegistrar.tsx
├── data/
│   ├── profile.ts            # Profile, social links, navigation
│   ├── skills.ts             # Skill categories + expertise areas
│   └── projects.ts           # Projects with ownership attribution
├── hooks/
│   ├── useScrollSpy.ts       # Scroll spy + useInView + reduced motion
│   ├── useTilt.ts            # 3D perspective tilt
│   └── useSpotlight.ts       # Mouse-tracked card spotlight
└── lib/
    └── utils.ts              # URL sanitization + class helpers

public/
├── icon-192.png / icon-512.png  # PWA app icons
├── og-image.png                 # Open Graph preview (1200×630)
├── logo.png / favicon.svg       # Branding
├── fallback-avatar.png          # Avatar fallback
├── manifest.json / sw.js        # PWA manifest + service worker
├── offline.html                 # Offline fallback page
└── robots.txt / sitemap.xml     # SEO
```

---

## 🎨 Design System

### Color tokens (theme-aware CSS variables)

| Token | Dark | Light |
|-------|------|-------|
| Background (`--bg`) | `#030712` | `#f8fafc` |
| Surface (`--color-surface`) | `#0c1525` | `#ffffff` |
| Text primary | `#f1f5f9` | `#0f172a` |
| Electric accent | `#3b82f6` | `#2563eb` |
| Cyan accent | `#22d3ee` | `#0891b2` |

### Motion
`slideUp` / `slideLeft` / `slideRight` (spring-like bezier), `scaleIn`, `float`, `shimmer`, `orbit`, `holoRotate`-style glows, `counter` (animated stats). All respect `prefers-reduced-motion`.

---

## 🔐 Security Practices

| Practice | Implementation |
|----------|---------------|
| HSTS | `max-age=63072000; includeSubDomains; preload` |
| Frame protection | `X-Frame-Options: SAMEORIGIN` |
| Content type | `X-Content-Type-Options: nosniff` |
| Referrer policy | `strict-origin-when-cross-origin` |
| Permissions policy | Camera, microphone, geolocation disabled |
| External links | `target="_blank"` + `rel="noopener noreferrer"` |
| Secrets | Zero API keys / tokens / credentials in source |
| URL handling | Sanitization helpers in `lib/utils.ts` |
| No `eval` | Zero `eval` / `innerHTML`; JSON-LD via own data only |

---

## ♿ Accessibility

Semantic landmarks, ARIA labels, `aria-expanded`/`aria-pressed`/`aria-modal`, `role="dialog"`, `role="progressbar"`, visible `:focus-visible`, Escape-key handling, reduced-motion support, and contrast-checked palettes for both themes.

---

## 📱 Responsive Breakpoints

| Range | Layout |
|-------|--------|
| 320–639px | Single column, bottom nav, compact hero |
| 640–767px | Two-column grids, bottom nav |
| 768–1279px | Desktop nav, two-column projects |
| 1280px+ | Max-width container, spacious layout |

Safe-area-inset support for iPhone notch / home indicator.

---

## 🗺️ Roadmap (যা এখন নেই — What's next)

Planned improvements, ordered by priority:

| Priority | Item | Status |
|----------|------|--------|
| P0 | PWA app icons (`icon-192/512`) shipped | ✅ Done |
| P0 | Canonical domain updated to `redoyrowshon.vercel.app` | ✅ Done |
| P0 | OG image corrected to 1200×630 | ✅ Done |
| P1 | Contact form with client-side validation + spam-safe `mailto:` fallback | 🔜 Planned |
| P1 | Live GitHub stats via a scheduled revalidation / ISR API route | 🔜 Planned |
| P1 | Add a `resume` page or downloadable CV (privacy-safe) | 🔜 Planned |
| P2 | Multi-language support (EN / BN) | 🔜 Planned |
| P2 | Blog / write-ups section for security research notes | 🔜 Planned |
| P2 | Scroll-driven hero video content (component already built) | 🔜 Planned |
| P3 | Blogging, stats endpoint caching, RSS feed | 🧠 Idea |
| P3 | Custom domain (`redoyrowshon.com`) once DNS is configured | 🧠 Idea |

---

## ☁️ Deployment (Vercel)

The site is connected to **Vercel** and auto-deploys from the `main` branch:

1. Push to `main` → Vercel builds (`npm run build`) → deploys production.
2. Preview deployments are generated for pull requests.
3. All development happens on **feature branches** and is merged into `main` only after typecheck/lint/build pass.

Configuration lives in `next.config.ts` (security headers + image remote patterns). No platform-specific build config is required.

---

## 🧭 Branch Strategy

```
main  ───────────main───────────────────────────── ► deploy (Vercel production)
        \                     /
         \__ improvements __/   ← development branch (work, verify, merge)
```

Rules:
- Never commit directly to `main`.
- Work on a feature branch (e.g. `improvements`).
- Verify with `npm run typecheck && npm run lint && npm run build`.
- Merge into `main` (stable `--no-ff` merge) and push.

---

## 📄 License

Portfolio code © 2026 M. Redoy Rowshon. All rights reserved.

Forked/attributed projects retain their original licenses (AGPL-3.0, MIT, GPL-3.0).

---

Built with ❤️ and Next.js — Secured by design. Verified against live GitHub data.