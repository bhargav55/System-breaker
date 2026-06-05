# AI Engineering Hub

A responsive, static front-end shell for the **AI Engineering Hub** — one place to learn
everything about AI engineering. V1 validates the look, navigation, and structure of the site: a
marketing-grade hero, top-level navigation organized around two learning tracks, and placeholder
track pages that show how real curriculum will eventually sit in the layout. There is no backend,
no accounts, and no real lessons yet — just a polished, fully responsive single-page app.

## Tech stack

- [Vite 5](https://vitejs.dev/) + [React 18](https://react.dev/) + TypeScript (strict mode)
- [React Router v6](https://reactrouter.com/) for client-side routing
- [Tailwind CSS v3](https://tailwindcss.com/) for styling
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) for tests

## Prerequisites

- Node.js 18+ (Node 20+ recommended)
- npm 9+

## Getting started

Install dependencies:

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Then open <http://localhost:5173> in your browser. The dev server supports hot-module reload.

### Build for production

```bash
npm run build
```

This runs a strict `tsc --noEmit` type-check and then produces an optimized production bundle in
`dist/`. You can preview the built output locally with:

```bash
npm run preview
```

### Run the tests

```bash
npm test
```

Runs the Vitest suite once (`vitest run`). The suite verifies that the hero headline and CTA
render, the nav exposes all four tabs, and navigating to each track route shows that track's title.

## Project structure

```
src/
  components/   Nav, Footer, Layout, TrackCard, TrackPage
  pages/        Home, PivotTrack, AINativeCoding, About
  data/         tracks.ts — the typed track manifest (extensibility seam)
  __tests__/    App.test.tsx
```

## Routes

| Path                | Page                |
| ------------------- | ------------------- |
| `/`                 | Home (hero + tracks)|
| `/pivot`            | Pivot to AI Engineer|
| `/ai-native-coding` | AI-Native Coding    |
| `/about`            | About               |

## Adding a track later

Tracks are data-driven. Add one entry to the `tracks` array in `src/data/tracks.ts` (with a new
`route`) and add the matching `<Route>` in `src/App.tsx` — the home-page cards and track-page
layout render from the manifest automatically.
