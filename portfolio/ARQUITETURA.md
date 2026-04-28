# 🏗️ ARQUITETURA DO PORTFÓLIO

## 📂 Estrutura de Pastas

```
caldeiras-check-list/
├── src/                          (Sistema principal de checklist)
│   └── ...
└── portfolio/                    (NOVO - Portfólio Caldeiras)
    ├── src/
    │   ├── components/           (Componentes React)
    │   │   ├── Header.tsx        → Cabeçalho com navegação
    │   │   ├── TruckAnimation3D.tsx → Animação 3D dos caminhões
    │   │   ├── BenefitsSection.tsx  → Seção de benefícios
    │   │   ├── TechnologySection.tsx → Stack tecnológico
    │   │   ├── PricingSection.tsx → Planos de preço
    │   │   ├── ContactSection.tsx → Formulário de contato
    │   │   └── Footer.tsx        → Rodapé
    │   ├── pages/
    │   │   ├── _app.tsx          → Wrapper da aplicação
    │   │   ├── _document.tsx     → HTML base
    │   │   └── index.tsx         → Página principal
    │   └── styles/
    │       └── globals.css       → Estilos globais
    ├── config/
    │   └── plans.ts              → ⭐ CONFIGURAÇÃO DE VALORES
    ├── public/
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── next.config.js
    ├── vercel.json
    ├── .gitignore
    ├── README.md
    ├── CONFIGURACAO.md           → Guia detalhado
    ├── INICIO-RAPIDO.md          → Guia rápido
    ├── deploy.bat                → Script deploy (Windows)
    └── deploy.sh                 → Script deploy (Mac/Linux)
```

## 🔄 Fluxo de Dados

```
┌─────────────────────────────────────┐
│     pages/index.tsx (Main Page)     │
└──────────────┬──────────────────────┘
               │
       ┌───────┴────────────────────────────────────────┐
       │                                                │
       ▼                                                ▼
┌──────────────────┐                          ┌────────────────────┐
│ Header.tsx       │                          │ TruckAnimation3D   │
│ - Logo           │                          │ - Three.js 3D      │
│ - Navegação      │                          │ - Raio-X Caminhões │
└──────────────────┘                          └────────────────────┘
       │                                                │
       ▼                                                ▼
┌──────────────────┐                          ┌────────────────────┐
│ BenefitsSection  │                          │ TechnologySection  │
│ - 4 Cards        │                          │ - Tabs tech stack  │
│ - Metrics        │                          │ - Features         │
└──────────────────┘                          └────────────────────┘
       │                                                │
       ▼                                                ▼
┌──────────────────┐                          ┌────────────────────┐
│ PricingSection   │◄─────────────────────────► config/plans.ts
│ - 3 Planos       │                          │ - Preços           │
│ - Features       │                          │ - Benefícios       │
└──────────────────┘                          │ - Métricas         │
       │                                      └────────────────────┘
       ▼
┌──────────────────┐
│ ContactSection   │
│ - Formulário     │
│ - Info contato   │
└──────────────────┘
       │
       ▼
┌──────────────────┐
│ Footer.tsx       │
│ - Links          │
│ - Redes Sociais  │
└──────────────────┘
```

## 🎯 Pontos de Edição (Pelo Nível de Dificuldade)

### ⭐ Fácil (Recomendado)
1. **Preços** → Editar `config/plans.ts` (apenas números)
2. **Métricas** → Editar `config/plans.ts` (apenas números)
3. **Contato** → Editar `src/components/ContactSection.tsx` (valores de texto)

### ⭐⭐ Intermediário
1. **Features dos planos** → Editar array em `config/plans.ts`
2. **Benefícios** → Editar array em `config/plans.ts`
3. **Cores/tema** → Editar `tailwind.config.js`

### ⭐⭐⭐ Avançado
1. **Customizar animação 3D** → Editar `src/components/TruckAnimation3D.tsx`
2. **Adicionar seções** → Criar novo componente em `src/components/`
3. **Mudar layout** → Modificar `src/pages/index.tsx`

## 📱 Responsividade

Todos os componentes usam **Tailwind CSS** com breakpoints:

```
Mobile:   < 640px   (sm)
Tablet:   640-1024px (md, lg)
Desktop:  > 1024px  (xl)
```

## 🚀 Deploy Pipeline

```
Local Development
    ↓
npm run dev (porta 3001)
    ↓
npm run build
    ↓
Vercel Deploy
    ↓
✅ Live em producão
```

## 🔐 Segurança

- ✅ Sem dados sensíveis no código
- ✅ Variáveis de ambiente em `.env.local`
- ✅ HTTPS automático no Vercel
- ✅ Form de contato sem backend (você pode integrar)

## 📊 Performance

- ✅ Otimizado para Core Web Vitals
- ✅ Lazy loading de componentes
- ✅ CSS crítico inline
- ✅ Animações 3D otimizadas (requestAnimationFrame)

## 🎨 Customizações de Tema

### Cores Caldeira
```css
--caldeira-50:  #faf8f6
--caldeira-600: #a37a4f
--caldeira-900: #54402f
--caldeira-950: #2d2218
```

### Cores Iron
```css
--iron-50:  #f8f7f6
--iron-700: #4d4440
--iron-800: #3d3935
--iron-900: #2a2622
```

Edite em `tailwind.config.js` para mudar paleta de cores.

---

**Tudo pronto para customizar e fazer deploy! 🚀**
