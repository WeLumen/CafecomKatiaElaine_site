const items = [
  "Podologia Clínica",
  "Podologia Esportiva WBBF",
  "Naturopatia Integrativa",
  "Gestão de Clínicas",
  "Mentoria Hands-On",
  "Café com Katia Elaine",
  "ABP",
  "Casa de Angola Hub",
];

export const Marquee = () => (
  <div data-testid="editorial-marquee" className="bg-roxo py-5 overflow-hidden border-y border-dourado/25">
    <div className="flex w-max animate-marquee">
      {[0, 1].map((dup) => (
        <div key={dup} className="flex items-center shrink-0" aria-hidden={dup === 1}>
          {items.map((item) => (
            <span key={`${dup}-${item}`} className="flex items-center">
              <span className="font-serif italic text-lg sm:text-xl text-perola/90 px-6 whitespace-nowrap">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rotate-45 bg-dourado shrink-0" />
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
