@echo off
setlocal
title Cafe com Katia Elaine - Previa local
cd /d "%~dp0frontend"
set "PATH=C:\Program Files\nodejs;%PATH%"
if not exist "node_modules\.bin\craco.cmd" (
  echo As dependencias do site ainda nao estao instaladas.
  echo Execute: npx.cmd --yes yarn@1.22.22 install
  pause
  exit /b 1
)
echo Abrindo o site em http://localhost:3000
echo Mantenha esta janela aberta enquanto estiver usando o site.
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0INICIAR-SITE.ps1"
pause
