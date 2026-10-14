import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, CalendarCheck } from "lucide-react";
import logo from "../assets/logo-round.png";
import { waLink, WA_MSGS } from "../lib/site";

const links = [
  ["Sobre", "#sobre"],
  ["Atuação", "#atuacao"],
  ["Serviços", "#servicos"],
  ["Mentorias", "#mentorias"],
  ["Café", "#cafe"],
  ["Contato", "#contato"],
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="main-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-perola/90 backdrop-blur-xl border-b border-borda shadow-[0_8px_30px_rgba(53,27,49,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[72px]">
        <a href="#hero" data-testid="nav-brand" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Café com Katia Elaine"
            className="w-11 h-11 rounded-full ring-1 ring-dourado/50 group-hover:rotate-[15deg] transition-transform duration-500"
          />
          <div className="leading-tight">
            <span className="font-serif text-lg font-semibold text-roxo block">Katia Elaine</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-dourado">Podologia & Mentoria</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              data-testid={`nav-link-${href.slice(1)}`}
              className="text-sm text-suave hover:text-roxo relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-dourado hover:after:w-full after:transition-all after:duration-300 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href={waLink(WA_MSGS.agendar)}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-cta-agendar"
            className="inline-flex items-center gap-2 bg-roxo text-perola text-sm font-medium px-5 py-2.5 rounded-full hover:bg-dourado transition-colors duration-300"
          >
            <CalendarCheck size={16} />
            Agendar Consulta
          </a>
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-roxo"
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-perola/95 backdrop-blur-xl border-b border-borda overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  data-testid={`nav-mobile-link-${href.slice(1)}`}
                  onClick={() => setOpen(false)}
                  className="text-base text-tinta font-medium"
                >
                  {label}
                </a>
              ))}
              <a
                href={waLink(WA_MSGS.agendar)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="nav-mobile-cta-agendar"
                className="inline-flex items-center justify-center gap-2 bg-roxo text-perola text-sm font-medium px-5 py-3 rounded-full"
              >
                <CalendarCheck size={16} />
                Agendar Consulta
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
