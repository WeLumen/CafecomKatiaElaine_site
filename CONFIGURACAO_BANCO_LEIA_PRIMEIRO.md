# Banco de dados — Café com Kátia Elaine

Este ZIP traz os formulários de Contato e Pré-inscrição ligados à API `/api/contacts`, com armazenamento na coleção `contacts` do MongoDB Atlas e visualização em `/admin`.

## Para ativar
1. No MongoDB Atlas, crie ou reutilize um cluster e um usuário de banco específico. Copie a string de conexão (`mongodb+srv://...`).
2. No Render, abra o serviço que hospeda **este projeto**, e vá a **Environment**. Configure as variáveis indicadas em `backend/.env.example`: `MONGO_URL`, `DB_NAME`, `ADMIN_KEY` (32+ caracteres aleatórios). Não coloque segredos nos arquivos públicos do GitHub.
3. Publique a versão ZIP no repositório GitHub usado pelo Render (ou faça deploy pelo método já adotado). O Dockerfile constrói frontend e backend em um serviço só.
4. Confira o endereço `https://SEU-SITE/api/health`. O resultado `status: ok` e `database: connected` indica conexão ativa.
5. Faça duas submissões de teste (Contato e Pré-inscrição) e consulte-as em `https://SEU-SITE/admin`.
6. Opcional: configure `RESEND_API_KEY`, `OWNER_EMAIL`, `EMAIL_FROM` para notificações. Sem isso os formulários continuam sendo salvos, mas não há e-mail.

## Segurança
- Nunca envie MONGO_URL, ADMIN_KEY ou RESEND_API_KEY em conversa ou print. Oculte os valores.
- O painel exige `ADMIN_KEY` via cabeçalho HTTP, não por URL.
- Antes de receber dados reais, estabeleça autorização, aviso de privacidade e retenção apropriada à LGPD.
- É necessário testar no Render: o ZIP, sozinho, não prova que o MongoDB da produção está ligado.
