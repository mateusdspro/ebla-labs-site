import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const ThankYouNewsletter: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
      background: '#0B0F14',
      color: '#E5E7EB'
    }}>
      <div style={{ maxWidth: '600px' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem'
        }}>
          {t('thankYouNewsletter.title')}
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          color: '#06B6D4',
          marginBottom: '1.5rem'
        }}>
          {t('thankYouNewsletter.subtitle')}
        </p>
        
        <p style={{
          fontSize: '1.125rem',
          lineHeight: '1.7',
          color: '#94A3B8',
          marginBottom: '2rem'
        }}>
          {t('thankYouNewsletter.description')}
        </p>
        
        <Link 
          to="/articles" 
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '0.5rem',
            fontWeight: '600',
            fontSize: '1.125rem'
          }}
        >
          {t('thankYouNewsletter.button')}
        </Link>
        
        <p style={{
          marginTop: '2rem',
          fontSize: '0.9375rem',
          color: '#64748B'
        }}>
          {t('thankYouNewsletter.info')}
        </p>
      </div>
    </div>
  );
};
