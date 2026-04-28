@echo off
REM Script de Deploy do Portfólio Caldeiras para Vercel (Windows)

echo 🚀 Iniciando deploy do Portfólio Caldeiras...
echo.

REM Verificar se está na pasta portfolio
if not exist "package.json" (
    echo ❌ Erro: Execute este script da pasta portfolio
    echo    cd portfolio && deploy.bat
    exit /b 1
)

echo ✓ Verificação concluída
echo.

REM Instalar dependências
echo 📦 Instalando dependências...
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Erro ao instalar dependências
    exit /b 1
)

echo ✓ Dependências instaladas
echo.

REM Build
echo 🏗️  Compilando projeto...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Erro no build
    exit /b 1
)

echo ✓ Build concluído
echo.

REM Deploy
echo 🌐 Iniciando deploy no Vercel...
call vercel deploy --prod

echo.
echo ✅ Deploy concluído!
echo.
echo 💡 Dica: Acesse seu dashboard em https://vercel.com/dashboard
