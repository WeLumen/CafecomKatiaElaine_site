import { Landmark, Globe, Network, ArrowUpRight } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { INSTAGRAM_ABP, INSTAGRAM_CASA_ANGOLA, INSTAGRAM_DIASPORA, waLink, WA_MSGS, WA_MENTORIAS_NUMBER, WA_ASSOCIACAO_NUMBER } from "../lib/site";
import abpLogo from "../assets/optimized/abp-claro.webp";
import diasporaLogo from "../assets/optimized/diaspora.webp";
import casaAngolaLogo from "../assets/optimized/casa-de-angola-hub.webp";
import cnbLogo from "../assets/optimized/cnb-networking-angola-brasil.webp";

// Para colocar o logo de uma organização: salve a imagem (sem fundo) em src/assets/logos,
// importe aqui e passe em `logo`. Enquanto não houver logo, o card mostra o ícone em `icon`.
const orgs = [
  {
    icon: Landmark,
    logo: abpLogo,
    logoAlt: "Logo da Associação Brasileira de Podólogos (ABP)",
    name: "Associação Brasileira de Podólogos",
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
    logoGlow: true,
    secondaryLogo: cnbLogo,
    secondaryLogoAlt: "Marca de networking Angola–Brasil — Conexões, Negócios e Intercâmbio",
    name: "Casa de Angola Hub",
    networkName: "NAB — Networking Angola–Brasil",
    networkText: "Conexões, negócios e intercâmbio entre Angola e Brasil, aproximando profissionais e oportunidades nos dois países.",
    cargos: ["Embaixadora da Casa de Angola Hub — Diáspora Business"],
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
    cargos: ["Diretora de Relações Internacionais da Diáspora Business"],
    text: "Conexões internacionais, intercâmbio e articulação de oportunidades, com atenção a desafios e necessidades recorrentes do setor.",
    cta: "Acessar Diaspora Business",
    href: INSTAGRAM_DIASPORA,
    testid: "atuacao-diaspora",
    ctaTestid: "atuacao-diaspora-cta",
  },
];

export const Atuacao = () => (
  <section id="atuacao" className="bg-creme py-16 sm:py-24 lg:py-32">
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
              <div className="relative h-24 flex items-center gap-4 mb-6 min-w-0">
                {o.logo ? (
                  <>
                    <img src={o.logo} alt={o.logoAlt} className={`min-w-0 max-h-24 object-contain object-left ${o.secondaryLogo ? "w-[46%] max-w-[130px]" : "w-full max-w-[180px]"} ${o.logoGlow ? "drop-shadow-[0_0_6px_rgba(253,251,251,0.9)]" : ""}`} loading="lazy" />
                    {o.secondaryLogo && (
                      <img src={o.secondaryLogo} alt={o.secondaryLogoAlt} className="w-[46%] max-w-[130px] min-w-0 max-h-24 object-contain object-center" loading="lazy" />
                    )}
                  </>
                ) : (
                  <o.icon size={48} className="text-dourado" strokeWidth={1.5} />
                )}
              </div>
              <h3 className="relative font-serif text-2xl sm:text-3xl leading-snug text-dourado">{o.name}</h3>
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
              <div className="relative mt-5 flex-1">
                <p className="text-sm sm:text-base text-perola/80 leading-relaxed">{o.text}</p>
                {o.networkName && (
                  <div className="mt-5 pt-5 border-t border-dourado/30">
                    <h4 className="font-serif text-xl text-dourado leading-snug">{o.networkName}</h4>
                    <p className="mt-2 text-sm text-perola/80 leading-relaxed">{o.networkText}</p>
                  </div>
                )}
              </div>
              {o.name === "Diaspora Business" && (
                <div className="relative mt-5 rounded-xl border border-dourado/30 bg-roxo-deep/30 px-4 py-4">
                  <p className="text-sm text-perola/80 leading-relaxed">Reuniões com a gestora às segundas e quintas-feiras, conforme agenda e demanda.</p>
                  <a href={waLink(WA_MSGS.reuniaoGestora, WA_MENTORIAS_NUMBER)} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 rounded-full bg-dourado px-4 py-2.5 text-sm font-semibold text-roxo-deep hover:bg-perola transition-colors">Agendar reunião com a gestora <ArrowUpRight size={15}/></a>
                </div>
              )}
              {o.testid === "atuacao-abp" && (
                <a
                  href={waLink(WA_MSGS.associacao, WA_ASSOCIACAO_NUMBER)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="atuacao-abp-associar"
                  className="relative mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-dourado px-5 py-3 text-sm font-semibold text-roxo-deep hover:bg-perola transition-colors"
                >
                  Quero me associar <ArrowUpRight size={16} />
                </a>
              )}
              {o.href && <a
                href={o.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={o.ctaTestid || `${o.testid}-cta`}
                className="relative inline-flex items-center gap-2 mt-7 text-sm font-medium text-dourado hover:text-perola transition-colors"
              >
                {o.cta}
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>}
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
