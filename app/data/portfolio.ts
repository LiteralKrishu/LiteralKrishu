export const SITE_URL = "https://sousnigdhodas.vedonyx.in";
export const LINKEDIN_URL = "https://www.linkedin.com/in/sousnigdho-das/";
export const STACKOVERHACK_LINKEDIN_URL =
  "https://www.linkedin.com/company/stackoverhack/";
export const GITHUB_URL = "https://github.com/LiteralKrishu";
export const UNSTOP_URL = "https://unstop.com/u/sousndas69815";
export const VEDONYX_URL = "https://www.vedonyx.com/";
export const VEDONYX_PROFILE_URL = "https://www.vedonyx.com/team/sousnigdho-das";
export const PROFILE_LAST_REVIEWED = "2026-10-28";
export const EDUCATION_SUMMARY =
  "Pursuing B.Tech CSE (AI/ML) at Newton School of Technology";

export const IIT_MANDI_ORGANISER_RESULT_URL =
  "https://www.linkedin.com/posts/ihubiitmandi_multimodalai-hackathon-iitmandi-activity-7406989681428656128-irXj";
export const IIT_MANDI_RESULT_REPOST_URL =
  "https://www.linkedin.com/posts/sousnigdho-das_multimodalai-hackathon-iitmandi-activity-7432299173623980032-YpgH";
export const IIT_MANDI_CERTIFICATE_POST_URL =
  "https://www.linkedin.com/posts/sousnigdho-das_stackoverhack-multimodalai-iitmandi-activity-7432093419520499712-hOQg";
export const IIT_MANDI_UNSTOP_CERTIFICATE_URL =
  "https://unstop.com/api/certificate/0e618c71-4433-4612-a55f-252784ce6776";

export const PROFILE_DESCRIPTION =
  "Sousnigdho Das is an AI/ML developer, full-stack engineer and COO at Vedonyx, pursuing B.Tech CSE (AI/ML) at Newton School of Technology.";

export interface EvidenceLink {
  label: string;
  url: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  shortTitle: string;
  year: string;
  status: string;
  category: string;
  summary: string;
  seoDescription: string;
  role: string;
  details: string[];
  sources: EvidenceLink[];
  sourceNote: string;
  repositoryUrl?: string;
  liveUrl?: string;
  programmingLanguages?: string[];
}

export const projects: PortfolioProject[] = [
  {
    slug: "safecity",
    title: "SafeCity — Multimodal Safety Prototype",
    shortTitle: "SafeCity",
    year: "2025–2026",
    status: "SAFETY PROTOTYPE",
    category: "MULTIMODAL AI SYSTEM",
    summary:
      "I lead SafeCity with StackOverHack. The phone-based prototype uses sound, motion, visual, and contextual cues to flag possible distress and work through alerts in stages.",
    seoDescription:
      "SafeCity is StackOverHack's multimodal safety prototype. Sousnigdho Das is listed as team leader; the project received third prize at TIH–IIT Mandi in 2025.",
    role:
      "I lead the team and work on the architecture, backend, and app. The SmallAI programme lists me as team leader.",
    details: [
      "The app brings phone sensor readings together to decide when to ask the user to check in.",
      "Alerts move through stages; one sound or movement does not automatically become an SOS.",
      "Our team placed third at TIH–IIT Mandi under the name Team City (Safe Stack Over Hack). The ₹25,000 prize was shared.",
    ],
    sources: [
      {
        label: "Public SafeCity repository",
        url: "https://github.com/LiteralKrishu/SafeCity",
      },
      {
        label: "SafeCity architecture and release status",
        url: "https://github.com/LiteralKrishu/SafeCity/blob/main/docs/ARCHITECTURE.md",
      },
      {
        label: "StackOverHack on LinkedIn",
        url: STACKOVERHACK_LINKEDIN_URL,
      },
      {
        label: "Official SmallAI programme",
        url: "https://smallai2026.thescrs.org/2nd-smallai-hackathon-program-schedule/",
      },
      {
        label: "IIT Mandi iHub organiser result",
        url: IIT_MANDI_ORGANISER_RESULT_URL,
      },
      {
        label: "Sousnigdho's prize-certificate post",
        url: IIT_MANDI_CERTIFICATE_POST_URL,
      },
      {
        label: "Unstop participation certificate",
        url: IIT_MANDI_UNSTOP_CERTIFICATE_URL,
      },
    ],
    sourceNote:
      "The organiser confirms the placement, and the SmallAI programme names me as team leader. Our team name appears in a few forms across those records. The repository calls SafeCity a prototype awaiting release certification.",
    repositoryUrl: "https://github.com/LiteralKrishu/SafeCity",
    liveUrl: "https://safe-city-one.vercel.app/",
    programmingLanguages: ["TypeScript"],
  },
  {
    slug: "transparai",
    title: "TransparAI — Procurement Transparency Dashboard",
    shortTitle: "TransparAI",
    year: "2025",
    status: "HACKATHON PROJECT",
    category: "OPEN-SOURCE PROTOTYPE",
    summary:
      "We built TransparAI with Python and Streamlit for the SFLC.in hackathon. It puts public procurement data in a dashboard and flags unusual patterns for a person to investigate.",
    seoDescription:
      "TransparAI is an open-source Python and Streamlit dashboard for exploring public-procurement data and surfacing patterns for human review.",
    role:
      "I worked on the dashboard with StackOverHack during SFLC.in Hackathon 2025.",
    details: [
      "The dashboard makes it easier to spot concentration, delays, and other unusual patterns.",
      "It gives people leads to check; it does not make procurement decisions.",
      "StackOverHack finished third at SFLC.in's 2025 hackathon.",
    ],
    sources: [
      {
        label: "Public TransparAI repository",
        url: "https://github.com/LiteralKrishu/TransparAI",
      },
      {
        label: "StackOverHack on LinkedIn",
        url: STACKOVERHACK_LINKEDIN_URL,
      },
      {
        label: "Official SFLC.in hackathon recap",
        url: "https://sflc.in/sflc-in-hackathon-2025-celebrating-open-collaboration-and-digital-freedom/",
      },
      {
        label: "Sousnigdho Das on LinkedIn",
        url: LINKEDIN_URL,
      },
    ],
    sourceNote:
      "SFLC.in confirms our team's third-place finish but does not name the project in its recap. TransparAI was team work.",
    repositoryUrl: "https://github.com/LiteralKrishu/TransparAI",
    liveUrl: "https://transparai.streamlit.app/",
    programmingLanguages: ["Python"],
  },
  {
    slug: "saathi",
    title: "SAATHI — Case Coordination Frontend",
    shortTitle: "SAATHI Frontend",
    year: "2026",
    status: "CONTROLLED PROTOTYPE",
    category: "CASE COORDINATION",
    summary:
      "SAATHI's React app lets authorized staff open cases and follow their progress. It connects to a Django API. A separate demo mode uses made-up records.",
    seoDescription:
      "SAATHI is a React case-coordination frontend connected to a Django REST backend. It is a controlled prototype, not an approved emergency dispatch system.",
    role:
      "I work on the frontend and how it talks to the backend with StackOverHack.",
    details: [
      "District officers and state and national administrators see routes matched to their roles.",
      "In connected mode, the case form sends new records to the backend. Demo records stay in browser memory.",
      "Authentication, pagination, and automated tests still need work before release.",
    ],
    sources: [
      {
        label: "SAATHI frontend repository",
        url: "https://github.com/LiteralKrishu/saathi",
      },
      {
        label: "SAATHI backend repository",
        url: "https://github.com/LiteralKrishu/saathi-backend",
      },
    ],
    sourceNote:
      "The frontend README calls this a controlled prototype. It does not claim that a police, ambulance, or other outside service received a case without an acknowledgement.",
    repositoryUrl: "https://github.com/LiteralKrishu/saathi",
    programmingLanguages: ["TypeScript"],
  },
  {
    slug: "saathi-backend",
    title: "SAATHI Backend — Case Coordination API",
    shortTitle: "SAATHI Backend",
    year: "2026",
    status: "CONTROLLED PROTOTYPE",
    category: "DJANGO REST API",
    summary:
      "The Django API behind SAATHI checks roles, accepts case intake, and documents its endpoints. Its container setup includes PostgreSQL plus Redis and Celery for background work.",
    seoDescription:
      "SAATHI's Django REST Framework backend is a controlled case-coordination prototype with role-scoped intake and a documented API contract.",
    role:
      "I work on the API with StackOverHack and keep it aligned with the frontend.",
    details: [
      "The /api/v1 endpoints cover login, case intake, health checks, and API documentation.",
      "Case creation checks the caller's role and district and uses pseudonymous records.",
      "Demo endpoints and synthetic AI adapters stay off in production settings. Integration and recovery tests are still needed.",
    ],
    sources: [
      {
        label: "SAATHI backend repository",
        url: "https://github.com/LiteralKrishu/saathi-backend",
      },
      {
        label: "SAATHI frontend repository",
        url: "https://github.com/LiteralKrishu/saathi",
      },
    ],
    sourceNote:
      "The backend README calls this a controlled prototype. It has no approval as an emergency dispatch or clinical AI system.",
    repositoryUrl: "https://github.com/LiteralKrishu/saathi-backend",
    programmingLanguages: ["Python"],
  },
  {
    slug: "nykaa-copilot",
    title: "NykaaCopilot — Makeup Look Explorer",
    shortTitle: "NykaaCopilot",
    year: "2026",
    status: "PUBLIC DEMO",
    category: "COMPUTER VISION",
    summary:
      "In NykaaCopilot, you can upload a makeup photo, find similar colors in a small sample catalog, and try them on a selfie or camera feed. The preview is a 2D simulation.",
    seoDescription:
      "NykaaCopilot is a Next.js makeup demo with inspiration-image color analysis, sample catalog matching, and a browser-side 2D virtual try-on.",
    role:
      "I built the Next.js demo, from the storefront and image analysis to matching and try-on.",
    details: [
      "The app samples colors from an inspiration photo and compares them with shades in a twelve-product demo catalog.",
      "MediaPipe tracks facial landmarks; Canvas draws the selected colors over a selfie or camera image.",
      "It cannot identify an exact cosmetic or guarantee a real-world shade match. The bag is a demo, with no checkout.",
    ],
    sources: [
      {
        label: "NykaaCopilot repository",
        url: "https://github.com/LiteralKrishu/NykaaCopilot",
      },
      {
        label: "Architecture notes",
        url: "https://github.com/LiteralKrishu/NykaaCopilot/blob/main/docs/architecture.md",
      },
      {
        label: "Try-on limits",
        url: "https://github.com/LiteralKrishu/NykaaCopilot/blob/main/docs/virtual-try-on.md",
      },
    ],
    sourceNote:
      "The catalog is a sample, and the try-on is a 2D color preview. I have not listed a live link because the repository does not provide one.",
    repositoryUrl: "https://github.com/LiteralKrishu/NykaaCopilot",
    programmingLanguages: ["TypeScript"],
  },
  {
    slug: "wobble",
    title: "Wobble — Pytest Flake Hunter",
    shortTitle: "Wobble",
    year: "2026",
    status: "HACK DAY WINNER",
    category: "PYTHON TESTING TOOL",
    summary:
      "Wobble reruns pytest tests in shuffled orders, finds failures that depend on test order, and narrows a failing run to the earlier tests that triggered it.",
    seoDescription:
      "Wobble is a Python CLI for finding order-dependent pytest failures. StackOverHack won at the 2026 Hacktoberfest Hack Day at NST–ADYPU with the project.",
    role:
      "I built the test hunt, Docker runner, local-model investigation, repair, and patch checks with StackOverHack.",
    details: [
      "It runs tests in new Python processes or disposable Docker containers and records the failures it sees.",
      "It cuts a failing order down to the earlier tests needed to trigger the failure.",
      "A local model can suggest experiments and patches. Wobble tests each patch in a copy before it reports a verified fix.",
      "StackOverHack won at the Hacktoberfest 2026 Hack Day hosted at NST–ADYPU with Wobble.",
    ],
    sources: [
      {
        label: "Wobble repository and README",
        url: "https://github.com/LiteralKrishu/Wobble",
      },
      {
        label: "Original team repository",
        url: "https://github.com/RajaShirjeel/Wobble",
      },
      {
        label: "Hack Day event page",
        url: "https://events.mlh.com/events/15121-hacktoberfest-hack-day-pune-x-nst-adypu-powered-by-nstsdc",
      },
    ],
    sourceNote:
      "The event page confirms the date and venue. Our team reported the win; the public event page does not list winners. This GitHub link is my fork of the team repository.",
    repositoryUrl: "https://github.com/LiteralKrishu/Wobble",
    programmingLanguages: ["Python"],
  },
];

export interface Achievement {
  title: string;
  date: string;
  summary: string;
  sources: EvidenceLink[];
  note: string;
}

export const achievements: Achievement[] = [
  {
    title: "Hacktoberfest 2026 Hack Day — StackOverHack",
    date: "25 October 2026",
    summary:
      "StackOverHack won at the Hacktoberfest Hack Day at NST–ADYPU with Wobble, our tool for finding order-dependent pytest failures.",
    sources: [
      {
        label: "Wobble repository",
        url: "https://github.com/LiteralKrishu/Wobble",
      },
      {
        label: "Hack Day event page",
        url: "https://events.mlh.com/events/15121-hacktoberfest-hack-day-pune-x-nst-adypu-powered-by-nstsdc",
      },
    ],
    note:
      "The event page lists the Hack Day and venue. The team win comes from our account; the public event page does not list winners.",
  },
  {
    title: "Third Place — SFLC.in Hackathon 2025",
    date: "31 October–2 November 2025",
    summary:
      "StackOverHack finished third at SFLC.in's 2025 open-source hackathon. It was one of our first results as a team.",
    sources: [
      {
        label: "Official SFLC.in recap",
        url: "https://sflc.in/sflc-in-hackathon-2025-celebrating-open-collaboration-and-digital-freedom/",
      },
    ],
    note:
      "The organiser wrote my name as “Sousnigdha Das.” The team and teammates match; the first name appears to be a typo.",
  },
  {
    title: "SafeCity — 2nd SmallAI Hackathon Programme",
    date: "2026",
    summary:
      "The second SmallAI Hackathon programme lists SafeCity and names me as StackOverHack's team leader.",
    sources: [
      {
        label: "Official SmallAI programme",
        url: "https://smallai2026.thescrs.org/2nd-smallai-hackathon-program-schedule/",
      },
    ],
    note:
      "This was a programme listing, not a competition placement.",
  },
  {
    title: "Third Prize — Multimodal AI Hackathon, TIH–IIT Mandi",
    date: "15 October 2025",
    summary:
      "Our SafeCity team finished third at TIH–IIT Mandi under the name Team City (Safe Stack Over Hack).",
    sources: [
      {
        label: "IIT Mandi iHub organiser result",
        url: IIT_MANDI_ORGANISER_RESULT_URL,
      },
      {
        label: "Prize-certificate post",
        url: IIT_MANDI_CERTIFICATE_POST_URL,
      },
      {
        label: "Sousnigdho's result repost",
        url: IIT_MANDI_RESULT_REPOST_URL,
      },
      {
        label: "Unstop participation certificate",
        url: IIT_MANDI_UNSTOP_CERTIFICATE_URL,
      },
    ],
    note:
      "The ₹25,000 prize went to the team. The organiser confirms the placement; the SmallAI listing separately names me as team leader.",
  },
];

export interface Credential {
  title: string;
  issuer: string;
  category: string;
  certificateRecordDate: string;
  certificateUrl: string;
  eventUrl: string;
  team?: EvidenceLink;
  linkedinPosts?: EvidenceLink[];
  note?: string;
}

export const credentials: Credential[] = [
  {
    title: "Multi Modal AI Hackathon",
    issuer: "Indian Institute of Technology (IIT), Mandi",
    category: "Hackathon participation",
    certificateRecordDate: "29 January 2026",
    certificateUrl: IIT_MANDI_UNSTOP_CERTIFICATE_URL,
    eventUrl: "https://unstop.com/hackathons/multi-modality-iit-mandi-1573803",
    team: {
      label: "StackOverHack",
      url: STACKOVERHACK_LINKEDIN_URL,
    },
    linkedinPosts: [
      {
        label: "Third-place result",
        url: IIT_MANDI_RESULT_REPOST_URL,
      },
      {
        label: "Prize certificate",
        url: IIT_MANDI_CERTIFICATE_POST_URL,
      },
    ],
    note: "This is a participation certificate. The organiser's result and prize certificate document our third-place finish.",
  },
  {
    title: "National Road Safety Hackathon 2025",
    issuer: "Indian Institute of Technology (IIT), Madras",
    category: "Hackathon participation",
    certificateRecordDate: "28 December 2025",
    certificateUrl: "https://unstop.com/api/certificate/91017ab4-42df-4a87-a482-305b9b85a9e5",
    eventUrl: "https://unstop.com/hackathons/national-road-safety-hackathon-2025-iit-madras-1575342",
  },
  {
    title: "ATLAS AI Trailblazers — MCQ Assessment and Coding Challenge",
    issuer: "ATLAS SkillTech University, Maharashtra",
    category: "Challenge participation",
    certificateRecordDate: "24 February 2026",
    certificateUrl: "https://unstop.com/api/certificate/271909d1-a41c-4e02-9559-64431c81757f",
    eventUrl: "https://unstop.com/competitions/atlas-ai-trailblazers-ignite-the-future-of-ai-atlas-skilltech-university-maharashtra-1581128",
  },
  {
    title: "CodeTantra2K25",
    issuer: "Avanthi Institute of Engineering and Technology, Vizianagaram",
    category: "Hackathon participation",
    certificateRecordDate: "28 December 2025",
    certificateUrl: "https://unstop.com/api/certificate/5b25c015-a1cd-4fe9-96dc-185342079f36",
    eventUrl: "https://unstop.com/hackathons/codetantra2k25-gyan-2k25-avanthi-institute-of-engineering-and-technology-vizianagaram-avev-1613059",
  },
  {
    title: "Round 1: Debug & Dominate — CodeTantra2K25",
    issuer: "Avanthi Institute of Engineering and Technology, Vizianagaram",
    category: "Round participation",
    certificateRecordDate: "29 December 2025",
    certificateUrl: "https://unstop.com/api/certificate/7282a148-4409-4351-b980-cf14b8e78c76",
    eventUrl: "https://unstop.com/hackathons/codetantra2k25-gyan-2k25-avanthi-institute-of-engineering-and-technology-vizianagaram-avev-1613059",
    note: "This covers one round of CodeTantra2K25, so I list it alongside the main event.",
  },
  {
    title: "TATA Crucible Campus Quiz 2025",
    issuer: "Tata Group",
    category: "Quiz participation",
    certificateRecordDate: "28 November 2025",
    certificateUrl: "https://unstop.com/api/certificate/52c0a7c0-a840-4043-b680-8e3fe4827fca",
    eventUrl: "https://unstop.com/quiz/tata-crucible-campus-quiz-2025-tata-crucible-campus-quiz-2025-tata-group-1541553",
  },
  {
    title: "AI Engineer Fresher Challenge",
    issuer: "Linkenite",
    category: "Challenge participation",
    certificateRecordDate: "31 October 2025",
    certificateUrl: "https://unstop.com/api/certificate/b9ea2a12-a13c-4a26-9c0b-2c89d6e1bb14",
    eventUrl: "https://unstop.com/hackathons/linkenite-hackathon-challenge-ai-powered-business-automation-platform-linkenite-1548651",
    note: "This certificate records participation in the challenge.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
