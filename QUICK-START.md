# 🚀 Guia Rápido - Caldeira Check-list

## ⚡ Iniciar em 30 segundos

### Windows
```bash
double-click start.bat
```

### macOS/Linux
```bash
chmod +x start.sh
./start.sh
```

## 📱 Acessar
- Abra: **http://localhost:3000**
- Use: **admin / admin123** (ou motorista1 / senha123)

## 🎯 Fluxo Básico

1. **Login** → Entre com suas credenciais
2. **Preencha as Info** → Placa, KM, Motorista
3. **Marque os Itens** → Conforme ou Não
4. **Tire Fotos** → Use a câmera (automático para WhatsApp)
5. **Finalize** → Sistema envia relatório para WhatsApp

## ⚠️ Sistema de Alerta

- 🟢 **Verde**: Tudo OK
- 🟡 **Amarelo**: Manutenção em breve
- 🔴 **Vermelho**: Manutenção necessária!

## 📲 No Celular

1. Abra o navegador
2. Digite: `http://seu-ip-local:3000`
3. Ou use QR Code (gerado no console)
4. Adicione à tela inicial para PWA

## 🔑 Credenciais Demo

| Usuário | Senha |
|---------|-------|
| admin | admin123 |
| motorista1 | senha123 |

## 🐛 Troubleshooting

**Câmera não funciona?**
- Dê permissão ao navegador
- Use HTTPS (localhost funciona)

**Porta 3000 já está em uso?**
```bash
npm run dev -- --port 3001
```

**Dependências não instalam?**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📞 Contato WhatsApp
📱 +55 16 99209-1408

---

**Desenvolvido por: [Seu Nome]**
