"use client";

import { useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, Lock, MessageSquare } from "lucide-react";
import { PULSE_JOURNEY_STEPS } from "@/data/home-content";
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
      "Consulta seu resumo financeiro pessoal (via FinanceAgent somente leitura) e prioriza suas tarefas da casa — sem misturar nenhum dado da empresa.",
    checks: [
      "Memória pessoal consultada somente com sua permissão",
      "Zero acesso aos dados do workspace empresarial",
      "Próximos passos aguardando sua confirmação explícita",
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
      "Consolida bloqueios dos projetos ativos da equipe, respeita os papéis de acesso (RBAC) e prepara o plano de ação pronto para revisão.",
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
      "Continuidade entre Web e WhatsApp oficial (quando habilitado)",
    ],
  },
] as const;

export function PulseDemoSection() {
  const [selectedId, setSelectedId] = useState<(typeof PULSE_CONTEXT_MODES)[number]["id"]>("pessoal");
  const currentIndex = Math.max(
    0,
    PULSE_CONTEXT_MODES.findIndex((m) => m.id === selectedId)
  );
  const current = PULSE_CONTEXT_MODES[currentIndex] ?? PULSE_CONTEXT_MODES[0];

  const handleModeKeyDown = (e: KeyboardEvent<HTMLButtonElement>, idx: number) => {
    let next: number | null = null;
    if (e.key === "ArrowRight") next = (idx + 1) % PULSE_CONTEXT_MODES.length;
    if (e.key === "ArrowLeft") next = (idx - 1 + PULSE_CONTEXT_MODES.length) % PULSE_CONTEXT_MODES.length;
    if (next !== null) {
      e.preventDefault();
      const mode = PULSE_CONTEXT_MODES[next];
      setSelectedId(mode.id);
      document.getElementById(`pulse-tab-${mode.id}`)?.focus();
    }
  };

  return (
    <section
      id="pulse"
      className="bg-halftone-dark border-y-4 border-[#FDC616] py-20 text-[#FFFFFF] lg:py-24"
    >
      <div id="como-funciona" className="mx-auto max-w-7xl scroll-mt-24 px-4 sm:px-6 lg:px-8">
        {/* Reposicionamento estratégico da PUV preservada conforme Adendo Definitivo */}
        <div className="mb-12 rounded-2xl border-2 border-[#FDC616] bg-[#141414] px-6 py-5 shadow-[6px_6px_0_#FDC616]">
          <p className="font-mono text-xs font-semibold tracking-wider text-[#FDC616] uppercase">
            A SOLUÇÃO · PULSE + ESPECIALISTAS + WORKFLOWS
          </p>
          <p className="font-display mt-2 text-2xl leading-8 font-semibold text-[#FFFFFF] sm:text-3xl sm:leading-10">
            O orquestrador de trabalho com IA da sua rotina, do seu time e do seu negócio.
          </p>
        </div>

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
              05 · PULSE — COMO FUNCIONA SEM JARGÃO
            </p>
            <h2 className="font-display mt-3 text-3xl leading-10 font-semibold tracking-tight text-[#FFFFFF] sm:text-4xl sm:leading-[44px]">
              Você conversa com um. Especialistas trabalham por trás.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#E4E4E7]">
              O Pulse é o assistente que compreende sua solicitação e encontra o especialista adequado. Agentes e skills utilizam ferramentas autorizadas; você acompanha resultados e aprova ações sensíveis.
            </p>

            {/* Sequência Conhece -> Entende -> Aciona -> Acompanha */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {PULSE_JOURNEY_STEPS.map((step) => (
                <div
                  key={step.number}
                  className="rounded-xl border border-[#2E2E32] bg-[#141414] p-4"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-[#080808] font-mono text-xs font-semibold"
                      style={{
                        backgroundColor: step.accent,
                        color: step.accent === "#7654E8" ? "#FFFFFF" : "#080808",
                      }}
                    >
                      {step.number}
                    </span>
                    <span className="font-mono text-xs font-semibold tracking-wider text-[#FDC616] uppercase">
                      {step.label}
                    </span>
                  </div>
                  <p className="font-display mt-2 text-sm leading-5 font-semibold text-[#FFFFFF]">
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#D4D4D8]">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Seletor de contexto */}
            <div
              className="mt-6 flex flex-wrap gap-3"
              role="tablist"
              aria-label="Contextos do Pulse"
            >
              {PULSE_CONTEXT_MODES.map((mode, idx) => {
                const active = mode.id === current.id;
                return (
                  <button
                    key={mode.id}
                    id={`pulse-tab-${mode.id}`}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-controls={`pulse-panel-${mode.id}`}
                    tabIndex={active ? 0 : -1}
                    onClick={() => {
                      setSelectedId(mode.id);
                      trackEvent("feature_click", { origin: "pulse_demo", label: mode.id });
                    }}
                    onKeyDown={(e) => handleModeKeyDown(e, idx)}
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
            <div
              id={`pulse-panel-${current.id}`}
              role="tabpanel"
              aria-labelledby={`pulse-tab-${current.id}`}
              className="mt-5 rounded-2xl border-2 border-[#FDC616] bg-[#141414] p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2E2E32] pb-3">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#FDC616] uppercase">
                  <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                  {current.scope}
                </span>
                <span className="font-mono text-xs text-[#D4D4D8]">Demonstração ilustrativa</span>
              </div>

              <div className="mt-4 rounded-xl border border-[#2E2E32] bg-[#080808] p-4">
                <p className="flex items-center gap-2 font-mono text-xs text-[#D4D4D8] uppercase">
                  <MessageSquare className="h-3.5 w-3.5 text-[#FDC616]" aria-hidden="true" />
                  Você pede:
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
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-5 text-[#F4F4F5]"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#5BD8B6]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <WhatsAppButton
                origin="pulse"
                label="Conhecer o Pulse"
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

        {/* Camada técnica em segundo nível (expansível — preserva Ilustração 03 sem despejar jargão no topo) */}
        <details className="group mt-12 rounded-2xl border-2 border-[#333333] bg-[#141414] p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs font-semibold tracking-wider text-[#FDC616] uppercase">
                CAMADA TÉCNICA · OPCIONAL
              </p>
              <p className="font-display mt-1 text-lg leading-6 font-semibold text-[#FFFFFF]">
                Como o Pulse coordena agentes, skills, ferramentas e workflows nos bastidores
              </p>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-[#FDC616] bg-[#080808] text-[#FDC616] transition group-open:rotate-180">
              <ChevronDown className="h-5 w-5" aria-hidden="true" />
            </span>
          </summary>

          <div className="mt-6 grid items-center gap-8 border-t border-[#2E2E32] pt-6 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-6">
              <div className="rounded-xl border border-[#2E2E32] bg-[#080808] p-4">
                <p className="font-mono text-xs font-semibold text-[#FDC616] uppercase">
                  ASSISTENTE ≠ ESPECIALISTA ≠ SKILL ≠ FERRAMENTA
                </p>
                <p className="mt-2 text-sm leading-6 text-[#E4E4E7]">
                  O <strong className="text-[#FFFFFF]">Pulse</strong> é o ponto único de conversa. Ele aciona{" "}
                  <strong className="text-[#FFFFFF]">agentes especializados</strong>, que usam{" "}
                  <strong className="text-[#FFFFFF]">skills</strong> reutilizáveis (padrão aberto{" "}
                  <code className="font-mono text-xs text-[#FDC616]">SKILL.md</code>) e{" "}
                  <strong className="text-[#FFFFFF]">ferramentas autorizadas</strong> sob controle de permissão.
                </p>
              </div>
              <div className="rounded-xl border border-[#2E2E32] bg-[#080808] p-4">
                <p className="font-mono text-xs font-semibold text-[#5BD8B6] uppercase">
                  WORKFLOWS DURÁVEIS &amp; DRY-RUN (S6 — PILOTO CONTROLADO)
                </p>
                <p className="mt-2 text-sm leading-6 text-[#E4E4E7]">
                  Demandas recorrentes viram fluxos visuais no Workflow Studio com simulação sem efeitos colaterais (Dry-Run), pausa humana para aprovação e execução confiável acompanhada no Mission Control.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/automacoes-com-ia" className="comic-btn-secondary-on-dark text-sm">
                  <span>Ver arquitetura de automações</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/workflow-studio" className="comic-btn-secondary-on-dark text-sm">
                  <span>Explorar Workflow Studio</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border-2 border-[#FDC616] bg-[#080808] p-2.5 shadow-[6px_6px_0_#7654E8]">
                <div className="overflow-hidden rounded-xl">
                  <ResponsiveIllustration
                    variant="automacoes"
                    sizes="(max-width: 1024px) 100vw, 44vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
