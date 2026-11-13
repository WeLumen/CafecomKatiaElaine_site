$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
$pythonPath = Join-Path $PSScriptRoot '.venv\Scripts\python.exe'
if (-not (Test-Path -LiteralPath $pythonPath)) {
    throw 'O ambiente Python ainda precisa ser instalado nesta pasta.'
}
if (-not (Test-Path -LiteralPath (Join-Path $PSScriptRoot 'backend\.env'))) {
    throw 'A configuracao backend\.env ainda precisa ser preparada.'
}
$health = $null
try { $health = Invoke-RestMethod 'http://127.0.0.1:8000/api/health' -TimeoutSec 3 } catch {}
if ($health.status -ne 'ok') {
    $backendProcess = Start-Process -FilePath $pythonPath -ArgumentList '-m','uvicorn','server:app','--host','127.0.0.1','--port','8000' -WorkingDirectory (Join-Path $PSScriptRoot 'backend') -WindowStyle Hidden -RedirectStandardOutput (Join-Path $PSScriptRoot 'backend\local-server.log') -RedirectStandardError (Join-Path $PSScriptRoot 'backend\local-server-error.log') -PassThru
    for ($attempt = 0; $attempt -lt 15; $attempt++) {
        Start-Sleep -Seconds 1
        try { $health = Invoke-RestMethod 'http://127.0.0.1:8000/api/health' -TimeoutSec 2 } catch {}
        if ($health.status -eq 'ok') { break }
        if ($backendProcess.HasExited) { break }
    }
    if ($health.status -ne 'ok') { throw 'O banco nao iniciou. Consulte backend\local-server-error.log.' }
}
$env:Path = 'C:\Program Files\nodejs;' + $env:Path
$env:HOST = '127.0.0.1'
$env:PORT = '3000'
Write-Host 'Banco conectado. Mensagens disponiveis em http://127.0.0.1:3000/admin'
Write-Host 'A chave esta no arquivo ACESSO-PAINEL-LOCAL.txt, nesta pasta.'
Set-Location -LiteralPath (Join-Path $PSScriptRoot 'frontend')
& npm.cmd start
