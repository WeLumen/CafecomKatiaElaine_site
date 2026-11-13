# Café com Katia Elaine

Site profissional com atendimento podológico, formações, comunidade e empresas parceiras.

## Prévia local

Neste computador, abra `VER-SITE.cmd`. O atalho inicia o site e a API local.

- Site: http://127.0.0.1:3000
- Mensagens recebidas: http://127.0.0.1:3000/admin
- A chave local fica em `ACESSO-PAINEL-LOCAL.txt`, que não é enviado ao GitHub.

Em uma instalação nova, instale Node.js e Python 3.12, prepare o ambiente Python com `python -m venv .venv` e instale `backend/requirements-local.txt`. Na pasta `frontend`, instale as dependências com `npx.cmd --yes yarn@1.22.22 install`. Configure `backend/.env` conforme `CONFIGURACAO_BANCO_LEIA_PRIMEIRO.md` antes de iniciar.

## Páginas

- `/`: página principal.
- `/aperfeicoamento-podologia`: formação prática.
- `/podologia-com-lucro`: mentoria financeira.
- `/admin`: painel protegido de contatos, pré-inscrições e solicitações WBPF.

## Publicação

Consulte `DEPLOY.md`. O Dockerfile prepara frontend e API em um único serviço. Em produção, configure MongoDB e a chave administrativa no provedor de hospedagem. Notificações por e-mail dependem da configuração do Resend.

O SQLite local é separado do banco publicado. Arquivos `.env`, chaves de acesso, banco local, dependências instaladas e builds não devem ser enviados ao GitHub.

## Verificação

Frontend: `npm run build` na pasta `frontend`.

API local: `.venv\Scripts\python.exe -m unittest discover -s backend -p test_contacts.py`.
