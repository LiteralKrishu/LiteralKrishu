'use client';

import { useEffect, type ReactNode, type RefObject } from 'react';
import { motion, useIsPresent, useReducedMotion } from 'framer-motion';

export const menuItemMotion = {
  hidden: { opacity: 0, x: -16, y: 12 },
  open: { opacity: 1, x: 0, y: 0, transition: { duration: .52, ease: [.22, 1, .36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: .15 } },
};

export default function AnimatedMobileMenu({ menuRef, children }: { menuRef: RefObject<HTMLDivElement>; children: ReactNode }) {
  const present = useIsPresent();
  const reduced = useReducedMotion();
  useEffect(() => {
    if (menuRef.current) menuRef.current.inert = !present;
  }, [present, menuRef]);
  return <motion.div ref={menuRef} id="mobile-navigation" className="mobile-navigation" role="dialog" aria-modal="true" aria-label="Navigation"
    initial={reduced ? false : 'hidden'} animate="open" exit="exit"
    variants={{
      hidden: { opacity: 0, y: -28, scale: .985 },
      open: { opacity: 1, y: 0, scale: 1, transition: { duration: reduced ? 0 : .5, ease: [.22, 1, .36, 1], staggerChildren: reduced ? 0 : .09, delayChildren: reduced ? 0 : .12 } },
      exit: { opacity: 0, y: reduced ? 0 : -18, scale: reduced ? 1 : .99, transition: { duration: reduced ? 0 : .25, ease: [.4, 0, 1, 1], staggerChildren: reduced ? 0 : .012, staggerDirection: -1 } },
    }} style={{ transformOrigin: 'top center', pointerEvents: present ? 'auto' : 'none' }}>
    {children}
  </motion.div>;
}
