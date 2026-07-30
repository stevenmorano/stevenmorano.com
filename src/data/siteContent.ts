export type NavigationItem = {
  label: string;
  href: string;
};

export type ProofPoint = {
  value: string;
  label: string;
  context: string;
};

export type Capability = {
  number: string;
  title: string;
  description: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlight?: string;
};

export type ProjectVisual =
  | "home-system"
  | "mindful-eating"
  | "threads-flow"
  | "floorplan"
  | "chatgpt-tool"
  | "frame-preview";

export type ProjectItem = {
  title: string;
  eyebrow: string;
  status: string;
  description: string;
  learning: string;
  tags: string[];
  visual: ProjectVisual;
  href?: string;
};

export type ProfileLink = {
  label: string;
  description: string;
  href: string;
  external?: boolean;
};

export const siteContent = {
  identity: {
    name: "Steven Morano",
    location: "Rye Brook, New York",
    availability: "Open to remote and hybrid marketing leadership roles",
    headline: "Marketing operations leader who makes complex systems work.",
    introduction:
      "I have spent 12+ years building marketing programs, growth systems, customer journeys, and high-performing teams. I combine that experience with deep technical curiosity - using AI, automation, and software to turn messy problems into useful systems.",
    signature: "Marketing first. Technically fluent. Constantly building.",
    email: "steven@stevenmorano.com",
    portrait: "/images/steven-morano.png",
  },
  navigation: [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Connect", href: "#connect" },
  ] satisfies NavigationItem[],
  proof: [
    {
      value: "12+",
      label: "Years in marketing",
      context: "Operations, growth, paid acquisition, ecommerce, and lifecycle.",
    },
    {
      value: "$6M",
      label: "Annual media responsibility",
      context: "Managed across ecommerce and consumer-product accounts.",
    },
    {
      value: "75%",
      label: "Lead growth",
      context: "Delivered through stronger funnels, messaging, and follow-up.",
    },
    {
      value: "150%",
      label: "Enrollment growth",
      context: "Created by improving the full acquisition journey.",
    },
  ] satisfies ProofPoint[],
  capabilities: [
    {
      number: "01",
      title: "Marketing operations",
      description:
        "CRM architecture, lifecycle automation, lead management, reporting, customer journeys, and the operating rhythm that keeps marketing and sales aligned.",
    },
    {
      number: "02",
      title: "Growth and acquisition",
      description:
        "Paid media, funnels, landing pages, ecommerce, creative testing, conversion strategy, and the analysis required to put budget behind what works.",
    },
    {
      number: "03",
      title: "AI and practical systems",
      description:
        "Research, workflow design, rapid prototyping, lightweight apps, and a willingness to learn whatever software is needed to solve the real problem.",
    },
  ] satisfies Capability[],
  experience: [
    {
      company: "Smart Marketing Digital",
      role: "Independent Marketing Operations Consultant",
      period: "2024 - Present",
      summary:
        "A small independent practice for select client engagements involving marketing strategy, CRM, automation, websites, paid acquisition, and analytics. It also gives me a practical environment for testing new AI-assisted workflows.",
    },
    {
      company: "Above Ave",
      role: "Director of Marketing Operations",
      period: "2022 - 2023",
      summary:
        "Led strategy and operations for an online education and consulting company, connecting paid media, lifecycle campaigns, CRM systems, webinars, content, and sales follow-up into a more accountable growth engine.",
      highlight:
        "75% more leads, 150% more enrollments, 100% revenue growth, and a 50% shorter sales cycle.",
    },
    {
      company: "Soul Ahimsa",
      role: "Founder, Ecommerce & Digital Marketing",
      period: "2020 - 2022",
      summary:
        "Built and operated a direct-to-consumer brand from the storefront outward: positioning, Shopify, acquisition, photography, creative, email, customer communication, inventory, and fulfillment.",
    },
    {
      company: "BASIS",
      role: "Senior Media Buyer",
      period: "2017 - 2019",
      summary:
        "Managed multichannel acquisition across Google, Meta, YouTube, Amazon, TikTok, Pinterest, and other platforms for ecommerce and consumer brands.",
      highlight:
        "Up to $6M in annual media responsibility, 30% higher marketing ROI, and 50% growth in qualified leads.",
    },
    {
      company: "Digital Chair",
      role: "Digital Marketing & Sales",
      period: "2014 - 2016",
      summary:
        "Helped local and small businesses improve paid search, SEO, content, websites, social media, lead generation, and the connection between marketing recommendations and client goals.",
    },
  ] satisfies ExperienceItem[],
  projects: {
    featured: [
      {
        title: "Home Management",
        eyebrow: "Primary build",
        status: "Private - In development",
        description:
          "A home operating system for the maintenance, documents, equipment, recurring tasks, projects, and decisions that normally live across reminders, folders, and memory.",
        learning:
          "My largest product build - and the clearest example of how I take a complicated real-life system, map it, and turn it into software people can actually use.",
        tags: ["Product systems", "TypeScript", "AI-assisted development"],
        visual: "home-system",
      },
      {
        title: "Mindful Eating",
        eyebrow: "Second major build",
        status: "Private - Active build",
        description:
          "A mobile-first craving-pause app that creates five useful minutes between an impulse and a decision through guided distractions, breathing, timers, and progress tracking.",
        learning:
          "Built to explore behavior design, mobile UX, local-first data, accessibility, gamification, and the difficult balance between helpful friction and user trust.",
        tags: ["React", "Behavior design", "Mobile-first"],
        visual: "mindful-eating",
      },
    ] satisfies ProjectItem[],
    supporting: [
      {
        title: "Threads Content Engine",
        eyebrow: "Marketing + AI",
        status: "Public project",
        description:
          "An AI-assisted research and drafting workflow for Threads with a deliberate human approval step before anything is published.",
        learning:
          "A practical experiment in faster content operations without giving up judgment, voice, or quality control.",
        tags: ["TypeScript", "Human-in-the-loop", "Content systems"],
        visual: "threads-flow",
        href: "https://github.com/stevenmorano/threads-content-engine",
      },
      {
        title: "Floorplan Digitizer",
        eyebrow: "Browser-native CAD",
        status: "Public project",
        description:
          "A browser tool for tracing floorplans manually or with Gemini vision, including scaling, grid snapping, room blocks, and undo/redo.",
        learning:
          "Proof that I can learn a complex interaction model, break it into systems, and ship a working technical prototype.",
        tags: ["React", "Gemini", "Canvas tools"],
        visual: "floorplan",
        href: "https://github.com/stevenmorano/floorplan-digitizer",
      },
      {
        title: "ChatGPT History Tool",
        eyebrow: "Small friction, solved",
        status: "Public Chrome extension",
        description:
          "A local-first extension for searching, filtering, and bulk-managing a large ChatGPT conversation history without sending private metadata elsewhere.",
        learning:
          "A focused utility born from a repetitive personal problem - the kind of small software fix I enjoy making.",
        tags: ["JavaScript", "Chrome extension", "Local-first"],
        visual: "chatgpt-tool",
        href: "https://github.com/stevenmorano/ce-chatgpt-bulk-delete",
      },
      {
        title: "Print Frame Visualizer",
        eyebrow: "Useful visual tool",
        status: "Public project",
        description:
          "A private, local-first way to preview print, mat, and frame combinations accurately before spending money on a finished piece.",
        learning:
          "An exercise in translating physical measurements, taste, and purchasing uncertainty into a simple visual interface.",
        tags: ["TypeScript", "Local-first", "Visualization"],
        visual: "frame-preview",
        href: "https://github.com/stevenmorano/print-frame-visualizer",
      },
    ] satisfies ProjectItem[],
  },
  about: {
    lead:
      "Give me a few days with a piece of software and I will know it inside out.",
    paragraphs: [
      "That has been the through-line in my career. I started in design engineering, became the person coworkers came to for software and computer problems, moved into digital marketing, and eventually found marketing operations - the place where strategy, technology, process, and people all have to work together.",
      "AI changed what I could do with a long-running bank of ideas. I am still a marketer, not a traditional software engineer. But I can now research, prototype, test, and build useful tools much faster - while bringing the business judgment to know what should be built in the first place.",
      "I like fixing the thing behind the thing: the CRM nobody trusts, the follow-up process that loses good leads, the software people work around, or the everyday problem that should have a better tool.",
    ],
    origin: {
      title: "An engineering foundation",
      description:
        "Before marketing, I designed complex mechanical systems at Bolt Technology and worked across engineering, manufacturing, software, IT, and business leadership. That background still shapes how I think: understand the system, find the constraint, and make it work better.",
    },
    community: {
      title: "Community building",
      description:
        "I run ADHD Working From Home, a developing private community focused on digital organization, personal finance, practical AI tools, and accountability for adults who feel overwhelmed by the systems of everyday life.",
      href: "https://www.skool.com/working-from-home-with-adhd-7671/",
    },
    interests: [
      "World travel",
      "Skiing",
      "Backpacking",
      "Sailing",
      "Cycling",
      "Photography",
      "Custom PCs",
      "Personal finance",
      "Digital organization",
    ],
  },
  links: {
    primary: [
      {
        label: "LinkedIn",
        description: "Career, experience, and professional updates",
        href: "https://www.linkedin.com/in/stevenmorano/",
        external: true,
      },
      {
        label: "GitHub",
        description: "Public applications, extensions, and experiments",
        href: "https://github.com/stevenmorano",
        external: true,
      },
      {
        label: "X / Twitter",
        description: "Technology, marketing, AI, and whatever I am learning",
        href: "https://x.com/SteveMorano",
        external: true,
      },
      {
        label: "Email",
        description: "The simplest way to reach me directly",
        href: "mailto:steven@stevenmorano.com",
      },
    ] satisfies ProfileLink[],
    elsewhere: [
      {
        label: "Smart Marketing Digital",
        description: "Independent marketing consulting practice",
        href: "https://smart.stevenmorano.com",
        external: true,
      },
      {
        label: "ADHD Working From Home",
        description: "Organization, finances, practical AI, and accountability",
        href: "https://www.skool.com/working-from-home-with-adhd-7671/",
        external: true,
      },
      {
        label: "Steve Labs",
        description: "A separate home for more experimental technology work",
        href: "https://github.com/stevenmorano/steve-labs-1",
        external: true,
      },
      {
        label: "Travel Archive",
        description: "Stories from a long solo trip through Southeast Asia and beyond",
        href: "https://travelingsteven.wordpress.com/",
        external: true,
      },
    ] satisfies ProfileLink[],
  },
} as const;
