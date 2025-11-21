import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'pt';

type TranslationKey = string;
type TranslationValue = string;
type Translations = Record<TranslationKey, TranslationValue>;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.aboutUs': 'About Us',
    'nav.articles': 'Articles',
    'nav.news': 'News',
    'nav.subscribe': 'Subscribe',
    'nav.search': 'Search articles...',

    // Hero Section
    'hero.subtitle': 'Data Scientist & AI Builder',
    'hero.title': 'Hello, I\'m',
    'hero.name': 'MATEUS RIBEIRO',
    'hero.description': 'I build AI-driven data solutions that transform raw information into intelligent decisions. Combining data analytics, automation, and generative AI, I create scalable, high-impact systems for real-world business challenges.',
    'hero.downloadCV': 'Download CV',
    'hero.viewProjects': 'View Projects',
    'hero.scrollText': 'Scroll to Discover',

    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'From analyzing the past to building the future with AI',
    'about.p1': 'My journey into **Data Science** began in the **Humanities**, studying **History** — where I learned to analyze complex contexts, connect information, and identify hidden patterns amidst chaos. This curiosity to understand how data tells stories naturally led me to the world of technology.',
    'about.p2': 'Over time, I expanded my education to **Information Technology** and **Artificial Intelligence**, applying analytical thinking from History to create intelligent solutions. Today, I combine **data, automation, and AI** — including **generative AI** — to transform information into applied intelligence, helping people and businesses make more assertive decisions.',
    'about.p3': 'As a **Data Scientist and AI Builder**, my focus is to build solutions that truly solve problems: from **predictive models** and **recommendation systems** to **intelligent workflows** and **data products** that generate real value. My approach is always centered on understanding context, experimenting fast, and delivering results that connect **analysis, technology, and impact**.',

    // Skills Section
    'skills.title': 'Skills',
    'skills.subtitle': 'Building intelligent solutions with modern tools',
    'skill_1_title': '🤖 Data Science and Machine Learning',
    'skill_1_desc': 'Developing predictive models and AI solutions applied to real business with focus on measurable impact.',
    'skill_2_title': '⚙️ Machine Learning Engineering (MLOps)',
    'skill_2_desc': 'Creating scalable and automated pipelines — from training to model deployment in production.',
    'skill_3_title': '☁️ Cloud and Data Infrastructure',
    'skill_3_desc': 'Building and managing solutions on AWS, Azure, and GCP to store and process large volumes of data.',
    'skill_4_title': '🐍 Python for Data Science',
    'skill_4_desc': 'Hands-on experience with Pandas, NumPy, scikit-learn, TensorFlow, and analytical task automation.',
    'skill_5_title': '💾 SQL and Data Modeling',
    'skill_5_desc': 'Optimized queries, relational database design, and efficient large-scale data transformation.',
    'skill_6_title': '📊 Power BI and Data Visualization',
    'skill_6_desc': 'Creating interactive dashboards and visual storytelling to transform data into strategic decisions.',
    'skill_7_title': '🔮 Statistical Modeling and Forecasting',
    'skill_7_desc': 'Applying statistics, time-series analysis, and predictive algorithms to forecast trends and patterns.',
    'skill_8_title': '🔄 ETL and Data Pipelines',
    'skill_8_desc': 'Developing automated workflows for data extraction, transformation, and loading with quality and performance.',
    'skill_9_title': '✨ Generative AI and LLMs',
    'skill_9_desc': 'Exploring practical applications with RAG, embeddings, and prompt engineering for intelligent automation.',
    'skill_10_title': '📈 Business Intelligence and Data Strategy',
    'skill_10_desc': 'Translating metrics and KPIs into actionable insights that drive profit, efficiency, and innovation.',
    'skill_11_title': '🧩 Data Engineering and Automation',
    'skill_11_desc': 'Integrating data from multiple sources, optimizing pipelines, and ensuring scalability of analytical systems.',
    'skill_12_title': '💡 Communication and Problem Solving',
    'skill_12_desc': 'Transforming complex analyses into clear solutions, collaborating with technical and business teams.',

    // Projects Section
    'projects.title': 'Projects',
    'projects.subtitle': 'Scroll to explore',
    'project_1_title': '🎯 AI-Powered Recommendation System',
    'project_1_subtitle': 'Built a recommendation engine that increased engagement',
    'project_1_problem': 'Low engagement due to irrelevant content suggestions.',
    'project_1_solution': 'Hybrid model (collaborative + content-based + neural nets).',
    'project_1_impact': '↑ engagement 40%, ↓ churn 25%, ↑ conversion 30%.',
    'project_2_title': '⚙️ Predictive Maintenance Dashboard',
    'project_2_subtitle': 'Real-time forecasting to prevent equipment failures',
    'project_2_problem': 'Costly downtime due to unexpected failures.',
    'project_2_solution': 'LSTM + Isolation Forests predicting 48h in advance.',
    'project_2_impact': '↓ unplanned downtime 60%, ~$500K saved/year.',
    'project_3_title': '🔄 Intelligent Data Automation Suite',
    'project_3_subtitle': 'ETL automation reducing manual work by 80%',
    'project_3_problem': 'Team spending 20h+/week on manual ETL and QC.',
    'project_3_solution': 'Self-healing pipelines with auto validation and recovery.',
    'project_3_impact': 'Data quality 85% → 99.5%, 80% time freed.',
    'project_4_title': '✨ GenAI Knowledge Assistant',
    'project_4_subtitle': 'RAG chat with verified sources',
    'project_4_problem': 'Hard to find trusted internal knowledge.',
    'project_4_solution': 'RAG with embeddings, citations and access control.',
    'project_4_impact': 'Search time ↓70%, answer accuracy ↑.',
    'project_5_title': '📈 Revenue Forecasting',
    'project_5_subtitle': 'Time-series forecasting for finance',
    'project_5_problem': 'Manual and unreliable revenue forecasts.',
    'project_5_solution': 'XGBoost/Prophet with seasonal + campaign features.',
    'project_5_impact': 'MAPE −32%, better planning.',
    'project_6_title': '👥 Customer 360 & Churn',
    'project_6_subtitle': 'Unified profile + churn risk scoring',
    'project_6_problem': 'Fragmented customer view and churn increase.',
    'project_6_solution': 'Data unification + churn model + retention triggers.',
    'project_6_impact': '↓ churn 18%, ↑ LTV 12%.',
    'projects.code': 'Code',

    // Blog Preview Section
    'blog_preview.title': 'Blog',
    'blog_preview.subtitle': 'Exploring AI, Data Science, and Innovation',
    'blog_preview_1_icon': '🤖',
    'blog_preview_1_title': 'How RAG is Redefining AI Systems',
    'blog_preview_1_p1': 'Retrieval-Augmented Generation (RAG) is revolutionizing how AI systems access and use information. Unlike traditional models that rely solely on training data, RAG combines real-time retrieval with language generation, enabling more accurate, contextual, and up-to-date responses.',
    'blog_preview_1_p2': 'This architecture is particularly powerful for enterprise applications where accuracy and verifiability are critical. By grounding responses in retrieved documents, RAG systems can cite sources, reduce hallucinations, and adapt to new information without retraining.',
    'blog_preview_1_p3': 'From customer support chatbots to internal knowledge bases, RAG is becoming the standard for building trustworthy AI applications. In this article, I explore the architecture, implementation strategies, and real-world use cases that demonstrate its transformative potential.',
    'blog_preview_2_icon': '📊',
    'blog_preview_2_title': 'Building Production-Ready ML Pipelines',
    'blog_preview_2_p1': 'Moving from experimental notebooks to production ML systems requires more than just model training. It demands robust pipelines that handle data validation, versioning, monitoring, and automated retraining—all while maintaining reliability at scale.',
    'blog_preview_2_p2': 'Modern ML pipelines combine orchestration tools like Airflow or Prefect with MLOps platforms to create end-to-end workflows. These systems automatically detect data drift, trigger retraining when performance degrades, and deploy new models with zero downtime.',
    'blog_preview_2_p3': 'In this deep dive, I share lessons learned from building production ML systems, including architecture patterns, monitoring strategies, and common pitfalls to avoid when scaling from prototype to production.',
    'blog_preview_3_icon': '💡',
    'blog_preview_3_title': 'Data Strategy for Business Impact',
    'blog_preview_3_p1': 'Most organizations sit on vast amounts of data but struggle to extract meaningful value. The difference between data-rich and data-driven companies isn\'t technology—it\'s strategy. Successful data initiatives start with clear business objectives and work backward to the technical implementation.',
    'blog_preview_3_p2': 'A strong data strategy aligns analytics investments with business outcomes, establishes governance frameworks, and builds organizational capability. It answers critical questions: What data do we need? How will we use it? Who needs access? What metrics define success?',
    'blog_preview_3_p3': 'This article explores how to build a data strategy that delivers measurable business impact, from establishing data literacy across teams to implementing metrics that matter. Learn how to transform data from a cost center into a strategic asset.',
    'blog_preview.read_more': 'Read more',

    // Articles Page
    'articles.hero.title': 'EBLA ARTICLES',
    'articles.hero.subtitle': 'Exploring ideas, data, and intelligence.',
    'articles.hero.description': 'A curated collection of analyses, essays, and reflections on AI, data science, and innovation — connecting technology, humanity, and knowledge.',
    'articles.hero.scroll': 'Scroll to explore',
    'articles.featured.title': 'Featured Articles',
    'articles.featured.subtitle': 'Deep dives into the most relevant topics',
    'articles.all.title': 'All Articles',
    'articles.all.subtitle': 'Explore our complete collection, from newest to oldest',
    'articles.readMore': 'Read full article',
    'articles.readTime': 'min read',

    // News Page
    'news.hero.title': 'EBLA NEWS',
    'news.hero.subtitle': 'Latest insights and updates from the world of AI and technology.',
    'news.hero.description': 'Stay updated with the latest news, breakthroughs, and perspectives shaping the future of data, intelligence, and digital transformation.',
    'news.hero.scroll': 'Scroll to explore',
    'news.featured.title': 'Featured News',
    'news.featured.subtitle': 'The most important stories this week',
    'news.all.title': 'All News',
    'news.all.subtitle': 'Complete timeline of updates',
    'news.readMore': 'Read more',
    'news.readTime': 'min read',

    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Let\'s build something amazing together',
    'contact.email': 'Email',
    'contact.connect': 'Connect',
    'contact.form.name': 'Name',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Describe your project...',
    'contact.form.send': 'Send Message',

    // Footer
    'footer.rights': '© 2025 Mateus Ribeiro — Data Scientist & AI Builder',
    'footer.blog': '© 2025 Ebla Labs — AI, Data & Intelligent Insights',

    // Blog Page
    'blogpage.hero.title': 'EBLA LABS',
    'blogpage.hero.subtitle': 'Intelligence is our legacy',
    'blogpage.hero.description': 'Ebla Labs is a space dedicated to exploring the impact of intelligence and technology on transforming the world. Here, you\'ll find articles about data science, AI, blockchain, Web 3.0, and builder culture — with analyses connecting history, innovation, and practical creation. Our purpose is to show how ideas, tools, and data can generate intelligent solutions and inspire new digital creators. More than a blog, Ebla Labs is a knowledge laboratory for those who want to understand, learn, and build the future.',
    'blogpage.hero.exploreArticles': 'Explore Articles',
    'blogpage.hero.subscribe': 'Subscribe to Newsletter',

    // Blog Legacy Section
    'blogpage.legacy.overline': 'Our Foundation',
    'blogpage.legacy.title': 'Ground Zero of Data Analysis: Between Clay and Algorithm',
    'blogpage.legacy.p1': 'The name **Ebla** comes from the ancient city in northern Syria, recognized by archaeologists as **the first data and information management center in human history**. Between 2500 and 2250 BC, the scribes of Ebla recorded information about trade, agriculture, taxes, and diplomacy on **clay tablets**.',
    'blogpage.legacy.p2': 'These records were organized and analyzed to guide the decisions of kings — a process that researcher **Hans Wellisch**, in *"Ebla: The World\'s Oldest Library"* (1981), described as **the first documented form of administrative intelligence**.',
    'blogpage.legacy.p3': 'During excavations led by **Paolo Matthiae** from the University of Rome La Sapienza in 1974, more than **17,000 clay tablets** were discovered inside Palace G. The palace was destroyed around 2250 BC, and the fire that consumed it accidentally baked and preserved the tablets for over four millennia.',
    'blogpage.legacy.p4': 'Inspired by this real and remarkable legacy, **Ebla Labs** was created to connect history, technology, and modern intelligence, reinterpreting the spirit of Ebla in the digital age — where **AI, data, and creativity** shape the next frontier of knowledge and decision-making.',

    // Blog Stats Section
    'blogpage.stats.overline': 'Data-Driven Insights',
    'blogpage.stats.title': 'Real Business Impact of Data',
    'blogpage.stats.subtitle': 'Where data and intelligence transform into results.',
    'blogpage.stats.stat1.number': '88%',
    'blogpage.stats.stat1.label': 'Companies already use AI in at least one function.',
    'blogpage.stats.stat1.source': 'McKinsey Global Survey, 2024',
    'blogpage.stats.stat2.number': '76%',
    'blogpage.stats.stat2.label': 'Organizations treat AI as a strategic priority.',
    'blogpage.stats.stat2.source': 'Deloitte State of AI Report, 2024',
    'blogpage.stats.stat3.number': '60%',
    'blogpage.stats.stat3.label': 'Businesses are redesigning their data models.',
    'blogpage.stats.stat3.source': 'Gartner Data & Analytics Survey, 2024',
    'blogpage.stats.stat4.number': '84%',
    'blogpage.stats.stat4.label': 'Leaders have a formal strategy to extract value from data.',
    'blogpage.stats.stat4.source': 'NewVantage Partners, 2024',
    'blogpage.stats.stat5.number': '39%',
    'blogpage.stats.stat5.label': 'Companies report direct impact on profit with AI and analytics.',
    'blogpage.stats.stat5.source': 'MIT Sloan + BCG, 2024',
    'blogpage.stats.stat6.number': 'US$ 94.4B',
    'blogpage.stats.stat6.label': 'Estimated size of the global data analytics market in 2025.',
    'blogpage.stats.stat6.source': 'Statista Market Forecast, 2024',

    // Blog Featured Articles
    'blogpage.featured.overline': 'Deep Dives',
    'blogpage.featured.title': 'Featured Articles',
    'blogpage.featured.subtitle': 'Deep Dives Into AI & Data',

    // Blog Latest Articles
    'blogpage.latest.overline': 'Stay Updated',
    'blogpage.latest.title': 'Latest Articles',
    'blogpage.latest.subtitle': 'Discover our latest insights and analyses',
    'blogpage.latest.viewAll': 'View All Posts',

    // Latest Articles Content
    'blogpage.latest.article4.date': 'Nov 8, 2024',
    'blogpage.latest.article4.category': 'Machine Learning',
    'blogpage.latest.article4.title': 'Building Scalable ML Pipelines with MLOps',
    'blogpage.latest.article4.excerpt': 'Learn how to design and implement production-ready machine learning pipelines using modern MLOps practices and tools.',
    'blogpage.latest.article4.author': 'Mateus Ribeiro',
    'blogpage.latest.article4.readTime': '8 min read',

    'blogpage.latest.article5.date': 'Nov 5, 2024',
    'blogpage.latest.article5.category': 'Data Engineering',
    'blogpage.latest.article5.title': 'Modern Data Stack: From ETL to ELT',
    'blogpage.latest.article5.excerpt': 'Explore the evolution of data processing architectures and how the modern data stack is transforming analytics.',
    'blogpage.latest.article5.author': 'Mateus Ribeiro',
    'blogpage.latest.article5.readTime': '6 min read',

    'blogpage.latest.article6.date': 'Nov 2, 2024',
    'blogpage.latest.article6.category': 'Generative AI',
    'blogpage.latest.article6.title': 'RAG Systems: Enhancing LLMs with Context',
    'blogpage.latest.article6.excerpt': 'Discover how Retrieval-Augmented Generation is revolutionizing the way we build intelligent applications with LLMs.',
    'blogpage.latest.article6.author': 'Mateus Ribeiro',
    'blogpage.latest.article6.readTime': '10 min read',

    'blogpage.latest.article7.date': 'Oct 28, 2024',
    'blogpage.latest.article7.category': 'Analytics',
    'blogpage.latest.article7.title': 'Data Storytelling: From Numbers to Insights',
    'blogpage.latest.article7.excerpt': 'Master the art of transforming complex data into compelling narratives that drive business decisions.',
    'blogpage.latest.article7.author': 'Mateus Ribeiro',
    'blogpage.latest.article7.readTime': '7 min read',

    'blogpage.latest.article8.date': 'Oct 25, 2024',
    'blogpage.latest.article8.category': 'Python',
    'blogpage.latest.article8.title': 'Advanced Pandas Techniques for Data Science',
    'blogpage.latest.article8.excerpt': 'Unlock the full potential of Pandas with advanced techniques for data manipulation and analysis.',
    'blogpage.latest.article8.author': 'Mateus Ribeiro',
    'blogpage.latest.article8.readTime': '9 min read',

    // Blog Latest News
    'blogpage.news.overline': 'What\'s New',
    'blogpage.news.title': 'Latest Insights',
    'blogpage.news.subtitle': 'Recent updates and discoveries',
    'blogpage.news.viewAll': 'View All News',

    // Blog Newsletter
    'blogpage.newsletter.overline': 'Stay Connected',
    'blogpage.newsletter.title': 'Stay Ahead with Intelligence and Data',
    'blogpage.newsletter.subtitle': 'Receive exclusive analyses, intelligent ideas, and the latest insights on AI, data science, and automation directly in your email.',
    'blogpage.newsletter.name': 'Full Name',
    'blogpage.newsletter.namePlaceholder': 'Your full name',
    'blogpage.newsletter.email': 'Best Email',
    'blogpage.newsletter.emailPlaceholder': 'your.best@email.com',
    'blogpage.newsletter.button': 'Subscribe',

    // Blog CTA
    'blogpage.cta.overline': 'Let\'s Connect',
    'blogpage.cta.title': 'Build Smarter with',
    'blogpage.cta.titleGradient': 'Data + AI',
    'blogpage.cta.text': 'Let\'s collaborate to transform data into intelligent business outcomes. From predictive models to automated workflows, I help organizations unlock strategic value.',
    'blogpage.cta.btn.contact': 'Get in Touch',
    'blogpage.cta.btn.projects': 'View Projects',

    // About Us Page
    'aboutus.hero.title': 'About Us',
    'aboutus.hero.subtitle': 'Intelligence is our legacy',
    'aboutus.intro.title': 'ABOUT US — EBLA LABS',
    'aboutus.intro.p1': 'Ebla Labs was born from the union of history, data science, and artificial intelligence, with the purpose of showing that humanity\'s search for intelligence has been evolving for thousands of years.',
    'aboutus.intro.p2': 'The name comes from the ancient city of **Ebla**, in northern Syria, recognized by archaeologists as **the first data and information management center in human history**. Between 2500 and 2250 BC, the scribes of Ebla recorded information about trade, agriculture, taxes, and diplomacy on **clay tablets**.',
    'aboutus.intro.p3': 'These records were organized and analyzed to guide the decisions of kings — a process that researcher **Hans Wellisch**, in *"Ebla: The World\'s Oldest Library"* (1981), described as **the first documented form of administrative intelligence**.',
    'aboutus.intro.p4': 'During excavations led by **Paolo Matthiae** from the University of Rome La Sapienza in 1974, more than **17,000 clay tablets** were discovered inside Palace G. The palace was destroyed around 2250 BC, and the fire that consumed it accidentally baked and preserved the tablets for over four millennia — a fact confirmed by archaeological reports from the University of Rome.',
    'aboutus.intro.p5': 'Inspired by this real and remarkable legacy, **Ebla Labs** was created to connect history, technology, and modern intelligence, reinterpreting the spirit of Ebla in the digital age — where **AI, data, and creativity** shape the next frontier of knowledge and decision-making.',
    'aboutus.what.title': 'WHAT IS EBLA LABS',
    'aboutus.what.p1': 'Ebla Labs is a laboratory of ideas, technology, and learning, created to explore, build, and share knowledge on **data science, AI, blockchain, Web 3.0**, and the **builder culture**.',
    'aboutus.what.p2': 'Here, we mix ancient wisdom with modern innovation to understand how intelligence has evolved — and how we can apply it to build the future.',
    'aboutus.what.goal': 'Our goal is to create original, visual, and analytical content, including:',
    'aboutus.what.item1': 'Articles about how data and AI drive human decisions.',
    'aboutus.what.item2': 'Analyses that connect history and the future of technology.',
    'aboutus.what.item3': 'Reflections on the ethics, purpose, and philosophy of artificial intelligence.',
    'aboutus.what.item4': 'Practical guides on how to create AI-powered solutions, even without programming skills.',
    'aboutus.what.p3': 'Ebla Labs is also a space for experimental projects, such as automations, data visualizations, and AI-based applications — proving that anyone with curiosity can build something meaningful.',
    'aboutus.who.title': 'WHO WE CONNECT WITH',
    'aboutus.who.intro': 'We aim to connect with people who:',
    'aboutus.who.item1': 'See technology as an extension of human intelligence.',
    'aboutus.who.item2': 'Are curious about history, science, and digital culture.',
    'aboutus.who.item3': 'Believe that AI is a tool for creation, not replacement.',
    'aboutus.who.item4': 'Understand that intelligence grows through collaboration, not competition.',
    'aboutus.who.conclusion': 'Ebla Labs is a space for **thinkers, creators, analysts, educators, and builders** — people who want to learn, innovate, and build intelligent solutions for a changing world.',
    'aboutus.mission.title': 'MISSION',
    'aboutus.mission.text': 'To reconnect the past and the future of intelligence. To inspire people to use AI and data with purpose, creativity, and awareness — turning information into action and knowledge into real impact.',
    'aboutus.vision.title': 'VISION',
    'aboutus.vision.text': 'To be a global hub for knowledge and creation, where history, data science, and artificial intelligence meet to redefine what it means to be intelligent in the digital age.',
    'aboutus.values.title': 'VALUES',
    'aboutus.values.curiosity': '**Curiosity**: the foundation of every discovery.',
    'aboutus.values.clarity': '**Clarity**: turning the complex into something useful and accessible.',
    'aboutus.values.innovation': '**Innovation**: learning from the past to build the future.',
    'aboutus.values.ethics': '**Ethics**: using AI and data responsibly and transparently.',
    'aboutus.values.humanity': '**Humanity**: remembering that all intelligence — natural or artificial — begins with a curious mind.',
    'aboutus.essence.title': 'OUR ESSENCE',
    'aboutus.essence.p1': 'Ebla Labs is more than a website — it\'s a way of thinking. A space where human curiosity meets technology, and where knowledge becomes action.',
    'aboutus.essence.p2': 'We bring together people who believe that the true power of data and AI lies in creating meaning, solutions, and transformation.',
    'aboutus.essence.tagline': '**Ebla Labs** — Intelligence is our legacy.',
    'aboutus.cta.text': 'Want to learn more or get in touch with us?',
    'aboutus.cta.button': 'Get in Touch',

    // Thank You Page - Contact
    'thankYou.title': 'MESSAGE RECEIVED!',
    'thankYou.subtitle': 'Thank you for reaching out',
    'thankYou.description': 'Your message has been successfully received. We\'ll get back to you within 24 hours with a response to your inquiry.',
    'thankYou.button': 'Back to Home',
    'thankYou.info': 'Check your email for a confirmation message.',

    // Thank You Page - Newsletter
    'thankYouNewsletter.title': 'WELCOME TO EBLA LABS!',
    'thankYouNewsletter.subtitle': 'Thank you for subscribing to our newsletter',
    'thankYouNewsletter.description': 'You are now connected to the best insights on AI, Data Science, and Innovation. Get ready to receive exclusive content, in-depth analysis, and the latest trends shaping the future of artificial intelligence.',
    'thankYouNewsletter.button': 'Explore Articles',
    'thankYouNewsletter.info': 'You\'ll receive our first email soon. Don\'t forget to check your inbox!',
  },
  pt: {
    // Navbar
    'nav.home': 'Início',
    'nav.about': 'Sobre Mim',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Projetos',
    'nav.blog': 'Blog',
    'nav.portfolio': 'Portfólio',
    'nav.contact': 'Contato',
    'nav.aboutUs': 'Sobre Nós',
    'nav.articles': 'Artigos',
    'nav.news': 'Notícias',
    'nav.subscribe': 'Inscrever-se',
    'nav.search': 'Buscar artigos...',

    // Hero Section
    'hero.subtitle': 'Cientista de Dados & Construtor de IA',
    'hero.title': 'Olá, eu sou',
    'hero.name': 'MATEUS RIBEIRO',
    'hero.description': 'Eu construo soluções de dados orientadas por IA que transformam informações brutas em decisões inteligentes. Combinando análise de dados, automação e IA generativa, crio sistemas escaláveis e de alto impacto para desafios empresariais do mundo real.',
    'hero.downloadCV': 'Baixar CV',
    'hero.viewProjects': 'Ver Projetos',
    'hero.scrollText': 'Role para Descobrir',

    // About Section
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Do passado à construção do futuro com IA',
    'about.p1': 'Minha jornada em **Ciência de Dados** começou nas **Humanidades**, estudando **História** — onde aprendi a analisar contextos complexos, conectar informações e identificar padrões ocultos em meio ao caos. Essa curiosidade de entender como os dados contam histórias me levou naturalmente ao mundo da tecnologia.',
    'about.p2': 'Com o tempo, expandi minha formação para **Tecnologia da Informação** e **Inteligência Artificial**, aplicando o pensamento analítico da História para criar soluções inteligentes. Hoje, combino **dados, automação e IA** — incluindo **IA generativa** — para transformar informação em inteligência aplicada, ajudando pessoas e empresas a tomar decisões mais assertivas.',
    'about.p3': 'Como **Cientista de Dados e Construtor de IA**, meu foco é construir soluções que realmente resolvem problemas: desde **modelos preditivos** e **sistemas de recomendação** até **fluxos de trabalho inteligentes** e **produtos de dados** que geram valor real. Minha abordagem sempre está centrada em entender o contexto, experimentar rápido e entregar resultados que conectam **análise, tecnologia e impacto**.',

    // Skills Section
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Construindo soluções inteligentes com ferramentas modernas',
    'skill_1_title': '🤖 Ciência de Dados e Machine Learning',
    'skill_1_desc': 'Desenvolvendo modelos preditivos e soluções de IA aplicadas a negócios reais, com foco em impacto mensurável.',
    'skill_2_title': '⚙️ Engenharia de Machine Learning (MLOps)',
    'skill_2_desc': 'Criando pipelines escaláveis e automatizados — do treino ao deploy de modelos em produção.',
    'skill_3_title': '☁️ Cloud e Infraestrutura de Dados',
    'skill_3_desc': 'Construindo e gerenciando soluções em AWS, Azure e GCP para armazenar e processar grandes volumes de dados.',
    'skill_4_title': '🐍 Python para Ciência de Dados',
    'skill_4_desc': 'Experiência prática com Pandas, NumPy, scikit-learn, TensorFlow e automação de tarefas analíticas.',
    'skill_5_title': '💾 SQL e Modelagem de Dados',
    'skill_5_desc': 'Consultas otimizadas, design de bancos relacionais e transformação eficiente de dados em larga escala.',
    'skill_6_title': '📊 Power BI e Data Visualization',
    'skill_6_desc': 'Criação de dashboards interativos e storytelling visual para transformar dados em decisões estratégicas.',
    'skill_7_title': '🔮 Modelagem Estatística e Forecasting',
    'skill_7_desc': 'Aplicando estatística, análise de séries temporais e algoritmos preditivos para prever tendências e padrões.',
    'skill_8_title': '🔄 ETL e Data Pipelines',
    'skill_8_desc': 'Desenvolvendo fluxos automatizados de extração, transformação e carregamento de dados com qualidade e performance.',
    'skill_9_title': '✨ IA Generativa e LLMs',
    'skill_9_desc': 'Explorando aplicações práticas com RAG, embeddings e engenharia de prompts para automação inteligente.',
    'skill_10_title': '📈 Business Intelligence e Estratégia de Dados',
    'skill_10_desc': 'Traduzindo métricas e KPIs em insights acionáveis que impulsionam lucro, eficiência e inovação.',
    'skill_11_title': '🧩 Data Engineering e Automação',
    'skill_11_desc': 'Integrando dados de múltiplas fontes, otimizando pipelines e garantindo escalabilidade de sistemas analíticos.',
    'skill_12_title': '💡 Comunicação e Resolução de Problemas',
    'skill_12_desc': 'Transformando análises complexas em soluções claras, colaborando com times técnicos e de negócio.',

    // Projects Section
    'projects.title': 'Projetos',
    'projects.subtitle': 'Role para explorar',
    'project_1_title': '🎯 Sistema de Recomendação com IA',
    'project_1_subtitle': 'Construí um motor de recomendação que aumentou o engajamento',
    'project_1_problem': 'Baixo engajamento devido a sugestões de conteúdo irrelevantes.',
    'project_1_solution': 'Modelo híbrido (colaborativo + baseado em conteúdo + redes neurais).',
    'project_1_impact': '↑ engajamento 40%, ↓ churn 25%, ↑ conversão 30%.',
    'project_2_title': '⚙️ Dashboard de Manutenção Preditiva',
    'project_2_subtitle': 'Previsão em tempo real para evitar falhas de equipamentos',
    'project_2_problem': 'Tempo de inatividade caro devido a falhas inesperadas.',
    'project_2_solution': 'LSTM + Isolation Forests prevendo 48h de antecedência.',
    'project_2_impact': '↓ tempo de inatividade não planejado 60%, ~$500K economizados/ano.',
    'project_3_title': '🔄 Suite de Automação Inteligente de Dados',
    'project_3_subtitle': 'Automação ETL reduzindo trabalho manual em 80%',
    'project_3_problem': 'Equipe gastando 20h+/semana em ETL e QC manuais.',
    'project_3_solution': 'Pipelines auto-reparáveis com validação e recuperação automáticas.',
    'project_3_impact': 'Qualidade de dados 85% → 99.5%, 80% tempo liberado.',
    'project_4_title': '✨ Assistente de Conhecimento GenAI',
    'project_4_subtitle': 'Chat RAG com fontes verificadas',
    'project_4_problem': 'Difícil encontrar conhecimento interno confiável.',
    'project_4_solution': 'RAG com embeddings, citações e controle de acesso.',
    'project_4_impact': 'Tempo de pesquisa ↓70%, precisão de resposta ↑.',
    'project_5_title': '📈 Previsão de Receita',
    'project_5_subtitle': 'Previsão de séries temporais para finanças',
    'project_5_problem': 'Previsões de receita manuais e não confiáveis.',
    'project_5_solution': 'XGBoost/Prophet com recursos sazonais + campanha.',
    'project_5_impact': 'MAPE −32%, melhor planejamento.',
    'project_6_title': '👥 Customer 360 & Churn',
    'project_6_subtitle': 'Perfil unificado + pontuação de risco de churn',
    'project_6_problem': 'Visão fragmentada do cliente e aumento de churn.',
    'project_6_solution': 'Unificação de dados + modelo de churn + gatilhos de retenção.',
    'project_6_impact': '↓ churn 18%, ↑ LTV 12%.',
    'projects.code': 'Código',

    // Blog Preview Section
    'blog_preview.title': 'Blog',
    'blog_preview.subtitle': 'Explorando IA, Ciência de Dados e Inovação',
    'blog_preview_1_icon': '🤖',
    'blog_preview_1_title': 'Como RAG está Redefinindo Sistemas de IA',
    'blog_preview_1_p1': 'Retrieval-Augmented Generation (RAG) está revolucionando como sistemas de IA acessam e usam informação. Ao contrário de modelos tradicionais que dependem apenas de dados de treinamento, RAG combina recuperação em tempo real com geração de linguagem, permitindo respostas mais precisas, contextuais e atualizadas.',
    'blog_preview_1_p2': 'Esta arquitetura é particularmente poderosa para aplicações empresariais onde precisão e verificabilidade são críticas. Ao fundamentar respostas em documentos recuperados, sistemas RAG podem citar fontes, reduzir alucinações e se adaptar a novas informações sem retreinamento.',
    'blog_preview_1_p3': 'De chatbots de suporte ao cliente a bases de conhecimento internas, RAG está se tornando o padrão para construir aplicações de IA confiáveis. Neste artigo, exploro a arquitetura, estratégias de implementação e casos de uso do mundo real que demonstram seu potencial transformador.',
    'blog_preview_2_icon': '📊',
    'blog_preview_2_title': 'Construindo Pipelines ML para Produção',
    'blog_preview_2_p1': 'Mover de notebooks experimentais para sistemas ML de produção requer mais do que apenas treinamento de modelo. Exige pipelines robustos que lidam com validação de dados, versionamento, monitoramento e retreinamento automatizado—tudo mantendo confiabilidade em escala.',
    'blog_preview_2_p2': 'Pipelines ML modernos combinam ferramentas de orquestração como Airflow ou Prefect com plataformas MLOps para criar fluxos de trabalho completos. Esses sistemas detectam automaticamente desvio de dados, acionam retreinamento quando o desempenho degrada e implantam novos modelos com zero tempo de inatividade.',
    'blog_preview_2_p3': 'Neste mergulho profundo, compartilho lições aprendidas ao construir sistemas ML de produção, incluindo padrões de arquitetura, estratégias de monitoramento e armadilhas comuns a evitar ao escalar de protótipo para produção.',
    'blog_preview_3_icon': '💡',
    'blog_preview_3_title': 'Estratégia de Dados para Impacto Empresarial',
    'blog_preview_3_p1': 'A maioria das organizações possui grandes quantidades de dados, mas luta para extrair valor significativo. A diferença entre empresas ricas em dados e empresas orientadas por dados não é tecnologia—é estratégia. Iniciativas de dados bem-sucedidas começam com objetivos de negócios claros e trabalham de trás para frente até a implementação técnica.',
    'blog_preview_3_p2': 'Uma forte estratégia de dados alinha investimentos de análise com resultados de negócios, estabelece estruturas de governança e constrói capacidade organizacional. Ela responde perguntas críticas: Quais dados precisamos? Como os usaremos? Quem precisa de acesso? Quais métricas definem sucesso?',
    'blog_preview_3_p3': 'Este artigo explora como construir uma estratégia de dados que entrega impacto empresarial mensurável, desde estabelecer literacia de dados em equipes até implementar métricas que importam. Aprenda como transformar dados de um centro de custo em um ativo estratégico.',
    'blog_preview.read_more': 'Leia mais',

    // Articles Page
    'articles.hero.title': 'EBLA ARTIGOS',
    'articles.hero.subtitle': 'Explorando ideias, dados e inteligência.',
    'articles.hero.description': 'Uma coleção curada de análises, ensaios e reflexões sobre IA, ciência de dados e inovação — conectando tecnologia, humanidade e conhecimento.',
    'articles.hero.scroll': 'Role para explorar',
    'articles.featured.title': 'Artigos em Destaque',
    'articles.featured.subtitle': 'Mergulhos profundos nos temas mais relevantes',
    'articles.all.title': 'Todos os Artigos',
    'articles.all.subtitle': 'Explore nossa coleção completa, do mais recente ao mais antigo',
    'articles.readMore': 'Ler artigo completo',
    'articles.readTime': 'min de leitura',

    // News Page
    'news.hero.title': 'EBLA NOTÍCIAS',
    'news.hero.subtitle': 'Últimas novidades e atualizações do mundo da IA e tecnologia.',
    'news.hero.description': 'Fique atualizado com as últimas notícias, descobertas e perspectivas que estão moldando o futuro dos dados, inteligência e transformação digital.',
    'news.hero.scroll': 'Role para explorar',
    'news.featured.title': 'Notícias em Destaque',
    'news.featured.subtitle': 'As histórias mais importantes desta semana',
    'news.all.title': 'Todas as Notícias',
    'news.all.subtitle': 'Linha do tempo completa de atualizações',
    'news.readMore': 'Leia mais',
    'news.readTime': 'min de leitura',

    // Contact Section
    'contact.title': 'Contato',
    'contact.subtitle': 'Vamos construir algo incrível juntos',
    'contact.email': 'E-mail',
    'contact.connect': 'Conecte-se',
    'contact.form.name': 'Nome',
    'contact.form.namePlaceholder': 'Seu nome',
    'contact.form.email': 'E-mail',
    'contact.form.emailPlaceholder': 'seu@email.com',
    'contact.form.message': 'Mensagem',
    'contact.form.messagePlaceholder': 'Descreva seu projeto...',
    'contact.form.send': 'Enviar Mensagem',

    // Footer
    'footer.rights': '© 2025 Mateus Ribeiro — Cientista de Dados & Construtor de IA',
    'footer.blog': '© 2025 Ebla Labs — IA, Dados & Insights Inteligentes',

    // Blog Page
    'blogpage.hero.title': 'EBLA LABS',
    'blogpage.hero.subtitle': 'Inteligência é nosso legado',
    'blogpage.hero.description': 'O Ebla Labs é um espaço dedicado a explorar o impacto da inteligência e da tecnologia na transformação do mundo. Aqui, você vai encontrar artigos sobre ciência de dados, IA, blockchain, Web 3.0 e cultura builder — com análises que conectam história, inovação e criação prática. Nosso propósito é mostrar como ideias, ferramentas e dados podem gerar soluções inteligentes e inspirar novos criadores digitais. Mais do que um blog, o Ebla Labs é um laboratório de conhecimento para quem quer entender, aprender e construir o futuro.',
    'blogpage.hero.exploreArticles': 'Explorar Artigos',
    'blogpage.hero.subscribe': 'Assinar Newsletter',

    // Blog Legacy Section
    'blogpage.legacy.overline': 'Nossa Fundação',
    'blogpage.legacy.title': 'O Ponto Zero da Análise de Dados: Entre a Argila e o Algoritmo',
    'blogpage.legacy.p1': 'O nome **Ebla** vem da antiga cidade no norte da Síria, reconhecida por arqueólogos como **o primeiro centro de gestão de dados e informações da história humana**. Entre 2500 e 2250 a.C., os escribas de Ebla registravam informações sobre comércio, agricultura, impostos e diplomacia em **tábuas de argila**.',
    'blogpage.legacy.p2': 'Esses registros eram organizados e analisados para orientar as decisões dos reis — um processo que o pesquisador **Hans Wellisch**, em *"Ebla: The World\'s Oldest Library"* (1981), descreveu como **a primeira forma documentada de inteligência administrativa**.',
    'blogpage.legacy.p3': 'Durante escavações lideradas por **Paolo Matthiae** da Universidade de Roma La Sapienza em 1974, mais de **17.000 tábuas de argila** foram descobertas dentro do Palácio G. O palácio foi destruído por volta de 2250 a.C., e o incêndio que o consumiu acidentalmente cozinhou e preservou as tábuas por mais de quatro milênios.',
    'blogpage.legacy.p4': 'Inspirado neste legado real e notável, **Ebla Labs** foi criado para conectar história, tecnologia e inteligência moderna, reinterpretando o espírito de Ebla na era digital — onde **IA, dados e criatividade** moldam a próxima fronteira do conhecimento e tomada de decisões.',

    // Blog Stats Section
    'blogpage.stats.overline': 'Insights Orientados por Dados',
    'blogpage.stats.title': 'Impacto Real dos Dados nos Negócios',
    'blogpage.stats.subtitle': 'Onde dados e inteligência se transformam em resultado.',
    'blogpage.stats.stat1.number': '88%',
    'blogpage.stats.stat1.label': 'Empresas já usam IA em pelo menos uma função.',
    'blogpage.stats.stat1.source': 'McKinsey Global Survey, 2024',
    'blogpage.stats.stat2.number': '76%',
    'blogpage.stats.stat2.label': 'Organizações tratam IA como prioridade estratégica.',
    'blogpage.stats.stat2.source': 'Deloitte State of AI Report, 2024',
    'blogpage.stats.stat3.number': '60%',
    'blogpage.stats.stat3.label': 'Negócios estão redesenhando seus modelos de dados.',
    'blogpage.stats.stat3.source': 'Gartner Data & Analytics Survey, 2024',
    'blogpage.stats.stat4.number': '84%',
    'blogpage.stats.stat4.label': 'Líderes têm estratégia formal para extrair valor de dados.',
    'blogpage.stats.stat4.source': 'NewVantage Partners, 2024',
    'blogpage.stats.stat5.number': '39%',
    'blogpage.stats.stat5.label': 'Empresas relatam impacto direto no lucro com IA e analytics.',
    'blogpage.stats.stat5.source': 'MIT Sloan + BCG, 2024',
    'blogpage.stats.stat6.number': 'US$ 94,4 bi',
    'blogpage.stats.stat6.label': 'Tamanho estimado do mercado global de análise de dados em 2025.',
    'blogpage.stats.stat6.source': 'Statista Market Forecast, 2024',

    // Blog Featured Articles
    'blogpage.featured.overline': 'Mergulhos Profundos',
    'blogpage.featured.title': 'Artigos em Destaque',
    'blogpage.featured.subtitle': 'Mergulhos Profundos em IA & Dados',

    // Blog Latest Articles
    'blogpage.latest.overline': 'Fique Atualizado',
    'blogpage.latest.title': 'Últimos Artigos',
    'blogpage.latest.subtitle': 'Descubra nossas análises e insights mais recentes',
    'blogpage.latest.viewAll': 'Ver Todos os Artigos',

    // Latest Articles Content
    'blogpage.latest.article4.date': '8 de Nov, 2024',
    'blogpage.latest.article4.category': 'Machine Learning',
    'blogpage.latest.article4.title': 'Construindo Pipelines de ML Escaláveis com MLOps',
    'blogpage.latest.article4.excerpt': 'Aprenda como projetar e implementar pipelines de machine learning prontos para produção usando práticas e ferramentas modernas de MLOps.',
    'blogpage.latest.article4.author': 'Mateus Ribeiro',
    'blogpage.latest.article4.readTime': '8 min de leitura',

    'blogpage.latest.article5.date': '5 de Nov, 2024',
    'blogpage.latest.article5.category': 'Engenharia de Dados',
    'blogpage.latest.article5.title': 'Modern Data Stack: De ETL para ELT',
    'blogpage.latest.article5.excerpt': 'Explore a evolução das arquiteturas de processamento de dados e como o modern data stack está transformando a análise.',
    'blogpage.latest.article5.author': 'Mateus Ribeiro',
    'blogpage.latest.article5.readTime': '6 min de leitura',

    'blogpage.latest.article6.date': '2 de Nov, 2024',
    'blogpage.latest.article6.category': 'IA Generativa',
    'blogpage.latest.article6.title': 'Sistemas RAG: Aprimorando LLMs com Contexto',
    'blogpage.latest.article6.excerpt': 'Descubra como a Geração Aumentada por Recuperação está revolucionando a forma como construímos aplicações inteligentes com LLMs.',
    'blogpage.latest.article6.author': 'Mateus Ribeiro',
    'blogpage.latest.article6.readTime': '10 min de leitura',

    'blogpage.latest.article7.date': '28 de Out, 2024',
    'blogpage.latest.article7.category': 'Analytics',
    'blogpage.latest.article7.title': 'Data Storytelling: De Números a Insights',
    'blogpage.latest.article7.excerpt': 'Domine a arte de transformar dados complexos em narrativas convincentes que impulsionam decisões de negócio.',
    'blogpage.latest.article7.author': 'Mateus Ribeiro',
    'blogpage.latest.article7.readTime': '7 min de leitura',

    'blogpage.latest.article8.date': '25 de Out, 2024',
    'blogpage.latest.article8.category': 'Python',
    'blogpage.latest.article8.title': 'Técnicas Avançadas de Pandas para Data Science',
    'blogpage.latest.article8.excerpt': 'Desbloqueie todo o potencial do Pandas com técnicas avançadas para manipulação e análise de dados.',
    'blogpage.latest.article8.author': 'Mateus Ribeiro',
    'blogpage.latest.article8.readTime': '9 min de leitura',

    // Blog Latest News
    'blogpage.news.overline': 'Novidades',
    'blogpage.news.title': 'Últimas Notícias',
    'blogpage.news.subtitle': 'Atualizações e descobertas recentes',
    'blogpage.news.viewAll': 'Ver Todas as Notícias',

    // Blog Newsletter
    'blogpage.newsletter.overline': 'Fique Conectado',
    'blogpage.newsletter.title': 'Fique à Frente com Inteligência e Dados',
    'blogpage.newsletter.subtitle': 'Receba análises exclusivas, ideias inteligentes e os insights mais recentes sobre IA, ciência de dados e automação diretamente no seu e-mail.',
    'blogpage.newsletter.name': 'Nome Completo',
    'blogpage.newsletter.namePlaceholder': 'Seu nome completo',
    'blogpage.newsletter.email': 'Melhor E-mail',
    'blogpage.newsletter.emailPlaceholder': 'seu.melhor@email.com',
    'blogpage.newsletter.button': 'Inscrever-se',

    // Blog CTA
    'blogpage.cta.overline': 'Vamos Conectar',
    'blogpage.cta.title': 'Construa de Forma Mais Inteligente com',
    'blogpage.cta.titleGradient': 'Dados + IA',
    'blogpage.cta.text': 'Vamos colaborar para transformar dados em resultados de negócios inteligentes. De modelos preditivos a fluxos de trabalho automatizados, ajudo organizações a desbloquear valor estratégico.',
    'blogpage.cta.btn.contact': 'Fale Comigo',
    'blogpage.cta.btn.projects': 'Ver Projetos',

    // About Us Page
    'aboutus.hero.title': 'Sobre Nós',
    'aboutus.hero.subtitle': 'Inteligência é nosso legado',
    'aboutus.intro.title': 'SOBRE NÓS — EBLA LABS',
    'aboutus.intro.p1': 'Ebla Labs nasceu da união entre história, ciência de dados e inteligência artificial, com o propósito de mostrar que a busca da humanidade por inteligência vem evoluindo há milhares de anos.',
    'aboutus.intro.p2': 'O nome vem da antiga cidade de **Ebla**, no norte da Síria, reconhecida por arqueólogos como **o primeiro centro de gestão de dados e informações da história humana**. Entre 2500 e 2250 a.C., os escribas de Ebla registravam informações sobre comércio, agricultura, impostos e diplomacia em **tábuas de argila**.',
    'aboutus.intro.p3': 'Esses registros eram organizados e analisados para orientar as decisões dos reis — um processo que o pesquisador **Hans Wellisch**, em *"Ebla: The World\'s Oldest Library"* (1981), descreveu como **a primeira forma documentada de inteligência administrativa**.',
    'aboutus.intro.p4': 'Durante escavações lideradas por **Paolo Matthiae** da Universidade de Roma La Sapienza em 1974, mais de **17.000 tábuas de argila** foram descobertas dentro do Palácio G. O palácio foi destruído por volta de 2250 a.C., e o incêndio que o consumiu acidentalmente cozinhou e preservou as tábuas por mais de quatro milênios — fato confirmado por relatórios arqueológicos da Universidade de Roma.',
    'aboutus.intro.p5': 'Inspirado neste legado real e notável, **Ebla Labs** foi criado para conectar história, tecnologia e inteligência moderna, reinterpretando o espírito de Ebla na era digital — onde **IA, dados e criatividade** moldam a próxima fronteira do conhecimento e tomada de decisões.',
    'aboutus.what.title': 'O QUE É EBLA LABS',
    'aboutus.what.p1': 'Ebla Labs é um laboratório de ideias, tecnologia e aprendizado, criado para explorar, construir e compartilhar conhecimento sobre **ciência de dados, IA, blockchain, Web 3.0** e a **cultura builder**.',
    'aboutus.what.p2': 'Aqui, misturamos sabedoria antiga com inovação moderna para entender como a inteligência evoluiu — e como podemos aplicá-la para construir o futuro.',
    'aboutus.what.goal': 'Nosso objetivo é criar conteúdo original, visual e analítico, incluindo:',
    'aboutus.what.item1': 'Artigos sobre como dados e IA impulsionam decisões humanas.',
    'aboutus.what.item2': 'Análises que conectam história e o futuro da tecnologia.',
    'aboutus.what.item3': 'Reflexões sobre a ética, propósito e filosofia da inteligência artificial.',
    'aboutus.what.item4': 'Guias práticos sobre como criar soluções impulsionadas por IA, mesmo sem habilidades de programação.',
    'aboutus.what.p3': 'Ebla Labs também é um espaço para projetos experimentais, como automações, visualizações de dados e aplicações baseadas em IA — provando que qualquer pessoa com curiosidade pode construir algo significativo.',
    'aboutus.who.title': 'COM QUEM NOS CONECTAMOS',
    'aboutus.who.intro': 'Nosso objetivo é conectar com pessoas que:',
    'aboutus.who.item1': 'Veem a tecnologia como uma extensão da inteligência humana.',
    'aboutus.who.item2': 'São curiosas sobre história, ciência e cultura digital.',
    'aboutus.who.item3': 'Acreditam que IA é uma ferramenta para criação, não substituição.',
    'aboutus.who.item4': 'Entendem que a inteligência cresce através da colaboração, não da competição.',
    'aboutus.who.conclusion': 'Ebla Labs é um espaço para **pensadores, criadores, analistas, educadores e construtores** — pessoas que querem aprender, inovar e construir soluções inteligentes para um mundo em mudança.',
    'aboutus.mission.title': 'MISSÃO',
    'aboutus.mission.text': 'Reconectar o passado e o futuro da inteligência. Inspirar pessoas a usar IA e dados com propósito, criatividade e consciência — transformando informação em ação e conhecimento em impacto real.',
    'aboutus.vision.title': 'VISÃO',
    'aboutus.vision.text': 'Ser um hub global de conhecimento e criação, onde história, ciência de dados e inteligência artificial se encontram para redefinir o que significa ser inteligente na era digital.',
    'aboutus.values.title': 'VALORES',
    'aboutus.values.curiosity': '**Curiosidade**: a fundação de toda descoberta.',
    'aboutus.values.clarity': '**Clareza**: transformar o complexo em algo útil e acessível.',
    'aboutus.values.innovation': '**Inovação**: aprender do passado para construir o futuro.',
    'aboutus.values.ethics': '**Ética**: usar IA e dados de forma responsável e transparente.',
    'aboutus.values.humanity': '**Humanidade**: lembrar que toda inteligência — natural ou artificial — começa com uma mente curiosa.',
    'aboutus.essence.title': 'NOSSA ESSÊNCIA',
    'aboutus.essence.p1': 'Ebla Labs é mais do que um site — é uma forma de pensar. Um espaço onde a curiosidade humana encontra a tecnologia, e onde o conhecimento se torna ação.',
    'aboutus.essence.p2': 'Reunimos pessoas que acreditam que o verdadeiro poder dos dados e da IA está em criar significado, soluções e transformação.',
    'aboutus.essence.tagline': '**Ebla Labs** — Inteligência é nosso legado.',
    'aboutus.cta.text': 'Quer saber mais ou entrar em contato conosco?',
    'aboutus.cta.button': 'Fale Comigo',

    // Thank You Page - Contact
    'thankYou.title': 'MENSAGEM RECEBIDA!',
    'thankYou.subtitle': 'Obrigado por entrar em contato',
    'thankYou.description': 'Sua mensagem foi recebida com sucesso. Entraremos em contato com você em até 24 horas respondendo à sua solicitação.',
    'thankYou.button': 'Voltar para Home',
    'thankYou.info': 'Verifique seu email para uma mensagem de confirmação.',

    // Thank You Page - Newsletter
    'thankYouNewsletter.title': 'BEM-VINDO À EBLA LABS!',
    'thankYouNewsletter.subtitle': 'Obrigado por se inscrever na nossa newsletter',
    'thankYouNewsletter.description': 'Você agora está conectado às melhores insights sobre IA, Ciência de Dados e Inovação. Prepare-se para receber conteúdos exclusivos, análises aprofundadas e as últimas tendências que estão moldando o futuro da inteligência artificial.',
    'thankYouNewsletter.button': 'Explorar Artigos',
    'thankYouNewsletter.info': 'Você receberá nosso primeiro email em breve. Não esqueça de verificar sua caixa de entrada!',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'pt' ? 'pt' : 'en') as Language;
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'pt' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

