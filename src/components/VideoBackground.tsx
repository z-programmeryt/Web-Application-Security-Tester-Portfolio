"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * VideoBackground — Future-ready scroll-driven video component.
 *
 * Architecture:
 * 1. IntersectionObserver tracks when the section is visible
 * 2. Scroll position maps to video currentTime
 * 3. Fallback poster image shown when video isn't loaded
 * 4. Respects prefers-reduced-motion (shows static poster)
 * 5. Lazy loads video only when section enters viewport
 * 6. Mobile devices get poster image (saves bandwidth)
 *
 * Usage:
 * <VideoBackground
 *   src="/video/cybersecurity-narrative.mp4"
 *   poster="/images/video-poster.jpg"
 *   scrollRange={[0.2, 0.8]}
 * >
 *   {content}
 * </VideoBackground>
 *
 * Future implementation notes:
 * - MP4 (H.264) for broad compatibility
 * - WebM (VP9) as secondary source
 * - Keep video under 10MB for performance
 * - Use <source> elements for format negotiation
 * - Consider IntersectionObserver threshold array for precision
 */

interface VideoBackgroundProps {
  /** Video source URL (MP4 recommended) */
  src?: string;
  /** WebM alternative source */
  srcWebm?: string;
  /** Poster image shown before/instead of video */
  poster: string;
  /** Scroll range [start, end] as 0-1 fraction of page scroll */
  scrollRange?: [number, number];
  /** Whether video should loop */
  loop?: boolean;
  /** Children to overlay on top */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export default function VideoBackground({
  src,
  srcWebm,
  poster,
  scrollRange = [0, 1],
  loop = false,
  children,
  className = "",
}: VideoBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 768px)").matches : false
  );
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false
  );
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Listen for changes to media queries
  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleMobile = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    const handleMotion = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);

    mobileQuery.addEventListener("change", handleMobile);
    motionQuery.addEventListener("change", handleMotion);

    return () => {
      mobileQuery.removeEventListener("change", handleMobile);
      motionQuery.removeEventListener("change", handleMotion);
    };
  }, []);

  // IntersectionObserver for lazy loading
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Scroll-driven video progress
  useEffect(() => {
    if (!src || isMobile || prefersReducedMotion || !videoLoaded) return;

    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerTop = rect.top;
      const containerHeight = rect.height;

      // Calculate scroll progress within the container
      const scrollStart = containerTop + containerHeight * scrollRange[0];
      const scrollEnd = containerTop + containerHeight * scrollRange[1];
      const scrollProgress = Math.max(
        0,
        Math.min(1, (windowHeight - scrollStart) / (scrollEnd - scrollStart + windowHeight))
      );

      if (video.duration && isFinite(video.duration)) {
        video.currentTime = scrollProgress * video.duration;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [src, isMobile, prefersReducedMotion, videoLoaded, scrollRange]);

  const shouldShowVideo = src && !isMobile && !prefersReducedMotion && isVisible;

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Poster / fallback image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Video element — only rendered when needed */}
      {shouldShowVideo && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          loop={loop}
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          aria-hidden="true"
        >
          {srcWebm && <source src={srcWebm} type="video/webm" />}
          {src && <source src={src} type="video/mp4" />}
        </video>
      )}

      {/* Overlay gradient for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/50 to-navy-950/80"
        aria-hidden="true"
      />

      {/* Content overlay */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
