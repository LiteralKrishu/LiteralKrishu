'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollEffects() {
  const pathname = usePathname();
  useEffect(() => {
    const main = document.getElementById('main-content');
    if (!main) return;
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const heroArt = main.querySelector('.hero-art .project-visual');
      if (heroArt) gsap.to(heroArt, {
        y: -34,
        rotateZ: 5,
        ease: 'none',
        scrollTrigger: { trigger: heroArt.closest('.home-hero'), start: 'top top', end: 'bottom top', scrub: 0.8 },
      });
      const star = main.querySelector('.contact-star');
      if (star) gsap.fromTo(star, { rotate: -25, y: 20 }, {
        rotate: 50, y: -20, ease: 'none',
        scrollTrigger: { trigger: star.closest('.home-contact'), start: 'top bottom', end: 'bottom top', scrub: 0.8 },
      });
      main.querySelectorAll<HTMLElement>('.project-cover-image').forEach(image => {
        gsap.fromTo(image, { yPercent: -4, scale: 1.08 }, {
          yPercent: 4, scale: 1.08, ease: 'none',
          scrollTrigger: { trigger: image.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
        });
      });
    }, main);
    let timer: ReturnType<typeof setTimeout>;
    let previousWidth = 0;
    let previousHeight = 0;
    // Wait for layout to settle, including responsive playground and open details.
    const resize = new ResizeObserver(([entry]) => {
      if (!entry) return;
      const { width, height } = entry.contentRect;
      if (width === previousWidth && height === previousHeight) return;
      previousWidth = width;
      previousHeight = height;
      clearTimeout(timer);
      timer = setTimeout(() => ScrollTrigger.refresh(true), 120);
    });
    resize.observe(main);
    return () => { resize.disconnect(); clearTimeout(timer); media.revert(); };
  }, [pathname]);
  return null;
}
