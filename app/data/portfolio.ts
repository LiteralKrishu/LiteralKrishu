export const SITE_URL = "https://sousnigdhodas.vedonyx.in";
export const LINKEDIN_URL = "https://www.linkedin.com/in/sousnigdho-das/";
export const STACKOVERHACK_LINKEDIN_URL =
  "https://www.linkedin.com/company/stackoverhack/";
export const GITHUB_URL = "https://github.com/LiteralKrishu";
export const UNSTOP_URL = "https://unstop.com/u/sousndas69815";
export const VEDONYX_URL = "https://www.vedonyx.com/";
export const VEDONYX_PROFILE_URL = "https://www.vedonyx.com/team/sousnigdho-das";
export const PROFILE_LAST_REVIEWED = "2026-07-24";
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
    title: "SafeCity — Production-Grade Multimodal Safety System",
    shortTitle: "SafeCity",
    year: "2025–2026",
    status: "PRODUCTION-GRADE",
    category: "MULTIMODAL AI SYSTEM",
    summary:
      "SafeCity began with a question I kept coming back to: can a phone notice signs of distress before someone is able to ask for help? With StackOverHack, I lead its development as a production-grade system that brings sound, motion, visual cues, and context into one tiered-alert workflow.",
    seoDescription:
      "SafeCity is StackOverHack's production-grade multimodal safety system. Sousnigdho Das is listed as team leader; the project received third prize at TIH–IIT Mandi in 2025.",
    role:
      "I lead the SafeCity team listed in the SmallAI programme and help shape the system's architecture, backend orchestration, and development.",
    details: [
      "The system combines audio, visual, motion, and contextual signals to identify possible distress and support tiered alerts.",
      "It is engineered for real-time multimodal processing, backend orchestration, and scalable alert escalation.",
      "At TIH–IIT Mandi, the project appeared under the team name Team City (Safe Stack Over Hack) and finished third.",
      "The ₹25,000 award was shared by the team.",
    ],
    sources: [
      {
        label: "Public SafeCity repository",
        url: "https://github.com/LiteralKrishu/SafeCity",
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
      "The organiser and certificates use a few versions of our team name. The organiser confirms the team placement; my IIT Mandi lead role comes from my own account, while the SmallAI programme separately names me as SafeCity's team leader.",
    repositoryUrl: "https://github.com/LiteralKrishu/SafeCity",
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
      "TransparAI is our open-source attempt to make public-procurement data easier to question. We used Python and Streamlit to surface possible bias, inefficiency, and anomalies for people to investigate—not to let an algorithm make the final call.",
    seoDescription:
      "TransparAI is an open-source Python and Streamlit dashboard for exploring public-procurement data and surfacing patterns for human review.",
    role:
      "I worked on TransparAI with StackOverHack around our SFLC.in Hackathon 2025 run. The public repository lives on my @LiteralKrishu GitHub account.",
    details: [
      "We built the dashboard with Python and Streamlit.",
      "It surfaces leads for human review; it does not make procurement decisions.",
      "StackOverHack finished third at SFLC.in's 2025 open-source hackathon.",
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
      "SFLC.in confirms our team's third-place finish but does not name the submitted project. TransparAI is a team repository, so I do not present every line of code as my individual work.",
    repositoryUrl: "https://github.com/LiteralKrishu/TransparAI",
    programmingLanguages: ["Python"],
  },
  {
    slug: "glow-glitter",
    title: "Glow Glitter — Ecommerce Design Direction",
    shortTitle: "Glow Glitter",
    year: "2026",
    status: "VEDONYX PROJECT",
    category: "DIGITAL EXPERIENCE",
    summary:
      "Glow Glitter gave me a chance to work on the part of product design I enjoy most: turning a brand's personality into an experience. Harshit Gupta and I shaped the direction for its ecommerce site, and Vedonyx's development team brought it to life.",
    seoDescription:
      "Sousnigdho Das and Harshit Gupta shared the design direction for Glow Glitter's ecommerce experience at Vedonyx.",
    role:
      "I shared the design direction with Harshit Gupta. The wider Vedonyx team handled implementation.",
    details: [
      "We focused on a polished presentation that felt right for the brand.",
      "My contribution covered creative direction and the customer experience, not the complete development build.",
      "It was a collaborative Vedonyx project from the start.",
    ],
    sources: [
      {
        label: "Live Glow Glitter website",
        url: "https://www.glowglitter.in/",
      },
      {
        label: "Vedonyx company page and project update",
        url: "https://www.linkedin.com/company/vedonyx",
      },
    ],
    sourceNote:
      "Credit here is intentionally shared: I did not design or develop the whole experience alone.",
    liveUrl: "https://www.glowglitter.in/",
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
    title: "Third Place — SFLC.in Hackathon 2025",
    date: "31 October–2 November 2025",
    summary:
      "Our StackOverHack team finished third at SFLC.in's 2025 open-source hackathon. It was an early result that gave us confidence to keep building together.",
    sources: [
      {
        label: "Official SFLC.in recap",
        url: "https://sflc.in/sflc-in-hackathon-2025-celebrating-open-collaboration-and-digital-freedom/",
      },
    ],
    note:
      "The organiser published my name as “Sousnigdha Das.” The matching team and teammates indicate that this is a spelling error.",
  },
  {
    title: "SafeCity — 2nd SmallAI Hackathon Programme",
    date: "2026",
    summary:
      "SafeCity was listed in the second SmallAI Hackathon programme, where the official schedule names me as StackOverHack's team leader.",
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
      "I worked on SafeCity with StackOverHack. At TIH–IIT Mandi, the project appeared under the team name Team City (Safe Stack Over Hack) and finished third.",
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
      "The ₹25,000 was our team prize. The organiser confirms the placement; my team-lead role comes from my own account and the separate SmallAI listing.",
  },
  {
    title: "Shared Design Direction — Glow Glitter",
    date: "2026",
    summary:
      "Harshit Gupta and I shared the design direction for Glow Glitter's ecommerce experience at Vedonyx.",
    sources: [
      {
        label: "Vedonyx company page and project update",
        url: "https://www.linkedin.com/company/vedonyx",
      },
    ],
    note:
      "My contribution was design direction; the broader Vedonyx team handled the build.",
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
    note: "This certificate marks my participation. The separate organiser announcement and prize certificate document our team's third-place finish.",
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
    note: "This certificate is for one round of CodeTantra2K25, so I have kept it with the main event instead of counting it as another result.",
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
    note: "This certificate marks participation in the challenge; it is not an employment or selection credential.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
