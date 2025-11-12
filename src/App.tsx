import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ScrollHandler } from './components/ScrollHandler';
import { ReadingProgress } from './components/ReadingProgress';
import { BackToTop } from './components/BackToTop';
import { Blog } from './pages/Blog';
import { Portfolio } from './pages/Portfolio';
import { AboutUs } from './pages/AboutUs';
import './index.css';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollHandler />
        <ReadingProgress />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <BackToTop />
      </Router>
    </LanguageProvider>
  );
}
