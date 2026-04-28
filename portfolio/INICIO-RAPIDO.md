# ⚡ INÍCIO RÁPIDO - PORTFÓLIO CALDEIRAS

## 🎯 3 Passos Para Começar

### 1. Editar Valores dos Planos

Abra: **`portfolio/config/plans.ts`**

Procure por `monthlyPrice` e `setupPrice` e **coloque os valores em reais**:

```typescript
monthlyPrice: 99,      // Preço mensal em R$
setupPrice: 500,       // Valor de instalação em R$
```

### 2. Testar Localmente

```bash
cd portfolio
npm install
npm run dev
```

Abra: http://localhost:3001

### 3. Deploy no Vercel

```bash
npm run build
vercel deploy --prod
```

Ou use o script: `deploy.bat` (Windows) ou `deploy.sh` (Mac/Linux)

---

## 📝 Checklist Rápido

- [ ] Editar preços em `config/plans.ts`
- [ ] Editar telefone/email em `src/components/ContactSection.tsx`
- [ ] Testar com `npm run dev`
- [ ] Fazer deploy com `vercel deploy --prod`

---

## 🎨 O Que Foi Criado?

✅ **Portfólio profissional** com tema rústico/caldeira  
✅ **Animação 3D** com caminhões em raio-x  
✅ **Seções**: Benefícios, Tecnologia, Planos, Contato  
✅ **Responsivo**: Mobile, Tablet, Desktop  
✅ **Pronto para Vercel**: Deploy em 1 comando  
✅ **Arquivo de configuração**: Tudo editável em `config/plans.ts`  

---

## 🔧 Edições Comuns

| O que quer fazer? | Onde editar? |
|---|---|
| Mudar preços | `portfolio/config/plans.ts` |
| Mudar telefone/email | `portfolio/src/components/ContactSection.tsx` |
| Mudar benefícios | `portfolio/config/plans.ts` |
| Mudar cores/tema | `portfolio/tailwind.config.js` |
| Mudar texto geral | Procure nos componentes em `portfolio/src/components/` |

---

## 💡 Dicas

- O projeto está **separado** do sistema principal de checklist
- Pasta: `portfolio/` - completamente independente
- Você pode fazer deploy **antes** de preencher todos os valores
- Os valores podem ser editados **depois** do deploy

---

**Pronto? Comece editando `portfolio/config/plans.ts`!** 🚀
