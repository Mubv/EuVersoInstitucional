import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck } from "lucide-react";
import type { SeoLandingPageData } from "@/data/seo-pages";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";
import { ResponsiveIllustration } from "@/components/ui/ResponsiveIllustration";
import { StatusDot } from "@/components/ui/StatusDot";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";
import { FaqAccordion } from "@/components/shared/FaqAccordion";

export function SeoLandingTemplate({ page }: { page: SeoLandingPageData }) {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Início", path: "/" },
    { name: page.navTitle, path: `/${page.slug}` },
  ]);
  const faqJsonLd = buildFaqJsonLd(page.faq);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero da página SEO */}
      <section className="bg-halftone-cream border-b-4 border-[#080808] pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-xs text-[#3F3F46]">
            <Link href="/" className="font-semibold text-[#080808] hover:underline">
              Início
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{page.navTitle}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className={page.illustrationKey ? "lg:col-span-7" : "lg:col-span-10"}>
              <div className="flex flex-wrap items-center gap-4">
                <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
                  {page.eyebrow}
                </p>
                <StatusDot status={page.availability} />
              </div>

              <h1 className="font-display mt-4 text-3xl leading-10 font-semibold tracking-tight text-[#080808] sm:text-5xl sm:leading-[56px]">
                {page.h1}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-7 text-[#262626]">{page.subtitle}</p>

              <div className="mt-5 rounded-xl border-2 border-[#080808] bg-[#FFFFFF] px-4 py-3 text-sm leading-5 text-[#262626]">
                <strong className="font-semibold text-[#080808]">Status real:</strong>{" "}
                {page.availabilityNote}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
                <WhatsAppButton
                  origin={page.whatsappOrigin}
                  label={page.ctaLabel}
                  variant="primary"
                  extraEvent="feature_click"
                />
                <Link href="/planos" className="comic-btn-secondary">
                  <span>Ver planos</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {page.illustrationKey && (
              <div className="lg:col-span-5">
                <div className="comic-panel-lg overflow-hidden bg-[#080808] p-3">
                  <div className="overflow-hidden rounded-2xl">
                    <ResponsiveIllustration
                      variant={page.illustrationKey}
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Problema que resolve */}
      <section className="bg-[#FFFFFF] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs font-semibold tracking-wider text-[#52525B] uppercase">
                O CENÁRIO ATUAL
              </p>
              <h2 className="font-display mt-2 text-2xl leading-8 font-semibold text-[#080808] sm:text-3xl sm:leading-10">
                {page.problemStatement.title}
              </h2>
            </div>
            <div className="space-y-4 lg:col-span-7">
              {page.problemStatement.points.map((point) => (
                <div key={point} className="comic-panel p-5">
                  <p className="text-base leading-6 text-[#080808]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pilares da solução */}
      <section className="bg-[#FFF9EC] border-t-2 border-[#080808] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl leading-8 font-semibold text-[#080808] sm:text-3xl sm:leading-10">
            Como o EuVerso resolve na prática
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {page.solutionPillars.map((pillar) => (
              <article key={pillar.title} className="comic-panel flex flex-col justify-between p-6">
                <div>
                  <span
                    className="inline-block rounded-lg border-2 border-[#080808] px-3 py-1 font-mono text-xs font-semibold uppercase"
                    style={{
                      backgroundColor: page.accentColor,
                      color: page.accentColor === "#7654E8" ? "#FFFFFF" : "#080808",
                    }}
                  >
                    {pillar.highlight}
                  </span>
                  <h3 className="font-display mt-4 text-xl leading-7 font-semibold text-[#080808]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#262626]">{pillar.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Demonstração guiada (exemplo simulado) */}
      <section className="bg-[#080808] border-y-4 border-[#FDC616] py-16 text-[#FFFFFF] lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="comic-panel-dark p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-mono text-xs font-semibold tracking-wider text-[#FDC616] uppercase">
                {page.demoExample.badge}
              </p>
              <ShieldCheck className="h-5 w-5 text-[#5BD8B6]" aria-hidden="true" />
            </div>
            <h2 className="font-display mt-3 text-2xl leading-8 font-semibold text-[#FFFFFF]">
              {page.demoExample.title}
            </h2>

            <div className="mt-5 rounded-xl border border-[#2E2E32] bg-[#080808] p-4">
              <p className="font-mono text-xs text-[#A1A1AA] uppercase">Entrada de exemplo</p>
              <p className="mt-1 text-base leading-6 font-semibold text-[#FFFFFF]">
                &ldquo;{page.demoExample.input}&rdquo;
              </p>
            </div>

            <ol className="mt-6 space-y-3">
              {page.demoExample.steps.map((step) => (
                <li key={step} className="flex items-start gap-3 text-sm leading-6 text-[#E4E4E7]">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#5BD8B6]" aria-hidden="true" />
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-xl border-2 border-[#FDC616] bg-[#FDC616] p-4 text-[#080808]">
              <p className="font-mono text-xs font-semibold uppercase">Resultado estruturado</p>
              <p className="mt-1 text-sm leading-6 font-semibold">{page.demoExample.result}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ específica da página */}
      <section className="bg-[#FFFFFF] py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl leading-8 font-semibold text-[#080808] sm:text-3xl sm:leading-10">
            Perguntas frequentes sobre {page.navTitle}
          </h2>
          <div className="mt-8">
            <FaqAccordion items={page.faq} />
          </div>
        </div>
      </section>

      {/* Links internos + CTA */}
      <section className="bg-[#FFF9EC] border-t-2 border-[#080808] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl leading-8 font-semibold text-[#080808]">
            Continue explorando o EuVerso
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {page.relatedLinks.map((rel) => (
              <Link
                key={rel.href}
                href={rel.href}
                className="comic-panel comic-panel-interactive p-6"
              >
                <p className="font-display text-lg font-semibold text-[#080808]">{rel.label}</p>
                <p className="mt-2 text-sm leading-5 text-[#262626]">{rel.summary}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#080808]">
                  <span>Acessar</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </p>
              </Link>
            ))}
          </div>

          <div className="comic-panel-lg mt-12 bg-[#FDC616] p-8 text-center">
            <h2 className="font-display text-2xl leading-8 font-semibold text-[#080808] sm:text-3xl">
              Quer ver {page.navTitle} aplicado à sua realidade?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-6 text-[#080808]">
              Converse diretamente pelo WhatsApp e entenda como começar no EuVerso com segurança e clareza.
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppButton
                origin={page.whatsappOrigin}
                label={page.ctaLabel}
                variant="dark"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
