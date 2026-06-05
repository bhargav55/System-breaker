# AI Engineering Hub — V1 Base Template

## Problem Statement

People who want to break into AI engineering have no single, coherent place to learn it.
Resources are scattered across blogs, videos, course platforms, and docs. Two audiences feel
this most acutely:

- Engineers who want to **pivot into an AI engineering role** and don't know what to learn or
  in what order.
- Developers who want to **learn AI-native tooling for coding** (AI assistants, agentic
  workflows, spec-driven development) and lack a structured path.

The long-term vision is one destination for everything AI engineering. But before investing in
real curriculum, we need to validate the **look, navigation, and structure** of the site — does
the shell feel like a credible, well-organized learning destination?

## Solution

A responsive, static front-end **shell** for the AI Engineering Hub: a polished marketing-grade
hero that sells the vision, clear top-level navigation organized around two learning tracks, and
placeholder track pages that show how real curriculum will eventually sit in the layout. No real
lessons, accounts, or backend yet — V1 exists to validate the experience and visual design so the
team can confidently build real content on top of it next.

From the visitor's perspective: they land on a confident hero ("Become an AI Engineer"), immediately
understand the two paths available to them, can navigate to either track to preview what's coming,
and can read a short About that states the mission. Everything loads instantly, works on mobile, and
looks intentional — not like an unstyled scaffold.

## User Stories

1. As a visitor, I want to see a clear, confident hero headline and value proposition the moment I
   land, so that I immediately understand what the site is for.
2. As a visitor, I want a primary call-to-action button in the hero, so that I have an obvious next
   step.
3. As a visitor, I want the hero CTA ("Explore the tracks") to scroll me to the learning tracks
   section, so that I can act on my interest without leaving the page.
4. As a visitor, I want a persistent top navigation bar with clearly labeled tabs, so that I can move
   between sections of the site.
5. As a visitor, I want tabs for Home, "Pivot to AI Engineer", "AI-Native Coding", and About, so that
   the site's structure matches the two audiences it serves plus context about the mission.
6. As a visitor, I want each tab to be a real, shareable URL, so that I can bookmark or send a link to
   a specific track.
7. As a visitor, I want the browser back/forward buttons to work as I navigate tabs, so that navigation
   feels like a real website.
8. As a visitor, I want clicking a tab to switch sections instantly without a full page reload, so that
   the experience feels fast and app-like.
9. As an engineer considering a career change, I want a "Pivot to AI Engineer" track page with a title
   and intro paragraph, so that I understand who the track is for.
10. As an engineer considering a career change, I want to preview a list of upcoming module titles for
    the Pivot track, so that I can gauge whether the curriculum will cover what I need.
11. As a developer, I want an "AI-Native Coding" track page with a title and intro paragraph, so that I
    understand what AI-native coding skills the track will teach.
12. As a developer, I want to preview a list of upcoming module titles for the AI-Native Coding track,
    so that I can decide if it's relevant to me.
13. As a visitor on the Home page, I want a "Learning Tracks" section with one card per track, so that I
    can see both paths at a glance and choose one.
14. As a visitor, I want each track card to link into that track's page, so that I can dive deeper from
    the overview.
15. As a visitor, I want an About section with a short mission statement, so that I understand the
    site's purpose and credibility.
16. As a visitor, I want a simple footer with the site name, so that the page feels complete.
17. As a mobile visitor, I want the layout to adapt to small screens, so that I can use the site on my
    phone.
18. As a visitor, I want a cohesive visual design (consistent color, typography, spacing), so that the
    site reads as a serious, trustworthy learning resource.
19. As a developer picking up this repo, I want a README documenting how to install, run, build, and
    test, so that I can work with the project locally.
20. As a maintainer, I want an automated test suite wired to the `test` script that verifies the core
    UI renders and navigates correctly, so that future changes don't silently break the shell.

## Implementation Decisions

- **Stack:** Vite + React + TypeScript, styled with Tailwind CSS. Strong directive — the planner may
  substitute an equivalent modern static front-end stack, but the result must remain a static,
  self-contained single-page app with a clean production build and no type errors. (Substitution should
  be a last resort; the test gate and review depend on a working build + test script.)
- **Routing:** Real client-side routes for four tabs — `/` (Home), `/pivot` (Pivot to AI Engineer),
  `/ai-native-coding` (AI-Native Coding), `/about` (About). URLs are shareable; browser back/forward
  work; tab switches do not trigger a full page reload.
- **Home page composition:** a hero (headline "Become an AI Engineer", a value-prop subheading, a
  primary CTA button labeled "Explore the tracks") followed by a "Learning Tracks" section containing
  two cards (one per track), each with a title, a one-line description, and a link into the track's
  route. The CTA scrolls/jumps to the Learning Tracks section on the same page.
- **Track pages:** each renders a page title, a one-paragraph intro, and a "Curriculum coming soon"
  list of 3–4 realistic example module titles. Suggested titles (final wording at implementer's
  discretion):
  - Pivot to AI Engineer: "Foundations of LLMs", "Prompt Engineering & Context Design",
    "Building RAG Systems", "Evaluating & Shipping AI Features".
  - AI-Native Coding: "Coding with AI Assistants", "Spec-Driven Development",
    "Agentic Workflows & Tooling", "Reviewing AI-Generated Code".
- **About page:** a single short paragraph stating the mission ("everything AI engineering in one
  place"). No team bios.
- **Visual design:** hybrid direction — a bold, marketing-forward hero (large type, generous spacing,
  one strong accent color) over calm, card-based content sections below. Light theme. Accent color: a
  deep indigo/violet. Clean sans-serif type (system stack or Inter). Max content width ~1100–1200px.
  Fully responsive down to mobile. The result must look intentionally designed, not a default scaffold.
- **Testing:** `package.json` must define a `test` script (Vitest + React Testing Library) that passes.
  At minimum the suite asserts: the hero headline and CTA render; the nav exposes all four tabs;
  navigating to each track route shows that track's title.
- **Build gate:** `install` then `build` must succeed with no type errors, producing a production bundle.
- **Documentation:** a README documenting install, dev server, build, and test commands.

## Out of Scope

Strict guardrails — none of the following are part of V1, and the implementer should not add them:

- Any backend, API, database, or server.
- User accounts, authentication, payments, or enrollment.
- Email capture, waitlist, contact, or any form.
- Real lesson/course content, video, or downloadable material.
- Search, comments, progress tracking, or personalization.
- A CMS or content-authoring workflow.
- Analytics, tracking, or third-party scripts.
- Internationalization / multiple languages.
- A dark-mode toggle.
- Animation libraries (simple CSS transitions are fine; no Framer Motion / GSAP / etc.).
- Any additional tracks, tabs, or pages beyond the four specified. The structure should make adding
  tracks easy later, but only the two tracks above are built now.

## Further Notes

- This is V1 of a deliberately phased product. The next PRDs are expected to add real curriculum content
  (starting with one track), and later a conversion mechanism (e.g. waitlist/accounts) once the shell is
  validated. The IA and components should be built so a third/fourth track and real lessons drop in
  without a rewrite.
- Design inspiration: the confident, program-selling energy of maven.com for the hero, combined with the
  calm, content-dense, study-tool feel of hellointerview.com for the content sections.
- This PRD is also serving as the first end-to-end exercise of the Flash Build agent loop
  (planner → implementer → reviewer) against the `bhargav55/System-breaker` repo, so a bounded,
  self-contained, cleanly testable scope is intentional.
