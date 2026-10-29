import WobbleHome from '@/components/home/WobbleHome';
import {
  GITHUB_URL, LINKEDIN_URL, PROFILE_DESCRIPTION, PROFILE_LAST_REVIEWED,
  SITE_URL, STACKOVERHACK_LINKEDIN_URL, UNSTOP_URL, VEDONYX_PROFILE_URL, VEDONYX_URL,
} from '@/app/data/portfolio';

const profileSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': SITE_URL + '/#profile-page',
  url: SITE_URL + '/',
  name: 'Sousnigdho Das — Portfolio',
  description: PROFILE_DESCRIPTION,
  dateModified: PROFILE_LAST_REVIEWED,
  isPartOf: { '@id': SITE_URL + '/#website' },
  mainEntity: {
    '@type': 'Person',
    '@id': SITE_URL + '/#person',
    name: 'Sousnigdho Das',
    alternateName: 'LiteralKrishu',
    url: SITE_URL + '/',
    description: PROFILE_DESCRIPTION,
    jobTitle: 'Chief Operating Officer',
    worksFor: { '@type': 'Organization', '@id': VEDONYX_URL + '#organization', name: 'Vedonyx', url: VEDONYX_URL },
    affiliation: { '@type': 'CollegeOrUniversity', name: 'Newton School of Technology' },
    memberOf: { '@type': 'Organization', name: 'StackOverHack', sameAs: STACKOVERHACK_LINKEDIN_URL },
    knowsAbout: ['Artificial intelligence', 'Machine learning', 'Full-stack web development', 'Software engineering', 'Product operations'],
    sameAs: [LINKEDIN_URL, GITHUB_URL, UNSTOP_URL, VEDONYX_PROFILE_URL],
  },
};

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema).replace(/</g, '\\u003c') }} />
    <WobbleHome />
  </>;
}
