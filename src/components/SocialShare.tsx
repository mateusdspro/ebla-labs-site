import React from 'react';

interface SocialShareProps {
  url: string;
  title: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({ url, title }) => {
  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);

  return (
    <div className="social-share">
      <span className="social-share__label">Share:</span>
      <a
        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="social-share__link"
        aria-label="Share on Twitter"
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
          <path d="M15.751 2.5h2.875l-6.281 7.181L19.5 17.5h-5.787l-4.531-5.925L3.844 17.5H.969l6.719-7.681L1.5 2.5h5.937l4.094 5.412L15.751 2.5zm-1.006 13.469h1.594L6.344 4.131H4.644l10.1 11.838z" />
        </svg>
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="social-share__link"
        aria-label="Share on LinkedIn"
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
          <path d="M18.5 0h-17C.675 0 0 .675 0 1.5v17c0 .825.675 1.5 1.5 1.5h17c.825 0 1.5-.675 1.5-1.5v-17c0-.825-.675-1.5-1.5-1.5zM6 17H3V7.5h3V17zM4.5 6.25c-.966 0-1.75-.784-1.75-1.75S3.534 2.75 4.5 2.75s1.75.784 1.75 1.75-.784 1.75-1.75 1.75zM17 17h-3v-4.5c0-1.125-.375-1.875-1.313-1.875-.712 0-1.137.487-1.325.956-.069.169-.088.4-.088.634V17h-3s.038-8.25 0-9h3v1.275c.394-.612 1.1-1.488 2.675-1.488 1.95 0 3.425 1.275 3.425 4.013V17z" />
        </svg>
      </a>
      <button
        onClick={() => navigator.clipboard.writeText(url)}
        className="social-share__link"
        aria-label="Copy link"
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor">
          <rect x="7" y="7" width="10" height="10" rx="2" strokeWidth="1.5" />
          <path d="M3 13V5a2 2 0 012-2h8" strokeWidth="1.5" />
        </svg>
      </button>
    </div>
  );
};

