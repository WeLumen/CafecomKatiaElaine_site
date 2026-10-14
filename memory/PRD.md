# PRD — Website Portfólio Profissional Katia Elaine

## Problem Statement (original)
Site portfólio profissional para Katia Elaine (Podologista | Técnica em Podologia | Naturopata | Administradora de Empresas | CEO do Café com Katia Elaine), com seções: Hero com CTAs, Sobre (4 pilares), Atuação Institucional (ABP + Casa de Angola Hub), Serviços de Podologia/Naturopatia/Parcerias Esportivas (WBBF, Pure Pilates Mooca, Clube Atlético Juventus, Zion Gym + tabela de 7 serviços), Mentorias (Prática Hands-On 6 meses + Gestão), Café com Katia Elaine, Depoimentos, Contato (formulário + Brás SP + redes sociais). Paleta fornecida: roxo #351B31/#542B46, dourado #B88D56, creme #F8F5EF, perola #FFFDF9, rose #E6D8D6. Logo mandala fornecida pela usuária.

## Arquitetura
- Frontend: React 19 + Tailwind + framer-motion (scroll reveals, hero cinético, parallax) + lenis (smooth scroll) + sonner (toasts)
- Backend: FastAPI + MongoDB (motor)
- Rotas API: POST /api/contacts (salva lead), GET /api/contacts?key= (lista protegida por ADMIN_KEY)
- Frontend pages: / (one-page) e /admin (mensagens recebidas, protegida por chave)

## Personas
- Paciente/atleta buscando atendimento podológico
- Podólogo(a)/estudante buscando mentoria
- Parceiro esportivo/institucional
- Katia (dona do site) consultando mensagens no /admin

## Core Requirements (estáticos)
- One-page editorial pt-BR com todas as 8 seções do briefing
- CTAs de ação abrem WhatsApp com mensagem pronta
- Formulário de contato salva no banco de dados
- Logo da usuária como favicon e medalhão do hero

## Implementado
- 2026-10-13: Site completo — hero cinético com revelação mascarada e medalhão-mandala com parallax/rotação, marquee editorial, Sobre com 4 pilares, Atuação Institucional (ABP + Casa de Angola Hub), 7 serviços clínicos + WBBF/parceiros, 2 mentorias, Café com Katia Elaine, depoimentos, formulário de contato com MongoDB + toast, footer, página /admin com chave, favicon do logo, responsivo (375/768/1366 verificado)
- 2026-10-14: WhatsApp real (11 98945-0830) em todos os botões; botão ABP ligado ao Instagram oficial (@abp.podologia); Instagram do Café atualizado; foto real da Katia na seção Sobre; notificação por e-mail (Resend gerenciado Emergent) a cada novo contato — envio testado e aceito (202), destinatário ainda é endereço de teste até a usuária informar o e-mail real
- 2026-10-14: Número próprio do Café com Katia Elaine (11 91058-9872) nos CTAs "Participar do Café"; card de Relações Internacionais com dois links oficiais: Casa de Angola Hub (@casadeangolasp) e Diaspora Business (@diasporasbusiness)

## Backlog Priorizado
- P0: Informar o e-mail real da Katia e ativar OWNER_EMAIL (hoje: delivered@resend.dev, endereço de teste) + EMAIL_REPLY_TO com o mesmo e-mail
- P1: Link real do botão "Acessar Casa de Angola Hub" (hoje aponta para o formulário)
- P1: Endereço completo do consultório no Brás
- P2: Mais fotos reais (clínica, atendimentos) nas seções de serviços e Café
- P2: Seção de galeria/antes-e-depois clínico
- P2: SEO avançado (OG tags com imagem, sitemap)

## Próximas Tarefas
1. Receber e-mail real da Katia → trocar OWNER_EMAIL e adicionar EMAIL_REPLY_TO no backend/.env
2. Link oficial da Casa de Angola Hub
3. Endereço completo do Brás
