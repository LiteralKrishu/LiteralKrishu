import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore SafeCity, TransparAI, SAATHI, and NykaaCopilot, with links to the code and Sousnigdho Das’s role in each project.',
  alternates: { canonical: '/archive' },
  openGraph: {
    type: 'website',
    url: '/archive',
    title: 'Projects | Sousnigdho Das',
    description: 'Explore SafeCity, TransparAI, SAATHI, and NykaaCopilot, with links to the code and Sousnigdho Das’s role in each project.',
  },
};

export default function ArchiveLayout({ children }: { children: React.ReactNode }) {
  return children;
}
