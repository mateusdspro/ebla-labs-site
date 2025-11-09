import React, { useState, useEffect } from 'react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? 'back-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
        <path d="M10 15V5M10 5L5 10M10 5L15 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};

