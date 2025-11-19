import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { getFeaturedArticles, getAllArticles } from '../data/articlesData';

export const Articles: React.FC = () => {
  const { t, language } = useLanguage();
  const featuredArticles = getFeaturedArticles();
  const allArticles = getAllArticles();

  // Schema Markup for Articles Collection
  const articlesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Ebla Labs Articles - AI, Data Science & Machine Learning",
    "description": "Expert articles about artificial intelligence, machine learning, data science, MLOps, and innovative technology solutions.",
    "url": "https://eblalabs.com/articles",
    "publisher": {
      "@type": "Organization",
      "name": "Ebla Labs",
      "url": "https://eblalabs.com"
    },
    "hasPart": allArticles.map(article => ({
      "@type": "BlogPosting",
      "headline": typeof article.title === 'string' ? article.title : article.title[language],
      "description": typeof article.excerpt === 'string' ? article.excerpt : article.excerpt[language],
      "url": `https://eblalabs.com/articles/${article.slug}`,
      "datePublished": article.date,
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "image": `https://eblalabs.com${article.image}`
    }))
  };

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  return (
    <div className="articles-page">
      <SEO
        title="Articles - AI, Data Science & Machine Learning"
        description="What are the latest trends in AI and data science? Explore in-depth articles on machine learning, MLOps, generative AI, data engineering, and business intelligence."
        canonical="https://eblalabs.com/articles"
        type="website"
        image="/images/imagem.artigos.png"
        schema={articlesSchema}
      />
      <Navbar />

      {/* Hero Section - PADRÃO HOME */}
      <section id="hero" className="hero-v2 section-with-gradient">
        <div className="hero-v2__container">
          <div className="hero-v2__content fade-up">
            <h1 className="hero-v2__title">
              <span className="mono gradient">{t('articles.hero.title')}</span>
            </h1>
            <p className="hero-v2__subtitle hero-v2__subtitle--large">
              {t('articles.hero.subtitle')}
            </p>
            <p className="hero-v2__description">
              {t('articles.hero.description')}
            </p>
          </div>

          <div className="hero-v2__visual fade-up">
            <img
              src="/images/imagem.artigos.png"
              alt="Ebla Articles - Ancient Wisdom Meets Modern Technology"
              className="hero-v2__photo hero-v2__photo--blog hero-v2__photo--hover"
            />
          </div>
        </div>
        
        <div className="hero-v2__scroll-wrapper">
          <a href="#featured" className="hero-v2__scroll-link">
            <p className="hero-v2__scroll">{t('articles.hero.scroll')}</p>
            <svg className="hero-v2__scroll-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5v14M12 19l-5-5M12 19l5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="featured" className="articles-featured section-without-gradient">
        <div className="articles-featured__container">
          <div className="section-header fade-up">
            <h2 className="section-title-gradient-hover">{t('articles.featured.title')}</h2>
            <p className="section-subtitle-gradient">
              {t('articles.featured.subtitle')}
            </p>
          </div>

          <div className="articles-featured__grid">
            {featuredArticles.map((article) => (
              <Link 
                key={article.id}
                to={`/articles/${article.slug}`}
                className="article-card-featured fade-up"
              >
                <div className="article-card-featured__image">
                  <img 
                    src={article.image} 
                    alt={typeof article.title === 'string' ? article.title : article.title[language]}
                    className="hero-v2__photo--hover"
                  />
                  <span className="article-card-featured__category">
                    {typeof article.category === 'string' ? article.category : article.category[language]}
                  </span>
                </div>
                <div className="article-card-featured__content">
                  <h3 className="article-card-featured__title">{typeof article.title === 'string' ? article.title : article.title[language]}</h3>
                  <p className="article-card-featured__excerpt">{typeof article.excerpt === 'string' ? article.excerpt : article.excerpt[language]}</p>
                  <div className="article-card-featured__meta">
                    <span className="article-card-featured__date">
                      {formatDate(article.date)}
                    </span>
                    <span className="article-card-featured__divider">•</span>
                    <span className="article-card-featured__time">
                      {article.readTime} {t('articles.readTime')}
                    </span>
                  </div>
                  <span className="article-card-featured__link">
                    {t('articles.readMore')} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section id="all-articles" className="articles-list section-with-gradient">
        <div className="articles-list__container">
          <div className="section-header fade-up">
            <h2 className="section-title-gradient-hover">{t('articles.all.title')}</h2>
            <p className="section-subtitle-gradient">
              {t('articles.all.subtitle')}
            </p>
          </div>

          <div className="articles-list__grid">
            {allArticles.map((article, index) => (
              <Link 
                key={article.id}
                to={`/articles/${article.slug}`}
                className="article-card fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="article-card__image">
                  <img 
                    src={article.image} 
                    alt={typeof article.title === 'string' ? article.title : article.title[language]}
                    className="hero-v2__photo--hover"
                  />
                </div>
                <div className="article-card__content">
                  <div className="article-card__header">
                    <span className="article-card__category">{typeof article.category === 'string' ? article.category : article.category[language]}</span>
                    <span className="article-card__time">{article.readTime} {t('articles.readTime')}</span>
                  </div>
                  <h3 className="article-card__title">{typeof article.title === 'string' ? article.title : article.title[language]}</h3>
                  <p className="article-card__excerpt">{typeof article.excerpt === 'string' ? article.excerpt : article.excerpt[language]}</p>
                  <div className="article-card__footer">
                    <span className="article-card__date">{formatDate(article.date)}</span>
                    <span className="article-card__author">• {article.author}</span>
                  </div>
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

