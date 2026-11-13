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

## Links da comunidade

Os botões **Acessar canal** e **Entrar no grupo** ficam em **Apoio & Redes de Conexão**, na seção Café. Os endereços são configurados em `frontend/src/components/Cafe.jsx`:

- Canal: https://whatsapp.com/channel/0029Vae1xNzH5JM1jlwjs423
- Grupo: https://chat.whatsapp.com/JnVCYmInwsq8UBlworURvH

Opcionalmente, configure `REACT_APP_MASTERMIND_CANAL_URL` e `REACT_APP_MASTERMIND_GRUPO_URL` antes do build para substituir esses endereços. Uma alteração exige nova publicação.

## Imagens

As páginas usam as imagens otimizadas em `frontend/src/assets/optimized/`. Os originais sem uso foram preservados na pasta local `arquivo-local/imagens/`, ignorada pelo Git e pelo Docker. Essa pasta não acompanha novos clones; mantenha uma cópia de segurança caso precise editar os originais.

`scripts/optimize_site_images.py` continua disponível para otimizar novas imagens adicionadas ao projeto (requer Pillow).

## Verificação

Frontend: `npm run build` na pasta `frontend`.

API local: `.venv\Scripts\python.exe -m unittest discover -s backend -p test_contacts.py`.
