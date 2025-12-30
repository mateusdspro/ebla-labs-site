# 📐 Guia de Dimensões de Imagens - Blog Ebla Labs

## 🎯 Dimensões Recomendadas para Cada Tipo de Imagem

### **1. Imagens de Artigos (Articles)**

#### **Formato Ideal:**
- **Largura**: 1200px
- **Altura**: 675px  
- **Aspect Ratio**: 16:9
- **Formato**: PNG ou JPG
- **Qualidade**: 80-90% (JPG) ou PNG otimizado
- **Peso**: Máx 300KB

#### **Onde é usada:**
- ✅ Página de listagem de artigos (`/articles`)
- ✅ Cards de artigos featured (destaque)
- ✅ Imagem principal do artigo individual
- ✅ Preview em compartilhamento social (OpenGraph)

#### **CSS Aplicado:**
```css
aspect-ratio: 16 / 9;
object-fit: cover;
```

**O que isso significa:**
- A imagem sempre manterá proporção 16:9
- Se a imagem for maior/menor, será cortada/ajustada automaticamente
- Alinhamento: centralmente

---

### **2. Imagens de Notícias (News)**

#### **Formato Ideal:**
- **Largura**: 1200px
- **Altura**: 675px
- **Aspect Ratio**: 16:9
- **Formato**: PNG ou JPG
- **Qualidade**: 80-90%
- **Peso**: Máx 300KB

#### **Onde é usada:**
- ✅ Página de notícias (`/news`)
- ✅ Cards de notícias featured
- ✅ Preview social

---

### **3. Imagem de Perfil**

#### **Formato Ideal:**
- **Dimensões**: 512x512px (quadrado)
- **Aspect Ratio**: 1:1
- **Formato**: PNG (com fundo transparente preferível)
- **Qualidade**: Alta (90-95%)
- **Peso**: Máx 150KB

#### **Onde é usada:**
- ✅ Hero section da home
- ✅ About section
- ✅ Schema markup (autor)

#### **Arquivos atuais:**
- `foto.perfil.mateus.semfundo.png` (Hero)
- `perfil2.png` (About section)

---

### **4. Imagens de Projetos (Portfolio)**

#### **Formato Ideal:**
*Nota: Atualmente os projetos não têm imagens, apenas texto. Se quiser adicionar:*

- **Largura**: 800px
- **Altura**: 450px
- **Aspect Ratio**: 16:9
- **Formato**: PNG (para screenshots de apps)
- **Qualidade**: Alta

---

## 🖼️ Imagens do Artigo Mercurius.Vox

### **Nome do Arquivo:**
```
artigo1.png
```

### **Localização:**
```
/public/images/artigo1.png
```

### **Dimensões Recomendadas:**
- **1200 x 675px** (16:9)
- **Formato**: PNG ou JPG
- **Conteúdo sugerido**:
  - Screenshot do Mercurius.Vox funcionando
  - Código do terminal
  - Interface do macOS com o indicador visual
  - Logo/nome do app
  - Badge "Stop Paying. Start Building #1"

### **Exemplos de Composição:**

**Opção 1: Screenshot Puro**
```
┌──────────────────────────────────────┐
│                                      │
│   🎙️ Mercurius.Vox                  │
│                                      │
│   [Terminal com output colorido]    │
│   [Indicador visual flutuante]      │
│                                      │
│   100% Offline | 100% Free          │
│                                      │
└──────────────────────────────────────┘
```

**Opção 2: Comparação Visual**
```
┌──────────────────────────────────────┐
│  Wispr Flow           Mercurius.Vox │
│  💰 $20/mês    VS     ✅ $0/mês     │
│  ☁️ Online             💻 Offline    │
│  🔒 Privado?           ✅ 100% Privado│
└──────────────────────────────────────┘
```

**Opção 3: Hero Visual**
```
┌──────────────────────────────────────┐
│                                      │
│      🎙️ MERCURIUS.VOX                │
│                                      │
│   Stop Paying. Start Building #1    │
│                                      │
│   [MacBook com terminal rodando]    │
│                                      │
└──────────────────────────────────────┘
```

---

## 🎨 Como Criar a Imagem Perfeita

### **Ferramentas Recomendadas:**

1. **Figma** (Gratuito)
   - Criar um frame 1200x675px
   - Adicionar screenshots
   - Adicionar texto/badges
   - Exportar como PNG

2. **Canva** (Gratuito)
   - Template "YouTube Thumbnail" (1280x720) é próximo
   - Ajustar para 1200x675
   - Adicionar elementos

3. **Photoshop / GIMP**
   - Criar documento 1200x675px
   - 72 DPI (web)
   - RGB color mode

### **Checklist de Qualidade:**

- [ ] Dimensões: 1200x675px exato
- [ ] Aspect ratio: 16:9
- [ ] Peso: Menos de 300KB
- [ ] Formato: PNG ou JPG
- [ ] Texto legível (se houver)
- [ ] Cores contrastantes
- [ ] Sem pixelização
- [ ] Otimizado para web

---

## 🔧 Como Otimizar Imagens

### **Online (Grátis):**
1. **TinyPNG** (https://tinypng.com/)
   - Upload da imagem
   - Reduz até 70% sem perda visual
   - Download otimizado

2. **Squoosh** (https://squoosh.app/)
   - Google tool
   - Controle total sobre compressão
   - Comparação lado a lado

### **Linha de Comando:**
```bash
# ImageMagick - Redimensionar
magick convert artigo1-original.png -resize 1200x675^ -gravity center -extent 1200x675 artigo1.png

# ImageMagick - Otimizar
magick convert artigo1.png -quality 85 artigo1-optimized.jpg
```

---

## 📋 Status Atual das Imagens

### **Artigos Existentes:**
```
├── blog1.jpg          [?x?] - Artigo RAG Systems
├── blog2.jpg          [?x?] - Artigo ML Pipelines  
├── blog3.jpg          [?x?] - Artigo Data Strategy
└── imagem.blog1.png   [?x?] - (Temporária)
```

### **Artigo Mercurius.Vox:**
```
📝 PENDENTE: artigo1.png
   Dimensões: 1200x675px
   Localização: /public/images/artigo1.png
```

### **Outras Imagens:**
```
✅ foto.perfil.mateus.semfundo.png  - Foto de perfil (hero)
✅ perfil2.png                       - Foto about section
✅ imagem.artigos.png                - Hero da página articles
✅ noticias.png                      - Hero da página news
```

---

## 🚀 Ação Necessária

### **Para o Artigo Mercurius.Vox:**

1. **Criar `artigo1.png`**
   - Dimensões: 1200 x 675px
   - Conteúdo: Screenshot do app ou composição visual
   - Salvar em: `/public/images/artigo1.png`

2. **Alternativa Rápida** (se não tiver a imagem agora):
   - Usar `imagem.blog1.png` temporariamente
   - Ou criar placeholder no Figma/Canva rapidamente

---

## 💡 Dicas de Design

### **O Que Funciona Bem:**
- ✅ Screenshots reais do produto
- ✅ Código com syntax highlighting
- ✅ Comparações lado a lado (Before/After)
- ✅ Números grandes ($240/ano economizados)
- ✅ Badges e tags visuais
- ✅ Cores da brand (Cyan + Violet)

### **O Que Evitar:**
- ❌ Imagens genéricas de stock
- ❌ Texto pequeno (ilegível em miniatura)
- ❌ Muitos elementos (confuso)
- ❌ Cores que não combinam com o tema dark
- ❌ Logos/marcas de terceiros sem permissão

---

## 🎯 Resultado Esperado

Depois de adicionar `artigo1.png`:

✅ **Na página /articles:**
- Cards alinhados perfeitamente
- Todas as imagens com mesmo aspect ratio 16:9
- Hover suave com zoom
- Loading rápido

✅ **Na página individual do artigo:**
- Imagem full-width com bordas arredondadas
- Shadow para profundidade
- Responsiva em mobile

✅ **No compartilhamento social:**
- Preview bonito no LinkedIn, Twitter, Facebook
- Imagem aparece corretamente (1200x675 é ideal para OpenGraph)

---

## 📞 Próximos Passos

1. **Criar/adicionar `artigo1.png`** em `/public/images/`
2. **Verificar no navegador** que a imagem está alinhada
3. **Testar compartilhamento** nas redes sociais
4. **Otimizar outras imagens** (blog1.jpg, blog2.jpg, blog3.jpg) se necessário

---

**Criado em**: 30/12/2024  
**Status**: ⏳ Aguardando imagem `artigo1.png`  
**Código**: ✅ Já configurado para usar a imagem corretamente

