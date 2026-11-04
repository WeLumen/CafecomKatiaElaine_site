# Deploy — Café com Katia Elaine (fora do Emergent)

Um único serviço Docker serve a API (/api) e o site (React). Mesmo esquema do ALTMO Pedidos.

## 1. Banco (MongoDB Atlas)
- Use o cluster M0 existente (ou crie outro) e um banco novo, ex.: `cafe_katia`.
- Network Access: liberar 0.0.0.0/0 (o Render Free não tem IP fixo).
- Copie a connection string para `MONGO_URL`.
- Contatos antigos: exporte a coleção `contacts` do Emergent (JSON) e importe no Atlas
  (Atlas > Browse Collections > Insert Document, ou `mongoimport`).

## 2. E-mail (Resend)
- Crie a chave em resend.com > API Keys -> `RESEND_API_KEY`.
- Sem domínio verificado, o Resend só entrega para o e-mail da sua própria conta
  (remetente `onboarding@resend.dev`). Para enviar à Katia, verifique um domínio
  e troque `EMAIL_FROM` (ex.: `Site <contato@seudominio.com.br>`).
- `OWNER_EMAIL` = e-mail da Katia que recebe os avisos de novo contato.

## 3. Código no GitHub
Suba esta pasta como repositório (o `.env` nunca vai junto).

## 4. Render
- New > Web Service > conecte o repositório > Runtime: Docker (Dockerfile na raiz).
- Plano Free. Em Environment, cadastre as variáveis de `backend/.env.example`.
- Health check path: `/api/health`
- No Free o serviço "dorme" após ~15 min sem acesso; o primeiro acesso demora ~50 s.

## 5. Teste
- `https://SEU-SERVICO.onrender.com/` -> site
- `https://SEU-SERVICO.onrender.com/api/` -> {"message":"Café com Katia Elaine API"}
- Envie o formulário de contato e confira em `/admin` (digite a ADMIN_KEY).

## 6. Domínio próprio (opcional)
Render > Settings > Custom Domains, e aponte o DNS (CNAME) como o Render indicar.

## O que foi alterado em relação ao export do Emergent
- backend/server.py: e-mail via Resend (antes: API do Emergent); serve o frontend.
- backend/requirements.txt: removidos `emergentintegrations` e `litellm`.
- frontend/public/index.html: removidos script e PostHog do Emergent.
- frontend/package.json: removidos `@emergentbase/*`.
- Contato.jsx e Admin.jsx: API na mesma origem.
- Novos: Dockerfile, .dockerignore, backend/.env.example, DEPLOY.md.

## Verificação final do formulário (obrigatória após publicar)
1. Render > Environment: defina `MONGO_URL`, `DB_NAME`, `ADMIN_KEY` (chave forte de 32+ caracteres). Salve e reinicie/deploy novamente. **Nunca envie as credenciais por WhatsApp ou chat.**
2. MongoDB Atlas: crie usuário de banco específico com permissão readWrite apenas em `cafe_katia`; configure Network Access conforme as opções de rede do serviço. Se optar por permitir todas as origens, use senha forte, privilégio mínimo e revise o acesso periodicamente.
3. Abra `https://SEU-DOMINIO/api/health`. Deve retornar `{"status":"ok","database":"connected"}`. Se der 503, consulte os logs no Render.
4. Envie um cadastro de TESTE pelo formulário Contato e outro pela Pré-inscrição. Só considere recebido quando aparecer no painel.
5. Abra `https://SEU-DOMINIO/admin`, informe a `ADMIN_KEY` e confira os dois registros. A chave é enviada no cabeçalho `X-Admin-Key`, nunca na URL.
6. Para receber notificações: configure `RESEND_API_KEY`, `OWNER_EMAIL` e `EMAIL_FROM` de domínio verificado no Resend. Sem isso, **o banco salva**, mas **não há notificação por e-mail**.
7. Apague os registros de teste pelo MongoDB Atlas; mantenha backups e uma política de retenção de dados pessoais.

**Aviso:** o ZIP prepara o código, mas não cria automaticamente um cluster MongoDB, uma conta Resend, nem modifica seu serviço Render sem acesso autorizado a essas plataformas.
