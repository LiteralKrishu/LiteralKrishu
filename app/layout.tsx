import type { Metadata } from 'next';
import './globals.css';
import HUDLayout from '@/components/layout/HUDLayout';
import {
  LINKEDIN_URL,
  PROFILE_DESCRIPTION,
  SITE_URL,
} from '@/app/data/portfolio';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sousnigdho Das | AI/ML Developer, Full-Stack Engineer & COO',
    template: '%s | Sousnigdho Das',
  },
  description: PROFILE_DESCRIPTION,
  authors: [{ name: 'Sousnigdho Das', url: LINKEDIN_URL }],
  creator: 'Sousnigdho Das',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_IN',
    url: SITE_URL,
    title: 'Sousnigdho Das | AI/ML Developer, Full-Stack Engineer & COO',
    description: PROFILE_DESCRIPTION,
    siteName: 'Sousnigdho Das',
  },
  twitter: {
    card: 'summary',
    title: 'Sousnigdho Das | AI/ML Developer, Full-Stack Engineer & COO',
    description: PROFILE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: 'Sousnigdho Das',
  alternateName: 'Sousnigdho Das Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className="antialiased">
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t!=='light'&&t!=='dark')t='dark';document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;}catch(e){}})();` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, '\\u003c'),
          }}
        />
        <HUDLayout>{children}</HUDLayout>
      </body>
    </html>
  );
}
