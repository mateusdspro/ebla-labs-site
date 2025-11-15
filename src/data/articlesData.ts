export interface Article {
  id: string;
  slug: string;
  title: {
    en: string;
    pt: string;
  };
  excerpt: {
    en: string;
    pt: string;
  };
  image: string;
  category: {
    en: string;
    pt: string;
  };
  date: string;
  readTime: string;
  featured: boolean;
  author: string;
}

export const articlesData: Article[] = [
  {
    id: '1',
    slug: 'rag-systems-redefining-ai',
    title: {
      en: 'How RAG is Redefining AI Systems',
      pt: 'Como RAG está Redefinindo Sistemas de IA'
    },
    excerpt: {
      en: 'Retrieval-Augmented Generation (RAG) is revolutionizing how AI systems access and use information. Unlike traditional models that rely solely on training data, RAG combines real-time retrieval with language generation.',
      pt: 'Retrieval-Augmented Generation (RAG) está revolucionando como sistemas de IA acessam e usam informação. Ao contrário de modelos tradicionais que dependem apenas de dados de treinamento, RAG combina recuperação em tempo real com geração de linguagem.'
    },
    image: '/images/blog1.jpg',
    category: {
      en: '✨ Generative AI',
      pt: '✨ IA Generativa'
    },
    date: '2024-11-12',
    readTime: '8',
    featured: true,
    author: 'Mateus Ribeiro'
  },
  {
    id: '2',
    slug: 'building-production-ml-pipelines',
    title: {
      en: 'Building Production-Ready ML Pipelines',
      pt: 'Construindo Pipelines ML para Produção'
    },
    excerpt: {
      en: 'Moving from experimental notebooks to production ML systems requires more than just model training. It demands robust pipelines that handle data validation, versioning, monitoring, and automated retraining.',
      pt: 'Mover de notebooks experimentais para sistemas ML de produção requer mais do que apenas treinamento de modelo. Exige pipelines robustos que lidam com validação de dados, versionamento, monitoramento e retreinamento automatizado.'
    },
    image: '/images/blog2.jpg',
    category: {
      en: '⚙️ MLOps',
      pt: '⚙️ MLOps'
    },
    date: '2024-11-08',
    readTime: '10',
    featured: true,
    author: 'Mateus Ribeiro'
  },
  {
    id: '3',
    slug: 'data-strategy-business-impact',
    title: {
      en: 'Data Strategy for Business Impact',
      pt: 'Estratégia de Dados para Impacto Empresarial'
    },
    excerpt: {
      en: 'Most organizations sit on vast amounts of data but struggle to extract meaningful value. The difference between data-rich and data-driven companies isn\'t technology—it\'s strategy.',
      pt: 'A maioria das organizações possui grandes quantidades de dados, mas luta para extrair valor significativo. A diferença entre empresas ricas em dados e empresas orientadas por dados não é tecnologia—é estratégia.'
    },
    image: '/images/blog3.jpg',
    category: {
      en: '💡 Data Strategy',
      pt: '💡 Estratégia de Dados'
    },
    date: '2024-11-05',
    readTime: '7',
    featured: true,
    author: 'Mateus Ribeiro'
  }
];

export const getFeaturedArticles = (): Article[] => {
  return articlesData.filter(article => article.featured);
};

export const getAllArticles = (): Article[] => {
  return articlesData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articlesData.find(article => article.slug === slug);
};
