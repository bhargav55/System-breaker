import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PivotTrack from './pages/PivotTrack';
import AINativeCoding from './pages/AINativeCoding';
import About from './pages/About';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pivot" element={<PivotTrack />} />
        <Route path="/ai-native-coding" element={<AINativeCoding />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
