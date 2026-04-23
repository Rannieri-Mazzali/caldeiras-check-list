// Estado global da aplicação
let appState = {
    currentUser: null,
    currentChecklistId: null,
    checklistItems: [
        { id: 1, name: 'Pneus', conforme: false, obs: '' },
        { id: 2, name: 'Luzes', conforme: false, obs: '' },
        { id: 3, name: 'Freios', conforme: false, obs: '' },
        { id: 4, name: 'Espelhos', conforme: false, obs: '' },
        { id: 5, name: 'Combustível', conforme: false, obs: '' },
        { id: 6, name: 'Óleo do Motor', conforme: false, obs: '' },
        { id: 7, name: 'Água Radiador', conforme: false, obs: '' },
        { id: 8, name: 'Direção', conforme: false, obs: '' },
    ],
    fotos: [],
    informacoes: {
        placa: '',
        km: '',
        motorista: '',
        data: new Date().toISOString().split('T')[0],
        hora: new Date().toTimeString().slice(0, 5)
    }
};

// ===== AUTENTICAÇÃO =====
async function handleLogin() {
    const nickname = document.getElementById('loginNickname').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (!nickname || !password) {
        showToast('⚠️ Preencha todos os campos', 'warning');
        return;
    }

    showLoading(true);

    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nickname, password })
        });

        const data = await response.json();

        if (data.success) {
            appState.currentUser = data.nickname;
            localStorage.setItem('token', data.token);
            localStorage.setItem('userNickname', data.nickname);
            
            showToast('✅ Login realizado com sucesso!');
            setTimeout(() => {
                showLoginScreen(false);
                initializeApp();
            }, 500);
        } else {
            showToast('❌ Credenciais inválidas', 'error');
        }
    } catch (error) {
        console.error('Login error:', error);
        showToast('❌ Erro ao conectar', 'error');
    }

    showLoading(false);
}

function handleLogout() {
    if (confirm('Deseja realmente sair?')) {
        localStorage.clear();
        appState.currentUser = null;
        appState.currentChecklistId = null;
        resetChecklist();
        showLoginScreen(true);
    }
}

// ===== NAVEGAÇÃO =====
function showLoginScreen(show) {
    document.getElementById('loginScreen').classList.toggle('hidden', !show);
    document.getElementById('mainApp').classList.toggle('hidden', show);
}

function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.classList.remove('border-primary', 'border-b-2', 'text-primary');
        btn.classList.add('border-transparent', 'text-gray-600');
    });

    // Show selected tab
    document.getElementById(tabName + 'Tab').classList.remove('hidden');
    event.target.closest('.tab-btn').classList.add('active');
    event.target.closest('.tab-btn').classList.remove('border-transparent', 'text-gray-600');
    event.target.closest('.tab-btn').classList.add('border-primary', 'text-primary');
}

// ===== INICIALIZAÇÃO =====
function initializeApp() {
    document.getElementById('userDisplay').textContent = `Olá, ${appState.currentUser}!`;
    
    // Set current date and time
    const now = new Date();
    document.getElementById('infoData').value = now.toISOString().split('T')[0];
    document.getElementById('infoHora').value = now.toTimeString().slice(0, 5);

    // Create new checklist
    criarNovoChecklist();
    
    // Render items
    renderChecklistItems();

    showToast('✅ Bem-vindo ao Sistema de Check-list');
}

async function criarNovoChecklist() {
    try {
        const response = await fetch('/api/checklist/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                placa: 'ABC-1234',
                km: 0,
                motorista: '',
                items: appState.checklistItems
            })
        });

        const data = await response.json();
        if (data.success) {
            appState.currentChecklistId = data.checklistId;
        }
    } catch (error) {
        console.error('Error creating checklist:', error);
    }
}

// ===== CHECKLIST ITEMS =====
function renderChecklistItems() {
    const container = document.getElementById('checklistItems');
    container.innerHTML = '';

    appState.checklistItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'bg-white p-4 rounded-lg card-shadow';
        itemDiv.innerHTML = `
            <div class="flex items-start gap-3">
                <input type="checkbox" class="checkbox-custom mt-1" ${item.conforme ? 'checked' : ''} 
                    onchange="updateItemConformidade(${item.id}, this.checked)">
                <div class="flex-1">
                    <label class="font-semibold text-gray-800 cursor-pointer">${item.name}</label>
                    <div class="mt-2">
                        <input type="text" placeholder="Observação (opcional)" value="${item.obs}"
                            class="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-primary outline-none"
                            onchange="updateItemObs(${item.id}, this.value)">
                    </div>
                </div>
                <button onclick="removeItemChecklist(${item.id})" class="text-gray-400 hover:text-red-500 transition">
                    <i class="fas fa-trash text-lg"></i>
                </button>
            </div>
        `;
        container.appendChild(itemDiv);
    });
}

function updateItemConformidade(itemId, conforme) {
    const item = appState.checklistItems.find(i => i.id === itemId);
    if (item) {
        item.conforme = conforme;
    }
}

function updateItemObs(itemId, obs) {
    const item = appState.checklistItems.find(i => i.id === itemId);
    if (item) {
        item.obs = obs;
    }
}

function adicionarItemChecklist() {
    const novoId = Math.max(...appState.checklistItems.map(i => i.id), 0) + 1;
    const nomePadrao = prompt('Nome do novo item:');
    
    if (nomePadrao) {
        appState.checklistItems.push({
            id: novoId,
            name: nomePadrao,
            conforme: false,
            obs: ''
        });
        renderChecklistItems();
        showToast('✅ Item adicionado');
    }
}

function removeItemChecklist(itemId) {
    if (confirm('Remover este item?')) {
        appState.checklistItems = appState.checklistItems.filter(i => i.id !== itemId);
        renderChecklistItems();
        showToast('🗑️ Item removido');
    }
}

// ===== VERIFICAÇÃO DE MANUTENÇÃO =====
function verificarManutencao() {
    const placa = document.getElementById('infoPlaca').value;
    const km = document.getElementById('infoKm').value;

    if (!placa || !km) return;

    fetch(`/api/maintenance/check/${placa}/${km}`)
        .then(res => res.json())
        .then(data => {
            const alert = document.getElementById('maintenanceAlert');
            const message = document.getElementById('maintenanceMessage');

            if (data.necessitaManutencao) {
                alert.classList.remove('hidden');
                message.innerHTML = `
                    🚨 Manutenção necessária!<br>
                    KM atual: ${data.kmAtual} | Próxima em: ${data.proximaManutencao}km
                `;
            } else if (data.kmRestantes <= 50 && data.kmRestantes > 0) {
                alert.classList.remove('hidden');
                message.innerHTML = `
                    ⚠️ Atenção: ${data.kmRestantes}km para próxima manutenção
                `;
            } else {
                alert.classList.add('hidden');
            }
        })
        .catch(err => console.error('Erro ao verificar manutenção:', err));
}

// ===== CÂMERA E FOTOS =====
async function handlePhotoCapture(event) {
    const file = event.target.files[0];
    if (!file) return;

    showLoading(true);

    const formData = new FormData();
    formData.append('photo', file);

    try {
        const response = await fetch('/api/photo/upload', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            appState.fotos.push({
                filename: data.filename,
                path: data.fotoPath,
                dataHora: new Date().toLocaleString('pt-BR')
            });

            renderPhotos();
            showToast('📸 Foto capturada com sucesso!');
        } else {
            showToast('⚠️ ' + (data.message || 'Erro ao capturar foto'), 'warning');
        }
    } catch (error) {
        console.error('Error uploading photo:', error);
        showToast('❌ Erro ao capturar foto', 'error');
    }

    showLoading(false);
    document.getElementById('cameraInput').value = '';
}

function renderPhotos() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    appState.fotos.forEach((foto, index) => {
        const photoDiv = document.createElement('div');
        photoDiv.className = 'relative rounded-lg overflow-hidden card-shadow';
        photoDiv.innerHTML = `
            <img src="${foto.path}" alt="Foto ${index + 1}" class="w-full h-32 object-cover">
            <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition cursor-pointer flex items-center justify-center gap-2">
                <button onclick="removePhoto(${index})" class="bg-red-500 text-white p-2 rounded-full opacity-0 hover:opacity-100 transition">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <p class="text-xs text-gray-500 p-2 bg-gray-50">${foto.dataHora}</p>
        `;
        grid.appendChild(photoDiv);
    });
}

function removePhoto(index) {
    if (confirm('Remover esta foto?')) {
        appState.fotos.splice(index, 1);
        renderPhotos();
        showToast('🗑️ Foto removida');
    }
}

// ===== FINALIZAR CHECKLIST =====
async function finalizarChecklist() {
    // Validar dados
    const placa = document.getElementById('infoPlaca').value.trim();
    const km = document.getElementById('infoKm').value.trim();
    const motorista = document.getElementById('infoMotorista').value.trim();

    if (!placa || !km || !motorista) {
        showToast('⚠️ Preencha todos os dados (Placa, KM, Motorista)', 'warning');
        return;
    }

    // Atualizar dados
    appState.informacoes = {
        placa: placa.toUpperCase(),
        km: parseInt(km),
        motorista: motorista,
        data: document.getElementById('infoData').value,
        hora: document.getElementById('infoHora').value
    };

    showLoading(true);

    try {
        // Atualizar checklist no backend com fotos
        const updateResponse = await fetch(`/api/checklist/${appState.currentChecklistId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                placa: appState.informacoes.placa,
                km: appState.informacoes.km,
                motorista: appState.informacoes.motorista,
                items: appState.checklistItems,
                fotos: appState.fotos
            })
        });

        // Finalizar checklist
        const finalizeResponse = await fetch(`/api/checklist/${appState.currentChecklistId}/finalize`, {
            method: 'POST'
        });

        const data = await finalizeResponse.json();

        if (data.success) {
            showToast('✅ Check-list finalizado e enviado!');
            
            // Mostrar relatório
            setTimeout(() => {
                mostrarRelatorioPDF(data);
            }, 1000);

            // Resetar após 3 segundos
            setTimeout(() => {
                resetChecklist();
            }, 3000);
        }
    } catch (error) {
        console.error('Error finalizing checklist:', error);
        showToast('❌ Erro ao finalizar', 'error');
    }

    showLoading(false);
}

function mostrarRelatorioPDF(data) {
    const relatorio = data.report;
    const checklistId = data.checklistId;
    const linkChecklist = `${window.location.origin}/checklist-detail.html?id=${checklistId}`;
    
    // O backend já enviou para WhatsApp automaticamente
    const mensagem = `✅ CHECK-LIST ENVIADO!\n\n${relatorio}\n\n🔗 Link: ${linkChecklist}`;
    
    // Mostrar o link ao usuário
    console.log('📱 WhatsApp enviado para: +55 16 99209-1408');
    console.log('🔗 Link do checklist:', linkChecklist);
    
    // Copiar link para clipboard
    navigator.clipboard.writeText(linkChecklist).then(() => {
        showToast('📋 Link copiado! WhatsApp enviado para +55 16 99209-1408');
    }).catch(() => {
        showToast('✅ Check-list enviado para WhatsApp!');
    });
}

function resetChecklist() {
    appState.checklistItems.forEach(item => {
        item.conforme = false;
        item.obs = '';
    });

    appState.fotos = [];

    document.getElementById('infoPlaca').value = '';
    document.getElementById('infoKm').value = '';
    document.getElementById('infoMotorista').value = '';
    document.getElementById('infoProximaManutencao').value = '';

    renderChecklistItems();
    renderPhotos();

    criarNovoChecklist();
    showToast('🔄 Check-list resetado');
}

// ===== UTILITÁRIOS =====
function showLoading(show) {
    document.getElementById('loadingIndicator').classList.toggle('hidden', !show);
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toastNotification');
    const toastMessage = document.getElementById('toastMessage');

    toastMessage.textContent = message;
    toast.classList.remove('hidden', 'bg-red-500', 'bg-yellow-500', 'bg-green-500');

    if (type === 'error') {
        toast.classList.add('bg-red-500');
    } else if (type === 'warning') {
        toast.classList.add('bg-yellow-500');
    } else {
        toast.classList.add('bg-green-500');
    }

    toast.classList.remove('hidden');

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// ===== VERIFICAR LOGIN AO CARREGAR =====
window.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    const userNickname = localStorage.getItem('userNickname');

    if (token && userNickname) {
        appState.currentUser = userNickname;
        showLoginScreen(false);
        initializeApp();
    } else {
        showLoginScreen(true);
    }
});
