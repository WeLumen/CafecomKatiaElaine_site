import { Coffee, Mic, Users, CalendarDays, ArrowUpRight, MessagesSquare, Radio, Sparkles } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import logo from "../assets/optimized/logo-round.webp";
import katiaCafeRecorte from "../assets/optimized/katia-cafe-recorte.webp";

const communityLinks = {
  canal: process.env.REACT_APP_MASTERMIND_CANAL_URL || "https://whatsapp.com/channel/0029Vae1xNzH5JM1jlwjs423",
  grupo: process.env.REACT_APP_MASTERMIND_GRUPO_URL || "https://chat.whatsapp.com/JnVCYmInwsq8UBlworURvH",
};

const formats = [
  {
    icon: CalendarDays,
    title: "Reuniões Semestrais & Mesas Redondas",
    text: "Discussões e debates sobre gestão de clínicas, finanças, vigilância sanitária e legislação, com foco na regularização profissional e nas novidades do mercado.",
  },
  {
    icon: MessagesSquare,
    title: "Mastermind Podológico — Conecte-se e Cresça",
    text: "Encontros presenciais mensais na região de São Paulo, exclusivos para podólogos trocarem experiências, estratégias e conhecimentos práticos.",
  },
  {
    icon: Mic,
    title: "Podcasts & Conteúdos Educativos",
    text: "Entrevistas com especialistas, análises de mercado e orientações de carreira para a podologia.",
  },
  {
    icon: Users,
    title: "Apoio & Redes de Conexão",
    text: "Espaço contínuo de suporte, dúvidas e parcerias entre os membros da comunidade.",
    community: true,
  },
];

export const Cafe = () => (
  <section id="cafe" className="bg-roxo py-16 sm:py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute -bottom-48 -left-48 w-[560px] h-[560px] rounded-full bg-dourado/10 blur-3xl pointer-events-none" />
    <img
      src={logo}
      alt=""
      aria-hidden
      className="absolute -right-40 -top-40 w-[480px] h-[480px] opacity-[0.07] animate-spin-slowest pointer-events-none"
    />
    <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <Eyebrow dark>Comunidade & Networking</Eyebrow>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-perola mt-4 leading-tight tracking-tight">
            O <span className="font-script text-dourado text-4xl sm:text-5xl lg:text-6xl align-middle">café</span> com
            Katia Elaine
          </h2>
          <p className="mt-6 text-base sm:text-lg text-perola/80 leading-relaxed">
            Um movimento idealizado por Katia Elaine para conectar podólogos, estudantes,
            especialistas e fornecedores do setor — promovendo troca de conhecimentos, aprendizado
            contínuo e parcerias estratégicas que fortalecem toda a comunidade da podologia.
          </p>

          <div className="mt-9 space-y-4">
            {formats.map((f, i) => (
              <Reveal key={f.title} delay={0.1 + i * 0.1}>
                <div
                  data-testid={`cafe-formato-${i}`}
                  className="flex gap-4 bg-roxo-deep/50 border border-perola/10 rounded-2xl p-5 hover:border-dourado/50 transition-colors duration-500"
                >
                  <div className="w-11 h-11 rounded-xl bg-dourado/15 text-dourado flex items-center justify-center shrink-0">
                    <f.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-perola">{f.title}</h3>
                    <p className="mt-1 text-sm text-perola/80 leading-relaxed">{f.text}</p>
                    {f.community && (
                      <div className="mt-4 flex flex-col sm:flex-row gap-2">
                        {[
                          { label: "Acessar canal", icon: Radio, url: communityLinks.canal },
                          { label: "Entrar no grupo", icon: Users, url: communityLinks.grupo },
                        ].map((action) => (
                          action.url ? (
                            <a
                              key={action.label}
                              href={action.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 rounded-full border border-dourado/60 px-4 py-2 text-sm font-semibold text-dourado hover:bg-dourado hover:text-roxo-deep transition-colors"
                            >
                              <action.icon size={16} />{action.label}<ArrowUpRight size={14} />
                            </a>
                          ) : (
                            <span
                              key={action.label}
                              aria-label={`${action.label}: link ainda não informado`}
                              className="inline-flex items-center justify-center gap-2 rounded-full border border-perola/20 px-4 py-2 text-sm text-perola/50 cursor-not-allowed"
                              title="Link ainda não informado"
                            >
                              <action.icon size={16} />{action.label} · em breve
                            </span>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <a
            href="https://evento.cafecomkatiaelaine.org/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="cafe-cta-participar"
            className="inline-flex items-center gap-2.5 mt-9 bg-dourado text-roxo-deep font-semibold px-8 py-4 rounded-full hover:bg-perola transition-colors duration-300"
          >
            <Coffee size={18} />
            Participe do Café com Katia Elaine
            <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <figure className="relative isolate w-full max-w-[480px] mx-auto mt-8 lg:mt-0">
            <div aria-hidden="true" className="absolute inset-x-[4%] top-[12%] aspect-square rounded-full bg-gradient-to-br from-dourado/20 via-rosec/10 to-transparent blur-2xl" />
            <div aria-hidden="true" className="absolute inset-x-[2%] top-[12%] aspect-square rounded-full border border-dourado/30" />
            <div aria-hidden="true" className="absolute inset-x-[8%] top-[17%] aspect-square rounded-full border border-dourado/60" />
            <Sparkles aria-hidden="true" size={28} strokeWidth={1.2} className="absolute right-[3%] top-[15%] text-dourado" />
            <img
              src={katiaCafeRecorte}
              alt="Katia Elaine de traje vinho, apoiada em uma poltrona, idealizadora do Café com Katia Elaine"
              data-testid="cafe-image"
              width={1124}
              height={1399}
              loading="lazy"
              className="relative z-10 block w-full h-auto drop-shadow-[0_22px_28px_rgba(20,8,18,0.35)]"
            />
            <figcaption className="relative z-20 mx-auto -mt-2 w-fit rounded-full border border-dourado/30 bg-roxo-deep/80 px-6 py-3 text-center backdrop-blur-md">
              <span className="block font-serif text-xl text-perola">Katia Elaine</span>
              <span className="block mt-1 text-[10px] uppercase tracking-[0.2em] text-dourado">Conexões, conhecimento e comunidade</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </div>
  </section>
);
