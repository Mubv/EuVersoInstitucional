"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Lock, MessageSquare } from "lucide-react";
import { ResponsiveIllustration } from "@/components/ui/ResponsiveIllustration";
import { StatusDot } from "@/components/ui/StatusDot";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";
import { trackEvent } from "@/config/analytics";

const PULSE_CONTEXT_MODES = [
  {
    id: "pessoal",
    label: "Workspace Pessoal",
    scope: "Somente contexto pessoal autorizado",
    accent: "#5BD8B6",
    prompt: "Pulse, como estão meus gastos e minhas tarefas da semana?",
    replyTitle: "Leitura isolada do seu espaço Pessoal",
    replyBody:
      "Mostra seu resumo financeiro pessoal (via FinanceAgent somente leitura) e 3 tarefas domésticas priorizadas — sem misturar nenhum número ou tarefa da empresa.",
    checks: [
      "Memória pessoal consultada com sua permissão",
      "Zero acesso aos dados do workspace empresarial",
      "Sugestão de próximos passos aguardando confirmação",
    ],
  },
  {
    id: "empresa",
    label: "Workspace Empresa",
    scope: "Somente projetos e equipe autorizados",
    accent: "#7654E8",
    prompt: "Pulse, o que trava nossas entregas desta semana e quem precisa aprovar?",
    replyTitle: "Visão operacional do workspace Empresa",
    replyBody:
      "Consolida bloqueios dos projetos ativos da equipe, destaca pendências por papel (RBAC) e prepara um plano de ação pronto para revisão do responsável.",
    checks: [
      "Respeita papéis Owner, Admin, Member e Viewer",
      "Usa a credencial BYOK exclusiva deste workspace",
      "Nenhuma tarefa criada sem aprovação humana explícita",
    ],
  },
  {
    id: "global",
    label: "Pulse Global (Autorizado)",
    scope: "Interseção explícita dos seus workspaces",
    accent: "#FDC616",
    prompt: "Pulse, organize minha quinta-feira equilibrando reuniões da empresa e compromissos de casa.",
    replyTitle: "Síntese cruzada explícita — sem misturar memórias",
    replyBody:
      "Cruza apenas os workspaces onde você tem permissão ativa, cita a origem de cada item e mantém as memórias permanentemente separadas.",
    checks: [
      "Citação explícita de origem e destino por workspace",
      "Sem fusão silenciosa entre memórias diferentes",
      "Disponível na Web e no WhatsApp oficial conectado",
    ],
  },
] as const;

export function PulseDemoSection() {
  const [selectedId, setSelectedId] = useState<(typeof PULSE_CONTEXT_MODES)[number]["id"]>("pessoal");
  const current = PULSE_CONTEXT_MODES.find((m) => m.id === selectedId) ?? PULSE_CONTEXT_MODES[0];

  return (
    <section id="pulse" className="bg-halftone-dark border-y-4 border-[#FDC616] py-20 text-[#FFFFFF] lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Coluna visual: Ilustração 02 — Pulse Orbital */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border-3 border-[#FDC616] bg-[#080808] p-3 shadow-[8px_8px_0_#FDC616]">
              <div className="animate-float-gentle overflow-hidden rounded-2xl">
                <ResponsiveIllustration
                  variant="pulse"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 px-1">
              <StatusDot status="disponivel" onDark />
              <span className="font-mono text-xs text-[#D4D4D8]">
                Presença orbital · Web + WhatsApp oficial
              </span>
            </div>
          </div>

          {/* Coluna editorial + demonstração contextual */}
          <div className="lg:col-span-7">
            <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#FDC616] uppercase">
              04 · PULSE — INTELIGÊNCIA CENTRAL
            </p>
            <h2 className="font-display mt-3 text-3xl leading-10 font-semibold tracking-tight text-[#FFFFFF] sm:text-4xl sm:leading-[44px]">
              Uma IA que trabalha com o seu contexto.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#E4E4E7]">
              O Pulse orbita os seus mundos sem virar um robô genérico. Ele conhece apenas o espaço que você autoriza, lembra do que importa com controle de privacidade e transforma conversas em planos acompanháveis.
            </p>

            {/* Seletor de contexto */}
            <div className="mt-6 flex flex-wrap gap-3" role="tablist" aria-label="Contextos do Pulse">
              {PULSE_CONTEXT_MODES.map((mode) => {
                const active = mode.id === current.id;
                return (
                  <button
                    key={mode.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => {
                      setSelectedId(mode.id);
                      trackEvent("feature_click", { origin: "pulse_demo", label: mode.id });
                    }}
                    className={`inline-flex min-h-12 items-center gap-2 rounded-xl border-2 px-4 text-sm font-semibold transition ${
                      active
                        ? "border-[#FFFFFF] bg-[#FDC616] text-[#080808] shadow-[4px_4px_0_#FFFFFF]"
                        : "border-[#3F3F46] bg-[#141414] text-[#FFFFFF] hover:border-[#FDC616]"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 rounded-full border border-[#080808]"
                      style={{ backgroundColor: mode.accent }}
                    />
                    <span>{mode.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Cartão da conversa simulada */}
            <div className="mt-6 rounded-2xl border-2 border-[#FDC616] bg-[#141414] p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2E2E32] pb-3">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#FDC616] uppercase">
                  <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                  {current.scope}
                </span>
                <span className="font-mono text-xs text-[#A1A1AA]">Exemplo simulado</span>
              </div>

              <div className="mt-4 rounded-xl border border-[#2E2E32] bg-[#080808] p-4">
                <p className="flex items-center gap-2 font-mono text-xs text-[#A1A1AA] uppercase">
                  <MessageSquare className="h-3.5 w-3.5 text-[#FDC616]" aria-hidden="true" />
                  Você pergunta:
                </p>
                <p className="mt-1 text-base leading-6 font-semibold text-[#FFFFFF]">
                  &ldquo;{current.prompt}&rdquo;
                </p>
              </div>

              <div className="mt-4">
                <h3 className="font-display text-lg leading-6 font-semibold text-[#FDC616]">
                  {current.replyTitle}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#E4E4E7]">{current.replyBody}</p>
                <ul className="mt-4 space-y-2">
                  {current.checks.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-5 text-[#F4F4F5]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5BD8B6]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppButton
                origin="pulse"
                label="Conhecer o Pulse pelo WhatsApp"
                variant="primary-on-dark"
                extraEvent="feature_click"
              />
              <Link href="/pulse" className="comic-btn-secondary-on-dark">
                <span>Explorar página do Pulse</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
