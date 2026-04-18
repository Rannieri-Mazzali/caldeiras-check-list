# 🚚 Caldeira Transportadora - Sistema de Check-list

Aplicação profissional de check-list para caminhões com suporte a câmera, manutenção preventiva e integração WhatsApp.

## 🎯 Características

✅ **Login Seguro** - Autenticação com nickname e password  
✅ **Interface Responsiva** - Design profissional tipo Flutter para mobile  
✅ **Check-list Dinâmico** - Adicione/remova itens conforme necessário  
✅ **Câmera Integrada** - Tire fotos diretamente do dispositivo  
✅ **Alerta de Manutenção** - Sistema inteligente de manutenção preventiva  
✅ **Integração WhatsApp** - Envie relatórios automáticos  
✅ **Edição de Campos** - Placa, KM, motorista totalmente editáveis  
✅ **Offline Ready** - Funciona com cache local  

## 🚀 Instalação e Configuração

### Pré-requisitos
- Node.js (v16+)
- npm ou yarn
- Navegador moderno com suporte a câmera

### 1. Instalar Dependências

\`\`\`bash
npm install
\`\`\`

### 2. Configurar Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env` e configure:

\`\`\`bash
PORT=3000
WHATSAPP_PHONE_CLEAN=5516992091408
NODE_ENV=development
\`\`\`

### 3. Iniciar o Servidor

**Desenvolvimento:**
\`\`\`bash
npm run dev
\`\`\`

**Produção:**
\`\`\`bash
npm run build
npm start
\`\`\`

### 4. Acessar a Aplicação

Abra seu navegador em: **http://localhost:3000**

## 🔐 Credenciais Demo

- **Nickname:** admin
- **Senha:** admin123

---

- **Nickname:** motorista1  
- **Senha:** senha123

## 📱 Como Usar

### 1. **Login**
Entre com seu nickname e senha

### 2. **Informações do Caminhão**
- Insira a placa (ex: ABC-1234)
- Digite o KM atual
- Digite o nome do motorista
- Data e hora são preenchidas automaticamente

### 3. **Check-list**
- Marque os itens como conformes ✅ ou não ❌
- Adicione observações para cada item
- Adicione novos itens clicando no botão "+"

### 4. **Fotos**
- Clique em "Tirar Foto" para usar a câmera
- As fotos são enviadas automaticamente para WhatsApp
- Você pode remover fotos antes de finalizar

### 5. **Finalizar**
- Clique em "Finalizar Check-list"
- O sistema verifica se há dados incompletos
- Um relatório é gerado e enviado para WhatsApp
- O sistema se reseta para um novo check-list

## ⚠️ Sistema de Manutenção

O sistema detecta automaticamente quando a manutenção é necessária:

- **Alerta Verde:** Tudo em ordem
- **Alerta Amarelo:** Manutenção em menos de 50km
- **Alerta Vermelho:** Manutenção necessária!

## 🔧 Estrutura do Projeto

\`\`\`
caldeiras-check-list/
├── src/
│   └── server.ts           # Backend Express/Node
├── public/
│   ├── index.html          # Interface principal
│   ├── js/
│   │   └── app.js          # Lógica frontend
│   ├── assets/
│   │   └── logo.png        # Logo Caldeira
│   └── uploads/            # Fotos capturadas
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
\`\`\`

## 🌐 API Endpoints

### Autenticação
- \`POST /api/auth/login\` - Realizar login

### Check-list
- \`POST /api/checklist/create\` - Criar novo check-list
- \`GET /api/checklist/:id\` - Obter detalhes do check-list
- \`PUT /api/checklist/:id\` - Atualizar check-list
- \`POST /api/checklist/:id/finalize\` - Finalizar e enviar

### Fotos
- \`POST /api/photo/upload\` - Fazer upload de foto

### Manutenção
- \`POST /api/maintenance/register\` - Registrar manutenção
- \`GET /api/maintenance/check/:placa/:km\` - Verificar status de manutenção

## 📊 Formato do Relatório

Ao finalizar um check-list, um relatório é gerado com:

\`\`\`
📋 CHECKLIST FINALIZADO - CALDEIRA TRANSPORTADORA

🚚 Placa: ABC-1234
⏰ KM: 15000
👤 Motorista: João Silva
📅 Data/Hora: 18/04/2026 14:30

ITENS DO CHECKLIST:
1. Pneus ✅
2. Luzes ❌
   📝 Obs: Farol dianteiro esquerdo com problema
3. Freios ✅
...

🔗 Link do checklist: http://localhost:3000/checklist/abc123xyz
\`\`\`

## 🎨 Design e Responsividade

- **Mobile First:** Otimizado para smartphones e tablets
- **Tema Caldeira:** Cores laranja (#FF8C00) e azul escuro (#1E3A5F)
- **Acessibilidade:** Contraste adequado, textos legíveis
- **Performance:** Carregamento rápido, animações suaves

## 🔐 Segurança

- Validação de entrada em todos os campos
- CORS habilitado para requisições
- Proteção contra XSS com sanitização
- Tokens de autenticação localStorage

## 📱 Compatibilidade

✅ Chrome/Chromium  
✅ Firefox  
✅ Safari  
✅ Edge  
✅ Navegadores mobile

## 🐛 Troubleshooting

### Câmera não funciona
- Verifique permissões do navegador
- Use HTTPS em produção
- Teste com HTTPS local (localhost funciona)

### Fotos não são enviadas para WhatsApp
- Verifique o número de telefone em `.env`
- Use o WhatsApp Web ou app instalado
- Verifique a conexão de internet

### Servidor não inicia
- Verifique se a porta 3000 não está em uso
- Delete `node_modules` e execute `npm install` novamente
- Verifique Node.js está instalado corretamente

## 📝 Notas Importantes

- Os dados são armazenados em memória (demo)
- Para produção, integre um banco de dados real
- Implemente autenticação OAuth ou similar
- Configure um banco de dados para persistência
- Use HTTPS em produção

## 🚀 Próximas Melhorias

- [ ] Integração com banco de dados (MongoDB/PostgreSQL)
- [ ] Autenticação OAuth (Google, Apple)
- [ ] Histórico de check-lists
- [ ] Relatórios em PDF
- [ ] Gráficos de conformidade
- [ ] Sincronização offline
- [ ] Notificações push

## 📞 Suporte

Para suporte, entre em contato:
📞 +55 16 99209-1408
📧 contato@caldeira.com.br

---

**Desenvolvido com ❤️ para Caldeira Transportadora**  
*Qualidade, segurança e eficiência em cada km*
