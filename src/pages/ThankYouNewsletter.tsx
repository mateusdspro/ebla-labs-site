import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const ThankYouNewsletter: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Fade-up animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="thank-you-page">
      <Navbar />

      {/* Thank You Newsletter Section */}
      <section className="thank-you-hero section-with-gradient">
        <div className="thank-you-hero__container">
          <div className="thank-you-hero__content fade-up">
            {/* Success Icon - Envelope/Mail */}
            <div className="thank-you-hero__icon">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <rect x="20" y="35" width="80" height="50" rx="4" stroke="url(#gradient)" strokeWidth="4" />
                <path
                  d="M20 40L60 65L100 40"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="85" cy="75" r="15" fill="#1a1a1a" stroke="url(#gradient)" strokeWidth="3" />
                <path
                  d="M80 75L83 78L90 71"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Title */}
            <h1 className="thank-you-hero__title">
              <span className="mono gradient">{t('thankYouNewsletter.title')}</span>
            </h1>

            {/* Subtitle */}
            <p className="thank-you-hero__subtitle">
              {t('thankYouNewsletter.subtitle')}
            </p>

            {/* Description */}
            <p className="thank-you-hero__description">
              {t('thankYouNewsletter.description')}
            </p>

            {/* CTA Button */}
            <Link to="/articles" className="btn btn--primary thank-you-hero__button">
              {t('thankYouNewsletter.button')}
            </Link>

            {/* Additional Info */}
            <div className="thank-you-hero__info fade-up">
              <p className="thank-you-hero__info-text">
                {t('thankYouNewsletter.info')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

