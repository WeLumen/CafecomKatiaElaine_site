// Telefones organizados por finalidade. Use o número específico em cada CTA.
export const WA_ATENDIMENTO_NUMBER = "5511943648583";
export const WA_MENTORIAS_NUMBER = "5511910589872";
export const WA_ASSOCIACAO_NUMBER = "5511989450830";
// Compatibilidade com componentes existentes.
export const WA_NUMBER = WA_ATENDIMENTO_NUMBER;
export const WA_CAFE_NUMBER = WA_MENTORIAS_NUMBER;
export const WA_PODOTERAPIA_NUMBER = WA_ATENDIMENTO_NUMBER;

export const waLink = (msg, number = WA_NUMBER) =>
  `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;

export const WA_MSGS = {
  agendar: "Olá, Katia! Gostaria de agendar um atendimento podológico.",
  mentoria: "Olá, Katia! Quero conhecer as mentorias profissionais para podólogos.",
  cafe: "Olá, Katia! Quero participar do Café com Katia Elaine.",
  consulta: "Olá, Katia! Gostaria de agendar minha consulta clínica.",
  podoterapia: "Olá! Gostaria de saber mais sobre a Podoterapia.",
  associacao: "Olá! Gostaria de informações para me associar à Associação Brasileira de Podólogos (ABP).",
  reuniaoGestora: "Olá! Gostaria de agendar uma reunião com a gestora da Diáspora Business. Sei que os atendimentos ocorrem às segundas e quintas-feiras, conforme agenda e demanda. Poderia me informar a disponibilidade?",
};

// Dados confirmados: enquanto vazios, o site orienta a consultar a equipe.
// Exemplo de horário: "Seg a Sex · 9h às 18h". Preencha datas de início com texto legível.
export const HORARIO_ATENDIMENTO = "Segunda a sexta, das 9h às 19h · Sábado, das 9h às 13h";
export const ENDERECO_ATENDIMENTO = "Rua Piratininga, 615 — Brás, São Paulo - SP · CEP 03041-010";
export const INICIO_APERFEICOAMENTO = "";
export const INICIO_PODOLOGIA_LUCRO = "";

export const INSTAGRAM_PODOLOGIA = "https://www.instagram.com/akatiaelaine/";
export const INSTAGRAM_CAFE = "https://www.instagram.com/cafecomkatiaelaine/";
export const INSTAGRAM_ABP = "https://www.instagram.com/abp.podologia/";
export const INSTAGRAM_CASA_ANGOLA = "https://instagram.com/casadeangolasp";
export const INSTAGRAM_DIASPORA = "https://instagram.com/diasporasbusiness";
