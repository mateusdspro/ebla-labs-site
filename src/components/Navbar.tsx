import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const isPortfolio = location.pathname === '/portfolio';
  const isBlog = location.pathname === '/' || 
                 location.pathname.startsWith('/about-us') || 
                 location.pathname.startsWith('/articles') || 
                 location.pathname.startsWith('/news');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality placeholder
    console.log('Search query:', searchQuery);
  };

  if (isPortfolio) {
    return (
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/portfolio" className="navbar__brand">
            <span className="mono gradient">Mateus Ribeiro</span>
            <span className="navbar__tagline gradient"> — Data Scientist & AI Builder</span>
          </Link>

          <div className="navbar__links">
            <a href="#hero" className="navbar__link">{t('nav.home')}</a>
            <span className="navbar__separator">·</span>
            <a href="#about" className="navbar__link">{t('nav.about')}</a>
            <span className="navbar__separator">·</span>
            <a href="#skills" className="navbar__link">{t('nav.skills')}</a>
            <span className="navbar__separator">·</span>
            <a href="#projects" className="navbar__link">{t('nav.projects')}</a>
            <span className="navbar__separator">·</span>
            <a href="#contact" className="navbar__link">{t('nav.contact')}</a>
            <span className="navbar__separator">·</span>
            <Link to="/" className="navbar__link navbar__link--blog">{t('nav.blog')}</Link>
          </div>

          <div className="navbar__actions">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </nav>
    );
  }

  if (isBlog) {
    return (
      <nav className="navbar navbar--blog">
        <div className="navbar__container">
          <Link to="/" className="navbar__brand navbar__brand--blog">
            <span className="navbar__brand-name">Ebla Labs</span>
          </Link>

          <div className="navbar__links">
            <Link to="/" className="navbar__link">{t('nav.home')}</Link>
            <span className="navbar__separator">·</span>
            <Link to="/about-us" className="navbar__link">{t('nav.aboutUs')}</Link>
            <span className="navbar__separator">·</span>
            <Link to="/articles" className="navbar__link">Articles</Link>
            <span className="navbar__separator">·</span>
            <Link to="/news" className="navbar__link">News</Link>
            <span className="navbar__separator">·</span>
            <a href="/#contact" className="navbar__link">{t('nav.contact')}</a>
            <span className="navbar__separator">·</span>
            <Link to="/portfolio" className="navbar__link navbar__link--portfolio">{t('nav.portfolio')}</Link>
          </div>

          <div className="navbar__actions">
            <form onSubmit={handleSearch} className="navbar__search">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('nav.search')}
                className="navbar__search-input"
              />
              <button type="submit" className="navbar__search-btn" aria-label="Search">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </form>
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </nav>
    );
  }

  return null;
};

