import type { Metadata, Viewport } from "next";
import "@fontsource/bricolage-grotesque/400.css";
import "@fontsource/bricolage-grotesque/600.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/600.css";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site";
import { buildOrganizationJsonLd, buildSoftwareApplicationJsonLd } from "@/lib/seo";
import { WhatsAppProvider } from "@/components/conversion/WhatsAppProvider";
import { ConversionShell } from "@/components/conversion/ConversionShell";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const viewport: Viewport = {
  themeColor: SITE_CONFIG.themeColor,
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "EuVerso — Uma inteligência para organizar seus mundos e fazer acontecer",
    template: "%s | EuVerso",
  },
  description:
    "Organize seus espaços, converse com o Pulse e transforme ideias, tarefas e processos em ações acompanháveis com inteligência artificial contextual.",
  applicationName: SITE_CONFIG.name,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    siteName: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    title: "EuVerso — Uma inteligência para organizar seus mundos e fazer acontecer",
    description:
      "Plataforma de inteligência artificial contextual, workspaces isolados, agentes supervisionados e automações acompanháveis.",
    images: [
      {
        url: `${SITE_CONFIG.url}${SITE_CONFIG.illustrations.hero.png}`,
        width: 1024,
        height: 576,
        alt: SITE_CONFIG.illustrations.hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EuVerso — IA contextual para organizar seus mundos",
    description:
      "Workspaces isolados, Pulse contextual, agentes supervisionados e automações acompanháveis.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = buildOrganizationJsonLd();
  const appJsonLd = buildSoftwareApplicationJsonLd();

  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-[#FFF9EC] text-[#080808] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
        />

        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:border-2 focus:border-[#080808] focus:bg-[#FDC616] focus:px-4 focus:py-3 focus:font-semibold focus:text-[#080808]"
        >
          Pular para o conteúdo principal
        </a>

        <WhatsAppProvider>
          <SiteHeader />
          <main id="conteudo-principal">{children}</main>
          <SiteFooter />
          <ConversionShell />
        </WhatsAppProvider>
      </body>
    </html>
  );
}
