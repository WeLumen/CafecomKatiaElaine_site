import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Lock, RefreshCw, Inbox } from "lucide-react";
import logo from "../assets/logo-round.png";

const API = `${process.env.REACT_APP_BACKEND_URL || ""}/api`;

export default function Admin() {
  const [key, setKey] = useState(sessionStorage.getItem("admin_key") || "");
  const [contacts, setContacts] = useState(null);
  const [loading, setLoading] = useState(false);

  const load = async (k) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${API}/contacts`, { params: { key: k } });
      setContacts(data);
      sessionStorage.setItem("admin_key", k);
    } catch {
      setContacts(null);
      toast.error("Chave inválida. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main data-testid="admin-page" className="min-h-screen bg-creme py-16 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <img src={logo} alt="" className="w-12 h-12 rounded-full ring-1 ring-dourado/50" />
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl text-roxo">Mensagens Recebidas</h1>
            <p className="text-sm text-suave">Área restrita · Café com Katia Elaine</p>
          </div>
        </div>

        {contacts === null ? (
          <form
            onSubmit={(e) => { e.preventDefault(); load(key); }}
            data-testid="admin-key-form"
            className="bg-perola border border-borda rounded-3xl p-8 max-w-md"
          >
            <label htmlFor="admin-key" className="block text-xs uppercase tracking-[0.16em] text-suave font-semibold mb-2">
              Chave de acesso
            </label>
            <div className="flex gap-3">
              <input
                id="admin-key"
                data-testid="admin-key-input"
                type="password"
                required
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Digite a chave"
                className="flex-1 bg-creme border border-borda rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-dourado"
              />
              <button
                type="submit"
                disabled={loading}
                data-testid="admin-key-submit"
                className="inline-flex items-center gap-2 bg-roxo text-perola text-sm font-medium px-6 py-3 rounded-2xl hover:bg-dourado transition-colors"
              >
                <Lock size={15} />
                Entrar
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <span data-testid="admin-count" className="text-sm text-suave">
                {contacts.length} mensagem(ns) recebida(s)
              </span>
              <button
                onClick={() => load(key)}
                data-testid="admin-refresh"
                className="inline-flex items-center gap-2 text-sm text-roxo hover:text-dourado transition-colors"
              >
                <RefreshCw size={15} className={loading ? "animate-spin" : ""} />
                Atualizar
              </button>
            </div>
            {contacts.length === 0 ? (
              <div className="bg-perola border border-borda rounded-3xl p-12 text-center text-suave">
                <Inbox size={32} className="mx-auto mb-3 text-dourado" />
                Nenhuma mensagem ainda.
              </div>
            ) : (
              <div className="space-y-4">
                {contacts.map((c) => (
                  <article key={c.id} data-testid={`admin-contact-${c.id}`} className="bg-perola border border-borda rounded-3xl p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div>
                        <span className="font-serif text-xl text-roxo">{c.nome}</span>
                        <span className="ml-3 text-sm text-suave">{c.telefone}</span>
                      </div>
                      <span className="text-xs text-suave">
                        {new Date(c.created_at).toLocaleString("pt-BR")}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-[11px] uppercase tracking-[0.12em] bg-creme border border-borda rounded-full px-3 py-1 text-tinta">{c.perfil}</span>
                      <span className="text-[11px] uppercase tracking-[0.12em] bg-roxo text-perola rounded-full px-3 py-1">{c.assunto}</span>
                    </div>
                    {c.mensagem && <p className="text-sm text-suave leading-relaxed">{c.mensagem}</p>}
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
