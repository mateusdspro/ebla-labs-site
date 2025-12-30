import { Project } from '../types/Project';

export const projectsData: Project[] = [
  {
    id: '7',
    title: '🎙️ Mercurius.Vox',
    subtitle: 'Sistema de ditado por voz 100% offline e gratuito',
    problem: 'Pagar $20/mês pelo Wispr Flow — um app que apenas transcreve voz para texto. Eram $240/ano para uma funcionalidade básica, com dados enviados para servidores externos e zero controle sobre privacidade.',
    solution: 'Construí meu próprio sistema de ditado usando OpenAI Whisper (IA open-source), Python, e Apple Silicon. Push-to-talk universal que funciona em QUALQUER app do Mac (Word, Chrome, ChatGPT, Figma...), 100% offline, com feedback visual e auto-recovery para nunca fechar. Desenvolvido em 8 horas com Claude Sonnet 4.5 no Cursor.',
    impact: 'De $20/mês para $0/mês. Economia de $240/ano. 100% privado (dados nunca saem do Mac). Sistema imortal que roda 24/7. Transcrição em segundos usando GPU. Open-source para todos usarem.',
    tags: ['Python', 'Whisper AI', 'PyTorch', 'macOS', 'Open Source', 'Voice AI', 'Claude Sonnet 4.5'],
    github: 'https://github.com/mateusdspro/mercurius.vox',
    featured: true,
    articleLink: '/articles/de-assinante-a-criador-mercurius-vox',
    series: '🛠️ Stop Paying. Start Building #1'
  },
  {
    id: '1',
    title: 'AI-Powered Recommendation System',
    subtitle: 'E-commerce personalization engine',
    problem: 'Client faced low conversion rates due to generic product recommendations that didn\'t match user preferences.',
    solution: 'Built collaborative filtering ML model using TensorFlow, integrated with real-time user behavior tracking via FastAPI microservices.',
    impact: '40% increase in conversion rate, 25% boost in average order value, and 1.2M+ personalized recommendations served monthly.',
    tags: ['Python', 'TensorFlow', 'SQL', 'FastAPI', 'Docker'],
    github: 'https://github.com/mateusdspro/recommendation-system',
    featured: true
  },
  {
    id: '2',
    title: 'Predictive Maintenance System',
    subtitle: 'Industrial IoT analytics platform',
    problem: 'Manufacturing plant experienced unexpected equipment failures causing $500k+ in monthly downtime.',
    solution: 'Developed predictive ML models analyzing sensor data patterns, deployed on Azure ML with automated alerting system.',
    impact: '60% reduction in unplanned downtime, $2M annual cost savings, and 95% prediction accuracy for equipment failures.',
    tags: ['Python', 'scikit-learn', 'Power BI', 'Azure ML', 'SQL'],
    github: 'https://github.com/mateusdspro/predictive-maintenance',
    featured: true
  },
  {
    id: '3',
    title: 'Automated Data Pipeline',
    subtitle: 'ETL orchestration and monitoring',
    problem: 'Manual data processing consumed 40+ hours weekly, with frequent inconsistencies and delays in reporting.',
    solution: 'Architected end-to-end ETL pipeline with Airflow orchestration, dbt transformations, and Snowflake data warehouse integration.',
    impact: 'Reduced processing time from 40h to 2h weekly, eliminated manual errors, and enabled real-time dashboard updates.',
    tags: ['Python', 'Airflow', 'dbt', 'Snowflake', 'Looker Studio'],
    github: 'https://github.com/mateusdspro/data-automation',
    featured: true
  },
  {
    id: '4',
    title: 'Generative AI Assistant',
    subtitle: 'RAG-powered knowledge base',
    problem: 'Support team spent 70% of time answering repetitive questions from 10,000+ document knowledge base.',
    solution: 'Built RAG system with OpenAI embeddings, Pinecone vector database, and conversational interface with source citations.',
    impact: '80% reduction in support tickets, 5-second average response time, and 92% user satisfaction rate.',
    tags: ['Generative AI', 'RAG', 'OpenAI', 'Pinecone', 'Next.js'],
    github: 'https://github.com/mateusdspro/genai-assistant',
    featured: false
  },
  {
    id: '5',
    title: 'Revenue Forecasting Model',
    subtitle: 'Time series ML predictions',
    problem: 'Finance team relied on static spreadsheets for forecasting, missing seasonal patterns and market trends.',
    solution: 'Developed ensemble model combining XGBoost and Prophet, with automated retraining pipeline and confidence intervals.',
    impact: '30% improvement in forecast accuracy, enabled data-driven budget planning, and identified $800k revenue opportunity.',
    tags: ['Python', 'XGBoost', 'Prophet', 'Pandas', 'Power BI'],
    github: 'https://github.com/mateusdspro/revenue-forecasting',
    featured: false
  },
  {
    id: '6',
    title: 'Customer 360 Platform',
    subtitle: 'Unified customer data hub',
    problem: 'Customer data scattered across 15+ systems, preventing personalized marketing and causing duplicate efforts.',
    solution: 'Built centralized data warehouse with dbt transformations, customer scoring models, and real-time dashboards.',
    impact: 'Unified 2M+ customer profiles, improved marketing ROI by 45%, and enabled cross-sell campaigns generating $3M revenue.',
    tags: ['SQL', 'dbt', 'Python', 'Scoring', 'Dashboard'],
    github: 'https://github.com/mateusdspro/customer-360',
    featured: false
  }
];

export const getFeaturedProjects = (): Project[] => {
  return projectsData.filter(project => project.featured);
};

export const getAllProjects = (): Project[] => {
  return projectsData;
};

export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find(project => project.id === id);
};








