export const WA_NUMBER = "5511989450830";
export const WA_CAFE_NUMBER = "5511910589872";
export const WA_PODOTERAPIA_NUMBER = "5511943648583";

export const waLink = (msg, number = WA_NUMBER) =>
  `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;

export const WA_MSGS = {
  agendar: "Olá, Katia! Gostaria de agendar um atendimento podológico.",
  mentoria: "Olá, Katia! Quero conhecer as mentorias profissionais para podólogos.",
  cafe: "Olá, Katia! Quero participar do Café com Katia Elaine.",
  consulta: "Olá, Katia! Gostaria de agendar minha consulta clínica.",
  podoterapia: "Olá! Gostaria de saber mais sobre a Podoterapia.",
};

// Preencha com o horário real de atendimento (ex.: "Seg a Sex · 9h às 18h"). Se ficar vazio, não aparece no site.
export const HORARIO_ATENDIMENTO = "";

export const INSTAGRAM_PODOLOGIA = "https://instagram.com/katiaelaine.podologia";
export const INSTAGRAM_CAFE = "https://www.instagram.com/cafecomkatiaelaine/";
export const INSTAGRAM_ABP = "https://www.instagram.com/abp.podologia/";
export const INSTAGRAM_CASA_ANGOLA = "https://instagram.com/casadeangolasp";
export const INSTAGRAM_DIASPORA = "https://instagram.com/diasporasbusiness";
