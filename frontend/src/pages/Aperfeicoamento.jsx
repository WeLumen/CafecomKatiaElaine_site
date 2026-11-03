import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, BookOpen, CalendarDays, Check, Clock3, GraduationCap, MapPin, Wallet } from "lucide-react";
import { PreInscricao } from "../components/Mentorias";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import logo from "../assets/logo-round.png";

const blocks = [
  { title: "O que você vai aprender", items: ["Atendimento prático a diferentes tipos de podopatias", "Acompanhamento de casos clínicos reais", "Orientação sobre tratamentos e técnicas de referência internacional", "Discussão de condutas e acompanhamento clínico", "Grupo de apoio incluso"] },
  { title: "Quem pode participar", items: ["Estudantes matriculados em curso técnico ou tecnólogo em Podologia", "Profissionais técnicos em Podologia", "É necessário apresentar comprovante de matrícula ou diploma"] },
  { title: "Materiais para as aulas", items: ["4 kits iniciais de instrumentais", "Caixa de luvas para uso individual", "Gúbias nº 1 e nº 2", "Lâminas de bisturi nº 15 e nº 20", "Outros materiais ou aparelhos poderão ser solicitados durante as aulas, se necessário"] },
];
export default function Aperfeicoamento() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.title = "Aperfeiçoamento Prático de Podologia Clínica | Kátia Elaine"; window.scrollTo(0,0); return () => { document.title = "Kátia Elaine"; }; }, []);
  return <main className="bg-creme min-h-screen text-tinta" data-testid="aperfeicoamento-page">
    <header className="bg-perola border-b border-borda sticky top-0 z-40"><div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between gap-4">
      <a href="/" className="flex items-center gap-3"><img src={logo} alt="Kátia Elaine" className="w-11 h-11 rounded-full"/><span className="font-serif text-xl text-roxo">Kátia Elaine</span></a>
      <a className="inline-flex items-center gap-2 text-sm font-semibold text-roxo" href="/#mentorias"><ArrowLeft size={18}/> Voltar ao site</a>
    </div></header>
    <section className="max-w-6xl mx-auto px-5 pt-16 pb-12 sm:pt-24"><span className="text-dourado-hover uppercase text-xs tracking-[.2em] font-semibold">Formação presencial · Podologia clínica</span>
      <h1 className="font-serif text-roxo text-4xl sm:text-6xl leading-tight mt-5 max-w-4xl">Aperfeiçoamento Prático de Podologia Clínica <span className="text-dourado-hover">(Estágio)</span></h1>
      <p className="max-w-3xl text-suave text-lg leading-relaxed mt-7">Imersão prática presencial, com acompanhamento em casos clínicos reais e orientação sobre tratamentos e técnicas de referência internacional. Desenvolva sua experiência clínica com suporte ao longo da formação.</p>
      <div className="flex flex-wrap gap-3 mt-8"><button onClick={() => setOpen(true)} className="bg-roxo text-perola rounded-full px-7 py-4 font-semibold hover:bg-dourado hover:text-roxo transition">Fazer pré-inscrição <ArrowUpRight size={18} className="inline ml-1"/></button><a href="#valores" className="border border-roxo text-roxo rounded-full px-7 py-4 font-semibold hover:bg-perola transition">Ver valores</a></div>
      <div className="grid sm:grid-cols-3 gap-4 mt-12"><Info icon={CalendarDays} label="Dias de prática" value="Toda segunda-feira"/><Info icon={Clock3} label="Horário" value="Das 9h às 16h"/><Info icon={MapPin} label="Local" value="Arsenal da Esperança"/></div>
    </section>
    <section className="max-w-6xl mx-auto px-5 py-10 grid lg:grid-cols-3 gap-5">{blocks.map((b)=><article key={b.title} className="bg-perola border border-borda rounded-[2rem] p-7"><h2 className="font-serif text-roxo text-2xl mb-6">{b.title}</h2><ul className="space-y-4">{b.items.map((item)=><li key={item} className="flex gap-3 text-sm leading-relaxed"><Check size={19} className="text-dourado-hover shrink-0 mt-0.5"/>{item}</li>)}</ul></article>)}</section>
    <section id="valores" className="max-w-6xl mx-auto px-5 py-12 scroll-mt-24"><div className="bg-perola border border-borda rounded-[2rem] p-7 sm:p-10"><span className="uppercase tracking-widest text-xs text-dourado-hover font-semibold">Investimento</span><h2 className="font-serif text-roxo text-3xl sm:text-4xl mt-2 mb-7">Valores e formas de pagamento</h2>
      <div className="grid md:grid-cols-3 gap-4"><Price heading="À vista" amount="R$ 2.100,00" detail="Sem taxa de matrícula"/><Price heading="Cartão de crédito" amount="Até 10x" detail="Condições e valores das parcelas a consultar"/><Price heading="Pagamento mensal" amount="R$ 500,00/mês" detail="Taxa de matrícula de R$ 50,00 + primeira mensalidade na inscrição"/></div>
      <p className="text-sm text-suave mt-6 leading-relaxed">No plano mensal, a participação ocorre mediante pagamento de cada mensalidade. O início depende da confirmação da turma. Consulte a equipe antes de efetuar qualquer pagamento.</p>
    </div></section>
    <section className="max-w-6xl mx-auto px-5 pb-20"><div className="rounded-[2rem] border border-borda bg-perola p-7 sm:p-10 grid md:grid-cols-2 gap-8 items-center"><div><BookOpen className="text-dourado-hover" size={30}/><h2 className="font-serif text-roxo text-3xl mt-3">Duração e certificação</h2><p className="text-suave mt-4 leading-relaxed">A proposta inicial é de 6 meses de prática, com possibilidade de continuidade para completar a carga horária necessária. O certificado será emitido conforme a carga horária efetivamente cumprida. Para quem precisa de 360 horas, foi informada uma previsão de 1 ano e 2 meses de estágio; confirme o calendário com a organização.</p></div><div className="bg-creme rounded-3xl p-7"><GraduationCap className="text-dourado-hover" size={30}/><h3 className="font-serif text-roxo text-2xl mt-3">Faça sua pré-inscrição</h3><p className="text-sm text-suave my-4">Informe seus dados e receba orientações sobre a próxima turma. A pré-inscrição não garante vaga nem gera cobrança.</p><button className="w-full bg-roxo text-perola rounded-full py-4 font-semibold" onClick={()=>setOpen(true)}>Abrir formulário</button></div></div></section>
    <Footer/><FloatingWhatsApp/>{open && <PreInscricao onClose={()=>setOpen(false)}/>}
  </main>;
}
function Info({icon:Icon,label,value}){return <div className="bg-perola border border-borda rounded-2xl p-5 flex gap-4 items-center"><Icon size={24} className="shrink-0 text-dourado-hover"/><div><span className="text-xs text-suave block">{label}</span><strong className="text-roxo">{value}</strong></div></div>}
function Price({heading,amount,detail}){return <div className="bg-creme border border-borda rounded-2xl p-6"><span className="text-sm text-suave">{heading}</span><h3 className="font-serif text-3xl text-roxo my-3">{amount}</h3><p className="text-sm text-suave">{detail}</p></div>}
