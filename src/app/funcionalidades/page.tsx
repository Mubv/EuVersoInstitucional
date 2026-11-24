import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";
import { FeatureMatrixInteractive } from "@/components/shared/FeatureMatrixInteractive";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";

export const metadata = buildPageMetadata({
  title: "Funcionalidades e Matriz de Disponibilidade do EuVerso",
  description:
    "Explore todas as funcionalidades do EuVerso organizadas por prioridade comercial (P1, P2, P3) e status real de disponibilidade: Pulse, Workspaces, Agentes, Automações e Governança.",
  path: "/funcionalidades",
  keywords: [
    "funcionalidades EuVerso",
    "plataforma de IA contextual",
    "matriz de funcionalidades",
    "roadmap EuVerso",
  ],
});

export default function FuncionalidadesPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Início", path: "/" },
    { name: "Funcionalidades", path: "/funcionalidades" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <section className="bg-halftone-cream border-b-4 border-[#080808] pt-8 pb-16 lg:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-xs text-[#3F3F46]">
            <Link href="/" className="font-semibold text-[#080808] hover:underline">
              Início
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Funcionalidades</span>
          </nav>

          <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
            ARQUITETURA DE PRODUTO · TRANSPARÊNCIA TOTAL
          </p>
          <h1 className="font-display mt-3 max-w-4xl text-3xl leading-10 font-semibold tracking-tight text-[#080808] sm:text-5xl sm:leading-[56px]">
            Tudo o que o EuVerso entrega hoje — e o que está em validação ou roadmap.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-[#262626]">
            Filtre por prioridade comercial (P1, P2 e P3) ou por disponibilidade efetiva. Mantemos transparência absoluta: recursos em homologação S6 e agentes futuros S7 nunca são anunciados como promessas irreais.
          </p>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeatureMatrixInteractive />

          <div className="comic-panel-lg mt-14 bg-[#FDC616] p-8 text-center">
            <h2 className="font-display text-2xl leading-8 font-semibold text-[#080808] sm:text-3xl">
              Quer entender quais recursos se encaixam melhor na sua operação?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-6 text-[#080808]">
              Converse pelo WhatsApp e apresente seu cenário: mostramos exatamente o que já está ativo e como evoluir por etapas.
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppButton
                origin="funcionalidades"
                label="Conversar sobre funcionalidades no WhatsApp"
                variant="dark"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
