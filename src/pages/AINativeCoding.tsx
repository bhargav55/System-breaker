import TrackPage from '../components/TrackPage';
import { getTrackByRoute } from '../data/tracks';

const track = getTrackByRoute('/ai-native-coding')!;

export default function AINativeCoding() {
  return <TrackPage track={track} />;
}
