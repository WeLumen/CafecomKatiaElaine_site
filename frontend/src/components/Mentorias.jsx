import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { GraduationCap, LineChart, Check, ArrowUpRight, X, Send, Loader2, Wallet } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { waLink, WA_MSGS, WA_MENTORIAS_NUMBER } from "../lib/site";

const programs = [
  {
    icon: GraduationCap,
    name: "Aperfeiçoamento Prático de Podologia Clínica (Estágio)",
    label: "Presencial · Prática às segundas-feiras",
    focus:
      "Imersão presencial com acompanhamento em casos clínicos reais, orientações sobre tratamentos e abordagens técnicas de referência internacional. Programa inicial de 6 meses, com possibilidade de continuidade conforme a carga horária necessária.",
    items: ["Atendimentos práticos de diferentes podopatias", "Acompanhamento clínico e orientação em casos reais", "Grupo de apoio incluso", "Certificado de conclusão conforme a carga horária cumprida"],
    practical: true,
    testid: "mentoria-pratica",
  },
  {
    icon: LineChart,
    name: "Mentoria de Gestão, Administração & Negócios",
    label: "On-line ao vivo e gravado · ou consultoria individual",
    focus:
      "Gestão aplicada à podologia, com expertise e metodologia apoiadas em Administração de Empresas, Comércio Exterior e Recursos Humanos. Uma abordagem que integra a organização do consultório, o atendimento e o posicionamento profissional.",
    items: [
      "Análise de precificação e gestão de vendas, estoque e caixa",
      "Gestão de consultório e atendimento ao cliente",
      "Orientações sobre vigilância sanitária, questões contábeis e arquitetura do espaço",
      "Humanização dos ambientes e Feng Shui",
      "Posicionamento no mercado, marketing, marca e identidade visual (logo)",
      "WhatsApp Business, redes sociais, inteligência artificial e Media Cast",
      "Outros temas voltados ao desenvolvimento do negócio",
    ],
    testid: "mentoria-gestao",
  },
];

const API = `${process.env.REACT_APP_BACKEND_URL || ""}/api`;
const initialForm = { nome: "", telefone: "", email: "", perfil: "", pagamento: "", observacoes: "", concorda: false };

export function PreInscricao({ onClose }) {
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const change = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.type === "checkbox" ? event.target.checked : event.target.value }));
  const submit = async (event) => {
    event.preventDefault();
    if (!form.concorda) return;
    setSending(true);
    try {
      await axios.post(`${API}/contacts`, {
        nome: form.nome.trim(), telefone: form.telefone.trim(), perfil: form.perfil,
        assunto: "Pré-inscrição — Aperfeiçoamento Prático de Podologia Clínica",
        mensagem: `E-mail: ${form.email || "Não informado"}\nModalidade de interesse: ${form.pagamento}\nObservações: ${form.observacoes || "Nenhuma"}\nOrigem: formulário de pré-inscrição no site.`,
      });
      toast.success("Pré-inscrição recebida! Nossa equipe entrará em contato para confirmar a turma.");
      onClose();
    } catch {
      toast.error("Não foi possível enviar agora. Tente novamente ou entre em contato pelo WhatsApp.");
    } finally { setSending(false); }
  };
  const field = "w-full rounded-xl border border-borda bg-white px-4 py-3 text-sm text-tinta focus:outline-none focus:border-dourado focus:ring-2 focus:ring-dourado/20";
  return (
    <div className="fixed inset-0 z-[100] bg-roxo-deep/70 p-4 flex items-center justify-center" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div role="dialog" aria-modal="true" aria-labelledby="preinscricao-titulo" className="relative bg-perola rounded-[2rem] w-full max-w-xl max-h-[92vh] overflow-y-auto p-6 sm:p-9 shadow-2xl">
        <button type="button" onClick={onClose} aria-label="Fechar formulário" className="absolute top-5 right-5 text-roxo p-2 rounded-full hover:bg-creme"><X size={22}/></button>
        <p className="text-xs uppercase tracking-[0.15em] text-dourado-hover font-semibold">Aperfeiçoamento Prático de Podologia Clínica</p>
        <h3 id="preinscricao-titulo" className="font-serif text-3xl text-roxo mt-3 pr-8">Pré-inscrição</h3>
        <p className="text-sm text-suave mt-2 mb-6">Preencha seus dados para receber as orientações e confirmar a disponibilidade da próxima turma. O envio não garante a vaga nem gera cobrança.</p>
        <form onSubmit={submit} className="space-y-4" data-testid="preinscricao-form">
          <div><label htmlFor="pre-nome" className="text-sm font-semibold text-roxo">Nome completo *</label><input id="pre-nome" required minLength={2} maxLength={120} value={form.nome} onChange={change("nome")} className={field} autoComplete="name" /></div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label htmlFor="pre-telefone" className="text-sm font-semibold text-roxo">WhatsApp *</label><input id="pre-telefone" type="tel" required minLength={8} maxLength={30} value={form.telefone} onChange={change("telefone")} className={field} autoComplete="tel" /></div>
            <div><label htmlFor="pre-email" className="text-sm font-semibold text-roxo">E-mail</label><input id="pre-email" type="email" maxLength={150} value={form.email} onChange={change("email")} className={field} autoComplete="email" /></div>
          </div>
          <div><label htmlFor="pre-perfil" className="text-sm font-semibold text-roxo">Sua formação *</label><select id="pre-perfil" required value={form.perfil} onChange={change("perfil")} className={field}><option value="">Selecione</option><option value="Estudante de Podologia">Estudante de Podologia</option><option value="Técnico(a) de Podologia">Técnico(a) de Podologia</option><option value="Tecnólogo(a) em Podologia">Tecnólogo(a) em Podologia</option></select></div>
          <div><label htmlFor="pre-pagamento" className="text-sm font-semibold text-roxo">Condição de pagamento de interesse *</label><select id="pre-pagamento" required value={form.pagamento} onChange={change("pagamento")} className={field}><option value="">Selecione</option><option value="À vista — R$ 2.100,00">À vista — R$ 2.100,00</option><option value="Cartão — até 10x (condições a consultar)">Cartão — até 10x (condições a consultar)</option><option value="Mensal — R$ 500,00 + matrícula R$ 50,00">Mensal — R$ 500,00 + matrícula R$ 50,00</option></select></div>
          <div><label htmlFor="pre-observacoes" className="text-sm font-semibold text-roxo">Dúvidas ou observações (opcional)</label><textarea id="pre-observacoes" value={form.observacoes} maxLength={700} onChange={change("observacoes")} rows={2} className={field} /></div>
          <label className="flex items-start gap-3 text-xs text-suave leading-relaxed"><input type="checkbox" required checked={form.concorda} onChange={change("concorda")} className="mt-1 accent-roxo"/><span>Autorizo o uso dos meus dados para contato sobre esta pré-inscrição, conforme a LGPD. *</span></label>
          <button disabled={sending} type="submit" className="w-full rounded-full py-3.5 px-5 bg-roxo text-perola font-semibold flex items-center justify-center gap-2 hover:bg-dourado hover:text-roxo-deep disabled:opacity-60">{sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18}/>} {sending ? "Enviando..." : "Enviar pré-inscrição"}</button>
        </form>
      </div>
    </div>
  );
}

export const Mentorias = () => {
  return (
  <section id="mentorias" className="bg-creme py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal className="max-w-2xl mb-14">
        <Eyebrow>Mentorias para Podólogos & Podologistas</Eyebrow>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-roxo mt-4 leading-tight tracking-tight">
          Capacitação prática e estratégica para elevar seu nível técnico e financeiro
        </h2>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-6">
        {programs.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.15}>
            <article
              data-testid={p.testid}
              className="group h-full bg-perola border border-borda rounded-[2rem] p-8 sm:p-10 hover:border-dourado/60 hover:shadow-[0_30px_60px_-25px_rgba(61,39,57,0.3)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-14 h-14 rounded-2xl bg-roxo text-dourado flex items-center justify-center group-hover:bg-dourado group-hover:text-roxo-deep transition-colors duration-500">
                  <p.icon size={26} strokeWidth={1.75} />
                </div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-dourado-hover bg-creme border border-borda rounded-full px-3.5 py-1.5 text-right">
                  {p.label}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-roxo mt-6 leading-snug">{p.name}</h3>
              <p className="mt-4 text-sm sm:text-base text-suave leading-relaxed">{p.focus}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-tinta">
                    <span className="w-5 h-5 rounded-full bg-dourado/15 text-dourado-hover flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              {p.practical && (
                <div className="mt-7 flex flex-col gap-3">
                  <a href="/aperfeicoamento-podologia#valores" className="inline-flex items-center justify-center gap-2 bg-dourado text-roxo-deep font-semibold px-7 py-3.5 rounded-full hover:bg-roxo hover:text-perola transition-colors">Ver valores <Wallet size={17}/></a>
                  <a href="/aperfeicoamento-podologia" className="inline-flex items-center justify-center gap-2 border border-roxo text-roxo font-semibold px-7 py-3.5 rounded-full hover:bg-roxo hover:text-perola transition-colors">Conhecer curso e fazer pré-inscrição <ArrowUpRight size={17}/></a>
                </div>
              )}
              {!p.practical && <a
                href={waLink(p.practical ? "Olá! Tenho interesse no Aperfeiçoamento Prático de Podologia Clínica no Arsenal da Esperança. Gostaria de saber a disponibilidade da próxima turma e como me inscrever." : WA_MSGS.mentoria, WA_MENTORIAS_NUMBER)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`${p.testid}-cta`}
                className="inline-flex items-center justify-center gap-2 mt-8 bg-roxo text-perola font-medium px-7 py-3.5 rounded-full hover:bg-dourado hover:text-roxo-deep transition-colors duration-300"
              >
                {p.practical ? "Consultar turma e inscrição" : "Quero saber mais"}
                <ArrowUpRight size={16} />
              </a>}
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
  );
};
