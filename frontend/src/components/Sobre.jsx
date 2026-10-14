import { Footprints, HandHeart, Briefcase, Users } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";

const pillars = [
  {
    icon: Footprints,
    title: "Atendimento Clínico, Esportivo, Internacional & Saúde",
    text: "Tratamentos preventivos, reabilitadores, procedimentos de alta complexidade e naturopatia voltados para a saúde dos pés e do corpo.",
  },
  {
    icon: HandHeart,
    title: "Mentoria Prática (Hands-On)",
    text: "Treinamento completo com base em tudo o que o podólogo precisa saber para se destacar com excelência no mercado.",
  },
  {
    icon: Briefcase,
    title: "Gestão & Administração",
    text: "Administração de Empresas aplicada à estruturação de consultórios, precificação, organização financeira e conformidade com a legislação.",
  },
  {
    icon: Users,
    title: "Comunidade & Networking",
    text: "O Café com Katia Elaine reunindo profissionais em mesas redondas, encontros semestrais e podcasts.",
  },
];

import katiaFoto from "../assets/katia.jpg";

export const Sobre = () => (
  <section id="sobre" className="bg-perola py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-20">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-dourado/30 rotate-2" />
            <img
              src={katiaFoto}
              alt="Katia Elaine, podologista e CEO do Café com Katia Elaine"
              data-testid="sobre-image"
              className="relative rounded-[2rem] w-full h-[420px] sm:h-[520px] object-cover object-top shadow-2xl"
            />
            <span className="absolute -bottom-6 left-6 font-script text-3xl sm:text-4xl text-dourado bg-perola/95 px-5 py-2 rounded-2xl shadow-lg rotate-[-2deg]">
              Katia Elaine
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <Eyebrow>Sobre Katia Elaine</Eyebrow>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-roxo mt-4 leading-tight tracking-tight">
            Excelência clínica internacional, visão administrativa e liderança institucional
          </h2>
          <p className="mt-6 text-base sm:text-lg text-suave leading-relaxed">
            Com sólida atuação em podologia clínica integrativa, esportiva, naturopatia e gestão
            corporativa, Katia Elaine é técnica em podologia, podologista, naturopata e
            administradora de empresas. Unindo a ciência do cuidado com os pés à gestão estratégica
            de negócios, atua na prevenção, tratamento e reabilitação com técnicas de padrão
            internacional.
          </p>
          <p className="mt-4 text-base sm:text-lg text-suave leading-relaxed">
            Como mentora e CEO do <strong className="text-roxo font-semibold">Café com Katia Elaine</strong>,
            lidera um ecossistema focado no crescimento de profissionais da podologia — regulamentação,
            legislação, alta performance, prática clínica e networking humanizado.
          </p>
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <div
              data-testid={`sobre-pilar-${i}`}
              className="group h-full bg-creme border border-borda rounded-3xl p-7 hover:border-dourado/60 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgba(53,27,49,0.25)] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-roxo text-dourado flex items-center justify-center mb-5 group-hover:bg-dourado group-hover:text-perola transition-colors duration-500">
                <p.icon size={22} />
              </div>
              <h3 className="font-serif text-xl text-roxo leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm text-suave leading-relaxed">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
