import { GraduationCap, LineChart, Check, ArrowUpRight } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { waLink, WA_MSGS } from "../lib/site";

const programs = [
  {
    icon: GraduationCap,
    name: "Mentoria Prática & Técnica",
    label: "Hands-On · Turmas de 6 meses",
    focus:
      "Imersão prática em exames clínicos palpatórios, manejo de infecções, confecção de órteses, técnicas de nível internacional e biossegurança.",
    items: ["Acompanhamento clínico direto", "Direcionamento prático em casos reais", "Tudo para atuar com alta performance"],
    testid: "mentoria-pratica",
  },
  {
    icon: LineChart,
    name: "Mentoria de Gestão, Administração & Negócios",
    label: "On-line ao vivo e gravado · ou consultoria individual",
    focus:
      "Gestão aplicada à podologia por quem entende de administração de empresas: legislação, regulamentação e finanças.",
    items: ["Precificação lucrativa e controle de caixa", "Gestão de estoque e estruturação de consultório", "Estratégias de posicionamento no mercado"],
    testid: "mentoria-gestao",
  },
];

export const Mentorias = () => (
  <section id="mentorias" className="bg-creme py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal className="max-w-2xl mb-14">
        <Eyebrow>Mentorias para Podólogos & Podologistas</Eyebrow>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-roxo mt-4 leading-tight tracking-tight">
          Capacitação prática e estratégica para elevar seu nível técnico e financeiro
        </h2>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-6">
        {programs.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.15}>
            <article
              data-testid={p.testid}
              className="group h-full bg-perola border border-borda rounded-[2rem] p-8 sm:p-10 hover:border-dourado/60 hover:shadow-[0_30px_60px_-25px_rgba(53,27,49,0.3)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-14 h-14 rounded-2xl bg-roxo text-dourado flex items-center justify-center group-hover:bg-dourado group-hover:text-perola transition-colors duration-500">
                  <p.icon size={26} strokeWidth={1.75} />
                </div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-dourado-hover bg-creme border border-borda rounded-full px-3.5 py-1.5 text-right">
                  {p.label}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-roxo mt-6 leading-snug">{p.name}</h3>
              <p className="mt-4 text-sm sm:text-base text-suave leading-relaxed">{p.focus}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-tinta">
                    <span className="w-5 h-5 rounded-full bg-dourado/15 text-dourado flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(WA_MSGS.mentoria)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`${p.testid}-cta`}
                className="inline-flex items-center justify-center gap-2 mt-8 bg-roxo text-perola font-medium px-7 py-3.5 rounded-full hover:bg-dourado transition-colors duration-300"
              >
                Quero me Inscrever na Mentoria
                <ArrowUpRight size={16} />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
