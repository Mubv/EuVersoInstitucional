import { SEO_PAGES } from "@/data/seo-pages";
import { buildPageMetadata } from "@/lib/seo";
import { SeoLandingTemplate } from "@/components/shared/SeoLandingTemplate";

const page = SEO_PAGES["ia-para-produtividade"];

export const metadata = buildPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
  keywords: page.keywords,
});

export default function IaParaProdutividadePage() {
  return <SeoLandingTemplate page={page} />;
}
