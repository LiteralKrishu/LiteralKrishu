import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactive Terminal',
  description: 'Interactive portfolio navigation for Sousnigdho Das.',
  robots: { index: false, follow: true },
};

export default function TerminalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
