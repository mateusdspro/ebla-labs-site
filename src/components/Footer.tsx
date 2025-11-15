import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const isPortfolio = location.pathname === '/portfolio';
  const isBlog = location.pathname === '/' || 
                 location.pathname.startsWith('/about-us') || 
                 location.pathname.startsWith('/articles') || 
                 location.pathname.startsWith('/news');

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          {isBlog ? t('footer.blog') : t('footer.rights')}
        </p>
        
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/mateus-ribeiro-197043192/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M18.5 0h-17C.675 0 0 .675 0 1.5v17c0 .825.675 1.5 1.5 1.5h17c.825 0 1.5-.675 1.5-1.5v-17c0-.825-.675-1.5-1.5-1.5zM6 17H3V7.5h3V17zM4.5 6.25c-.966 0-1.75-.784-1.75-1.75S3.534 2.75 4.5 2.75s1.75.784 1.75 1.75-.784 1.75-1.75 1.75zM17 17h-3v-4.5c0-1.125-.375-1.875-1.313-1.875-.712 0-1.137.487-1.325.956-.069.169-.088.4-.088.634V17h-3s.038-8.25 0-9h3v1.275c.394-.612 1.1-1.488 2.675-1.488 1.95 0 3.425 1.275 3.425 4.013V17z" />
            </svg>
          </a>
          <a
            href="https://x.com/eblalabs"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="X (Twitter)"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M15.751 2.5h2.875l-6.281 7.181L19.5 17.5h-5.787l-4.531-5.925L3.844 17.5H.969l6.719-7.681L1.5 2.5h5.937l4.094 5.412L15.751 2.5zm-1.006 13.469h1.594L6.344 4.131H4.644l10.1 11.838z" />
            </svg>
          </a>
          <a
            href="https://github.com/mateusdspro"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
              />
            </svg>
          </a>
          <a
            href="mailto:mateus.dspro@gmail.com"
            className="footer__social-link"
            aria-label="Email"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <rect x="2" y="4" width="16" height="12" rx="2" strokeWidth="1.5" />
              <path d="M2 7l8 5 8-5" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
          {isPortfolio && (
            <Link to="/" className="footer__social-link" aria-label="Blog">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <path d="M6 4h8M6 8h8M6 12h8M6 16h4" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
};
