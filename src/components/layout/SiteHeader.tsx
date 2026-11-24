"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MAIN_NAV_LINKS, SITE_CONFIG } from "@/config/site";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-[#080808] bg-[#FFF9EC]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="EuVerso — Página inicial"
          className="inline-flex items-center rounded-xl py-1 focus-visible:outline-[#7654E8]"
        >
          <picture>
            <source srcSet={SITE_CONFIG.brandAssets.logoLight} type="image/webp" />
            <img
              src={SITE_CONFIG.brandAssets.logoLightFallback}
              alt="Logo oficial EuVerso"
              width={162}
              height={48}
              className="h-9 w-auto object-contain sm:h-10"
            />
          </picture>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-2 lg:flex">
          {MAIN_NAV_LINKS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex min-h-11 items-center rounded-xl px-4 text-sm leading-5 font-semibold transition ${
                  active
                    ? "border-2 border-[#080808] bg-[#FDC616] text-[#080808]"
                    : "border-2 border-transparent text-[#080808] hover:border-[#080808] hover:bg-[#FFFFFF]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton
            origin="header"
            label="Conhecer pelo WhatsApp"
            variant="dark"
            className="text-sm"
          />
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#080808] bg-[#FFFFFF] text-[#080808] shadow-[3px_3px_0_#080808] lg:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="border-t-2 border-[#080808] bg-[#FFF9EC] px-4 py-6 lg:hidden"
        >
          <nav aria-label="Navegação móvel" className="flex flex-col gap-2">
            {MAIN_NAV_LINKS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex min-h-12 items-center rounded-xl border-2 px-4 text-base font-semibold ${
                    active
                      ? "border-[#080808] bg-[#FDC616] text-[#080808]"
                      : "border-[#080808]/15 bg-[#FFFFFF] text-[#080808]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6">
            <WhatsAppButton
              origin="header"
              label="Conhecer pelo WhatsApp"
              variant="primary"
              className="w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
}
