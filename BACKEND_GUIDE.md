# 📘 **GUIA DO BACKEND - EBLA LABS**

## 🎯 **VISÃO GERAL**

Seu site está configurado com uma estrutura simples e profissional:

- ✅ **Formulários:** Web3Forms (contatos vão direto para seu email)
- ✅ **Artigos:** Arquivos `.ts` (você edita direto no código)
- ✅ **Notícias:** Arquivos `.ts` (você edita direto no código)
- ✅ **Projetos:** Arquivos `.ts` (você edita direto no código)

---

## 📧 **1. CONFIGURAR FORMULÁRIOS (WEB3FORMS)**

### **Passo 1: Criar conta Web3Forms**

1. Acesse: https://web3forms.com
2. Clique: **"Get Started Free"**
3. Faça login com Google ou GitHub
4. Confirme seu email

### **Passo 2: Obter Access Key**

1. No dashboard, clique: **"Create New Form"**
2. Digite: `Ebla Labs - Newsletter`
3. Email de destino: `mateus.dspro@gmail.com`
4. Copie a **Access Key** (ex: `a1b2c3d4-5678-90ab-cdef-1234567890ab`)

### **Passo 3: Repetir para Contato**

1. Clique: **"Create New Form"**
2. Digite: `Ebla Labs - Contact`
3. Email de destino: `mateus.dspro@gmail.com`
4. Copie a segunda **Access Key**

### **Passo 4: Adicionar as Keys no Código**

#### **Newsletter (Blog.tsx):**

```typescript
// Substituir esta linha:
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />

// Por:
<input type="hidden" name="access_key" value="SUA_KEY_AQUI" />
```

**Caminho do arquivo:** `mateus-site/src/pages/Blog.tsx` (linha ~280)

#### **Contato (Portfolio.tsx):**

```typescript
// Substituir esta linha:
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />

// Por:
<input type="hidden" name="access_key" value="SUA_KEY_AQUI" />
```

**Caminho do arquivo:** `mateus-site/src/pages/Portfolio.tsx` (linha ~432)

---

## 📝 **2. POSTAR NOVOS ARTIGOS**

### **Onde postar:**

📁 **Arquivo:** `mateus-site/src/data/articlesData.ts`

### **Como adicionar:**

1. Abra o arquivo `articlesData.ts`
2. Copie um artigo existente
3. Cole antes do `];` final
4. Edite os campos:

```typescript
{
  id: '4', // Próximo número sequencial
  slug: 'meu-novo-artigo', // URL amigável (sem espaços, acentos)
  title: {
    en: 'My New Article',
    pt: 'Meu Novo Artigo'
  },
  excerpt: {
    en: 'Short description in English...',
    pt: 'Descrição curta em português...'
  },
  image: '/images/blog4.jpg', // Adicionar imagem em mateus-site/public/images/
  category: {
    en: '✨ Generative AI',
    pt: '✨ IA Generativa'
  },
  date: '2025-11-22', // Formato: YYYY-MM-DD
  readTime: '7', // Minutos de leitura
  featured: true, // true = destaque, false = lista normal
  author: 'Mateus Ribeiro'
},
```

### **Adicionar imagem:**

1. Adicione a imagem do artigo em: `mateus-site/public/images/`
2. Exemplo: `blog4.jpg`
3. Referência no código: `/images/blog4.jpg`

---

## 📰 **3. POSTAR NOTÍCIAS**

### **Onde postar:**

📁 **Arquivo:** `mateus-site/src/data/newsData.ts`

### **Como adicionar:**

Siga o mesmo processo dos artigos, mas no arquivo `newsData.ts`:

```typescript
{
  id: '4',
  slug: 'nova-noticia-ia',
  title: {
    en: 'New AI Breakthrough',
    pt: 'Nova Descoberta em IA'
  },
  excerpt: {
    en: 'Brief description...',
    pt: 'Breve descrição...'
  },
  image: '/images/news4.jpg',
  category: {
    en: '🚀 Launches',
    pt: '🚀 Lançamentos'
  },
  date: '2025-11-22',
  readTime: '5',
  featured: true,
  author: 'Equipe Ebla Labs'
},
```

---

## 🚀 **4. ATUALIZAR PROJETOS**

### **Onde atualizar:**

📁 **Arquivo:** `mateus-site/src/data/projectsData.ts`

### **Como adicionar:**

```typescript
{
  id: '7',
  title: 'Nome do Projeto',
  subtitle: 'Breve descrição',
  problem: 'Qual problema resolve...',
  solution: 'Como você resolveu...',
  impact: 'Resultados alcançados...',
  tags: ['Python', 'AI', 'Cloud'],
  github: 'https://github.com/mateusdspro/projeto',
  featured: true // Aparece nos 3 primeiros
},
```

**Nota:** Projetos ainda usam tradução do `LanguageContext.tsx` para manter compatibilidade.

---

## 🔄 **5. FLUXO DE PUBLICAÇÃO**

### **Quando você adiciona/edita conteúdo:**

```bash
1. Editar arquivo .ts
2. Salvar (Cmd + S)
3. Aguardar recompilação (automática)
4. Testar localmente (localhost:3000)
5. Fazer commit no Git
6. Deploy no Vercel (automático)
```

---

## 📊 **6. VER MENSAGENS RECEBIDAS**

### **Web3Forms Dashboard:**

1. Acesse: https://web3forms.com/dashboard
2. Clique no formulário (Newsletter ou Contact)
3. Veja todas as submissões
4. Exporte para CSV/Excel se quiser

### **Notificações por Email:**

- Você receberá um email instantâneo em `mateus.dspro@gmail.com`
- Cada submissão virá com todos os dados preenchidos

---

## 🎨 **7. ESTRUTURA DE CATEGORIAS**

### **Artigos:**
- ✨ IA Generativa / Generative AI
- 🤖 Machine Learning / Machine Learning
- 📊 Ciência de Dados / Data Science
- ⚙️ MLOps / MLOps
- 📈 Business Intelligence / Business Intelligence

### **Notícias:**
- 🚀 Lançamentos / Launches
- 🔬 Pesquisa / Research
- 💡 Tendências / Trends
- 🏆 Conquistas / Achievements

---

## ⚡ **8. DICAS IMPORTANTES**

### ✅ **SEMPRE:**
- Adicione conteúdo bilíngue (EN e PT)
- Use slugs únicos (sem acentos, minúsculas, com hífens)
- Coloque imagens em `public/images/`
- Teste antes de fazer deploy

### ❌ **NUNCA:**
- Deletar as vírgulas entre objetos
- Usar IDs duplicados
- Esquecer de traduzir para ambos os idiomas
- Deixar campos vazios

---

## 🆘 **9. TROUBLESHOOTING**

### **Problema: Artigo não aparece**
✅ Verificar se o ID é único  
✅ Verificar se a vírgula está correta  
✅ Checar se o arquivo foi salvo  
✅ Reiniciar o servidor (`npm start`)

### **Problema: Imagem não carrega**
✅ Verificar se a imagem está em `public/images/`  
✅ Verificar caminho: `/images/nome.jpg`  
✅ Verificar extensão (jpg, png, webp)

### **Problema: Formulário não envia**
✅ Verificar se a Access Key foi adicionada  
✅ Testar conexão com internet  
✅ Verificar email de destino no Web3Forms

---

## 📞 **10. PRÓXIMOS PASSOS (OPCIONAL)**

Se no futuro você quiser simplificar ainda mais, podemos:

1. **Sanity.io CMS** - Interface visual para postar (como WordPress)
2. **Google Sheets** - Postar direto de uma planilha
3. **Notion API** - Escrever no Notion e sincronizar

**Por enquanto, essa estrutura é:**
- ✅ Simples de usar
- ✅ Sem custo mensal
- ✅ Totalmente sob seu controle
- ✅ Fácil de fazer backup

---

## 🎯 **RESUMO RÁPIDO**

| O QUE | ONDE | COMO |
|-------|------|------|
| **Novo Artigo** | `articlesData.ts` | Copiar, colar, editar |
| **Nova Notícia** | `newsData.ts` | Copiar, colar, editar |
| **Novo Projeto** | `projectsData.ts` | Copiar, colar, editar |
| **Imagens** | `public/images/` | Adicionar JPG/PNG |
| **Formulários** | Web3Forms Dashboard | Ver submissões |
| **Deploy** | Vercel | Automático após commit |

---

## ✅ **CHECKLIST ANTES DE PUBLICAR**

- [ ] Conteúdo em PT e EN
- [ ] Imagem adicionada
- [ ] Slug único
- [ ] Data correta
- [ ] Vírgulas no lugar certo
- [ ] Salvo e testado localmente
- [ ] Commit feito
- [ ] Funcionando no site

---

**🚀 Pronto! Agora você tem controle total do seu conteúdo!**

---

**Dúvidas?** Releia as seções específicas ou peça ajuda.








