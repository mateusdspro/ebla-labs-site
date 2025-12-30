export interface Article {
  id: string;
  slug: string;
  title: string | {
    en: string;
    pt: string;
  };
  excerpt: string | {
    en: string;
    pt: string;
  };
  image: string;
  category: string | {
    en: string;
    pt: string;
  };
  date: string;
  readTime: string;
  featured: boolean;
  author: string;
  content?: {
    en: string;
    pt: string;
  };
  tags?: string[];
  externalLink?: string;
}








