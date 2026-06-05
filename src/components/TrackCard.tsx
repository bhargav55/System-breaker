import { Link } from 'react-router-dom';
import type { Track } from '../data/tracks';

export default function TrackCard({ track }: { track: Track }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="text-xl font-bold text-gray-900">{track.label}</h3>
      <p className="mt-3 flex-1 text-gray-600">{track.description}</p>
      <Link
        to={track.route}
        className="mt-6 inline-flex w-fit items-center gap-1 font-semibold text-brand-700 transition-colors hover:text-brand-800"
      >
        Explore this track
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );
}
