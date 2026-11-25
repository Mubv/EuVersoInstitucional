"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Coins, History, ShieldCheck, XCircle } from "lucide-react";
import { StatusDot } from "@/components/ui/StatusDot";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";
import { trackEvent } from "@/config/analytics";

export function MissionControlShowcase() {
  const [decision, setDecision] = useState<"pending" | "approved" | "rejected">("pending");

  return (
    <section id="mission-control" className="bg-[#FFF9EC] border-t-2 border-[#080808] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          {/* Explicação editorial */}
          <div className="lg:col-span-5">
            <div className="flex flex-wrap items-center gap-4">
              <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
                09 · MISSION CONTROL &amp; GOVERNANÇA
              </p>
              <StatusDot status="disponivel" showShort />
            </div>
            <h2 className="font-display mt-3 text-3xl leading-10 font-semibold tracking-tight text-[#080808] sm:text-4xl sm:leading-[44px]">
              Delegar não é perder o controle.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#262626]">
              Acompanhe tarefas e automações, identifique o que está em execução, o que precisa de aprovação e o que foi concluído. Plataforma S6 certificada em piloto controlado com trilha auditável por workspace.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-[#080808]" aria-hidden="true" />
                <span className="text-sm leading-6 text-[#262626]">
                  <strong className="font-semibold text-[#080808]">Linha do tempo clara:</strong>{" "}
                  visualize em tempo real cada etapa concluída e onde a execução aguarda sua decisão.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#080808]" aria-hidden="true" />
                <span className="text-sm leading-6 text-[#262626]">
                  <strong className="font-semibold text-[#080808]">Aprovações unificadas:</strong>{" "}
                  aprove ou recuse ações sensíveis com validação de uso único vinculada aos parâmetros exatos.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Coins className="mt-1 h-5 w-5 shrink-0 text-[#080808]" aria-hidden="true" />
                <span className="text-sm leading-6 text-[#262626]">
                  <strong className="font-semibold text-[#080808]">Consumo transparente:</strong>{" "}
                  histórico auditável de uso e limites por workspace sem retries automáticos faturáveis.
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppButton
                origin="mission-control"
                label="Conhecer o Mission Control"
                variant="primary"
              />
              <Link href="/workflow-studio" className="comic-btn-secondary text-sm">
                <span>Ver Workflow Studio</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Painel interativo simulado do Mission Control */}
          <div className="comic-panel-lg overflow-hidden bg-[#FFFFFF] lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#080808] bg-[#080808] px-6 py-4 text-[#FFFFFF]">
              <div className="flex items-center gap-2">
                <History className="h-4 w-4 text-[#FDC616]" aria-hidden="true" />
                <span className="font-mono text-xs font-semibold tracking-wider text-[#FDC616] uppercase">
                  MISSION CONTROL · EXEMPLO SIMULADO
                </span>
              </div>
              <span className="font-mono text-xs text-[#D4D4D8]">Workspace: Operação Comercial</span>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E4E4E7] pb-4">
                <div>
                  <p className="font-mono text-xs font-semibold text-[#52525B] uppercase">
                    MISSÃO #EV-EXEMPLO-04
                  </p>
                  <h3 className="font-display mt-1 text-xl leading-7 font-semibold text-[#080808]">
                    Revisão semanal de entregas e criação de plano de ação
                  </h3>
                </div>
                <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase">
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full border border-[#080808]"
                    style={{
                      backgroundColor:
                        decision === "approved"
                          ? "#15803D"
                          : decision === "rejected"
                            ? "#B91C1C"
                            : "#FDC616",
                    }}
                  />
                  {decision === "approved"
                    ? "Concluída (simulação)"
                    : decision === "rejected"
                      ? "Interrompida por você"
                      : "Aguardando aprovação"}
                </span>
              </div>

              {/* Etapas */}
              <ol className="mt-5 space-y-3">
                <li className="flex items-start justify-between gap-4 rounded-xl border-2 border-[#080808] bg-[#F0FDF4] p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#15803D]" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-[#080808]">
                        1. Coleta de pendências no workspace autorizado
                      </p>
                      <p className="text-xs leading-5 text-[#262626]">
                        Leitura concluída · Isolamento validado · Sem alterações
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#14532D]">OK</span>
                </li>

                <li className="flex items-start justify-between gap-4 rounded-xl border-2 border-[#080808] bg-[#FFF9EC] p-4">
                  <div className="flex items-start gap-3">
                    {decision === "approved" ? (
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#15803D]" aria-hidden="true" />
                    ) : decision === "rejected" ? (
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#B91C1C]" aria-hidden="true" />
                    ) : (
                      <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#B45309]" aria-hidden="true" />
                    )}
                    <div>
                      <p className="text-sm font-semibold text-[#080808]">
                        2. Aprovação humana: criar 3 tarefas de revisão para a equipe
                      </p>
                      <p className="text-xs leading-5 text-[#262626]">
                        {decision === "approved"
                          ? "Aprovado na simulação — execução autorizada e auditada."
                          : decision === "rejected"
                            ? "Recusado na simulação — nenhuma tarefa foi criada."
                            : "Pausa obrigatória aguardando sua decisão explícita."}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#080808]">
                    {decision === "pending" ? "PAUSADA" : decision === "approved" ? "APROVADA" : "RECUSADA"}
                  </span>
                </li>

                <li className="flex items-start justify-between gap-4 rounded-xl border-2 border-[#080808]/30 bg-[#F4F4F5] p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className={`mt-0.5 h-5 w-5 shrink-0 ${
                        decision === "approved" ? "text-[#15803D]" : "text-[#71717A]"
                      }`}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#080808]">
                        3. Registro de histórico, auditoria e resumo de consumo
                      </p>
                      <p className="text-xs leading-5 text-[#262626]">
                        Medição BYOK transparente (sem gravação de prompts brutos)
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#52525B]">
                    {decision === "approved" ? "REGISTRADA" : "PRÓXIMA"}
                  </span>
                </li>
              </ol>

              {/* Botões de simulação */}
              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-[#E4E4E7] pt-5">
                <button
                  type="button"
                  onClick={() => {
                    setDecision("approved");
                    trackEvent("feature_click", { origin: "mission_control_demo", label: "approve" });
                  }}
                  className="comic-btn-primary text-sm"
                >
                  Simular aprovação
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setDecision("rejected");
                    trackEvent("feature_click", { origin: "mission_control_demo", label: "reject" });
                  }}
                  className="comic-btn-secondary text-sm"
                >
                  Simular recusa
                </button>
                {decision !== "pending" && (
                  <button
                    type="button"
                    onClick={() => setDecision("pending")}
                    className="inline-flex min-h-12 items-center px-3 text-sm font-semibold text-[#080808] underline underline-offset-4"
                  >
                    Reiniciar exemplo
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
