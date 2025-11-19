import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { ScrollHandler } from './components/ScrollHandler';
import { ReadingProgress } from './components/ReadingProgress';
import { BackToTop } from './components/BackToTop';
import { Blog } from './pages/Blog';
import { Portfolio } from './pages/Portfolio';
import { AboutUs } from './pages/AboutUs';
import { Articles } from './pages/Articles';
import { News } from './pages/News';
import './index.css';

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <ScrollHandler />
          <ReadingProgress />
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/news" element={<News />} />
          </Routes>
          <BackToTop />
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}
