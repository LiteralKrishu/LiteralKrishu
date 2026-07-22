import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects Sousnigdho Das has built and helped shape, including SafeCity, TransparAI, and Glow Glitter.',
  alternates: { canonical: '/archive' },
  openGraph: {
    type: 'website',
    url: '/archive',
    title: 'Projects | Sousnigdho Das',
    description: 'Projects Sousnigdho Das has built and helped shape, including SafeCity, TransparAI, and Glow Glitter.',
  },
};

export default function ArchiveLayout({ children }: { children: React.ReactNode }) {
  return children;
}
