export interface Track {
  /** Stable identifier, also used as a React key. */
  id: string;
  /** Display label used in cards and page titles. */
  label: string;
  /** Client-side route the track lives at. */
  route: string;
  /** One-line description shown on the home page card. */
  description: string;
  /** Longer intro paragraph shown at the top of the track page. */
  intro: string;
  /** Upcoming module titles, rendered as a "coming soon" curriculum list. */
  modules: string[];
}

/**
 * The track manifest. This is the extensibility seam: adding a future track is
 * a single entry here — both the home-page cards and the track pages render
 * from this array, so no structural changes are needed.
 */
export const tracks: Track[] = [
  {
    id: 'pivot',
    label: 'Pivot to AI Engineer',
    route: '/pivot',
    description:
      'For experienced engineers who want to move into an AI engineering role and need a clear order to learn things in.',
    intro:
      'This track is for working software engineers who want to pivot into AI engineering. It assumes you can already ship software and focuses on the concepts, systems, and judgment you need to build production-grade AI features — in the order that actually makes sense.',
    modules: [
      'Foundations of LLMs',
      'Prompt Engineering & Context Design',
      'Building RAG Systems',
      'Evaluating & Shipping AI Features',
    ],
  },
  {
    id: 'ai-native-coding',
    label: 'AI-Native Coding',
    route: '/ai-native-coding',
    description:
      'For developers who want to master AI-native tooling — assistants, agentic workflows, and spec-driven development.',
    intro:
      'This track is for developers who want to get genuinely fast and effective with AI-native tooling. You will learn how to collaborate with AI coding assistants, drive work from specs, orchestrate agentic workflows, and keep quality high when AI writes the first draft.',
    modules: [
      'Coding with AI Assistants',
      'Spec-Driven Development',
      'Agentic Workflows & Tooling',
      'Reviewing AI-Generated Code',
    ],
  },
];

export const getTrackByRoute = (route: string): Track | undefined =>
  tracks.find((track) => track.route === route);
