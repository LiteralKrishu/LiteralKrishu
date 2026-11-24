export const SITE_URL = "https://sousnigdhodas.vedonyx.in";
export const LINKEDIN_URL = "https://www.linkedin.com/in/sousnigdho-das/";
export const STACKOVERHACK_LINKEDIN_URL =
  "https://www.linkedin.com/company/stackoverhack/";
export const STACKOVERHACK_GITHUB_URL = "https://github.com/StackOverHack-Hub";
export const GITHUB_URL = "https://github.com/LiteralKrishu";
export const EMAIL_URL = "mailto:sousnigdhodas@gmail.com";
export const UNSTOP_URL = "https://unstop.com/u/sousndas69815";
export const VEDONYX_URL = "https://www.vedonyx.com/";
export const VEDONYX_PROFILE_URL = "https://www.vedonyx.com/team/sousnigdho-das";
export const PROFILE_LAST_REVIEWED = "2026-11-25";
export const EDUCATION_SUMMARY =
  "Pursuing B.Tech in CSE (AI/ML) at Newton School of Technology";

export const IIT_MANDI_ORGANISER_RESULT_URL =
  "https://www.linkedin.com/posts/ihubiitmandi_multimodalai-hackathon-iitmandi-activity-7406989681428656128-irXj";
export const IIT_MANDI_RESULT_REPOST_URL =
  "https://www.linkedin.com/posts/sousnigdho-das_multimodalai-hackathon-iitmandi-activity-7432299173623980032-YpgH";
export const IIT_MANDI_CERTIFICATE_POST_URL =
  "https://www.linkedin.com/posts/sousnigdho-das_stackoverhack-multimodalai-iitmandi-activity-7432093419520499712-hOQg";
export const IIT_MANDI_UNSTOP_CERTIFICATE_URL =
  "https://unstop.com/api/certificate/0e618c71-4433-4612-a55f-252784ce6776";
const SFLC_RECAP_URL = "https://sflc.in/sflc-in-hackathon-2025-celebrating-open-collaboration-and-digital-freedom/";
const SFLC_CERTIFICATE_URL = driveCertificate("1yoBQ9fvF0CEuJCRweWv4tcGmeQOlen_7");

export const PROFILE_DESCRIPTION =
  "Sousnigdho Das specializes in software engineering management, serves as COO at Vedonyx and ODT, and is pursuing a B.Tech in CSE (AI/ML) at Newton School of Technology.";

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
        url: "https://github.com/StackOverHack-Hub/SafeCity",
      },
      {
        label: "SafeCity architecture and release status",
        url: "https://github.com/StackOverHack-Hub/SafeCity/blob/main/docs/ARCHITECTURE.md",
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
    repositoryUrl: "https://github.com/StackOverHack-Hub/SafeCity",
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
        url: "https://github.com/StackOverHack-Hub/TransparAI",
      },
      {
        label: "StackOverHack on LinkedIn",
        url: STACKOVERHACK_LINKEDIN_URL,
      },
      {
        label: "Official SFLC.in hackathon recap",
        url: SFLC_RECAP_URL,
      },
      {
        label: "Sousnigdho Das on LinkedIn",
        url: LINKEDIN_URL,
      },
    ],
    sourceNote:
      "SFLC.in confirms our team's third-place finish but does not name the project in its recap. TransparAI was team work.",
    repositoryUrl: "https://github.com/StackOverHack-Hub/TransparAI",
    liveUrl: "https://transparai.streamlit.app/",
    programmingLanguages: ["Python"],
  },
  {
    slug: "agent-extension",
    title: "AgentExtension — Coding Agent for VS Code",
    shortTitle: "AgentExtension",
    year: "2026",
    status: "PUBLIC RELEASE",
    category: "DEVELOPER TOOLS",
    summary:
      "A VS Code extension that uses TrueForge to edit selections or propose changes across a repository. Changes can be reviewed hunk by hunk in the editor.",
    seoDescription:
      "AgentExtension is a VS Code coding agent built on TrueForge with inline edits, repository-wide drafts, and per-hunk review.",
    role: "Built with StackOverHack.",
    details: [
      "Inline edits open in VS Code’s native diff view.",
      "Repository-wide tasks can use file and symbol context, then stage proposed changes for review.",
      "The extension supports local and hosted model connections. The repository publishes a VSIX release for Apple Silicon.",
    ],
    sources: [
      { label: "AgentExtension repository", url: "https://github.com/StackOverHack-Hub/AgentExtension" },
      { label: "Latest VSIX release", url: "https://github.com/StackOverHack-Hub/AgentExtension/releases/latest" },
    ],
    sourceNote: "The repository documents model connections, editor review, and builds for other platforms.",
    repositoryUrl: "https://github.com/StackOverHack-Hub/AgentExtension",
    programmingLanguages: ["TypeScript"],
  },
  {
    slug: "scopecheck",
    title: "ScopeCheck — Client Change Control",
    shortTitle: "ScopeCheck",
    year: "2026",
    status: "PUBLIC REPOSITORY",
    category: "CHANGE MANAGEMENT",
    summary:
      "ScopeCheck helps teams compare client requests with their agreements and preserve the exact clauses, decisions, and written approvals behind each change.",
    seoDescription:
      "ScopeCheck is a change-control workspace for reviewing client requests against agreements, drafting change requests, and recording approvals.",
    role: "Built with StackOverHack.",
    details: [
      "Import a PDF or text agreement, review the extracted clauses, and save a version.",
      "Check each request against that version and record the scope decision.",
      "Draft time and price changes, record the written response, and export the review history.",
    ],
    sources: [
      { label: "ScopeCheck repository", url: "https://github.com/StackOverHack-Hub/ScopeCheck" },
      { label: "Release guide", url: "https://github.com/StackOverHack-Hub/ScopeCheck/blob/main/docs/release.md" },
    ],
    sourceNote: "The README documents the review flow. A person confirms each scope decision.",
    repositoryUrl: "https://github.com/StackOverHack-Hub/ScopeCheck",
    liveUrl: "https://scope-check.replit.app/",
    programmingLanguages: ["TypeScript"],
  },
  {
    slug: "namma-space",
    title: "NammaSpace — Indoor 3D Navigation",
    shortTitle: "NammaSpace",
    year: "2026",
    status: "TECHFEST PROJECT",
    category: "SPATIAL COMPUTING",
    summary:
      "NammaSpace turns smartphone-captured interiors into interactive 3D scenes you can walk through. Searchable points of interest give you routes around furniture and walls.",
    seoDescription:
      "NammaSpace is a Three.js indoor digital twin and navigation platform with GLB and Gaussian splat imports, first-person movement, and obstacle-aware wayfinding.",
    role: "I developed NammaSpace for IIT Bombay Techfest 2026–27.",
    details: [
      "Explore the Classroom 504 scan and use the first-floor map to plan a walking route between rooms.",
      "Walk and look around in first person using a keyboard and mouse or the mobile touch controls.",
      "Search for points of interest and follow an obstacle-aware route through the room.",
    ],
    sources: [
      { label: "NammaSpace repository", url: "https://github.com/LiteralKrishu/NammaSpace" },
    ],
    sourceNote: "The README documents the capture formats, movement controls, and wayfinding.",
    repositoryUrl: "https://github.com/LiteralKrishu/NammaSpace",
    liveUrl: "https://nammaspace-brown.vercel.app/",
    programmingLanguages: ["JavaScript"],
  },
  {
    slug: "saathi",
    title: "SAATHI — Case Coordination Platform",
    shortTitle: "SAATHI",
    year: "2026",
    status: "CONTROLLED PROTOTYPE",
    category: "CASE COORDINATION",
    summary:
      "SAATHI combines a React workspace and a Django REST API for role-scoped case intake and coordination. A separate demo mode uses synthetic records.",
    seoDescription:
      "SAATHI is StackOverHack’s case-coordination prototype with a React frontend, a Django REST API, and role-scoped case intake.",
    role: "I work on the frontend, API, and the integration between them with StackOverHack.",
    details: [
      "District officers and state and national administrators see routes matched to their roles.",
      "The Django API checks roles and district access for case intake. Demo records stay in browser memory.",
      "The backend uses PostgreSQL and supports Redis and Celery for background work.",
    ],
    sources: [
      { label: "SAATHI frontend repository", url: "https://github.com/LiteralKrishu/saathi" },
      { label: "SAATHI backend repository", url: "https://github.com/StackOverHack-Hub/saathi-backend" },
    ],
    sourceNote: "Both repositories document the prototype and the checks needed before release.",
    repositoryUrl: "https://github.com/LiteralKrishu/saathi",
    programmingLanguages: ["TypeScript", "Python"],
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
        url: SFLC_RECAP_URL,
      },
      { label: "Third-place certificate", url: SFLC_CERTIFICATE_URL },
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
  issuer?: string;
  category: string;
  certificateRecordDate?: string;
  certificateUrl: string;
  eventUrl?: string;
  distinction?: string;
  additionalCertificates?: EvidenceLink[];
  team?: EvidenceLink;
  linkedinPosts?: EvidenceLink[];
  note?: string;
}

function driveCertificate(id: string) {
  return `https://drive.google.com/file/d/${id}/view`;
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
    distinction: "Top 10 among 2,314 participants",
    additionalCertificates: [
      { label: "Grand finale certificate", url: driveCertificate("1ghEqNH5l08iO_vU59B7Vo6k6dRM_ntpX") },
    ],
    note: "The grand finale took place at ATLAS SkillTech University, Mumbai, on 24 January 2026.",
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
  {
    title: "VESTRA: The Last Market",
    issuer: "Shark Sphere, Newton School of Technology, Pune",
    category: "Trading simulation participation",
    certificateUrl: driveCertificate("1-MhfCRTtlMAMa1KRLJ5vhHDYulknJoyB"),
  },
  {
    title: "Tough Tongue AI Coding Challenge",
    issuer: "Tough Tongue AI",
    category: "Coding challenge participation",
    certificateUrl: driveCertificate("1kEp8RXLbWdTPvG1nTJncTaGbZIjLQu4B"),
  },
  {
    title: "NextGen Hackathon 2025",
    issuer: "ACM Fremont Chapter",
    category: "Hackathon participation",
    certificateUrl: driveCertificate("1DekWaIoyRk5wyj1d6NfG451NeUI4EH78"),
    team: { label: "StackOverHack", url: STACKOVERHACK_LINKEDIN_URL },
    note: "StackOverHack participated on 20–21 September 2025.",
  },
  {
    title: "HackSpark — Codeathon",
    category: "Coding challenge",
    certificateUrl: driveCertificate("1PmAnXZWtZEg7DJJSvVMuXin0XtOhjcVw"),
  },
  {
    title: "HackOverFlow — Cultrang",
    category: "Hackathon",
    certificateUrl: driveCertificate("1QJiQRBJSPdeLS_BO2sCA92fBDxrFxypg"),
  },
  {
    title: "DSA Week: Hashing Unlocked",
    category: "Coding challenge",
    certificateUrl: driveCertificate("1Ll2j6QymaKScUXwikcwxtMSgzJFnll8A"),
  },
  {
    title: "CodeRush Weekly — 10th Edition",
    category: "Coding challenge",
    certificateUrl: driveCertificate("1EOi7o_VNzgx9ygWv2_VyA4XrWrKKEne9"),
  },
  {
    title: "Pixel to Page — 24 Hours Build Challenge",
    issuer: "Web Developer Student Community",
    category: "Certificate of excellence",
    certificateUrl: driveCertificate("1S2ZilHoZFloCmpKSY4gbsbPrz8hQREpf"),
  },
  {
    title: "GEC Siwan — Assessment and Submission Rounds",
    issuer: "Developer Community, GEC Siwan",
    category: "Certificates of excellence",
    certificateUrl: driveCertificate("1WEG11kYkFGeUF6QPZBvhjilCfQIOvyZU"),
    additionalCertificates: [
      { label: "Submission round certificate", url: driveCertificate("1ZMXtOLmIDridske7_tzjC4E507p0tZT_") },
    ],
  },
  {
    title: "CodeSpark — 72 Hour Build Challenge",
    issuer: "Web Developer Student Community, GEC Siwan",
    category: "Certificate of excellence",
    certificateUrl: driveCertificate("1sTk18Jn2ldGfSEMItgD_hVHlG-8PeKlu"),
  },
  {
    title: "CodeClash: The August Arena",
    issuer: "Lets Code Community",
    category: "Coding challenge participation",
    distinction: "245th in the Foundations round",
    certificateUrl: driveCertificate("1GwpWiGv-v2SD_RjCNHSmHB4k_romYajV"),
    additionalCertificates: [
      { label: "Foundations round certificate", url: driveCertificate("10YfudD56ClSRx4d01cODQRn58Gqh3OqU") },
    ],
  },
  {
    title: "WorldQuant Challenge",
    issuer: "WorldQuant",
    category: "Certificates of accomplishment",
    distinction: "Gold level",
    certificateUrl: driveCertificate("1nvLK81qGDmuNmgntWmWp9kRpwqUO8J_a"),
    additionalCertificates: [
      { label: "Silver certificate", url: driveCertificate("1x0n2xYvq0GfpM6gY24PDZSTtUna-rnI8") },
      { label: "Bronze certificate", url: driveCertificate("13TIhU91LU40LCAMaNR9HQDvYMegHpMtc") },
    ],
  },
  {
    title: "SFLC.in Hackathon 2025",
    issuer: "SFLC.in",
    category: "Hackathon award",
    distinction: "Third place",
    certificateUrl: SFLC_CERTIFICATE_URL,
    eventUrl: SFLC_RECAP_URL,
    team: { label: "StackOverHack", url: STACKOVERHACK_LINKEDIN_URL },
  },
  {
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    issuer: "Oracle",
    category: "Professional certification",
    certificateUrl: driveCertificate("1w20hiMW-AK1F8ahxPUTDIhl1eCVj4aQu"),
    additionalCertificates: [{ label: "Oracle badge", url: driveCertificate("1CxNfh28ek4WyJ2iKwCkvpyE616RFG2Hw") }],
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Developer Professional",
    issuer: "Oracle",
    category: "Professional certification",
    certificateUrl: driveCertificate("1l7Ty3GdLtpLjYmOJkAO-ypmqzE9GmYUm"),
    additionalCertificates: [{ label: "Oracle badge", url: driveCertificate("1M6yztSd5EIvpT4K3NPZtJ8kBzKGndUVq") }],
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    category: "Professional certification",
    certificateUrl: driveCertificate("1dZiehoQhDgi49QczP1KiHPH49uCiK-1P"),
    additionalCertificates: [{ label: "Oracle badge", url: driveCertificate("1N4S6F1W6gaVakiK8cMGkEP9ZyHazETt8") }],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
