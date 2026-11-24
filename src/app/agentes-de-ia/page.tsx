import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/config/site";
import { SeoLandingTemplate } from "@/components/shared/SeoLandingTemplate";

const page = SEO_PAGES["agentes-de-ia"];

export const metadata = buildPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
  keywords: page.keywords,
  ogImage: SITE_CONFIG.illustrations.automacoes.png,
});

export default function AgentesDeIaPage() {
  return <SeoLandingTemplate page={page} />;
}
