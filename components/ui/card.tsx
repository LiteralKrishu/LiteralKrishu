'use client';

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  serial?: string;
  accent?: 'accent' | 'magenta' | 'green' | 'default';
  className?: string;
  showCorners?: boolean;
}

export default function Card({
  children,
  title,
  serial,
  accent = 'default',
  className = '',
  showCorners = true,
}: CardProps) {
  const borderAccents = {
    default: 'border-accent/40',
    accent: 'border-accent',
    magenta: 'border-magenta',
    green: 'border-green',
  };

  const textAccents = {
    default: 'text-on-surface-variant',
    accent: 'text-accent',
    magenta: 'text-magenta',
    green: 'text-green',
  };

  return (
    <div
      className={twMerge(
        clsx(
          'bg-surface border border-outline-variant/15 p-6 relative shadow-[0_0_15px_rgba(0,0,0,0.4)]',
          className
        )
      )}
    >
      {/* HUD Brackets */}
      {showCorners && (
        <>
          <div className={`hud-corner hud-corner-tl ${borderAccents[accent]}`} />
          <div className={`hud-corner hud-corner-tr ${borderAccents[accent]}`} />
          <div className={`hud-corner hud-corner-bl ${borderAccents[accent]}`} />
          <div className={`hud-corner hud-corner-br ${borderAccents[accent]}`} />
        </>
      )}

      {/* Header element if title or serial is provided */}
      {(title || serial) && (
        <div className="flex justify-between items-start mb-4 border-b border-outline-variant/10 pb-2">
          {title && (
            <h3 className={`font-mono text-xs uppercase tracking-widest font-bold ${textAccents[accent]}`}>
              {title}
            </h3>
          )}
          {serial && (
            <span className="font-mono text-[9px] text-outline-variant tracking-wider uppercase">
              {serial}
            </span>
          )}
        </div>
      )}

      {children}
    </div>
  );
}
