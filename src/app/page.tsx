import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  KeyRound,
  Layers,
  ShieldCheck,
  Sparkles,
  XCircle,
} from "lucide-react";
import { buildFaqJsonLd, buildPageMetadata } from "@/lib/seo";
import {
  ACTIVE_CAPABILITIES_SHOWCASE,
  HOME_FAQ_ITEMS,
  PAIN_PILLARS,
  SECURITY_PILLARS,
  SHIFT_COMPARISON,
  SPECIALIST_DOMAINS_CATALOG,
  WORKSPACES_WORLDS,
} from "@/data/home-content";
import { ResponsiveIllustration } from "@/components/ui/ResponsiveIllustration";
import { StatusDot } from "@/components/ui/StatusDot";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";
import { HeroInteractiveDemo } from "@/components/home/HeroInteractiveDemo";
import { PulseDemoSection } from "@/components/home/PulseDemoSection";
import { MeuDiaPreviewSection } from "@/components/home/MeuDiaPreviewSection";
import { MissionControlShowcase } from "@/components/home/MissionControlShowcase";
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
          04 — A DEMONSTRAÇÃO / DO PEDIDO AO RESULTADO
      ====================================================================== */}
      <section id="demonstracao" className="bg-[#FFFFFF] border-t-2 border-[#080808] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
              04 · DO PEDIDO AO RESULTADO
            </p>
            <h2 className="font-display mt-3 text-3xl leading-10 font-semibold tracking-tight text-[#080808] sm:text-4xl sm:leading-[44px]">
              Veja como uma conversa pode virar ação.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#262626]">
              Compare uma resposta genérica de chat com um fluxo estruturado no EuVerso. Cada exemplo abaixo sinaliza honestamente o estágio atual do recurso na plataforma.
            </p>
          </div>

          <div className="mt-10">
            <HeroInteractiveDemo />
          </div>
        </div>
      </section>

      {/* =====================================================================
          05 — PULSE / COMO FUNCIONA SEM JARGÃO (+ PUV REPOSICIONADA)
      ====================================================================== */}
      <PulseDemoSection />

      {/* =====================================================================
          06 — CATÁLOGO / AGENTES PRAGMÁTICOS (HONESTIDADE PROD vs. S7)
      ====================================================================== */}
      <section id="agentes" className="bg-[#FFFFFF] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
                06 · ESPECIALISTAS POR DOMÍNIO
              </p>
              <h2 className="font-display mt-3 text-3xl leading-10 font-semibold tracking-tight text-[#080808] sm:text-4xl sm:leading-[44px]">
                Um especialista para cada tipo de necessidade.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#262626]">
                Em vez de um chat genérico tentando fazer tudo, o EuVerso combina capacidades ativas hoje com novos especialistas em evolução na etapa S7 — sempre com status real e limites claros.
              </p>
            </div>
            <Link href="/agentes-de-ia" className="comic-btn-secondary">
              <span>Ver detalhes dos especialistas</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Bloco A: Capacidades ativas na plataforma */}
          <div className="mt-10">
            <p className="font-mono text-xs font-semibold tracking-wider text-[#52525B] uppercase">
              ATIVOS NA PLATAFORMA HOJE (PROD / PILOTO CONTROLADO S6)
            </p>
            <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {ACTIVE_CAPABILITIES_SHOWCASE.map((item) => (
                <article
                  key={item.name}
                  className="comic-panel comic-panel-interactive flex flex-col justify-between bg-[#FFFFFF] p-6"
                >
                  <div>
                    <StatusDot status={item.availability} showShort />
                    <h3 className="font-display mt-4 text-lg leading-6 font-semibold text-[#080808]">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#262626]">{item.outcome}</p>
                  </div>
                  <div className="mt-4 rounded-xl border border-[#080808]/20 bg-[#FFF9EC] p-3 text-xs leading-5 font-semibold text-[#080808]">
                    {item.guardrail}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bloco B: Catálogo de especialistas em evolução (S7 / Roadmap) */}
          <div className="mt-12">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-mono text-xs font-semibold tracking-wider text-[#52525B] uppercase">
                CATÁLOGO DE ESPECIALISTAS EM EVOLUÇÃO (ETAPA S7 &amp; ROADMAP — NÃO PUBLICADOS EM PROD)
              </p>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SPECIALIST_DOMAINS_CATALOG.map((spec) => (
                <article
                  key={spec.id}
                  className={`rounded-2xl border-2 border-[#080808] p-5 ${
                    spec.availability === "roadmap" ? "bg-[#F4F4F5]" : "bg-[#FFF9EC]/70"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-lg leading-6 font-semibold text-[#080808]">
                      {spec.name}
                    </h3>
                    <StatusDot status={spec.availability} showShort />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#262626]">{spec.outcome}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Segunda mensagem obrigatória sobre skills */}
          <div className="mt-10 rounded-2xl border-2 border-[#080808] bg-[#FDC616] px-6 py-5 shadow-[4px_4px_0_#080808]">
            <p className="font-display text-center text-lg leading-7 font-semibold text-[#080808] sm:text-xl">
              Os especialistas ganham novas capacidades com skills — sem trocar de assistente.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          07 — WORKSPACES / SEUS CONTEXTOS (4 CONTEXTOS UNIFICADOS)
      ====================================================================== */}
      <section id="workspaces" className="bg-[#FFF9EC] border-t-2 border-[#080808] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-4">
                <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
                  07 · WORKSPACES ISOLADOS
                </p>
                <StatusDot status="disponivel" />
              </div>
              <h2 className="font-display mt-3 text-3xl leading-10 font-semibold tracking-tight text-[#080808] sm:text-4xl sm:leading-[44px]">
                Sua vida tem vários contextos. O EuVerso também.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#262626]">
                Separe Pessoal, Trabalho, Projetos e Clientes em workspaces isolados no servidor — cada um com seus próprios dados, configurações, memória e permissões, sem vazamento entre espaços.
              </p>
            </div>
            <Link href="/workspaces" className="comic-btn-secondary">
              <span>Entender Workspaces</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WORKSPACES_WORLDS.map((world) => (
              <article
                key={world.id}
                className="comic-panel comic-panel-interactive flex flex-col justify-between p-6"
              >
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
                        className={`h-4 w-4 ${
                          world.accent === "#7654E8" ? "text-[#FFFFFF]" : "text-[#080808]"
                        }`}
                      />
                    </span>
                  </div>
                  <h3 className="font-display mt-4 text-xl leading-7 font-semibold text-[#080808]">
                    {world.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#262626]">{world.description}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-[#E4E4E7] pt-5">
                    {world.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm leading-5 text-[#080808]">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#080808]"
                          aria-hidden="true"
                        />
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
          08 — MEU DIA / DASHBOARD PESSOAL (PRÉVIA S7)
      ====================================================================== */}
      <MeuDiaPreviewSection />

      {/* =====================================================================
          09 — MISSION CONTROL
      ====================================================================== */}
      <MissionControlShowcase />

      {/* =====================================================================
          10 — SEGURANÇA E CONTROLE (SERÁ REFINADA EM W4)
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
          11 — FAQ (SERÁ FUNDIDA COM CTA FINAL EM W4)
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
