import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Behind the Interface',
  description: 'A short look at the console-inspired visual system behind the Sousnigdho Das portfolio.',
  robots: { index: false, follow: true },
};

export default function VaultLayout({ children }: { children: React.ReactNode }) {
  return children;
}
