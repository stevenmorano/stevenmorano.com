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

export type ProjectItem = {
  title: string;
  eyebrow: string;
  status: string;
  description: string;
  tags: string[];
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
    availability: "Open to remote and hybrid marketing roles",
    headline: "Marketing is my career. Technology is how I work.",
    introduction:
      "I have spent more than a decade in digital marketing and marketing operations. I also use AI to build apps, test ideas, and solve problems that I used to leave sitting in a notebook.",
    signature: "Marketing operations / AI tools / Useful software",
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
        "CRM, lifecycle email, lead flow, reporting, automation, and the day-to-day systems that keep marketing and sales organized.",
    },
    {
      number: "02",
      title: "Growth and acquisition",
      description:
        "Paid media, funnels, landing pages, ecommerce, creative testing, and figuring out where the budget is actually working.",
    },
    {
      number: "03",
      title: "AI and software",
      description:
        "I use AI to research, prototype, automate repetitive work, and build small tools. I am not a traditional developer, but I am very comfortable learning software.",
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
        eyebrow: "Featured build",
        status: "Private / In development",
        description:
          "A home management app for keeping maintenance up to date in one place - basically a simple operating system for a house.",
        tags: ["TypeScript", "Product design", "AI-assisted build"],
      },
      {
        title: "Mindful Eating",
        eyebrow: "Featured build",
        status: "Private / In development",
        description:
          "A mobile-first app that interrupts boredom or impulse eating with a five-minute activity, breathing exercises, and simple progress tracking.",
        tags: ["React", "Mobile-first", "Local storage"],
      },
    ] satisfies ProjectItem[],
    supporting: [
      {
        title: "Threads Content Engine",
        eyebrow: "Marketing + AI",
        status: "Public repository",
        description:
          "A research and drafting tool for my Threads account. It can organize sources and generate drafts for review, but it does not publish or schedule posts.",
        tags: ["Next.js", "Supabase", "Threads API", "OpenAI"],
        href: "https://github.com/stevenmorano/threads-content-engine",
      },
      {
        title: "Floorplan Digitizer",
        eyebrow: "Browser-native CAD",
        status: "Public repository",
        description:
          "A browser-based CAD prototype for uploading a floorplan, setting its scale, drawing walls and rooms, and experimenting with Gemini-assisted tracing.",
        tags: ["React", "Gemini", "Browser CAD"],
        href: "https://github.com/stevenmorano/floorplan-digitizer",
      },
      {
        title: "ChatGPT Bulk Delete",
        eyebrow: "Chrome extension",
        status: "Public repository",
        description:
          "A Chrome extension for searching, filtering, and bulk-deleting a large ChatGPT conversation history. Its local database stays in the browser.",
        tags: ["JavaScript", "Chrome extension", "IndexedDB"],
        href: "https://github.com/stevenmorano/ce-chatgpt-bulk-delete",
      },
      {
        title: "Print Frame Visualizer",
        eyebrow: "Useful visual tool",
        status: "Public repository",
        description:
          "A local-first tool for previewing print, mat, and frame combinations to scale before buying or ordering the finished piece.",
        tags: ["TypeScript", "Local-first", "Visualization"],
        href: "https://github.com/stevenmorano/print-frame-visualizer",
      },
    ] satisfies ProjectItem[],
  },
  about: {
    lead:
      "I have always been the person people call when technology stops cooperating.",
    paragraphs: [
      "I am not an IT professional or a traditional software developer. I am just very comfortable with computers. If something breaks, I want to know why. If a program is confusing, I keep using it until it makes sense.",
      "That habit has followed me through design engineering, digital marketing, ecommerce, paid media, CRM work, automation, and now AI-assisted software.",
      "Before AI, most of my app ideas stayed in a notebook because I could not build them on my own. Now I work with tools such as Codex, Claude, and Gemini to prototype those ideas, test them, and keep learning.",
    ],
    origin: {
      title: "An engineering foundation",
      description:
        "Before marketing, I was a design engineer at Bolt Technology. The job put me between engineering, manufacturing, software, IT, and business leadership. It is older experience, but it explains how I approach problems.",
    },
    community: {
      title: "Community building",
      description:
        "I also run a small Skool community for adults with ADHD who work from home. It is evolving toward digital organization, personal finance, practical AI tools, and accountability.",
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
        description: "My professional background and updates",
        href: "https://www.linkedin.com/in/stevenmorano/",
        external: true,
      },
      {
        label: "GitHub",
        description: "The public projects I am building",
        href: "https://github.com/stevenmorano",
        external: true,
      },
      {
        label: "X / Twitter",
        description: "Technology, marketing, AI, and things I am learning",
        href: "https://x.com/SteveMorano",
        external: true,
      },
      {
        label: "Email",
        description: "The easiest way to reach me directly",
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
