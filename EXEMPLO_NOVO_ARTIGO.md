# 📝 **EXEMPLO PRÁTICO: ADICIONAR NOVO ARTIGO**

## 🎯 **CENÁRIO**

Você quer publicar um novo artigo sobre "Como escolher a melhor ferramenta de BI".

---

## **PASSO 1: Preparar a imagem**

1. Baixe ou crie uma imagem para o artigo (ex: `business-intelligence-tools.jpg`)
2. Coloque em: `mateus-site/public/images/business-intelligence-tools.jpg`

---

## **PASSO 2: Abrir o arquivo de dados**

📁 **Arquivo:** `mateus-site/src/data/articlesData.ts`

---

## **PASSO 3: Adicionar o novo artigo**

### **ANTES (última linha do arquivo):**

```typescript
  },
]; // <-- Esta é a última linha

export const getFeaturedArticles = () =>
```

### **DEPOIS (adicionar ANTES do `];`):**

```typescript
  },
  {
    id: '4',
    slug: 'escolher-ferramenta-bi',
    title: {
      en: 'How to Choose the Best BI Tool for Your Business',
      pt: 'Como Escolher a Melhor Ferramenta de BI para Seu Negócio'
    },
    excerpt: {
      en: 'A comprehensive guide to selecting the right Business Intelligence tool based on your company size, budget, and technical requirements.',
      pt: 'Um guia completo para selecionar a ferramenta de Business Intelligence certa com base no tamanho da sua empresa, orçamento e requisitos técnicos.'
    },
    image: '/images/business-intelligence-tools.jpg',
    category: {
      en: '📊 Data Science',
      pt: '📊 Ciência de Dados'
    },
    date: '2025-11-22',
    readTime: '10',
    featured: true,
    author: 'Mateus Ribeiro'
  },
]; // <-- Esta é a última linha
```

---

## **PASSO 4: Salvar e testar**

### **No terminal:**

```bash
cd /Users/mateusribeiro/Desktop/mateus.sitepro/mateus-site
npm start
```

### **No navegador:**

1. Acesse: `http://localhost:3000`
2. Clique: **"Artigos"** no menu
3. Veja seu novo artigo aparecer!

---

## **PASSO 5: Fazer commit (salvar no Git)**

```bash
git add .
git commit -m "feat: adicionar artigo sobre ferramentas de BI"
git push origin main
```

---

## **PASSO 6: Deploy automático (Vercel)**

- O Vercel detecta o push e faz deploy automático
- Em ~2 minutos seu artigo estará no ar!

---

## 🎨 **PERSONALIZAÇÕES**

### **Para marcar como NÃO-DESTAQUE:**

```typescript
featured: false, // Aparece apenas em "Todos os Artigos"
```

### **Para mudar a categoria:**

```typescript
category: {
  en: '⚙️ MLOps',
  pt: '⚙️ MLOps'
},
```

### **Categorias disponíveis:**
- ✨ IA Generativa / Generative AI
- 🤖 Machine Learning / Machine Learning
- 📊 Ciência de Dados / Data Science
- ⚙️ MLOps / MLOps
- 📈 Business Intelligence / Business Intelligence

---

## ✅ **CHECKLIST**

- [x] Imagem adicionada em `public/images/`
- [x] ID único (não repetido)
- [x] Slug único (sem acentos, espaços, maiúsculas)
- [x] Título em PT e EN
- [x] Excerpt em PT e EN
- [x] Categoria em PT e EN
- [x] Data no formato YYYY-MM-DD
- [x] ReadTime estimado (minutos)
- [x] Featured definido (true/false)
- [x] Autor definido
- [x] Vírgula no lugar certo
- [x] Arquivo salvo
- [x] Testado localmente
- [x] Commit feito

---

## 🚀 **PRONTO!**

Seu artigo está publicado e disponível para o mundo! 🎉

---

## 💡 **DICA PRO**

Para escrever o conteúdo completo do artigo (não apenas o excerpt), você precisará criar uma página individual. Por enquanto, os artigos são apenas previews que linkam para conteúdo externo ou futuras páginas de artigo.

**No futuro, podemos adicionar:**
- Markdown support para artigos completos
- Editor visual (Sanity.io)
- Comentários
- Compartilhamento social
- Leitura estimada baseada em palavras

Mas por enquanto, essa estrutura já te permite publicar e gerenciar seus artigos de forma profissional! 🚀








