import { MessageCircle } from "lucide-react";
import { waLink, WA_MSGS } from "../lib/site";

export const FloatingWhatsApp = () => (
  <a
    href={waLink(WA_MSGS.agendar)}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    data-testid="whatsapp-flutuante"
    className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 bg-[#25D366] text-white font-medium pl-4 pr-4 sm:pr-5 py-3.5 rounded-full shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-transform duration-300"
  >
    <MessageCircle size={22} />
    <span className="hidden sm:inline text-sm">Fale no WhatsApp</span>
  </a>
);
