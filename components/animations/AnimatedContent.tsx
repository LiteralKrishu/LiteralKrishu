import React from 'react';

interface AnimatedContentProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export default function AnimatedContent({
  children,
  className = '',
  delay = 0,
  y = 20
}: AnimatedContentProps) {
  return (
    <div
      className={`animate-content-reveal ${className}`}
      style={{
        animationDelay: `${delay}s`,
        '--reveal-y': `${y}px`
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
