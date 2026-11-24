"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Play, ShieldAlert, ShieldCheck, Workflow } from "lucide-react";
import { StatusDot } from "@/components/ui/StatusDot";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";
import { trackEvent } from "@/config/analytics";

const STUDIO_NODES = [
  {
    id: "trigger",
    category: "GATILHO",
    title: "Rotina Semanal ou Evento",
    accent: "#5BD8B6",
    detail: "Inicia por agenda configurada, webhook assinado ou solicitação no Pulse dentro do workspace autorizado.",
    status: "Validado",
  },
  {
    id: "context",
    category: "CONTEXTO + IA",
    title: "Leitura & Análise do Pulse",
    accent: "#FDC616",
    detail: "Consulta projetos e pendências do workspace com teto FinOps configurado e zero retry automático em chamadas faturáveis.",
    status: "Validado",
  },
  {
    id: "approval",
    category: "CONTROLE HUMANO",
    title: "Checkpoint de Aprovação",
    accent: "#FF8169",
    detail: "Pausa a execução e solicita aprovação humana de uso único (Web ou WhatsApp) vinculada aos parâmetros exatos.",
    status: "Obrigatório",
  },
  {
    id: "action",
    category: "EXECUÇÃO",
    title: "Ação Autorizada + Registro",
    accent: "#7654E8",
    detail: "Só executa a saída após sua aprovação e publica o histórico completo e auditável no Mission Control.",
    status: "Pronto",
  },
] as const;

export function WorkflowStudioShowcase() {
  const [selectedNodeId, setSelectedNodeId] = useState<(typeof STUDIO_NODES)[number]["id"]>("approval");
  const [dryRunState, setDryRunState] = useState<"idle" | "validated">("idle");

  const activeNode = STUDIO_NODES.find((n) => n.id === selectedNodeId) ?? STUDIO_NODES[0];

  const handleDryRun = () => {
    setDryRunState("validated");
    trackEvent("feature_click", { origin: "workflow_studio_dry_run", label: "simulate_dry_run" });
  };

  return (
    <section id="workflow-studio" className="bg-[#FFFFFF] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-4">
              <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
                08 · WORKFLOW STUDIO
              </p>
              <StatusDot status="em_validacao" />
            </div>
            <h2 className="font-display mt-3 text-3xl leading-10 font-semibold tracking-tight text-[#080808] sm:text-4xl sm:leading-[44px]">
              Crie automações visualmente — valide e simule antes de ativar.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#262626]">
              Desenhe blocos, conecte etapas, clone templates em modo rascunho e rode um Dry-Run sem efeitos colaterais. Recursos da etapa S6 em fase final de validação controlada.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/workflow-studio" className="comic-btn-secondary">
              <span>Detalhes do Workflow Studio</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Canvas representativo fiel ao Workflow Studio */}
        <div className="comic-panel-lg bg-grid-editorial mt-10 overflow-hidden bg-[#FFF9EC]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#080808] bg-[#080808] px-4 py-4 text-[#FFFFFF] sm:px-6">
            <div className="flex items-center gap-3">
              <Workflow className="h-5 w-5 text-[#FDC616]" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold tracking-wider text-[#FDC616] uppercase">
                RASCUNHO · ROTINA_OPERACIONAL_SEMANAL (V1.0 DRAFT)
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleDryRun}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-[#FFFFFF] bg-[#FDC616] px-4 text-xs font-semibold text-[#080808] transition hover:bg-[#FFE066] sm:text-sm"
              >
                <Play className="h-4 w-4" aria-hidden="true" />
                <span>{dryRunState === "validated" ? "Dry-Run validado (0 efeitos)" : "Simular Dry-Run"}</span>
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            {/* Nós conectados */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {STUDIO_NODES.map((node, index) => {
                const selected = node.id === activeNode.id;
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => {
                      setSelectedNodeId(node.id);
                      trackEvent("feature_click", { origin: "workflow_studio_node", label: node.id });
                    }}
                    className={`flex flex-col rounded-2xl border-2 border-[#080808] p-4 text-left transition ${
                      selected
                        ? "bg-[#FFFFFF] shadow-[6px_6px_0_#080808] -translate-y-0.5"
                        : "bg-[#FFFFFF]/90 shadow-[3px_3px_0_#080808] hover:bg-[#FFFFFF]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="inline-block rounded-md border border-[#080808] px-2 py-0.5 font-mono text-[11px] font-semibold uppercase"
                        style={{
                          backgroundColor: node.accent,
                          color: node.accent === "#7654E8" ? "#FFFFFF" : "#080808",
                        }}
                      >
                        {index + 1}. {node.category}
                      </span>
                      {dryRunState === "validated" && (
                        <CheckCircle2 className="h-4 w-4 text-[#15803D]" aria-hidden="true" />
                      )}
                    </div>
                    <p className="font-display mt-3 text-base leading-6 font-semibold text-[#080808]">
                      {node.title}
                    </p>
                    <p className="mt-2 font-mono text-xs text-[#52525B]">
                      Estado: {dryRunState === "validated" ? "OK na simulação" : node.status}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Inspetor do nó selecionado + honestidade S7 */}
            <div className="mt-6 grid gap-6 lg:grid-cols-12">
              <div className="rounded-2xl border-2 border-[#080808] bg-[#FFFFFF] p-6 lg:col-span-8">
                <p className="font-mono text-xs font-semibold tracking-wider text-[#52525B] uppercase">
                  INSPETOR DO BLOCO SELECIONADO · EXEMPLO INTERATIVO
                </p>
                <h3 className="font-display mt-2 text-xl leading-7 font-semibold text-[#080808]">
                  {activeNode.title}
                </h3>
                <p className="mt-2 text-base leading-6 text-[#262626]">{activeNode.detail}</p>

                {dryRunState === "validated" && (
                  <div className="mt-4 flex items-start gap-3 rounded-xl border-2 border-[#080808] bg-[#DCFCE7] p-4 text-[#14532D]">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                    <p className="text-sm leading-5 font-semibold">
                      Validação estrutural e Dry-Run concluídos no exemplo: 4 blocos válidos, permissões conferidas, checkpoint humano ativo e nenhum dado real modificado.
                    </p>
                  </div>
                )}
              </div>

              <div className="rounded-2xl border-2 border-[#080808] bg-[#080808] p-6 text-[#FFFFFF] lg:col-span-4">
                <div className="flex items-center gap-2 text-[#FDC616]">
                  <ShieldAlert className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <p className="font-mono text-xs font-semibold tracking-wider uppercase">
                    TRANSPARÊNCIA DE CATÁLOGO
                  </p>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#E4E4E7]">
                  Blocos futuros da etapa S7 (como <strong className="text-[#FFFFFF]">DevAgent</strong> e abertura automática de Pull Requests) permanecem bloqueados e claramente marcados como roadmap até homologação.
                </p>
                <div className="mt-5">
                  <WhatsAppButton
                    origin="workflow-studio"
                    label="Falar sobre o Studio"
                    variant="primary-on-dark"
                    className="w-full text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
