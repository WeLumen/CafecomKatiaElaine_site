import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Check, Loader2, Send, X } from "lucide-react";
import { saveContact } from "../lib/contacts";

const emptyForm = { nome: "", telefone: "", email: "", perfil: "", interesse: "", evento: "", mensagem: "", concorda: false };
const field = "mt-2 w-full rounded-xl border border-borda bg-creme px-4 py-3 text-base text-tinta focus:outline-none focus:ring-2 focus:ring-dourado";

export function WbpfFormulario() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [sending, setSending] = useState(false);
  const [received, setReceived] = useState(false);
  const [error, setError] = useState("");
  const change = (key) => (event) => setForm((previous) => ({ ...previous, [key]: event.target.type === "checkbox" ? event.target.checked : event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    if (sending || !form.concorda) return;
    setSending(true);
    setError("");
    try {
      await saveContact({
        nome: form.nome.trim(), telefone: form.telefone.trim(), perfil: form.perfil,
        assunto: `WBPF — ${form.interesse}`,
        mensagem: `E-mail: ${form.email.trim() || "Não informado"}\nEvento ou competição: ${form.evento.trim() || "Não informado"}\nMensagem: ${form.mensagem.trim() || "Nenhuma"}\nOrigem: formulário WBPF no site\nAutorizou contato sobre esta solicitação.`,
      });
      setForm(emptyForm);
      setReceived(true);
    } catch {
      setError("Não foi possível enviar agora. Seus dados continuam preenchidos; tente novamente.");
    } finally { setSending(false); }
  };

  return (
    <Dialog.Root open={open} onOpenChange={(value) => { setOpen(value); if (value) { setReceived(false); setError(""); } }}>
      <Dialog.Trigger asChild>
        <button type="button" data-testid="wbpf-open-form" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-dourado px-5 py-3.5 text-sm font-semibold text-roxo-deep hover:bg-perola transition-colors">Preencher formulário <ArrowUpRight size={17} /></button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-roxo-deep/75" />
        <Dialog.Content data-lenis-prevent className="fixed left-1/2 top-1/2 z-[101] max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[2rem] bg-perola p-6 text-tinta shadow-2xl sm:p-9">
          <Dialog.Close aria-label="Fechar formulário WBPF" className="absolute right-4 top-4 rounded-full p-2 text-roxo hover:bg-creme"><X size={21} /></Dialog.Close>
          <p className="pr-8 text-xs font-semibold uppercase tracking-[0.18em] text-dourado-ink">Patrocínio & atendimento a atletas</p>
          <Dialog.Title className="mt-3 pr-8 font-serif text-3xl text-roxo">Contato WBPF</Dialog.Title>
          <Dialog.Description className="mt-3 text-sm leading-relaxed text-suave">Envie seu interesse em atendimento, premiações ou parcerias. A equipe retornará pelo contato informado para orientar sobre disponibilidade e condições.</Dialog.Description>
          {received ? (
            <div role="status" className="py-9 text-center">
              <Check size={38} className="mx-auto text-dourado-ink" />
              <h3 className="mt-4 font-serif text-2xl text-roxo">Solicitação recebida!</h3>
              <p className="mt-3 text-sm leading-relaxed text-suave">Seu cadastro foi registrado. Aguarde o retorno da equipe pelo contato informado.</p>
              <Dialog.Close className="mt-6 rounded-full bg-roxo px-7 py-3 text-sm font-semibold text-perola">Concluir</Dialog.Close>
            </div>
          ) : (
            <form onSubmit={submit} data-testid="wbpf-form" className="mt-6 space-y-4">
              <div><label htmlFor="wbpf-nome" className="text-sm font-medium text-roxo">Nome completo *</label><input id="wbpf-nome" required minLength={2} maxLength={120} autoComplete="name" value={form.nome} onChange={change("nome")} className={field} /></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor="wbpf-telefone" className="text-sm font-medium text-roxo">WhatsApp *</label><input id="wbpf-telefone" type="tel" required minLength={8} maxLength={30} autoComplete="tel" value={form.telefone} onChange={change("telefone")} className={field} /></div>
                <div><label htmlFor="wbpf-email" className="text-sm font-medium text-roxo">E-mail (opcional)</label><input id="wbpf-email" type="email" maxLength={150} autoComplete="email" value={form.email} onChange={change("email")} className={field} /></div>
              </div>
              <div><label htmlFor="wbpf-perfil" className="text-sm font-medium text-roxo">Seu perfil *</label><select id="wbpf-perfil" required value={form.perfil} onChange={change("perfil")} className={field}><option value="">Selecione</option>{["Atleta", "Treinador(a)", "Organizador(a) de evento", "Outro"].map((profile) => <option key={profile}>{profile}</option>)}</select></div>
              <div><label htmlFor="wbpf-interesse" className="text-sm font-medium text-roxo">Como podemos ajudar? *</label><select id="wbpf-interesse" required value={form.interesse} onChange={change("interesse")} className={field}><option value="">Selecione</option>{["Atendimento podológico", "Informações sobre premiações", "Parceria esportiva", "Outras informações"].map((interest) => <option key={interest}>{interest}</option>)}</select></div>
              <div><label htmlFor="wbpf-evento" className="text-sm font-medium text-roxo">Evento ou competição (opcional)</label><input id="wbpf-evento" maxLength={120} value={form.evento} onChange={change("evento")} className={field} /></div>
              <div><label htmlFor="wbpf-mensagem" className="text-sm font-medium text-roxo">Mensagem (opcional)</label><textarea id="wbpf-mensagem" maxLength={700} rows={3} value={form.mensagem} onChange={change("mensagem")} className={field} /></div>
              <label className="flex items-start gap-3 text-xs leading-relaxed text-suave"><input type="checkbox" required checked={form.concorda} onChange={change("concorda")} className="mt-1 accent-roxo" /><span>Autorizo o uso dos meus dados para que a equipe retorne esta solicitação. *</span></label>
              {error && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-800">{error}</p>}
              <button type="submit" disabled={sending} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-roxo px-6 py-4 font-semibold text-perola hover:bg-roxo-2 disabled:opacity-60">{sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}{sending ? "Enviando..." : "Enviar solicitação"}</button>
              <p className="text-center text-xs leading-relaxed text-suave">O envio não confirma agendamento nem garante premiação. A equipe informará as condições aplicáveis.</p>
            </form>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
