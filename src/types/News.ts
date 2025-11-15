export interface News {
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

