import Link from "next/link";
import { FOOTER_NAV_GROUPS, SITE_CONFIG } from "@/config/site";
import { COMMERCIAL_PLANS_NOTICE } from "@/config/plans";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-[#FDC616] bg-[#080808] pb-24 text-[#FFFFFF] md:pb-12">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" aria-label="EuVerso — Voltar ao início" className="inline-block">
              <picture>
                <source srcSet={SITE_CONFIG.brandAssets.logoDark} type="image/webp" />
                <img
                  src={SITE_CONFIG.brandAssets.logoDarkFallback}
                  alt="Logo oficial EuVerso em fundo escuro"
                  width={180}
                  height={55}
                  className="h-11 w-auto object-contain"
                />
              </picture>
            </Link>
            <p className="font-display mt-6 max-w-md text-xl leading-7 font-semibold text-[#FFFFFF]">
              {SITE_CONFIG.tagline}
            </p>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#D4D4D8]">
              Plataforma de inteligência artificial contextual, workspaces isolados, agentes supervisionados e automações acompanháveis para vida pessoal, projetos e empresas.
            </p>

            <div className="mt-6 rounded-xl border border-[#333333] bg-[#141414] p-4">
              <p className="font-mono text-xs font-semibold tracking-wider text-[#FDC616] uppercase">
                TRANSPARÊNCIA COMERCIAL
              </p>
              <p className="mt-2 text-xs leading-5 text-[#E4E4E7]">
                {COMMERCIAL_PLANS_NOTICE} Recursos marcados como &ldquo;Em validação&rdquo; ou &ldquo;Roadmap&rdquo; refletem o estágio real de evolução do produto.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h2 className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#FDC616] uppercase">
              PRODUTO &amp; FUNCIONALIDADES
            </h2>
            <ul className="mt-4 space-y-2">
              {FOOTER_NAV_GROUPS.produto.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-10 items-center text-sm leading-5 text-[#E4E4E7] transition hover:text-[#FDC616]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-mono text-[13px] leading-4 font-semibold tracking-wider text-[#FDC616] uppercase">
              SOLUÇÕES &amp; COMERCIAL
            </h2>
            <ul className="mt-4 space-y-2">
              {FOOTER_NAV_GROUPS.solucoes.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-10 items-center text-sm leading-5 text-[#E4E4E7] transition hover:text-[#FDC616]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SITE_CONFIG.appUrl}
                  className="inline-flex min-h-10 items-center text-sm leading-5 font-semibold text-[#FDC616] transition hover:underline"
                >
                  Entrar na plataforma (app.euverso.com)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#262626] pt-8 text-xs leading-5 text-[#A1A1AA] sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {SITE_CONFIG.name}. Todos os direitos reservados.
          </p>
          <p>
            IA contextual com supervisão humana · APIs oficiais · Isolamento multi-workspace
          </p>
        </div>
      </div>
    </footer>
  );
}
