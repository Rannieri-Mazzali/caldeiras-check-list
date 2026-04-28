# Portfólio Profissional - Caldeiras

Apresentação interativa e profissional do produto Caldeiras para gestão de frota.

## 🚀 Features

- ✨ Design rústico, moderno e profissional
- 🎮 Animações 3D com visualização de caminhões em raio-x
- 📱 Responsivo para mobile e desktop
- 🎨 Tema customizado com cores de caldeira (oxidado, bronze)
- 📊 Seção de benefícios com métricas
- 💰 Planos de preço configuráveis
- ⚡ Tecnologia moderna (TypeScript, React, Next.js, Three.js)
- 🔧 Formulário de contato funcional

## 🛠️ Tecnologias

- **Frontend**: React 18 + Next.js 14
- **Linguagem**: TypeScript
- **Estilos**: Tailwind CSS
- **Animações**: Framer Motion + Three.js
- **Deploy**: Vercel

## 📦 Instalação

```bash
cd portfolio
npm install
```

## 🚀 Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3001](http://localhost:3001) no navegador.

## 🏗️ Build

```bash
npm run build
npm start
```

## ⚙️ Configuração

### Planos de Preço

Edite `config/plans.ts` para modificar:
- Nomes dos planos
- Preços mensais
- Preço de setup/instalação
- Features de cada plano
- Métricas (redução de custos, uptime, etc)

### Valores Personalizáveis

Abra `config/plans.ts` e edite:

```typescript
export const PLANS_CONFIG = {
  plans: [
    {
      monthlyPrice: 0,      // ← EDITE AQUI
      setupPrice: 0,        // ← EDITE AQUI
      features: [...],
    },
    // ... mais planos
  ],
};

export const METRICS_CONFIG = {
  costReduction: "45%",     // ← EDITE AQUI
  uptime: "99.9%",          // ← EDITE AQUI
  efficiency: "40%",        // ← EDITE AQUI
  companies: "500+",        // ← EDITE AQUI
};
```

## 📂 Estrutura

```
portfolio/
├── src/
│   ├── components/         # Componentes React
│   ├── pages/              # Páginas Next.js
│   └── styles/             # CSS global
├── config/
│   └── plans.ts            # Configuração de planos ← EDITE AQUI
├── public/                 # Arquivos estáticos
└── package.json
```

## 🎨 Temas

O portfólio usa um tema rústico e moderno:
- **Cores Primárias**: Bronze (#b8915c), Ferro escuro (#54402f)
- **Cores Secundárias**: Iron (#7d7670), Caldeira (#8c6843)

## 🚀 Deploy no Vercel

1. Conecte seu repositório Git
2. Configure a pasta raiz como `portfolio/`
3. Deixe as configurações default
4. Deploy

```bash
# Ou manualmente:
vercel deploy --prod
```

## 📞 Contato

Para editar informações de contato, edite `src/components/ContactSection.tsx`

## 📄 Licença

MIT

---

**Desenvolvido para Caldeiras - Gestão de Frota Profissional**
