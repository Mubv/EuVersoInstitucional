import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Brain,
  CheckCircle2,
  Cpu,
  FolderKanban,
  KeyRound,
  Layers,
  MessageCircle,
  Plug,
  ShieldCheck,
  Sparkles,
  Wallet,
  XCircle,
} from "lucide-react";
import { buildFaqJsonLd, buildPageMetadata } from "@/lib/seo";
import {
  AGENTS_SHOWCASE,
  AUDIENCES,
  HOME_FAQ_ITEMS,
  PAIN_PILLARS,
  SECURITY_PILLARS,
  SHIFT_COMPARISON,
  WORKSPACES_WORLDS,
} from "@/data/home-content";
import { ResponsiveIllustration } from "@/components/ui/ResponsiveIllustration";
import { StatusDot } from "@/components/ui/StatusDot";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";
import { HeroInteractiveDemo } from "@/components/home/HeroInteractiveDemo";
import { PulseDemoSection } from "@/components/home/PulseDemoSection";
import { WorkflowStudioShowcase } from "@/components/home/WorkflowStudioShowcase";
import { MissionControlShowcase } from "@/components/home/MissionControlShowcase";
import { PlansGrid } from "@/components/shared/PlansGrid";
import { FaqAccordion } from "@/components/shared/FaqAccordion";

export const metadata = buildPageMetadata({
  title: "EuVerso — Uma inteligência para organizar seus mundos e fazer acontecer",
  description:
    "Organize seus espaços, converse com o Pulse e transforme ideias, tarefas e processos em ações acompanháveis com inteligência artificial contextual.",
  path: "/",
  keywords: [
    "assistente pessoal com IA",
    "IA para produtividade",
    "agentes de IA para empresas",
    "automação de processos com IA",
    "plataforma de automação com IA",
    "IA para pequenas empresas",
    "software para organizar tarefas com IA",
    "criação de workflows com IA",
  ],
});

const ADDITIONAL_FEATURES = [
  {
    icon: FolderKanban,
    title: "Projetos & Tarefas",
    status: "disponivel" as const,
    text: "Estruture metas, etapas e próximos passos dentro de cada workspace com apoio direto do Pulse.",
    href: "/ia-para-produtividade",
  },
  {
    icon: Wallet,
    title: "Finanças Contextuais",
    status: "disponivel" as const,
    text: "Acompanhe receitas, despesas, cartões e faturas com leitura precisa via FinanceAgent (sem movimentação bancária).",
    href: "/funcionalidades",
  },
  {
    icon: Brain,
    title: "Memória em 3 Níveis",
    status: "disponivel" as const,
    text: "Isolamento entre conversa, workspace e preferências duráveis, com proveniência, correção e exclusão auditável.",
    href: "/pulse",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Oficial",
    status: "disponivel_com_restricoes" as const,
    text: "Canal comercial principal e, quando habilitado, conectado à mesma thread do Pulse via API oficial da Meta.",
    href: "/contato",
  },
  {
    icon: Cpu,
    title: "Modelos de IA & BYOK",
    status: "disponivel" as const,
    text: "OpenAI, Google Gemini, Google Vertex AI e Anthropic Claude em cofre criptografado por workspace.",
    href: "/ia-para-empresas",
  },
  {
    icon: Plug,
    title: "Integrações, Skills & MCP",
    status: "disponivel_com_restricoes" as const,
    text: "Padrão aberto SKILL.md e ferramentas MCP em ambiente efêmero isolado com aprovação explícita.",
    href: "/agentes-de-ia",
  },
];

const AUTOMATION_PIPELINE = [
  { step: "01", title: "Solicitação", desc: "Você descreve o processo ao Pulse em português claro." },
  { step: "02", title: "Planejamento", desc: "O EuVerso organiza etapas, contexto autorizado e pontos de revisão." },
  { step: "03", title: "Workflow", desc: "Gera um fluxo visual em modo rascunho pronto para validação e Dry-Run." },
  { step: "04", title: "Aprovação", desc: "Pausa em ações sensíveis aguardando sua decisão na Web ou WhatsApp." },
  { step: "05", title: "Resultado", desc: "Executa com rastreabilidade e registra histórico e custos no Mission Control." },
];

export default function HomePage() {
  const faqJsonLd = buildFaqJsonLd(HOME_FAQ_ITEMS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* =====================================================================
          01 — HERO / POSICIONAMENTO (ADENDO DEFINITIVO)
      ====================================================================== */}
      <section id="inicio" className="bg-halftone-cream relative overflow-hidden border-b-4 border-[#080808] pt-8 pb-16 lg:pt-14 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Texto PUV + CTAs */}
            <div className="lg:col-span-6">
              <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
                CONHEÇA O EUVERSO
              </p>

              <h1 className="font-display mt-4 text-4xl leading-[44px] font-semibold tracking-tight text-[#080808] sm:text-5xl sm:leading-[56px]">
                Sua vida. Seu trabalho. Seus projetos.{" "}
                <span className="comic-highlight">Tudo em um só lugar.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-7 text-[#1F1F23]">
                O EuVerso é uma plataforma de IA que conecta seus mundos, organiza suas informações e transforma pedidos em ações, com especialistas inteligentes trabalhando por você.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
                <WhatsAppButton
                  origin="hero"
                  label="Conhecer o EuVerso"
                  variant="primary"
                  extraEvent="hero_cta_click"
                />
                <a href="#demonstracao" className="comic-btn-secondary">
                  <span>Ver como funciona</span>
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Grande Ilustração Oficial 01 — Mundos Conectados (contraste corrigido) */}
            <div className="lg:col-span-6">
              <div className="comic-panel-lg-dark overflow-hidden p-3">
                <div className="overflow-hidden rounded-2xl bg-[#080808]">
                  <ResponsiveIllustration
                    variant="hero"
                    priority
                    sizes="(max-width: 1024px) 100vw, 48vw"
                  />
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-2 pb-1 text-xs text-[#E4E4E7]">
                  <span className="font-mono font-semibold text-[#FDC616] uppercase">
                    EUVERSO · MUNDOS CONECTADOS
                  </span>
                  <span>Pessoal · Trabalho · Projetos · Equipe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          02 — A DOR / FRAGMENTAÇÃO
      ====================================================================== */}
      <section id="problema" className="bg-[#FFFFFF] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
              02 · A DOR DA FRAGMENTAÇÃO
            </p>
            <h2 className="font-display mt-3 text-3xl leading-10 font-semibold tracking-tight text-[#080808] sm:text-4xl sm:leading-[44px]">
              Sua rotina está espalhada. Seu trabalho não deveria estar.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#262626]">
              E-mails de um lado. Agenda de outro. Despesas, documentos, projetos e tarefas em ferramentas diferentes. Você gasta tempo procurando contexto, repetindo informações e acompanhando o que ficou para trás.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PAIN_PILLARS.map((item) => (
              <article key={item.id} className="comic-panel comic-panel-interactive p-6 sm:p-8">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-semibold tracking-wider text-[#52525B] uppercase">
                    {item.eyebrow}
                  </span>
                  <div
                    className="h-3 w-10 rounded-full border-2 border-[#080808]"
                    style={{ backgroundColor: item.accent }}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display mt-4 text-xl leading-7 font-semibold text-[#080808]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#262626]">{item.pain}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          03 — A VIRADA / PERGUNTAR VS. DELEGAR
      ====================================================================== */}
      <section id="virada" className="bg-[#FFF9EC] border-t-2 border-[#080808] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
              03 · A VIRADA
            </p>
            <h2 className="font-display mt-3 text-3xl leading-10 font-semibold tracking-tight text-[#080808] sm:text-4xl sm:leading-[44px]">
              De perguntar para a IA a delegar trabalho.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            {/* Comparativo: Hoje */}
            <article className="comic-panel bg-[#F4F4F5] p-6 sm:p-8 lg:col-span-5">
              <div className="flex items-center gap-2 text-[#080808]">
                <XCircle className="h-5 w-5 shrink-0 text-[#B91C1C]" aria-hidden="true" />
                <p className="font-mono text-xs font-semibold tracking-wider uppercase">
                  {SHIFT_COMPARISON.today.eyebrow}
                </p>
              </div>
              <p className="font-display mt-4 text-xl leading-7 font-semibold text-[#080808]">
                {SHIFT_COMPARISON.today.summary}
              </p>
              <ul className="mt-6 space-y-3 border-t border-[#080808]/15 pt-5">
                {SHIFT_COMPARISON.today.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-[#262626]">
                    <XCircle className="mt-1 h-4 w-4 shrink-0 text-[#B91C1C]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Comparativo: Com o EuVerso */}
            <article className="comic-panel-lg-dark border-[#080808] p-6 shadow-[8px_8px_0_#FDC616] sm:p-8 lg:col-span-7">
              <div className="flex items-center gap-2 text-[#FDC616]">
                <Sparkles className="h-5 w-5 shrink-0" aria-hidden="true" />
                <p className="font-mono text-xs font-semibold tracking-wider uppercase">
                  {SHIFT_COMPARISON.euverso.eyebrow}
                </p>
              </div>
              <p className="font-display mt-4 text-xl leading-7 font-semibold text-[#FFFFFF]">
                {SHIFT_COMPARISON.euverso.summary}
              </p>
              <ul className="mt-6 space-y-3 border-t border-[#2E2E32] pt-5">
                {SHIFT_COMPARISON.euverso.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-[#E4E4E7]">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#5BD8B6]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-5 text-[#D4D4D8]">
                Ações sensíveis exigem aprovação humana explícita; disponibilidade de integrações varia conforme liberação do produto.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-2xl border-2 border-[#080808] bg-[#FDC616] px-6 py-5 shadow-[4px_4px_0_#080808]">
            <p className="font-display text-center text-xl leading-7 font-semibold text-[#080808] sm:text-2xl sm:leading-8">
              {SHIFT_COMPARISON.closing}
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          04 — DEMONSTRAÇÃO (TRANSITÓRIO W1 -> REFINADO EM W2)
      ====================================================================== */}
      <section id="demonstracao" className="bg-[#FFFFFF] border-t-2 border-[#080808] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HeroInteractiveDemo />
        </div>
      </section>

      {/* =====================================================================
          04 — PULSE (ILUSTRAÇÃO 02 + CONVERSA CONTEXTUAL INTERATIVA)
      ====================================================================== */}
      <PulseDemoSection />

      {/* =====================================================================
          05 — WORKSPACES
      ====================================================================== */}
      <section id="workspaces" className="bg-[#FFF9EC] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-4">
                <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
                  05 · WORKSPACES
                </p>
                <StatusDot status="disponivel" />
              </div>
              <h2 className="font-display mt-3 text-3xl leading-10 font-semibold tracking-tight text-[#080808] sm:text-4xl sm:leading-[44px]">
                Você tem vários mundos. O EuVerso entende isso.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#262626]">
                Separe vida pessoal, projetos próprios e empresa em workspaces isolados no servidor — cada um com seus dados, memória, permissões e chaves de IA.
              </p>
            </div>
            <Link href="/workspaces" className="comic-btn-secondary">
              <span>Entender Workspaces</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {WORKSPACES_WORLDS.map((world) => (
              <article key={world.id} className="comic-panel comic-panel-interactive flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-semibold tracking-wider text-[#52525B] uppercase">
                      {world.eyebrow}
                    </span>
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-[#080808]"
                      style={{ backgroundColor: world.accent }}
                      aria-hidden="true"
                    >
                      <Layers
                        className={`h-4 w-4 ${world.accent === "#7654E8" ? "text-[#FFFFFF]" : "text-[#080808]"}`}
                      />
                    </span>
                  </div>
                  <h3 className="font-display mt-4 text-2xl leading-8 font-semibold text-[#080808]">
                    {world.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#262626]">{world.description}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-[#E4E4E7] pt-5">
                    {world.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm leading-5 text-[#080808]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#080808]" aria-hidden="true" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          06 — AGENTES
      ====================================================================== */}
      <section id="agentes" className="bg-[#FFFFFF] border-t-2 border-[#080808] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
                06 · AGENTES SUPERVISIONADOS
              </p>
              <h2 className="font-display mt-3 text-3xl leading-10 font-semibold tracking-tight text-[#080808] sm:text-4xl sm:leading-[44px]">
                Não faça tudo sozinho. Trabalhe com agentes.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#262626]">
                Capacidades reais com limites explícitos. Cada agente declara o que pode consultar, o que exige sua aprovação e o que é proibido executar.
              </p>
            </div>
            <Link href="/agentes-de-ia" className="comic-btn-secondary">
              <span>Ver todos os agentes</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {AGENTS_SHOWCASE.map((agent) => (
              <article
                key={agent.name}
                className={`comic-panel flex flex-col justify-between p-6 ${
                  agent.availability === "roadmap" ? "bg-[#F4F4F5]" : "bg-[#FFFFFF]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <StatusDot status={agent.availability} />
                  </div>
                  <h3 className="font-display mt-4 text-xl leading-7 font-semibold text-[#080808]">
                    {agent.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-semibold text-[#52525B] uppercase">
                    {agent.role}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#262626]">{agent.description}</p>
                </div>
                <div className="mt-5 rounded-xl border border-[#080808]/20 bg-[#FFF9EC] p-3 text-xs leading-5 font-semibold text-[#080808]">
                  Regra de controle: {agent.guardrail}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          07 — AUTOMAÇÕES (ILUSTRAÇÃO 03 + DA CONVERSA À EXECUÇÃO)
      ====================================================================== */}
      <section id="automacoes" className="bg-halftone-dark border-y-4 border-[#FDC616] py-20 text-[#FFFFFF] lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="flex flex-wrap items-center gap-4">
                <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#FDC616] uppercase">
                  07 · AUTOMAÇÕES
                </p>
                <StatusDot status="em_validacao" onDark />
              </div>
              <h2 className="font-display mt-3 text-3xl leading-10 font-semibold tracking-tight text-[#FFFFFF] sm:text-4xl sm:leading-[44px]">
                Da conversa à execução.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#E4E4E7]">
                Veja como uma solicitação comum se transforma em um processo estruturado, validado e supervisionado — sem caixas-pretas nem promessas irreais de autonomia ilimitada.
              </p>

              <ol className="mt-8 space-y-4">
                {AUTOMATION_PIPELINE.map((item) => (
                  <li
                    key={item.step}
                    className="flex items-start gap-4 rounded-2xl border border-[#2E2E32] bg-[#141414] p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border-2 border-[#FFFFFF] bg-[#FDC616] font-mono text-xs font-semibold text-[#080808]">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-display text-base leading-6 font-semibold text-[#FFFFFF]">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-sm leading-5 text-[#D4D4D8]">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 flex flex-wrap gap-4">
                <WhatsAppButton
                  origin="automacoes"
                  label="Conhecer Automações no WhatsApp"
                  variant="primary-on-dark"
                  extraEvent="feature_click"
                />
                <Link href="/automacoes-com-ia" className="comic-btn-secondary-on-dark">
                  <span>Ver arquitetura de automações</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Ilustração Oficial 03 — Automações e Conexões */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border-3 border-[#FDC616] bg-[#080808] p-3 shadow-[8px_8px_0_#7654E8]">
                <div className="overflow-hidden rounded-2xl">
                  <ResponsiveIllustration
                    variant="automacoes"
                    sizes="(max-width: 1024px) 100vw, 48vw"
                  />
                </div>
              </div>
              <p className="mt-4 text-xs leading-5 text-[#D4D4D8]">
                Plataforma de workflows S6 concluída em homologação controlada; consulte pelo WhatsApp a disponibilidade para a sua operação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          08 — WORKFLOW STUDIO
      ====================================================================== */}
      <WorkflowStudioShowcase />

      {/* =====================================================================
          09 — MISSION CONTROL
      ====================================================================== */}
      <MissionControlShowcase />

      {/* =====================================================================
          10 — FUNCIONALIDADES ADICIONAIS
      ====================================================================== */}
      <section id="funcionalidades-adicionais" className="bg-[#FFFFFF] border-t-2 border-[#080808] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
                10 · ECOSSISTEMA COMPLETO
              </p>
              <h2 className="font-display mt-3 text-3xl leading-10 font-semibold tracking-tight text-[#080808] sm:text-4xl sm:leading-[44px]">
                Tudo conectado no mesmo lugar — do dia a dia à governança.
              </h2>
            </div>
            <Link href="/funcionalidades" className="comic-btn-secondary">
              <span>Ver matriz completa de funcionalidades</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ADDITIONAL_FEATURES.map((feat) => {
              const Icon = feat.icon;
              return (
                <Link
                  key={feat.title}
                  href={feat.href}
                  className="comic-panel comic-panel-interactive group flex flex-col justify-between p-6"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#080808] bg-[#FDC616]">
                        <Icon className="h-5 w-5 text-[#080808]" aria-hidden="true" />
                      </span>
                      <StatusDot status={feat.status} showShort />
                    </div>
                    <h3 className="font-display mt-4 text-xl leading-7 font-semibold text-[#080808]">
                      {feat.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#262626]">{feat.text}</p>
                  </div>
                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#080808] group-hover:underline">
                    <span>Explorar detalhes</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          11 — PARA QUEM É
      ====================================================================== */}
      <section id="para-quem-e" className="bg-halftone-cream border-t-2 border-[#080808] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
              11 · PARA QUEM É
            </p>
            <h2 className="font-display mt-3 text-3xl leading-10 font-semibold tracking-tight text-[#080808] sm:text-4xl sm:leading-[44px]">
              Comece no seu ritmo — do pessoal à operação em equipe.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {AUDIENCES.map((aud) => (
              <article key={aud.id} className="comic-panel flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <div
                    className="mb-4 inline-block rounded-lg border-2 border-[#080808] px-3 py-1 font-mono text-xs font-semibold uppercase"
                    style={{
                      backgroundColor: aud.accent,
                      color: aud.accent === "#7654E8" ? "#FFFFFF" : "#080808",
                    }}
                  >
                    {aud.eyebrow}
                  </div>
                  <h3 className="font-display text-2xl leading-8 font-semibold text-[#080808]">
                    {aud.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {aud.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm leading-6 text-[#262626]">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#080808]" aria-hidden="true" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <WhatsAppButton
                    origin={aud.whatsappOrigin}
                    label={aud.ctaLabel}
                    variant="primary"
                    className="w-full text-sm"
                  />
                  <Link
                    href={aud.href}
                    className="inline-flex min-h-11 items-center justify-center gap-2 text-sm font-semibold text-[#080808] underline underline-offset-4"
                  >
                    <span>Ver página dedicada</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          12 — SEGURANÇA E CONTROLE
      ====================================================================== */}
      <section id="seguranca" className="bg-[#080808] border-y-4 border-[#FDC616] py-20 text-[#FFFFFF] lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#FDC616] uppercase">
                12 · SEGURANÇA E CONTROLE
              </p>
              <h2 className="font-display mt-3 text-3xl leading-10 font-semibold tracking-tight text-[#FFFFFF] sm:text-4xl sm:leading-[44px]">
                Inteligente para executar. Seguro para você decidir.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#E4E4E7]">
                Construído desde a base para isolar workspaces, proteger suas chaves BYOK e garantir que decisões sensíveis passem sempre pela aprovação humana.
              </p>
            </div>
            <WhatsAppButton
              origin="seguranca"
              label="Tirar dúvidas de segurança"
              variant="secondary-on-dark"
            />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SECURITY_PILLARS.map((pillar, idx) => (
              <article key={pillar.title} className="comic-panel-dark-muted p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#FDC616] bg-[#080808] text-[#FDC616]">
                    {idx % 2 === 0 ? (
                      <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <KeyRound className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                  <h3 className="font-display text-lg leading-6 font-semibold text-[#FFFFFF]">
                    {pillar.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#D4D4D8]">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          13 — PLANOS
      ====================================================================== */}
      <section id="planos" className="bg-[#FFFFFF] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
                13 · PLANOS COMERCIAIS
              </p>
              <h2 className="font-display mt-3 text-3xl leading-10 font-semibold tracking-tight text-[#080808] sm:text-4xl sm:leading-[44px]">
                Quatro formatos pensados para cada momento da sua jornada.
              </h2>
            </div>
            <Link href="/planos" className="comic-btn-secondary">
              <span>Ver página completa de Planos</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10">
            <PlansGrid showComparison />
          </div>
        </div>
      </section>

      {/* =====================================================================
          14 — FAQ
      ====================================================================== */}
      <section id="faq" className="bg-[#FFF9EC] border-t-2 border-[#080808] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
              14 · PERGUNTAS FREQUENTES
            </p>
            <h2 className="font-display mt-3 text-3xl leading-10 font-semibold tracking-tight text-[#080808] sm:text-4xl sm:leading-[44px]">
              Respostas diretas, sem letra miúda.
            </h2>
          </div>

          <div className="mt-10">
            <FaqAccordion items={HOME_FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* =====================================================================
          15 — CTA FINAL
      ====================================================================== */}
      <section className="bg-halftone-yellow border-t-4 border-[#080808] py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="comic-panel-lg bg-[#FFFFFF] px-6 py-12 sm:px-12 sm:py-16">
            <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
              EUVERSO · COMECE UMA CONVERSA REAL
            </p>
            <h2 className="font-display mx-auto mt-4 max-w-3xl text-3xl leading-10 font-semibold tracking-tight text-[#080808] sm:text-5xl sm:leading-[56px]">
              Chega de só organizar o que precisa ser feito. Comece a fazer acontecer.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#262626] sm:text-lg">
              Fale com a equipe do EuVerso pelo WhatsApp para conhecer a plataforma na prática, tirar dúvidas sobre seus workspaces e entender qual plano combina com seu momento.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <WhatsAppButton
                origin="cta-final"
                label="Conhecer o EuVerso pelo WhatsApp"
                variant="dark"
              />
              <Link href="/funcionalidades" className="comic-btn-secondary">
                <span>Explorar funcionalidades</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
