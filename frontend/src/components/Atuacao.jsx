import { Landmark, Globe, ArrowUpRight } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { INSTAGRAM_ABP, INSTAGRAM_CASA_ANGOLA, INSTAGRAM_DIASPORA } from "../lib/site";

const orgs = [
  {
    icon: Landmark,
    name: "Associação Brasileira de Podólogos",
    sigla: "ABP",
    cargos: ["Diretora de Marketing e Patrimônio", "Secretaria Geral"],
    text: "Fortalecimento da classe, valorização da podologia no Brasil, gestão patrimonial e articulação de comunicação institucional.",
    cta: "Acessar ABP",
    href: INSTAGRAM_ABP,
    testid: "atuacao-abp",
  },
  {
    icon: Globe,
    name: "Relações Internacionais & Diplomacia Corporativa",
    sigla: "Global",
    cargos: ["Diretora de Relações Nacionais e Internacionais", "Embaixadora da Casa de Angola Hub Diaspora Business"],
    text: "Expansão de conexões globais, intercâmbio técnico-científico e ponte comercial entre a podologia brasileira, a África e a diáspora internacional.",
    cta: "Acessar Casa de Angola Hub",
    links: [
      { label: "Casa de Angola Hub", href: INSTAGRAM_CASA_ANGOLA, testid: "atuacao-angola-cta" },
      { label: "Diaspora Business", href: INSTAGRAM_DIASPORA, testid: "atuacao-diaspora-cta" },
    ],
    testid: "atuacao-angola",
  },
];

export const Atuacao = () => (
  <section id="atuacao" className="bg-creme py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal className="max-w-2xl mb-14">
        <Eyebrow>Atuação Institucional & Diretorias</Eyebrow>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-roxo mt-4 leading-tight tracking-tight">
          Representação estratégica em órgãos de classe e organizações internacionais
        </h2>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-6">
        {orgs.map((o, i) => (
          <Reveal key={o.name} delay={i * 0.15}>
            <article
              data-testid={o.testid}
              className="group relative h-full bg-roxo text-perola rounded-[2rem] p-8 sm:p-10 overflow-hidden hover:-translate-y-1.5 transition-transform duration-500"
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-dourado/10 blur-2xl group-hover:bg-dourado/20 transition-colors duration-700" />
              <o.icon size={40} className="text-dourado mb-6" strokeWidth={1.5} />
              <span className="text-[11px] uppercase tracking-[0.25em] text-dourado font-semibold">{o.sigla}</span>
              <h3 className="font-serif text-2xl sm:text-3xl mt-2 leading-snug">{o.name}</h3>
              <div className="flex flex-wrap gap-2 mt-5">
                {o.cargos.map((c) => (
                  <span
                    key={c}
                    className="text-[11px] uppercase tracking-[0.14em] border border-dourado/40 text-rosec rounded-full px-3.5 py-1.5"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm sm:text-base text-perola/70 leading-relaxed">{o.text}</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-7">
                {(o.links || [{ label: o.cta, href: o.href, testid: `${o.testid}-cta` }]).map((l) => (
                  <a
                    key={l.testid}
                    href={l.href}
                    {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    data-testid={l.testid}
                    className="inline-flex items-center gap-2 text-sm font-medium text-dourado hover:text-perola transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
