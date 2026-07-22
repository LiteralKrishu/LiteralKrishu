import type { Metadata } from 'next';
import Link from 'next/link';
import { BadgeCheck, ExternalLink } from 'lucide-react';
import AnimatedContent from '@/components/animations/AnimatedContent';
import SpotlightCard from '@/components/animations/SpotlightCard';
import {
  credentials,
  PROFILE_LAST_REVIEWED,
  SITE_URL,
  UNSTOP_URL,
} from '@/app/data/portfolio';

const pageDescription =
  'Hackathons, coding challenges, and quizzes that Sousnigdho Das has participated in, with certificates and event links from Unstop.';

export const metadata: Metadata = {
  title: 'Hackathons & Certificates',
  description: pageDescription,
  alternates: { canonical: '/credentials' },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/credentials`,
    title: 'Hackathons & Certificates | Sousnigdho Das',
    description: pageDescription,
  },
};

const credentialsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${SITE_URL}/credentials#page`,
  url: `${SITE_URL}/credentials`,
  name: 'Hackathons and Certificates — Sousnigdho Das',
  description: pageDescription,
  dateModified: PROFILE_LAST_REVIEWED,
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: credentials.length,
    itemListElement: credentials.map((credential, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'EducationalOccupationalCredential',
        '@id': `${SITE_URL}/credentials#credential-${index + 1}`,
        name: credential.title,
        url: `${SITE_URL}/credentials#credential-${index + 1}`,
        sameAs: credential.certificateUrl,
        credentialCategory: 'Certificate of Participation',
        recognizedBy: {
          '@type': 'Organization',
          name: credential.issuer,
        },
      },
    })),
  },
};

export default function CredentialsPage() {
  return (
    <div className="relative flex min-h-full flex-col px-6 pb-12 pt-8 md:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(credentialsSchema).replace(/</g, '\\u003c'),
        }}
      />

      <AnimatedContent className="mb-10">
        <header className="flex flex-col items-start justify-between gap-4 border-b border-outline-variant/20 pb-6 md:flex-row md:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-accent" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-accent">LEARNING // HACKATHONS // CHALLENGES</span>
            </div>
            <h1 className="font-syne text-3xl font-extrabold uppercase tracking-tight text-primary neon-text-glow md:text-4xl">
              Hackathons &amp; Certificates
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-on-surface-variant">
              I learn best by building under pressure. These are the hackathons, challenges, and quizzes I have taken part in. Competitive placements live separately under Wins &amp; Milestones.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/achievements" className="font-mono text-[10px] uppercase tracking-widest text-accent hover:text-primary">
              See wins &amp; milestones →
            </Link>
            <a
              href={UNSTOP_URL}
              target="_blank"
              rel="me noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest text-magenta hover:text-primary"
            >
              Open my Unstop profile ↗
            </a>
          </div>
        </header>
      </AnimatedContent>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {credentials.map((credential, index) => (
          <AnimatedContent key={credential.certificateUrl} delay={index * 0.05} className="h-full">
            <SpotlightCard className="flex h-full flex-col" spotlightColor="rgba(0, 221, 221, 0.1)">
              <div className="flex items-start justify-between gap-5">
                <span className="font-mono text-[9px] text-outline-variant">ENTRY-{String(index + 1).padStart(2, '0')}</span>
                <span className="font-mono text-[9px] uppercase text-green">PARTICIPATED</span>
              </div>
              <h2 id={`credential-${index + 1}`} className="mt-5 font-syne text-xl font-bold uppercase text-primary">{credential.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{credential.issuer}</p>
              <div className="mt-5 grid gap-3 border-t border-outline-variant/20 pt-5 font-mono text-[10px] uppercase tracking-wider sm:grid-cols-2">
                <div>
                  <span className="block text-outline">Format</span>
                  <span className="mt-1 block text-accent">{credential.category}</span>
                </div>
                <div>
                  <span className="block text-outline">Certificate issued</span>
                  <span className="mt-1 block text-accent">{credential.certificateRecordDate}</span>
                </div>
              </div>
              {credential.note && (
                <p className="mt-5 border-l-2 border-magenta/60 pl-4 text-xs leading-relaxed text-outline">{credential.note}</p>
              )}
              <div className="mt-auto flex flex-wrap gap-x-5 gap-y-3 pt-6">
                <a
                  href={credential.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent hover:text-primary"
                >
                  Certificate
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href={credential.eventUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-magenta hover:text-primary"
                >
                  Event page
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </SpotlightCard>
          </AnimatedContent>
        ))}
      </div>

      <p className="mt-8 max-w-4xl text-xs leading-relaxed text-outline">
        Dates shown here are the dates Unstop recorded the certificates, which may differ from the event dates. I only list a placement when the organiser published one.
      </p>
    </div>
  );
}
