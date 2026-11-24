import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";

export const dynamic = "force-static";

const ROUTES: Array<{ path: string; priority: number; changeFrequency: "weekly" | "monthly" }> = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/funcionalidades", priority: 0.9, changeFrequency: "weekly" },
  { path: "/pulse", priority: 0.9, changeFrequency: "weekly" },
  { path: "/workspaces", priority: 0.85, changeFrequency: "weekly" },
  { path: "/agentes-de-ia", priority: 0.85, changeFrequency: "weekly" },
  { path: "/automacoes-com-ia", priority: 0.85, changeFrequency: "weekly" },
  { path: "/workflow-studio", priority: 0.85, changeFrequency: "weekly" },
  { path: "/ia-para-produtividade", priority: 0.85, changeFrequency: "weekly" },
  { path: "/ia-para-empresas", priority: 0.85, changeFrequency: "weekly" },
  { path: "/planos", priority: 0.9, changeFrequency: "weekly" },
  { path: "/contato", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_CONFIG.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
