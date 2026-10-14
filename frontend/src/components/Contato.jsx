import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { MapPin, Instagram, MessageCircle, Send, Loader2 } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { waLink, WA_MSGS, INSTAGRAM_PODOLOGIA, INSTAGRAM_CAFE } from "../lib/site";

const API = `${process.env.REACT_APP_BACKEND_URL || ""}/api`;

const perfis = ["Paciente / Atleta", "Podólogo(a) ou Estudante", "Parceria Esportiva ou Institucional"];
const assuntos = [
  "Podologia Esportiva / Órteses",
  "Tratamento de Infecção / Onicocriptose",
  "Naturopatia",
  "Mentoria Prática (6 meses)",
  "Mentoria de Gestão",
  "Café com Katia Elaine / ABP / Casa de Angola Hub",
];

const inputCls =
  "w-full bg-perola border border-borda rounded-2xl px-5 py-3.5 text-sm text-tinta placeholder:text-suave/60 focus:outline-none focus:border-dourado focus:ring-2 focus:ring-dourado/20 transition-all";

export const Contato = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", perfil: "", assunto: "", mensagem: "" });
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/contacts`, form);
      toast.success("Mensagem enviada com sucesso! Katia retornará em breve.");
      setForm({ nome: "", telefone: "", perfil: "", assunto: "", mensagem: "" });
    } catch {
      toast.error("Não foi possível enviar. Tente novamente ou chame no WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contato" className="bg-creme py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
          <Reveal>
            <Eyebrow>Contato & Localização</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-roxo mt-4 leading-tight tracking-tight">
              Vamos conversar sobre seus pés — ou sua carreira
            </h2>
            <p className="mt-5 text-base sm:text-lg text-suave leading-relaxed">
              Preencha o formulário ou chame direto no WhatsApp. Atendimento clínico em São Paulo e
              mentorias para todo o Brasil.
            </p>

            <div className="mt-9 space-y-5">
              <div className="flex items-start gap-4" data-testid="contato-localizacao">
                <span className="w-11 h-11 rounded-xl bg-roxo text-dourado flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </span>
                <div>
                  <span className="block text-sm font-semibold text-roxo">Local de Atendimento</span>
                  <span className="block text-sm text-suave">São Paulo - SP · Bairro Brás</span>
                </div>
              </div>
              <div className="flex items-start gap-4" data-testid="contato-redes">
                <span className="w-11 h-11 rounded-xl bg-roxo text-dourado flex items-center justify-center shrink-0">
                  <Instagram size={20} />
                </span>
                <div>
                  <span className="block text-sm font-semibold text-roxo">Redes Sociais</span>
                  <a href={INSTAGRAM_PODOLOGIA} target="_blank" rel="noopener noreferrer" data-testid="contato-instagram-podologia" className="block text-sm text-suave hover:text-dourado transition-colors">
                    @katiaelaine.podologia
                  </a>
                  <a href={INSTAGRAM_CAFE} target="_blank" rel="noopener noreferrer" data-testid="contato-instagram-cafe" className="block text-sm text-suave hover:text-dourado transition-colors">
                    @cafecomkatiaelaine
                  </a>
                </div>
              </div>
              <a
                href={waLink(WA_MSGS.agendar)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contato-whatsapp-direto"
                className="inline-flex items-center gap-2.5 bg-roxo text-perola text-sm font-medium px-6 py-3.5 rounded-full hover:bg-dourado transition-colors duration-300"
              >
                <MessageCircle size={17} />
                Chamar no WhatsApp agora
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={submit}
              data-testid="contato-form"
              className="bg-perola border border-borda rounded-[2rem] p-7 sm:p-10 shadow-[0_30px_70px_-30px_rgba(53,27,49,0.25)]"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="campo-nome" className="block text-xs uppercase tracking-[0.16em] text-suave font-semibold mb-2">Nome</label>
                  <input id="campo-nome" data-testid="contato-input-nome" required value={form.nome} onChange={set("nome")} placeholder="Seu nome completo" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="campo-telefone" className="block text-xs uppercase tracking-[0.16em] text-suave font-semibold mb-2">Telefone / WhatsApp</label>
                  <input id="campo-telefone" data-testid="contato-input-telefone" required value={form.telefone} onChange={set("telefone")} placeholder="(11) 99999-0000" className={inputCls} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="campo-perfil" className="block text-xs uppercase tracking-[0.16em] text-suave font-semibold mb-2">Perfil</label>
                  <select id="campo-perfil" data-testid="contato-select-perfil" required value={form.perfil} onChange={set("perfil")} className={inputCls}>
                    <option value="" disabled>Selecione seu perfil</option>
                    {perfis.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="campo-assunto" className="block text-xs uppercase tracking-[0.16em] text-suave font-semibold mb-2">Assunto</label>
                  <select id="campo-assunto" data-testid="contato-select-assunto" required value={form.assunto} onChange={set("assunto")} className={inputCls}>
                    <option value="" disabled>Selecione o assunto</option>
                    {assuntos.map((a) => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="campo-mensagem" className="block text-xs uppercase tracking-[0.16em] text-suave font-semibold mb-2">Mensagem (opcional)</label>
                <textarea id="campo-mensagem" data-testid="contato-textarea-mensagem" rows={4} value={form.mensagem} onChange={set("mensagem")} placeholder="Conte um pouco sobre o que você precisa..." className={`${inputCls} resize-none`} />
              </div>
              <button
                type="submit"
                disabled={sending}
                data-testid="contato-btn-enviar"
                className="mt-6 w-full inline-flex items-center justify-center gap-2.5 bg-dourado text-roxo-deep font-semibold px-8 py-4 rounded-full hover:bg-roxo hover:text-perola disabled:opacity-60 transition-all duration-300"
              >
                {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={17} />}
                {sending ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
