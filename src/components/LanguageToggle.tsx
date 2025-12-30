import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle"
      aria-label={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
    >
      {language === 'en' ? (
        <>
          <span className="flag">🇧🇷</span>
          <span className="lang-text">PT</span>
        </>
      ) : (
        <>
          <span className="flag">🇺🇸</span>
          <span className="lang-text">EN</span>
        </>
      )}
    </button>
  );
};










