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
              <a href="https://github.com/mateusribeiro" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/mateusribeiro" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M18.5 0h-17C.675 0 0 .675 0 1.5v17c0 .825.675 1.5 1.5 1.5h17c.825 0 1.5-.675 1.5-1.5v-17c0-.825-.675-1.5-1.5-1.5zM6 17H3V7.5h3V17zM4.5 6.25c-.966 0-1.75-.784-1.75-1.75S3.534 2.75 4.5 2.75s1.75.784 1.75 1.75-.784 1.75-1.75 1.75zM17 17h-3v-4.5c0-1.125-.375-1.875-1.313-1.875-.712 0-1.137.487-1.325.956-.069.169-.088.4-.088.634V17h-3s.038-8.25 0-9h3v1.275c.394-.612 1.1-1.488 2.675-1.488 1.95 0 3.425 1.275 3.425 4.013V17z" />
                </svg>
              </a>
              <a href="mailto:mateus.dspro@gmail.com" aria-label="Email">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                  <rect x="2" y="4" width="16" height="12" rx="2" strokeWidth="1.5" />
                  <path d="M2 7l8 5 8-5" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
              <a href="https://twitter.com/mateusribeiro" target="_blank" rel="noopener noreferrer" aria-label="X">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M15.751 2.5h2.875l-6.281 7.181L19.5 17.5h-5.787l-4.531-5.925L3.844 17.5H.969l6.719-7.681L1.5 2.5h5.937l4.094 5.412L15.751 2.5zm-1.006 13.469h1.594L6.344 4.131H4.644l10.1 11.838z" />
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
                  <a href="https://linkedin.com/in/mateusribeiro" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M18.5 0h-17C.675 0 0 .675 0 1.5v17c0 .825.675 1.5 1.5 1.5h17c.825 0 1.5-.675 1.5-1.5v-17c0-.825-.675-1.5-1.5-1.5zM6 17H3V7.5h3V17zM4.5 6.25c-.966 0-1.75-.784-1.75-1.75S3.534 2.75 4.5 2.75s1.75.784 1.75 1.75-.784 1.75-1.75 1.75zM17 17h-3v-4.5c0-1.125-.375-1.875-1.313-1.875-.712 0-1.137.487-1.325.956-.069.169-.088.4-.088.634V17h-3s.038-8.25 0-9h3v1.275c.394-.612 1.1-1.488 2.675-1.488 1.95 0 3.425 1.275 3.425 4.013V17z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a href="https://twitter.com/mateusribeiro" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M15.751 2.5h2.875l-6.281 7.181L19.5 17.5h-5.787l-4.531-5.925L3.844 17.5H.969l6.719-7.681L1.5 2.5h5.937l4.094 5.412L15.751 2.5zm-1.006 13.469h1.594L6.344 4.131H4.644l10.1 11.838z" />
                    </svg>
                    X
                  </a>
                  <a href="mailto:mateus.dspro@gmail.com" className="contact__social-link">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                      <rect x="2" y="4" width="16" height="12" rx="2" strokeWidth="1.5" />
                      <path d="M2 7l8 5 8-5" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    Email
                  </a>
                  <Link to="/" className="contact__social-link">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                      <path d="M4 7h12M4 12h12M4 17h12" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="10" cy="3" r="1" fill="currentColor" />
                    </svg>
                    Blog
                  </Link>
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
