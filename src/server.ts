import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import twilio from 'twilio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Express = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Servir arquivos estáticos ANTES das rotas da API
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// In-memory database (for demo - replace with real DB)
interface CheckList {
  id: string;
  placa: string;
  km: number;
  motorista: string;
  items: Array<{
    id: string;
    name: string;
    conforme: boolean;
    obs: string;
  }>;
  fotos: string[];
  dataHora: string;
  status: 'pendente' | 'finalizado';
}

interface User {
  nickname: string;
  password: string;
}

interface MaintenanceSchedule {
  id: string;
  placa: string;
  kmUltima: number;
  proximaManutencao: number;
}

// Demo data
const users: User[] = [
  { nickname: 'admin', password: 'admin123' },
  { nickname: 'motorista1', password: 'senha123' }
];

const maintenanceSchedules: MaintenanceSchedule[] = [];
const checklists: CheckList[] = [];

// ===== CONFIGURAÇÃO TWILIO =====
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = twilio(accountSid, authToken);

// ===== ROTAS DE AUTENTICAÇÃO =====
app.post('/api/auth/login', (req: Request, res: Response) => {
  const { nickname, password } = req.body;

  const user = users.find(u => u.nickname === nickname && u.password === password);

  if (user) {
    res.json({
      success: true,
      token: Buffer.from(`${nickname}:${Date.now()}`).toString('base64'),
      nickname: user.nickname
    });
  } else {
    res.status(401).json({ success: false, error: 'Credenciais inválidas' });
  }
});

// ===== ROTAS DE CHECKLIST =====
app.post('/api/checklist/create', (req: Request, res: Response) => {
  const { placa, km, motorista, items } = req.body;

  const novoChecklist: CheckList = {
    id: uuidv4().toString(),
    placa,
    km: parseInt(km),
    motorista,
    items: items || [],
    fotos: [],
    dataHora: new Date().toISOString(),
    status: 'pendente'
  };

  checklists.push(novoChecklist);

  res.json({ success: true, checklistId: novoChecklist.id, checklist: novoChecklist });
});

app.get('/api/checklist/:id', (req: Request, res: Response) => {
  const checklist = checklists.find(c => c.id === req.params.id);

  if (checklist) {
    res.json({ success: true, checklist });
  } else {
    res.status(404).json({ success: false, error: 'Checklist não encontrado' });
  }
});

app.put('/api/checklist/:id', (req: Request, res: Response) => {
  const checklist = checklists.find(c => c.id === req.params.id);

  if (checklist) {
    const { placa, km, motorista, items, fotos } = req.body;
    if (placa) checklist.placa = placa;
    if (km) checklist.km = parseInt(km);
    if (motorista) checklist.motorista = motorista;
    if (items) checklist.items = items;
    if (fotos) checklist.fotos = fotos.map((f: any) => f.path || f);

    res.json({ success: true, checklist });
  } else {
    res.status(404).json({ success: false, error: 'Checklist não encontrado' });
  }
});

app.post('/api/checklist/:id/finalize', async (req: Request, res: Response) => {
  const checklist = checklists.find(c => c.id === req.params.id);

  if (checklist) {
    checklist.status = 'finalizado';

    // Generate report
    const report = gerarRelatorioChecklist(checklist);

    // Send to WhatsApp
    try {
      await enviarParaWhatsApp(report, checklist);
      res.json({
        success: true,
        message: 'Checklist finalizado e enviado para WhatsApp',
        checklistId: checklist.id,
        report: report
      });
    } catch (error) {
      res.json({
        success: true,
        message: 'Checklist finalizado (falha ao enviar WhatsApp)',
        checklistId: checklist.id,
        error: error instanceof Error ? error.message : 'Erro desconhecido'
      });
    }
  } else {
    res.status(404).json({ success: false, error: 'Checklist não encontrado' });
  }
});

// ===== ROTAS DE UPLOAD DE FOTO =====
app.post('/api/photo/upload', upload.single('photo'), async (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400).json({ success: false, error: 'Nenhuma foto enviada' });
    return;
  }

  const fotoPath = `/uploads/${req.file.filename}`;

  res.json({
    success: true,
    message: 'Foto armazenada com sucesso',
    fotoPath: fotoPath,
    filename: req.file.filename
  });
});

// ===== ROTAS DE MANUTENÇÃO =====
app.post('/api/maintenance/register', (req: Request, res: Response) => {
  const { placa, km } = req.body;

  const proximaManutencao = parseInt(km) + 200; // 200km para próxima manutenção

  const schedule: MaintenanceSchedule = {
    id: uuidv4().toString(),
    placa,
    kmUltima: parseInt(km),
    proximaManutencao
  };

  maintenanceSchedules.push(schedule);

  res.json({
    success: true,
    schedule,
    message: `Manutenção registrada. Próxima manutenção em ${proximaManutencao}km`
  });
});

app.get('/api/maintenance/check/:placa/:km', (req: Request, res: Response) => {
  const { placa, km } = req.params;
  const maintenance = maintenanceSchedules.find(m => m.placa === placa);
  const kmAtual = parseInt(km);

  if (maintenance) {
    const proximaManutencao = maintenance.proximaManutencao;
    const kmRestantes = proximaManutencao - kmAtual;
    const necessitaManutencao = kmAtual >= proximaManutencao;

    res.json({
      success: true,
      necessitaManutencao,
      kmRestantes: Math.max(0, kmRestantes),
      proximaManutencao,
      kmAtual,
      ultimaManutencao: maintenance.kmUltima
    });
  } else {
    res.json({
      success: true,
      necessitaManutencao: false,
      message: 'Nenhuma manutenção registrada para este veículo'
    });
  }
});

// ===== FUNÇÕES AUXILIARES =====
function gerarRelatorioChecklist(checklist: CheckList): string {
  let report = `
📋 CHECKLIST FINALIZADO - CALDEIRA TRANSPORTADORA

🚚 Placa: ${checklist.placa}
⏰ Km: ${checklist.km}
👤 Motorista: ${checklist.motorista}
📅 Data/Hora: ${new Date(checklist.dataHora).toLocaleString('pt-BR')}

ITENS DO CHECKLIST:
`;

  checklist.items.forEach((item, index) => {
    const status = item.conforme ? '✅' : '❌';
    report += `\n${index + 1}. ${item.name} ${status}`;
    if (item.obs) {
      report += `\n   📝 Obs: ${item.obs}`;
    }
  });

  report += `\n\n🔗 Link do checklist: ${process.env.APP_URL || 'http://localhost:3000'}/checklist/${checklist.id}`;

  return report;
}

async function enviarParaWhatsApp(mensagem: string, checklist: CheckList): Promise<void> {
  const appUrl = process.env.APP_URL || 'https://caldeiras-check-list.vercel.app';
  const linkChecklist = `${appUrl}/checklist-detail.html?id=${checklist.id}`;
  const phoneNumber = process.env.WHATSAPP_PHONE_CLEAN || '351936745950';
  
  const mensagemCompleta = `${mensagem}\n\n🔗 *Acesse aqui:*\n${linkChecklist}`;
  
  try {
    const message = await twilioClient.messages.create({
      body: mensagemCompleta,
      from: 'whatsapp:' + process.env.TWILIO_WHATSAPP_FROM,
      to: 'whatsapp:+' + phoneNumber
    });
    console.log('✅ Mensagem enviada via Twilio:', message.sid);
  } catch (error) {
    console.error('❌ Erro ao enviar via Twilio:', error);
  }
}

// ===== ROTA DE STATUS =====
app.get('/api/status', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Servidor rodando',
    timestamp: new Date().toISOString(),
    checklists: checklists.length,
    maintenances: maintenanceSchedules.length
  });
});

// ===== ROTA CATCH-ALL PARA SPA =====
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// ===== INICIAR SERVIDOR =====
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
  console.log(`📱 Acesse em http://localhost:${PORT}/`);
});
