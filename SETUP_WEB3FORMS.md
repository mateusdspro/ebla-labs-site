# 🚀 **CONFIGURAR WEB3FORMS - PASSO A PASSO**

## ⏱️ **TEMPO TOTAL: 10 MINUTOS**

---

## **ETAPA 1: CRIAR CONTA (2 min)**

### **1.1 Acessar o site:**
```
https://web3forms.com
```

### **1.2 Fazer login:**
- Clique: **"Get Started"** ou **"Sign In"**
- Escolha: **"Continue with Google"** ou **"Continue with GitHub"**
- Autorize o acesso

### **1.3 Confirmar email:**
- Verifique sua caixa de entrada
- Clique no link de confirmação

✅ **Conta criada!**

---

## **ETAPA 2: CRIAR FORMULÁRIO DE NEWSLETTER (3 min)**

### **2.1 No dashboard:**
1. Clique: **"Create New Form"** (ou **"+ New Form"**)

### **2.2 Configurar formulário:**

| Campo | Valor |
|-------|-------|
| **Form Name** | `Ebla Labs - Newsletter` |
| **Email Notification** | `mateus.dspro@gmail.com` |
| **Success URL** | `https://eblalabs.com/?newsletter=success` |
| **Spam Filter** | ✅ Enabled |
| **reCAPTCHA** | ✅ Enabled (ou Honeypot) |

### **2.3 Salvar formulário:**
- Clique: **"Create Form"** ou **"Save"**

### **2.4 COPIAR ACCESS KEY:**
```
Exemplo: a1b2c3d4-5678-90ab-cdef-1234567890ab
```

⚠️ **IMPORTANTE:** Guarde esta key, você vai usar agora!

---

## **ETAPA 3: CRIAR FORMULÁRIO DE CONTATO (3 min)**

### **3.1 Repetir processo:**
1. Clique: **"+ New Form"** novamente

### **3.2 Configurar formulário:**

| Campo | Valor |
|-------|-------|
| **Form Name** | `Ebla Labs - Contact` |
| **Email Notification** | `mateus.dspro@gmail.com` |
| **Success URL** | `https://eblalabs.com/portfolio?contact=success` |
| **Spam Filter** | ✅ Enabled |
| **reCAPTCHA** | ✅ Enabled (ou Honeypot) |

### **3.3 Salvar e COPIAR segunda ACCESS KEY**

✅ **Agora você tem 2 Access Keys!**

---

## **ETAPA 4: ADICIONAR KEYS NO CÓDIGO (2 min)**

### **4.1 Newsletter - Blog.tsx:**

📁 **Arquivo:** `mateus-site/src/pages/Blog.tsx`

🔍 **Buscar linha ~280:** (Cmd/Ctrl + F: `YOUR_WEB3FORMS_ACCESS_KEY_HERE`)

**ANTES:**
```typescript
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />
```

**DEPOIS:**
```typescript
<input type="hidden" name="access_key" value="a1b2c3d4-5678-90ab-cdef-1234567890ab" />
```
*(Use sua key real da Newsletter)*

---

### **4.2 Contato - Portfolio.tsx:**

📁 **Arquivo:** `mateus-site/src/pages/Portfolio.tsx`

🔍 **Buscar linha ~432:** (Cmd/Ctrl + F: `YOUR_WEB3FORMS_ACCESS_KEY_HERE`)

**ANTES:**
```typescript
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />
```

**DEPOIS:**
```typescript
<input type="hidden" name="access_key" value="xyz789-abcd-1234-efgh-567890ijklmn" />
```
*(Use sua key real do Contato)*

---

### **4.3 Salvar os arquivos:**
- `Cmd + S` (Mac) ou `Ctrl + S` (Windows)

---

## **ETAPA 5: TESTAR FORMULÁRIOS (+ fazer commit)**

### **5.1 Testar localmente:**

```bash
# No terminal:
cd /Users/mateusribeiro/Desktop/mateus.sitepro/mateus-site
npm start
```

### **5.2 Testar Newsletter:**
1. Abrir: `http://localhost:3000`
2. Rolar até: Seção "Newsletter"
3. Preencher nome e email
4. Clicar: **"Inscrever-se"**
5. ✅ Você deve receber um email!

### **5.3 Testar Contato:**
1. Abrir: `http://localhost:3000/portfolio`
2. Rolar até: Seção "Contact"
3. Preencher nome, email e mensagem
4. Clicar: **"Send Message"**
5. ✅ Você deve receber um email!

---

## **ETAPA 6: SALVAR NO GIT**

```bash
git add .
git commit -m "feat: configurar formulários Web3Forms"
git push origin main
```

---

## ✅ **PRONTO! FORMULÁRIOS FUNCIONANDO!**

---

## 📧 **COMO FUNCIONA AGORA:**

### **Quando alguém se inscreve na Newsletter:**
1. Dados são enviados para Web3Forms
2. Você recebe email instantâneo
3. Dados ficam salvos no dashboard Web3Forms

### **Quando alguém envia uma mensagem:**
1. Dados são enviados para Web3Forms
2. Você recebe email instantâneo com nome, email e mensagem
3. Dados ficam salvos no dashboard Web3Forms

---

## 📊 **VER MENSAGENS NO DASHBOARD:**

1. Acesse: https://web3forms.com/dashboard
2. Clique no formulário (Newsletter ou Contact)
3. Veja todas as submissões
4. Exporte para CSV se quiser

---

## 🎯 **EXEMPLO DE EMAIL QUE VOCÊ VAI RECEBER:**

### **Newsletter:**
```
From: noreply@web3forms.com
Subject: Nova inscrição na Newsletter - Ebla Labs

Name: João Silva
Email: joao@example.com
Submitted at: 2025-11-22 14:30:00
```

### **Contato:**
```
From: noreply@web3forms.com
Subject: Novo contato via Portfolio - Ebla Labs

Name: Maria Santos
Email: maria@example.com
Message: Gostaria de saber mais sobre seus serviços de AI...
Submitted at: 2025-11-22 15:45:00
```

---

## 🔒 **SEGURANÇA:**

✅ **Spam Protection** - Honeypot e reCAPTCHA ativados  
✅ **Rate Limiting** - Previne abuse  
✅ **SSL/HTTPS** - Dados criptografados  
✅ **GDPR Compliant** - Sem armazenamento de dados sensíveis  

---

## 💰 **CUSTO:**

- ✅ **Grátis:** Até 250 submissões/mês
- Se precisar mais: $5/mês para 1.000 submissões

---

## 🆘 **PROBLEMAS COMUNS:**

### **"Access key inválida"**
✅ Verificar se copiou a key completa  
✅ Verificar se não tem espaços extras  
✅ Gerar nova key no dashboard

### **"Não recebi o email"**
✅ Verificar pasta de spam  
✅ Verificar se o email está correto no dashboard  
✅ Aguardar 1-2 minutos (pode ter delay)

### **"Formulário não envia"**
✅ Verificar conexão com internet  
✅ Abrir console do navegador (F12) para ver erros  
✅ Testar em navegador diferente

---

## 🎉 **TUDO CONFIGURADO!**

Agora você tem:
- ✅ Formulário de Newsletter funcionando
- ✅ Formulário de Contato funcionando
- ✅ Notificações por email
- ✅ Dashboard para ver todas as submissões

**Próximo passo:** Começar a publicar artigos e notícias! 📝

Veja: `BACKEND_GUIDE.md` para saber como.

---

## 📞 **SUPORTE WEB3FORMS:**

- 📧 Email: support@web3forms.com
- 📚 Docs: https://docs.web3forms.com
- 💬 Discord: https://discord.gg/web3forms

