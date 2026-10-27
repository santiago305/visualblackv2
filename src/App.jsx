import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Each page is its own chunk, so it only loads its own CSS (department pages restyle <body>).
const Home = lazy(() => import('./pages/Home.jsx'));
const Consulting = lazy(() => import('./pages/Consulting.jsx'));
const ContentCreator = lazy(() => import('./pages/ContentCreator.jsx'));
const Developer = lazy(() => import('./pages/Developer.jsx'));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/content-creator" element={<ContentCreator />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
