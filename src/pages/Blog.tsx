import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { getFeaturedArticles, getAllArticles } from '../data/articlesData';

export const Blog: React.FC = () => {
  const { t, language } = useLanguage();
  const featuredArticles = getFeaturedArticles();
  const latestArticles = getAllArticles().slice(0, 3); // 3 mais recentes

  // Schema Markup for Blog Homepage
  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://eblalabs.com/#website",
        "url": "https://eblalabs.com/",
        "name": "Ebla Labs",
        "description": "AI, Data Science, and Machine Learning insights and solutions",
        "publisher": {
          "@id": "https://eblalabs.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Blog",
        "@id": "https://eblalabs.com/#blog",
        "url": "https://eblalabs.com/",
        "name": "Ebla Labs Blog",
        "description": "Articles and insights about AI, machine learning, data science, and technology",
        "publisher": {
          "@id": "https://eblalabs.com/#organization"
        },
        "blogPost": [
          {
            "@type": "BlogPosting",
            "headline": "How RAG is Redefining AI Systems",
            "url": "https://eblalabs.com/articles/rag-systems-redefining-ai",
            "datePublished": "2024-11-12",
            "author": {
              "@type": "Person",
              "name": "Mateus Ribeiro"
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://eblalabs.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://eblalabs.com/"
          }
        ]
      }
    ]
  };

  useEffect(() => {
    // Intersection Observer for fade-up animations
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
    <div className="blog-page">
      <SEO
        title="Ebla Labs - AI, Data Science & Machine Learning Insights"
        description="How can AI transform your business? Discover expert insights on machine learning, data science, MLOps, and generative AI. Learn from real-world case studies and practical solutions."
        canonical="https://eblalabs.com/"
        type="website"
        image="/images/imagem.blog1.png"
        schema={blogSchema}
      />
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="hero-v2 section-with-gradient">
        <div className="hero-v2__container">
          <div className="hero-v2__content fade-up">
            <h1 className="hero-v2__title">
              <span className="mono gradient">{t('blogpage.hero.title')}</span>
            </h1>
            <p className="hero-v2__subtitle hero-v2__subtitle--large">{t('blogpage.hero.subtitle')}</p>
            <p className="hero-v2__description">{t('blogpage.hero.description')}</p>
          </div>

          <div className="hero-v2__visual fade-up">
            <img
              src="/images/imagem.blog1.png"
              alt="Ebla Labs"
              className="hero-v2__photo hero-v2__photo--blog hero-v2__photo--hover"
            />
          </div>
        </div>
        
        <div className="hero-v2__scroll-wrapper">
          <a href="#ebla-legacy" className="hero-v2__scroll-link">
            <p className="hero-v2__scroll">{t('hero.scrollText')}</p>
            <svg className="hero-v2__scroll-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5v14M12 19l-5-5M12 19l5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* Ebla Legacy Section */}
      <section id="ebla-legacy" className="ebla-legacy section-without-gradient">
        <div className="ebla-legacy__container">
          <div className="ebla-legacy__grid">
            <div className="ebla-legacy__visual fade-up">
              <img
                src="/images/Logo simples circular esmaltaria preto.png"
                alt="Ebla Logo"
                className="ebla-legacy__logo hero-v2__photo--hover"
              />
            </div>

            <div className="ebla-legacy__text fade-up">
              <h2 className="section-title-gradient-hover">{t('blogpage.legacy.title')}</h2>
              <div className="ebla-legacy__content">
                <p dangerouslySetInnerHTML={{ __html: t('blogpage.legacy.p1').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                <p dangerouslySetInnerHTML={{ __html: t('blogpage.legacy.p2').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                <p dangerouslySetInnerHTML={{ __html: t('blogpage.legacy.p3').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                <p dangerouslySetInnerHTML={{ __html: t('blogpage.legacy.p4').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="ebla-stats section-with-gradient">
        <div className="ebla-stats__container">
          <div className="stats-header fade-up">
            <h2 className="stats-title section-title-gradient-hover">{t('blogpage.stats.title')}</h2>
            <p className="stats-subtitle section-subtitle-gradient">{t('blogpage.stats.subtitle')}</p>
          </div>

          <div className="ebla-stats__grid">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="stat-item fade-up">
                <div className="stat-number">{t(`blogpage.stats.stat${num}.number`)}</div>
                <div className="stat-label">{t(`blogpage.stats.stat${num}.label`)}</div>
                <div className="stat-source">{t(`blogpage.stats.stat${num}.source`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section id="featured-articles" className="blog-articles section-without-gradient">
        <div className="blog-articles__container">
          <div className="section-header fade-up">
            <h2 className="section-title-gradient-hover">{t('blogpage.featured.title')}</h2>
            <p className="section-subtitle-gradient">{t('blogpage.featured.subtitle')}</p>
          </div>

          <div className="blog-articles__grid">
            {featuredArticles.slice(0, 3).map((article) => (
              <article key={article.id} className="blog-card fade-up">
                <div className="blog-card__image">
                  <img 
                    src={article.image} 
                    alt={typeof article.title === 'string' ? article.title : article.title[language]} 
                    className="hero-v2__photo--hover" 
                  />
                  <span className="blog-card__category">
                    {typeof article.category === 'string' ? article.category : article.category[language]}
                  </span>
                </div>
                <div className="blog-card__content">
                  <h3 className="blog-card__title">
                    {typeof article.title === 'string' ? article.title : article.title[language]}
                  </h3>
                  <p className="blog-card__excerpt">
                    {(typeof article.excerpt === 'string' ? article.excerpt : article.excerpt[language]).substring(0, 150)}...
                  </p>
                  <Link to={`/articles/${article.slug}`} className="blog-card__link">
                    {t('blog_preview.read_more')} →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="section-header fade-up" style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link to="/articles" className="btn btn--primary">
              Ver Todos os Artigos →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section id="latest-articles" className="blog-latest section-with-gradient">
        <div className="blog-latest__container">
          <div className="section-header fade-up">
            <h2 className="section-title-gradient-hover">{t('blogpage.latest.title')}</h2>
            <p className="section-subtitle-gradient">{t('blogpage.latest.subtitle')}</p>
          </div>

          <div className="blog-latest__grid">
            {latestArticles.map((article) => (
              <article key={article.id} className="latest-card fade-up">
                <div className="latest-card__header">
                  <span className="latest-card__date">
                    {new Date(article.date).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="latest-card__category">
                    {typeof article.category === 'string' ? article.category : article.category[language]}
                  </span>
                </div>
                <h3 className="latest-card__title">
                  {typeof article.title === 'string' ? article.title : article.title[language]}
                </h3>
                <p className="latest-card__excerpt">
                  {(typeof article.excerpt === 'string' ? article.excerpt : article.excerpt[language]).substring(0, 120)}...
                </p>
                <div className="latest-card__footer">
                  <div className="latest-card__meta">
                    <span className="latest-card__author">{article.author}</span>
                    <span className="latest-card__reading-time">{article.readTime} min {language === 'pt' ? 'de leitura' : 'read'}</span>
                  </div>
                  <Link to={`/articles/${article.slug}`} className="latest-card__link">
                    {t('blog_preview.read_more')} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section id="latest-news" className="blog-news section-with-gradient">
        <div className="blog-news__container">
          <div className="section-header fade-up">
            <h2 className="section-title-gradient-hover">{t('blogpage.news.title')}</h2>
            <p className="section-subtitle-gradient">{t('blogpage.news.subtitle')}</p>
          </div>

          <div className="blog-news__grid">
            {[1, 2, 3].map((num) => (
              <article key={num} className="news-card fade-up">
                <div className="news-card__icon">{t(`blog_preview_${num}_icon`)}</div>
                <h3 className="news-card__title">{t(`blog_preview_${num}_title`)}</h3>
                <p className="news-card__excerpt">
                  {t(`blog_preview_${num}_p1`).substring(0, 120)}...
                </p>
                <Link to="/" className="news-card__link">
                  {t('blog_preview.read_more')} →
                </Link>
              </article>
            ))}
          </div>

          <div className="blog-news__cta fade-up">
            <Link to="/" className="btn btn--secondary">
              {t('blogpage.news.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="newsletter section-without-gradient">
        <div className="newsletter__container">
          <div className="newsletter__content fade-up">
            <h2 className="newsletter__title">
              <span className="gradient">{t('blogpage.newsletter.title')}</span>
            </h2>
            <p className="newsletter__subtitle">{t('blogpage.newsletter.subtitle')}</p>

            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              className="newsletter__form"
            >
              {/* Web3Forms Access Key - Newsletter */}
              <input type="hidden" name="access_key" value="7b6c4f3f-21f4-4376-a322-c8edfd26d341" />
              <input type="hidden" name="subject" value="Nova inscrição na Newsletter - Ebla Labs" />
              <input type="hidden" name="from_name" value="Ebla Labs Website" />
              <input type="hidden" name="redirect" value="https://ebla-labs-site.vercel.app/thank-you-newsletter" />
              
              <div className="newsletter__form-row">
                <div className="form-group">
                  <label htmlFor="newsletter-name">{t('blogpage.newsletter.name')}</label>
                  <input
                    type="text"
                    id="newsletter-name"
                    name="name"
                    placeholder={t('blogpage.newsletter.namePlaceholder')}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="newsletter-email">{t('blogpage.newsletter.email')}</label>
                  <input
                    type="email"
                    id="newsletter-email"
                    name="email"
                    placeholder={t('blogpage.newsletter.emailPlaceholder')}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn--primary newsletter__btn">
                {t('blogpage.newsletter.button')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="blog-cta-v2 section-with-gradient">
        <div className="blog-cta-v2__container fade-up">
          <h2 className="blog-cta-v2__title">
            <span>{t('blogpage.cta.title')}</span>{' '}
            <span className="gradient">{t('blogpage.cta.titleGradient')}</span>
          </h2>
          <p className="blog-cta-v2__text">{t('blogpage.cta.text')}</p>
          <div className="blog-cta-v2__actions">
            <Link to="/portfolio" className="btn btn--primary">
              {t('blogpage.cta.btn.contact')}
            </Link>
            <Link to="/portfolio#projects" className="btn btn--secondary">
              {t('blogpage.cta.btn.projects')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};