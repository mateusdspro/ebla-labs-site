import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { ReadingProgress } from '../components/ReadingProgress';
import { SocialShare } from '../components/SocialShare';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useLanguage } from '../context/LanguageContext';
import { getArticleBySlug } from '../data/articlesData';

export const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const article = getArticleBySlug(slug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  if (!article.content) {
    return <Navigate to="/articles" replace />;
  }

  const title = typeof article.title === 'string' ? article.title : article.title[language];
  const content = article.content[language];
  const category = typeof article.category === 'string' ? article.category : article.category[language];
  const excerpt = typeof article.excerpt === 'string' ? article.excerpt : article.excerpt[language];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Schema Markup para o artigo
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": excerpt,
    "image": `https://eblalabs.com${article.image}`,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ebla Labs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://eblalabs.com/logo512.png"
      }
    }
  };

  return (
    <div className="article-detail-page">
      <ReadingProgress />
      <SEO
        title={`${title} | Ebla Labs`}
        description={excerpt}
        canonical={`https://eblalabs.com/articles/${article.slug}`}
        type="article"
        image={article.image}
        schema={articleSchema}
      />
      <Navbar />

      {/* Hero do Artigo */}
      <article className="article-detail">
        <header className="article-detail__hero section-with-gradient">
          <div className="article-detail__container">
            <Breadcrumbs 
              items={[
                { label: 'Home', path: '/' },
                { label: 'Articles', path: '/articles' },
                { label: category }
              ]}
            />

            <div className="article-detail__meta">
              <span className="article-detail__category">{category}</span>
              <span className="article-detail__divider">•</span>
              <span className="article-detail__date">{formatDate(article.date)}</span>
              <span className="article-detail__divider">•</span>
              <span className="article-detail__time">{article.readTime} min {language === 'pt' ? 'de leitura' : 'read'}</span>
            </div>

            <h1 className="article-detail__title">{title}</h1>

            <div className="article-detail__author">
              <span>
                {language === 'pt' ? 'Por' : 'By'} <strong>{article.author}</strong>
              </span>
            </div>
          </div>
        </header>

        {/* Imagem de Destaque */}
        <div className="article-detail__featured-image">
          <img src={article.image} alt={title} />
        </div>

        {/* Conteúdo do Artigo */}
        <div className="article-detail__content-wrapper section-without-gradient">
          <div className="article-detail__container article-detail__container--narrow">
            <div 
              className="article-detail__content prose"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Link Externo (GitHub) */}
            {article.externalLink && (
              <div className="article-detail__external-link">
                <a 
                  href={article.externalLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  {language === 'pt' ? '🔗 Ver Código no GitHub' : '🔗 View Code on GitHub'}
                </a>
              </div>
            )}

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="article-detail__tags">
                <h3>{language === 'pt' ? 'Tags' : 'Tags'}</h3>
                <div className="article-detail__tags-list">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="article-detail__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Social Share */}
            <div className="article-detail__share">
              <h3>{language === 'pt' ? 'Compartilhar' : 'Share'}</h3>
              <SocialShare 
                url={`https://eblalabs.com/articles/${article.slug}`}
                title={title}
              />
            </div>

            {/* Voltar para Artigos */}
            <div className="article-detail__back">
              <Link to="/articles" className="btn-secondary">
                ← {language === 'pt' ? 'Voltar para Artigos' : 'Back to Articles'}
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

