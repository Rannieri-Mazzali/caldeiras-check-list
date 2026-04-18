@echo off
REM Script para iniciar o sistema de Check-list Caldeira

cls
echo.
echo ==========================================
echo   CALDEIRA TRANSPORTADORA
echo   Sistema de Check-list para Caminhoes
echo ==========================================
echo.

REM Verificar se Node.js está instalado
node --version >nul 2>&1
if errorlevel 1 (
    echo [ERRO] Node.js nao encontrado!
    echo Por favor, instale Node.js de: https://nodejs.org
    pause
    exit /b 1
)

echo [OK] Node.js encontrado
echo.

REM Verificar se as dependências estão instaladas
if not exist "node_modules" (
    echo [INFO] Instalando dependências...
    call npm install
    if errorlevel 1 (
        echo [ERRO] Falha ao instalar dependências
        pause
        exit /b 1
    )
)

echo [OK] Dependências prontas
echo.

REM Iniciar o servidor
echo [INFO] Iniciando servidor...
echo.
echo ==========================================
echo   Servidor rodando em:
echo   http://localhost:3000
echo.
echo   Credenciais demo:
echo   - admin / admin123
echo   - motorista1 / senha123
echo.
echo   Pressione Ctrl+C para parar
echo ==========================================
echo.

call npm run dev

pause
