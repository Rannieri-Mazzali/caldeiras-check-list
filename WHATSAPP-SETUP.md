# 📱 INTEGRAÇÃO WHATSAPP - GUIA DE CONFIGURAÇÃO

## 🚀 Status Atual

O sistema foi atualizado para:

✅ **Enviar link do check-list para WhatsApp automaticamente**
✅ **Enviar fotos para WhatsApp automáticamente**
✅ **Usar a URL correta com checklist-detail.html**
✅ **Melhorada a experiência do usuário**

## 📲 Como Funciona Agora

### 1. **Ao Finalizar Check-list**
```
✓ Backend processa o check-list
✓ Gera relatório formatado
✓ Cria link para acesso: /checklist-detail.html?id=xxx
✓ Abre automaticamente WhatsApp Web com a mensagem
✓ Link é copiado para clipboard do usuário
```

### 2. **Ao Enviar Foto**
```
✓ Foto é capturada pelo celular
✓ Enviada para backend
✓ Servidor guarda arquivo
✓ Abre WhatsApp Web com link da foto
✓ Notificação ao usuário
```

## 🔧 CONFIGURAÇÃO (Opcional - Para Envios Automáticos Reais)

Para usar a API oficial do WhatsApp e enviar automaticamente SEM depender do WhatsApp Web:

### Opção 1: Twilio (Recomendado)

```bash
npm install twilio
```

**Editar `src/server.ts` adicionar:**

```typescript
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

async function enviarParaWhatsAppTwilio(mensagem: string, checklistId: string) {
  const appUrl = process.env.APP_URL || 'https://caldeiras-check-list.vercel.app';
  const linkChecklist = `${appUrl}/checklist-detail.html?id=${checklistId}`;
  
  const mensagemCompleta = `${mensagem}\n\n🔗 *Acesse aqui:*\n${linkChecklist}`;
  
  try {
    const message = await client.messages.create({
      body: mensagemCompleta,
      from: 'whatsapp:' + process.env.TWILIO_WHATSAPP_FROM,
      to: 'whatsapp:+5516992091408'
    });
    console.log('✅ Mensagem enviada via Twilio:', message.sid);
  } catch (error) {
    console.error('❌ Erro ao enviar via Twilio:', error);
  }
}
```

**Variáveis de Ambiente (`.env`):**
```
TWILIO_ACCOUNT_SID=seu_account_sid
TWILIO_AUTH_TOKEN=seu_auth_token
TWILIO_WHATSAPP_FROM=+numero_twilio
```

### Opção 2: Evolution API

```bash
npm install evolution-api
```

**Editar `.env`:**
```
EVOLUTION_API_URL=https://api.evolution-api.com
EVOLUTION_INSTANCE=seu-numero
EVOLUTION_TOKEN=seu-token
```

### Opção 3: WhatsApp Business API

**Editar `.env`:**
```
WHATSAPP_API_TOKEN=seu-token-bearer
WHATSAPP_BUSINESS_ACCOUNT_ID=seu-id
WHATSAPP_PHONE_NUMBER_ID=seu-numero-id
```

## 📝 Variáveis de Ambiente (.env)

```env
# Servidor
PORT=3000
NODE_ENV=production
APP_URL=https://caldeiras-check-list.vercel.app

# WhatsApp
WHATSAPP_PHONE=+55 16 99209-1408
WHATSAPP_PHONE_CLEAN=5516992091408

# Opcional - APIs
WHATSAPP_API_TOKEN=seu_token_aqui
TWILIO_ACCOUNT_SID=seu_sid
TWILIO_AUTH_TOKEN=seu_token
TWILIO_WHATSAPP_FROM=+numero
```

## 🧪 Testando Localmente

1. **Start servidor local:**
```bash
npm run dev
```

2. **Fazer login:**
- Abra http://localhost:3000
- Use: admin / admin123

3. **Preencher check-list e finalizar**
- Sistema abrirá automaticamente WhatsApp Web
- Você verá a mensagem pronta para enviar

4. **Enviar foto**
- Clique em "Tirar Foto"
- WhatsApp Web abre automaticamente

## 📋 Fluxo Completo

```
┌─────────────────────┐
│ USUÁRIO             │
│ - Faz Login         │
│ - Preenche Dados    │
│ - Marque Items      │
│ - Tire Fotos        │
│ - Finalize          │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ BACKEND (Node.js)   │
│ - Valida dados      │
│ - Gera relatório    │
│ - Cria link         │
│ - Log do envio      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ FRONTEND (App.js)   │
│ - Abre WhatsApp Web │
│ - Copia link        │
│ - Notifica usuário  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ WHATSAPP            │
│ +55 16 99209-1408   │
│ - Recebe mensagem   │
│ - Com link          │
│ - Com fotos         │
└─────────────────────┘
```

## 🔗 URLs Importantes

| Ambiente | URL |
|----------|-----|
| **Produção** | https://caldeiras-check-list.vercel.app |
| **Check-list Detail** | https://caldeiras-check-list.vercel.app/checklist-detail.html?id=xxx |
| **Dashboard Vercel** | https://vercel.com/rannieri-mazzalis-projects/caldeiras-check-list |

## 📞 Contato WhatsApp

**Número para receber mensagens:**
📱 +55 16 99209-1408

## ✅ Verificação

Para verificar se tudo está funcionando:

1. Faça login
2. Preencha os dados
3. Finalize o check-list
4. Verifique se WhatsApp Web abre
5. Veja se o link aparece corretamente

## 🐛 Troubleshooting

**WhatsApp não abre?**
- Certifique-se que está no navegador
- Vercel requer HTTPS (já configurado)
- WhatsApp Web precisa estar autenticado

**Foto não envia?**
- Verifique permissões da câmera
- Teste com um arquivo pequeno (<5MB)
- Verifique logs no console (F12)

**Link não funciona?**
- Abra a URL manualmente na barra de endereços
- Limpe cache do navegador
- Tente em modo anônimo

## 🚀 Deploy no Vercel

Após fazer mudanças:

```bash
# Build local
npm run build

# Push para GitHub (auto-deploya no Vercel)
git add .
git commit -m "Atualizar integração WhatsApp"
git push

# Ou deploy direto
vercel --prod --yes
```

---

**Status: ✅ PRONTO PARA USAR**

O sistema já está enviando links para WhatsApp instantaneamente ao finalizar check-lists e ao capturar fotos!
