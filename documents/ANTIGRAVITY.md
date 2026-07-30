# Developer guide

## Commands

```bash
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

The development server uses Next.js's default port, `3000`, unless another port is supplied.

## First files to edit

- [`src/data/siteContent.ts`](../src/data/siteContent.ts): copy, metrics, roles, projects, and links
- [`src/components/Portfolio.module.css`](../src/components/Portfolio.module.css): layout and visual system
- [`src/app/layout.tsx`](../src/app/layout.tsx): site-wide metadata and fonts
- [`src/app/page.tsx`](../src/app/page.tsx): page order and structured data

## Content rules

1. Treat this as Steven's personal reputation and career site, not a consulting landing page.
2. Lead with marketing operations, leadership, growth, and execution.
3. Present AI and software building as evidence of technical fluency and adaptability.
4. Keep every metric, client reference, testimonial, and project status truthful.
5. Never expose private repositories, private social profiles, or hosting/database dashboards.
6. Keep Smart Marketing Digital and the ADHD community as secondary destinations.
7. Keep Home Management first and Mindful Eating second unless Steven explicitly changes the order.

## Design rules

1. Preserve the near-black, navy, blue, and cyan palette.
2. Use Geist for display/body type and JetBrains Mono for interface labels.
3. Keep the numbered section rail coherent with navigation.
4. Keep projects text-first unless Steven supplies or approves accurate screenshots.
5. Use thin custom SVG icons rather than adding a large icon dependency.
6. Use technical visual cues with restraint and avoid sales-funnel language.
7. Maintain strong mobile layouts at 390px and a useful intermediate layout around 768px.

## Technical rules

1. Read the relevant local Next.js 16 documentation before changing framework behavior.
2. Prefer Server Components and ordinary HTML navigation.
3. Keep client JavaScript out unless the interaction genuinely requires it.
4. Respect `prefers-reduced-motion`.
5. Use `next/image` for raster site assets.
6. Run lint, TypeScript, and the production build before pushing.
