# Steven Morano — Personal Website

The source for [stevenmorano.com](https://stevenmorano.com), Steven Morano's personal reputation, career, and project portfolio.

This is intentionally different from Smart Marketing Digital. The site presents Steven as a marketing operations leader with strong technical fluency and a growing body of AI-assisted software work. It is designed for recruiters, hiring managers, collaborators, professional contacts, and anyone searching for Steven by name.

## Positioning

- Marketing leadership comes first.
- AI, software, and rapid learning are meaningful differentiators.
- Independent consulting is presented honestly as a small practice, not a large active agency.
- Projects demonstrate judgment and adaptability without positioning Steven as a traditional software engineer.
- The primary action is to explore Steven's work and professional profiles, not book a sales call.

The complete strategy and content rules live in [`documents/PERSONAL_SITE_REDESIGN.md`](documents/PERSONAL_SITE_REDESIGN.md).

## Technology

- Next.js 16 App Router
- React 19
- TypeScript
- CSS Modules and global CSS
- `next/image` for optimized imagery
- `next/font` with Geist and JetBrains Mono
- Static metadata routes for robots, sitemap, manifest, icon, and Open Graph imagery

The page is composed entirely of React Server Components. Navigation works with ordinary anchor links and does not require client-side state.

## Project structure

```text
public/
  images/                  Portrait
  projects/                Legacy project captures retained for reference
src/
  app/
    layout.tsx             Fonts, global metadata, and page shell
    page.tsx               Homepage composition and JSON-LD
    globals.css            Reset, design tokens, and global behavior
    icon.svg               Site icon
    manifest.ts            Web app metadata
    opengraph-image.tsx    Generated social sharing image
    robots.ts              robots.txt
    sitemap.ts             sitemap.xml
  components/
    Navigation.tsx         Desktop and numbered mobile navigation
    Hero.tsx               Identity and positioning
    Proof.tsx              Career evidence
    Experience.tsx         Capabilities and professional history
    Projects.tsx           Text-first featured and supporting builds
    About.tsx              Portrait, personal story, technical origin, and community
    Connect.tsx            Social, professional, and personal links
    Footer.tsx             Site footer
    Portfolio.module.css   Responsive dark product-studio design system
  data/
    siteContent.ts         Central source for editable site content
```

## Editing content

Most text, roles, metrics, project descriptions, and links are centralized in [`src/data/siteContent.ts`](src/data/siteContent.ts).

Before publishing changes:

- Keep every career metric defensible and connected to a real role.
- Do not invent clients, testimonials, dashboards, or software capabilities.
- Do not expose private repository URLs, hosting dashboards, or personal accounts.
- Keep Home Management first and Mindful Eating second unless Steven changes that priority.
- Preserve the distinction between this personal site and the sales-focused Smart Marketing Digital site.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

Run all checks before pushing:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The production build statically generates the homepage, Open Graph image, icon, manifest, robots file, and sitemap.
