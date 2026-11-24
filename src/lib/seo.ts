import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";

export interface PageSeoInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = SITE_CONFIG.illustrations.hero.png,
}: PageSeoInput): Metadata {
  const normalizedPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_CONFIG.url}${normalizedPath}`;
  const absoluteOgImage = ogImage.startsWith("http") ? ogImage : `${SITE_CONFIG.url}${ogImage}`;

  return {
    title,
    description,
    keywords: [
      "EuVerso",
      "IA contextual",
      "Pulse",
      "automação de processos com IA",
      "workspaces",
      ...keywords,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: SITE_CONFIG.locale,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      title,
      description,
      images: [
        {
          url: absoluteOgImage,
          width: 1024,
          height: 576,
          alt: `${SITE_CONFIG.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteOgImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.brandAssets.logoLightFallback}`,
    description: SITE_CONFIG.tagline,
  };
}

export function buildSoftwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_CONFIG.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: "pt-BR",
    url: SITE_CONFIG.url,
    description:
      "Plataforma de inteligência artificial contextual, organização em workspaces, agentes supervisionados e automações acompanháveis.",
    featureList: [
      "Pulse com IA contextual",
      "Workspaces isolados com controle de permissões",
      "Agentes supervisionados com aprovação humana",
      "Workflow Studio e Mission Control em validação",
      "Memória em 3 níveis e governança BYOK",
    ],
  };
}

export function buildFaqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}
