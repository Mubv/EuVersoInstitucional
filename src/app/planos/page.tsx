import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildPageMetadata } from "@/lib/seo";
import { PlansGrid } from "@/components/shared/PlansGrid";
import { FaqAccordion } from "@/components/shared/FaqAccordion";

export const metadata = buildPageMetadata({
  title: "Planos EuVerso — Essencial, Pro, Business e Enterprise",
  description:
    "Conheça a estrutura comercial editável do EuVerso nos formatos Essencial, Pro, Business e Enterprise e converse pelo WhatsApp para receber as condições atualizadas.",
  path: "/planos",
  keywords: [
    "planos EuVerso",
    "preço plataforma de IA",
    "plano IA pessoal e empresarial",
    "EuVerso Enterprise",
  ],
});

const PLANS_FAQ = [
  {
    question: "Os valores finais dos planos já estão publicados?",
    answer:
      "Ainda não. Os valores marcados como 'R$ XXX' são placeholders comerciais sujeitos à aprovação final. Fale conosco pelo WhatsApp para receber a condição atualizada conforme o seu perfil.",
  },
  {
    question: "Qual a principal diferença entre Essencial, Pro e Business?",
    answer:
      "O Essencial é focado em organização individual com workspace pessoal; o Pro adiciona workspaces extras, automações e templates para profissionais e empreendedores; o Business traz espaços compartilhados, permissões RBAC, automações de equipe, Mission Control e aprovações.",
  },
  {
    question: "Quando escolher o plano Enterprise?",
    answer:
      "Quando sua empresa precisa de governança avançada, avaliação técnica de integrações específicas, políticas corporativas de BYOK e desenho comercial sob consulta.",
  },
  {
    question: "Há descontos ocultos ou limites arbitrários de usuários?",
    answer:
      "Não inventamos descontos nem limites artificiais nesta proposta. Todas as condições comerciais e escopos são confirmados de forma transparente diretamente no atendimento pelo WhatsApp.",
  },
];

export default function PlanosPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Início", path: "/" },
    { name: "Planos", path: "/planos" },
  ]);
  const faqLd = buildFaqJsonLd(PLANS_FAQ);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <section className="bg-halftone-cream border-b-4 border-[#080808] pt-8 pb-16 lg:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-xs text-[#3F3F46]">
            <Link href="/" className="font-semibold text-[#080808] hover:underline">
              Início
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Planos</span>
          </nav>

          <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
            PLANOS COMERCIAIS EDITÁVEIS
          </p>
          <h1 className="font-display mt-3 max-w-4xl text-3xl leading-10 font-semibold tracking-tight text-[#080808] sm:text-5xl sm:leading-[56px]">
            Quatro planos desenhados para acompanhar do pessoal ao corporativo.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-[#262626]">
            Compare as diferenças reais entre Essencial, Pro, Business e Enterprise e fale diretamente pelo WhatsApp para alinhar a proposta ao seu caso.
          </p>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PlansGrid showComparison />
        </div>
      </section>

      <section className="bg-[#FFF9EC] border-t-2 border-[#080808] py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl leading-8 font-semibold text-[#080808] sm:text-3xl">
            Dúvidas sobre os planos
          </h2>
          <div className="mt-8">
            <FaqAccordion items={PLANS_FAQ} />
          </div>
        </div>
      </section>
    </>
  );
}
