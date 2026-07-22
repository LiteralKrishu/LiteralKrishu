import React from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function SpotlightCard({
  children,
  className = '',
}: SpotlightCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg border border-outline-variant/20 bg-surface p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
