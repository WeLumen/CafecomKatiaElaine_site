import { ArrowUpRight, Instagram, Leaf, Megaphone, MessageCircle } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import welumenLogo from "../assets/optimized/welumen-sem-fundo.webp";

const companies = [
  {
    name: "We Lúmen",
    logo: welumenLogo,
    category: "Marketing & estratégia de marca",
    description: "Construímos marcas, experiências digitais e campanhas com estratégia, identidade e direção.",
    icon: Megaphone,
    website: "https://welumen.com.br/",
    websiteLabel: "Descubra a We Lúmen",
    whatsapp: "https://wa.me/5511968106788",
    phone: "(11) 96810-6788",
    instagram: "https://www.instagram.com/welumenoficial/",
    instagramLabel: "@welumenoficial",
    id: "welumen",
  },
  {
    name: "Baobá",
    category: "Paisagismo",
    icon: Leaf,
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
          <Reveal key={company.id} delay={index * 0.08}>
            <article data-testid={`empresa-${company.id}`} className={`flex h-full flex-col rounded-[2rem] border p-6 sm:p-9 ${company.logo ? "border-dourado/40 bg-roxo" : "border-borda bg-creme"}`}>
              <div className="flex items-center gap-3">
                {!company.logo && <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-roxo text-dourado"><company.icon size={21} strokeWidth={1.5} /></span>}
                <span className={`text-xs font-semibold uppercase tracking-[0.12em] ${company.logo ? "text-dourado" : "text-dourado-ink"}`}>{company.category}</span>
              </div>
              <h3 className="mt-6 font-serif text-3xl text-roxo sm:text-4xl">{company.logo ? <img src={company.logo} alt={company.name} loading="lazy" className="h-auto w-full max-w-[320px] object-contain object-left brightness-125 contrast-110" /> : company.name}</h3>
              {company.description && <p className={`mt-4 max-w-2xl text-base leading-relaxed ${company.logo ? "text-perola/80" : "text-suave"}`}>{company.description}</p>}
              {(company.website || company.whatsapp || company.instagram) && <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {company.website && <a href={company.website} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${company.logo ? "bg-dourado text-roxo-deep hover:bg-perola" : "bg-roxo text-perola hover:bg-roxo-2"}`}>{company.websiteLabel}<ArrowUpRight size={17} /></a>}
                {company.whatsapp && <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp da ${company.name}: ${company.phone}`} className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors ${company.logo ? "border-perola/30 text-perola hover:bg-roxo-2" : "border-roxo/25 text-roxo hover:bg-perola"}`}><MessageCircle size={17} />{company.phone}</a>}
                {company.instagram && <a href={company.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Instagram da ${company.name}: ${company.instagramLabel}`} className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors ${company.logo ? "border-perola/30 text-perola hover:bg-roxo-2" : "border-roxo/25 text-roxo hover:bg-perola"}`}><Instagram size={17} />{company.instagramLabel}</a>}
              </div>}
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
