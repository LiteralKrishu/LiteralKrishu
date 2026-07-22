'use client';

import React from 'react';

interface TechDividerProps {
  className?: string;
  vertical?: boolean;
}

export default function TechDivider({ className = '', vertical = false }: TechDividerProps) {
  if (vertical) {
    return (
      <div className={`relative flex flex-col items-center ${className}`}>
        <div className="w-1.5 h-1.5 bg-accent/40 rotate-45 shrink-0"></div>
        <div className="w-px flex-grow bg-outline-variant/30 my-1"></div>
        <div className="w-1.5 h-1.5 bg-accent/40 rotate-45 shrink-0"></div>
      </div>
    );
  }

  return (
    <div className={`relative flex items-center w-full my-6 ${className}`}>
      <div className="w-1.5 h-1.5 bg-accent/40 rotate-45 shrink-0"></div>
      <div className="h-px flex-grow bg-outline-variant/30 mx-1"></div>
      <div className="w-1.5 h-1.5 bg-accent/40 rotate-45 shrink-0"></div>
    </div>
  );
}
