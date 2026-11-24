import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";

export default function NotFound() {
  return (
    <section className="bg-halftone-cream py-24 lg:py-32">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <div className="comic-panel-lg bg-[#FFFFFF] p-8 sm:p-12">
          <p className="font-mono text-sm font-semibold tracking-wider text-[#52525B] uppercase">
            ERRO 404 · FORA DE ÓRBITA
          </p>
          <h1 className="font-display mt-3 text-4xl leading-tight font-semibold text-[#080808] sm:text-5xl">
            Este universo não foi encontrado.
          </h1>
          <p className="mt-4 text-base leading-7 text-[#262626]">
            A página que você tentou acessar não existe ou mudou de endereço. Volte para a página inicial ou fale com a equipe do EuVerso pelo WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="comic-btn-secondary">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Voltar ao início</span>
            </Link>
            <WhatsAppButton
              origin="contato"
              label="Falar pelo WhatsApp"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
