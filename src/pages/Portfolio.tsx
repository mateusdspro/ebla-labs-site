import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();

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

  const projectsData = [
    {
      title: t('project_1_title'),
      subtitle: t('project_1_subtitle'),
      problem: t('project_1_problem'),
      solution: t('project_1_solution'),
      impact: t('project_1_impact'),
      tags: ['Python', 'TensorFlow', 'SQL', 'FastAPI', 'Docker'],
      github: 'https://github.com/mateusribeiro/recommendation-system',
    },
    {
      title: t('project_2_title'),
      subtitle: t('project_2_subtitle'),
      problem: t('project_2_problem'),
      solution: t('project_2_solution'),
      impact: t('project_2_impact'),
      tags: ['Python', 'scikit-learn', 'Power BI', 'Azure ML', 'SQL'],
      github: 'https://github.com/mateusribeiro/predictive-maintenance',
    },
    {
      title: t('project_3_title'),
      subtitle: t('project_3_subtitle'),
      problem: t('project_3_problem'),
      solution: t('project_3_solution'),
      impact: t('project_3_impact'),
      tags: ['Python', 'Airflow', 'dbt', 'Snowflake', 'Looker Studio'],
      github: 'https://github.com/mateusribeiro/data-automation',
    },
    {
      title: t('project_4_title'),
      subtitle: t('project_4_subtitle'),
      problem: t('project_4_problem'),
      solution: t('project_4_solution'),
      impact: t('project_4_impact'),
      tags: ['Generative AI', 'RAG', 'OpenAI', 'Pinecone', 'Next.js'],
      github: 'https://github.com/mateusribeiro/genai-assistant',
    },
    {
      title: t('project_5_title'),
      subtitle: t('project_5_subtitle'),
      problem: t('project_5_problem'),
      solution: t('project_5_solution'),
      impact: t('project_5_impact'),
      tags: ['Python', 'XGBoost', 'Prophet', 'Pandas', 'Power BI'],
      github: 'https://github.com/mateusribeiro/revenue-forecasting',
    },
    {
      title: t('project_6_title'),
      subtitle: t('project_6_subtitle'),
      problem: t('project_6_problem'),
      solution: t('project_6_solution'),
      impact: t('project_6_impact'),
      tags: ['SQL', 'dbt', 'Python', 'Scoring', 'Dashboard'],
      github: 'https://github.com/mateusribeiro/customer-360',
    },
  ];

  return (
    <div className="portfolio">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="hero-v2 section-with-gradient">
        <div className="hero-v2__container">
          <div className="hero-v2__content fade-up">
            <p className="hero-v2__subtitle">
              <span className="gradient">{t('hero.subtitle')}</span>
            </p>
            <h1 className="hero-v2__title">
              {t('hero.title')} <span className="mono gradient">{t('hero.name')}</span>
            </h1>
            <p className="hero-v2__description">{t('hero.description')}</p>

            <div className="hero-v2__actions">
              <a href="/cv.pdf" download className="btn btn--primary btn--equal">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor">
                  <path d="M15 11v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4M9 12V3M9 12L6 9M9 12l3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t('hero.downloadCV')}
              </a>
              <a href="#projects" className="btn btn--secondary btn--equal">
                {t('hero.viewProjects')}
              </a>
            </div>

            <div className="hero-v2__social">
              <a href="https://www.linkedin.com/in/mateus-ribeiro-197043192/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M18.5 0h-17C.675 0 0 .675 0 1.5v17c0 .825.675 1.5 1.5 1.5h17c.825 0 1.5-.675 1.5-1.5v-17c0-.825-.675-1.5-1.5-1.5zM6 17H3V7.5h3V17zM4.5 6.25c-.966 0-1.75-.784-1.75-1.75S3.534 2.75 4.5 2.75s1.75.784 1.75 1.75-.784 1.75-1.75 1.75zM17 17h-3v-4.5c0-1.125-.375-1.875-1.313-1.875-.712 0-1.137.487-1.325.956-.069.169-.088.4-.088.634V17h-3s.038-8.25 0-9h3v1.275c.394-.612 1.1-1.488 2.675-1.488 1.95 0 3.425 1.275 3.425 4.013V17z" />
                </svg>
              </a>
              <a href="https://x.com/eblalabs" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M15.751 2.5h2.875l-6.281 7.181L19.5 17.5h-5.787l-4.531-5.925L3.844 17.5H.969l6.719-7.681L1.5 2.5h5.937l4.094 5.412L15.751 2.5zm-1.006 13.469h1.594L6.344 4.131H4.644l10.1 11.838z" />
                </svg>
              </a>
              <a href="https://github.com/mateusdspro" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="mailto:mateus.dspro@gmail.com" aria-label="Email">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                  <rect x="2" y="4" width="16" height="12" rx="2" strokeWidth="1.5" />
                  <path d="M2 7l8 5 8-5" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
              <Link to="/" aria-label="Blog">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                  <path d="M6 4h8M6 8h8M6 12h8M6 16h4" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </div>

          </div>

          <div className="hero-v2__visual fade-up">
            <div className="hero-v2__photo-wrapper">
              <img
                src="/images/foto.perfil.mateus.semfundo.png"
                alt="Mateus Ribeiro"
                className="hero-v2__photo hero-v2__photo--hover"
              />
            </div>
          </div>
        </div>
        
        <div className="hero-v2__scroll-wrapper">
          <a href="#about" className="hero-v2__scroll-link">
            <p className="hero-v2__scroll">{t('hero.scrollText')}</p>
            <svg className="hero-v2__scroll-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5v14M12 19l-5-5M12 19l5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section-without-gradient">
        <div className="about__container">
          <div className="about__visual fade-up">
            <div className="about__image-wrapper">
              <div className="about__image-ring"></div>
              <img src="/images/perfil2.png" alt="Mateus Ribeiro" className="about__image" />
            </div>
          </div>

          <div className="about__content fade-up">
            <h2 className="about__title section-title-gradient-hover">{t('about.title')}</h2>
            <p className="about__subtitle">{t('about.subtitle')}</p>
            <div className="about__text">
              <p dangerouslySetInnerHTML={{ __html: t('about.p1').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.p2').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.p3').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills section-with-gradient">
        <div className="skills__container">
          <h2 className="skills__title section-title-gradient-hover fade-up">{t('skills.title')}</h2>
          <p className="skills__subtitle fade-up">{t('skills.subtitle')}</p>

          <div className="skills__grid">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
              <div key={num} className="skill-card fade-up">
                <h3 className="skill-card__title">{t(`skill_${num}_title`)}</h3>
                <p className="skill-card__desc">{t(`skill_${num}_desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects section-without-gradient">
        <div className="projects__container">
          <h2 className="projects__title section-title-gradient-hover fade-up">{t('projects.title')}</h2>
          <p className="projects__subtitle fade-up">{t('projects.subtitle')}</p>

          <div className="projects__carousel">
            <button className="projects__nav projects__nav--prev" aria-label="Previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="projects__track">
              {projectsData.map((project, index) => (
                <div key={index} className="project-card fade-up">
                  <div className="project-card__header">
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__subtitle">{project.subtitle}</p>
                  </div>

                  <div className="project-card__body">
                    <div className="project-card__item">
                      <span className="project-card__label project-card__label--problem">Problem</span>
                      <p className="project-card__text">{project.problem}</p>
                    </div>
                    <div className="project-card__item">
                      <span className="project-card__label project-card__label--solution">Solution</span>
                      <p className="project-card__text">{project.solution}</p>
                    </div>
                    <div className="project-card__item">
                      <span className="project-card__label project-card__label--impact">Impact</span>
                      <p className="project-card__text">{project.impact}</p>
                    </div>
                  </div>

                  <div className="project-card__footer">
                    <div className="project-card__tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="project-card__tag">{tag}</span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                    >
                      {t('projects.code')}
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" className="github-icon">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <button className="projects__nav projects__nav--next" aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="blog-preview section-with-gradient">
        <div className="blog-preview__container">
          <div className="blog-preview__header">
            <Link to="/" className="blog-preview__title-link">
              <h2 className="blog-preview__title section-title-gradient-hover fade-up">
                {t('blog_preview.title')}
              </h2>
            </Link>
          </div>
          <p className="blog-preview__subtitle fade-up">{t('blog_preview.subtitle')}</p>

          <div className="blog-preview__carousel">
            <button className="blog-preview__nav blog-preview__nav--prev" aria-label="Previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="blog-preview__track">
              {[1, 2, 3].map((num) => (
                <Link to="/" key={num} className="blog-preview-card fade-up">
                  <div className="blog-preview-card__icon">{t(`blog_preview_${num}_icon`)}</div>
                  <h3 className="blog-preview-card__title">{t(`blog_preview_${num}_title`)}</h3>
                  <div className="blog-preview-card__content">
                    <p dangerouslySetInnerHTML={{ __html: t(`blog_preview_${num}_p1`) }} />
                    <p dangerouslySetInnerHTML={{ __html: t(`blog_preview_${num}_p2`) }} />
                  </div>
                  <span className="blog-preview-card__link">{t('blog_preview.read_more')} →</span>
                </Link>
              ))}
            </div>

            <button className="blog-preview__nav blog-preview__nav--next" aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact section-without-gradient">
        <div className="contact__container">
          <h2 className="contact__title section-title-gradient-hover fade-up">{t('contact.title')}</h2>
          <p className="contact__subtitle fade-up">{t('contact.subtitle')}</p>

          <div className="contact__content">
            <div className="contact__info fade-up">
              <div className="contact__info-item">
                <h3>{t('contact.email')}</h3>
                <a href="mailto:mateus.dspro@gmail.com">mateus.dspro@gmail.com</a>
              </div>

              <div className="contact__info-item">
                <h3>{t('contact.connect')}</h3>
                <div className="contact__social">
                  <a href="https://www.linkedin.com/in/mateus-ribeiro-197043192/" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://x.com/eblalabs" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="X (Twitter)">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/mateusdspro" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://wa.me/61406846127" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="WhatsApp">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com/eblalabs" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://youtube.com/@eblalabs" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="YouTube">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a href="mailto:mateus.dspro@gmail.com" className="contact__social-link" aria-label="Email">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 7l10 7 10-7" strokeLinecap="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <form className="contact__form fade-up">
              <div className="form-group">
                <label htmlFor="name">{t('contact.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t('contact.form.namePlaceholder')}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={t('contact.form.messagePlaceholder')}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn--primary">
                {t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
