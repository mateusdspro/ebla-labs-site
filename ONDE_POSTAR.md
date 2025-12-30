# 📍 **ONDE POSTAR CADA COISA**

## 🎯 **GUIA RÁPIDO DE NAVEGAÇÃO**

---

## 📝 **ARTIGOS (BLOG)**

### **Onde:**
```
mateus-site/src/data/articlesData.ts
```

### **O que editar:**
- Título do artigo (PT + EN)
- Descrição curta (PT + EN)
- Categoria
- Data de publicação
- Tempo de leitura
- Imagem

### **Como testar:**
1. Salvar arquivo
2. Ir para: `http://localhost:3000/articles`
3. Ver o artigo aparecer

---

## 📰 **NOTÍCIAS**

### **Onde:**
```
mateus-site/src/data/newsData.ts
```

### **O que editar:**
- Título da notícia (PT + EN)
- Descrição curta (PT + EN)
- Categoria
- Data de publicação
- Tempo de leitura
- Imagem

### **Como testar:**
1. Salvar arquivo
2. Ir para: `http://localhost:3000/news`
3. Ver a notícia aparecer

---

## 🚀 **PROJETOS (PORTFOLIO)**

### **Onde:**
```
mateus-site/src/data/projectsData.ts
```

### **O que editar:**
- Nome do projeto
- Subtítulo
- Problema que resolve
- Solução implementada
- Impacto/resultados
- Tags de tecnologia
- Link do GitHub

### **Como testar:**
1. Salvar arquivo
2. Ir para: `http://localhost:3000/portfolio`
3. Rolar até "Projects"
4. Ver o projeto aparecer

---

## 🖼️ **IMAGENS**

### **Onde:**
```
mateus-site/public/images/
```

### **Tipos de imagem:**
- `blog1.jpg`, `blog2.jpg` → Artigos
- `news1.jpg`, `news2.jpg` → Notícias
- `project1.jpg`, `project2.jpg` → Projetos
- `imagem.blog1.png` → Banner do blog
- `imagem.artigos.png` → Banner de artigos
- `noticias.png` → Banner de notícias

### **Como adicionar:**
1. Copiar imagem para pasta `public/images/`
2. Referenciar no código: `/images/NOME_DO_ARQUIVO.jpg`

---

## 📧 **CONFIGURAR EMAILS (FORMULÁRIOS)**

### **Newsletter (Blog):**
```
mateus-site/src/pages/Blog.tsx
Linha ~280: Substituir YOUR_WEB3FORMS_ACCESS_KEY_HERE
```

### **Contato (Portfolio):**
```
mateus-site/src/pages/Portfolio.tsx
Linha ~432: Substituir YOUR_WEB3FORMS_ACCESS_KEY_HERE
```

### **Pegar Access Key:**
1. Ir para: https://web3forms.com
2. Criar conta grátis
3. Criar formulário
4. Copiar Access Key
5. Colar no código

---

## 🔧 **TRADUÇÕES (TEXTOS FIXOS)**

### **Onde:**
```
mateus-site/src/context/LanguageContext.tsx
```

### **O que editar:**
- Títulos de seções
- Botões
- Mensagens
- Labels de formulário
- Textos do menu

### **Como funciona:**
- Todas as traduções ficam em um só lugar
- Você edita tanto PT quanto EN
- O site muda automaticamente quando o usuário troca o idioma

---

## 📊 **ESTRUTURA VISUAL**

```
📁 mateus-site/
├── 📂 src/
│   ├── 📂 data/
│   │   ├── 📄 articlesData.ts      ← ARTIGOS AQUI
│   │   ├── 📄 newsData.ts          ← NOTÍCIAS AQUI
│   │   └── 📄 projectsData.ts      ← PROJETOS AQUI
│   │
│   ├── 📂 pages/
│   │   ├── 📄 Blog.tsx             ← Newsletter (Access Key)
│   │   ├── 📄 Portfolio.tsx        ← Contato (Access Key)
│   │   ├── 📄 Articles.tsx         ← Página de Artigos
│   │   └── 📄 News.tsx             ← Página de Notícias
│   │
│   └── 📂 context/
│       └── 📄 LanguageContext.tsx  ← TRADUÇÕES AQUI
│
└── 📂 public/
    └── 📂 images/
        ├── 🖼️ blog1.jpg            ← IMAGENS AQUI
        ├── 🖼️ news1.jpg
        └── 🖼️ project1.jpg
```

---

## ⚡ **AÇÕES RÁPIDAS**

### **Quero publicar um artigo:**
1. Adicionar imagem em `public/images/`
2. Editar `articlesData.ts`
3. Salvar
4. Testar
5. Commit & push

### **Quero publicar uma notícia:**
1. Adicionar imagem em `public/images/`
2. Editar `newsData.ts`
3. Salvar
4. Testar
5. Commit & push

### **Quero adicionar um projeto:**
1. Editar `projectsData.ts`
2. Salvar
3. Testar
4. Commit & push

### **Quero mudar um texto fixo:**
1. Editar `LanguageContext.tsx`
2. Salvar
3. Testar
4. Commit & push

### **Quero configurar os emails:**
1. Criar conta em Web3Forms
2. Pegar Access Key
3. Colar em `Blog.tsx` (newsletter)
4. Colar em `Portfolio.tsx` (contato)
5. Salvar
6. Testar
7. Commit & push

---

## 🎯 **RESUMO ULTRA-RÁPIDO**

| O QUE | ARQUIVO |
|-------|---------|
| Artigos | `src/data/articlesData.ts` |
| Notícias | `src/data/newsData.ts` |
| Projetos | `src/data/projectsData.ts` |
| Imagens | `public/images/` |
| Emails | `src/pages/Blog.tsx` e `Portfolio.tsx` |
| Traduções | `src/context/LanguageContext.tsx` |

---

## ✅ **ORDEM DE PRIORIDADE**

1. ✅ **PRIMEIRO:** Configurar Web3Forms (emails)
2. ✅ **DEPOIS:** Adicionar imagens em `public/images/`
3. ✅ **DEPOIS:** Editar conteúdo nos arquivos `.ts`
4. ✅ **DEPOIS:** Testar localmente
5. ✅ **DEPOIS:** Fazer deploy

---

## 🆘 **AINDA COM DÚVIDA?**

- 📘 Leia: `BACKEND_GUIDE.md` (guia completo)
- 📝 Veja: `EXEMPLO_NOVO_ARTIGO.md` (passo a passo prático)
- 📍 Consulte: Este arquivo (referência rápida)

---

**🚀 Você tem tudo que precisa para começar!**








