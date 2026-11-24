"use client";

import { useEffect, useState } from "react";
import { MessageCircle, ShieldCheck } from "lucide-react";
import {
  getStoredConsent,
  setStoredConsent,
  trackEvent,
  type ConsentStatus,
} from "@/config/analytics";
import { WhatsAppButton } from "./WhatsAppButton";

export function ConversionShell() {
  const [consent, setConsent] = useState<ConsentStatus>("accepted");
  const [mounted, setMounted] = useState(false);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    setMounted(true);
    setConsent(getStoredConsent());

    const onConsentChange = () => setConsent(getStoredConsent());
    const onToggleFloating = () => setShowFloating(window.scrollY > 360);
    onToggleFloating();
    window.addEventListener("euverso:consent-changed", onConsentChange);
    window.addEventListener("scroll", onToggleFloating, { passive: true });
    return () => {
      window.removeEventListener("euverso:consent-changed", onConsentChange);
      window.removeEventListener("scroll", onToggleFloating);
    };
  }, []);

  // Rastreamento de scroll_depth (25, 50, 75, 90%) respeitando consentimento LGPD
  useEffect(() => {
    if (!mounted || consent !== "accepted") return;
    const milestones = [25, 50, 75, 90];
    const fired = new Set<number>();

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = Math.round((window.scrollY / scrollable) * 100);
      for (const m of milestones) {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          trackEvent("scroll_depth", { depth: m });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted, consent]);

  return (
    <>
      {/* Botão flutuante discreto no desktop (aparece após a primeira dobra) */}
      {showFloating && (
        <div className="fixed right-6 bottom-6 z-40 hidden md:block">
          <WhatsAppButton
            origin="floating"
            label="Falar no WhatsApp"
            variant="dark"
            className="rounded-full px-6"
          />
        </div>
      )}

      {/* Barra CTA visível no mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-[#080808] bg-[#FFF9EC]/95 px-4 py-3 backdrop-blur-sm md:hidden">
        <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="font-display text-sm leading-5 font-semibold text-[#080808]">
              Conhecer o EuVerso
            </p>
            <p className="text-xs leading-4 text-[#3F3F46]">
              Fale pelo WhatsApp
            </p>
          </div>
          <WhatsAppButton
            origin="mobile-bar"
            label="WhatsApp"
            variant="primary"
            className="shrink-0 px-4 text-sm"
          />
        </div>
      </div>

      {/* Aviso de consentimento LGPD (compacto, sem rastreamento antes de aceitar) */}
      {mounted && consent === "pending" && (
        <aside
          aria-label="Preferências de privacidade e LGPD"
          className="fixed bottom-20 left-4 right-4 z-50 mx-auto max-w-md rounded-2xl border-2 border-[#080808] bg-[#FFFFFF] p-4 shadow-[6px_6px_0_#080808] md:bottom-6 md:left-6 md:right-auto md:mx-0"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-[#080808] bg-[#FDC616]">
              <ShieldCheck className="h-5 w-5 text-[#080808]" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-display text-sm leading-5 font-semibold text-[#080808]">
                Privacidade e medição conforme a LGPD
              </p>
              <p className="mt-1 text-xs leading-5 text-[#262626]">
                Usamos medição de cliques e rolagem somente se você autorizar, para melhorar o site. Nenhum dado pessoal é vendido ou compartilhado sem sua permissão.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setStoredConsent("accepted");
                    setConsent("accepted");
                  }}
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-[#080808] bg-[#FDC616] px-4 text-sm font-semibold text-[#080808] transition hover:bg-[#F4BA00]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Aceitar medição</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setStoredConsent("rejected");
                    setConsent("rejected");
                  }}
                  className="inline-flex min-h-11 items-center rounded-xl border-2 border-[#080808] bg-[#FFFFFF] px-4 text-sm font-semibold text-[#080808] transition hover:bg-[#FFF9EC]"
                >
                  Recusar
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
