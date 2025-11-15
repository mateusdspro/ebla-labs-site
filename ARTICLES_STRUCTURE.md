# 📚 Estrutura da Página de Artigos

## 🎯 Visão Geral

A página de Artigos foi criada seguindo o design minimalista e intelectual do Ebla Labs, com foco em navegação intuitiva e experiência visual consistente.

## 📁 Arquivos Criados

### 1. **src/data/articlesData.ts**
- Contém a interface `Article` e array `articlesData[]`
- 8 artigos pré-configurados (3 em destaque + 5 regulares)
- Funções helper: `getFeaturedArticles()`, `getAllArticles()`, `getArticleBySlug()`

### 2. **src/pages/Articles.tsx**
- Página principal de artigos
- Hero minimalista com ícone 📚
- Seção "Artigos em Destaque" (grid 3 colunas)
- Seção "Todos os Artigos" (lista cronológica)

### 3. **CSS Adicionado ao index.css**
- Estilos completos para `.articles-hero`, `.articles-featured`, `.articles-list`
- Cards com hover effects e animações
- Responsivo para mobile, tablet e desktop

## 🎨 Design

### Hero Section
- **Título**: "Artigos"
- **Subtítulo**: "Explorando IA, Ciência de Dados e o Futuro da Inteligência"
- **Descrição**: Texto explicativo sobre o propósito do blog
- **Ícone**: 📚 com animação float

### Artigos em Destaque
- Grid horizontal com 3 colunas
- Imagem 16:9 com zoom no hover
- Categoria tag no topo da imagem
- Título, excerpt, metadados (data + tempo de leitura)
- Hover: elevação + borda gradiente

### Todos os Artigos
- Layout vertical com imagem à esquerda
- Categoria + tempo de leitura no header
- Título + excerpt (2 linhas max)
- Data + autor no footer
- Hover: elevação suave

## 🔗 Roteamento

### URLs
- `/artigos` → Página principal com todos artigos
- `/artigos/[slug]` → Artigo individual (a ser implementado)

### Navegação
- **Navbar**: Link "Artigos" entre Home e About Us
- **Blog Home**: Botão "Ver Todos os Artigos →" após artigos em destaque
- **Cards**: Todos clicáveis levando para `/artigos/[slug]`

## 📊 Dados dos Artigos

Cada artigo tem:
```typescript
{
  id: string
  slug: string (URL-friendly)
  title: string
  excerpt: string
  image: string (path para /images/)
  category: string (com emoji)
  date: string (YYYY-MM-DD)
  readTime: string (ex: "8 min")
  featured: boolean
  author: string
}
```

## 🎯 Categorias Disponíveis

- ✨ Generative AI
- ⚙️ MLOps
- 💡 Data Strategy
- 🔄 Data Engineering
- 🐍 Python
- 📊 Analytics
- ☁️ Cloud
- 🔮 Forecasting

## 🚀 Próximos Passos

### Fase 2 (Opcional)
1. **Página de Artigo Individual** (`/artigos/[slug]`)
   - Layout artigo completo
   - Artigos relacionados
   - Navegação anterior/próximo

2. **Filtros por Categoria**
   - Menu dropdown ou tabs
   - URL: `/artigos/categoria/ai`

3. **Busca de Artigos**
   - Integrar com o input do Navbar
   - Filtro por título/conteúdo

4. **Paginação**
   - Se houver >10 artigos

## 💡 Como Adicionar Novos Artigos

1. Abra `src/data/articlesData.ts`
2. Adicione novo objeto ao array `articlesData`:

```typescript
{
  id: '9',
  slug: 'seu-artigo-aqui',
  title: 'Título do Artigo',
  excerpt: 'Breve descrição...',
  image: '/images/blog1.jpg',
  category: '🤖 AI & ML',
  date: '2024-11-15',
  readTime: '7 min',
  featured: false,
  author: 'Mateus Ribeiro'
}
```

3. Artigos são automaticamente ordenados por data (mais recente primeiro)
4. Use `featured: true` para aparecer na seção de destaque (max 3)

## ✨ Recursos Visuais

- ✅ Animações fade-up no scroll
- ✅ Hover com zoom nas imagens
- ✅ Borda gradiente cyan/blue nos cards
- ✅ Responsivo mobile-first
- ✅ Ícone animado no hero
- ✅ Transições suaves (0.3s ease)
- ✅ Line-clamp para truncar textos longos

## 🎨 Paleta de Cores

Usando as mesmas variáveis CSS do site:
- `var(--cyan)` → #06b6d4
- `var(--blue)` → #3b82f6
- `var(--card)` → Background dos cards
- `var(--border)` → Bordas sutis
- `var(--brand-gradient)` → Gradiente principal

---

**Criado em**: 12 Nov 2024  
**Versão**: 1.0  
**Status**: ✅ Implementado e Funcional

