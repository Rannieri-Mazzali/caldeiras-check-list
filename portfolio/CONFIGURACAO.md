# 📋 GUIA DE CONFIGURAÇÃO - PORTFÓLIO CALDEIRAS

## ⚡ Como Personalizar os Valores

### 1️⃣ Editar Planos de Preço

Abra o arquivo: `config/plans.ts`

Procure pela seção `plans` e edite:

```typescript
{
  id: "simples",
  name: "Plano Simples",
  monthlyPrice: 0,      // ← COLOQUE O VALOR MENSAL AQUI (ex: 99)
  setupPrice: 0,        // ← COLOQUE O VALOR DE INSTALAÇÃO AQUI (ex: 500)
  features: [
    "Até 5 caminhões",
    "Checklist básico",
    // ... adicione ou remova features
  ],
},
```

**Exemplo com valores preenchidos:**

```typescript
{
  id: "simples",
  name: "Plano Simples",
  monthlyPrice: 99,     // ✓ Preço mensal R$ 99
  setupPrice: 500,      // ✓ Instalação R$ 500
  features: [
    "Até 5 caminhões",
    "Checklist básico",
    "Relatórios simples",
    "Suporte por email",
    "Aplicativo mobile",
  ],
},
```

### 2️⃣ Editar Métricas (Números de Impacto)

Ainda no arquivo `config/plans.ts`, procure por:

```typescript
export const METRICS_CONFIG = {
  costReduction: "45%",     // ← Redução de custos
  uptime: "99.9%",          // ← Disponibilidade do sistema
  efficiency: "40%",        // ← Aumento de eficiência
  companies: "500+",        // ← Número de empresas
};
```

### 3️⃣ Editar Benefícios

Ainda em `config/plans.ts`:

```typescript
export const BENEFITS_CONFIG = [
  {
    title: "Redução de Custos",
    description: "Diminua despesas com manutenção preventiva e combustível",
    icon: "💰",  // ← Adicione ou mude emojis
  },
  // ... mais benefícios
];
```

### 4️⃣ Editar Informações de Contato

Abra: `src/components/ContactSection.tsx`

Procure pela seção de contato e edite:

```typescript
<p className="text-caldeira-200">+55 (XX) XXXXX-XXXX</p>  // ← SEU TELEFONE
<p className="text-caldeira-200">contato@caldeiras.com</p>  // ← SEU EMAIL
```

## 🚀 Deploy no Vercel

### Passo 1: Prepare o código

```bash
cd portfolio
npm install
npm run build
```

### Passo 2: Envie para Git

```bash
git add .
git commit -m "Adiciona portfólio Caldeiras"
git push origin main
```

### Passo 3: Configure no Vercel

1. Vá para [vercel.com](https://vercel.com)
2. Faça login/signup com sua conta GitHub
3. Clique em "New Project"
4. Selecione seu repositório
5. Na configuração:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./portfolio` ← IMPORTANTE!
   - Deixe os outros valores default
6. Clique "Deploy"

### Passo 4: Customizações Finais (Opcional)

Após o deploy, você pode:
- Adicionar domínio customizado
- Configurar variáveis de ambiente
- Ativar proteção por senha
- Configurar SSL/HTTPS automático

## 📱 Responsividade

O portfólio é totalmente responsivo:
- ✓ Mobile (até 640px)
- ✓ Tablet (640px - 1024px)
- ✓ Desktop (1024px+)
- ✓ Animações 3D otimizadas para todos os tamanhos

## 🎨 Tema e Cores

### Cores Principais

```css
/* Caldeira - Bronze/Cobre */
Claro: #c9a87f
Médio: #b8915c
Escuro: #8c6843

/* Ferro - Cinza Escuro */
Claro: #9a928b
Médio: #7d7670
Escuro: #3d3935
```

Se quiser mudar as cores, edite `tailwind.config.js` na seção `colors`.

## ⚙️ Animações 3D

A animação dos caminhões em raio-x está em `src/components/TruckAnimation3D.tsx`

Para modificar:
- Velocidade: procure por `speed = 0.02`
- Tamanho dos caminhões: procure por `BoxGeometry(4, 6, 4)`
- Cores: procure por `color: 0xb8915c`

## ✅ Checklist de Deploy

- [ ] Editar `config/plans.ts` com valores de preço
- [ ] Editar `ContactSection.tsx` com telefone/email
- [ ] Testar localmente com `npm run dev`
- [ ] Commit e push no Git
- [ ] Configurar no Vercel
- [ ] Testar deploy em produção

## 🆘 Troubleshooting

### Erro: "Build failed"
→ Certifique-se de que o Root Directory é `./portfolio`

### Animação 3D não aparece
→ Verifique se Three.js foi instalado: `npm install three`

### Estilos não carregando
→ Execute: `npm run build` e aguarde o Tailwind compilar

## 📞 Suporte

Se precisar de ajuda, revise os arquivos:
- `README.md` - Overview geral
- `config/plans.ts` - Configurações
- Componentes em `src/components/` - Código

---

**Portfólio criado com ❤️ para Caldeiras**
