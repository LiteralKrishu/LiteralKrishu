import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills & Working Style',
  description: 'The tools, disciplines, and working habits behind Sousnigdho Das\'s projects, from full-stack engineering and applied AI to product operations.',
  alternates: { canonical: '/arsenal' },
  openGraph: {
    type: 'website',
    url: '/arsenal',
    title: 'Skills & Working Style | Sousnigdho Das',
    description: 'The tools, disciplines, and working habits behind Sousnigdho Das\'s projects, from full-stack engineering and applied AI to product operations.',
  },
};

export default function ArsenalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
