import Link from "next/link";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";
import { ContactWhatsAppComposer } from "@/components/shared/ContactWhatsAppComposer";

export const metadata = buildPageMetadata({
  title: "Contato — Fale com o EuVerso pelo WhatsApp",
  description:
    "Converse diretamente com a equipe do EuVerso pelo WhatsApp para conhecer o Pulse, Workspaces, Agentes, Automações e condições comerciais.",
  path: "/contato",
  keywords: ["contato EuVerso", "WhatsApp EuVerso", "demonstração EuVerso"],
});

export default function ContatoPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Início", path: "/" },
    { name: "Contato", path: "/contato" },
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
            <span>Contato</span>
          </nav>

          <p className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#080808] uppercase">
            CONVERSA DIRETA · CANAL OFICIAL
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-3xl leading-10 font-semibold tracking-tight text-[#080808] sm:text-5xl sm:leading-[56px]">
            Vamos conversar sobre os mundos que você quer organizar.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-[#262626]">
            Nosso principal canal comercial é o WhatsApp. Conte rapidamente o que você busca e seguimos direto para uma conversa prática sobre o produto.
          </p>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-8">
            <ContactWhatsAppComposer />
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <div className="comic-panel bg-[#080808] p-6 text-[#FFFFFF]">
              <p className="font-mono text-xs font-semibold tracking-wider text-[#FDC616] uppercase">
                O QUE VOCÊ PODE RESOLVER NA CONVERSA
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#E4E4E7]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#5BD8B6]" aria-hidden="true" />
                  <span>Ver como o Pulse e os Workspaces funcionam para seu perfil.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#5BD8B6]" aria-hidden="true" />
                  <span>Confirmar condições comerciais atualizadas dos 4 planos.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#5BD8B6]" aria-hidden="true" />
                  <span>Alinhar governança BYOK, permissões e automações S6.</span>
                </li>
              </ul>
            </div>

            <div className="comic-panel bg-[#FFF9EC] p-6">
              <p className="font-mono text-xs font-semibold tracking-wider text-[#080808] uppercase">
                TRANSPARÊNCIA LGPD
              </p>
              <p className="mt-2 text-sm leading-6 text-[#262626]">
                Os campos opcionais desta página servem apenas para montar o texto da sua mensagem no WhatsApp — nenhum dado é enviado a terceiros sem sua ação.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
