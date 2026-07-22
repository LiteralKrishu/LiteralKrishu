'use client';

import React, { useEffect, useState } from 'react';

interface Spark {
  id: number;
  x: number;
  y: number;
}

export default function ClickSpark() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handlePointerDown = (event: PointerEvent) => {
      const id = Date.now();
      setSparks(current => [...current.slice(-4), { id, x: event.clientX, y: event.clientY }]);
      window.setTimeout(() => {
        setSparks(current => current.filter(spark => spark.id !== id));
      }, 650);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    return () => window.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[70]">
      {sparks.map(spark => (
        <span
          key={spark.id}
          className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/70 animate-click-spark"
          style={{ left: spark.x, top: spark.y }}
        >
          <span className="absolute left-1/2 top-1/2 h-px w-8 -translate-x-1/2 bg-accent/70" />
          <span className="absolute left-1/2 top-1/2 h-8 w-px -translate-y-1/2 bg-magenta/60" />
        </span>
      ))}
    </div>
  );
}
