'use client';

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'accent' | 'magenta' | 'green' | 'white' | 'outline';
  glitch?: boolean;
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'accent', 
  glitch = true, 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-mono text-xs uppercase tracking-widest px-5 py-2.5 btn-cut transition-all duration-300 select-none cursor-pointer text-center relative';
  
  const variants = {
    accent: 'bg-transparent border border-accent text-accent hover:bg-accent hover:text-black',
    magenta: 'bg-magenta text-white hover:bg-fuchsia-600 border border-magenta',
    green: 'bg-transparent border border-green text-green hover:bg-green hover:text-black',
    white: 'bg-white text-black hover:bg-on-surface-variant border border-white',
    outline: 'bg-transparent border border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary',
  };

  return (
    <button
      className={twMerge(
        clsx(
          baseStyles,
          variants[variant],
          glitch && 'glitch-hover',
          className
        )
      )}
      {...props}
    >
      {children}
    </button>
  );
}
