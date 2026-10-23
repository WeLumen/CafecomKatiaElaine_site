import { Landmark, Globe, Network, ArrowUpRight } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { INSTAGRAM_ABP, INSTAGRAM_CASA_ANGOLA, INSTAGRAM_DIASPORA } from "../lib/site";
import abpLogo from "../assets/logos/abp-claro.webp";
import diasporaLogo from "../assets/logos/diaspora.webp";
import casaAngolaLogo from "../assets/logos/casa-de-angola.jpg";

// Para colocar o logo de uma organização: salve a imagem (sem fundo) em src/assets/logos,
// importe aqui e passe em `logo`. Enquanto não houver logo, o card mostra o ícone em `icon`.
const orgs = [
  {
    icon: Landmark,
    logo: abpLogo,
    logoAlt: "Logo da Associação Brasileira de Podólogos (ABP)",
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
    logo: casaAngolaLogo,
    logoAlt: "Logo da Casa de Angola Hub — Centro de Intercâmbio Angola-Brasil",
    logoRounded: true,
    name: "Casa de Angola Hub",
    sigla: "Relações Internacionais",
    cargos: ["Embaixadora da Casa de Angola Hub Diaspora Business"],
    text: "Ponte comercial entre a podologia brasileira, a África e a diáspora internacional.",
    cta: "Acessar Casa de Angola Hub",
    href: INSTAGRAM_CASA_ANGOLA,
    testid: "atuacao-angola",
    ctaTestid: "atuacao-angola-cta",
  },
  {
    icon: Network,
    logo: diasporaLogo,
    logoAlt: "Logo da Diáspora Business — Negócios África-Brasil",
    name: "Diaspora Business",
    sigla: "Diplomacia Corporativa",
    cargos: ["Diretora de Relações Nacionais e Internacionais"],
    text: "Expansão de conexões globais e intercâmbio técnico-científico.",
    cta: "Acessar Diaspora Business",
    href: INSTAGRAM_DIASPORA,
    testid: "atuacao-diaspora",
    ctaTestid: "atuacao-diaspora-cta",
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orgs.map((o, i) => (
          <Reveal key={o.name} delay={i * 0.12}>
            <article
              data-testid={o.testid}
              className="group relative h-full bg-roxo text-perola rounded-[2rem] p-8 sm:p-9 overflow-hidden flex flex-col hover:-translate-y-1.5 transition-transform duration-500"
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-dourado/10 blur-2xl group-hover:bg-dourado/20 transition-colors duration-700" />
              <div className="relative h-28 flex items-center mb-6">
                {o.logo ? (
                  <img src={o.logo} alt={o.logoAlt} className={`max-h-full max-w-full object-contain object-left ${o.logoRounded ? "rounded-2xl" : ""}`} loading="lazy" />
                ) : (
                  <o.icon size={48} className="text-dourado" strokeWidth={1.5} />
                )}
              </div>
              <span className="relative text-[11px] uppercase tracking-[0.25em] text-dourado font-semibold">{o.sigla}</span>
              <h3 className="relative font-serif text-2xl sm:text-3xl mt-2 leading-snug">{o.name}</h3>
              <div className="relative flex flex-wrap gap-2 mt-5">
                {o.cargos.map((c) => (
                  <span
                    key={c}
                    className="text-[11px] uppercase tracking-[0.14em] border border-dourado/40 text-rosec rounded-full px-3.5 py-1.5"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <p className="relative mt-5 text-sm sm:text-base text-perola/70 leading-relaxed flex-1">{o.text}</p>
              <a
                href={o.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={o.ctaTestid || `${o.testid}-cta`}
                className="relative inline-flex items-center gap-2 mt-7 text-sm font-medium text-dourado hover:text-perola transition-colors"
              >
                {o.cta}
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
