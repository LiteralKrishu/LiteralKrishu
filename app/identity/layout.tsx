import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet Sousnigdho Das: software engineering management, COO at Vedonyx and ODT, and B.Tech CSE (AI/ML) student at Newton School of Technology.',
  alternates: { canonical: '/identity' },
  openGraph: {
    type: 'profile',
    url: '/identity',
    title: 'About | Sousnigdho Das',
    description: 'Meet Sousnigdho Das: software engineering management, COO at Vedonyx and ODT, and B.Tech CSE (AI/ML) student at Newton School of Technology.',
  },
};

export default function IdentityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
