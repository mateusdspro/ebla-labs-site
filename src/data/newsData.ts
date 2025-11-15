import { News } from '../types/News';

const news: News[] = [
  {
    id: '1',
    slug: 'openai-lanca-gpt-5-revolucao-ia',
    title: {
      en: 'OpenAI Launches GPT-5: New Era of Artificial Intelligence',
      pt: 'OpenAI Lança GPT-5: Nova Era da Inteligência Artificial'
    },
    excerpt: {
      en: 'OpenAI announced today the launch of GPT-5, promising advanced reasoning capabilities and better contextual understanding. The new model represents a significant leap in terms of performance and safety.',
      pt: 'A OpenAI anunciou hoje o lançamento do GPT-5, prometendo capacidades de raciocínio avançado e melhor compreensão contextual. O novo modelo representa um salto significativo em termos de performance e segurança.'
    },
    image: '/images/news1.jpg',
    category: {
      en: '🚀 Launches',
      pt: '🚀 Lançamentos'
    },
    date: '2024-11-13',
    readTime: '5',
    featured: true,
    author: 'Equipe Ebla Labs',
  },
  {
    id: '2',
    slug: 'google-deepmind-descobre-proteinas-ia',
    title: {
      en: 'Google DeepMind Uses AI to Discover New Proteins',
      pt: 'Google DeepMind Usa IA para Descobrir Novas Proteínas'
    },
    excerpt: {
      en: 'Google DeepMind researchers used artificial intelligence to predict protein structures with unprecedented accuracy, paving the way for advances in medicine and biotechnology.',
      pt: 'Pesquisadores do Google DeepMind utilizaram inteligência artificial para prever estruturas de proteínas com precisão sem precedentes, abrindo caminho para avanços na medicina e biotecnologia.'
    },
    image: '/images/news2.jpg',
    category: {
      en: '🔬 Research',
      pt: '🔬 Pesquisa'
    },
    date: '2024-11-12',
    readTime: '6',
    featured: true,
    author: 'Equipe Ebla Labs',
  },
  {
    id: '3',
    slug: 'microsoft-copilot-empresas-fortune-500',
    title: {
      en: 'Microsoft Copilot Adopted by 70% of Fortune 500 Companies',
      pt: 'Microsoft Copilot Adotado por 70% das Empresas Fortune 500'
    },
    excerpt: {
      en: 'Microsoft 365 Copilot has achieved an impressive adoption rate among the world\'s largest companies, transforming corporate productivity with integrated AI.',
      pt: 'O Microsoft 365 Copilot alcançou uma taxa de adoção impressionante entre as maiores empresas do mundo, transformando a produtividade corporativa com IA integrada.'
    },
    image: '/images/news3.jpg',
    category: {
      en: '💼 Business',
      pt: '💼 Negócios'
    },
    date: '2024-11-11',
    readTime: '4',
    featured: true,
    author: 'Equipe Ebla Labs',
  }
];

export const getFeaturedNews = () => news.filter(item => item.featured);
export const getAllNews = () => news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
export const getNewsBySlug = (slug: string) => news.find(item => item.slug === slug);
