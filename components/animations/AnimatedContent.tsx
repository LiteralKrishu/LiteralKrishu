'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedContentProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  variant?: 'reveal' | 'scroll-card';
  direction?: number;
}

export default function AnimatedContent({ children, className = '', delay = 0, y = 20, variant = 'reveal', direction = 1 }: AnimatedContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const media = gsap.matchMedia();
    media.add({ motion: '(prefers-reduced-motion: no-preference)', compact: '(max-width: 700px)' }, context => {
      if (!context.conditions?.motion) return;
      if (variant === 'scroll-card') {
        // This component owns the card transform; cover parallax animates a child.
        gsap.fromTo(element, {
          y: context.conditions.compact ? 48 : 88,
          rotation: direction * (context.conditions.compact ? 1 : 2.5),
          rotationX: context.conditions.compact ? 0 : 7,
          scale: 0.94,
          transformPerspective: 1200,
          transformOrigin: '50% 80%',
        }, {
          y: 0, rotation: 0, rotationX: 0, scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: element, start: 'top bottom', end: 'top 48%', scrub: 0.65, invalidateOnRefresh: true },
        });
        return;
      }
      // Animate position only: text stays readable throughout the reveal.
      gsap.fromTo(element, { y }, {
        y: 0,
        duration: 0.7,
        delay: Math.min(delay, 0.18),
        ease: 'power3.out',
        immediateRender: false,
        clearProps: 'transform',
        scrollTrigger: { trigger: element, start: 'top 94%', once: true },
      });
    });
    return () => media.revert();
  }, [delay, y, variant, direction]);

  return <div ref={ref} className={className}>{children}</div>;
}
