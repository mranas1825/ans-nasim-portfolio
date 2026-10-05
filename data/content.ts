/* Central content for the portfolio. Every fact here comes from the CV,
   the user's own message, or a verified source. No invented metrics. */

export const profile = {
  name: "Ans Nasim",
  headline: "AI-Powered Content Creator & Digital Builder",
  titleLine: "Social Media Manager · Content Creator · Software Engineer",
  tagline:
    "I create and manage faceless content across TikTok, Facebook, and YouTube — using AI, creative storytelling, content strategy, editing, research, and problem-solving.",
  email: "mranas18256@gmail.com",
  phone: "+92 340 4494401",
  location: "Lahore, Pakistan",
  linkedin: "https://www.linkedin.com/in/anas-nasim-2984bb319",
  cvPath: "/Ans-Nasim-CV.pdf",
  gmailCompose: "https://mail.google.com/mail/?view=cm&fs=1&to=mranas18256@gmail.com",
};

export const socials = [
  { label: "Email", href: profile.gmailCompose, handle: profile.email },
  { label: "LinkedIn", href: profile.linkedin, handle: "anas-nasim-2984bb319" },
  { label: "TikTok", href: "https://www.tiktok.com/@ai.cinemalab52", handle: "@ai.cinemalab52" },
  { label: "Facebook", href: "https://www.facebook.com/1131002856755610", handle: "MegaVerse Ai" },
  { label: "YouTube", href: "https://www.youtube.com/@PUBGFIMLY", handle: "@PUBGFIMLY" },
];

export type TikTokVideo = { url: string; caption: string; metrics?: string };

export type TikTokAccount = {
  handle: string;
  url: string;
  niche: string;
  description: string;
  tools: string[];
  followers: string;
  likes: string;
  videos: TikTokVideo[];
};

export const tiktokAccounts: TikTokAccount[] = [
  {
    handle: "@life.lesson52",
    url: "https://www.tiktok.com/@life.lesson52",
    niche: "Life Lessons",
    description:
      "Faceless motivational storytelling — life lessons, wisdom and reflective narratives built for watch-time and shares.",
    tools: ["AI voiceover", "CapCut", "Prompt-crafted scripts"],
    followers: "775.4K",
    likes: "9.2M",
    videos: [
      {
        url: "https://www.tiktok.com/@life.lesson52/video/7543335410949295415",
        caption: "Nelson Mandela quote — signature life-lesson storytelling",
        metrics: "541.4K plays · 33K likes",
      },
      {
        url: "https://www.tiktok.com/@life.lesson52/video/7601937964603559223",
        caption: "\u201CMy Mother is my friend\u2026\u201D — emotional storytelling",
        metrics: "30K likes",
      },
    ],
  },
  {
    handle: "@motivation.mindset52",
    url: "https://www.tiktok.com/@motivation.mindset52",
    niche: "Motivation & Mindset",
    description:
      "High-energy mindset content — motivational edits, discipline and success storytelling designed for saves and replays.",
    tools: ["AI voiceover", "CapCut", "Trend research"],
    followers: "446.3K",
    likes: "3.1M",
    videos: [
      {
        url: "https://www.tiktok.com/@motivation.mindset52/video/7622282578506140950",
        caption: "\u201CLife is Short\u201D — Denzel Washington motivation edit",
        metrics: "58.9K plays · 3.4K likes",
      },
      {
        url: "https://www.tiktok.com/@motivation.mindset52/video/7624961139549555990",
        caption: "\u201CEverything is Temporary\u201D — mindset quote video",
        metrics: "2.2K likes",
      },
    ],
  },
  {
    handle: "@ai.cinemalab52",
    url: "https://www.tiktok.com/@ai.cinemalab52",
    niche: "AI Cinema",
    description:
      "AI-generated cinematic stories — characters, worlds and narratives produced end-to-end with generative AI workflows.",
    tools: ["AI image & video generation", "Prompt engineering", "CapCut"],
    followers: "75.9K",
    likes: "1.9M",
    videos: [],
  },
  {
    handle: "@historyxpov2",
    url: "https://www.tiktok.com/@historyxpov2",
    niche: "History POV",
    description:
      "Immersive history point-of-view shorts — historical moments retold as first-person faceless narratives.",
    tools: ["AI visuals", "Script research", "CapCut"],
    followers: "70.5K",
    likes: "696.5K",
    videos: [],
  },
];

/* Reference videos by OTHER creators — shown only as examples of formats
   Ans can produce. Never presented as his own work. */
export type FormatReference = {
  title: string;
  url: string;
  creator: string;
  metrics: string;
  note: string;
};

export const formatReferences: FormatReference[] = [
  {
    title: "Commentary Video",
    url: "https://www.tiktok.com/@mungunsiobednfand/video/7603797597186231583",
    creator: "@mungunsiobednfand",
    metrics: "1.2M plays · 41.1K likes",
    note: "Faceless commentary over clips — a format I produce on demand.",
  },
  {
    title: "Ranking / Top-N Short",
    url: "https://www.tiktok.com/@mr_top5_/video/7606442131548327181",
    creator: "@mr_top5_",
    metrics: "155.2K likes",
    note: "Ranking videos for Shorts & Facebook, built from prompt systems.",
  },
  {
    title: "AI History POV",
    url: "https://www.tiktok.com/@historypow1/video/7601892939320659202",
    creator: "@historypow1",
    metrics: "4K likes",
    note: "Immersive AI-generated history POV storytelling.",
  },
  {
    title: "AI Drama Series",
    url: "https://www.tiktok.com/@ai.cinema021/video/7617098849072598303",
    creator: "@ai.cinema021",
    metrics: "1.7M likes",
    note: "Episodic AI character storytelling that keeps viewers returning.",
  },
  {
    title: "AI Character Stories",
    url: "https://www.tiktok.com/@ai.feeder/video/7624143006588767501",
    creator: "@ai.feeder",
    metrics: "839.6K likes",
    note: "AI character story series — built for binge-watching.",
  },
  {
    title: "AI ASMR",
    url: "https://www.tiktok.com/@satisfying.slices.asmr/video/7558595127443295518",
    creator: "@satisfying.slices.asmr",
    metrics: "286.3K likes",
    note: "Oddly satisfying AI-generated ASMR content.",
  },
  {
    title: "TikTok Shop Affiliate",
    url: "https://www.tiktok.com/@asr_store_/video/7612947398590991638",
    creator: "@asr_store_",
    metrics: "6.5M plays · 46.5K likes",
    note: "Viral product affiliate format — a skill I offer to brands.",
  },
  {
    title: "UGC-Style Ad",
    url: "https://www.tiktok.com/@gwyneth.ugc/video/7447470112426167559",
    creator: "@gwyneth.ugc",
    metrics: "Reference example",
    note: "Authentic UGC-style product ad creative that converts.",
  },
];

export type FacebookPage = {
  name: string;
  url: string;
  focus: string;
  description: string;
  cadence: string;
};

export const facebookPages: FacebookPage[] = [
  {
    name: "MegaVerse Ai",
    url: "https://www.facebook.com/1131002856755610",
    focus: "AI-generated reels",
    description:
      "A hub for AI-crafted short-form content — cinematic AI visuals, transformations and experiments, published on a daily schedule.",
    cadence: "Daily reels",
  },
  {
    name: "Baby & Whiskers",
    url: "https://www.facebook.com/992787890592993",
    focus: "Family & feel-good stories",
    description:
      "Warm, shareable short stories and feel-good moments — built around emotional storytelling that travels fast on Facebook.",
    cadence: "Daily reels",
  },
  {
    name: "Ai Cinema Lab",
    url: "https://www.facebook.com/994631497062617",
    focus: "AI cinema shorts",
    description:
      "Cinematic AI storytelling on Facebook — the long-form home of the AI Cinema Lab content engine.",
    cadence: "Daily sessions",
  },
];

export const facebookNetworkNote =
  "These three anchor a wider network of 8 managed Facebook Pages, including Mini Family Moments, Behind the Effects, Ai Brainrot Stories, Beyond The Lines and Behind The Shot.";

export type YouTubeChannel = {
  handle: string;
  url: string;
  focus: string;
  description: string;
};

export const youtubeChannels: YouTubeChannel[] = [
  {
    handle: "@PUBGFIMLY",
    url: "https://www.youtube.com/@PUBGFIMLY",
    focus: "Shorts & long-form",
    description:
      "A YouTube channel in the content network — Shorts-first strategy with repurposed faceless content.",
  },
  {
    handle: "@BabyMiracleStories",
    url: "https://www.youtube.com/@BabyMiracleStories",
    focus: "Story Shorts",
    description:
      "Emotional story-driven Shorts — the YouTube home of the Baby & Whiskers storytelling format.",
  },
];

export type SkillGroup = {
  id: string;
  title: string;
  tagline: string;
  points: { title: string; detail: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "ai",
    title: "AI & Automation",
    tagline: "AI is my co-pilot, not a shortcut.",
    points: [
      { title: "AI Tools", detail: "Daily driver of modern generative tools for text, image, voice and video." },
      { title: "AI-assisted workflows", detail: "Chaining tools into repeatable pipelines from idea to published post." },
      { title: "AI Content Creation", detail: "End-to-end AI-generated visuals, voiceovers and narratives for faceless channels." },
    ],
  },
  {
    id: "prompt",
    title: "Prompt Engineering",
    tagline: "The skill behind every AI output I ship.",
    points: [
      { title: "Prompt Design", detail: "Writing precise prompts that produce consistent, on-brand AI output." },
      { title: "Prompt Optimization", detail: "Iterating and testing prompts until quality and style lock in." },
      { title: "AI Workflow Design", detail: "Structuring multi-step AI pipelines for entire content formats." },
      { title: "Structured Prompting", detail: "Templates and systems so any niche can be produced reliably." },
    ],
  },
  {
    id: "vibe",
    title: "Vibe Coding",
    tagline: "I build digital experiences with AI.",
    points: [
      { title: "AI-built Websites", detail: "Designing and shipping sites by directing AI, like this portfolio." },
      { title: "Prototypes & Apps", detail: "Turning ideas into working prototypes fast — including a full clinic management system." },
      { title: "Digital Experiences", detail: "Using code as a creative medium, guided by clear product thinking." },
    ],
  },
  {
    id: "problem",
    title: "Problem Solving",
    tagline: "Ideas become results through process.",
    points: [
      { title: "Break down complexity", detail: "Decomposing big vague problems into small solvable steps." },
      { title: "Research solutions", detail: "Deep trend and solution research before committing to a direction." },
      { title: "Experiment", detail: "Testing different approaches and letting data pick the winner." },
      { title: "Use AI effectively", detail: "Knowing when AI accelerates — and when human judgment leads." },
      { title: "Ship practical results", detail: "Every experiment ends in something real: a post, a page, a product." },
    ],
  },
  {
    id: "content",
    title: "Content Creation",
    tagline: "Faceless formats, engineered to travel.",
    points: [
      { title: "Faceless Content", detail: "Complete channels built without ever showing a face on camera." },
      { title: "Short-form Video", detail: "TikTok, Reels and Shorts formats optimized for retention." },
      { title: "Storytelling", detail: "Hooks, arcs and payoffs that keep viewers watching to the end." },
      { title: "Content Strategy", detail: "Calendars, niches and series planned for compounding growth." },
      { title: "Social Media Content", detail: "Platform-native content for TikTok, Facebook and YouTube." },
    ],
  },
];

export const toolStack = [
  "CapCut",
  "Filmora",
  "Canva",
  "Meta Business Suite",
  "TikTok Analytics",
  "YouTube Studio",
  "ChatGPT",
  "SEO",
  "Copywriting",
];

export const workflowSteps = [
  {
    step: "Idea",
    detail: "Spotting trends and angles worth making — trend research first, always.",
  },
  {
    step: "Research",
    detail: "Digging into the topic, the audience and what already works.",
  },
  {
    step: "Prompt",
    detail: "Engineering precise prompts for scripts, visuals and voice.",
  },
  {
    step: "Create",
    detail: "Generating and assembling the raw content with AI + editing tools.",
  },
  {
    step: "Edit",
    detail: "Cutting for retention — pacing, captions, sound, hooks.",
  },
  {
    step: "Optimize",
    detail: "Titles, descriptions, hashtags and SEO tuned per platform.",
  },
  {
    step: "Publish",
    detail: "Shipping on schedule, then reading analytics to feed the next idea.",
  },
];

export const experience = {
  role: "Content Creator & Freelancer",
  org: "Clients via Social Media",
  dates: "2022 — Present",
  bullets: [
    "Created engaging content for TikTok, YouTube, and other social media platforms.",
    "Edited and produced high-quality videos using CapCut and Filmora.",
    "Managed multiple social media accounts and grew audiences organically.",
    "Researched trends, wrote engaging captions, and planned content calendars.",
    "Worked with clients on branding, content strategy, and digital growth.",
    "Analyzed performance and optimized content for maximum engagement.",
  ],
  tools: ["CapCut", "Filmora", "Canva", "Meta Business Suite", "TikTok Analytics", "YouTube Studio", "SEO"],
};

export const education = [
  {
    degree: "BS Computer Science",
    school: "Government Graduate College of Science",
    dates: "2021 — 2025",
    place: "Lahore, Punjab",
    note: "Graduated",
  },
  {
    degree: "FSc Pre-Engineering",
    school: "Government Shalimar Post Graduate College, Baghbanpura",
    dates: "2019 — 2021",
    place: "Lahore, Punjab",
    note: "Intermediate with 79% marks",
  },
  {
    degree: "Matriculation",
    school: "New English Secondary School",
    dates: "2017 — 2019",
    place: "Lahore, Punjab",
    note: "Matriculation with 86% marks",
  },
];

export const achievements = [
  "Gained thousands of followers and high engagement across TikTok & YouTube.",
  "Delivered viral content strategies that increased reach and watch time.",
  "Completed multiple freelance projects with 100% client satisfaction.",
];

export type FeaturedProject = {
  index: string;
  category: string;
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  accent: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    index: "01",
    category: "Faceless Videos · Short-form Content",
    title: "The Faceless Content Engine",
    description:
      "Four TikTok channels — life lessons, motivation, AI cinema and history POV — each a complete faceless format: researched, scripted, voiced and edited without ever appearing on camera.",
    bullets: ["@life.lesson52 — wisdom storytelling", "@motivation.mindset52 — mindset edits", "@ai.cinemalab52 — AI cinema", "@historyxpov2 — history POV"],
    tags: ["TikTok", "Faceless", "AI Voiceover"],
    accent: "from-cyan-400 to-blue-500",
  },
  {
    index: "02",
    category: "Social Media Projects",
    title: "Facebook Pages Network",
    description:
      "Eight managed Facebook Pages running on a daily publishing rhythm — AI reels, family stories and cinematic shorts, each with its own niche, voice and audience.",
    bullets: ["MegaVerse Ai — AI-generated reels", "Baby & Whiskers — feel-good stories", "Ai Cinema Lab — AI cinema shorts"],
    tags: ["Facebook", "Meta Business Suite", "Daily Publishing"],
    accent: "from-blue-500 to-violet-500",
  },
  {
    index: "03",
    category: "AI Content Creation · Creative AI Experiments",
    title: "Commentary & Ranking Formats",
    description:
      "Faceless commentary videos and ranking-style Shorts — two of the most viral short-form formats — produced with AI-assisted scripts, voice and editing built on prompt-engineered systems.",
    bullets: ["Commentary-style storytelling I can produce on demand", "Ranking / Top-N videos for Shorts & Facebook", "Built from reusable prompt systems"],
    tags: ["Commentary", "Rankings", "Prompt Systems"],
    accent: "from-fuchsia-500 to-pink-500",
  },
  {
    index: "04",
    category: "AI Transformations",
    title: "Viral AI Niches, On Demand",
    description:
      "Using structured prompt engineering, I can spin up proven viral AI niches fast — AI story animations, character transformations, cinematic shorts and visual experiments.",
    bullets: ["AI story & character videos", "Cinematic AI shorts", "Niche research → prompt system → published series"],
    tags: ["AI Video", "Prompt Engineering", "Niche Systems"],
    accent: "from-violet-500 to-purple-500",
  },
  {
    index: "05",
    category: "Short-form Content · Digital Marketing",
    title: "TikTok Shop Affiliate & UGC Ads",
    description:
      "Engaging, conversion-focused short video ads — TikTok Shop affiliate content and UGC-style creatives designed to stop the scroll and sell.",
    bullets: ["TikTok Shop affiliate video skills", "UGC-style ad creatives", "Hook-first scripting for conversions"],
    tags: ["Affiliate", "UGC Ads", "Copywriting"],
    accent: "from-amber-400 to-orange-500",
  },
  {
    index: "06",
    category: "Digital Projects · Vibe Coding",
    title: "Web Apps, Built with AI",
    description:
      "A software engineer who vibe-codes: real web applications designed and built with AI-assisted development — from a clinic management system to polished front-end clones.",
    bullets: ["Patient Management System — PHP, MySQL, React.js, Tailwind", "Amazon Front-End Clone — HTML, CSS, JavaScript, Tailwind"],
    tags: ["React.js", "Tailwind CSS", "Vibe Coding"],
    accent: "from-emerald-400 to-teal-500",
  },
];

export const niches = [
  "AI Story Animations",
  "Commentary Videos",
  "Ranking / Top-N Shorts",
  "History POV",
  "Motivation Edits",
  "Life-Lesson Stories",
  "AI Transformations",
  "UGC-Style Ads",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Featured", href: "#featured" },
  { label: "Skills", href: "#skills" },
  { label: "Workflow", href: "#workflow" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
