"use client";

import { useEffect, useState, useRef } from "react";

export default function TypingText({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  // For reduced motion, show static first text
  useEffect(() => {
    if (!mountedRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // Use direct DOM update to avoid lint warning
      const el = document.getElementById("typing-text");
      if (el) el.textContent = texts[0];
    }
  }, [texts]);

  useEffect(() => {
    if (!mountedRef.current) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const currentText = texts[textIndex];

    const tick = () => {
      if (!mountedRef.current) return;
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
          timeoutRef.current = setTimeout(tick, typingSpeed + Math.random() * 40);
        } else {
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
            tick();
          }, pauseDuration);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
          timeoutRef.current = setTimeout(tick, deletingSpeed);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
          timeoutRef.current = setTimeout(tick, 400);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, typingSpeed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center">
      <span id="typing-text" className="text-gradient font-bold">{displayText}</span>
      <span className="inline-block w-0.5 h-[1.1em] bg-electric-400 ml-1 animate-pulse" aria-hidden="true" />
    </span>
  );
}
