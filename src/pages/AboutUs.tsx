import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const AboutUs: React.FC = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);

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
    <div className="aboutus-page">
      <Navbar />

      {/* Hero Section */}
      <section className="aboutus-article-hero section-with-gradient">
        <div className="aboutus-article-hero__container fade-up">
          <h1 className="aboutus-article-hero__title">
            Ebla Labs — <span className="gradient">Inteligência</span> é nosso legado
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="aboutus-article section-without-gradient">
        <div className="aboutus-article__container">
          <div className="aboutus-article__content fade-up">
            <p className="aboutus-article__lead">
              Onde a história da inteligência humana encontra o futuro da IA.
            </p>

            <div className="aboutus-article__divider"></div>

            <p className="aboutus-article__text">
              Há mais de <strong>4.500 anos</strong>, na antiga cidade de <strong>Ebla</strong> — localizada onde hoje é o norte da Síria — os escribas registravam comércio, agricultura, diplomacia e decisões reais em milhares de tábuas de argila. Essas tábuas, descobertas por arqueólogos italianos em <strong>1974</strong>, compõem o <strong>primeiro sistema de dados e informação</strong> da história humana.
            </p>

            <blockquote className="aboutus-article__quote fade-up">
              <p>
                "O primeiro sistema documentado de inteligência administrativa — um precursor do que hoje chamamos de ciência de dados."
              </p>
              <cite>— Hans Wellisch, <em>Ebla: The World's Oldest Library</em> (1981)</cite>
            </blockquote>

            <p className="aboutus-article__text">
              O incêndio que destruiu o Palácio G por volta de <strong>2250 a.C.</strong> acidentalmente cozinhou e preservou <strong>17.000 tábuas</strong>, garantindo que esse legado atravessasse milênios. Cada símbolo gravado nelas era um <strong>dado</strong>, e cada combinação desses dados formava <strong>conhecimento útil</strong> — o mesmo princípio que hoje impulsiona a inteligência artificial e o aprendizado de máquina.
            </p>

            <div className="aboutus-article__divider"></div>

            <h2 className="aboutus-article__subtitle fade-up">O que é o Ebla Labs</h2>

            <p className="aboutus-article__text">
              <strong>Ebla Labs</strong> nasceu desse paralelo: o antigo e o moderno, o humano e o digital. Somos um <strong>laboratório de ideias e tecnologia</strong>, criado para explorar como dados, IA e inovação estão moldando o futuro — e o que podemos aprender das civilizações que fizeram o mesmo no passado.
            </p>

            <p className="aboutus-article__text">
              Aqui, conectamos <strong>história, ciência e cultura builder</strong>, traduzindo o complexo em algo prático e inspirador. Publicamos artigos que explicam como dados e IA transformam decisões humanas, análises que unem passado e futuro da inteligência, reflexões sobre ética, propósito e filosofia da IA, e guias práticos para criar soluções com IA e automação — mesmo sem programar.
            </p>

            <p className="aboutus-article__text">
              Também desenvolvemos projetos experimentais — automações, visualizações e aplicações de IA — provando que qualquer pessoa curiosa pode construir algo inteligente.
            </p>

            <div className="aboutus-article__divider"></div>

            <h2 className="aboutus-article__subtitle fade-up">Com quem nos conectamos</h2>

            <p className="aboutus-article__text">
              Nosso público são <strong>pensadores, criadores, analistas, educadores e construtores</strong>. Pessoas que acreditam que a tecnologia é uma extensão da inteligência humana, que a curiosidade é o motor da inovação, que a IA é uma ferramenta de criação — não de substituição — e que a inteligência floresce na colaboração, não na competição.
            </p>

            <div className="aboutus-article__divider"></div>

            <h2 className="aboutus-article__subtitle fade-up">Nossa missão</h2>

            <p className="aboutus-article__text">
              Reconectar o passado e o futuro da inteligência. Inspirar pessoas a usar IA e dados com <strong>propósito, consciência e criatividade</strong> — transformando informação em ação e conhecimento em impacto real.
            </p>

            <h2 className="aboutus-article__subtitle fade-up">Nossa visão</h2>

            <p className="aboutus-article__text">
              Ser um <strong>hub global de conhecimento e criação</strong>, onde história, ciência de dados e IA se encontram para redefinir o que significa ser inteligente na era digital.
            </p>

            <h2 className="aboutus-article__subtitle fade-up">Nossos valores</h2>

            <p className="aboutus-article__text">
              <strong>Curiosidade:</strong> a base de toda descoberta. <strong>Clareza:</strong> traduzir o complexo em algo útil. <strong>Inovação:</strong> aprender do passado para criar o futuro. <strong>Ética:</strong> usar IA e dados com responsabilidade. <strong>Humanidade:</strong> lembrar que toda inteligência começa com uma mente curiosa.
            </p>

            <div className="aboutus-article__divider"></div>

            <h2 className="aboutus-article__subtitle fade-up">Nossa essência</h2>

            <p className="aboutus-article__text">
              <strong>Ebla Labs</strong> é mais do que um site — é um <strong>movimento intelectual e criativo</strong>. Um espaço onde a sabedoria antiga encontra a tecnologia moderna, e onde o conhecimento se transforma em criação.
            </p>

            <p className="aboutus-article__text">
              Aqui, cada artigo, dado ou insight é um convite para reconstruir o legado da inteligência — <strong>de Ebla às redes neurais, da argila ao silício</strong>.
            </p>

            <p className="aboutus-article__closing fade-up">
              <span className="gradient-text">Ebla Labs — Inteligência é nosso legado.</span>
            </p>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="aboutus-article-cta section-with-gradient">
        <div className="aboutus-article-cta__container fade-up">
          <h2 className="aboutus-article-cta__title">Quer saber mais ou conversar conosco?</h2>
          <div className="aboutus-article-cta__contact">
            <p className="aboutus-article-cta__info">
              <a href="mailto:mateus.dspro@gmail.com" className="aboutus-article-cta__link">
                mateus.dspro@gmail.com
              </a>
            </p>
            <p className="aboutus-article-cta__info">
              <a href="/" className="aboutus-article-cta__link">
                EblaData.com
              </a>
            </p>
          </div>
          <Link to="/portfolio" className="btn btn--primary aboutus-article-cta__btn">
            Fale Comigo
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};
