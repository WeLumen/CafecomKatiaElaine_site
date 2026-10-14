import katiaRecorte from "../assets/katia-recorte.webp";

const Sparkle = ({ className = "", size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden className={`absolute text-dourado ${className}`}>
    <path d="M12 0c.6 6.6 4.9 11.4 12 12-7.1.6-11.4 5.4-12 12-.6-6.6-4.9-11.4-12-12C7.1 11.4 11.4 6.6 12 0z" fill="currentColor" />
  </svg>
);

/**
 * Medalhão com a Katia (sem fundo).
 * Anéis dourados concêntricos, brilho suave e estrelinhas ao redor.
 * A cabeça "salta" para fora do topo; o corpo é cortado pela curva inferior.
 */
export const KatiaCirculo = ({ alt, testid, className = "" }) => (
  <div className={`relative w-full aspect-square ${className}`}>
    {/* brilho suave */}
    <div
      className="absolute -inset-[22%] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(184,141,86,0.22) 0%, rgba(184,141,86,0.08) 45%, transparent 70%)" }}
    />
    {/* anéis dourados concêntricos */}
    <div className="absolute -inset-[9%] rounded-full border border-dourado/60 pointer-events-none" />
    <div className="absolute -inset-[19%] rounded-full border border-dourado/25 pointer-events-none" />

    {/* medalhão liso, com borda branca */}
    <div
      className="absolute inset-0 rounded-full border-[7px] border-perola shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)]"
      style={{ background: "radial-gradient(circle at 50% 35%, #7a5272 0%, #55345a 55%, #3d2140 100%)" }}
    />

    {/* foto sem fundo: topo livre, base recortada pela curva do medalhão */}
    <div
      className="absolute inset-[3%]"
      style={{ clipPath: "inset(-30% 0 0 0 round 0 0 9999px 9999px)" }}
    >
      <img
        src={katiaRecorte}
        alt={alt}
        data-testid={testid}
        className="absolute h-auto"
        style={{
          width: "92%",
          left: "4%",
          top: "-16%",
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
          maskImage: "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
        }}
      />
    </div>

    {/* estrelinhas */}
    <Sparkle className="-top-[6%] right-[-14%]" size={26} />
    <Sparkle className="bottom-[2%] left-[-14%]" size={20} />
  </div>
);
