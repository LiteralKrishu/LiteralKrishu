import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet Sousnigdho Das: AI/ML developer, full-stack engineer, Vedonyx COO, and B.Tech CSE (AI/ML) student at Newton School of Technology.',
  alternates: { canonical: '/identity' },
  openGraph: {
    type: 'profile',
    url: '/identity',
    title: 'About | Sousnigdho Das',
    description: 'Meet Sousnigdho Das: AI/ML developer, full-stack engineer, Vedonyx COO, and B.Tech CSE (AI/ML) student at Newton School of Technology.',
  },
};

export default function IdentityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
