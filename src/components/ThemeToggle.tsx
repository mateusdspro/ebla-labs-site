import React, { useEffect, useState } from 'react';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved === 'light' ? 'light' : 'dark') as 'dark' | 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 2.5V4.5M10 15.5V17.5M4.5 10H2.5M17.5 10H15.5M15.3 15.3L13.9 13.9M15.3 4.7L13.9 6.1M4.7 15.3L6.1 13.9M4.7 4.7L6.1 6.1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M17.5 11.5C16.5 15 13 17.5 9 17.5C5 17.5 2 14.5 2 10.5C2 6.5 4.5 3 8 2C7.5 3 7 4.5 7 6C7 9.5 9.5 12 13 12C14.5 12 16 11.5 17 10.5C17.3 10.8 17.4 11.2 17.5 11.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};



