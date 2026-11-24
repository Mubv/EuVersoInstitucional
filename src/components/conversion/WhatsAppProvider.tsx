"use client";

import Link from "next/link";
import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { Check, Copy, MessageCircle, X } from "lucide-react";
import { getWhatsAppMessage, type WhatsAppOrigin } from "@/config/site";

interface PreviewState {
  origin: WhatsAppOrigin;
  message: string;
}

interface WhatsAppModalContextValue {
  openPreviewModal: (origin: WhatsAppOrigin, customNote?: string) => void;
}

const WhatsAppModalContext = createContext<WhatsAppModalContextValue | null>(null);

export function useWhatsAppModal() {
  const ctx = useContext(WhatsAppModalContext);
  if (!ctx) {
    throw new Error("useWhatsAppModal deve ser usado dentro de WhatsAppProvider");
  }
  return ctx;
}

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const [preview, setPreview] = useState<PreviewState | null>(null);
  const [copied, setCopied] = useState(false);

  const openPreviewModal = useCallback((origin: WhatsAppOrigin, customNote?: string) => {
    setCopied(false);
    setPreview({
      origin,
      message: getWhatsAppMessage(origin, customNote),
    });
  }, []);

  const handleCopy = useCallback(async () => {
    if (!preview) return;
    try {
      await navigator.clipboard.writeText(preview.message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }, [preview]);

  return (
    <WhatsAppModalContext.Provider value={{ openPreviewModal }}>
      {children}

      {preview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="wa-preview-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#080808]/75 p-4"
          onClick={() => setPreview(null)}
        >
          <div
            className="comic-panel-lg relative w-full max-w-lg bg-[#FFF9EC] p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPreview(null)}
              aria-label="Fechar janela de WhatsApp"
              className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#080808] bg-[#FFFFFF] text-[#080808] transition hover:bg-[#FDC616]"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
              CANAL WHATSAPP · PRÉ-PUBLICAÇÃO
            </p>
            <h2
              id="wa-preview-title"
              className="font-display mt-2 text-2xl leading-8 font-semibold text-[#080808]"
            >
              Mensagem contextual pronta para o WhatsApp
            </h2>
            <p className="mt-2 text-sm leading-5 text-[#262626]">
              A variável <code className="rounded bg-[#080808] px-1.5 py-0.5 font-mono text-xs text-[#FDC616]">WHATSAPP_NUMBER</code>{" "}
              ainda não foi preenchida neste ambiente. Por segurança e honestidade comercial, nenhum número fictício foi inserido.
            </p>

            <div className="mt-6 rounded-xl border-2 border-[#080808] bg-[#FFFFFF] p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold tracking-wider text-[#525252] uppercase">
                  Origem: {preview.origin}
                </span>
                <MessageCircle className="h-4 w-4 text-[#080808]" aria-hidden="true" />
              </div>
              <p className="mt-2 text-base leading-6 text-[#080808]">{preview.message}</p>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <button type="button" onClick={handleCopy} className="comic-btn-primary flex-1">
                {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                <span>{copied ? "Mensagem copiada" : "Copiar mensagem"}</span>
              </button>
              <Link
                href="/contato"
                onClick={() => setPreview(null)}
                className="comic-btn-secondary flex-1"
              >
                Ir para Contato
              </Link>
            </div>
          </div>
        </div>
      )}
    </WhatsAppModalContext.Provider>
  );
}
