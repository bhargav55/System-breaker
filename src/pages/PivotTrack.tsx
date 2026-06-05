import TrackPage from '../components/TrackPage';
import { getTrackByRoute } from '../data/tracks';

const track = getTrackByRoute('/pivot')!;

export default function PivotTrack() {
  return <TrackPage track={track} />;
}
