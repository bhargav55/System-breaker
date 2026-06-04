import TrackCard from '../components/TrackCard';
import { tracks } from '../data/tracks';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800">
        <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
          <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">
            Become an AI Engineer
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-100 sm:text-xl">
            Two focused learning tracks. Real-world skills. Built for engineers.
          </p>
          <div className="mt-10">
            <a
              href="#tracks"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
            >
              Explore the tracks
            </a>
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section id="tracks" className="scroll-mt-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Learning Tracks
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Pick the path that matches where you are and where you want to go.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {tracks.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
