import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { getFeaturedNews, getAllNews } from '../data/newsData';

export const News: React.FC = () => {
  const { t, language } = useLanguage();
  const featuredNews = getFeaturedNews();
  const allNews = getAllNews();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="news-page">
      <Navbar />

      {/* Hero Section - PADRÃO HOME */}
      <section id="hero" className="hero-v2 section-with-gradient">
        <div className="hero-v2__container">
          <div className="hero-v2__content fade-up">
            <h1 className="hero-v2__title">
              <span className="mono gradient">{t('news.hero.title')}</span>
            </h1>
            <p className="hero-v2__subtitle hero-v2__subtitle--large">
              {t('news.hero.subtitle')}
            </p>
            <p className="hero-v2__description">
              {t('news.hero.description')}
            </p>
          </div>

          <div className="hero-v2__visual fade-up">
            <img
              src="/images/noticias.png"
              alt="Ebla News - Past Meets Future"
              className="hero-v2__photo hero-v2__photo--blog hero-v2__photo--hover"
            />
          </div>
        </div>
        
        <div className="hero-v2__scroll-wrapper">
          <a href="#featured-news" className="hero-v2__scroll-link">
            <p className="hero-v2__scroll">{t('news.hero.scroll')}</p>
            <svg className="hero-v2__scroll-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5v14M12 19l-5-5M12 19l5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* Featured News Section */}
      <section id="featured-news" className="news-featured section-without-gradient">
        <div className="news-featured__container">
          <div className="section-header fade-up">
            <h2 className="section-title-gradient-hover">{t('news.featured.title')}</h2>
            <p className="section-subtitle-gradient">{t('news.featured.subtitle')}</p>
          </div>

          <div className="news-featured__grid">
            {featuredNews.map((newsItem) => (
              <Link to={`/news/${newsItem.slug}`} key={newsItem.id} className="news-card news-card--featured fade-up">
                <div className="news-card__image-wrapper">
                  <img src={newsItem.image} alt={typeof newsItem.title === 'string' ? newsItem.title : newsItem.title[language]} className="news-card__image" />
                  <span className="news-card__category">{typeof newsItem.category === 'string' ? newsItem.category : newsItem.category[language]}</span>
                </div>
                <div className="news-card__content">
                  <h3 className="news-card__title">{typeof newsItem.title === 'string' ? newsItem.title : newsItem.title[language]}</h3>
                  <p className="news-card__excerpt">{typeof newsItem.excerpt === 'string' ? newsItem.excerpt : newsItem.excerpt[language]}</p>
                  <div className="news-card__meta">
                    <span>{newsItem.date}</span>
                    <span>•</span>
                    <span>{newsItem.readTime} {t('news.readTime')}</span>
                  </div>
                  <span className="news-card__link">{t('news.readMore')} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All News Section */}
      <section id="all-news" className="news-all section-with-gradient">
        <div className="news-all__container">
          <div className="section-header fade-up">
            <h2 className="section-title-gradient-hover">{t('news.all.title')}</h2>
            <p className="section-subtitle-gradient">{t('news.all.subtitle')}</p>
          </div>

          <div className="news-all__list">
            {allNews.map((newsItem) => (
              <Link to={`/news/${newsItem.slug}`} key={newsItem.id} className="news-list-item fade-up">
                <div className="news-list-item__image-wrapper">
                  <img src={newsItem.image} alt={typeof newsItem.title === 'string' ? newsItem.title : newsItem.title[language]} className="news-list-item__image" />
                </div>
                <div className="news-list-item__content">
                  <div className="news-list-item__meta">
                    <span className="news-list-item__category">{typeof newsItem.category === 'string' ? newsItem.category : newsItem.category[language]}</span>
                    <span>•</span>
                    <span>{newsItem.readTime} {t('news.readTime')}</span>
                  </div>
                  <h3 className="news-list-item__title">{typeof newsItem.title === 'string' ? newsItem.title : newsItem.title[language]}</h3>
                  <div className="news-list-item__date">{newsItem.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

