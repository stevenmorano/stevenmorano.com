# Roadmap

## Current state

The July 2026 redesign and dark visual refinement are implemented and live:

- [x] Repositioned the site from a consulting funnel to a personal reputation and career hub.
- [x] Established a dark, modern, technology-forward visual system.
- [x] Put marketing operations and leadership before AI/software work.
- [x] Added defensible career outcomes and a concise professional timeline.
- [x] Featured Home Management first and Mindful Eating second.
- [x] Replaced inaccurate project imagery with factual text-first project cards.
- [x] Added LinkedIn, GitHub, X, email, Smart Marketing Digital, the ADHD community, Steve Labs, and the travel archive.
- [x] Removed booking-focused calls to action and unsupported dashboard-style claims.
- [x] Added canonical metadata, structured data, sitemap, robots, manifest, site icon, and a generated Open Graph image.
- [x] Verified responsive layouts at phone, tablet, and desktop sizes.
- [x] Passed ESLint, TypeScript, and the production Next.js build.
- [x] Deployed the approved build to `stevenmorano.com`.
- [x] Verified the canonical HTTPS domain returns the current title and homepage.

## Near-term follow-up

### 1. Search indexing

- [ ] Add the site to Google Search Console and Bing Webmaster Tools.
- [ ] Submit `/sitemap.xml`.
- [ ] Request indexing for the homepage after launch.
- [ ] Validate the live structured data and social preview image.

### 2. Public résumé

- [ ] Create a truthful one- or two-page public résumé derived from the master résumé.
- [ ] Decide whether the public résumé should be downloadable from this site.
- [ ] Keep the master résumé private.

### 3. Stronger project evidence

- [ ] Review every public project description against its repository or Steven's current description.
- [ ] Add project screenshots only when Steven supplies or approves images that accurately represent the current product.
- [ ] Add a publishable Mindful Eating project page or repository when appropriate.
- [ ] Add short case-study pages only when there is enough real context, process, and evidence to justify them.
- [ ] Keep private repositories private while describing the product problem and Steven's role.

### 4. Career proof

- [ ] Add one or two verified recommendations or testimonials with permission.
- [ ] Add company names, role dates, and outcomes only when they match the résumé and LinkedIn.
- [ ] Review the availability line whenever Steven's job status changes.

### 5. Reputation maintenance

- [ ] Refresh project priorities and descriptions quarterly.
- [ ] Keep GitHub repository descriptions and profile biography consistent with this site.
- [ ] Keep LinkedIn's headline, About section, dates, and domain link aligned.
- [ ] Publish occasional useful material on marketing operations, practical AI, and problem-solving to build name-search authority over time.

### 6. Dependency maintenance

- [ ] Recheck `npm audit` after future stable Next.js, ESLint, PostCSS, and Sharp releases.
- [ ] Do not run `npm audit fix --force`; the current proposed force fixes introduce breaking or incompatible dependency changes.

## Explicit non-goals

- Do not add a booking funnel to the personal homepage.
- Do not duplicate the Smart Marketing Digital sales site.
- Do not add fictional counters, sample performance dashboards, or invented clients.
- Do not turn the homepage into an exhaustive résumé or a full Steve Labs catalog.
- Do not promise Google rankings; improve the signals and monitor the result.
