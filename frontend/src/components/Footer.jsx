import { Instagram, MapPin } from "lucide-react";
import logo from "../assets/logo-round.png";
import { INSTAGRAM_PODOLOGIA, INSTAGRAM_CAFE } from "../lib/site";

const links = [
  ["Sobre", "#sobre"],
  ["Atuação", "#atuacao"],
  ["Serviços", "#servicos"],
  ["Mentorias", "#mentorias"],
  ["Café", "#cafe"],
  ["Contato", "#contato"],
];

export const Footer = () => (
  <footer data-testid="footer" className="bg-roxo text-perola pt-16 pb-8 relative overflow-hidden">
    <img src={logo} alt="" aria-hidden className="absolute -bottom-32 -right-32 w-96 h-96 opacity-[0.06] pointer-events-none" />
    <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-12 border-b border-perola/10">
        <div className="max-w-sm">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Café com Katia Elaine" className="w-14 h-14 rounded-full ring-1 ring-dourado/50" />
            <div className="leading-tight">
              <span className="font-serif text-xl font-semibold block">Katia Elaine</span>
              <span className="font-script text-dourado text-lg">café & podologia</span>
            </div>
          </div>
          <p className="text-sm text-perola/60 leading-relaxed">
            Podologia clínica e esportiva, naturopatia, mentorias profissionais e a comunidade Café
            com Katia Elaine. São Paulo para o mundo.
          </p>
        </div>

        <nav className="flex flex-col gap-2.5">
          <span className="text-[11px] uppercase tracking-[0.25em] text-dourado font-semibold mb-1">Navegação</span>
          {links.map(([label, href]) => (
            <a key={href} href={href} data-testid={`footer-link-${href.slice(1)}`} className="text-sm text-perola/60 hover:text-dourado transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2.5">
          <span className="text-[11px] uppercase tracking-[0.25em] text-dourado font-semibold mb-1">Contato</span>
          <span className="inline-flex items-center gap-2 text-sm text-perola/60">
            <MapPin size={15} className="text-dourado" /> Brás · São Paulo - SP
          </span>
          <a href={INSTAGRAM_PODOLOGIA} target="_blank" rel="noopener noreferrer" data-testid="footer-instagram-podologia" className="inline-flex items-center gap-2 text-sm text-perola/60 hover:text-dourado transition-colors">
            <Instagram size={15} className="text-dourado" /> @katiaelaine.podologia
          </a>
          <a href={INSTAGRAM_CAFE} target="_blank" rel="noopener noreferrer" data-testid="footer-instagram-cafe" className="inline-flex items-center gap-2 text-sm text-perola/60 hover:text-dourado transition-colors">
            <Instagram size={15} className="text-dourado" /> @cafecomkatiaelaine
          </a>
        </div>
      </div>
      <p className="pt-7 text-center text-xs text-perola/40">
        © {new Date().getFullYear()} Katia Elaine · Café com Katia Elaine. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);
