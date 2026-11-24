"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, XCircle } from "lucide-react";
import { HERO_DEMO_SCENARIOS, type HeroDemoScenario } from "@/data/home-content";
import { trackEvent } from "@/config/analytics";

export function HeroInteractiveDemo() {
  const [activeId, setActiveId] = useState<HeroDemoScenario["id"]>("organizar-dia");
  const [simulatedApproved, setSimulatedApproved] = useState<Record<string, boolean>>({});

  const scenario =
    HERO_DEMO_SCENARIOS.find((item) => item.id === activeId) ?? HERO_DEMO_SCENARIOS[0];
  const isApproved = Boolean(simulatedApproved[scenario.id]);

  const handleSelectScenario = (id: HeroDemoScenario["id"]) => {
    setActiveId(id);
    trackEvent("hero_demo_interaction", { scenario: id, label: "tab_select" });
  };

  const handleSimulateAction = () => {
    setSimulatedApproved((prev) => ({
      ...prev,
      [scenario.id]: !prev[scenario.id],
    }));
    trackEvent("hero_demo_interaction", {
      scenario: scenario.id,
      label: isApproved ? "reset_simulation" : "confirm_simulation",
    });
  };

  return (
    <div
      id="demo-interativa"
      className="comic-panel-lg overflow-hidden bg-[#FFFFFF]"
      aria-label="Demonstração interativa guiada do EuVerso"
    >
      {/* Barra superior da demonstração */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#080808] bg-[#080808] px-4 py-4 text-[#FFFFFF] sm:px-6">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-block h-3 w-3 rounded-full bg-[#FDC616]"
          />
          <p className="font-mono text-xs leading-4 font-semibold tracking-wider text-[#FDC616] uppercase sm:text-[13px]">
            PROVA INTERATIVA · EXEMPLO SIMULADO
          </p>
        </div>
        <p className="font-mono text-xs leading-4 text-[#E4E4E7]">
          Clique em um cenário e compare: chat comum vs. EuVerso
        </p>
      </div>

      {/* Seletor dos 4 cenários */}
      <div className="border-b-2 border-[#080808] bg-[#FFF9EC] p-4 sm:px-6">
        <div role="tablist" aria-label="Cenários de demonstração" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {HERO_DEMO_SCENARIOS.map((item) => {
            const active = item.id === scenario.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => handleSelectScenario(item.id)}
                className={`flex min-h-12 items-center justify-between gap-2 rounded-xl border-2 border-[#080808] px-4 py-2 text-left text-sm leading-5 font-semibold transition ${
                  active
                    ? "bg-[#FDC616] text-[#080808] shadow-[4px_4px_0_#080808]"
                    : "bg-[#FFFFFF] text-[#080808] hover:bg-[#FFF3C4]"
                }`}
              >
                <span>{item.tabLabel}</span>
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 shrink-0 rounded-full border border-[#080808]"
                  style={{ backgroundColor: item.accentColor }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Corpo da simulação */}
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Pedido do usuário */}
        <div className="rounded-2xl border-2 border-[#080808] bg-[#FFF9EC] p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs font-semibold tracking-wider text-[#080808] uppercase">
              SEU PEDIDO NO EUVERSO
            </span>
            <span className="font-mono text-xs font-semibold text-[#3F3F46]">
              Contexto: {scenario.workspaceLabel}
            </span>
          </div>
          <p className="font-display mt-2 text-lg leading-7 font-semibold text-[#080808] sm:text-xl">
            &ldquo;{scenario.userPrompt}&rdquo;
          </p>
        </div>

        {/* Trilha de 4 etapas */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scenario.steps.map((step, index) => (
            <div
              key={step.label}
              className="relative flex flex-col rounded-xl border-2 border-[#080808] bg-[#FFFFFF] p-4 shadow-[3px_3px_0_#080808]"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold tracking-wider text-[#080808] uppercase">
                  {step.label}
                </span>
                {index < 3 && (
                  <ArrowRight
                    className="hidden h-4 w-4 text-[#080808] lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
              <p className="font-display mt-2 text-base leading-6 font-semibold text-[#080808]">
                {step.title}
              </p>
              <p className="mt-1 text-sm leading-5 text-[#262626]">{step.detail}</p>
            </div>
          ))}
        </div>

        {/* Comparação direta: Chat comum vs EuVerso */}
        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          {/* Lado A: IA genérica */}
          <div className="rounded-2xl border-2 border-[#080808] bg-[#F4F4F5] p-6 lg:col-span-5">
            <div className="flex items-center gap-2 text-[#080808]">
              <XCircle className="h-5 w-5 shrink-0 text-[#B91C1C]" aria-hidden="true" />
              <p className="font-mono text-xs font-semibold tracking-wider uppercase">
                CHAT DE IA GENÉRICO
              </p>
            </div>
            <p className="mt-3 text-base leading-6 text-[#262626]">
              {scenario.genericAiResponse}
            </p>
            <p className="mt-4 font-mono text-xs text-[#52525B]">
              Resultado: você lê um texto longo e volta a organizar tudo manualmente.
            </p>
          </div>

          {/* Lado B: Estruturado no EuVerso */}
          <div className="rounded-2xl border-2 border-[#080808] bg-[#080808] p-6 text-[#FFFFFF] shadow-[6px_6px_0_#FDC616] lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 shrink-0 text-[#FDC616]" aria-hidden="true" />
                <p className="font-mono text-xs font-semibold tracking-wider text-[#FDC616] uppercase">
                  ESTRUTURADO NO EUVERSO
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-xs text-[#E4E4E7]">
                <span
                  aria-hidden="true"
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{
                    backgroundColor: isApproved ? "#5BD8B6" : scenario.euversoOutcome.statusDot,
                  }}
                />
                {isApproved ? "Simulação confirmada no exemplo" : scenario.euversoOutcome.statusLabel}
              </span>
            </div>

            <h3 className="font-display mt-3 text-xl leading-7 font-semibold text-[#FFFFFF]">
              {scenario.euversoOutcome.heading}
            </h3>

            <ul className="mt-4 space-y-3">
              {scenario.euversoOutcome.items.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 rounded-xl border border-[#2E2E32] bg-[#161618] p-3 text-sm leading-5 text-[#F4F4F5]"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#5BD8B6]"
                    aria-hidden="true"
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-col gap-4 border-t border-[#2E2E32] pt-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-center gap-2 text-xs leading-5 text-[#D4D4D8]">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#FDC616]" aria-hidden="true" />
                <span>{scenario.euversoOutcome.humanControlNote}</span>
              </p>
              <button
                type="button"
                onClick={handleSimulateAction}
                className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl border-2 border-[#FFFFFF] bg-[#FDC616] px-4 text-sm font-semibold text-[#080808] transition hover:bg-[#FFE066]"
              >
                {isApproved ? "Reiniciar simulação" : "Simular aprovação"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
