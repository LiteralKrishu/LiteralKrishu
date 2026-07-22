'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

interface DecryptedTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  iterations?: number;
}

const glyphs = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*+-/<>';

export default function DecryptedText({
  text,
  className = '',
  delay = 0,
  speed = 32,
  iterations = 18
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const original = useMemo(() => Array.from(text), [text]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setStarted(true);
      setDisplayText(text);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting) {
          window.setTimeout(() => setStarted(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [delay, text]);

  useEffect(() => {
    if (!started) return;

    let frame = 0;
    const timer = window.setInterval(() => {
      frame += 1;
      setDisplayText(
        original
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (frame > index + iterations) return char;
            return glyphs[Math.floor(Math.random() * glyphs.length)];
          })
          .join('')
      );

      if (frame > original.length + iterations) {
        window.clearInterval(timer);
        setDisplayText(text);
      }
    }, speed);

    return () => window.clearInterval(timer);
  }, [iterations, original, speed, started, text]);

  return (
    <span ref={elementRef} className={className} aria-label={text}>
      {displayText}
    </span>
  );
}
