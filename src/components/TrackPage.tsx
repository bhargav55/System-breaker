import type { Track } from '../data/tracks';

export default function TrackPage({ track }: { track: Track }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
        Learning Track
      </p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
        {track.label}
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">{track.intro}</p>

      <section className="mt-12" aria-labelledby="curriculum-heading">
        <h2 id="curriculum-heading" className="text-2xl font-bold text-gray-900">
          Curriculum
          <span className="ml-3 align-middle text-sm font-medium text-gray-400">coming soon</span>
        </h2>
        <ol className="mt-6 max-w-3xl space-y-4">
          {track.modules.map((module, index) => (
            <li
              key={module}
              className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
                  {index + 1}
                </span>
                <span className="font-semibold text-gray-900">{module}</span>
              </span>
              <span className="flex-none rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Coming soon
              </span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
