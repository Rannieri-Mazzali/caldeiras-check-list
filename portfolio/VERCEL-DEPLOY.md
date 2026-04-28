# 🚀 DEPLOY NO VERCEL - GUIA PASSO A PASSO

## ⚠️ ANTES DE COMEÇAR

Certifique-se de que:
- ✅ Você editou os preços em `config/plans.ts`
- ✅ Você testou localmente com `npm run dev`
- ✅ Você compilou com `npm run build` (sem erros)
- ✅ Seu código está no GitHub

---

## 🔑 PASSO 1: Prepare seu Repositório Git

### A. Inicialize Git (se não tiver)

```bash
git init
git add .
git commit -m "Portfólio Caldeiras inicial"
```

### B. Crie Repositório no GitHub

1. Vá para [github.com/new](https://github.com/new)
2. Crie um novo repositório
3. Siga as instruções para conectar seu repositório local

### C. Push para GitHub

```bash
git remote add origin https://github.com/SEUSUSERNAME/caldeiras-portfolio.git
git branch -M main
git push -u origin main
```

---

## 🌐 PASSO 2: Crie Conta no Vercel

1. Vá para [vercel.com](https://vercel.com)
2. Clique em "Sign up"
3. Escolha: "Continue with GitHub"
4. Autorize o Vercel a acessar seu GitHub
5. Pronto! Você está logado

---

## 📦 PASSO 3: Deploy do Projeto

### Opção A: Usando Dashboard Vercel (Recomendado)

1. Acesse [vercel.com/dashboard](https://vercel.com/dashboard)
2. Clique em "Add New..." → "Project"
3. Selecione seu repositório
4. Você verá a configuração automática

**Configuração Importante:**

```
Framework Preset: Next.js
Root Directory: ./portfolio    ⭐ ISTO É IMPORTANTE!
```

5. Clique em "Deploy"
6. Aguarde (leva 2-5 minutos)
7. ✅ Pronto! Você receberá uma URL como:
   `seu-projeto.vercel.app`

### Opção B: Usando CLI Vercel

```bash
# 1. Instale Vercel CLI
npm install -g vercel

# 2. Na pasta raiz do projeto
vercel

# 3. Responda as perguntas:
#    - Link to existing project? → No
#    - What's your project's name? → caldeiras-portfolio
#    - In which directory is your code? → ./portfolio
#    - Want to modify these settings? → No

# 4. Aguarde o deploy
# 5. ✅ Pronto! URL será mostrada
```

### Opção C: Usando Script Deploy

Windows:
```bash
cd portfolio
deploy.bat
```

Mac/Linux:
```bash
cd portfolio
bash deploy.sh
```

---

## ⚙️ CONFIGURAÇÕES IMPORTANTES NO VERCEL

### Variáveis de Ambiente (Opcional)

Se você quiser adicionar variáveis:

1. No Dashboard Vercel → Seu Projeto
2. Settings → Environment Variables
3. Adicione:
   ```
   NEXT_PUBLIC_API_URL = https://api.caldeiras.com
   ```

### Domínio Customizado (Opcional)

1. Dashboard → Seu Projeto
2. Settings → Domains
3. Adicione seu domínio customizado
4. Configure DNS conforme instruções

---

## ✅ DEPOIS DO DEPLOY

### 1. Verifique a URL

A URL será algo como:
```
https://seu-projeto.vercel.app
```

Ou seu domínio customizado:
```
https://caldeiras.com
```

### 2. Teste em Diferentes Dispositivos

- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

### 3. Compartilhe com seu Time

```
Seu portfólio está online em:
https://seu-projeto.vercel.app
```

---

## 🔄 FAZER ALTERAÇÕES DEPOIS DO DEPLOY

### Se você editar algo:

1. Edite o arquivo (ex: `config/plans.ts`)
2. Commit e push para GitHub:
   ```bash
   git add .
   git commit -m "Atualiza preços"
   git push
   ```
3. Vercel fará deploy automático
4. Aguarde 1-2 minutos
5. ✅ Seu site estará atualizado

---

## 🐛 TROUBLESHOOTING

### Erro: "Build failed"

**Solução:**
```bash
# Limpe cache e refaça
cd portfolio
npm run build
```

Se ainda der erro, verifique:
- ✅ Root Directory no Vercel é `./portfolio`
- ✅ Node version compatível (12 ou maior)

### Erro: "Cannot find module"

**Solução:**
```bash
cd portfolio
npm install
npm run build
```

### Animação 3D não aparece

**Solução:**
Verifique no console do navegador (F12) se há erros de Three.js.

### Preços não aparecem

**Solução:**
- Verifique se você editou `config/plans.ts`
- Rode `npm run build` localmente
- Faça push para GitHub novamente

---

## 📊 MONITORAR SEU SITE

### Analytics (Gratuito)

1. Dashboard Vercel
2. Seu Projeto
3. Analytics
4. Veja visitantes, performance, etc

### Logs

1. Dashboard Vercel
2. Seu Projeto
3. Logs
4. Veja erros e avisos

### Performance

1. Dashboard Vercel
2. Seu Projeto
3. Functions
4. Veja tempo de resposta

---

## 🎯 CHECKLIST DEPLOY

- [ ] Git configurado
- [ ] Repositório no GitHub
- [ ] Conta Vercel criada
- [ ] Projeto conectado no Vercel
- [ ] Root Directory: `./portfolio`
- [ ] Deploy iniciado
- [ ] URL recebida
- [ ] Site testado
- [ ] Compartilhado com time

---

## 💡 DICAS FINAIS

✨ **Seu primeiro deploy:**
- Pode levar 5-10 minutos
- Não se preocupe se demorar
- Vercel faz tudo automaticamente

✨ **Atualizações futuras:**
- Apenas faça push para GitHub
- Vercel faz deploy automático
- Não precisa fazer nada manual

✨ **Apoio:**
- Documentação: [vercel.com/docs](https://vercel.com/docs)
- Status: [status.vercel.com](https://status.vercel.com)

---

## 🎉 PARABÉNS!

Seu portfólio profissional está online! 🚀

**Próximos passos:**
1. Compartilhe com potenciais clientes
2. Colha feedback
3. Ajuste conforme necessário
4. Comemore o sucesso! 🥳

---

**Dúvidas?** Releia:
- `COMECE-AQUI.md` - Início rápido
- `CONFIGURACAO.md` - Configurações
- `ARQUITECTURA.md` - Como funciona

**Vercel Deploy do Portfólio Caldeiras - ✅ Completo!**
