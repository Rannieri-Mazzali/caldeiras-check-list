# 💻 Guia de Desenvolvimento - Caldeira Check-list

## 🛠️ Setup do Desenvolvimento

### 1. Clonar e Instalar
```bash
cd caldeiras-check-list
npm install
```

### 2. Compilar TypeScript
```bash
npm run build
```

### 3. Rodar em Desenvolvimento
```bash
npm run dev
```

### 4. Compilar Tailwind (opcional)
```bash
npm run tailwind
```

## 📁 Estrutura de Pastas

```
caldeiras-check-list/
├── src/
│   ├── server.ts              # Backend Express
│   └── styles/
│       └── input.css          # Entrada do Tailwind
│
├── public/                    # Arquivos estáticos
│   ├── index.html            # Página principal
│   ├── checklist-detail.html # Detalhes do checklist
│   ├── manifest.json         # PWA Manifest
│   ├── js/
│   │   └── app.js            # Lógica frontend
│   ├── assets/
│   │   └── logo.png          # Logo
│   └── uploads/              # Fotos capturadas
│
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── .env
```

## 🔌 API Endpoints

### POST /api/auth/login
Autenticar usuário
```javascript
const response = await fetch('/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nickname: 'admin', password: 'admin123' })
});
```

### POST /api/checklist/create
Criar novo checklist
```javascript
const response = await fetch('/api/checklist/create', {
  method: 'POST',
  body: JSON.stringify({
    placa: 'ABC-1234',
    km: 50000,
    motorista: 'João Silva',
    items: [...]
  })
});
```

### PUT /api/checklist/:id
Atualizar checklist
```javascript
const response = await fetch(`/api/checklist/${checklistId}`, {
  method: 'PUT',
  body: JSON.stringify({ placa, km, motorista, items })
});
```

### POST /api/checklist/:id/finalize
Finalizar e enviar
```javascript
const response = await fetch(`/api/checklist/${checklistId}/finalize`, {
  method: 'POST'
});
```

### POST /api/photo/upload
Upload de foto
```javascript
const formData = new FormData();
formData.append('photo', fileInput.files[0]);
const response = await fetch('/api/photo/upload', {
  method: 'POST',
  body: formData
});
```

### GET /api/maintenance/check/:placa/:km
Verificar manutenção
```javascript
const response = await fetch(`/api/maintenance/check/ABC-1234/50000`);
```

## 🎨 Cores e Temas

```css
--primary: #FF8C00    /* Laranja */
--secondary: #1E3A5F  /* Azul Escuro */
--success: #27AE60    /* Verde */
--warning: #F39C12    /* Amarelo */
--danger: #E74C3C     /* Vermelho */
```

## 🔐 Autenticação

Usuários demo (em memória):
```javascript
const users = [
  { nickname: 'admin', password: 'admin123' },
  { nickname: 'motorista1', password: 'senha123' }
];
```

Para produção, integre com um banco de dados real.

## 📊 Estado da Aplicação

```javascript
appState = {
  currentUser: null,           // Usuário logado
  currentChecklistId: null,    // ID do checklist atual
  checklistItems: [],          // Itens do checklist
  fotos: [],                   // Fotos capturadas
  informacoes: {
    placa: '',
    km: 0,
    motorista: '',
    data: '2026-04-18',
    hora: '14:30'
  }
};
```

## 🚀 Deploy

### Vercel
```bash
npm i -g vercel
vercel
```

### Heroku
```bash
npm i -g heroku
heroku create your-app-name
git push heroku main
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 Adição de Novos Usuários

Edite `src/server.ts`:
```typescript
const users: User[] = [
  { nickname: 'admin', password: 'admin123' },
  { nickname: 'motorista1', password: 'senha123' },
  { nickname: 'novo_usuario', password: 'senha' }  // Novo
];
```

## 🔄 Integração com Banco de Dados

Exemplo com MongoDB:
```typescript
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI);

const ChecklistSchema = new mongoose.Schema({
  placa: String,
  km: Number,
  motorista: String,
  items: Array,
  dataHora: Date,
  status: String
});

const Checklist = mongoose.model('Checklist', ChecklistSchema);
```

## 🌐 Integração com WhatsApp API Oficial

Substitua a função `enviarParaWhatsApp`:
```typescript
async function enviarParaWhatsApp(mensagem: string): Promise<void> {
  const response = await axios.post(
    `https://graph.instagram.com/v18.0/${process.env.WHATSAPP_BUSINESS_ACCOUNT_ID}/messages`,
    {
      messaging_product: "whatsapp",
      to: process.env.WHATSAPP_PHONE_CLEAN,
      type: "text",
      text: { body: mensagem }
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_API_TOKEN}`
      }
    }
  );
  return response.data;
}
```

## 📱 Progressive Web App (PWA)

O app já está configurado como PWA:
1. Abra em HTTPS
2. Clique "Instalar" no navegador
3. Funciona offline com dados em cache

Para melhorar:
```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

## 🧪 Testes

Adicione Jest:
```bash
npm install --save-dev jest @types/jest ts-jest
npx jest --init
npm test
```

## 📈 Performance

- Minifique assets com: `npx terser app.js -o app.min.js`
- Comprima imagens com: `npx imagemin assets/* --out-dir=public/assets`
- Cache de HTTP headers no `server.ts`

## 🔒 Segurança

- [ ] Validar entrada em todos os endpoints
- [ ] Hash de senhas com bcrypt
- [ ] Rate limiting para login
- [ ] CORS configurado
- [ ] HTTPS em produção
- [ ] Variáveis sensíveis em `.env`

## 💡 Próximas Melhorias

- [ ] Histórico de checklists
- [ ] Relatórios em PDF
- [ ] Gráficos de conformidade
- [ ] Sincronização offline
- [ ] Notificações push
- [ ] Dashboard de administrador

---

**Desenvolvido com ❤️ para Caldeira Transportadora**
