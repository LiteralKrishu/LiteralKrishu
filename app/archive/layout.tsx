import type { Metadata } from 'next';
import { projects } from '@/app/data/portfolio';

const description = `Explore ${projects.map(project => project.shortTitle).join(', ')}. Each project includes the code and Sousnigdho Das’s role.`;

export const metadata: Metadata = {
  title: 'Projects',
  description,
  alternates: { canonical: '/archive' },
  openGraph: {
    type: 'website',
    url: '/archive',
    title: 'Projects | Sousnigdho Das',
    description,
  },
};

export default function ArchiveLayout({ children }: { children: React.ReactNode }) {
  return children;
}
