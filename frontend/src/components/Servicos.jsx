import { Dumbbell, ArrowUpRight, CalendarCheck } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { waLink, WA_MSGS, WA_PODOTERAPIA_NUMBER } from "../lib/site";
import podoterapiaLogo from "../assets/optimized/podoterapia.webp";
import purePilatesLogo from "../assets/optimized/pure-pilates.webp";
import zionGymLogo from "../assets/optimized/zion-gym.webp";
import wbpfLogo from "../assets/optimized/wbpf-sao-paulo-sem-fundo.webp";
import { WbpfFormulario } from "./WbpfFormulario";
import atendimentoClinica from "../assets/optimized/atendimento-podologico-clinica.webp";

const services = [
  {
    title: "Tratamento de Onicocriptose & Infecção (Nível Internacional)",
    text: "Exame clínico palpatório detalhado, descompressão e conduta terapêutica para unhas encravadas e infeccionadas utilizando técnicas de padrão internacional.",
    tag: "Unhas infeccionadas, com granuloma ou processos dolorosos recorrentes",
  },
  {
    title: "Podologia Esportiva & Confecção de Órteses Plantares",
    text: "Avaliação biomecânica, cuidado com sobrecargas, alterações de pressão e lesões recorrentes, além da confecção personalizada de órteses plantares para melhor distribuição da pressão.",
    tag: "Atletas amadores e profissionais, praticantes de musculação, pilates, dança, natação, futebol e esportes em geral que buscam desempenho, prevenção de lesões e cuidado com os pés",
  },
  {
    title: "Podologia Clínica Integrativa",
    text: "Exame clínico palpatório, avaliação detalhada, higienização técnica, remoção de calosidades e prevenção contínua.",
    tag: "Manutenção contínua e prevenção de complicações na saúde dos pés",
  },
  {
    title: "Tratamento de Onicomicose e Infecções",
    text: "Protocolos avançados e seguros para o tratamento de fungos, micoses e infecções ungueais com suporte tecnológico.",
    tag: "Unhas com micoses severas, distrofias ou alterações de formato",
  },
  {
    title: "Podologia para Diabéticos",
    text: "Exame clínico palpatório e de sensibilidade, rastreamento preventivo de fissuras e cuidados protetores contínuos.",
    tag: "Pacientes com diabetes que necessitam de atenção preventiva especializada",
  },
  {
    title: "Naturopatia Aplicada à Podologia",
    text: "Uso de óleos essenciais, fotobiomodulação, laserterapia e terapias naturais focadas nas afecções dos pés.",
    tag: "Processos inflamatórios, dores e aceleração da cicatrização tecidual",
  },
  {
    title: "Naturopatia Integrativa (Geral)",
    text: "Abordagem terapêutica holística focada no reequilíbrio físico, mental e emocional.",
    tag: "Qualquer pessoa que busca alívio do estresse, bem-estar e qualidade de vida",
  },
];

export const Servicos = () => (
  <section id="servicos" className="bg-roxo-2 py-16 sm:py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-dourado/10 blur-3xl pointer-events-none" />
    <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
      <Reveal className="max-w-4xl mb-10 sm:mb-12">
          <Eyebrow dark>Podologia, Naturopatia & Parcerias Esportivas</Eyebrow>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-perola mt-4 leading-tight tracking-tight">
            Excelência clínica reconhecida pelo esporte de alta performance
          </h2>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.2fr_1fr] mb-14 sm:mb-16">
        <Reveal className="h-full">
          <article data-testid="servicos-patrocinio-wbpf" className="relative h-full overflow-hidden rounded-3xl border border-dourado/35 bg-roxo-deep/70 p-6 sm:p-7 flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.18em] text-dourado font-semibold">Patrocínio oficial</span>
            <div className="relative mt-6 flex h-28 items-center justify-center">
              <img src={wbpfLogo} alt="WBPF São Paulo — Federação Paulista de Fisiculturismo, Musculação e Fitness" className="relative h-28 w-28 max-w-full object-contain" loading="lazy" />
            </div>
            <h3 className="mt-5 font-serif text-3xl text-perola">WBPF São Paulo</h3>
            <p className="mt-2 text-xs uppercase tracking-[0.15em] text-dourado">Fisiculturismo</p>
            <p className="mt-5 text-sm text-perola/80 leading-relaxed">Patrocinadora oficial, com atendimento a atletas e premiações para vencedores de competições.</p>
            <div className="mt-auto pt-2"><WbpfFormulario /></div>
          </article>
        </Reveal>

        <Reveal delay={0.08} className="h-full">
          <article data-testid="servicos-parceria-pure" className="h-full rounded-3xl border border-perola/15 bg-roxo-deep/50 p-6 sm:p-7 flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.18em] text-dourado font-semibold">Parceria · Pure Pilates</span>
            <div className="mt-6 h-28 flex items-center justify-center gap-2 sm:gap-3" data-testid="servicos-parceria-logos">
              <a
                href={waLink(WA_MSGS.podoterapia, WA_PODOTERAPIA_NUMBER)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a Podoterapia no WhatsApp"
                title="Falar com a Podoterapia no WhatsApp"
                data-testid="servicos-podoterapia-whatsapp"
                className="min-w-0 max-w-[140px] flex-1 h-24 rounded-2xl bg-perola flex items-center justify-center p-3 ring-2 ring-transparent hover:ring-dourado transition-all duration-300"
              >
                <img src={podoterapiaLogo} alt="Podoterapia — Equilíbrio entre o corpo e alma" className="max-h-16 max-w-full object-contain" loading="lazy" />
              </a>
              <span aria-hidden="true" className="shrink-0 text-dourado text-xl">+</span>
              <div className="min-w-0 max-w-[140px] flex-1 h-24 rounded-2xl bg-perola flex items-center justify-center p-3">
                <img src={purePilatesLogo} alt="Pure Pilates — unidades da Mooca" className="max-h-16 max-w-full object-contain" loading="lazy" />
              </div>
            </div>
            <h3 className="mt-5 font-serif text-3xl text-perola">Podoterapia + Pure Pilates</h3>
            <p className="mt-2 text-xs uppercase tracking-[0.15em] text-dourado">Mooca e Mooca Juventus</p>
            <p className="mt-5 mb-6 text-sm text-perola/80 leading-relaxed">Benefícios e condições especiais para clientes das unidades parceiras.</p>
            <a href={waLink(WA_MSGS.podoterapia, WA_PODOTERAPIA_NUMBER)} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-dourado hover:text-perola">Conhecer os benefícios <ArrowUpRight size={16} /></a>
          </article>
        </Reveal>

        <Reveal delay={0.16} className="h-full">
          <article data-testid="servicos-parceria-zion" className="h-full rounded-3xl border border-perola/15 bg-roxo-deep/50 p-6 sm:p-7 flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.18em] text-dourado font-semibold">Parceria · Zion Gym</span>
            <div className="mt-6 h-28 flex items-center justify-center p-4"><img src={zionGymLogo} alt="Zion Gym" className="max-h-16 w-full max-w-[180px] object-contain" loading="lazy" /></div>
            <h3 className="mt-5 font-serif text-3xl text-perola">Zion Gym</h3>
            <p className="mt-2 text-xs uppercase tracking-[0.15em] text-dourado">Unidade Brás</p>
            <p className="mt-5 mb-6 text-sm text-perola/80 leading-relaxed">Atendimento podológico por <strong className="text-perola">R$ 135,00</strong> para alunos Zion Gym. Consulte disponibilidade e regras da parceria.</p>
            <a href={waLink(WA_MSGS.podoterapia, WA_PODOTERAPIA_NUMBER)} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-dourado hover:text-perola">Consultar condição especial <ArrowUpRight size={16} /></a>
          </article>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.1} className={i === 0 ? "md:col-span-2 xl:col-span-1" : ""}>
            <article
              data-testid={`servico-card-${i}`}
              className="group h-full bg-roxo-deep/50 border border-perola/10 rounded-3xl p-7 hover:border-dourado/50 hover:bg-roxo-deep/80 transition-all duration-500 flex flex-col"
            >
              <span className="font-serif text-4xl text-dourado/40 group-hover:text-dourado transition-colors duration-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-perola mt-4 leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm text-perola/80 leading-relaxed flex-1">{s.text}</p>
              <span className="mt-5 inline-flex items-start gap-2 text-[11px] uppercase tracking-[0.12em] text-dourado/90">
                <Dumbbell size={13} className="mt-0.5 shrink-0" />
                {s.tag}
              </span>
            </article>
          </Reveal>
        ))}

        <Reveal delay={0.2}>
          <div className="relative h-full min-h-[280px] rounded-3xl overflow-hidden group">
            <img
              src={atendimentoClinica}
              alt="Imagem ilustrativa de avaliação podológica em ambiente clínico"
              data-testid="servicos-sport-image"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-roxo via-roxo/40 to-transparent" />
            <div className="absolute bottom-0 p-7">
              <p className="font-serif italic text-2xl text-perola leading-snug">
                "Performance começa pela base."
              </p>
              <a
                href={waLink(WA_MSGS.consulta)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="servicos-cta-agendar"
                className="inline-flex items-center gap-2 mt-4 bg-dourado text-roxo-deep text-sm font-semibold px-6 py-3 rounded-full hover:bg-perola transition-colors duration-300"
              >
                <CalendarCheck size={16} />
                Agende sua Consulta Clínica
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
