import { ArrowUpRight, Instagram, Leaf, Megaphone, MessageCircle } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import welumenLogo from "../assets/optimized/welumen-sem-fundo.webp";
import baobaLogo from "../assets/baoba-logo-oficial.png";

const companies = [
  {
    name: "We Lúmen",
    logo: welumenLogo,
    logoClassName: "brightness-[0.45] contrast-125",
    category: "Marketing & estratégia de marca",
    description: "Construímos marcas, experiências digitais e campanhas com estratégia, identidade e direção.",
    icon: Megaphone,
    website: "https://welumen.com.br/",
    websiteLabel: "Descubra a We Lúmen",
    whatsapp: "https://wa.me/5511968106788",
    phone: "(11) 96810-6788",
    offer: {
      text: "Contratando serviços com a We Lúmen, você ganha 20% de desconto.",
      label: "Quero meus 20% de desconto",
      message: "Olá! Vim pelo site Café com Katia Elaine e quero contratar os serviços da We Lúmen com 20% de desconto.",
    },
    instagram: "https://www.instagram.com/welumenoficial/",
    instagramLabel: "@welumenoficial",
    id: "welumen",
  },
  {
    name: "Baobá",
    logo: baobaLogo,
    category: "Paisagismo & serviços",
    description: "Paisagismo, decoração, vasos e plantas permanentes, jardim vertical e construção civil para transformar seu espaço.",
    icon: Leaf,
    whatsapp: "https://wa.me/5516997788948",
    phone: "(16) 99778-8948",
    offer: {
      text: "Contratando serviços com a Baobá, você ganha 20% de desconto.",
      label: "Quero meus 20% de desconto",
      message: "Olá! Vim pelo site Café com Katia Elaine e quero contratar os serviços da Baobá com 20% de desconto.",
    },
    instagram: "https://www.instagram.com/baobaservicos/",
    instagramLabel: "@baobaservicos",
    id: "baoba",
  },
];

export const EmpresasParceiras = () => (
  <section id="empresas-parceiras" data-testid="empresas-parceiras" className="border-t border-borda bg-perola py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal className="mb-8 max-w-2xl sm:mb-10">
        <Eyebrow>Nossa rede de conexões</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl text-roxo sm:text-4xl lg:text-5xl">Empresas parceiras</h2>
      </Reveal>
      <div className={`grid gap-6 ${companies.length > 1 ? "md:grid-cols-2" : "max-w-4xl"}`}>
        {companies.map((company, index) => (
          <Reveal key={company.id} delay={index * 0.08} className="h-full">
            <article data-testid={`empresa-${company.id}`} className="flex h-full flex-col rounded-[2rem] border border-borda bg-creme p-6 sm:p-9">
              <div className="flex items-center gap-3">
                {!company.logo && <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-roxo text-dourado"><company.icon size={21} strokeWidth={1.5} /></span>}
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-dourado-ink">{company.category}</span>
              </div>
              <h3 className="mt-6 flex h-56 items-center justify-center p-4 font-serif text-3xl text-roxo sm:h-64">{company.logo ? <img src={company.logo} alt={company.name} loading="lazy" className={`h-full w-full max-w-[320px] object-contain ${company.logoClassName || ""}`} /> : company.name}</h3>
              {company.description && <p className="mt-5 max-w-2xl text-base leading-relaxed text-suave md:min-h-[104px]">{company.description}</p>}
              {company.offer && (
                <div className="mt-6 rounded-2xl border border-dourado/40 bg-dourado/10 p-5">
                  <p className="text-base font-medium leading-relaxed text-roxo md:min-h-12">{company.offer.text}</p>
                  <a
                    href={`${company.whatsapp}?text=${encodeURIComponent(company.offer.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-dourado px-5 py-3 text-center text-sm font-semibold text-roxo-deep transition-colors hover:bg-roxo hover:text-perola hover:border-roxo"
                  >
                    <MessageCircle size={18} className="shrink-0" />
                    {company.offer.label}
                  </a>
                </div>
              )}
              {(company.website || company.whatsapp || company.instagram) && <div className="mt-6 grid gap-3">
                {company.whatsapp && <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp da ${company.name}: ${company.phone}`} className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors border-roxo/25 text-roxo hover:bg-roxo hover:text-perola hover:border-roxo`}><MessageCircle size={17} />{company.phone}</a>}
                {company.instagram && <a href={company.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Instagram da ${company.name}: ${company.instagramLabel}`} className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors border-roxo/25 text-roxo hover:bg-roxo hover:text-perola hover:border-roxo`}><Instagram size={17} />{company.instagramLabel}</a>}
                {company.website && <a href={company.website} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors border border-roxo/25 text-roxo hover:bg-roxo hover:text-perola hover:border-roxo`}>{company.websiteLabel}<ArrowUpRight size={17} /></a>}
              </div>}
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
