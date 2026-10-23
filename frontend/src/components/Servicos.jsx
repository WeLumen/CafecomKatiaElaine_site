import { Trophy, Dumbbell, Medal, CalendarCheck } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { waLink, WA_MSGS, WA_PODOTERAPIA_NUMBER } from "../lib/site";
import podoterapiaLogo from "../assets/logos/podoterapia.webp";
import purePilatesLogo from "../assets/logos/pure-pilates.webp";

const partners = ["Clube Atlético Juventus (Mooca)", "Zion Gym — Centro de Condicionamento"];

const services = [
  {
    title: "Tratamento de Onicocriptose & Infecção (Nível Internacional)",
    text: "Exame clínico palpatório detalhado, descompressão e conduta terapêutica para unhas encravadas e infeccionadas utilizando técnicas de padrão internacional.",
    tag: "Unhas infeccionadas, com granuloma ou processos dolorosos recorrentes",
  },
  {
    title: "Podologia Esportiva & Confecção de Órteses Plantares",
    text: "Avaliação biomecânica, alívio de sobrecargas e confecção personalizada de órteses plantares para correção e distribuição de pressão.",
    tag: "Atletas amadores e profissionais (fisiculturistas, praticantes de pilates e atletas do futebol/clube) que buscam alta performance, prevenção de lesões e alinhamento postural",
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

const imgSport =
  "https://images.unsplash.com/photo-1717500252297-b09508db7ceb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwyfHxwaWxhdGVzJTIwcmVmb3JtZXIlMjBneW0lMjBzcG9ydHMlMjB0cmFpbmluZyUyMGF0aGxldGV8ZW58MHx8fHwxNzkxOTMyNjQwfDA&ixlib=rb-4.1.0&q=85";

export const Servicos = () => (
  <section id="servicos" className="bg-roxo-2 py-24 sm:py-32 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-dourado/10 blur-3xl pointer-events-none" />
    <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
      <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
        <Reveal>
          <Eyebrow dark>Podologia, Naturopatia & Parcerias Esportivas</Eyebrow>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-perola mt-4 leading-tight tracking-tight">
            Excelência clínica reconhecida pelo esporte de alta performance
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="bg-roxo-deep/60 border border-dourado/25 rounded-3xl p-6 sm:p-7 backdrop-blur">
            <div className="flex items-center gap-3 mb-4">
              <Trophy size={22} className="text-dourado" />
              <span className="text-xs uppercase tracking-[0.22em] text-dourado font-semibold">
                Patrocínio Oficial & Destaque
              </span>
            </div>
            <p className="text-perola/85 text-sm sm:text-base leading-relaxed">
              <strong className="text-dourado">Patrocinadora Oficial WBBF Brasil</strong> (World
              Bodybuilding Federation — Fisiculturismo), com parcerias estratégicas em centros de
              treinamento e clubes:
            </p>
            <div className="mt-5 flex items-center gap-3" data-testid="servicos-parceria-logos">
              <a
                href={waLink(WA_MSGS.podoterapia, WA_PODOTERAPIA_NUMBER)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a Podoterapia no WhatsApp"
                title="Falar com a Podoterapia no WhatsApp"
                data-testid="servicos-podoterapia-whatsapp"
                className="flex-1 h-28 rounded-2xl bg-perola flex items-center justify-center p-3 ring-2 ring-transparent hover:ring-dourado transition-all duration-300"
              >
                <img src={podoterapiaLogo} alt="Podoterapia — Equilíbrio entre o corpo e alma" className="max-h-full max-w-full object-contain" loading="lazy" />
              </a>
              <span className="w-8 h-8 shrink-0 rounded-full bg-roxo text-dourado flex items-center justify-center text-lg font-semibold leading-none">+</span>
              <div className="flex-1 h-28 rounded-2xl bg-perola flex items-center justify-center p-3">
                <img src={purePilatesLogo} alt="Pure Pilates — Mooca Juventus e Mooca Aparajú" className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
            </div>
            <p className="mt-3 text-xs text-perola/70 leading-relaxed">
              Parceria Podoterapia + Pure Pilates: benefícios e ofertas exclusivas para clientes. Toque no logo da Podoterapia para falar no WhatsApp.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {partners.map((p) => (
                <span
                  key={p}
                  data-testid={`servicos-parceiro-${p.split(" ")[0].toLowerCase()}`}
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] border border-dourado/40 text-rosec rounded-full px-3.5 py-1.5"
                >
                  <Medal size={12} className="text-dourado" />
                  {p}
                </span>
              ))}
            </div>
          </div>
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
              <p className="mt-3 text-sm text-perola/65 leading-relaxed flex-1">{s.text}</p>
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
              src={imgSport}
              alt="Atleta em treinamento de alta performance"
              data-testid="servicos-sport-image"
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
