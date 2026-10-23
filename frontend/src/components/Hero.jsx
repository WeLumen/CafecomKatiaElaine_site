import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Footprints, GraduationCap, Coffee, Trophy } from "lucide-react";
import mandala from "../assets/logos/mandala.webp";
import centro from "../assets/logos/centro.webp";
import { waLink, WA_MSGS, WA_CAFE_NUMBER } from "../lib/site";

const MaskedLine = ({ children, delay }) => (
  <span className="block overflow-hidden pb-1">
    <motion.span
      className="block"
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

const titles = ["Podologista", "Técnica em Podologia", "Naturopata", "Administradora de Empresas", "CEO do Café com Katia Elaine"];

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yMedal = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen bg-creme overflow-hidden flex items-center pt-24 pb-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-rosec/40 blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-[420px] h-[420px] rounded-full bg-dourado/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center relative">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {titles.map((t, i) => (
              <span
                key={t}
                data-testid={`hero-title-badge-${i}`}
                className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium text-roxo bg-perola border border-borda rounded-full px-3 py-1.5"
              >
                {t}
              </span>
            ))}
          </motion.div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-roxo">
            <MaskedLine delay={0.3}>Saúde para os pés,</MaskedLine>
            <MaskedLine delay={0.45}>
              <em className="text-dourado-hover not-italic font-medium italic">estratégia</em> para
            </MaskedLine>
            <MaskedLine delay={0.6}>a sua carreira.</MaskedLine>
          </h1>

          <motion.p
            data-testid="hero-slogan"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-7 text-base sm:text-lg text-suave leading-relaxed max-w-xl text-balance"
          >
            Conectando a saúde física ao bem-estar mental, físico e emocional, e impulsionando profissionais
            da podologia com técnica de nível internacional, legislação, gestão de alta performance
            e conexões globais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mt-9 flex flex-col sm:flex-row flex-wrap gap-3"
          >
            <a
              href={waLink(WA_MSGS.agendar)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-cta-agendar"
              className="inline-flex items-center justify-center gap-2.5 bg-roxo text-perola font-medium px-7 py-4 rounded-full hover:bg-roxo-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <Footprints size={18} />
              Agendar Atendimento Podológico
            </a>
            <a
              href="#mentorias"
              data-testid="hero-cta-mentorias"
              className="inline-flex items-center justify-center gap-2.5 bg-dourado text-roxo-deep font-semibold px-7 py-4 rounded-full hover:bg-dourado-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <GraduationCap size={18} />
              Conhecer Mentorias Profissionais
            </a>
            <a
              href={waLink(WA_MSGS.cafe, WA_CAFE_NUMBER)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-cta-cafe"
              className="inline-flex items-center justify-center gap-2.5 text-roxo font-medium px-3 py-4 underline underline-offset-4 decoration-dourado/60 hover:text-dourado-hover transition-colors duration-300"
            >
              <Coffee size={18} />
              Participar do Café com Katia Elaine
            </a>
          </motion.div>
        </div>

        <motion.div
          style={{ y: yMedal }}
          className="relative mx-auto w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[440px] lg:h-[440px]"
        >
          <div className="absolute -inset-5 rounded-full border border-dashed border-dourado/50 animate-spin-slower" />
          <div className="absolute -inset-12 rounded-full border border-dourado/20 animate-spin-slowest" />
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 rounded-full gold-ring p-[6px] shadow-[0_40px_80px_-20px_rgba(61,39,57,0.45)]"
          >
            <div
              data-testid="hero-logo-medallion"
              role="img"
              aria-label="Logo Café com Katia Elaine"
              className="relative w-full h-full rounded-full overflow-hidden bg-perola"
            >
              <img src={mandala} alt="" aria-hidden className="absolute inset-0 w-full h-full animate-spin-mandala" />
              <img src={centro} alt="" aria-hidden className="absolute inset-0 w-full h-full" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="absolute -bottom-4 -left-6 sm:-left-10 bg-perola border border-borda rounded-2xl px-5 py-3.5 shadow-xl animate-float-soft"
          >
            <div className="flex items-center gap-2.5">
              <Trophy size={18} className="text-dourado-hover" />
              <div className="leading-tight">
                <span className="block text-xs font-semibold text-roxo">Patrocinadora Oficial</span>
                <span className="block text-[11px] text-suave">WBBF Brasil · Fisiculturismo</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
