import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, Check, Clock3, Coffee, GraduationCap, Laptop, Layers3, Loader2, MessageCircle, PlayCircle, Send, Users, Wallet } from "lucide-react";
import { toast } from "sonner";
import { Footer } from "../components/Footer";
import { Reveal, Eyebrow } from "../components/Reveal";
import { saveContact } from "../lib/contacts";
import { waLink, WA_MENTORIAS_NUMBER, INICIO_PODOLOGIA_LUCRO } from "../lib/site";
import logo from "../assets/optimized/logo-round.webp";

const whatsapp = waLink("Olá! Quero conhecer a Mentoria Podologia com Lucro, e receber informações sobre o Grupo VIP Fundador e a próxima turma.", WA_MENTORIAS_NUMBER);
const method = [
  { letter: "C", name: "Capitalização", text: "Separe as contas pessoais das contas do consultório, organize seu pró-labore e planeje sua reserva de emergência." },
  { letter: "A", name: "Análise de Ralos", text: "Identifique desperdícios de materiais, taxas pouco visíveis e custos que comprometem o caixa." },
  { letter: "F", name: "Fixação de Preços", text: "Calcule custos e margens para definir preços sustentáveis para os seus procedimentos." },
  { letter: "É", name: "Expansão", text: "Conheça alternativas de investimentos e seus riscos para planejar o uso do lucro do consultório." },
];
const included = [
  { icon: PlayCircle, title: "Aulas gravadas", text: "Conteúdo passo a passo para assistir no seu ritmo, com 1 ano de acesso à plataforma e aos materiais." },
  { icon: Users, title: "Comunidade de suporte", text: "Grupo exclusivo no WhatsApp para dúvidas, troca de experiências e networking." },
  { icon: Laptop, title: "Encontros ao vivo", text: "Sessões online no Google Meet para acompanhamento, análise de casos e tira-dúvidas." },
  { icon: Layers3, title: "Ferramentas práticas", text: "Planilhas simplificadas de fluxo de caixa, controle de estoque e precificação." },
];
const modules = [
  { title: "Organização & custos fixos da saúde", text: "Mapeamento de despesas com Vigilância Sanitária, alvarás, resíduos de serviços de saúde, insumos, EPIs e contabilidade." },
  { title: "Precificação ética & anamnese", text: "Custos, valor percebido e precificação de procedimentos como laserterapia, órteses e tratamentos, considerando a avaliação de cada caso." },
  { title: "Separação financeira & pró-labore", text: "Organização das contas da pessoa física e da pessoa jurídica e definição do seu salário profissional." },
  { title: "Investimentos na prática", text: "Fundamentos de renda fixa e variável, planejamento e riscos para entender como aplicar os recursos disponíveis." },
];
const blankForm = { nome: "", telefone: "", email: "", perfil: "", concorda: false };

export default function PodologiaComLucro() {
  const [form, setForm] = useState(blankForm);
  const [sending, setSending] = useState(false);
  const [received, setReceived] = useState(false);
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Podologia com Lucro · Método C.A.F.É. | Katia Elaine";
    window.scrollTo(0, 0);
    return () => { document.title = previousTitle; };
  }, []);
  const change = (key) => (event) => setForm((previous) => ({ ...previous, [key]: event.target.type === "checkbox" ? event.target.checked : event.target.value }));
  const submit = async (event) => {
    event.preventDefault();
    if (sending || !form.concorda) return;
    setSending(true);
    try {
      await saveContact({
        nome: form.nome.trim(), telefone: form.telefone.trim(), perfil: form.perfil,
        assunto: "Interesse — Podologia com Lucro",
        mensagem: `E-mail: ${form.email.trim() || "Não informado"}\nInteresse: mentoria e Grupo VIP Fundador\nOrigem: página Podologia com Lucro\nAutorizou contato sobre a mentoria.`,
      });
      setReceived(true);
      setForm(blankForm);
      toast.success("Interesse registrado! A equipe entrará em contato sobre a mentoria.");
    } catch {
      toast.error("Não foi possível registrar agora. Tente novamente ou fale com a equipe no WhatsApp.");
    } finally { setSending(false); }
  };
  const field = "mt-2 w-full rounded-xl border border-borda bg-creme px-4 py-3 text-base text-tinta focus:outline-none focus:ring-2 focus:ring-dourado";
  return (
    <main className="min-h-screen bg-creme text-tinta" data-testid="podologia-lucro-page">
      <a href="#conteudo-lucro" className="skip-link">Pular para o conteúdo</a>
      <header className="sticky top-0 z-40 border-b border-borda bg-perola/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="/" className="flex items-center gap-3"><img src={logo} alt="Café com Katia Elaine" width={44} height={44} className="rounded-full" /><span className="font-serif text-xl text-roxo">Katia Elaine</span></a>
          <a href="/#mentorias" className="inline-flex items-center gap-2 text-sm font-medium text-roxo"><ArrowLeft size={17} />Voltar ao site</a>
        </div>
      </header>

      <section id="conteudo-lucro" className="relative overflow-hidden bg-roxo px-5 py-16 text-perola sm:px-8 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-48 h-[600px] w-[600px] rounded-full border border-dourado/20" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Eyebrow dark>Café com Katia Elaine apresenta</Eyebrow>
            <p className="mt-7 text-sm font-medium uppercase tracking-[0.16em] text-rosec">Mentoria Podologia com Lucro</p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">Consultório cheio.<br /><span className="text-dourado">E o caixa, como está?</span></h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-perola/80 sm:text-lg">Você cuida da saúde dos pés. Aprenda também a cuidar da saúde financeira do seu consultório, com organização, precificação e planejamento.</p>
            <p className="mt-4 text-sm text-perola/80">Uma iniciativa do Café com Katia Elaine para fortalecer a gestão do seu consultório.</p>
            <p className="mt-3 text-sm text-perola/80">Próxima turma: {INICIO_PODOLOGIA_LUCRO || "consulte a disponibilidade com a equipe"}.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#interesse" className="inline-flex items-center justify-center gap-2 rounded-full bg-dourado px-7 py-4 font-semibold text-roxo-deep hover:bg-perola transition-colors">Quero conhecer a mentoria <ArrowUpRight size={18} /></a>
              <a href="#metodo" className="inline-flex items-center justify-center gap-2 rounded-full border border-perola/30 px-7 py-4 font-medium text-perola hover:border-dourado transition-colors">Explorar o método C.A.F.É.</a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-dourado/30 bg-roxo-deep/50 p-7 sm:p-9">
            <Coffee size={34} className="text-dourado" strokeWidth={1.3} />
            <h2 className="mt-5 font-serif text-3xl text-perola">Da rotina do consultório ao planejamento do seu futuro.</h2>
            <div className="mt-8 space-y-5">
              <Fact icon={Laptop} title="100% online" text="Aulas gravadas e encontros ao vivo" />
              <Fact icon={Clock3} title="8 semanas" text="De acompanhamento" />
              <Fact icon={GraduationCap} title="1 ano de acesso" text="À plataforma de aulas e materiais" />
            </div>
            <p className="mt-8 border-t border-perola/15 pt-5 text-sm leading-relaxed text-perola/80">Para podólogos, esteticistas, biomédicos e profissionais da saúde que querem organizar as finanças do seu negócio.</p>
          </div>
        </div>
      </section>

      <section id="metodo" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-24">
        <Reveal className="max-w-2xl"><Eyebrow>O método C.A.F.É.</Eyebrow><h2 className="mt-4 font-serif text-3xl leading-tight text-roxo sm:text-5xl">Quatro pilares para uma gestão financeira mais consciente.</h2></Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {method.map((item, index) => <Reveal key={item.letter} delay={index * 0.06}><article className="h-full rounded-3xl border border-borda bg-perola p-7"><span className="font-serif text-6xl text-dourado-ink">{item.letter}<span className="text-dourado">.</span></span><h3 className="mt-5 font-serif text-2xl text-roxo">{item.name}</h3><p className="mt-3 text-sm leading-relaxed text-suave">{item.text}</p></article></Reveal>)}
        </div>
      </section>

      <section className="border-y border-borda bg-perola px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl"><Eyebrow>Como funciona</Eyebrow><h2 className="mt-4 font-serif text-3xl text-roxo sm:text-5xl">Conhecimento com aplicação na sua rotina.</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{included.map((item) => <article key={item.title}><item.icon size={28} strokeWidth={1.4} className="text-dourado-ink" /><h3 className="mt-4 font-serif text-2xl text-roxo">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-suave">{item.text}</p></article>)}</div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div><Eyebrow>O programa</Eyebrow><h2 className="mt-4 font-serif text-3xl text-roxo sm:text-5xl">O que você vai aprender.</h2><p className="mt-5 text-suave leading-relaxed">Gestão financeira conectada aos custos e às decisões reais de um consultório.</p><div className="mt-8 rounded-3xl border border-borda bg-perola p-6"><p className="text-xs uppercase tracking-widest text-dourado-ink">Uma iniciativa de</p><h3 className="mt-2 font-serif text-2xl text-roxo">Café com Katia Elaine</h3><p className="mt-3 text-sm leading-relaxed text-suave">Uma mentoria voltada à organização financeira e ao planejamento do seu negócio na área da saúde.</p></div></div>
        <div className="space-y-4">{modules.map((module, index) => <article key={module.title} className="flex gap-4 rounded-3xl border border-borda bg-perola p-6 sm:p-7"><span className="font-serif text-3xl text-dourado-ink">0{index + 1}</span><div><h3 className="font-serif text-2xl text-roxo">{module.title}</h3><p className="mt-3 text-sm leading-relaxed text-suave">{module.text}</p></div></article>)}</div>
      </section>

      <section id="investimento" className="bg-roxo px-5 py-20 text-perola sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div><Eyebrow dark>Grupo VIP Fundador</Eyebrow><h2 className="mt-4 font-serif text-3xl sm:text-5xl">Uma condição especial para a comunidade.</h2><p className="mt-5 max-w-lg leading-relaxed text-perola/80">Receba as informações do lançamento no evento Café com Katia Elaine e consulte como participar do Grupo VIP Fundador.</p><a href="https://evento.cafecomkatiaelaine.org/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-dourado underline underline-offset-4">Conhecer o evento <ArrowUpRight size={16} /></a></div>
          <div className="rounded-[2rem] border border-dourado/40 bg-perola p-7 text-roxo sm:p-9"><div className="flex items-center gap-3"><Wallet size={23} className="text-dourado-ink" /><p className="text-xs font-semibold uppercase tracking-[0.16em]">Condição Fundador</p></div><p className="mt-5 text-sm text-suave">Valor de referência: <s>R$ 997,00</s></p><p className="mt-2 font-serif text-5xl">R$ 497,00</p><p className="mt-1 text-sm text-suave">à vista para membros da comunidade</p><div className="my-6 border-t border-borda" /><p className="text-xl font-semibold">ou 12x de R$ 49,70</p><p className="mt-2 text-sm text-suave">Total parcelado: R$ 596,40.</p><ul className="mt-6 space-y-3">{["8 semanas de acompanhamento", "1 ano de acesso às aulas e aos materiais", "Comunidade e ferramentas práticas"].map((text) => <li key={text} className="flex items-center gap-3 text-sm"><Check size={17} className="shrink-0 text-dourado-ink" />{text}</li>)}</ul><a href="#interesse" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-roxo px-5 py-4 font-semibold text-perola hover:bg-roxo-2 transition-colors">Tenho interesse na condição Fundador <ArrowUpRight size={17} /></a><p className="mt-4 text-xs leading-relaxed text-suave">Confirme com a equipe a disponibilidade, o calendário e as condições da oferta antes da contratação. O cadastro de interesse não gera cobrança nem garante vaga.</p></div>
        </div>
      </section>

      <section id="interesse" className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2">
        <div><Eyebrow>Seu próximo passo</Eyebrow><h2 className="mt-4 font-serif text-3xl text-roxo sm:text-5xl">Vamos falar sobre o futuro do seu consultório?</h2><p className="mt-5 max-w-lg leading-relaxed text-suave">Deixe seu contato para receber informações sobre a mentoria, a próxima turma e o Grupo VIP Fundador.</p><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full border border-roxo px-6 py-3 text-sm font-semibold text-roxo hover:bg-perola"><MessageCircle size={18} />Falar com a equipe no WhatsApp</a><p className="mt-8 max-w-lg text-xs leading-relaxed text-suave">O conteúdo de investimentos tem finalidade educacional. Investimentos envolvem riscos e não há garantia de lucro ou rentabilidade.</p></div>
        <div className="rounded-[2rem] border border-borda bg-perola p-6 sm:p-9">
          {received ? <div role="status" className="py-8 text-center"><Check size={36} className="mx-auto text-dourado-ink" /><h3 className="mt-4 font-serif text-3xl text-roxo">Interesse registrado!</h3><p className="mt-4 text-sm leading-relaxed text-suave">A equipe recebeu seu contato e poderá falar com você sobre a mentoria. Você também pode chamar no WhatsApp ao lado.</p></div> : <form onSubmit={submit} className="space-y-5" data-testid="lucro-interest-form">
            <h3 className="font-serif text-2xl text-roxo">Quero receber informações</h3>
            <div><label htmlFor="lucro-nome" className="text-sm font-medium text-roxo">Nome completo</label><input id="lucro-nome" autoComplete="name" required minLength={2} maxLength={120} value={form.nome} onChange={change("nome")} className={field} /></div>
            <div className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="lucro-telefone" className="text-sm font-medium text-roxo">WhatsApp</label><input id="lucro-telefone" type="tel" autoComplete="tel" required minLength={8} maxLength={30} value={form.telefone} onChange={change("telefone")} className={field} /></div><div><label htmlFor="lucro-email" className="text-sm font-medium text-roxo">E-mail (opcional)</label><input id="lucro-email" type="email" autoComplete="email" maxLength={150} value={form.email} onChange={change("email")} className={field} /></div></div>
            <div><label htmlFor="lucro-perfil" className="text-sm font-medium text-roxo">Sua área de atuação</label><select id="lucro-perfil" required value={form.perfil} onChange={change("perfil")} className={field}><option value="">Selecione</option>{["Podologia", "Estética", "Biomedicina", "Outra área da saúde", "Estudante"].map((profile) => <option key={profile}>{profile}</option>)}</select></div>
            <label className="flex items-start gap-3 text-xs leading-relaxed text-suave"><input type="checkbox" required checked={form.concorda} onChange={change("concorda")} className="mt-1 accent-roxo" /><span>Autorizo o uso dos meus dados para contato sobre a Mentoria Podologia com Lucro e o Grupo VIP Fundador.</span></label>
            <button type="submit" disabled={sending} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-dourado px-6 py-4 font-semibold text-roxo-deep hover:bg-roxo hover:text-perola disabled:opacity-60 transition-colors">{sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}{sending ? "Registrando..." : "Registrar meu interesse"}</button>
          </form>}
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Fact({ icon: Icon, title, text }) {
  return <div className="flex items-start gap-4"><Icon size={23} className="mt-1 shrink-0 text-dourado" /><div><strong className="block text-lg font-medium">{title}</strong><span className="mt-1 block text-sm text-perola/80">{text}</span></div></div>;
}
