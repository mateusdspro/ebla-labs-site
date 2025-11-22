import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const ThankYou: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="thank-you-page">
      <Navbar />

      {/* Thank You Section */}
      <section className="thank-you-hero section-with-gradient">
        <div className="thank-you-hero__container">
          <div className="thank-you-hero__content">
            {/* Success Icon */}
            <div className="thank-you-hero__icon">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="55" stroke="url(#gradient)" strokeWidth="4" />
                <path
                  d="M35 60L50 75L85 40"
                  stroke="url(#gradient)"
                  strokeWidth="6"
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
              <span className="mono gradient">{t('thankYou.title')}</span>
            </h1>

            {/* Subtitle */}
            <p className="thank-you-hero__subtitle">
              {t('thankYou.subtitle')}
            </p>

            {/* Description */}
            <p className="thank-you-hero__description">
              {t('thankYou.description')}
            </p>

            {/* CTA Button */}
            <Link to="/" className="btn btn--primary thank-you-hero__button">
              {t('thankYou.button')}
            </Link>

            {/* Additional Info */}
            <div className="thank-you-hero__info">
              <p className="thank-you-hero__info-text">
                {t('thankYou.info')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

