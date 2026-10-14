import { Coffee, Mic, Users, CalendarDays, ArrowUpRight } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { waLink, WA_MSGS, WA_CAFE_NUMBER } from "../lib/site";
import logo from "../assets/logo-round.png";

const formats = [
  {
    icon: CalendarDays,
    title: "Reuniões Semestrais & Mesas Redondas",
    text: "Discussões profundas sobre casos clínicos, regulamentação da profissão, legislação e novidades do mercado internacional.",
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
  },
];

const imgCafe =
  "https://images.unsplash.com/photo-1763259405705-6e27ac5cdf0f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHw0fHxleGVjdXRpdmUlMjB3b21hbiUyMGNvZmZlZSUyMG1lZXRpbmclMjBwb2RpYXRyaXN0JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzkxOTMyNjQwfDA&ixlib=rb-4.1.0&q=85";

export const Cafe = () => (
  <section id="cafe" className="bg-roxo py-24 sm:py-32 relative overflow-hidden">
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
          <p className="mt-6 text-base sm:text-lg text-perola/70 leading-relaxed">
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
                    <p className="mt-1 text-sm text-perola/60 leading-relaxed">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <a
            href={waLink(WA_MSGS.cafe, WA_CAFE_NUMBER)}
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
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] border border-dourado/30 -rotate-2" />
            <img
              src={imgCafe}
              alt="Encontro de networking do Café com Katia Elaine"
              data-testid="cafe-image"
              className="relative rounded-[2.5rem] w-full h-[480px] sm:h-[560px] object-cover shadow-2xl"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
