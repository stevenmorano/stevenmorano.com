# Antigravity / Codex project guide

This repository contains Steven Morano's personal reputation, career, and project portfolio.

## Commands

```bash
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

## Product direction

- This is a personal site, not the Smart Marketing Digital sales site.
- Lead with marketing operations, leadership, growth, and execution.
- Use AI and software projects to demonstrate technical fluency and practical problem-solving.
- Keep consulting, the ADHD community, Steve Labs, and the travel archive as secondary parts of Steven's broader story.
- Do not add sales-call booking as the primary action.
- Never invent metrics, clients, testimonials, dashboards, or product functionality.

## Visual direction

- Editorial field-notes aesthetic
- Warm paper, deep ink, and one signal-orange accent
- Newsreader display type and Manrope body/interface type
- Numbered section rail as the recurring visual system
- Authentic portrait and project imagery
- Mobile-first layouts with a compact numbered section index

Avoid returning to the previous neon dashboard, glass-heavy bento, or generic AI-agency look.

## Key files

- `src/data/siteContent.ts`: content, evidence, projects, and links
- `src/components/Portfolio.module.css`: layout and design system
- `src/app/layout.tsx`: metadata and fonts
- `src/app/page.tsx`: page composition and structured data
- `documents/PERSONAL_SITE_REDESIGN.md`: approved strategy and acceptance criteria
- `documents/ARCHITECTURE.md`: current technical architecture

## Implementation rules

- Read the relevant local Next.js 16 documentation before changing framework behavior.
- Prefer Server Components and semantic HTML.
- Keep navigation functional without JavaScript where possible.
- Use custom thin SVG icons instead of adding an icon library.
- Label concept visuals honestly.
- Respect reduced-motion preferences.
- Run lint, TypeScript, and the production build before pushing.
