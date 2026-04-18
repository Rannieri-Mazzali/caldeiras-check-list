#!/bin/bash
# Script para iniciar o sistema em Linux/Mac

clear

echo ""
echo "=========================================="
echo "  CALDEIRA TRANSPORTADORA"
echo "  Sistema de Check-list para Caminhões"
echo "=========================================="
echo ""

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "[ERRO] Node.js não encontrado!"
    echo "Por favor, instale Node.js de: https://nodejs.org"
    exit 1
fi

echo "[OK] Node.js encontrado"
echo ""

# Verificar se as dependências estão instaladas
if [ ! -d "node_modules" ]; then
    echo "[INFO] Instalando dependências..."
    npm install
    if [ $? -ne 0 ]; then
        echo "[ERRO] Falha ao instalar dependências"
        exit 1
    fi
fi

echo "[OK] Dependências prontas"
echo ""

# Iniciar o servidor
echo "[INFO] Iniciando servidor..."
echo ""
echo "=========================================="
echo "  Servidor rodando em:"
echo "  http://localhost:3000"
echo ""
echo "  Credenciais demo:"
echo "  - admin / admin123"
echo "  - motorista1 / senha123"
echo ""
echo "  Pressione Ctrl+C para parar"
echo "=========================================="
echo ""

npm run dev
