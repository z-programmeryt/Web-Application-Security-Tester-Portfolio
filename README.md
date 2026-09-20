# M. Redoy Rowshon — Cybersecurity Portfolio

A premium, production-quality personal portfolio for **M. Redoy Rowshon** (Redoy) — Penetration Tester & Web Application Security Tester.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8)
![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red)

---

## ✨ Features

- **🌓 Dark / Light Mode** — Theme toggle with smooth transitions, persisted preference
- **🎨 3D Glass Morphism** — Premium frosted-glass cards with holographic shine effects
- **🌐 Interactive Network Canvas** — Mouse-reactive particle network background
- **⌨️ Typing Animation** — Cycles through professional titles with realistic speed
- **📐 3D Tilt Cards** — Perspective-based tilt on project cards via mouse tracking
- **📱 Mobile Bottom Nav** — App-like navigation with active state tracking + safe area insets
- **⏱️ Security Journey Timeline** — Visual path from foundation to active research
- **📊 GitHub Activity** — Language distribution, real stats, repo overview
- **🔐 Offline Support** — PWA with Service Worker, offline fallback, network status indicator
- **🎥 Video Architecture** — Future-ready scroll-driven video component (placeholder)
- **♿ WCAG 2.2 AA** — Semantic HTML, keyboard nav, reduced motion, screen reader support
- **🔍 Full SEO** — Open Graph, Twitter Cards, Schema.org structured data, sitemap
- **🛡️ Security Headers** — HSTS, X-Frame-Options, CSP-ready, Referrer-Policy, Permissions-Policy

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 4 |
| Theme | next-themes (class strategy) |
| Icons | Lucide React + custom SVG brand icons |
| Animation | CSS keyframes + spring physics |
| Canvas | Vanilla Canvas API (particle network) |
| PWA | Service Worker + Web App Manifest |
| Fonts | System font stack (Inter fallback) |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run typecheck

# Linting
npm run lint
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css           # Theme system, animations, glass effects
│   ├── layout.tsx            # Root layout, metadata, ThemeProvider
│   └── page.tsx              # Home page composition
├── components/
│   ├── icons/BrandIcons.tsx  # GitHub & LinkedIn SVG icons
│   ├── Header.tsx            # Sticky nav with glass blur + theme toggle
│   ├── Hero.tsx              # Hero with typing, orbital rings, glass badges
│   ├── About.tsx             # Bio + terminal snippet + highlight grid
│   ├── Expertise.tsx         # 4 glass expertise cards
│   ├── Skills.tsx            # Technical skills with icons
│   ├── SecurityFocus.tsx     # 6 color-coded focus area cards
│   ├── SecurityJourney.tsx   # Animated timeline
│   ├── Projects.tsx          # 3D tilt cards + detail modal
│   ├── GitHubActivity.tsx    # Language chart + repo stats
│   ├── Contact.tsx           # Glass contact card
│   ├── Footer.tsx            # Site footer with logo
│   ├── MobileBottomNav.tsx   # Mobile tab bar (safe-area)
│   ├── BackToTop.tsx         # Floating scroll-to-top
│   ├── ScrollProgress.tsx    # Top progress bar
│   ├── NetworkCanvas.tsx     # Theme-aware particle background
│   ├── OfflineIndicator.tsx  # Online/offline status toast
│   ├── VideoBackground.tsx   # Future scroll-driven video component
│   ├── TerminalSnippet.tsx   # macOS-style terminal display
│   ├── TypingText.tsx        # Typing animation component
│   ├── ThemeProvider.tsx     # next-themes wrapper
│   ├── ThemeToggle.tsx       # Sun/Moon toggle button
│   ├── SafeImage.tsx         # img with automatic error fallback
│   └── ServiceWorkerRegistrar.tsx
├── data/
│   ├── profile.ts            # Profile, social links, navigation
│   ├── skills.ts             # Skills categories & expertise areas
│   └── projects.ts           # Project data with ownership attribution
├── hooks/
│   ├── useScrollSpy.ts       # Scroll spy, reduced motion, IntersectionObserver
│   └── useTilt.ts            # 3D perspective tilt on mouse move
└── lib/
    └── utils.ts              # URL sanitization, className helpers

public/
├── logo.png                  # Portfolio logo
├── favicon.svg               # SVG favicon
├── icon-192.png / icon-512.png  # PWA icons
├── fallback-avatar.png       # Avatar fallback
├── og-image.png              # Open Graph preview (1200×630)
├── manifest.json             # PWA manifest
├── sw.js                     # Service Worker (network-first + cache)
├── offline.html              # Offline fallback page
├── robots.txt                # SEO robots
└── sitemap.xml               # SEO sitemap
```

## 🎨 Design System

### Colors (CSS Variables, theme-aware)

| Token | Dark | Light |
|-------|------|-------|
| `--color-navy-950` (bg) | `#040a18` | `#f8fafc` |
| `--color-surface` | `#0d1b2a` | `#ffffff` |
| `--color-text-primary` | `#e2e8f0` | `#0f172a` |
| `--color-electric-500` | `#3b82f6` | `#2563eb` |
| `--color-cyan-accent` | `#22d3ee` | `#0891b2` |

### Animations

- `slideUp` / `slideLeft` / `slideRight` — Spring-physics entrance (cubic-bezier)
- `scaleIn` — Pop-in for modals and cards
- `float` / `float-delayed` — Gentle vertical oscillation
- `shimmer` — Gradient text background-position animation
- `orbit` — 20s linear rotation for avatar rings
- `holoRotate` — Conic gradient holographic shine on hover
- `glow` — Pulsing box-shadow for accent elements

All animations respect `prefers-reduced-motion`.

## 🔐 Security Practices

| Practice | Implementation |
|----------|---------------|
| HSTS | `max-age=63072000; includeSubDomains; preload` |
| Frame Protection | `X-Frame-Options: SAMEORIGIN` |
| XSS Protection | `X-XSS-Protection: 1; mode=block` |
| Content Type | `X-Content-Type-Options: nosniff` |
| Referrer | `strict-origin-when-cross-origin` |
| Permissions | Camera, microphone, geolocation disabled |
| External Links | All `target="_blank"` with `rel="noopener noreferrer"` |
| No Secrets | Zero API keys, tokens, or credentials in source |
| URL Sanitization | Safe URL handling in `lib/utils.ts` |
| No `eval` | Zero eval/innerHTML usage |
| Safe HTML | `dangerouslySetInnerHTML` only for JSON-LD (own data) |

## ♿ Accessibility

- Semantic HTML (`<main>`, `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>`)
- ARIA labels on all interactive elements
- `aria-current="page"` on active navigation
- `aria-live="polite"` on offline indicator
- `aria-pressed` on theme toggle
- `role="progressbar"` on scroll progress
- `role="dialog"` + `aria-modal` on project modal
- Visible `:focus-visible` states
- Escape key closes modal and mobile menu
- `prefers-reduced-motion` fully respected
- Color contrast tested for both themes

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|-----------|--------|
| 320–639px | Single column, bottom nav, compact hero |
| 640–767px | Two-column skill grid, bottom nav |
| 768–1023px | Desktop nav, two-column projects |
| 1024–1279px | Full layout, two-column hero |
| 1280px+ | Max-width container, spacious layout |

Safe-area-inset support for iPhone notch/home indicator.

## 📊 Content Integrity

All portfolio content is evidence-based:

| Project | Type | Evidence |
|---------|------|---------|
| **WiFi RainbowBuffer** | ✅ Original | Created by Redoy (commit history, 4★, 2 forks) |
| **Shadowbroker** | ⚠️ Fork | BigBodyCobain/Shadowbroker — attributed |
| **World Monitor** | ⚠️ Fork | koala73/worldmonitor — attributed |
| **AhMyth** | ⚠️ Fork | Morsmalleo/AhMyth — attributed |

No fabricated experience, certifications, clients, or statistics.

## 🎥 Future Video Architecture

The `VideoBackground` component is ready for scroll-driven video integration:

```tsx
<VideoBackground
  src="/video/cybersecurity-narrative.mp4"
  poster="/images/video-poster.jpg"
  scrollRange={[0.2, 0.8]}
>
  {/* Content overlay */}
</VideoBackground>
```

Features: IntersectionObserver lazy loading, scroll-to-timecode mapping, mobile poster fallback, reduced motion support.

## 📄 License

Portfolio code © 2026 M. Redoy Rowshon. All rights reserved.

---

Built with ❤️ and Next.js — Secured by design.
