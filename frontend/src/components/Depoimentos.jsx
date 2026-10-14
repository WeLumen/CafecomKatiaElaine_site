import { Quote } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";

const quotes = [
  {
    text: "O cuidado da Katia na podologia esportiva e a confecção das órteses plantares fizeram toda a diferença na minha preparação para as competições. Suporte essencial para atletas de alta performance!",
    author: "Atleta & Paciente",
    role: "Podologia Esportiva",
    testid: "depoimento-atleta",
  },
  {
    text: "A mentoria de 6 meses me deu segurança total para atender casos complexos de infecção e a parte de gestão reorganizou financeiramente a minha clínica.",
    author: "Mentorada",
    role: "Mentoria Prática & Gestão",
    testid: "depoimento-mentorada",
  },
];

export const Depoimentos = () => (
  <section id="depoimentos" className="bg-perola py-24 sm:py-32">
    <div className="max-w-5xl mx-auto px-5 sm:px-8">
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <Eyebrow>Depoimentos & Casos de Sucesso</Eyebrow>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-roxo mt-4 leading-tight tracking-tight">
          Histórias de quem vive a transformação
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {quotes.map((q, i) => (
          <Reveal key={q.testid} delay={i * 0.15}>
            <figure
              data-testid={q.testid}
              className="h-full bg-creme border border-borda rounded-[2rem] p-8 sm:p-10 relative hover:border-dourado/60 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgba(53,27,49,0.25)] transition-all duration-500"
            >
              <Quote size={36} className="text-dourado/40 mb-5" strokeWidth={1.5} />
              <blockquote className="font-serif italic text-xl sm:text-2xl text-tinta leading-relaxed">
                "{q.text}"
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-roxo text-dourado font-serif flex items-center justify-center text-lg">
                  {q.author[0]}
                </span>
                <div className="leading-tight">
                  <span className="block text-sm font-semibold text-roxo">{q.author}</span>
                  <span className="block text-xs text-suave">{q.role}</span>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
