#!/bin/bash

# Script de Deploy do Portfólio Caldeiras para Vercel

echo "🚀 Iniciando deploy do Portfólio Caldeiras..."
echo ""

# Verificar se está na pasta portfolio
if [ ! -f "package.json" ]; then
    echo "❌ Erro: Execute este script da pasta portfolio"
    echo "   cd portfolio && bash deploy.sh"
    exit 1
fi

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está instalado"
    exit 1
fi

echo "✓ Node.js encontrado"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Erro ao instalar dependências"
    exit 1
fi

echo "✓ Dependências instaladas"
echo ""

# Build
echo "🏗️  Compilando projeto..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erro no build"
    exit 1
fi

echo "✓ Build concluído"
echo ""

# Verificar Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "📲 Instalando Vercel CLI..."
    npm install -g vercel
fi

echo "✓ Vercel CLI disponível"
echo ""

# Deploy
echo "🌐 Iniciando deploy no Vercel..."
vercel deploy --prod

echo ""
echo "✅ Deploy concluído!"
echo ""
echo "💡 Dica: Acesse seu dashboard em https://vercel.com/dashboard"
